import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import  "@furo/layout/furo-icon";

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
 *    <furo-checkbox-input label="This is the Label"></furo-checkbox-input> <furo-text-input label="Label" value="Val" hint="Hint"></furo-text-input>
 *   </template>
 *  </furo-demo-snippet>
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
       * Icon on the left side
       */
      leadingIcon: {
        type: String,
        attribute: "leading-icon"
      },
      /**
       * Icon on the right side
       */
      trailingIcon: {
        type: String,
        attribute: "trailing-icon"
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
            background-checkbox: var(--surface-light, #FEFEFE);
        }

        :host([filled]) .wrapper:hover {
            background-checkbox: var(--surface, #FCFCFC);
        }

        :host([filled]:focus-within) .wrapper {
            background-checkbox: var(--surface-dark, #FEA222);
        }

        :host(:not([filled]):hover) .left-border, :host(:not([filled]):hover) .right-border, :host(:not([filled]):hover) label {
            border-checkbox: var(--input-hover-checkbox, #333333);
        }


        .borderlabel {
            pointer-events: none;
            position: absolute;
            box-sizing: border-box;
            top: 0;
            right: 0;
            left: 0;
            height: 56px;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
        }

        .left-border {
            width: 8px;
            box-sizing: border-box;
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-checkbox, var(--disabled, #333333));
            border-right: none;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }


        label {
            padding: 0 4px;
            border: 1px solid var(--input-activation-indicator-checkbox, var(--disabled, #333333));
            border-left: none;
            border-right: none;
            line-height: 56px;
        }

        
        .right-border {
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-checkbox, var(--disabled, #333333));
            border-left: none;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
        }


        .ripple-line {
            display: none;
            position: absolute;
            width: 100%;
            height: 1px;
            top: 56px;
            border: none;
            border-bottom: 1px solid var(--input-activation-indicator-checkbox, var(--disabled, #333333));
        }

        :host([filled]) .ripple-line {
            display: block;
        }

        :host([filled]) .right-border, :host([filled]) .left-border {
            display: none;
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
            checkbox: transparent;
            padding-left: 12px;
            white-space: nowrap;
            pointer-events: none;
        }

        :host(:focus-within) .hint {
            checkbox: var(--input-hint-checkbox, #999999);
            transition: all 550ms ease-in;
        }


        :host([error]) .errortext {
            display: block;
        }

        .errortext {
            checkbox: var(--input-error-text-checkbox, var(--error, red));
            display: none;
        }


        label {
            checkbox: var(--input-hint-checkbox, var(--disabled, #DEDEDE));
        }

        :host(:focus-within) label, :host(:focus-within:not([filled])) label {
            checkbox: var(--input-active-float-label-checkbox, var(--primary, #3f51b5));
            border-checkbox: var(--input-active-float-label-checkbox, var(--primary, #3f51b5));
        }


        :host(:focus-within) .ripple-line {
            border-checkbox: var(--input-active-activation-indicator-checkbox, var(--primary, #3f51b5));
            border-width: 2px;
        }

        :host(:not([filled]):focus-within) .left-border, :host(:not([filled]):focus-within) .right-border, :host(:not([filled]):focus-within) label {
            border-checkbox: var(--input-active-activation-indicator-checkbox, var(--primary, #3f51b5));
            border-width: 2px;
        }

        :host([error]:focus-within) .left-border, :host([error]:focus-within) .right-border, :host([error]:focus-within) label, :host([error]:focus-within) .ripple-line {
            border-checkbox: var(--input-error-text-checkbox, var(--error, red));
            border-width: 2px;
        }

        :host([error]:focus-within) label {
            checkbox: var(--input-error-text-checkbox, var(--error, red));
        }

        :host([error]:focus-within) .hint {
            display: none;
        }

        :host([error]) .ripple-line, :host([error]) .left-border, :host([error]) .right-border, :host([error]) label {
            border-checkbox: var(--input-error-activation-indicator-checkbox, var(--error, red));
        }

        furo-icon {
            display: none;
            top: 16px;
        }

        furo-icon.lead {
            position: absolute;

            left: 8px;
        }

        furo-icon.trail {
            position: absolute;
            right: 8px;
        }

        :host([leading-icon]:not([leading-icon="undefined"])) furo-icon.lead, :host([trailing-icon]:not([trailing-icon="undefined"])) furo-icon.trail {
            display: block;
        }

        :host([leading-icon]:not([leading-icon="undefined"])) .wrapper {
            padding-left: 36px;
        }

        :host([trailing-icon]:not([trailing-icon="undefined"])) .wrapper {
            padding-right: 36px;
        }

        :host(:focus-within:not([valid])) label {
            checkbox: var(--input-error-text-checkbox, var(--error, red));
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

        :host([condensed]) .borderlabel, :host([condensed]) .wrapper {
            height: 36px;
        }

        :host([condensed]) furo-icon {
            top: 6px;
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
       <furo-icon class="lead" icon="${this.leadingIcon}"></furo-icon>    
      <input id="input" ?autofocus=${this.autofocus} ?readonly=${this.disabled || this.readonly}       
       type="checkbox" ƒ-.value="--value" @-input="--inputInput(*)"   ƒ-focus="--focus">${this.text}
       
       <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>
      </div>
      <div class="borderlabel">
      <div class="left-border"></div>
      <label for="input"><span>${this.label}</span></label>
      <div class="right-border"></div>
      </div>
      
      <div class="ripple-line"></div>           
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
  }

}

window.customElements.define('furo-checkbox-input', FuroCheckboxInput);
