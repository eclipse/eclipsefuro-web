import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import "@furo/input/furo-select-input";

import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

import {FBP} from "@furo/fbp";

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
    this.displayField = "display_name";
    this.valueField = "id";

    this._FBPAddWireHook("--valueChanged", (val) => {

      // by valid input reset meta and constraints
      CheckMetaAndOverrides.CheckAttributeOverrides(this);

      if (this.field) {
        this.field.value = val;
      }
    });
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
   * Updater for the list attr
   * @param value
   */
  set list(value) {
    Helper.UpdateInputAttribute(this, "list", value);
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
      /**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"] by furo-select-input
       */
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
   * Bind a entity field to the furo input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    Helper.BindData(this, fieldNode);
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
       <furo-select-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly || this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-select-input>      
    `;
  }

  /**
   * Exposes --injectCollection
   * @param {collection} det
   */
  injectEntities(entities) {

    // map
    let arr = entities.map((e) => {
      return {
        "id": e.data[this.valueField],
        "label": e.data[this.displayField],
        "selected": (this.value ==  e.data[this.valueField])
      }
    });

    if (!this.value) {
      this.field.value = arr[0].id;
    }

    this._FBPTriggerWire("--selection", arr);
  }

  /**
   * Exposes --injectCollection
   * @param {collection} det
   */
  injectCollection(collection) {

    // map
    let arr = collection.entities.map((e) => {
      return {
        "id": e.data[this.valueField],
        "label": e.data[this.displayField],
        "selected": (this.value ==  e.data[this.valueField])
      }
    });

    if (!this.value) {
      this.field.value = arr[0].id;
    }

    this._FBPTriggerWire("--selection", arr);
  }
}

customElements.define('furo-data-collection-dropdown', FuroDataCollectionDropdown);
