import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {Helper} from "./lib/helper";

/**
 * `furo-textarea-input`
 *
 *  <furo-textarea-input></furo-textarea-input>
 *
 * @summary Textarea input field
 * @customElement
 * @demo demo-furo-textarea-input Input samples
 * @appliesMixin FBP
 */
class FuroTextareaInput extends FBP(LitElement) {
  constructor(){
    super();
    this.valid = true;
  }
  _FBPReady() {
    super._FBPReady();

    this._value = this.value || "";
    this._FBPAddWireHook("--inputInput", (e) => {

      Helper.triggerValueChanged(this, e );
    });
  }


  /**
   * Updater for the min => minlength attr
   * @param value
   */
  set min(value) {
    Helper.UpdateInputAttribute(this,"minlength", value);
  }

  /**
   * Updater for the max => maxlength attr
   * @param value
   */
  set max(value) {
    Helper.UpdateInputAttribute(this,"maxlength", value);
  }

  /**
   * Updater for the rows attr
   * @param value
   */
  set rows(value) {
    Helper.UpdateInputAttribute(this,"rows", value);
  }

  /**
   * Updater for the cols attr*
   * @param value
   */
  set cols(value) {
    Helper.UpdateInputAttribute(this,"cols", value);
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
       * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * The maximum number of characters (as UTF-16 code units) the user can enter into the textarea input. This must be an integer value 0 or higher. If no maxlength is specified, or an invalid value is specified, the textarea input has no maximum length. This value must also be greater than or equal to the value of minlength.
       */
      max: {
        type: Number
      },
      /**
       * The minimum number of characters (as UTF-16 code units) the user can enter into the textarea input. This must be an non-negative integer value smaller than or equal to the value specified by maxlength. If no minlength is specified, or an invalid value is specified, the textarea input has no minimum length.
       */
      min: {
        type: Number
      },
      /**
       * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
       *
       * If it is not specified, the default value is 20.
       */
      cols: {
        type: Number
      },
      /**
       * The number of visible text lines for the control.
       */
      rows: {
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
      valid:{
        type:Boolean,
        reflect:true
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
            box-sizing: border-box;
            margin: 10px 0 15px 0;
            min-height: 56px;
        }

        :host([hidden]) {
            display: none;
        }

        .wrapper {
            position: relative;
            padding: 0 12px;
            box-sizing: border-box;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        

        textarea {
            
            display: block;
            border: none;
            background: none;
            box-sizing: border-box;
            width: 100%;
            margin: 16px 0;
            padding: 0;
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
            height: 100%;
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

        :host(:not([filled])) label span {
            top: 0;
            position: relative;
        }

        :host(:not([filled])) label {
            padding: 0 4px;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-left: none;
            border-right: none;
            line-height: 56px;
        }

        :host(:not([filled])) label[float], :host(:not([filled]):focus-within) label {
            border-top: none;
        }

        :host(:not([filled])) label[float] span, :host(:not([filled]):focus-within) label span {
            font-size: 12px;
            top: -28px;
            left: 0;
            position: relative;
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
            border: none;
        }


        :host([filled]) label {
            padding: 0 12px;
            line-height: 56px;
        }

        :host([filled]) label span {
            position: relative;
            top: 0;
        }

        :host([filled]) label[float] span, :host(:focus-within) label span {
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

        

        

        :host(:focus-within:not([valid])) label {
            color: var(--input-error-text-color, var(--error, red));
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
         <textarea id="input" ?autofocus=${this.autofocus} ?readonly=${this.disabled || this.readonly} 
        ƒ-.value="--value"  @-input="--inputInput(*)"   ƒ-focus="--focus"></textarea>          
      </div>
      
      
   
      
      
      
      <div class="borderlabel">
      <div class="left-border"></div>
      <label ?float="${this._float || this.float}" for="input"><span>${this.label} ${this.required ? html`*` : html``}</span></label>
      <div class="right-border"></div>
      </div>
      
      
      <div class="ripple-line"></div>           
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
    `;
  }

}

window.customElements.define('furo-textarea-input', FuroTextareaInput);
