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
 * @demo demo/furo-tree-item.html
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
      hovered: {type: Boolean, reflect: true},
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


    // make first node visible
    if (this.fieldNode.depth === 0) {
      this.hidden = false;
      this.fieldNode._isHidden = false;
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
      if (this.isGroupLabel) {
        // just toggle if this is a label
        this.fieldNode.open._value = !this.fieldNode.open._value;
      } else {
        this.fieldNode.selectItem();
      }

    });

    this.fieldNode.addEventListener("tree-node-unselection-requested", (e) => {
      this.selected = false;
      this.fieldNode._isSelected = false;
    });

    this.fieldNode.addEventListener("tree-node-blur-requested", (e) => {
      this.hovered = false;
    });

    this.fieldNode.addEventListener("this-node-hovered", (e) => {
      this.hovered = true;
      //this.scrollIntoViewIfNeeded();
    });

    this.fieldNode.addEventListener("this-node-selected", (e) => {
      this.selected = true;
      this.fieldNode._isSelected = true;
      //this.scrollIntoViewIfNeeded();
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
    return Theme.getThemeForComponent(this.name) || css`
      :host {
        display: block;
        line-height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        font-weight: 400;
        user-select: none;
        padding-left: var(--spacing-xs, 16px);
        border-radius: 4px;
        position: relative;
        margin-bottom: var(--spacing-xxs, 4px);
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
        font-size: 0.875rem;
        letter-spacing: 0.2px;
        margin-left: 8px;
        font-weight: 500;
        transition: color 0.4s;
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
        transition: color 0.4s;
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

      :host([is-group-label]) {
        border-top: 1px solid var(--separator, #cdcdcd);
      }

      :host([is-group-label]) .label {
        font-weight: 500;
        font-size: 11px;
        color: var(--separator, #cdcdcd);
        text-transform: uppercase;
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
<furo-horizontal-flex class="indentation-${this.indentation}" @-dblclick="--dblclicked" @mouseenter="${(e) => this.fieldNode.triggerHover()}">
      <div class="indentation" @-click="--labelClicked"></div>
      <div class="oc"><furo-data-bool-icon ?hidden="${!this.fieldNode.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-data-bool-icon></div>                 
      <div flex class="label" @-click="--labelClicked" > <furo-icon ?hidden="${this.noicon}" icon="${this.fieldNode.icon}" ?error="${this.fieldNode.has_error._value}"></furo-icon> ${this.fieldNode.display_name} <span class="desc">${this.fieldNode.secondary_text}</span></div>
</furo-horizontal-flex>

    `;
  }
}

window.customElements.define('furo-tree-item', FuroTreeItem);
