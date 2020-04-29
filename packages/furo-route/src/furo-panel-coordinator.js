import { LitElement } from 'lit-element';
import { FBP } from '@furo/fbp';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';
import { panelRegistry } from './lib/panelRegistry.js';

/**
 * `furo-panel-coordinator`
 *
 *
 * @summary Complex content switcher based on furo-tree
 * @customElement
 * @demo demo-furo-panel-coordinator with deep link
 * @appliesMixin FBP
 */
class FuroPanelCoordinator extends FBP(LitElement) {
  constructor() {
    super();
    // array of navigation nodes
    this._openPanels = [];
    // array of panel names
    this._loadedPanels = [];
    this._furoPage = this.parentNode;
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
  }

  _notifiyOpenPanels() {
    /**
     * @event controls-ready
     * Fired when Controls for panels are ready, initially it starts with an empty set
     *
     * detail payload: RepeaterNode with navigation nodes
     */
    const customEvent = new Event('panels-changed', { composed: true, bubbles: true });
    customEvent.detail = this._openPanels;
    this.dispatchEvent(customEvent);
  }

  /**
   * Loads and shows the page based on the NavigationNode
   *
   * @param NavigationNode
   * @return {Promise<void>}
   */
  async showPage(NavigationNode) {
    const panelName = `P${NavigationNode.id._value}`;

    if (this._loadedPanels.indexOf(panelName) === -1) {
      const panelComponent = panelRegistry.getPanelName(
        NavigationNode.link.type._value,
        NavigationNode.panel._value,
      );
      if (panelComponent) {
        // create element and set name,...
        const panel = document.createElement(panelComponent);
        if (panel.closePanel) {
          panel.setAttribute('name', panelName);
          panel.setAttribute('hidden', '');
          panel._TreeNode = NavigationNode;

          panel.removePanel = () => {
            this._removeNodeById(NavigationNode.id._value);
          };
          this._loadedPanels.push(panelName);
          this._openPanels.push(NavigationNode);
          this._furoPage.appendChild(panel);

          await panel.updateComplete;
          // trigger the --navNode wire on panel
          if (panel._FBPTriggerWire) {
            panel._FBPTriggerWire('--navNode', NavigationNode);
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn(
            'panel does not have a closePanel method, implement panel interfaces or extend from BasePanel.js',
          );
        }
      } else {
        // eslint-disable-next-line no-console
        console.warn(
          NavigationNode.link.type._value,
          NavigationNode.panel._value,
          'is not in the registry',
          this,
        );
      }
    }

    // activate the panel
    this._notifiyOpenPanels();
    this._furoPage.activatePage(panelName);
  }

  /**
   * closes all open panels
   */
  closeAll() {
    this._openPanels.forEach(panel => {
      panel.dispatchNodeEvent(new NodeEvent('close-requested', this, false));
    });
  }

  /**
   * closes all open panels without asking
   */
  forceCloseAll() {
    this._openPanels.forEach(panel => {
      this._removeNodeById(panel.id._value);
    });
  }

  /**
   * removes a panel from the view
   * @param nodeName
   * @private
   */
  _removeNodeById(id) {
    const nodeName = `P${id}`;
    // remove from dom
    const e = this._furoPage.querySelector(`*[name=${nodeName}]`);

    e.remove();

    // remove from flat tree
    this._openPanels = this._openPanels.filter(node => `P${node.id._value}` !== nodeName);

    // remove from laoded panels array
    this._loadedPanels = this._loadedPanels.filter(value => value !== nodeName);

    if (this._openPanels.length > 0) {
      // only when there is no selected navigation node
      if (this._openPanels.every(node => node._isSelected === false)) {
        // select item with same index
        this._openPanels[this._openPanels.length - 1].selectItem();
      }
    } else {
      // enable default page
      this._furoPage.activatePage('overview');
    }
    this._notifiyOpenPanels();
  }
}

window.customElements.define('furo-panel-coordinator', FuroPanelCoordinator);
