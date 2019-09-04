import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-text-input";

import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
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
    this._FBPAddWireHook("--valueChanged", (val) => {

      // by valid input reset meta and constraints
      CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
      if (this.field) {
        this.field.value = val;
      }
    });


    this._FBPAddWireHook("--inputInvalid", (val) => {

        if (val) {
          if(val.patternMismatch) {
              this._hint = this._patternErrorMessage;
          }
          else if (val.tooShort) {
              this._hint = this._minErrorMessage;
          }
          else if(val.tooLong)
          {
              this._hint = this._maxErrorMessage;
          }

          this.requestUpdate();
      }
    });
  }


  // label setter and getter are needed for rendering on the first time
  set label(l) {
    this._label = l;
    this._l = l;
  }
  set hint(v) {
    this._hint = v;
    this._h = v;
  }

  set pattern(p) {
    this._pattern = p;
    this._p = p;
  }

  set min(i) {
    this._min = i;
    this._i = i;
  }

  set max(x) {
    this._max = x;
    this._x = x;
  }

  set step(s) {
    this._step = s;
    this._s = s;
  }

  set readonly(r) {
    this._readonly = r;
    this._r = r;
  }

  get label(){
    return this._l;
  }

  get hint(){
    return this._h;
  }

  get pattern() {
    return this._p;
  }

  get min() {
    return this._i;
  }

  get max() {
    return this._x;
  }

  get step() {
    return this._s;
  }

  get readonly() {
    return this._r;
  }
  /**
   * Sets the field to readonly
   */
  disable() {
    this._readonly = true;
  }

  /**
   * Makes the field writable.
   */
  enable() {
    this._readonly = false;
  }


  /**
  * todo , add properties for pattern.error.hint , min.error.hint and max.error.hint
  */
  static get properties() {
    return {

      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
      },
      /**
      * Overrides the pattern from the **specs**.
      *
      * Use with caution, normally the specs defines this value.
      */
      pattern: {
        type: String
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
       * passes always float the label
       */
      float: {
        type: Boolean
      }
    }
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
    CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
    this._updateField();

    this.field.addEventListener('field-value-changed', (e) => {
      this._updateField();
    });

    // update meta and constraints when they change
    this.field.addEventListener('this-metas-changed', (e) => {
      CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
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

    this._FBPTriggerWire('--value', this.field.value);
  }



  _updateField() {
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

        furo-text-input {
            width: 100%;
        }
    `
  }

  render() {
    // language=HTML
    return html`
       <furo-text-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly || this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          pattern="${this._pattern}"
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this._hint}" 
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-text-input>      
    `;
  }

}

customElements.define('furo-data-text-input', FuroDataTextInput);
