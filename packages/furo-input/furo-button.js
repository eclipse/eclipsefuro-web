import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-ripple";
import "@furo/icon/furo-icon";

/**
 * `furo-button` displays a button.
 *
 *  ```html
 *  <!-- Label can be set with attribute -->
 *  <furo-button label="Label"></furo-button>
 *
 *  <!-- Label can be set inside tag -->
 *  <furo-button>Label</furo-button>
 *  ```
 * <sample-furo-button></sample-furo-button>
 *
 *
 * @summary a button
 * @customElement
 * @demo furo-button-playground Furo-button playground
 * @demo demo-furo-button basic usage
 * @demo demo-furo-input-together Different input elements together
 * @appliesMixin FBP
 */
class FuroButton extends FBP(LitElement) {

  constructor() {
    super();
    this.label = this.innerText;
    this.disabled = false;
    this.danger = false;
  }

  /**
   * Set the focus to the button
   * @param e
   */
  focus(e) {
    this._FBPTriggerWire("--focus");
  }


  /**
   * Disables the button
   */
  disable() {
    this.disabled = true;
  }

  /**
   * Enables the button
   */
  enable() {
    this.disabled = false;
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
       * Optional icon
       */
      icon: {
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
      ,
      /**
       * Give the button a "box" with shadow
       */
      raised: {
        type: Boolean
      },
      /**
       * Give the button a "box"
       */
      unelevated: {
        type: Boolean
      },

      /**
       * Give the button a "border"
       */
      outline: {
        type: Boolean
      },
      /**
       * Sets the color to the primary color (--primary)
       */
      primary: {
        type: Boolean
      },
      /**
       * Sets the color to the secondary color (--secondary)
       */
      secondary: {
        type: Boolean
      },
      /**
       * Sets the color to the accent color (--accent)
       */
      accent: {
        type: Boolean
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
    return Theme.getThemeForComponent('FuroButton') || css`
        :host {
            display: inline-block;
            position: relative;
            font-size: 16px;
            box-sizing: border-box;
            min-width: 64px;
            white-space: nowrap;
        }

        :host([hidden]) {
            display: none;
        }

        * {
            transition: all 100ms ease-in;
        }

        button {
            font-family: "Roboto", "Noto", sans-serif;
            border-radius: 4px;
            border: 1px solid transparent;
            width: 100%;
            cursor: pointer;
            color: var(--on-surface);
            padding: 0  var(--furo-button-padding, var(--spacing-s, 16px));;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 500;
            outline: none;
            line-height: 34px;
            background-color: transparent;
            box-sizing: border-box;
        }

        :host([unelevated]) button {
            background-color: var(--surface, #f7f7f7);
            color: var(--on-surface, #333333);
        }

        :host([disabled]) button[disabled], :host([disabled]) button[disabled]:hover {
            color: var(--disabled, #eeeeee);
            cursor: not-allowed;
        }

        :host([raised][disabled]) button[disabled] ,:host([raised][disabled]) button[disabled]:hover,  :host([unelevated][disabled]) button[disabled] ,:host([unelevated][disabled]) button[disabled]:hover ,  :host([outline][disabled]) button[disabled] ,:host([outline][disabled]) button[disabled]:hover {
            background-color: var(--disabled, #eeeeee);
            color: var(--on-disabled, #333333);
            border-color:var(--disabled, #eeeeee);
            cursor: not-allowed;
        }

        
        :host([primary]) button {
            color: var(--primary);
        }
        :host([raised][primary]) button, :host([unelevated][primary]) button {
            background-color: var(--primary);
            color: var(--on-primary);
        }
        :host([outline][primary]) button {
            background-color: transparent;
            color: var(--primary);
            border: 1px solid var(--primary);
        }
        :host([raised][primary]) button:focus, :host([unelevated][primary]) button:focus{
            background-color: var(--primary-light);
        }
        :host([raised][primary]) button:hover, :host([unelevated][primary]) button:hover{
            background-color: var(--primary-dark);
        }
        :host([primary]) button:focus{
            background-color: var(--focus-color, var(--surface-light, #F3F3F3));
        }
        :host([primary]) button:hover{
            background-color: var(--hover-color, var(--surface-dark, #F1F1F1));
        }



        :host([accent]) button {
            color: var(--accent);
        }
        :host([raised][accent]) button, :host([unelevated][accent]) button {
            background-color: var(--accent);
            color: var(--on-accent);
        }
        :host([outline][accent]) button {
            background-color: transparent;
            color: var(--accent);
            border: 1px solid var(--accent);
        }
        :host([raised][accent]) button:focus, :host([unelevated][accent]) button:focus{
            background-color: var(--accent-light);
        }
        :host([raised][accent]) button:hover, :host([unelevated][accent]) button:hover{
            background-color: var(--accent-dark);
        }
        :host([accent]) button:focus{
            background-color: var(--focus-color, var(--surface-light, #F3F3F3));
        }
        :host([accent]) button:hover{
            background-color: var(--hover-color, var(--surface-dark, #F1F1F1));
        }


        :host([secondary]) button {
            color: var(--secondary);
        }
        :host([raised][secondary]) button, :host([unelevated][secondary]) button {
            background-color: var(--secondary);
            color: var(--on-secondary);
        }
        :host([outline][secondary]) button {
            background-color: transparent;
            color: var(--secondary);
            border: 1px solid var(--secondary);
        }
        :host([raised][secondary]) button:focus, :host([unelevated][secondary]) button:focus{
            background-color: var(--secondary-light);
        }
        :host([raised][secondary]) button:hover, :host([unelevated][secondary]) button:hover{
            background-color: var(--secondary-dark);
        }
        :host([secondary]) button:focus{
            background-color: var(--focus-color, var(--surface-light, #F3F3F3));
        }
        :host([secondary]) button:hover{
            background-color: var(--hover-color, var(--surface-dark, #F1F1F1));
        }

        
        


        :host([danger]) button {
            color: var(--danger, #ff0000);
        }

        :host([raised][danger]) button, :host([unelevated][danger]) button {
            background-color: var(--danger, #ff0000);
            color: var(--on-danger, #FFFFFF);
        }
 

        :host([outline][danger]) button {
            background-color: transparent;
            color: var(--danger);
            border: 1px solid var(--danger);
        }

        :host([raised][danger]) button:focus, :host([unelevated][danger]) button:focus{
            background-color: var(--danger-light, #FFFFFF);
          
        }
        :host([raised][danger]) button:hover, :host([unelevated][danger]) button:hover{
            background-color: var(--danger-dark);
            
        }
        :host([danger]) button:focus{
            background-color: var(--focus-color, var(--surface-light, #F3F3F3));
        }
        :host([danger]) button:hover{
            background-color: var(--hover-color, var(--surface-dark, #F1F1F1));
        }


        :host([outline]) button {
            background-color: transparent;
            color: var(--on-surface);
            border: 1px solid var(--on-surface);
        }

        button:active {
            box-shadow: none;
        }
   
        
        button:focus, :host([unelevated]) button:focus, :host([outline]) button:focus{
            background-color: var(--focus-color, var(--surface-light, #F3F3F3));
        }
        button:hover, :host([unelevated]) button:hover, :host([outline]) button:hover{
            background-color: var(--hover-color, var(--surface-dark, #F1F1F1));
        }

        :host([raised]) button:focus {
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
        }

        :host([raised]) button {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        :host([raised]) button:active {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }


        furo-icon {
            width: 18px;
            height: 18px;
            margin: 0 8px 0 12px;
        }

        :host([icon]) button {
            padding: 0 16px 0 0;
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
      <button @-keypressed="--buttonPressed" ƒ-focus="--focus" ?autofocus=${this.autofocus} ?disabled=${this.disabled} ?danger=${this.danger}><furo-icon ?hidden="${!this.icon}" icon="${this.icon}"></furo-icon>${this.label}       
        <furo-ripple ƒ-trigger="--buttonPressed"></furo-ripple>
      </button>
    `;
  }
}

window.customElements.define('furo-button', FuroButton);
