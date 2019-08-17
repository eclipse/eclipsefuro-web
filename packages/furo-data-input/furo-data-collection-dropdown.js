import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"

import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-data-collection-dropdown`
 *
 * <sample-furo-data-collection-dropdown></sample-furo-data-collection-dropdown>
 *
 * Tags: input
 * @summary text input element
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroDataCollectionDropdown extends FBP(LitElement) {
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
    this.displayField = "display_name";
    this.valueField = "id";


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

      },
      /**
       * The name of the field from the injected collection that contains the label for the dropdown array.
       */
      displayField: {
        type: String,
        attribute: "display-field"
      },
      /**
       * The name of the field from the injected collection that contains the value you want to assign to the attribute value and the binded field.
       */
      valueField: {
        type: String,
        attribute: "value-field"
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
      },

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
      list: {
        type: String
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
   * Bind a entity field to the number-input. You can use the entity even when no data was received.
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
      this.requestUpdate();
    });

    this.field.addEventListener('field-became-valid', (e) => {
      // updates wieder einspielen
      this.error = false;
      this.requestUpdate();
    });

  }


  // label setter and getter are needed for rendering on the first time
  set label(l) {
    this._l = l;
    this._label = l;
  }

  get label() {
    return this._l;
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

        furo-select-input {
            width: 100%;
        }
    `
  }

  render() {
    // language=HTML
    return html`
       <furo-select-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly || this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          list="${this.list}"
          hint="${this._hint}" 
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-select-input>      
    `;
  }

  /**
   * Exposes --injectCollection
   * @param {collection} det
   */
  injectCollection(collection) {

    // map
    let arr = collection.data.map((e) => {
      return {
        "id": e.data[this.valueField],
        "label": e.data[this.displayField],
        "selected": (this.value == e.data[val])
      }
    });

    if (!this.value) {
      this.field.value = arr[0].id;
    }

    this._FBPTriggerWire("--selection", arr);
  }
}

customElements.define('furo-data-collection-dropdown', FuroDataCollectionDropdown);
