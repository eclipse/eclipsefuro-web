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
    this.dispatchEvent(customEvent)
  }

  async showPage(NavigationNode) {
    let panelName = "P" + NavigationNode.id.value;
    if (this._openPanels.indexOf(NavigationNode) === -1) {

      let panelComponent = panelRegistry.getPanelName(NavigationNode.link.type.value, NavigationNode.panel.value);
      if (panelComponent) {
        //create element and set name,...
        let panel = document.createElement(panelComponent);
        if (panel.closePanel) {
          panel.setAttribute("name", panelName);
          panel.setAttribute("hidden", "");
          panel._TreeNode = NavigationNode;

          panel.removePanel = () => {
            this._removeNodeById(NavigationNode.id.value);
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
        console.warn(NavigationNode.link.type.value, NavigationNode.panel.value, "is not in the registry", this);
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
      return "P" + node.id.value !== nodeName;
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

  _activatePanelForNode(node) {
    let name = node.id.value;
    // register node
    if (this._openPanels.indexOf(node) === -1) {

      let panelComponent = panelRegistry.getPanelName(node.link.type.value, this._panel);
      if (panelComponent) {
        //create element and set name,...
        let panel = document.createElement(panelComponent);
        let panelName = "P" + name;
        panel.setAttribute("name", panelName);
        panel._TreeNode = node;
        panel.removePanel = () => {
          this._removeNodeByName(panelName);
        };
        this._openPanels.push(node);
        this._furoPage.appendChild(panel);


      } else {
        console.warn(node.link.type.value, "is not in the registry", this);
      }
    }


    // microtask
    setTimeout(() => {
      let currentPanel = this._furoPage.activatePage("P" + name);
      if (currentPanel && currentPanel._FBPTriggerWire !== undefined) {


        if (!currentPanel.__panelInitSent) {
          currentPanel._FBPTriggerWire('--panelInit', node.link.value);
          currentPanel._FBPTriggerWire('--treeNode', node);
          currentPanel.__panelInitSent = true;
        }
        currentPanel._FBPTriggerWire('--panelActivated', node.link.value);
      }
    }, 0);


  }

}

window.customElements.define('furo-panel-coordinator', FuroPanelCoordinator);
