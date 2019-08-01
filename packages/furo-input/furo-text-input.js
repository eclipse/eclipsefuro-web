import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-text-input`
 *
 *  <sample-furo-text-input></sample-furo-text-input>
 *
 * @summary Text input field
 * @customElement
 * @polymer
 * @demo demo-furo-text-input Input samples
 * @appliesMixin FBP
 */
class FuroTextInput extends FBP(LitElement) {

  _FBPReady() {
    super._FBPReady();


    this._value = this.value || "";

    this._FBPAddWireHook("--inputInput", (e) => {
      let input = e.composedPath()[0];
      this.value = input.value;
      this._float = !!input.value;
      /**
       * @event value-changed
       * Fired when value has changed from inside the component
       * detail payload: {String} the text value
       */
      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);
    });
  }

  setValue(string) {
    this._value = string;
    this.value = string;
  }

  set _value(v){
    this._float = !!v;
      this._FBPTriggerWire("--value",v)
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: {type: Boolean, reflect: true},
      /**
       * The start value. Changes will be notified with the `@-value-changed` event
       */
      value: {
        type: String
      },
      /**
       * The label
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      },
      /**
       * Set this attribute to disable the input field
       */
      disabled: {
        type: Boolean, reflect: true
      },
      /**
       * helper for the label
       */
      _float: {
        type: Boolean
      },
      /**
       * The hint text for the field.
       */
      hint: {
        type: String,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
      }


    };
  }

  focus() {
    this._FBPTriggerWire("--focus");
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
            display: inline-block;
            position: relative;
            font-size: 12px;
            box-sizing: border-box;
            margin: 0 0 14px 0;
            padding: 8px 0 2px 0;
            height: 28px;
            font-family: "Roboto", "Noto", sans-serif;
            line-height: 1.5;
        }

        :host([hidden]) {
            display: none;
        }


        input {
            border: none;
            background: 0 0;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: 100%;
            text-align: left;
            color: inherit;
            outline: none;
        }

        .border {
            position: absolute;
            width: 100%;
            height: 1px;
            top: 28px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
        }

        label {
            position: absolute;
            top: 8px;
            color: rgba(0, 0, 0, .26);
            font-size: 12px;
            pointer-events: none;
            display: block;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-align: left;
        }

        label[float="true"] {
            color: var(--on-background, #333333);
            font-size: 10px;
            top: -4px;
            visibility: visible;
        }

        * {
            transition: all 150ms ease-out;
        }

        .hint, .errortext {
            position: absolute;
            top: 30px;
            font-size: 10px;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
        }

        :host(:focus-within) .hint {
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }

        
        :host([error]) .border {
            border-color: var(--error, red);
            border-width: 1px;
        }

        .errortext{
            color: var(--error, red);
        }

        :host(:focus-within)  .errortext{
            display: none;
        }
        
        :host(:focus-within) label[float="true"] {
            color: var(--accent, #333333);
        }
        
        :host(:focus-within) .border {
            border-color: var(--accent, #3f51b5);
            border-width: 1px;
        }
        :host([error]:focus-within) .border {
            border-color: var(--error, red);
            border-width: 1px;
        }
    `
  }

  render() {
    // language=HTML
    return html` 
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="text" ƒ-.value="--value" @-input="--inputInput(*)"   ƒ-focus="--focus">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this.label}</label>  
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
  }

}

window.customElements.define('furo-text-input', FuroTextInput);
