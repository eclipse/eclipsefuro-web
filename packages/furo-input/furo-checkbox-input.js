import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import  "@furo/layout/furo-icon";
import  "./furo-checkbox";

/**
 * `furo-checkbox-input`
 *
 * # WORK IN PROGRESS
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to select multiple options from a set.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-checkbox-input label="This is the Label"></furo-checkbox-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-hint-color` | Color of hint text | #999999 | --
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-float-label-color` | Color of floating label when active  | `--primary` | #3f51b5
 * `--input-activation-indicator-color` | Color of activation indicator when not selected| `--disabled` | #333333
 * `--input-error-activation-indicator-color` | Color of activation indicator in error state | `--error` | red
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-activation-indicator-color` | Color of factivation indicator in active  state   | `--primary` | #3f51b5
 *
 * @summary checkbox input
 * @customElement
 * @demo demo-furo-checkbox-input Basic demo
 * @appliesMixin FBP
 */
class FuroCheckboxInput extends FBP(LitElement) {

  constructor() {
    super();
    this.valid = true;
  }

  _FBPReady() {
    super._FBPReady();

    this._value = this.value || "";
    this._FBPAddWireHook("--inputInput", (e) => {

      let input = e.composedPath()[0];
      this.error = input.validity.rangeOverflow || input.validity.rangeUnderflow || input.validity.patternMismatch;
      this._float = !!input.value;

      if (input.validity.valid) {
        this.value = input.value;

        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: {String} the text value
         */
        let customEvent = new Event('value-changed', {composed: true, bubbles: true});
        customEvent.detail = this.value;
        this.dispatchEvent(customEvent);
      }
    });

    // set pattern, min, max
    let inputField = this.shadowRoot.querySelector("#input");
    if (this.pattern) {
      inputField.setAttribute("pattern", this.pattern);
    }
    if (this.min) {
      inputField.setAttribute("minlength", this.min);
    }
    if (this.max) {
      inputField.setAttribute("maxlength", this.max);
    }

  }


  set _value(v) {
    this._float = !!v;
    this._FBPTriggerWire("--value", v)
  }

  set value(v){
    this._v = v;
    this._value = v;
  }

  get value(){
    return this._v;
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
       * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
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
       * Lets the placeholder always floating
       */
      float:{
        type:Boolean
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
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true
      },
       /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean
      },
      /**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */
      filled: {
        type: Boolean
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
   * Setter method for errortext
   * @param {String} errortext
   * @private
   */
  set errortext(v) {
    this._errortext = v;
    this.__initalErrorText = v;
  }

  /**
   * Getter method for errortext
   * @private
   */
  get errortext() {
    return this._errortext;
  }

  /**
   * Set the field to error state
   *
   * @param [{String}] The new errortext
   */
  setError(text) {
    if (typeof text === "string") {
      this._errortext = text;
    }
    this.error = true;
  }

  /**
   * clears the error and restores the errortext.
   */
  clearError() {
    this.error = false;
    this._errortext = this.__initalErrorText;
  }


  /**
   * Sets the focus on the field.
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * Sets the field to readonly
   */
  disable() {
    this.readonly = true;
  }

  /**
   * Makes the field writable.
   */
  enable() {
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
        /* https://material.io/design/components/text-fields.html#theming */
        :host {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            margin: 14px 0 0 0;
            height: 75px;
            font-family: "Roboto", "Noto", sans-serif;
            min-width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        .wrapper {
            position: relative;
            padding: 0 12px;
            box-sizing: border-box;
            height: 56px;
        }

        input {
            position: absolute;
            top: 10px;
            border: none;
            background: none;
            box-sizing: border-box;
            color: inherit;
            outline: none;
            
        }

        :host([filled]) .wrapper {
            background-color: var(--surface-light, #FEFEFE);
        }

        :host([filled]) .wrapper:hover {
            background-color: var(--surface, #FCFCFC);
        }

        :host([filled]:focus-within) .wrapper {
            background-color: var(--surface-dark, #FEA222);
        }

        :host(:not([filled]):hover) label {
            border-color: var(--input-hover-color, #333333);
        }
        

        label {
            padding: 0 6px;
            line-height: 56px;
        }
        

        .ripple-line {
            display: none;
            position: absolute;
            width: 100%;
            height: 1px;
            top: 56px;
            border: none;
            border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        :host([filled]) .ripple-line {
            display: block;
        }
        

        :host([filled]) label {
            padding: 0 12px;
            line-height: 56px;
            border: none;
        }

        label span {
            left: 32px;
            position: relative;
        }
        
        :host([filled]) label span {
            
            font-weight: 400;
            position: relative;
        }


        * {
            transition: all 200ms ease-out;
        }

        .hint, .errortext {
            position: absolute;
            bottom: 0;
            font-size: 12px;
            color: transparent;
            padding-left: 23px;
            white-space: nowrap;
            pointer-events: none;
        }

        :host(:focus-within) .hint {
            color: var(--input-hint-color, #999999);
            transition: all 550ms ease-in;
        }

        :host([error]) .errortext {
            display: block;
        }

        .errortext {
            color: var(--input-error-text-color, var(--error, red));
            display: none;
        }

        label {
            font-size: 16px;
            color: inherit;
            cursor: pointer;
        }

        :host(:focus-within) label, :host(:focus-within:not([filled])) label {
            color: var(--input-active-float-label-color, var(--primary, #3f51b5));
            border-color: var(--input-active-float-label-color, var(--primary, #3f51b5));
        }

        :host(:focus-within) .ripple-line {
            border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
            border-width: 2px;
        }

        :host(:not([filled]):focus-within) label {
            border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
            border-width: 2px;
        }

        :host([error]:focus-within) label, :host([error]:focus-within) .ripple-line {
            border-color: var(--input-error-text-color, var(--error, red));
            border-width: 2px;
        }

        :host([error]:focus-within) label {
            color: var(--input-error-text-color, var(--error, red));
        }

        :host([error]:focus-within) .hint {
            display: none;
        }

        :host([error]) .ripple-line,  :host([error]) label {
            border-color: var(--input-error-activation-indicator-color, var(--error, red));
        }
        

        :host(:focus-within:not([valid])) label {
            color: var(--input-error-text-color, var(--error, red));
        }

        :host([condensed]) input{
            top:8px;
        }
        :host([condensed]:not([filled])) label, :host([filled][condensed]) label{
            line-height: 36px;
        }
        :host([condensed]) input {
            font-size: 14px;
            margin: 10px;
        }

        :host([condensed][filled]) input {
            font-size: 13px;
        }

        :host([condensed]) .wrapper {
            height: 36px;
        }

        :host([condensed]) .ripple-line {
            top: 36px;
        }

        :host([condensed]) .hint, :host([condensed]) .errortext {
            font-size: 10px;
        }

        :host([condensed]) {
            height: 53px;
        }

        furo-checkbox  {
            position: absolute;
            top: 8px;
        }

        :host([condensed]) furo-checkbox  {
            top: -2px;
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
      <div class="wrapper">
        <furo-checkbox id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled || this.readonly}       
         ƒ-toggle="--click" ƒ-focus="--click" type="checkbox" ƒ-.value="--value" @-input="--inputInput(*)"   ƒ-focus="--focus"></furo-checkbox>
        <label for="input"  @-click="--click"><span>${this.label}</span></label>
      </div>
      
      <div class="ripple-line"></div>           
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
  }

}

window.customElements.define('furo-checkbox-input', FuroCheckboxInput);
