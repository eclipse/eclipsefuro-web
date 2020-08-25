// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import '@ui5/webcomponents/dist/RadioButton.js';

/**
 * `furo-ui5-data-radio-button-group`
 * The furo-ui5-data-radio-button-group component enables users to select a single option from a set of options.
 * When a furo-ui5-data-radio-button-group is selected by the user, the select event is fired. When a furo-ui5-data-radio-button-group
 * that is within a group is selected, the one that was previously selected gets automatically deselected.
 * You can group radio buttons by using the name property.
 * Note: Iffuro-ui5-data-radio-button-group is not part of a group, it can be selected once, but can not be deselected back.
 *
 * Keyboard Handling
 * Once the furo-ui5-data-radio-button-group is on focus, it might be selected by pressing the Space and Enter keys.
 * The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons
 * in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.
 * Note: On entering radio button group, the focus goes to the currently selected radio button.
 *
 * @summary data radio buttons
 * @customElement
 * @demo demo-furo-ui5-data-radio-button-group Basic Usage
 */
export class FuroUi5DataRadioButtonGroup extends HTMLElement {
  /**
   * @event value-changed
   * Fired when value has changed from the component inside.
   *
   * detail payload: {*} the value from the value-field. By default the value field is "id"
   *
   *  **bubbles**
   */

  constructor(props) {
    super(props);

    /**
     * If you inject an array with complex objects, declare here the path where display_name and value_field are located.
     *
     * This is only needed if display_name and value_field are not located in the root of the object.
     * @property sub-field
     * @private
     */
    this._subField = 'data';
    /**
     * The name of the field from the injected collection that contains the label for the dropdown array.
     * @property display-field
     * @private
     */
    this._displayField = 'display_name';
    /**
     * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
     * If you bind a scalar, you dont need this attribute.
     * @property value-field
     * @private
     */
    this._valueField = 'id';

    /**
     * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
     *
     * If you bind a scalar, you dont need this attribute.
     * @property value-sub-field
     * @private
     */
    this._valueSubField = 'id';

    /**
     * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
     *
     * If you bind a scalar, you dont need this attribute.
     * @property display-sub-field
     * @private
     */
    this._displaySubField = 'display_name';

    this._fieldNodeToUpdate = {};
    this._fieldDisplayNodeToUpdate = {};

    /**
     * Listener to catch the selected data
     */
    this.addEventListener('select', val => {
      const selectedObj = val.target.dataset;

      if (this.binder.fieldNode) {
        if (!this.multiple) {
          // by valid input reset meta and constraints
          this._fieldNodeToUpdate._value = selectedObj.id;
          this._fieldDisplayNodeToUpdate._value = this._findDisplayNameByValue(selectedObj.id);
        } else {
          const data = [];
          const arrSubfieldChains = this._subField.split('.');
          // create value data according to the structure of subfield
          if (Array.isArray(selectedObj.id)) {
            selectedObj.forEach(v => {
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
      this._notifiySelectedItem(selectedObj);
    });

    this._initBinder();
  }

  /**
   * List of observed attributes
   * @returns {string[]}
   */
  static get observedAttributes() {
    return ['value-field', 'display-field', 'sub-field', 'value-sub-field', 'display-sub-field'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      // eslint-disable-next-line default-case
      switch (name) {
        case 'value-field':
          this._valueField = newVal;
          break;
        case 'display-field':
          this._displayField = newVal;
          break;
        case 'sub-field':
          this._subField = newVal;
          break;
        case 'value-sub-field':
          this._valueSubField = newVal;
          break;
        case 'display-sub-field':
          this._displaySubField = newVal;
          break;
      }
    }
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
      'error-msg': 'errortext',
      pattern: 'pattern',
      min: 'min',
      max: 'max',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      condensed: 'condensed',
    };

    this.binder.fatAttributesToConstraintsMappings = {
      max: 'value._constraints.max.is', // for the fieldnode constraint
      min: 'value._constraints.min.is', // for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      min: 'min',
      max: 'max',
      pattern: 'pattern',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      if (this.binder.fieldNode) {
        // if something was entered the field is not empty
        this.binder.deleteLabel('pristine');

        // update the value
        this.binder.fieldValue = val.detail;
      }
    });
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

  /**
   * @event item-selected
   * Fired when a item from the dropdown was selected
   * detail payload: the original item object or the array of original item objects by multiple options
   */
  _notifiySelectedItem(obj) {
    const customEvent = new Event('item-selected', { composed: true, bubbles: true });
    customEvent.detail = obj._original;
    this.dispatchEvent(customEvent);
  }

  /**
   *
   * @param arr
   * @private
   */
  _notifyAndTriggerUpdate(arr) {
    if (arr.length > 0) {
      this._dropdownList = arr;

      if (!this._fieldNodeToUpdate || !this._fieldNodeToUpdate._value) {
        // notify first item if field is not set
        let selectedItem = null;
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].selected) {
            selectedItem = arr[i];
            break;
          }
        }
        selectedItem = selectedItem || arr[0];
        this._notifiySelectedItem(selectedItem);
        if (this._fieldNodeToUpdate) {
          this._fieldNodeToUpdate._value = selectedItem;
        }
      } else if (this.multiple) {
        this._notifiySelectedItem(this._parseRepeatedData(this._fieldNodeToUpdate._value));
      } else {
        this._notifiySelectedItem(this._fieldNodeToUpdate._value);
      }

      this.setList(arr);
    }
  }

  /**
   * Set the options programmatically
   * @param {Array} Array with options
   */
  setList(optionArray) {
    this.optionItems = optionArray;
  }

  set optionItems(collection) {
    if (collection === undefined || !collection.length) {
      // no action
      return;
    }
    // convert array list to id, label structure
    if (typeof collection[0] === 'string') {
      // eslint-disable-next-line no-param-reassign
      collection = collection.map(item => ({ id: item, label: item }));
    }

    const arr = collection.map(e => {
      if (e.selected) {
        this.value = e.id.toString();
      }
      return {
        id: e.id,
        label: e.label,
        selected: this.value === e.id.toString() || e.selected || false,
      };
    });

    if (!this.value) {
      this.value = arr[0].id;
    }
    // save parsed selection option array
    this.selectOptions = arr;
    this.addItems(this.selectOptions);
  }

  /**
   *
   * @param collection
   * @returns {[]}
   * @private
   */
  _mapInputToInnerStruct(collection) {
    if (collection === undefined || !collection.length) {
      // no valid collection object submitted
      return [];
    }
    const arrValue = [];

    const arrSubfieldChains = this._subField.length ? this._subField.split('.') : [];

    if (Array.isArray(collection)) {
      collection.forEach(element => {
        let tmpValue = element;
        arrSubfieldChains.forEach(s => {
          tmpValue = tmpValue[s] ? tmpValue[s] : tmpValue;
        });
        arrValue.push(tmpValue);
      });
    }
    return arrValue;
  }

  /**
   * Maps an array structure to the inner list struct
   * {id: '', label: '', selected: Boolean, _original: {}}
   * @param list
   * @returns {[]}
   * @private
   */
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
          id: list[i][this._valueField],
          label: list[i][this._displayField],
          selected: false,
          _original: list[i],
        };

        if (this._fieldNodeToUpdate._value === list[i][this._valueField]) {
          item.selected = true;
          isSelected = true;
        }

        if (list[i].selected) {
          hasSelectedMark = true;
          preSelectedValueInList = list[i][this._valueField];
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

  /**
   * Adds the option components to the default slot
   * @param options
   */
  addItems(options) {
    const radioGroup = this;

    const existingOptions = radioGroup.querySelectorAll('ui5-radiobutton');

    if (existingOptions === undefined || !existingOptions.length) {
      this._initialAddOptions(options);
    } else {
      this._updateExistingOptions(options);
    }
  }

  /**
   *
   * @param options
   * @private
   */
  _updateExistingOptions(options) {
    const radioGroup = this;
    // catch existing group name for new added items.
    const groupName = radioGroup.querySelector('ui5-radiobutton').getAttribute('name');
    const existingOptions = radioGroup.querySelectorAll('ui5-radiobutton');
    const existingIds = options.map(a => a.id);

    // if id of existing element is no longer in the option list, remove the ui5-radiobutton element
    existingOptions.forEach(elem => {
      if (existingIds.indexOf(elem.getAttribute('data-id')) < 0) {
        // remove element
        radioGroup.removeChild(elem);
      }
    });

    options.forEach(item => {
      const radio = radioGroup.querySelector(`[data-id="${item.id}"]`);
      if (radio) {
        radio.selected = item.selected;
        radio.text = item.label;
      } else {
        // add new element
        const element = document.createElement('ui5-radiobutton');
        element.setAttribute('name', groupName);
        element.setAttribute('text', item.label);
        element.setAttribute('data-id', item.id);
        if (item.selected) {
          element.setAttribute('selected', item.selected);
        } else {
          element.removeAttribute('selected');
        }
        element.text = item.label;
        element.selected = item.selected;
        radioGroup.appendChild(element);
      }
    });
  }

  /**
   *
   * @param options
   * @private
   */
  _initialAddOptions(options) {
    const radioGroup = this;
    const groupName =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
    // while (radioGroup.firstChild) {
    //   radioGroup.removeChild(radioGroup.firstChild);
    // }
    radioGroup.value = '';
    options.forEach(item => {
      const element = document.createElement('ui5-radiobutton');
      element.setAttribute('name', groupName);
      element.setAttribute('text', item.label);
      element.setAttribute('data-id', item.id);
      if (item.selected) {
        element.setAttribute('selected', item.selected);
      } else {
        element.removeAttribute('selected');
      }
      element.text = item.label;
      element.selected = item.selected;
      radioGroup.appendChild(element);
    });
  }

  /**
   * Let you get an attribute value by path
   * @param obj
   * @param path
   * @returns {T}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _getValueByPath(obj, path) {
    return path.split('.').reduce((res, prop) => res[prop], obj);
  }

  /**
   * Bind a entity field to the range-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine');
      } else {
        this.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine');
      });

      // use multiple select for repeated node
      if (fieldNode._meta && fieldNode._meta.repeated) {
        this.multiple = true;
      }

      if (this._valueSubField && !this.multiple) {
        this._fieldNodeToUpdate = this._getValueByPath(this.binder.fieldNode, this._valueSubField);
        // this._fieldNodeToUpdate = this.binder.fieldNode[this._valueSubField];
        this._fieldDisplayNodeToUpdate = this._getValueByPath(
          this.binder.fieldNode,
          this._displaySubField,
        );
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
        super.value = this._parseRepeatedData(this._fieldNodeToUpdate._value);
      }
    } else {
      let size = this._dropdownList.length;
      // eslint-disable-next-line no-plusplus
      while (size--) {
        this._dropdownList[size].selected =
          this._dropdownList[size].id === this.binder.fieldValue.id;
      }
      this._notifyAndTriggerUpdate(this._dropdownList);
    }
  }

  /**
   * change the value data of repeated field to an array according to the defined subfield likes `data.id`
   * @param data
   * @returns {[]}
   * @private
   */
  _parseRepeatedData(data) {
    const arrValue = [];
    const arrSubfieldChains = this._subField.split('.');
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
    this.injectList(options.list);
  }

  _setItemSelectedViaSelectedMark(list) {
    let arr = [];
    if (Array.isArray(list)) {
      arr = list.map(e => ({
        id: e[this._valueField],
        label: e[this._displayField],
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
   * @param {Array} Array with entities
   */
  injectList(list) {
    const arr = this._mapInputToInnerStruct(list);
    const innerList = this._mapDataToList(arr);
    this._notifyAndTriggerUpdate(innerList);

    /**
     * Is fired when a new list is applied
     * @event options-injected Payload: option list
     */
    this.dispatchEvent(
      new CustomEvent('options-injected', {
        detail: innerList,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Inject the array of a collection
   * @param entities
   */
  injectEntities(entities) {
    this.injectList(entities);
  }
}

window.customElements.define('furo-ui5-data-radio-button-group', FuroUi5DataRadioButtonGroup);
