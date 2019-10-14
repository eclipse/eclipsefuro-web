import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import "@furo/input/furo-select-input";

import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

import {FBP} from "@furo/fbp";

/**
 * `furo-data-collection-dropdown`
 *
 * This component displays a dropdown. The options can be injected with injectList.
 *
 * It is also possible to put a simple comma separated list of items on the `list` attribute. In this case the display
 * and id are the same.
 *
 * If the bounded field haves an `options` attribute in the metas, it will use these options.
 *
 * The options must have a signature like this:
 * ```json
 * [
 *  {
 *   "id": 34,
 *   "display_name":"Option 34"
 *  }
 * ]
 * ```
 * It is possible to put any other signatures (`[{}]`) by setting the attribute *display-field* and *value-field*.
 * The value in *value-field* will be set on the bounded field and the values in *display-field* are used for the dropdown.
 *
 *
 * <sample-furo-data-collection-dropdown></sample-furo-data-collection-dropdown>
 *
 * Tags: input
 * @summary bindable dropdown
 * @customElement
 * @demo demo-furo-data-collection-dropdown
 * @mixes FBP
 */
class FuroDataCollectionDropdown extends FBP(LitElement) {
  /**
   * @event value-changed
   * Fired when value has changed from the component inside.
   *
   * detail payload: {*} the value from the value-field. By default the value field is "id"
   *
   *  **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;
    this.displayField = "display_name";
    this.valueField = "id";

    this._fieldNodeToUpdate = {};

    this._FBPAddWireHook("--valueChanged", (val) => {


      if (this.field) {
        // by valid input reset meta and constraints
          this._fieldNodeToUpdate._value = val;
      }
      this._notifiySelectedItem(val);
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

  _notifiySelectedItem(val) {

    /**
     * @event item-selected
     * Fired when a item from the dropdown was selected
     *
     * detail payload: the original item object
     */
    let customEvent = new Event('item-selected', {composed: true, bubbles: true});
    // find item from list
    let selectedItem;

    for (let i = this._dropdownList.length - 1; i >= 0; i--) {
      if (this._dropdownList[i][this.valueField] == val) {
        selectedItem = this._dropdownList[i]._original;
        break
      }
    }

    customEvent.detail = selectedItem;
    this.dispatchEvent(customEvent);
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

    // map
    let arr = value.split(",").map((e) => {
      let item = e.trim();
      return {
        "id": item,
        "label": e,
        "selected": (this._fieldNodeToUpdate._value == item),
        "_original": item
      }
    });
    this._dropdownList = arr;

    if (this.field && !this._fieldNodeToUpdate._value) {
      this._fieldNodeToUpdate._value = arr[0].id;
    }

    if (!this.field) {
      // notifiy first item if field is not set
      this._notifiySelectedItem(arr[0].id);
    } else {
      this._notifiySelectedItem(this._fieldNodeToUpdate._value);
    }

    this._FBPTriggerWire("--selection", arr);
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
       * if you bind a complex type, declare here the field which gets updated by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */
      subfield: {
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
       * The name of the field from the injected collection that contains the value you want to assign to the attribute value and the bounded field.
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

    if(this.subfield){
      this._fieldNodeToUpdate = this.field[this.subfield];
    }else{
      this._fieldNodeToUpdate = this.field;
    }

    // inject options from meta which is defined in spec
    if(this.field._meta && this.field._meta.options ) {
      this._buildListWithMetaOptions(this.field._meta.options);
    }

    // update meta and constraints when they change
    this.field.addEventListener('this-metas-changed', (e) => {
      this._buildListWithMetaOptions(this.field._meta.options);
    });
  }


  _updateField() {

    //mark incomming error
    if (!this.field._isValid) {
      this.error = true;
      this.errortext = this.field._validity.description;
    }

    this._FBPTriggerWire('--value', this._fieldNodeToUpdate._value);
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

  /**
   *
   * @return {TemplateResult}
   * @private
   */
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
   * Build the dropdown list with given options from meta
   * @param {options} list of options with id and display_name
   */
  _buildListWithMetaOptions(options) {
    // map
    let arr = options.list.map((e) => {
      return {
        "id": e[this.valueField],
        "label": e[this.displayField],
        "selected": (this._fieldNodeToUpdate._value == e[this.valueField]),
        "_original": e
      }
    });

    this._dropdownList = arr;
    if (!this._fieldNodeToUpdate._value) {
      this._fieldNodeToUpdate._value = arr[0].id;
    }

    if (!this.field) {
      // notifiy first item if field is not set
      this._notifiySelectedItem(arr[0].id);
    } else {
      this._notifiySelectedItem(this._fieldNodeToUpdate._value);
    }

    this._FBPTriggerWire("--selection", arr);

  }

  /**
   * Inject the array with the selectable options.
   *
   * The array with objects should have a signature like this. This could be the response of a collection agent (`--response(*.entities)`)
   * ```json
   * [
   *  {
   *   "id": 34,
   *   "display_name":"Option A"
   *  },
   *  {
   *   "id": 223,
   *   "display_name":"Option X"
   *  },
   * ]
   * ```
   *
   *
   *
   * @param {Array} Array with entities
   */
  injectList(list) {
    // map
    let arr = list.map((e) => {
      return {
        "id": e[this.valueField],
        "label": e[this.displayField],
        "selected": (this._fieldNodeToUpdate._value == e[this.valueField]),
        "_original": e
      }
    });
    this._dropdownList = arr;
    if (this.field && !this._fieldNodeToUpdate._value) {
      this._fieldNodeToUpdate._value = arr[0].id;
    }

    if (!this.field) {
      // notifiy first item if field is not set
      this._notifiySelectedItem(arr[0].id);
    } else {
      this._notifiySelectedItem(this._fieldNodeToUpdate._value);
    }

    this._FBPTriggerWire("--selection", arr);
  }

  /**
   * Inject the array with entities for the selectable options.
   *
   * @param {Array} Array with entities
   */
  injectEntities(entities) {

    // map
    let arr = entities.map((e) => {
      return {
        "id": e.data[this.valueField],
        "label": e.data[this.displayField],
        "selected": (this._fieldNodeToUpdate._value == e.data[this.valueField]),
        "_original": e
      }
    });

    this._dropdownList = arr;
    if (this.field && !this._fieldNodeToUpdate._value) {
      this._fieldNodeToUpdate._value = arr[0].id;
    }

    if (!this.field) {
      // notifiy first item if field is not set
      this._notifiySelectedItem(arr[0].id);
    } else {
      this._notifiySelectedItem(this._fieldNodeToUpdate._value);
    }

    this._FBPTriggerWire("--selection", arr);
  }


}

customElements.define('furo-data-collection-dropdown', FuroDataCollectionDropdown);
