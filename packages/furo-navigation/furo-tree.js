import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import {FieldNode} from "@furo/data/lib/FieldNode";
import "@furo/layout/furo-vertical-flex";
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"
import "./furo-tree-item"

/**
 * `furo-tree` renders a tree,
 *
 * @summary tree menu
 * @customElement
 * @demo demo-furo-tree Basic usage
 * @demo demo-furo-tree-qp Working with query params
 * @appliesMixin FBP
 */
class FuroTree extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * Flat list representation of the tree
     * @type {Array}
     * @private
     */
    this._flatTree = [];
    /**
     *
     * @type {number}
     */
    this.tabindex = 0;
    this._searchTerm = "";
    /**
     *
     * @type {number}
     */
    this.expandDepth = 2;
    this._searchIsActive = false;
    /**
     * If you want to use a custom component for the tree-item, set this attribute.
     * The default item component is **furo-tree-item**.
     *
     * @type {*|string|string}
     */
    this.treeItemComponent = this.getAttribute("tree-item-component") || "furo-tree-item";
    this._treeItemTepmplate = html([['<', this.treeItemComponent, ' ƒ-bind-data="--itemInjected(*.item)" ƒ-search="--trigger"></', this.treeItemComponent, '>'].join('')]);

  }

  /**
   * collapses the focused element. If it is closed the parent will be focused.
   */
  collapseFocused() {
// close when opened, parent when closed
    if (!this._focusedField.isBranch() && this._focusedField.open._value) {
      this._focusedField.toggleOpenClose();
    } else {
      this._focusHome();
    }
  }

  /**
   * expands the focused node, if it is opened the first child will be focused
   */
  expandFocused() {
  // open when closed, next when opened
    if (!this._focusedField.isBranch() && !this._focusedField.open._value) {
      this._focusedField.toggleOpenClose();
    } else {
      this.focusNext();
    }
  }

  /**
   * expands the focused node recursive
   */
  expandFocusedRecursive() {
    this._focusedField.expandRecursive();
  }

  /**
   * collapses the focused node recursive
   */
  collapseFocusedRecursive() {
    this._focusedField.collapseRecursive();
  }

  /**
   * selects the focused element.
   */
  selectFocused() {
    this._focusedField.selectItem();
  }

  /**
   * Search in the visible nodes
   * @param term
   * @return {[]}
   */
  search(term) {
    let res = []
    if (term.length > 1) {
      this._searchTerm = term;
      this.searchOpenTree();
    } else {
      this._resetSearch();
    }
    return this._foundSearchItems;
  }

  searchOpenTree() {
    this._searchIsActive = true;
    let d = {term: this._searchTerm, results: []};
    this._foundSearchItems = d.results;
    this._FBPTriggerWire("--searchRequested", d);

    // select first result
    if (d.results.length > 0) {
      d.results[0].triggerFocus();
    }
    this._updateSearchmatchAttributesOnItems();
    this.requestUpdate();
  }

  _resetSearch() {
    this._searchIsActive = false;
    this._searchTerm = "";
    this._foundSearchItems = [];
    this._updateSearchmatchAttributesOnItems();
  }

  _updateSearchmatchAttributesOnItems() {
    this._rootNode.broadcastEvent(new NodeEvent('search-didnt-match', this._rootNode, true));
    this._foundSearchItems.map((node) => {
      node.dispatchNodeEvent(new NodeEvent('search-matched', this._rootNode, false));
    })
  }

  _focusHome() {
    let parent = this._focusedField.getParentElement();
    if (parent.triggerFocus) {
      parent.triggerFocus();
    }
  }

  /**
   * focus the previous item
   */
  focusPrevious() {
    let prev;
    if (this._searchIsActive) {
      for (let i = 0; i < this._foundSearchItems.length; i++) {
        if (this._foundSearchItems[i].__flatTreeIndex >= this._focusedField.__flatTreeIndex) {
          prev = this._foundSearchItems[i - 1];
          break;
        }

      }
      // select last
      if (!prev) {
        prev = this._foundSearchItems[this._foundSearchItems.length - 1];
      }
    } else {
      prev = this._focusedField.getPrevElement();
    }

    if (prev) {
      prev.triggerFocus();
    }
  }

  qpIn(qpObject) {
    if (qpObject[this.qp]) {
      this.selectById(qpObject[this.qp]);
    }
  }

  /**
   * Inject a location object, which contains a query param property to select the current node.
   * @param locationObject
   * @return {*|boolean}
   */
  locationIn(locationObject) {
    if (locationObject.query[this.qp]) {
      let selected = this.selectById(locationObject.query[this.qp]);
      if (!selected) {
        // Store qp, for later binding
        this.__tmpQP = locationObject.query[this.qp];
      }
      return selected;
    }
  }

  selectById(nodeID) {
    for (let i = this._flatTree.length - 1; i >= 0; i--) {
      let node = this._flatTree[i];
      if (node.id._value == nodeID) {
        node.selectItem();

        // update focused
        this._focusedField = this._selectedField || this._focusedField;
        /**
         * Fire event, when qp is set, because the selectItem will not fire
         */
        if (this.qp) {
          let customEvent = new Event('node-selected', {composed: true, bubbles: true});
          customEvent.detail = this._selectedField;
          this.dispatchEvent(customEvent);
        }
        return node;
      }
    }
    return false;
  }

  /**
   * select the previous visible item
   */
  selectPrev() {
    this._focusedField = this._selectedField || this._focusedField;
    this.focusPrevious();
    // open the focused field
    this._focusedField.selectItem();
  }

  /**
   * expands the currently selected node recursive
   */
  expandNodeRecursive() {
    this._selectedField.expandRecursive();
  }

  expandAll() {
    this._flatTree[0].expandRecursive();
  }

  collapseAll() {
    this._flatTree[0].collapseRecursive();
  }

  /**
   * expands the currently selected node recursive
   */
  collapseNodeRecursive() {
    this._selectedField.collapseRecursive();
  }

  /**
   * toggles the currently selected node
   */
  toggle() {
    this._selectedField.toggleOpenClose();
  }

  addSubNode(rawNode) {

    let newnode = this._selectedField.children.add(rawNode);
    this._init();

    setTimeout(() => {
      newnode.selectItem();
    }, 0)
  }


  deleteNode() {
    this._selectedField.__parentNode.deleteChild(this._selectedField.__index);
    this.selectPrev();
    this._init();

  }

  /**
   * select the next visible item
   */
  selectNext() {
    this._focusedField = this._selectedField || this._focusedField;
    this.focusNext();
    // open the focused field
    this._focusedField.selectItem();
  }

  triggerNavigation(key) {
    switch (key) {
      case "Enter":

        // not reseting the search at this position is by intention.
        if (this._focusedField._isSelected) {
          // openclose
          this._focusedField.toggleOpenClose();
        } else {
          // open the focused field
          this._focusedField.selectItem();
        }
        break;

      case "ArrowDown":
        this.focusNext();
        break;
      case "ArrowUp":
        this.focusPrevious();
        break;

      case "PageDown":
        for(let i = 0; i<10;i++){
          this.focusNext();
        }

        break;
      case "PageUp":
        for(let i = 0; i<10;i++) {
          this.focusPrevious();
        }
        break;

      case "End":
        this.focusLast();
        break;
      case "Home":
        this.focusFirst();
        break;

      case "ArrowLeft":
        this.collapseFocused();
        break;

      case "ArrowRight":
        this.expandFocused();
        break;

      case"Escape":

        break;
    }
  }

  /**
   * Focuses the first element
   */
  focusFirst() {
    this._flatTree[0].triggerFocus();
  }

  /**
   * Focuses the last element
   */
  focusLast() {
    this.__visibleTree = this._flatTree.filter((node) => {
      return !node._isHidden;
    })
    this.__visibleTree[this.__visibleTree.length - 1].triggerFocus();
  }


  /**
   * focuss the next item
   */
  focusNext() {
    let next;

    if (this._searchIsActive) {
      for (let i = this._foundSearchItems.length - 1; i >= 0; i--) {

        if (this._foundSearchItems[i].__flatTreeIndex <= this._focusedField.__flatTreeIndex) {
          next = this._foundSearchItems[i + 1];
          break;
        }
      }
      // select first
      if (!next) {
        next = this._foundSearchItems[0];
      }
    } else {
      next = this._focusedField.getNextVisibleElement();
    }
    if (next) {
      next.triggerFocus();
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Maximal depth for the tree. Default is infinite.
       */
      depth: {type: Number},
      /**
       * Sets the maximal expand level relative from the current node.
       *
       * Expanding is a expensive operation.
       */
      expandDepth: {type: Number, attribute: "expand-depth"},
      /**
       * Query param to watch. If you set this attribute, the node-selected event will only be fired on `ƒ-qp-in` or `ƒ-select-by-id`.
       * If you select an item the `qp-change-request` will be fired.
       */
      qp: {type: String},
      /**
       * Sets the tabindex
       */
      tabindex: {type: Number, reflect: true},
      /**
       * Set this flag if you do not want a header-text section.
       */
      rootAsHeader: {type: Boolean, attribute: "root-as-header"},
      /**
       * Set this flag if you do not want to see the root node
       */
      hideRootNode: {type: Boolean, attribute: "hide-root-node"},
      /**
       * Override display name from root object
       */
      headerText: {type: String, attribute: "header-text"},
      /**
       * Override description from root object.
       */
      secondaryText: {type: String, attribute: "secondary-text"},
      /**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */
      _searchIsActive: {type: Boolean, attribute: "searching", reflect: true},
      /**
       * disables the background color on focus, selected, ... on header node
       *
       * Works only with `root-as-header` enabled
       */
      nobgonhead: {type: Boolean, attribute: "no-bg-on-header"},
      /**
       * indicates that the element is focused
       */
      focused: {type: Boolean, reflect: true},
    };
  }

  /**
   * focuses the element
   */
  focus() {
    super.focus();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();

    /**
     * Register hook on wire --headClicked to
     * select the root node
     */
    this._FBPAddWireHook("--headClicked", (e) => {
      this._flatTree[0].selectItem();
    });

    // update the focused state
    this.addEventListener("focusin", () => this.focused = true)
    this.addEventListener("focusout", () => this.focused = false)
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroTree') || css`
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        outline: none;
        position: relative;
        background: var(--surface, white);
        color: var(--on-surface, #333333);
      }

      .tablewrapper {
        overflow: auto;

      }

      :host([hidden]) {
        display: none;
      }

      td {
        padding: 0;
      }

      table {
        border-spacing: 0;
        min-width: 100%;
        padding: var(--spacing-xs) 8px;
        box-sizing: border-box;
      }

      /* remove border on first group label if it is the first element */
      tr:first-child *[is-group-label] {
        border-top: none;
      }

      /* focus, :host(:focus) td > *[focused]  is for mouse navigation */
      td > *:hover, :host([focused]) td > *[focused] {
        background-color: rgba(var(--primary-rgb), var(--state-hover));
        color: var(--primary);
      }

      /* focus, :host(:focus) td > *[focused]  is for mouse navigation */
      :host([focused]) td > *[focused] {
        background-color: rgba(var(--primary-rgb), var(--state-focus));
        color: var(--primary);
      }


      /* selected */
      td > *[selected], :host(:not([focused])) td > *[selected] {
        background-color: rgba(var(--primary-rgb), var(--state-selected));
        color: var(--primary);
      }

      /* selected focus  */
      :host([focused]) td > *[selected] {
        background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
        color: var(--primary);
      }


      /* selected focus  */
      td:hover > *[selected][focused] {
        background-color: rgba(var(--primary-rgb), var(--state-selected-focused-hover));
        color: var(--primary);
      }


      /* selected focus */
      :host([focused]) td > *[selected][focused] {
        background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
        color: var(--primary);
      }

      /* remove the background color on header node */
      :host([no-bg-on-header]) td furo-tree-item[selected][isheader], :host([no-bg-on-header]) td furo-tree-item[selected][focused][isheader], :host([no-bg-on-header]) td furo-tree-item[focused][isheader] {
        background-color: unset;
      }


      

      @keyframes border-pulsate {
        0% {
          border-color: var(--primary, #57a9ff);
        }
        50% {
          border-color: var(--surface, #999999);
        }
        100% {
          border-color: var(--primary, #57a9ff);
        }
      }
      
      .title {
        font-size: 20px;
        height: 40px;
        line-height: 56px;
        padding-left: var(--spacing-s, 16px);
      }

      .secondary {
        font-size: 14px;
        height: 24px;
        letter-spacing: 0.1px;
        padding-left: var(--spacing-s, 16px);
        color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
        line-height: 20px;
      }

      .head {
        height: 64px;
        cursor: pointer;
      }

      :host([noheader]) .head {
        display: none;
      }


    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`      
     <furo-vertical-flex>
      <div class="tablewrapper" flex>
      <table>
        <template is="flow-repeat" ƒ-inject-items="--treeChanged" ƒ-trigger-all="--searchRequested" identity-path="id._value">
          <tr>
            <td>
              ${this._treeItemTepmplate}
            </td>
          </tr>
        </template>
      </table>
      </furo-vertical-flex>
      </div>
    `;
  }

  injectData(furoTypelibNavigationnode){
    // mache ein data object vom

  }

  bindData(treeNode) {

    if (treeNode.root === undefined) {
      this._rootNode = treeNode;
    } else {
      this._rootNode = treeNode.root;
    }

    this._rootNode.children.addEventListener("this-repeated-field-changed", (e) => {
      this._setTitle(this._rootNode);
      this._init();
    });

    this._setTitle(this._rootNode);
    this._init();

  }

  _setTitle(treeNode) {
    if (this.headerText && treeNode.display_name) {
      treeNode.display_name._value = this.headerText;
    }
    if (this.secondaryText && treeNode.secondary_text) {
      treeNode.secondary_text._value = this.secondaryText;
    }


  }

  _init() {

    this._buildFlatTree(this._rootNode);

    // set visible on root node
    this._rootNode.children.broadcastEvent(new NodeEvent('ancestor-visible', this._rootNode));

    if (!this.__listenersInitialized) {
      this._initFocusAndSelectEvents();
    }
    this.__listenersInitialized = true;


    // initial focus on first element
    if (this._focusedField === undefined && this._flatTree.length > 0) {
      this._focusedField = this._flatTree[0];
      this._focusedField.triggerFocus();
    }


    // select item if qp was set before
    if (this.__tmpQP !== undefined) {
      // because the tree is built async
      setTimeout(() => {
        this.selectById(this.__tmpQP);
        this.__tmpQP = undefined;
      }, 0);

    }
  }

  _initFocusAndSelectEvents() {
    // Internal Event, when a node gets focused
    this._rootNode.addEventListener("tree-node-focused", (e) => {


      // broadcast blur
      this._rootNode.broadcastEvent(new NodeEvent('tree-node-blur-requested'));
      this._focusedField = e.target;

      // only dispatch when the element contains a name
      if (this._focusedField.display_name._value != null) {
        /**
         * @event node-focused
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('node-focused', {composed: true, bubbles: true});
        customEvent.detail = this._focusedField;
        this.dispatchEvent(customEvent);
        if (this._focusedField.isBranch()) {
          /**
           * @event branch-focused
           * Fired when
           * detail payload:
           */
          let customEvent = new Event('branch-focused', {composed: true, bubbles: true});
          customEvent.detail = this._focusedField;
          this.dispatchEvent(customEvent);
        } else {
          /**
           * @event leaf-focused
           * Fired when
           * detail payload:
           */
          let customEvent = new Event('leaf-focused', {composed: true, bubbles: true});
          customEvent.detail = this._focusedField;
          this.dispatchEvent(customEvent);
        }
      }
    });

    // Internal Event, when a node gets selected
    this._rootNode.addEventListener("tree-node-selected", (e) => {
      //---
      // broadcast deselect
      this._rootNode.broadcastEvent(new NodeEvent('tree-node-unselection-requested'));
      this._selectedField = e.target;

      /**
       * @event node-selected
       * Fired when the item gets selected, does not fire when you work with query params
       * detail payload:
       */
      if (!this.qp) {
        let customEvent = new Event('node-selected', {composed: true, bubbles: true});
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      } else {

        /**
         * @event qp-change-requested
         * Fired when qp mode is enabled. Nodes are only selectable with qpIn or selectById
         *
         * detail payload: Object {"this.qp": this._selectedField.id._value}
         */
        if (this.__lastQP !== this._selectedField.id._value) {
          let customEvent = new Event('qp-change-requested', {composed: true, bubbles: true});
          let qp = {};
          this.__lastQP = this._selectedField.id._value;
          qp[this.qp] = this._selectedField.id._value;
          customEvent.detail = qp;
          this.dispatchEvent(customEvent)
        }

      }

      if (this._selectedField.isBranch()) {
        /**
         * @event branch-selected
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('branch-selected', {composed: true, bubbles: true});
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      } else {
        /**
         * @event leaf-selected
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('leaf-selected', {composed: true, bubbles: true});
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      }

    });
  }

  _buildFlatTree(tree) {

    this._flatTree = [tree];
    tree.__flatTreeIndex = 0;
    let startlevel = 0;
    if (this.hideRootNode === true) {
      startlevel = -1;
      //this._flatTree.pop();
      this._flatTree[0]._isHidden = true;
    } else {
      tree._isRoot = true;
      tree.open._value = true;
    }

    if (this.rootAsHeader === true) {
      this._flatTree[0]._rootAsHeader = true;
      startlevel = -1;
    }


    this._parseTreeRecursive(tree, startlevel, this.depth);


    for (let len = this._flatTree.length; len > 0; len--) {
      let index = len - 1;
      let node = this._flatTree[index];

      // open field if entity contains a field open with true
      if (!node.open) {
        node.addChildProperty("open", new FieldNode(node, {type: "bool"}, "open"));
        node.open._value = false;
      }


      // Traverse the flat tree, it is simpler then the nested tree
      // next active element
      node.getNextVisibleElement = () => {
        for (let i = index + 1; i < this._flatTree.length; i++) {
          if (!this._flatTree[i]._isHidden) {
            return this._flatTree[i];
          }
        }
        return false;
      };
      // prev active element
      node.getPrevElement = () => {
        for (let i = index - 1; i >= 0; i--) {
          if (!this._flatTree[i]._isHidden) {
            return this._flatTree[i];
          }
        }
        return false;
      };

      // is branch
      node.isBranch = () => {
        return node.children.repeats.length === 0
      };

      // get Parent
      node.getParentElement = () => {
        return node.__parentNode.__parentNode;
      };

      // add openclose method to treeNode
      node.toggleOpenClose = () => {
        node.open._value = !node.open._value;
        if (node.open._value) {
          /**
           * @event node-opened
           * Fired when a node is opened
           */
          let customEvent = new Event('node-opened', {composed: true, bubbles: false});
          setTimeout(() => {
            this.dispatchEvent(customEvent);
          }, 0);
        } else {
          /**
           * @event node-closed
           * Fired when a node is closed
           */
          let customEvent = new Event('node-closed', {composed: true, bubbles: false});
          setTimeout(() => {
            this.dispatchEvent(customEvent);
          }, 0);
        }
      };

      // focuss the current node
      // ?? maybe we want also do a tab-node-focused in panel-coordinator.tabs?
      node.triggerFocus = () => {
          node.dispatchNodeEvent(new NodeEvent('tree-node-focused', this, true));
          node.dispatchNodeEvent(new NodeEvent('this-node-focused', this, false));
      };

      // selects the current item
      node.selectItem = () => {
        node.dispatchNodeEvent(new NodeEvent('tree-node-selected', node, true));
        node.dispatchNodeEvent(new NodeEvent('this-node-selected', node, false));

        // used to open the paths upwards from the selected node
        node.__parentNode.dispatchNodeEvent(new NodeEvent('descendant-selected', this, true));
        // focus the selected
        node.triggerFocus()
      };

      // if a descendant was selected, we ensure to open the path
      node.addEventListener("descendant-selected", (e) => {
        node.open._value = true;
      });


      // expand recursive
      node.expandRecursive = () => {
        let event = new NodeEvent('recursive-expand-requested', node);
        node.broadcastEvent(event);
        /**
         * @event nodes-expanded
         * Fired when nodes are expanded recursive
         */
        let customEvent = new Event('nodes-expanded', {composed: true, bubbles: false});
        setTimeout(() => {
          this.dispatchEvent(customEvent);
        }, 0);


      };

      node.addEventListener("recursive-expand-requested", (e) => {
        // stop exanding after  a depth of 2
        if (e.detail.depth + this.expandDepth <= node.depth) {
          e.stopBroadcast();
        }

        node.open._value = true;
      });

      // collapse recursive
      node.collapseRecursive = () => {
        node.broadcastEvent(new NodeEvent('recursive-collapse-requested', node));
        /**
         * @event nodes-collapsed
         * Fired when nodes are collapsed recursive
         */
        let customEvent = new Event('nodes-collapsed', {composed: true, bubbles: false});
        setTimeout(() => {
          this.dispatchEvent(customEvent);
        }, 0);
      };

      node.addEventListener("recursive-collapse-requested", (e) => {
        node.open._value = false;
      });
    }

    // open the root ode
    tree.open._value = true;

    this._FBPTriggerWire("--treeChanged", this._flatTree.filter((node) => {
      return !node._isHidden;
    }));
  }


  _parseTreeRecursive(tree, level, maxdepth) {
    if (maxdepth > 0 && !(level < maxdepth)) {
      return
    }
    tree.depth = level;
    // do not indent on group labels
    if (!(tree.is_group_label && tree.is_group_label._value === true)) {
      level++;
    }


    tree.children.repeats.forEach((node) => {
      node.depth = level;
      let i = this._flatTree.push(node);
      node.__flatTreeIndex = i - 1;
      if (node.children.repeats.length > 0) {
        this._parseTreeRecursive(node, level, maxdepth)
      }
    });
  }
}

window.customElements.define('furo-tree', FuroTree);
