import { FuroSelectInput } from '@furo/input/src/furo-select-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

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
 *  ### following labels of fat types are supported:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'condensed': input has condensed display
 * - 'hidden': input is hidden
 *
 * ### following attributes of fat types are supported:
 *
 * - 'label': input label
 * - 'hint': input hint
 * - 'leading-icon': furo leading icon of the input
 * - 'trailing-icon': furo trailing icon of the input
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 *
 * ### following constrains are mapped into the attributes of the fat types :
 *
 * - 'required': is mapped to 'required' attribute
 *
 * <sample-furo-data-collection-dropdown></sample-furo-data-collection-dropdown>
 *
 * ## Attributes & Properties
 * Please refer to furo-select-input
 *
 * ### auto-select-first
 * set this attribute to autoselect the first item in the list, if no item is set in the bounded fieldNode
 *
 *
 * @summary bindable dropdown
 * @customElement
 * @demo demo-furo-data-collection-dropdown inject collection demo
 * @demo demo-furo-data-collection-dropdown-bind-entity bind entity without inject demo
 * @demo demo-furo-data-collection-reference-dropdown combine with reference dropdown demo
 * @demo demo-furo-data-collection-dropdown-multiple collection dropdown demo with multiple selection
 * @mixes FBP
 */
class FuroDataCollectionDropdown extends FuroSelectInput {
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
    this.displayField = 'display_name';
    this.valueField = 'id';

    this._fieldNodeToUpdate = {};
    this._fieldDisplayNodeToUpdate = {};

    this.addEventListener('value-changed', val => {
      if (this.binder.fieldNode) {
        if (!this.multiple) {
          // by valid input reset meta and constraints
          this._fieldNodeToUpdate._value = val.detail;

          if (this.subfield) {
            this._fieldDisplayNodeToUpdate._value = this._findDisplayNameByValue(val.detail);
          }
        } else {
          const data = [];
          const arrSubfieldChains = this.subfield.split('.');
          // create value data according to the structure of subfield
          if (Array.isArray(val.detail)) {
            val.detail.forEach(v => {
              const tmp = {};
              for (let i = arrSubfieldChains.length - 1; i > -1; i -= 1) {
                tmp[i] = {};
                if (i === arrSubfieldChains.length - 1) {
                  tmp[i][arrSubfieldChains[i]] = v;
                } else {
                  tmp[i][arrSubfieldChains[i]] = tmp[i + 1];
                }
              }
              data.push(tmp[0]);
            });
          }
          // add write lock to avoid triggering _updateField via fieldnode changed event
          this._writeLock = true;
          this._fieldNodeToUpdate._value = data;
          // shut down write protection
          setTimeout(() => {
            this._writeLock = false;
          }, 100);
        }
      }
      this._notifiySelectedItem(val.detail);
    });

    this._initBinder();
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label',
      hint: 'hint',
      'leading-icon': 'leadingIcon',
      'trailing-icon': 'trailingIcon',
      errortext: 'errortext',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      condensed: 'condensed',
      hidden: 'hidden',
    };

    this.binder.fatAttributesToConstraintsMappings = {
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';
  }

  _findDisplayNameByValue(val) {
    let displayName = '';

    for (let i = 0; i < this._dropdownList.length; i += 1) {
      if (this._dropdownList[i].id === val) {
        displayName = this._dropdownList[i].label;
        break;
      }
    }
    return displayName;
  }

  _notifiySelectedItem(val) {
    /**
     * @event item-selected
     * Fired when a item from the dropdown was selected
     *
     * detail payload: the original item object or the array of original item objects by multiple options
     */
    const customEvent = new Event('item-selected', { composed: true, bubbles: true });
    // find item from list
    let selectedItem;

    if (this.multiple) {
      selectedItem = [];
      for (let i = this._dropdownList.length - 1; i >= 0; i -= 1) {
        if (val.includes(this._dropdownList[i].id)) {
          selectedItem.push(this._dropdownList[i]._original);
        }
      }
    } else {
      for (let i = this._dropdownList.length - 1; i >= 0; i -= 1) {
        if (this._dropdownList[i].id === val) {
          selectedItem = this._dropdownList[i]._original;
          break;
        }
      }
    }
    customEvent.detail = selectedItem;
    this.dispatchEvent(customEvent);
  }

  /**
   * Updater for the list attr
   * @param value
   */
  set list(value) {
    // map
    const arr = value.split(',').map(e => {
      const item = e.trim();
      return {
        id: item,
        label: e,
        selected: this._fieldNodeToUpdate._value === item,
        _original: item,
      };
    });

    this._notifyAndTriggerUpdate(arr);
  }

  /**
   *
   * @param arr
   * @private
   */
  _notifyAndTriggerUpdate(arr) {
    if (arr.length > 0) {
      this._dropdownList = arr;
      super.setOptions(arr);
      this._updateField();
    }
  }


  _autoselectFirstItem( ) {
    if(this._dropdownList){
      if (!this._fieldNodeToUpdate || !this._fieldNodeToUpdate._value) {
        // notifiy first item if field is not set
        let selectedItem = null;
        for (let i = 0; i < this._dropdownList.length; i += 1) {
          if (this._dropdownList[i].selected) {
            selectedItem = this._dropdownList[i].id;
            break;
          }
        }
        selectedItem = selectedItem || this._dropdownList[0].id;
        this._notifiySelectedItem(selectedItem);
        if (this._fieldNodeToUpdate  ) {
          // give a little delay with the autoselected field, so the user can
          // realize that something was set
          setTimeout(()=>{
            this._fieldNodeToUpdate._value = selectedItem;
          },350);

        }
      } else if (this.multiple) {
        this._notifiySelectedItem(this._parseRepeatedData(this._fieldNodeToUpdate._value));
      } else {
        this._notifiySelectedItem(this._fieldNodeToUpdate._value);
      }
    }

  }

  /**
   * Sets the field to readonly
   */
  disable() {
    super.disable();
  }

  /**
   * Makes the field writable.
   */
  enable() {
    super.enable();
  }

  /**
   * Bind a entity field to the range-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      // use multiple select for repeated node
      if (fieldNode._meta && fieldNode._meta.repeated) {
        this.multiple = true;
        if (!this.subfield) {
          this.subfield = 'id';
        }
      }

      // by complex type set `id` as `subfield` as default
      if (this._checkIsComplexType(fieldNode) && !this.subfield) {
        this.subfield = 'id';
      }

      if (this.subfield && !this.multiple) {
        this._fieldNodeToUpdate = this.binder.fieldNode[this.subfield];

        if (this.subfieldDisplay) {
          this._fieldDisplayNodeToUpdate = this.binder.fieldNode[this.subfieldDisplay];
        } else if (this.binder.fieldNode.display_name) {
          this._fieldDisplayNodeToUpdate = this.binder.fieldNode.display_name;
        }
      } else {
        this._fieldNodeToUpdate = this.binder.fieldNode;
      }

      // inject options from meta which is defined in spec
      if (this.binder.fieldNode._meta && this.binder.fieldNode._meta.options) {
        this._buildListWithMetaOptions(this.binder.fieldNode._meta.options);
      }

      // update meta and constraints when they change
      this.binder.fieldNode.addEventListener('this-metas-changed', () => {
        if (this.binder.fieldNode._meta && this.binder.fieldNode._meta.options) {
          this._buildListWithMetaOptions(this.binder.fieldNode._meta.options);
        }
      });

      this.binder.fieldNode.addEventListener('field-value-changed', () => {
        this._updateField();
      });

      this.binder.fieldNode.addEventListener('repeated-field-changed', () => {
        this._updateField();
      });

      this._updateField();
    }
  }

  /**
   *
   * @param fieldNode
   * @returns {boolean}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _checkIsComplexType(fieldNode) {
    let isComplex = false;
    if (fieldNode.__childNodes.length > 0) {
      isComplex = true;
    }
    return isComplex;
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  // eslint-disable-next-line class-methods-use-this
  _updateField() {



    if (this.multiple) {
      if (!this._writeLock) {
        super.setValue(this._parseRepeatedData(this._fieldNodeToUpdate._value));
      }
    } else {
      super.setValue(this._fieldNodeToUpdate._value);
    }

    if(this.hasAttribute("auto-select-first")){
      this._autoselectFirstItem( );
    }
    this.requestUpdate();
  }

  /**
   * change the value data of repeated field to an array according to the defined subfield likes `data.id`
   * @param data
   * @returns {[]}
   * @private
   */
  _parseRepeatedData(data) {
    const arrValue = [];
    const arrSubfieldChains = this.subfield.split('.');
    if (Array.isArray(data)) {
      data.forEach(element => {
        let tmpValue = element;
        arrSubfieldChains.forEach(s => {
          tmpValue = tmpValue[s];
        });
        arrValue.push(tmpValue);
      });
    }
    return arrValue;
  }

  /**
   * Build the dropdown list with given options from meta
   * @param {options} list of options with id and display_name
   */
  _buildListWithMetaOptions(options) {
    const arr = this._mapDataToList(options.list);

    this._notifyAndTriggerUpdate(arr);
  }

  _mapDataToList(list) {
    let arr = [];
    // if field value not exists. select item when the item is marked as `selected` in list
    if (!this._fieldNodeToUpdate || !this._fieldNodeToUpdate._value) {
      arr = this._setItemSelectedViaSelectedMark(list);
    } else if (Array.isArray(list)) {
      let isSelected = false;
      let hasSelectedMark = false;
      let preSelectedValueInList = null;
      for (let i = 0; i < list.length; i += 1) {
        const item = {
          id: list[i][this.valueField],
          label: list[i][this.displayField],
          selected: false,
          _original: list[i],
        };

        if (this._fieldNodeToUpdate._value === list[i][this.valueField]) {
          item.selected = true;
          isSelected = true;
        }

        if (list[i].selected) {
          hasSelectedMark = true;
          preSelectedValueInList = list[i][this.valueField];
        }

        arr.push(item);
      }

      if (!isSelected && hasSelectedMark) {
        arr = this._setItemSelectedViaSelectedMark(list);
        this._fieldNodeToUpdate._value = preSelectedValueInList;
      }
    }

    return arr;
  }

  _setItemSelectedViaSelectedMark(list) {
    let arr = [];
    if (Array.isArray(list)) {
      arr = list.map(e => ({
        id: e[this.valueField],
        label: e[this.displayField],
        selected: !!e.selected,
        _original: e,
      }));
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
    const arr = this._mapDataToList(list);

    this._notifyAndTriggerUpdate(arr);
  }

  /**
   * Inject the array with entities for the selectable options.
   *
   * @param {Array} Array with entities
   */
  injectEntities(entities) {
    let arr = [];

    // select the item when it's value is equal the field value.
    // when field value is not equal the filed value, select the item if the item is marked as `selected`
    if (Array.isArray(entities)) {
      const arrA = [];
      const arrB = [];
      let isSelected = false;
      let hasSelectedMark = false;
      let preSelectedValueInList = null;
      for (let i = 0; i < entities.length; i += 1) {
        const item = {
          id: entities[i].data[this.valueField],
          label: entities[i].data[this.displayField],
          selected: false,
          _original: entities[i],
        };
        let itemB = {};

        itemB = Object.assign(itemB, item);

        if (this._fieldNodeToUpdate._value === entities[i].data[this.valueField]) {
          item.selected = true;
          isSelected = true;
        }

        if (entities[i].data.selected) {
          hasSelectedMark = true;
          itemB.selected = true;
          preSelectedValueInList = entities[i].data[this.valueField];
        }

        arrA.push(item);
        arrB.push(itemB);
      }

      if (!isSelected && hasSelectedMark) {
        arr = arrB;
        this._fieldNodeToUpdate._value = preSelectedValueInList;
      } else {
        arr = arrA;
      }
    }

    this._notifyAndTriggerUpdate(arr);
  }
}

customElements.define('furo-data-collection-dropdown', FuroDataCollectionDropdown);
