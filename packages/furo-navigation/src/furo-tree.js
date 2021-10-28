import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import { FieldNode } from '@furo/data/src/lib/FieldNode';
import '@furo/layout/src/furo-vertical-flex';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';
import './furo-tree-item.js';
// import { html as statichtml, literal } from 'lit/static-html.js';

/**
 * `furo-tree`
 * renders a tree structure
 *
 * @cssprop {N/A} [--surface=white] - background color
 * @cssprop {N/A} [--on-surface=#333333] - foreground color
 *
 * @fires {focused field} node-focused -  Fired when
 * @fires {focused field} branch-focused -  Fired when
 * @fires {} leaf-focused -  Fired when
 * @fires {selected field} node-selected -  Fired when the item gets selected, does not fire when you work with query params
 * @fires {Object {"this.qp": this._selectedField.id._value}} qp-change-requested -  Fired when qp mode is enabled. Nodes are only selectable with qpIn or selectById
 * @fires {selected field} branch-selected -  Fired when
 * @fires {selected field} leaf-selected -  Fired when
 * @fires {} node-opened -  Fired when a node is opened
 * @fires {} node-closed -  Fired when a node is closed
 * @fires {} nodes-expanded -  Fired when nodes are expanded recursive
 * @fires {} nodes-collapsed -  Fired when nodes are collapsed recursive.
 *
 * @summary tree navigation menu
 * @customElement
 * @demo demo-furo-tree Basic usage
 * @demo demo-furo-tree-qp Working with query params
 * @appliesMixin FBP
 */
export class FuroTree extends FBP(LitElement) {
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
    this._searchTerm = '';
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
    // eslint-disable-next-line wc/no-constructor-attributes
    this.treeItemComponent = this.getAttribute('tree-item-component') || 'furo-tree-item';
    this._treeItemTepmplate = html([
      [
        '<template><tr><td><',
        this.treeItemComponent,
        ' ƒ-bind-data="--itemInjected(*.item)" ƒ-search="--trigger"></',
        this.treeItemComponent,
        '></td></tr></template>',
      ].join(''),
    ]);
  }

  /**
   * collapses the focused element. If it is closed the parent will be focused.
   */
  collapseFocused() {
    // close when opened, parent when closed
    if (!this._focusedField.isBranch() && this._focusedField.open._value) {
      this._focusedField.toggleOpenClose();
    } else {
      this.focusParent();
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
    const d = { term: this._searchTerm, results: [] };
    this._foundSearchItems = d.results;
    this._FBPTriggerWire('--searchRequested', d);

    // select first result
    if (d.results.length > 0) {
      d.results[0].triggerFocus();
    }
    this._updateSearchmatchAttributesOnItems();
    this.requestUpdate();
  }

  _resetSearch() {
    this._searchIsActive = false;
    this._searchTerm = '';
    this._foundSearchItems = [];
    this._updateSearchmatchAttributesOnItems();
  }

  _updateSearchmatchAttributesOnItems() {
    this._rootNode.broadcastEvent(new NodeEvent('search-didnt-match', this._rootNode, true));
    this._foundSearchItems.forEach(node => {
      node.dispatchNodeEvent(new NodeEvent('search-matched', this._rootNode, false));
    });
  }

  /**
   * Focuses the parent tree node without selecting it.
   *
   * The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
   */
  focusParent() {
    const parent = this._focusedField.getParentElement();
    if (parent.triggerFocus) {
      parent.triggerFocus();
    }
  }

  /**
   * focus the previous visible node.
   *
   * The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
   */
  focusPrevious() {
    let prev;
    if (this._searchIsActive) {
      for (let i = 0; i < this._foundSearchItems.length; i += 1) {
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
      const selected = this.selectById(locationObject.query[this.qp]);
      if (!selected) {
        // Store qp, for later binding
        this.__tmpQP = locationObject.query[this.qp];
      }
      return selected;
    }
    return false;
  }

  selectById(nodeID) {
    for (let i = this._flatTree.length - 1; i >= 0; i -= 1) {
      const node = this._flatTree[i];
      if (String(node.id._value) === String(nodeID)) {
        node.selectItem();

        // update focused
        this._focusedField = this._selectedField || this._focusedField;
        /**
         * Fire event, when qp is set, because the selectItem will not fire
         */
        if (this.qp) {
          const customEvent = new Event('node-selected', { composed: true, bubbles: true });
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
    const newnode = this._selectedField.children.add(rawNode);
    this._init();

    setTimeout(() => {
      newnode.selectItem();
    }, 0);
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
      case 'Enter':
        // not reseting the search at this position is by intention.
        if (this._focusedField._isSelected) {
          // openclose
          this._focusedField.toggleOpenClose();
        } else {
          // open the focused field
          this._focusedField.selectItem();
        }
        break;

      case 'ArrowDown':
        this.focusNext();
        break;
      case 'ArrowUp':
        this.focusPrevious();
        break;

      case 'PageDown':
        for (let i = 0; i < 10; i += 1) {
          this.focusNext();
        }

        break;
      case 'PageUp':
        for (let i = 0; i < 10; i += 1) {
          this.focusPrevious();
        }
        break;

      case 'End':
        this.focusLast();
        break;
      case 'Home':
        this.focusFirst();
        break;

      case 'ArrowLeft':
        this.collapseFocused();
        break;

      case 'ArrowRight':
        this.expandFocused();
        break;

      case 'Escape':
        break;
      default:
    }
  }

  /**
   * Focuses the first node in the tree without selecting it.
   *
   * Use selectFocused to select the focused node.
   *
   * The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
   */
  focusFirst() {
    this._flatTree[0].triggerFocus();
  }

  /**
   * Focuses the last node in the tree without selecting it.
   *
   * Use selectFocused to select the focused node.
   *
   * The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
   */
  focusLast() {
    this.__visibleTree = this._flatTree.filter(node => !node._isHidden);
    this.__visibleTree[this.__visibleTree.length - 1].triggerFocus();
  }

  /**
   * focuses the next visible tree node.
   *
   * The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
   */
  focusNext() {
    let next;

    if (this._searchIsActive) {
      for (let i = this._foundSearchItems.length - 1; i >= 0; i -= 1) {
        if (this._foundSearchItems[i].__flatTreeIndex <= this._focusedField.__flatTreeIndex) {
          next = this._foundSearchItems[i + 1];
          break;
        }
      }
      // select first
      if (!next) {
        [next] = this._foundSearchItems;
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
      depth: { type: Number },
      /**
       * Sets the maximal expand level relative from the current node.
       *
       * Expanding is a expensive operation.
       */
      expandDepth: { type: Number, attribute: 'expand-depth' },
      /**
       * Query param to watch. If you set this attribute, the node-selected event will only be fired on `ƒ-qp-in` or `ƒ-select-by-id`.
       * If you select an item the `qp-change-request` will be fired.
       */
      qp: { type: String },
      /**
       * Sets the tabindex
       */
      tabindex: { type: Number, reflect: true },
      /**
       * Set this flag if you do not want a header-text section.
       */
      rootAsHeader: { type: Boolean, attribute: 'root-as-header' },
      /**
       * Set this flag if you do not want to see the root node
       */
      hideRootNode: { type: Boolean, attribute: 'hide-root-node' },
      /**
       * Override display name from root object
       */
      headerText: { type: String, attribute: 'header-text' },
      /**
       * Override description from root object.
       */
      secondaryText: { type: String, attribute: 'secondary-text' },
      /**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */
      _searchIsActive: { type: Boolean, attribute: 'searching', reflect: true },
      /**
       * disables the background color on focus, selected, ... on header node
       *
       * Works only with `root-as-header` enabled
       */
      nobgonhead: { type: Boolean, attribute: 'no-bg-on-header' },
      /**
       * indicates that the element is focused
       */
      focused: { type: Boolean, reflect: true },
    };
  }

  /**
   * focuses the tree itself. You can use this in combination with keyboard navigation (furo-navigation-pad)
   */
  focus() {
    super.focus();
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    /**
     * Register hook on wire --headClicked to
     * select the root node
     */
    this._FBPAddWireHook('--headClicked', () => {
      this._flatTree[0].selectItem();
    });

    // update the focused state
    this.addEventListener('focusin', () => {
      this.focused = true;
    });
    this.addEventListener('focusout', () => {
      this.focused = false;
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
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
        td > *:hover,
        :host([focused]) td > *[focused] {
          background-color: rgba(var(--primary-rgb), var(--state-hover));
          color: var(--primary);
        }

        /* focus, :host(:focus) td > *[focused]  is for mouse navigation */
        :host([focused]) td > *[focused] {
          background-color: rgba(var(--primary-rgb), var(--state-focus));
          color: var(--primary);
        }

        /* selected */
        td > *[selected],
        :host(:not([focused])) td > *[selected] {
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
        :host([no-bg-on-header]) td furo-tree-item[selected][isheader],
        :host([no-bg-on-header]) td furo-tree-item[selected][focused][isheader],
        :host([no-bg-on-header]) td furo-tree-item[focused][isheader] {
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
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML

    return html`
      <furo-vertical-flex>
        <div class='tablewrapper' flex>
          <table>
            <flow-repeat ƒ-inject-items='--treeChanged' ƒ-trigger-all='--searchRequested' identity-path='id._value'>
              ${this._treeItemTepmplate}
            </flow-repeat>

          </table>
      </furo-vertical-flex>
      </div>
    `;
  }

  /**
   * Binds a FieldNode with a tree signature.
   *
   * A sample and usable signature can be found in ./specs/
   * @param treeNode
   */
  bindData(treeNode) {
    if (treeNode.root === undefined) {
      this._rootNode = treeNode;
    } else {
      this._rootNode = treeNode.root;
    }
    this._rootNode.children.clearListOnNewData = true;
    this._rootNode.children.addEventListener('this-repeated-field-changed', () => {
      this._setTitle(this._rootNode);
      this._init();
    });

    this._setTitle(this._rootNode);
    this._init();
  }

  _setTitle(treeNode) {
    if (this.headerText && treeNode.display_name) {
      // eslint-disable-next-line no-param-reassign
      treeNode.display_name._value = this.headerText;
    }
    if (this.secondaryText && treeNode.secondary_text) {
      // eslint-disable-next-line no-param-reassign
      treeNode.secondary_text._value = this.secondaryText;
    }
  }

  /**
   * Focuses the currently selected tree item.
   *
   * The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
   */
  focusSelected() {
    this._selectedField.triggerFocus();
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
      [this._focusedField] = this._flatTree;
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
    this._rootNode.addEventListener('tree-node-focused', e => {
      // broadcast blur
      this._rootNode.broadcastEvent(new NodeEvent('tree-node-blur-requested'));
      this._focusedField = e.target;

      // only dispatch when the element contains a name
      if (this._focusedField.display_name._value != null) {
        const customEvent = new Event('node-focused', { composed: true, bubbles: true });
        customEvent.detail = this._focusedField;
        this.dispatchEvent(customEvent);
        if (this._focusedField.isBranch()) {
          const branchFocusedEvent = new Event('branch-focused', { composed: true, bubbles: true });
          branchFocusedEvent.detail = this._focusedField;
          this.dispatchEvent(branchFocusedEvent);
        } else {
          const leafFocusedEvent = new Event('leaf-focused', { composed: true, bubbles: true });
          leafFocusedEvent.detail = this._focusedField;
          this.dispatchEvent(leafFocusedEvent);
        }
      }
    });

    // Internal Event, when a node gets selected
    this._rootNode.addEventListener('tree-node-selected', e => {
      //---
      // broadcast deselect
      this._rootNode.broadcastEvent(new NodeEvent('tree-node-unselection-requested'));
      this._selectedField = e.target;

      if (!this.qp) {
        const customEvent = new Event('node-selected', { composed: true, bubbles: true });
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      } else if (this.__lastQP !== this._selectedField.id._value) {
        const customEvent = new Event('qp-change-requested', { composed: true, bubbles: true });
        const qp = {};
        this.__lastQP = this._selectedField.id._value;
        qp[this.qp] = this._selectedField.id._value;
        customEvent.detail = qp;
        this.dispatchEvent(customEvent);
      }

      if (this._selectedField.isBranch()) {
        const customEvent = new Event('branch-selected', { composed: true, bubbles: true });
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      } else {
        const customEvent = new Event('leaf-selected', { composed: true, bubbles: true });
        customEvent.detail = this._selectedField;
        this.dispatchEvent(customEvent);
      }
    });
  }

  _buildFlatTree(tree) {
    this._flatTree = [tree];
    // eslint-disable-next-line no-param-reassign
    tree.__flatTreeIndex = 0;
    let startlevel = 0;
    if (this.hideRootNode === true) {
      startlevel = -1;
      // this._flatTree.pop();
      this._flatTree[0]._isHidden = true;
    } else {
      // eslint-disable-next-line no-param-reassign
      tree._isRoot = true;
      // eslint-disable-next-line no-param-reassign
      tree.open._value = true;
    }

    if (this.rootAsHeader === true) {
      this._flatTree[0]._rootAsHeader = true;
      startlevel = -1;
    }

    this._parseTreeRecursive(tree, startlevel, this.depth);

    for (let len = this._flatTree.length; len > 0; len -= 1) {
      const index = len - 1;
      const node = this._flatTree[index];

      // open field if entity contains a field open with true
      if (!node.open) {
        node.addChildProperty('open', new FieldNode(node, { type: 'bool' }, 'open'));
        node.open._value = false;
      }

      // Traverse the flat tree, it is simpler then the nested tree
      // next active element
      node.getNextVisibleElement = () => {
        for (let i = index + 1; i < this._flatTree.length; i += 1) {
          if (!this._flatTree[i]._isHidden) {
            return this._flatTree[i];
          }
        }
        return false;
      };
      // prev active element
      node.getPrevElement = () => {
        for (let i = index - 1; i >= 0; i -= 1) {
          if (!this._flatTree[i]._isHidden) {
            return this._flatTree[i];
          }
        }
        return false;
      };

      // is branch
      node.isBranch = () => node.children.repeats.length === 0;

      // get Parent
      node.getParentElement = () => node.__parentNode.__parentNode;

      // add openclose method to treeNode
      node.toggleOpenClose = () => {
        node.open._value = !node.open._value;
        if (node.open._value) {
          const customEvent = new Event('node-opened', { composed: true, bubbles: false });
          setTimeout(() => {
            this.dispatchEvent(customEvent);
          }, 0);
        } else {
          const customEvent = new Event('node-closed', { composed: true, bubbles: false });
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
        // focus the selected
        node.triggerFocus();

        node.dispatchNodeEvent(new NodeEvent('tree-node-selected', node, true));
        node.dispatchNodeEvent(new NodeEvent('this-node-selected', node, false));

        // used to open the paths upwards from the selected node
        node.__parentNode.dispatchNodeEvent(new NodeEvent('descendant-selected', this, true));
      };

      // if a descendant was selected, we ensure to open the path
      node.addEventListener('descendant-selected', () => {
        node.open._value = true;
      });

      // expand recursive
      node.expandRecursive = () => {
        const event = new NodeEvent('recursive-expand-requested', node);
        node.broadcastEvent(event);

        const customEvent = new Event('nodes-expanded', { composed: true, bubbles: false });
        setTimeout(() => {
          this.dispatchEvent(customEvent);
        }, 0);
      };

      node.addEventListener('recursive-expand-requested', e => {
        // stop exanding after  a depth of 2
        if (e.detail.depth + this.expandDepth <= node.depth) {
          e.stopBroadcast();
        }

        node.open._value = true;
      });

      // collapse recursive
      node.collapseRecursive = () => {
        node.broadcastEvent(new NodeEvent('recursive-collapse-requested', node));

        const customEvent = new Event('nodes-collapsed', { composed: true, bubbles: false });
        setTimeout(() => {
          this.dispatchEvent(customEvent);
        }, 0);
      };

      node.addEventListener('recursive-collapse-requested', () => {
        node.open._value = false;
      });
    }

    // open the root ode
    // eslint-disable-next-line no-param-reassign
    tree.open._value = true;

    this._FBPTriggerWire(
      '--treeChanged',
      this._flatTree.filter(node => !node._isHidden),
    );
  }

  _parseTreeRecursive(tree, level, maxdepth) {
    if (maxdepth > 0 && !(level < maxdepth)) {
      return;
    }
    // eslint-disable-next-line no-param-reassign
    tree.depth = level;
    // do not indent on group labels
    if (!(tree.is_group_label && tree.is_group_label._value === true)) {
      // eslint-disable-next-line no-param-reassign
      level += 1;
    }

    tree.children.repeats.forEach(node => {
      // eslint-disable-next-line no-param-reassign
      node.depth = level;
      const i = this._flatTree.push(node);
      // eslint-disable-next-line no-param-reassign
      node.__flatTreeIndex = i - 1;
      if (node.children.repeats.length > 0) {
        this._parseTreeRecursive(node, level, maxdepth);
      }
    });
  }
}

window.customElements.define('furo-tree', FuroTree);
