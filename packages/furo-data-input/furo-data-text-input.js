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

  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-text-input. **bubbles**
   */

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
       * Overrides the label text from the **specs**
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * Overrides the hint text from the **specs**
       */
      hint: {
        type: String,
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
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
      valid:{
        type:Boolean,
        reflect:true
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed:{
        type:Boolean
      },
      /**
       * passes always float the label
       */
      float:{
        type:Boolean
      }
    }
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    if (fieldNode === undefined) {
      console.warn("Invalid binding ");
      console.log(this);
      return
    }

    this.field = fieldNode;
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
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-text-input{
            width: 100%;
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
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-text-input>      
    `;
  }

}

customElements.define('furo-data-text-input', FuroDataTextInput);
