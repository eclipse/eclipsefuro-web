import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import  "@furo/layout/furo-icon";
import {Helper} from "./lib/helper";

/**
 * `furo-date-input`
 *
 * ### Sample
 *  <furo-date-input value="2020-02-20" step="7" label="Date" hint="Type in a date"></furo-date-input>
 *
 * If you type in a date outside the min max range or the step, an "error" will be indicated. But not the error text.
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-hint-color` | Color of hint text | #999999 | --
 * `--input-label-color` | Color of label in field| `--disabled,` | #333333
 * `--input-label-float-color` | Color of label when floating | `--on-surface` | #333333
 * `--input-active-float-label-color` | Color of floating label when active  | `--primary` | #3f51b5
 * `--input-activation-indicator-color` | Color of activation indicator when not selected| `--disabled` | #333333
 * `--input-error-activation-indicator-color` | Color of activation indicator in error state | `--error` | red
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-activation-indicator-color` | Color of factivation indicator in active  state   | `--primary` | #3f51b5
 * `--input-active-error-activation-indicator-color` | Color of factivation indicator in active error state   | `--error` | red
 *
 * @summary Date input field
 * @customElement
 * @polymer
 * @demo demo-furo-date-input Input sample
 * @demo demo-furo-input-together Different input elements together
 * @appliesMixin FBP
 */
class FuroDateInput extends FBP(LitElement) {

  constructor() {
    super();
    this.step = "any";
    this.valid = true;
  }

  /**
   * Updater for the min attr
   *
   * @param value
   */
  set min(value) {
    Helper.UpdateInputAttribute(this,"min", value);
  }

  /**
   * Updater for the max attr
   *
   * @param value
   */
  set max(value) {
    Helper.UpdateInputAttribute(this,"max", value);
  }

  /**
   * Updater for the step attr
   *
   * @param value
   */
  set step(value) {
    Helper.UpdateInputAttribute(this,"step", value);
  }

  _FBPReady() {
    super._FBPReady();


    this._value = this.value || "";

    this._FBPAddWireHook("--inputInput", (e) => {
      let input = e.composedPath()[0];

      // mark min max step error
      this.valid = !(input.validity.rangeOverflow || input.validity.rangeUnderflow || input.validity.stepMismatch);

      if (!input.validity.badInput) {
        this.value = input.value;
        this._float = !!input.value;
        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: {String} the date value like "12:15" or "11:59:59"
         */
        let customEvent = new Event('value-changed', {composed: true, bubbles: true});
        customEvent.detail = this.value;
        this.dispatchEvent(customEvent);
      }
    });

    // set pattern, min, max, step
    let inputField = this.shadowRoot.querySelector("#input");


    if (this.min) {
      inputField.setAttribute("min", this.min);
    }
    if (this.max) {
      inputField.setAttribute("max", this.max);
    }
    if (this.step) {
      inputField.setAttribute("step", this.step);
    }
  }


  set _value(v) {
    this._float = !!v;
    this._FBPTriggerWire("--value", v)
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
       * The step attribute is a number that specifies the granularity that the value must adhere to, or the special value any, which is described below. Only values which are equal to the basis for stepping (min if specified, value otherwise, and an appropriate default value if neither of those is provided) are valid.
       *
       * A string value of any means that no stepping is implied, and any value is allowed (barring other constraints, such as min and max).
       *
       * **Tipp:** set a `min` value as reference for the stepping calculations.
       */
      step: {
        type: String
      },
      /**
       * The latest date to accept. If the value entered into the element is later than this date, the element fails constraint validation. If the value of the max attribute isn't a valid string which follows the format yyyy-MM-dd, then the element has no maximum value.
       *
       * This value must specify a date string later than or equal to the one specified by the min attribute.
       *
       * For date inputs, the value of step is given in days, with a scaling factor of 86,400,000 (since the underlying numeric value is in milliseconds). The default value of step is 1, indicating 1 day.
       *
       * [more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step)
       */
      max: {
        type: String
      },
      /**
       * The earliest date to accept as a valid input.
       *
       * Dates earlier than this will cause the element to fail constraint validation. If the value of the min attribute isn't a valid string which follows the format yyyy-MM-dd, then the element has no minimum value.
       *
       * This value must specify a date string earlier than or equal to the one specified by the max attribute.
       */
      min: {
        type: String
      },
      /**
       * The latest date to accept, in the syntax described under Date value format
       *
       * A string indicating the latest date to accept, specified in the same [date value format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#Date_value_format). If the specified string isn't a valid date, no maximum value is set.
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
       * text for errors
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
   * Set the value for the field
   * @param {Number} num a valid date number value
   */
  setValue(num) {
    this._value = num;
    this.value = num;
  }


  set errortext(v) {
    this._errortext = v;
    this.__initalErrorText = v;
  }

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
            margin: 10px 0 15px 0;
            height: 56px;
            width: 174px;
        }

        :host([hidden]) {
            display: none;
        }

        .wrapper {
            position: relative;
            padding: 0 12px;
            box-sizing: border-box;
            height: 56px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .iwrap {
            position: relative;
        }


        input {
            position: absolute;
            top: 16px;
            border: none;
            background: none;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            width: 100%;
            line-height: 24px;
            color: inherit;
            outline: none;
            font-family: "Roboto", "Noto", sans-serif;
            font-kerning: auto;
            font-size: 16px;
            font-stretch: 100%;
            font-style: normal;
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

        :host(:not([filled]):hover) .left-border, :host(:not([filled]):hover) .right-border, :host(:not([filled]):hover) label {
            border-color: var(--input-hover-color, #333333);
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
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-right: none;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }


        :host(:not([filled])) label {
            padding: 0 4px;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-left: none;
            border-right: none;
            border-top: none;
            line-height: 56px;
        }


        :host(:not([filled])) label span {
            position: relative;
            font-size: 12px;
            top: -28px;
            left: 0;
        }


        .right-border {
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
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
            top: 54px;
            border: none;
            border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
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

        :host([filled]) label span {
            font-size: 12px;
            font-weight: 400;
            top: -20px;
            position: relative;
        }


        * {
            transition: all 200ms ease-out;
        }

        .hint, .errortext {
            position: absolute;
            bottom: -19px;
            font-size: 12px;
            color: transparent;
            padding-left: 12px;
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
            color: var(--input-hint-color, var(--disabled, #DEDEDE));
        }

        :host(:focus-within) label, :host(:focus-within:not([filled])) label {
            color: var(--input-active-float-label-color, var(--primary, #3f51b5));
            border-color: var(--input-active-float-label-color, var(--primary, #3f51b5));
        }


        :host(:focus-within) .ripple-line {
            border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
            border-width: 2px;
        }

        :host(:not([filled]):focus-within) .left-border, :host(:not([filled]):focus-within) .right-border, :host(:not([filled]):focus-within) label {
            border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
            border-width: 2px;
        }

        :host([error]:focus-within) .left-border, :host([error]:focus-within) .right-border, :host([error]:focus-within) label, :host([error]:focus-within) .ripple-line {
            border-color: var(--input-error-text-color, var(--error, red));
            border-width: 2px;
        }

        :host([error]:focus-within) label {
            color: var(--input-error-text-color, var(--error, red));
        }

        :host([error]:focus-within) .hint {
            display: none;
        }


        :host([error]) .ripple-line, :host([error]) .left-border, :host([error]) .right-border, :host([error]) label {
            border-color: var(--input-error-activation-indicator-color, var(--error, red));
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
            color: var(--input-error-text-color, var(--error, red));
        }

        :host([condensed]) input {
            top: 12px;
            font-size: 14px;
        }

        :host([condensed]:not([filled])) label, :host([filled][condensed]) label {
            line-height: 40px;
            font-size: 14px;
        }

        :host([condensed][filled]) input {
            top: 12px;
        }

        :host([condensed]) .borderlabel , :host([condensed]) .wrapper{
            height: 40px;
        }

        :host([condensed]) furo-icon {
            top: 6px;
        }

        :host([condensed]) .ripple-line {
            top: 38px;
        }

       

        :host([condensed]) label span {
            top:-20px;
            
        }

        :host([condensed]) {
            height: 40px;
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
       <div class="iwrap">
      <input id="input" ?autofocus=${this.autofocus} ?readonly=${this.disabled || this.readonly} 
       type="date"     
       ƒ-.value="--value" 
       @-input="--inputInput(*)"   
       ƒ-focus="--focus">
       </div>
       <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>
      </div>
      <div class="borderlabel">
      <div class="left-border"></div>
      <label ?float="${this._float||this.float}" for="input"><span>${this.label}</span></label>
      <div class="right-border"></div>
      </div>
      
      <div class="ripple-line"></div>           
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
  }


}

window.customElements.define('furo-date-input', FuroDateInput);
