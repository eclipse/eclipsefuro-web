import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-horizontal-flex";
import "@furo/data-input/furo-data-bool-icon";
import {NodeEvent} from "@furo/data/lib/EventTreeNode";


/**
 * `furo-tree-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
export class FuroTreeItem extends FBP(LitElement) {

  constructor() {
    super();
    this.hidden = true;
    this.isGroupLabel = false;
    this.indentation = 0;
  }


  search(event) {

    if (!this.hidden) {

      let term = event.term.toLowerCase();
      // do not search empty searchTerm
      if (term.length === 0) {
        return;
      }


      let searchTokens = term.split(" ");


      let hasResults = true;
      searchTokens.forEach((t) => {
        if (t.length > 0) {
          if (t.length === 1) {
            // single letter search first letter of word
            t = t + ".*$";
          }
          hasResults = hasResults && this._searchTokens.has(t);
        }
      });

      if (hasResults) {
        // append fieldnode to result set (used in furo-tree.js)
        event.results.push(this.fieldNode);
      }

    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      hidden: {type: Boolean, reflect: true},
      focused: {type: Boolean, reflect: true},
      searchmatch: {type: Boolean, reflect: true},
      inedit: {type: Boolean, reflect: true},
      haserror: {type: Boolean, reflect: true},
      selected: {type: Boolean, reflect: true},
      noicon: {type: Boolean},
      isGroupLabel: {type: Boolean, reflect: true, attribute: "is-group-label"}

    };
  }

  // re render, build search tokens
  _updateItem() {
    this.requestUpdate();

    // build index later (50ms), a human user can not react earlyer
    setTimeout(() => {
      let tmpArr = [];
      this.fieldNode.__childNodes.filter((field) => {
        // maybe change to fields-to-index list
        if (typeof field._value === "string") {
          return true
        }
      }).map((field) => {
        tmpArr = tmpArr.concat(field._value.toLowerCase().split(/\W+/));
      });
      let s = new Set(tmpArr);
      // tokenize
      tmpArr = [];
      s.forEach((word) => {
        //first letter
        tmpArr.push(word.substr(0, 1) + ".*$");
        let l;
        for (let tokenLength = 2; tokenLength < word.length; tokenLength++) {
          l = word.length - tokenLength + 1;
          for (let i = 0; i < l; i++) {
            tmpArr.push(word.substr(i, tokenLength));
          }
        }
      });
      this._searchTokens = new Set((Array.from(s).concat(tmpArr)));


    }, 50);
  }


  bindData(fieldNode) {
    this.fieldNode = fieldNode;
    this.indentation = this.fieldNode.depth;
    this.fieldNode._isHidden = true;


    if (fieldNode.is_group_label) {
      this.isGroupLabel = fieldNode.is_group_label._value;
    }

    if (!fieldNode.icon._value) {
      this.noicon = true
    }

    // reflect visible close state to attr
    this.fieldNode.addEventListener("ancestor-invisible", (e) => {
      this.hidden = true;
      this.fieldNode._isHidden = true;
    });

    // reflect visible close state to attr
    this.fieldNode.addEventListener("ancestor-visible", (e) => {

      if (this.fieldNode.__parentNode.__parentNode.open._value) {
        this.hidden = false;
        this.fieldNode._isHidden = false;
      }
    });

    // for elements that are already ready
    this._updateItem();

    this.fieldNode.addEventListener("branch-value-changed", (e) => {
      // for elements that are updated later
      if (e.detail.__parentNode === this.fieldNode) {
        this._updateItem();
      }
    });

    this.fieldNode.addEventListener("modified", (n) => {
      this.inedit = true;
    });

    this.fieldNode.addEventListener("cleared", (n) => {
      this.inedit = false;
      this.haserror = false;
    });

    this.fieldNode.addEventListener("has-error", (n) => {
      this.haserror = true;
    });

    // listen to open close state
    this.fieldNode.open.addEventListener("field-value-changed", (e) => {
      e.cancelBubble = true;
      if (e.detail._value === false) {
        e.detail.__parentNode.children.broadcastEvent(new NodeEvent('ancestor-invisible', e.detail.__parentNode))
      } else {
        e.detail.__parentNode.children.broadcastEvent(new NodeEvent('ancestor-visible', e.detail.__parentNode))
      }

    });


    // make level 0  node visible
    if (this.fieldNode._isRoot === true) {
      this.hidden = false;
      this.fieldNode._isHidden = false;
      if (this.fieldNode._rootAsHeader) {
        this.setAttribute("isheader", "")
      }
    }

    this._FBPTriggerWire("--fieldOpen", this.fieldNode.open);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()

    this._FBPAddWireHook("--labelClicked", (e) => {
      this.fieldNode.selectItem();
    });

    this.fieldNode.addEventListener("tree-node-unselection-requested", (e) => {
      this.selected = false;
      this.fieldNode._isSelected = false;
    });

    this.fieldNode.addEventListener("tree-node-blur-requested", (e) => {
      this.focused = false;
    });

    this.fieldNode.addEventListener("this-node-focused", (e) => {
      this.focused = true;
      //this.scrollIntoViewIfNeeded();
      if (this.scrollIntoViewIfNeeded) {
        this.scrollIntoViewIfNeeded();
      }
    });

    this.fieldNode.addEventListener("this-node-selected", (e) => {
      this.selected = true;
      this.fieldNode._isSelected = true;
      if (this.scrollIntoViewIfNeeded) {
        this.scrollIntoViewIfNeeded();
      }
    });

    // This item is not or no more in the search results
    this.fieldNode.addEventListener("search-didnt-match", (e) => {
      this.searchmatch = false;
    });

    // This item is  in the search results
    this.fieldNode.addEventListener("search-matched", (e) => {
      this.searchmatch = true;
    });

    // This item is  in the search results
    this.fieldNode.addEventListener("field-value-changed", (e) => {
      this.requestUpdate();
    });

  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroTreeItem') || css`
      :host {
        display: block;
        line-height: 48px;
        box-sizing: border-box;
        cursor: pointer;
        font-weight: 400;
        user-select: none;
        padding-left: var(--spacing-xs, 16px);
        border-radius: 4px;
        position: relative;
        margin-bottom: var(--spacing-xxs, 4px);
        transition: color 0.2s, background-color 0.2s;
      }

      :host([hidden]) {
        display: none;
      }

      :host([inedit]) {
        font-style: italic;
      }

      :host([haserror]),
      :host([selected][haserror]) {
        color: var(--error, red);
      }

      :host([haserror]) furo-icon {
        animation: error-pulse 3s infinite;
      }

      .label {
        white-space: nowrap;
        font-size: 16px;
        letter-spacing: 0.15px;
        margin-left: 8px;
        font-weight: 400;
      }

      .desc {
        font-size: smaller;
        line-height: 39px;
        white-space: nowrap;
      }

      .oc {
        color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
        width: 12px;
        box-sizing: border-box;
        padding-left: 4px;
        font-size: 8px;
      }

      :host([selected]) .oc {
        color: rgba(var(--primary-rgb), var(--medium-emphasis-primary));
      }

      :host([searchmatch]) {
        color: rgba(var(--primary-rgb), var(--medium-emphasis-primary));
      }

      furo-icon[error] {
        animation: error-pulse 2s infinite;
      }


      furo-icon {
        width: 20px;
        height: 20px;
        margin-right: 4px;

      }

      @keyframes error-pulse {
        0% {
          fill: var(--on-primary, #46150f);
        }
        12% {
          fill: var(--error, #fc4d34);
        }
        24% {
          fill: var(--on-primary, #46150f);
        }
        36% {
          fill: var(--error, #fc4d34);
        }
        48% {
          fill: var(--on-primary, #46150f);
        }

      }


      :host([isheader]) {
        height: 64px;
        margin: 0;
      }

      :host([isheader]) furo-icon {
        margin-bottom: 4px;
      }

      :host([isheader]) .oc {
        display: none;
      }

      :host([isheader]) .desc {
        font-size: 14px;
        height: 24px;
        letter-spacing: 0.1px;
        color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
        line-height: 20px;
        display: block;
        position: absolute;
        text-overflow: ellipsis;
        /* Required for text-overflow to do anything */
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        top: 32px;
        box-sizing: border-box;
      }

      :host([isheader]) .label {
        font-weight: unset;
        position: relative;
        font-size: 20px;
        height: 32px;
        line-height: 40px;
        margin: 0;
        display: block;
        letter-spacing: 0.15px;
      }

      :host([is-group-label]) {
        border-top: 1px solid var(--separator, #cdcdcd);
        margin-top: var(--spacing-xs);
        padding-top: var(--spacing-xxs);
        border-radius: 0;
      }


      :host([is-group-label]) .label {
        font-size: 14px;
        line-height: 20px;
        font-weight: normal;
        letter-spacing: 0.1px;
        color: var(--group-label-color, rgba(var(--on-surface-rgb), var(--medium-emphasis-surface)));
      }

      .indentation-0 .indentation {
        width: var(--tree-indentation-0, 0);
      }

      .indentation-1 .indentation {
        width: var(--tree-indentation-1, 16px);
      }

      .indentation-2 .indentation {
        width: var(--tree-indentation-2, 32px);
      }

      .indentation-3 .indentation {
        width: var(--tree-indentation-3, 48px);
      }

      .indentation-4 .indentation {
        width: var(--tree-indentation-4, 56px);
      }

      .indentation-5 .indentation {
        width: var(--tree-indentation-5, 64px);
      }

      .indentation-6 .indentation {
        width: var(--tree-indentation-6, 72px);
      }

      .indentation-7 .indentation {
        width: var(--tree-indentation-7, 80px);
      }

      .indentation-8 .indentation {
        width: var(--tree-indentation-8, 88px);
      }

      .indentation-9 .indentation {
        width: var(--tree-indentation-9, 92px);
      }

      .indentation-10 .indentation {
        width: var(--tree-indentation-10, 96px);
      }

      .indentation-11 .indentation {
        width: var(--tree-indentation-11, 100px);
      }

      .indentation-12 .indentation {
        width: var(--tree-indentation-12, 104px);
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
<furo-horizontal-flex class="indentation-${this.indentation}" @-dblclick="--dblclicked">
      <div class="indentation" @-click="--labelClicked"></div>
      <div class="oc"><furo-data-bool-icon ?hidden="${!this.fieldNode.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-data-bool-icon></div>                 
      <div flex class="label" @-click="--labelClicked" > <furo-icon ?hidden="${this.noicon}" icon="${this.fieldNode.icon}" ?error="${this.fieldNode.has_error._value}"></furo-icon> ${this.fieldNode.display_name} <span class="desc">${this.fieldNode.secondary_text}</span></div>
      <furo-ripple noink ƒ-trigger="--labelClicked"></furo-ripple>
</furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-tree-item', FuroTreeItem);
