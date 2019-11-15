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
 * @demo demo-furo-data-collection-dropdown inject collection demo
 * @demo demo-furo-data-collection-dropdown-bind-entity bind entity without inject demo
 * @demo demo-furo-data-collection-reference-dropdown combine with reference dropdown demo
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
    this._fieldDisplayNodeToUpdate = {};

    this._FBPAddWireHook("--valueChanged", (val) => {

      if (this.field) {
        // by valid input reset meta and constraints
        this._fieldNodeToUpdate._value = val;

        if(this.subfield) {

          this._fieldDisplayNodeToUpdate._value = this._findDisplayNameByValue(val);
        }
      }
      this._notifiySelectedItem(val);
    });
  }

  _findDisplayNameByValue(val) {
    let displayName = "";

    for(let i = 0; i < this._dropdownList.length; i++) {
      if(this._dropdownList[i].id == val) {
        displayName = this._dropdownList[i].label;
        break;
      }
    }
    return displayName;
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

    this._notifyAndTriggerUpdate(arr);
  }

  /**
   *
   * @param arr
   * @private
   */
  _notifyAndTriggerUpdate(arr) {
    if(arr.length > 0) {
      this._dropdownList = arr;

      if (!this._fieldNodeToUpdate || !this._fieldNodeToUpdate._value) {
        // notifiy first item if field is not set
        let selectedItem = null;
        for(let i=0; i<arr.length; i++) {
          if(arr[i]["selected"]) {
            selectedItem = arr[i].id;
            break;
          }
        }
        selectedItem = selectedItem? selectedItem: arr[0].id;
        this._notifiySelectedItem(selectedItem);
        if(this._fieldNodeToUpdate) {
          this._fieldNodeToUpdate._value = selectedItem;
        }
      } else {
        this._notifiySelectedItem(this._fieldNodeToUpdate._value);
      }

      this._FBPTriggerWire("--selection", arr);
    }

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
       * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */
      subfield: {
        type: String,
      },
      /**
       * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */
      subfieldDisplay: {
        type: String,
        attribute: "subfield-display"
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
      },
      /**
       * the dropdown list
       */
      _dropdownList: {
        type: Array
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

    // by complex type set `id` as `subfield` as default
    if(this._checkIsComplexType(fieldNode) && !this.subfield  ) {
      this.subfield = "id";
    }

    if(this.subfield){
      this._fieldNodeToUpdate = this.field[this.subfield];

      if(this.subfieldDisplay) {
        this._fieldDisplayNodeToUpdate = this.field[this.subfieldDisplay]
      }
      else if(this.field["display_name"]){
        this._fieldDisplayNodeToUpdate = this.field["display_name"];
      }
    }
    else{
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

  /**
   *
   * @param fieldNode
   * @returns {boolean}
   * @private
   */
  _checkIsComplexType(fieldNode) {

    let isComplex = false;
    if(fieldNode.__childNodes.length > 0 ) {
      isComplex = true;
    }
    return isComplex;
  }

  _updateField() {
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
   * Build the dropdown list with given options from meta
   * @param {options} list of options with id and display_name
   */
  _buildListWithMetaOptions(options) {

    let arr = this._mapDataToList(options.list);

    this._notifyAndTriggerUpdate(arr);
  }

  _mapDataToList(list) {
    let arr =[];
    // if field value not exists. select item when the item is marked as `selected` in list
    if(!this._fieldNodeToUpdate || !this._fieldNodeToUpdate._value) {
      arr = this._setItemSelectedViaSelectedMark(list);
    }
    else {
      // if field value exists. select the item when it's value is equal the field value.
      // when field value is not equal the filed value, select the item if the item is marked as `selected`
      if(Array.isArray(list)) {
        let isSelected = false;
        let hasSelectedMark = false;
        let preSelectedValueInList = null;
        for(let i=0; i < list.length; i++) {
          let item = {
            "id": list[i][this.valueField],
            "label": list[i][this.displayField],
            "selected": false,
            "_original": list[i]
          }

          if(this._fieldNodeToUpdate._value == list[i][this.valueField]) {

            item.selected = true;
            isSelected = true;
          }

          if(list[i]["selected"]) {
            hasSelectedMark = true;
            preSelectedValueInList =  list[i][this.valueField];
          }

          arr.push(item);
        }

        if(!isSelected && hasSelectedMark ) {
          arr = this._setItemSelectedViaSelectedMark(list);
          this._fieldNodeToUpdate._value = preSelectedValueInList;
        }
      }
    }

    return arr;
  }

  _setItemSelectedViaSelectedMark(list) {
    let arr =[];
    if(Array.isArray(list)) {
      arr = list.map((e) => {
        return {
          "id": e[this.valueField],
          "label": e[this.displayField],
          "selected": e["selected"]? true : false,
          "_original": e
        }
      });
    }
    return arr;
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

    let arr = this._mapDataToList(list);

    this._notifyAndTriggerUpdate(arr);
  }

  /**
   * Inject the array with entities for the selectable options.
   *
   * @param {Array} Array with entities
   */
  injectEntities(entities) {
    let arr =[];

    // select the item when it's value is equal the field value.
    // when field value is not equal the filed value, select the item if the item is marked as `selected`
    if(Array.isArray(entities)) {
      let arrA = [];
      let arrB = [];
      let isSelected = false;
      let hasSelectedMark = false;
      let preSelectedValueInList = null;
      for(let i=0; i < entities.length; i++) {
        let item = {
          "id": entities[i].data[this.valueField],
          "label": entities[i].data[this.displayField],
          "selected": false,
          "_original": entities[i]
        }
        let itemB = {};

        itemB = Object.assign(itemB, item);

        if(this._fieldNodeToUpdate._value == entities[i].data[this.valueField]) {

          item.selected = true;
          isSelected = true;
        }


        if(entities[i].data["selected"]) {
          hasSelectedMark = true;
          itemB.selected = true;
          preSelectedValueInList =  entities[i].data[this.valueField];
        }

        arrA.push(item);
        arrB.push(itemB);
      }

      if(!isSelected && hasSelectedMark ) {
        arr = arrB;
        this._fieldNodeToUpdate._value = preSelectedValueInList;
      }
      else {
        arr = arrA;
      }
    }

    this._notifyAndTriggerUpdate(arr);
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
}

customElements.define('furo-data-collection-dropdown', FuroDataCollectionDropdown);
