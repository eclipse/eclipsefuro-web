import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import "@furo/layout/furo-horizontal-flex"
import "@polymer/iron-icon/iron-icon"
import "@polymer/iron-icons/iron-icons"
import {FBP} from "@furo/fbp";

/**
 * `furo-collapsible-box` is a card which can be toggled to be open and closed
 *
 *```
 * <furo-collapsible-box label="label" open>
 *  <div>flex content in default slot</div>
 *  <div slot="context">CTX on right side</div>
 * </furo-collapsible-box>
 *```
 *
 * @summary collapsible box with head
 * @customElement
 * @demo demo/furo-collapsible-box.html
 * @appliesMixin FBP
 */
class FuroCollapsibleBox extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * @type {boolean}
     */
    this._open = false;
    /**
     * @type {string}
     */
    this.iconOpen = "expand-more";
    /**
     *
     * @type {string}
     */
    this.iconClosed = "expand-less";
    this.icon = this._open ? this.iconOpen : this.iconClosed;

    // toggle method
    this._FBPAddWireHook("--toggleClicked", ()=>{this.toggle()});


    /**
     * minimal keyboard navigation
     */
    this._FBPAddWireHook("--keystrokes", (e) => {
      switch (e.code) {
        case "ArrowRight":
          this.open();
          break;
        case "ArrowLeft":
          this.close()  ;
          break;
        case "Enter":
          this.toggle();
          break;
      }
    });
  }

  open(){
    this._open = true;
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();

  }

  close(){
    this._open = false;
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();

  }
  /**
   * Toggles the box
   */
  toggle() {
    this._open = !this._open;
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();

    if (this._open == true) {
      /**
       * @event opened
       * Fired when collapsible box was opened
       *
       * detail payload: void
       */
      let customEvent = new Event('opened', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent)
    } else {
      /**
       * @event closed
       * Fired when collapsible box was closed
       *
       * detail payload: void
       */
      let customEvent = new Event('closed', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent)
    }

    /**
     * @event toggled
     * Fired when collapsible-box was toggled
     * detail payload: Boolean true for open, false for closed
     * @param Boolean true for open, false for closed
     */
    let customEvent = new Event('toggled', {composed: true, bubbles: false});
    customEvent.detail = this._open;
    this.dispatchEvent(customEvent)
  }



  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();
  }

  /**
   * focus the box (focuses the icon)
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Label der Collapsible
       */
      label: {
        type: String
      },
      /**
       * Indicates the collapse state, set the collapse state
       */
      _open: {
        type: Boolean,
        reflect: true,
        attribute:"open"
      },
      /**
       * The icon for the open state.
       *
       * default expand-less
       */
      iconOpen: {
        type: String,
        attribute: 'icon-open'
      },
      /**
       * The icon for the closed state.
       *
       * defaults to `expand-less`
       */
      iconClosed: {
        type: String,
        attribute: 'icon-closed'
      },
      /**
       * reserved flag
       * todo implement remember component
       */
      rememberState: {
        type: Boolean
      },

    };
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
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            padding: var(--furo-collapsible-box-padding, 16px);
            background: var(--furo-collapsible-box-background, white);
            display: block;
            margin: var(--furo-collapsible-box-margin, 16px);
            box-sizing: border-box;

        }

        :host([hidden]) {
            display: none;
        }

        label {
            display: block;
            font-weight: 700;
            line-height: 24px;
            padding-left: 8px;
            cursor: pointer;
        }

        .content {
            display: none;
        }

        :host([open]) .content {
            display: block;
        }

        .head {
            border-bottom: 1px solid var(--separator-color, gainsboro);;

        }

        iron-icon {
            width: 24px;
            height: 24px;
            cursor: pointer;
            outline: none;
        }
        iron-icon:focus {
            color:var(--primary-color,#CDCDCD)
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
<furo-horizontal-flex class="head">
  <iron-icon tabindex="1" ƒ-focus="--focus" icon="${this.icon}" @-keydown="--keystrokes(*)" @-click="--toggleClicked"></iron-icon>     
  <label flex  @-click="--toggleClicked">${this.label}</label>
  <slot name="context"></slot>
</furo-horizontal-flex>
<div class="content"><slot></slot></div>
    `;
  }
}

window.customElements.define('furo-collapsible-box', FuroCollapsibleBox);
