import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "./furo-ripple";

/**
 * `furo-button`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-button.html
 * @appliesMixin FBP
 */
class FuroButton extends FBP(LitElement) {

  constructor() {
    super();
    this.label = "label not set";
    this.disabled = false;
    this.danger = false;
  }

  focus(e) {
    this._FBPTriggerWire("--focus", e);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Beschriftung des buttons
       */
      label: {
        type: String
      },
      /**
       * Set danger to true if it is dangerous to press this button
       */
      danger: {
        type: Boolean,
        reflect: true
      },
      /**
       * Set disabled to disable the button
       */
      disabled: {
        type: Boolean,
        reflect: true
      },
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
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }

        :host {
            display: inline-block;
            position: relative;
            font-size: 16px;
            box-sizing: border-box;
            margin: 0;
            padding: 8px 0;
        }

        * {
            transition: all 200ms ease-in;
        }

        button {
            position: relative;
            border-radius: 2px;
            width: 100%;
            cursor: pointer;
            background-color: var(--primary-color);
            color: var(--on-primary);
            padding: 12px 24px;
            border: none;
            text-transform: uppercase;
            font-size: 14px;
        }

        button:focus {
            outline: none;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            background-color: var(--secondary-color);
            color: var(--on-secondary);
        }

        :host([danger]) button:focus {
            background-color: lightgray;
            box-sizing: border-box;
            color: var(--danger-color);
        }

        button[disabled]  {
            box-sizing: border-box;
            background-color: var(--disabled-color,#eeeeee);
            color: var(--on-disabled,#333333);
            
        }

        :host([danger]) button {
            background-color: var(--danger-color, #ff0000);
            color: var(--on-danger, #FFFFFF);
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
      <button @-click="--click" ƒ-focus="--focus" ?autofocus=${this.autofocus} ?disabled=${this.disabled} ?danger=${this.danger}>${this.label}
        <slot></slot>
        <furo-ripple ƒ-animate="--click"></furo-ripple>
      </button>
    `;
  }
}

window.customElements.define('furo-button', FuroButton);
