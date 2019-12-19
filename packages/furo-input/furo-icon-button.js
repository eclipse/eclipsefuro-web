import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

import "@furo/icon/furo-icon"
import "@furo/layout/furo-ripple"

/**
 * # Experimental
 * The API may change, documentation will follow
 *
 * `furo-icon-button`
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-icon-button
 * @appliesMixin FBP
 */
class FuroIconButton extends FBP(LitElement) {

  constructor() {
    super();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * The icon
       */
      icon: {type: String},
      /**
       * Focus the element automatically
       */
      autofocus: {
        type: Boolean,
        reflect: true
      }
    };
  }


  /**
   * Set the focus to the button
   * @param e
   */
  focus(e) {
    this._FBPTriggerWire("--focus");
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroIconButton') || css`
        :host {
            display: inline-block;
            position: relative;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
        }

        :host([hidden]) {
            display: none;
        }

        button {
            cursor: pointer;
            background: none;
            outline: none;
            border: none;
            color: inherit;
            padding: 12px;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            display: block;
            background-color: transparent;
        }

        furo-ripple{
            border-radius: 50%;
            margin: 4px;
            width: 40px;
            height: 40px;
        }
        
        .bg{
            border-radius: 50%;
            position: absolute;
            top:4px;
            left:4px;
            bottom: 4px;
            right: 4px;
        }
        :host(:focus-within) .bg {
            background-color: var(--surface-light);
            opacity: 0.2;
        }
        :host(:hover) .bg{
            background-color: var(--surface-dark);
            opacity: 0.2;
        }


    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
     <div class="bg"></div>
      <button ƒ-focus="--focus" aria-label="${this.icon}" ?autofocus=${this.autofocus} ?disabled=${this.disabled} ?danger=${this.danger}>
        <furo-icon icon="${this.icon}"></furo-icon>
         <furo-ripple></furo-ripple>      
      </button>
    `;
  }
}

window.customElements.define('furo-icon-button', FuroIconButton);
