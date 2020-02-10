import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {panelRegistry} from "./lib/panelRegistry";
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"

/**
 * `furo-panel-coordinator`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-panel-coordinator Basic usage
 * @appliesMixin FBP
 */
class FuroPanelCoordinator extends FBP(LitElement) {

  constructor() {
    super();
    this._openPanels = [];
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
    let customEvent = new Event('panels-changed', {composed: true, bubbles: true});
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
    let panelName = "P" + NavigationNode.id._value;

    if (this._openPanels.indexOf(NavigationNode) === -1) {
      let panelComponent = panelRegistry.getPanelName(NavigationNode.link.type._value, NavigationNode.panel._value);
      if (panelComponent) {
        //create element and set name,...
        let panel = document.createElement(panelComponent);
        if (panel.closePanel) {
          panel.setAttribute("name", panelName);
          panel.setAttribute("hidden", "");
          panel._TreeNode = NavigationNode;

          panel.removePanel = () => {
            this._removeNodeById(NavigationNode.id._value);
          };
          this._openPanels.push(NavigationNode);
          this._furoPage.appendChild(panel);

          await panel.updateComplete;
          // trigger the --navNode wire on panel
          if (panel._FBPTriggerWire) {
            panel._FBPTriggerWire("--navNode", NavigationNode);
          }
        }else{
          console.warn("panel does not have a closePanel method, implement panel interfaces or extend from BasePanel.js")
        }

      } else {
        console.warn(NavigationNode.link.type._value, NavigationNode.panel._value, "is not in the registry", this);
      }
    }

    // activate the panel
    this._notifiyOpenPanels();
    this._furoPage.activatePage(panelName);


  }


  /**
   * closes all open panels
   */
  closeAll(event) {
    this._openPanels.forEach((panel) => {
      panel.dispatchNodeEvent(new NodeEvent('close-requested', this, false));
    });
  }

  /**
   * closes all open panels without asking
   */
  forceCloseAll(event) {
    this._openPanels.forEach((panel) => {
      this._removeNodeById(panel.id._value);

    });
  }

  /**
   * removes a panel from the view
   * @param nodeName
   * @private
   */
  _removeNodeById(id) {
    let nodeName = "P" + id;
    // remove from dom
    let e = this._furoPage.querySelector("*[name=" + nodeName + "]");

    e.remove();

    // remove from flat tree
    this._openPanels = this._openPanels.filter((node, index) => {
      return "P" + node.id._value !== nodeName;
    });

    if (this._openPanels.length > 0) {
      // select item with same index
      this._openPanels[this._openPanels.length - 1].selectItem();
    } else {
      //enable default page
      this._furoPage.activatePage("overview");
    }
    this._notifiyOpenPanels();
  }

}

window.customElements.define('furo-panel-coordinator', FuroPanelCoordinator);
