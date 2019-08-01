import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";
import "@furo/input/furo-text-input";

/**
 * `furo-data-text-input`
 * Binds a entityObject field to a furo-text-input field
 *
 * <sample-furo-data-text-input></sample-furo-data-text-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a text input
 * @customElement
 * @demo demo-furo-data-text-input Data binding
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroDataTextInput extends FBP(LitElement) {

  constructor() {
    super();
    this.error = false;
    this.disabled = false;
    this.errortext = "";
    this.hint = "";

    this._FBPAddWireHook("--valueChanged", (val) => {
      if (this.field) {
        this.field.value = val;
      }
    });


  }

  static get properties() {
    return {

      /**
       * The label
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * The hint text for the field.
       */
      hint: {
        type: String,
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      }
    }
  }

  bindData(d) {
    if (d === undefined) {
      console.warn("Invalid binding ");
      console.log(this);
      return
    }

    this.field = d;
    this._updateField();

    this.field.addEventListener('field-value-changed', (e) => {
      this._updateField();
    });

    this.field.addEventListener('field-became-invalid', (e) => {
      // updates wieder einspielen
      this.error = true;
      this.errortext = this.field._validity.message;
    });

    this.field.addEventListener('field-became-valid', (e) => {
      // updates wieder einspielen
      this.error = false;
    });
  }


  _updateField() {
    // label auf attr ist höher gewichtet
    if (!this.label) {
      this._label = this.field._meta.label;
    } else {
      this._label = this.label;
    }

    // hint auf attr ist höher gewichtet
    if (!this.hint) {
      this._hint = this.field._meta.hint;
    } else {
      this._hint = this.hint;
    }
    this.disabled = this.field._meta.readonly ? true : false;

    //mark incomming error
    if (!this.field._isValid) {
      this.error = true;
      this.errortext = this.field._validity.message;
    }
    this._FBPTriggerWire('--value', this.field.value);
    this.requestUpdate();
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
        }

        :host([hidden]) {
            display: none;
        }
    `
  }

  render() {
    // language=HTML
    return html` 
       <furo-text-input 
          ?autofocus=${this.autofocus} 
          ?disabled=${this.disabled} 
          label="${this._label}" 
          ?error="${this.error}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-text-input>      
    `;
  }

}

customElements.define('furo-data-text-input', FuroDataTextInput);
