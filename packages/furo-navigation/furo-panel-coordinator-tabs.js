import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat";
import "./furo-panel-coordinator-tab-item"
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"

/**
 * Tabs for open panels in panel coordinator
 * Tabs
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-mini-tabs.html
 * @appliesMixin FBP
 */
class FuroPanelCoordinatorTabs extends FBP(LitElement) {


  constructor() {
    super();
    this.tabindex = 0;

    this._focusIndex = 0;


    // hover selected
    this.addEventListener("focus", (e) => {
      // find selected tab and set hover index
      this._focusIndex = 0;
      this._tabs.forEach((e, i) => {
        if (e._isSelected) {
          this._focusIndex = i;
        }
      });
      this._tabs[0].__parentNode.broadcastEvent(new NodeEvent('tab-unhover-requested', this));
      this._tabs[this._focusIndex].dispatchNodeEvent(new NodeEvent('this-tab-hover-requested', this, false));

    });


  }

  /**
   * connect your navigation pad
   * @param key
   */
  triggerNavigation(key) {
    switch (key) {
      case "Enter":
        // open the hovered field
        this._tabs[this._focusIndex].selectItem();

        break;


      case "ArrowLeft":

        if (this._focusIndex === 0) {
          // hover last item
          this._focusIndex = this._tabs.length - 1;
        } else {
          this._focusIndex--;
        }
        this._tabs[this._focusIndex].triggerFocus();

        break;

      case "End":
        // hover last item
        this._focusIndex = this._tabs.length - 1;
        this._tabs[this._focusIndex].triggerFocus();

        break;


      case "Home":
        // hover last item
        this._focusIndex = 0;
        this._tabs[this._focusIndex].triggerFocus();

        break;


      case "ArrowRight":
        if (this._focusIndex === this._tabs.length - 1) {
          // hover first item
          this._focusIndex = 0;
        } else {
          this._focusIndex++;
        }

        this._tabs[this._focusIndex].triggerFocus();

        break;


        // close the focused tab
      case "Escape":
        this._focusIndex = 0;

        this._tabs[this._focusIndex]._isSelected = false;
        this._tabs[this._focusIndex].dispatchNodeEvent(new NodeEvent('close-requested', this, false));

        if (this._tabs.length === 0) {
          this.setAttribute("hidden", "");
        }

        break;
    }
  }


  injectTabs(nodeArray) {
    this._tabs = nodeArray;
    this._FBPTriggerWire("--itemsInjected", nodeArray);
    this.removeAttribute("hidden");
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();
    // update the focused state
    this.addEventListener("focusin", () => this.focused = true)
    this.addEventListener("focusout", () => this.focused = false)
  }

  /**
   * focuses the element
   */
  focus() {
    super.focus();

  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Sets the tabindex
       */
      tabindex: {type: Number, reflect: true},
      /**
       * indicates that the element is focused
       */
      focused: {type: Boolean, reflect: true},
      /**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */
      _searchIsActive: {type: Boolean, attribute: "searching", reflect: true}
    };
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroPanelCoordinatorTabs') || css`
      :host {
        display: block;
        outline: none;
        position: relative;
        padding-left: var(--spacing-s, 24px);
      }

      furo-panel-coordinator-tab-item[selected] {
        border-bottom: 2px solid var(--primary, #686868);
        color: var(--primary, #686868);
      }

      :host([focused]) furo-panel-coordinator-tab-item[selected][haserror] {
        border-bottom: 2px solid var(--error, red);
      }


      /* mouse hover */
      furo-panel-coordinator-tab-item:hover {
        background-color: rgba(var(--primary-rgb), var(--state-hover));
        border-bottom: 2px solid transparent;
        color: var(--primary, #686868);
      }
      furo-panel-coordinator-tab-item[selected]:hover {
        border-bottom: 2px solid var(--primary, #686868);
        
      }

      /* focus, :host(:focus) furo-panel-coordinator-tab-item[focused]  is for mouse navigation */
      :host([focused]) furo-panel-coordinator-tab-item[focused] {
        background-color: rgba(var(--primary-rgb), var(--state-focus));
        border-bottom: 2px solid transparent;
        color: var(--primary, #686868);
      }


      /* selected */
      :host([focused]) furo-panel-coordinator-tab-item[selected] {
        background-color: rgba(var(--primary-rgb), var(--state-selected));
        border-bottom: 2px solid var(--primary, #686868);
        color: var(--primary, #686868);

      }

      /* selected focus  */
      :host([focused]) furo-panel-coordinator-tab-item[selected][focused] {
        background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
        border-bottom: 2px solid var(--primary, #686868);

      }


      /* selected focus hovered  */
      :host([focused]) furo-panel-coordinator-tab-item[selected][focused]:hover {
        background-color: rgba(var(--primary-rgb), var(--state-selected-focused-hover));
        border-bottom: 2px solid var(--primary, #686868);

      }


      /* selected focus */
      :host([focused]) furo-panel-coordinator-tab-item[selected][focused] {
        background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
        border-bottom: 2px solid var(--primary, #686868);
        color: var(--primary);
      }


      furo-panel-coordinator-tab-item {
        margin: 0;
      }

      :host([hidden]) {
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
      <template is="flow-repeat" ƒ-inject-items="--itemsInjected" identity-path="id._value">
        <furo-panel-coordinator-tab-item ƒ-bind-data="--init"></furo-panel-coordinator-tab-item>
      </template>

    `;
  }
}

window.customElements.define('furo-panel-coordinator-tabs', FuroPanelCoordinatorTabs);
