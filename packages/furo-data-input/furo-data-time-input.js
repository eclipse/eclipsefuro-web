import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-time-input";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-time-input`
 * Binds a entityObject field to a furo-time-input field
 *
 * <sample-furo-data-time-input></sample-furo-data-time-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a time input
 * @customElement
 * @demo demo-furo-data-time-input Data binding
 * @mixes FBP
 */
class FuroDataTimeInput extends FBP(LitElement) {

  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the time value
   *
   * Comes from underlying component furo-time-input. **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;
    this.errortext = "";


    this._FBPAddWireHook("--valueChanged", (val) => {

      // by valid input reset meta and constraints
      CheckMetaAndOverrides.CheckAttributeOverrides(this);
      if (this.field) {
        this.field.value = val;
      }
    });


    this._FBPAddWireHook("--inputInvalid", (val) => {
      // val is a ValidityState
      // https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
      if (val) {
        if(val.rangeUnderflow) {
          this._hint = this._minErrorMessage;
        }
        else if(val.rangeOverflow)
        {
          this._hint = this._maxErrorMessage;
        }
        else if(val.stepMismatch) {
          this._hint = this._stepErrorMessage;
        }

        this.requestUpdate();
      }
    });
  }


  /**
   * Updater for the min => minlength attr*
   * @param value
   */
  set _min(value) {
    Helper.UpdateInputAttribute(this, "min", value);
  }

  /**
   * Updater for the max attr*
   * @param value
   */
  set _max(value) {
    Helper.UpdateInputAttribute(this, "max", value);
  }

  /**
   * Updater for the label attr
   * @param value
   */
  set _label(value) {
    Helper.UpdateInputAttribute(this, "label", value);
  }

  /**
   * Updater for the hint attr
   * @param value
   */
  set _hint(value) {
    Helper.UpdateInputAttribute(this, "hint", value);
  }

  /**
   * Updater for the leadingIcon attr
   * @param value
   */
  set leadingIcon(value) {
    Helper.UpdateInputAttribute(this, "leading-icon", value);
  }

  /**
   * Updater for the trailingIcon attr
   * @param value
   */
  set trailingIcon(value) {
    Helper.UpdateInputAttribute(this, "trailing-icon", value);
  }

  /**
   * Updater for the errortext attr
   * @param value
   */
  set errortext(value) {
    Helper.UpdateInputAttribute(this, "errortext", value);
  }

  /**
   * Updater for the step attr
   * @param value
   */
  set _step(value) {
    Helper.UpdateInputAttribute(this, "step", value);
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
      },
      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean
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
        type: String,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: String,
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
      }
    }
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
   * Bind a entity field to the time-input. You can use the entity even when no data was received.
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
      this.errortext = this.field._validity.description;
      this.requestUpdate();
    });

    this.field.addEventListener('field-became-valid', (e) => {
      // updates wieder einspielen
      this.error = false;
      this.requestUpdate();
    });
  }



  _updateField() {
    //mark incomming error
    if (!this.field._isValid) {
      this.error = true;
      this.errortext = this.field._validity.description;
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
            width: 104px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-time-input {
            width: 100%;
        }
    `
  }

  render() {
    // language=HTML
    return html` 
       <furo-time-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly || this.disabled} 
          ?error="${this.error}" 
          ?required=${this._required}
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-time-input>      
    `;
  }

}

customElements.define('furo-data-time-input', FuroDataTimeInput);
