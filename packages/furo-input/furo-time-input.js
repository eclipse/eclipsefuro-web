import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-time-input`
 *
 * ### Sample
 *  <furo-time-input value="12:15" label="Time" hint="Type in a time"></furo-time-input>
 *
 * If you type in a time outside the min max range or the step, an "error" will be indicated. But not the error text.
 *
 * @summary Time input field
 * @customElement
 * @polymer
 * @demo demo-furo-time-input Input sample
 * @appliesMixin FBP
 */
class FuroTimeInput extends FBP(LitElement) {

  constructor() {
    super();
    this.step = "any";
  }

  _FBPReady() {
    super._FBPReady();


    this._value = this.value || "";

    this._FBPAddWireHook("--inputInput", (e) => {
      let input = e.composedPath()[0];

      // mark min max step error
      this.error = input.validity.rangeOverflow || input.validity.rangeUnderflow || input.validity.stepMismatch;

      if (!input.validity.badInput) {
        this.value = input.value;
        this._float = !!input.value;
        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: {String} the time value like "12:15" or "11:59:59"
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
       */
      step: {
        type: String
      },
      /**
       * The maximum value to accept for this input. If the value entered into the element exceeds this, the element fails constraint validation. If the value of the max attribute isn't a number, then the element has no maximum value.
       *
       * This value must be greater than or equal to the value of the min attribute.
       */
      max: {
        type: String
      },
      /**
       * The earliest time to accept as a valid input.
       *
       * A string specifying the earliest time to accept, given in the [time value format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#Time_value_format). If the value specified isn't a valid time string, no minimum value is set.
       */
      min: {
        type: String
      },
      /**
       * The latest time to accept, in the syntax described under Time value format
       *
       * A string indicating the latest time to accept, specified in the same [time value format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#Time_value_format). If the specified string isn't a valid time, no maximum value is set.
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
      }


    };
  }
  /**
   * Set the value for the field
   * @param {Number} num a valid time number value
   */
  setValue(num) {
    this._value = num;
    this.value = num;
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
  clearError(){
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
            pointer-events: none;
            display: block;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-align: left;
            color: var(--on-background, #333333);
            font-size: 10px;
            top: -4px;
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

        :host([error]) .errortext {
            display: block;
        }
        .errortext {
            color: var(--error, red);
            display: none;
        }


        :host(:focus-within) .errortext {
            display: none;
        }

        :host(:focus-within) label {
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
       type="time" 
       
       ƒ-.value="--value" 
       @-input="--inputInput(*)"   
       ƒ-focus="--focus">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this.label}</label>  
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this._errortext}</div>
 
    `;
  }

}

window.customElements.define('furo-time-input', FuroTimeInput);
