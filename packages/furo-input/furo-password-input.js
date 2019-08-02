import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-password-input`
 *
 *  <furo-password-input label="Password" hint="Look under your keyboard"></furo-password-input>
 *
 * @summary Password input field
 * @customElement
 * @polymer
 * @demo demo-furo-password-input Input samples
 * @appliesMixin FBP
 */
class FuroPasswordInput extends FBP(LitElement) {

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
       * detail payload: {String} the password value
       */
      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);
    });
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
       * The pattern attribute, when specified, is a regular expression that the input's value must match in order for the value to pass constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type, and as documented in our guide on regular expressions; the 'u' flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.
       *
       * If the specified pattern is not specified or is invalid, no regular expression is applied and this attribute is ignored completely.
       */
      pattern:{
        type:String
      },
      /**
       * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * The maximum number of characters (as UTF-16 code units) the user can enter into the password input. This must be an integer value 0 or higher. If no maxlength is specified, or an invalid value is specified, the password input has no maximum length. This value must also be greater than or equal to the value of minlength.
       */
      max: {
        type: Number
      },
      /**
       * The minimum number of characters (as UTF-16 code units) the user can enter into the password input. This must be an non-negative integer value smaller than or equal to the value specified by maxlength. If no minlength is specified, or an invalid value is specified, the password input has no minimum length.
       */
      min: {
        type: Number
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean, reflect: true
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      readonly: {
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
  /**
   * Sets the value for the input field.
   * @param {String} string
   */
  setValue(string) {
    this._value = string;
    this.value = string;
  }

  /**
   * Sets the focus on the field.
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * Makes the password visible.
   */
  makeVisible(){
    let f = this.shadowRoot.querySelector("input");
    f.setAttribute("type","text");
  }
  /**
   * Makes the password invisible again (this is the default).
   */
  makeInvisible(){
    let f = this.shadowRoot.querySelector("input");
    f.setAttribute("type","password");
  }

  /**
   * Sets the field to readonly
   */
  disable(){
    this.readonly = true;
  }
  /**
   * Makes the field writable.
   */
  enable(){
    this.readonly = false;
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

  /**
   *
   * @return {TemplateResult | TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html` 
      <input id="input" ?autofocus=${this.autofocus} ?readonly=${this.disabled || this.readonly} 
       pattern="${this.pattern}"
       maxlength="${this.max}"
       minlength="${this.min}"
       type="password" ƒ-.value="--value" @-input="--inputInput(*)"   ƒ-focus="--focus">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this.label}</label>  
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
  }

}

window.customElements.define('furo-password-input', FuroPasswordInput);
