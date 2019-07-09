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
 * @demo demo/panel-coordinator.html
 * @appliesMixin FBP
 */
class FuroPanelCoordinator extends FBP(LitElement) {

  constructor() {
    super();
    this._openPanels = [];
    this._furoPage = this.parentNode;
    this._flatTree = [];


    /**
     * the Query param you use for the active page. ap stands for active panel. If it conflicts with your naming, change this property
     * @type {string}
     */
    this.queryTag = this.getAttribute("query-tag") || "ap";

    /**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /app/ do:
     *     url-space-regex="^/app/"
     *
     * @type {string|RegExp}
     */
    this.urlSpaceRegex = this.getAttribute("url-space-regex") || "";


    this._FBPAddWireHook("--locationChanged", (e) => {
      this._handleDeepLink(e);
    });
  }


  bindTreeEntity(entityNode) {
    this._tree = entityNode;

    /**
     * set the query param for the active page.
     */
    this._tree.addEventListener("tree-node-selected", (e) => {
      let nodeID = e.detail.id.value;
      let newQuery = window.location.search.slice(1);
      let queryObject = {};
      if (newQuery.length > 0) {
        newQuery.split("&").forEach((qstr, i, a) => {
          let p = qstr.split("=");
          queryObject[p[0]] = p[1];
        });
      }
      queryObject[this.queryTag] = "P" + nodeID;
      let qp = [];
      for (let segment in queryObject) {
        if (queryObject.hasOwnProperty(segment)) {
          qp.push(segment + "=" + queryObject[segment])
        }
      }
      // notify furo location
      window.history.pushState({}, '', window.location.pathname + "?" + qp.join("&") + window.location.hash);
      let now = window.performance.now();
      let customEvent = new Event('__furoLocationChanged', {composed: true, bubbles: true});
      customEvent.detail = now;
      this.dispatchEvent(customEvent)
    });

    this._tree.addEventListener("data-injected", (e) => {
      this._initTree()
    });

    this._initTree()
  }

  _initTree() {
    this._flatTree = [this._tree.fields];
    if (this._tree.fields.children.repeats.length > 0) {
      this._parseTreeRecursive(this._tree.fields);

      if (this._flatTree.length > 0 && this._queueLocation) {
        this._handleDeepLink(this._queueLocation);
        this._queueLocation = undefined;
      }
    }
  }

  _parseTreeRecursive(tree) {

    tree.children.repeats.forEach((node) => {
      this._flatTree.push(node);

      if (node.children.repeats.length > 0) {
        this._parseTreeRecursive(node)
      }
    });
  }

  _handleDeepLink(location) {
    if (location.query[this.queryTag]) {
      if (this._flatTree.length > 0) {
        let nodes = this._flatTree.filter((n) => {
          return ("P" + n.id.value === location.query.ap)
        });
        if (nodes[0].link) {
          // Mark Tree node
          setTimeout(() => {
            let node = nodes[0];
            node.dispatchNodeEvent(new NodeEvent('this-node-selected', node, false));
            // used to open the paths upwards from the selected node
            node.__parentNode.dispatchNodeEvent(new NodeEvent('descendant-selected', this, true));
            if (node.triggerHover) {
              node.triggerHover();
            }

          }, 150);
          this._activatePanelForNode(nodes[0]);

        }
      } else {
        this._queueLocation = location;
      }

    }
  }

  /**
   * closes all open panels
   */
  closeAll(event) {
    this._openPanels.forEach((panel) => {
      panel.dispatchNodeEvent(new NodeEvent('close-requested', this, false));
    })

  }

  /**
   * removes a panel from the view
   * @param nodeName
   * @private
   */
  _removeNodeByName(nodeName) {
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

      // update query params by removing the queryTag
      let newQuery = window.location.search.slice(1);
      let queryObject = {};
      if (newQuery.length > 0) {
        newQuery.split("&").forEach((qstr, i, a) => {
          let p = qstr.split("=");
          queryObject[p[0]] = p[1];
        });
      }

      delete (queryObject[this.queryTag]);
      let qp = [];
      for (let segment in queryObject) {
        if (queryObject.hasOwnProperty(segment)) {
          qp.push(segment + "=" + queryObject[segment])
        }
      }
      // notify furo location
      window.history.pushState({}, '', window.location.pathname + "?" + qp.join("&") + window.location.hash);
      let now = window.performance.now();
      let customEvent = new Event('__furoLocationChanged', {composed: true, bubbles: true});
      customEvent.detail = now;
      this.dispatchEvent(customEvent)
      // -- update query params


    }

    /**
     * @event panel-changed
     * Fired when a panel was opened or is closed
     * detail payload: array with open panels
     */
    let customEvent = new Event('panel-changed', {composed: true, bubbles: false});
    customEvent.detail = this._openPanels;
    this.dispatchEvent(customEvent);

    /**
     * @event panel-opened
     * Fired when a panel was  closed
     * detail payload: array with open panels
     */
    let closedEvent = new Event('panel-closed', {composed: true, bubbles: false});
    closedEvent.detail = this._openPanels;
    this.dispatchEvent(closedEvent);
  }

  _activatePanelForNode(node) {
    let name = node.id.value;
    // register node
    if (this._openPanels.indexOf(node) === -1) {
      let panelComponent = panelRegistry.getPanelName(node.link.type.value);
      if (panelComponent) {
        //create element and set name,...
        let panel = document.createElement(panelComponent);
        let panelName = "P" + name;
        panel.setAttribute("name", panelName);
        panel._TreeNode = node;
        panel.removePanel = () => {
          this._removeNodeByName(panelName);
        }
        this._openPanels.push(node);
        this._furoPage.appendChild(panel);


        /**
         * @event panel-changed
         * Fired when a panel was opened or is closed
         * detail payload: array with open panels
         */
        let customEvent = new Event('panel-changed', {composed: true, bubbles: false});
        customEvent.detail = this._openPanels;
        this.dispatchEvent(customEvent);

        /**
         * @event panel-opened
         * Fired when a panel was opened
         * detail payload: array with open panels
         */
        let openedEvent = new Event('panel-opened', {composed: true, bubbles: false});
        openedEvent.detail = this._openPanels;
        this.dispatchEvent(openedEvent);


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


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-location @-location-changed="--locationChanged"  url-space-regex="${this.urlSpaceRegex}"></furo-location>
    `;
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }
}

window.customElements.define('furo-panel-coordinator', FuroPanelCoordinator);
