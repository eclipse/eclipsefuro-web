import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-password-input";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-password-input`
 * Binds a entityObject field to a furo-password-input field
 *
 * <sample-furo-data-password-input></sample-furo-data-password-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a password input
 * @customElement
 * @demo demo-furo-data-password-input Data binding
 * @demo demo-furo-data-input-together Data binding
 * @mixes FBP
 */
class FuroDataPasswordInput extends FBP(LitElement) {

  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-password-input. **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;

    this._FBPAddWireHook("--valueChanged", (val) => {



      if (this.field) {
        this.field._value= val;
      }
    });
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();
    // check initial overrides
    CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
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
   * Updater for the pattern attr, the prop alone with pattern="${this.pattern}" wont work,
   * becaue it set "undefined" (as a Sting!)
   *
   * @param value
   */
  set _pattern(value) {
    Helper.UpdateInputAttribute(this, "pattern", value);
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
   * Updater for the errortext attr
   * @param value
   */
  set errortext(value) {
    Helper.UpdateInputAttribute(this, "errortext", value);
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
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean
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
    Helper.BindData(this, fieldNode);
  }


  _updateField() {
    this._FBPTriggerWire('--value', this.field._value);
    this.requestUpdate();
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataPasswordInput') || css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-password-input{
            width: 100%;
        }
    `
  }

  render() {
    // language=HTML
    return html` 
       <furo-password-input id="input"
          ?autofocus=${this.autofocus} 
          ?disabled=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}" 
          ?required=${this._required}         
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-password-input>      
    `;
  }

}

customElements.define('furo-data-password-input', FuroDataPasswordInput);
