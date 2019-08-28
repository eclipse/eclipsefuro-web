import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-number-input";

/**
 * `furo-data-number-input`
 * Binds a entityObject field to a furo-number-input field
 *
 * <sample-furo-data-number-input></sample-furo-data-number-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a number input
 * @customElement
 * @demo demo-furo-data-number-input Data binding
 * @mixes FBP
 */
class FuroDataNumberInput extends FBP(LitElement) {

  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Number} the number value
   *
   * Comes from underlying component furo-number-input. **bubbles**
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
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
      },
      /**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      min: {
        type: Number,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: Number,
      },
      /**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      step: {
        type: String, // string, because "any" is also a valid step
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean, reflect: true
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
   * Sets the field to readonly
   */
  disable(){
    this._readonly = true;
  }
  /**
   * Makes the field writable.
   */
  enable(){
    this._readonly = false;
  }

  /**
   * Bind a entity field to the number-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
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
      this.requestUpdate();
    });

    this.field.addEventListener('field-became-valid', (e) => {
      // updates wieder einspielen
      this.error = false;
      this.requestUpdate();
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

    // min auf attr ist höher gewichtet
    if (!this.min) {
      this._min = this.field._meta.min;
    } else {
      this._min = this.min;
    }
    // max auf attr ist höher gewichtet
    if (!this.max) {
      this._max = this.field._meta.max;
    } else {
      this._max = this.max;
    }
    // step auf attr ist höher gewichtet
    if (!this.step) {
      this._step = this.field._meta.step;
    } else {
      this._step = this.step;
    }
     // readonly auf attr ist höher gewichtet
    if (!this.readonly) {
      this._readonly = this.field._meta.readonly;
    } else {
      this._readonly = this.readonly;
    }



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
        furo-number-input{
            width: 100%;
        }
    `
  }

  render() {
    // language=HTML
    return html` 
       <furo-number-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          step="${this._step}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this._hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-number-input>      
    `;
  }

}

customElements.define('furo-data-number-input', FuroDataNumberInput);
