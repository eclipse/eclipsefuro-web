import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-number-input`
 *
 *  <sample-furo-number-input></sample-furo-number-input>
 *
 * @summary Number input field
 * @customElement
 * @polymer
 * @demo demo-furo-number-input Input sample
 * @appliesMixin FBP
 */
class FuroNumberInput extends FBP(LitElement) {

  constructor() {
    super();
    this.step = "any";
  }

  _FBPReady() {
    super._FBPReady();


    this._value = this.value || "";

    this._FBPAddWireHook("--inputInput", (e) => {
      let input = e.composedPath()[0];

      // mark min max error
      this.error = input.validity.rangeOverflow || input.validity.rangeUnderflow;

      if (!input.validity.badInput) {
        this.value = input.value;
        this._float = !!input.value;
        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: {String} the number value
         */
        let customEvent = new Event('value-changed', {composed: true, bubbles: true});
        customEvent.detail = this.value;
        this.dispatchEvent(customEvent);
      }
    });
  }

  setValue(num) {
    this._value = num;
    this.value = num;
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
        type: Number
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
        type: Number
      },
      /**
       * The minimum value to accept for this input. If the value of the element is less than this, the element fails constraint validation. If a value is specified for min that isn't a valid number, the input has no minimum value.
       *
       * This value must be less than or equal to the value of the max attribute.
       */
      min: {
        type: Number
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

        .errortext {
            color: var(--error, red);
        }

        :host(:focus-within) .errortext {
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
      <input id="input" ?autofocus=${this.autofocus} ?readonly=${this.disabled || this.readonly} 
       type="number" 
       step="${this.step}"
       min="${this.min}"
       max="${this.max}"
       pattern="${this.pattern}"
       ƒ-.value="--value" 
       @-input="--inputInput(*)"   
       ƒ-focus="--focus">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this.label}</label>  
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
  }

}

window.customElements.define('furo-number-input', FuroNumberInput);
