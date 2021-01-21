import * as Select from '@ui5/webcomponents/dist/Select.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-ui5-data-collection-dropdown`
 * The furo-ui5-data-collection-dropdown component represents a drop-down list. The items inside define the available
 * options by using the furo-ui5-data-collection-dropdown component.
 *
 * Keyboard Handling
 * The furo-ui5-data-collection-dropdown provides advanced keyboard handling. If the furo-ui5-data-collection-dropdown
 * is focused, you can open or close the drop-down by pressing F4, ALT+UP or ALT+DOWN keys. Once the drop-down is
 * opened, you can use the UP and DOWN arrow keys to navigate through the available options and select one
 * by pressing the Space or Enter keys.
 *
 * ### auto-select-first
 * set this attribute to auto select the first item in the list, if no item is set in the bounded fieldNode.
 *
 * @summary data collection dropdown
 * @customElement
 * @demo demo-furo-ui5-data-collection-dropdown Basic Usage
 */
export class FuroUi5DataCollectionDropdown extends Select.default {
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

    /**
     * If you inject an array with complex objects, declare here the path where display_name and value_field are located.
     *
     * This is only needed if display_name and value_field are not located in the root of the object.
     * @type {string}
     */
    this.subField = 'data';
    /**
     * The name of the field from the injected collection that contains the label for the dropdown array.
     * @type {string}
     */
    this.displayField = 'display_name';
    /**
     * declare here the name of the field from the injected collection.  by selecting an item from dropdown the defined
     * valueSubField of bounded complex type or the value by scalar type will be updated according to the value of this field.
     * @type {string}
     */
    this.valueField = 'id';

    /**
     * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
     *
     * If you bind a scalar, you dont need this attribute.
     * @type {string}
     */
    this.valueSubField = undefined;

    /**
     * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
     *
     * If you bind a scalar, you dont need this attribute.
     * @type {string}
     */
    this.displaySubField = 'display_name';

    /**
     * set this attribute to autoSelectFirst the first item in the list, if no item is set in the bounded fieldNode
     * @type {boolean}
     */
    this.autoSelectFirst = false;

    this._fieldNodeToUpdate = {};
    this._fieldDisplayNodeToUpdate = {};
    this._dropdownList = [];
    // generated one element dropdown, which has only the data of the bounded DO
    this._pseudoDropdownList = [];
    // injected dropdown elements which from a collection of response or in spec defined options
    this._injectedDropdownList = [];
    this._valueFoundInList = true;

    this._initBinder();

    /**
     * Listener to catch the selected data
     */
    this.addEventListener('change', val => {
      this.updateLock = true;

      const selectedObj = this._dropdownList.find(
        obj => obj.id === val.detail.selectedOption.dataset.id,
      );

      if (this.binder.fieldNode) {
        // by valid input reset meta and constraints
        this._fieldNodeToUpdate._value = selectedObj.id;
        // the _fieldNodeToUpdate and the _fieldDisplayNodeToUpdate are the same by scalar type. in this case
        // there is no need to update the display value
        if (this._fieldNodeToUpdate !== this._fieldDisplayNodeToUpdate) {
          this._fieldDisplayNodeToUpdate._value = this._findDisplayNameByValue(selectedObj.id);
        }

        this.binder.deleteLabel('pristine');
      }
      setTimeout(() => {
        this.updateLock = false;
      }, 50);

      this._notifiySelectedItem(selectedObj);
    });

    /**
     * set option items by opening the dropdown if items are not set before
     */
    this.addEventListener('click', () => {
      // always use injected list by clicking the dropdown
      this._triggerSetOptionItem();
    });

    this.addEventListener('focus', () => {
      // init once
      if (this.options.length === 0) {
        this._triggerSetOptionItem();
      }
    });
  }

  _triggerSetOptionItem() {
    if (this._injectedDropdownList.length > 0) {
      this._dropdownList = this._injectedDropdownList;
    } else if (this._pseudoDropdownList.length > 0) {
      this._dropdownList = this._pseudoDropdownList;
    }
    this._pseudoDropdownList = [];
    this._optionNeedToBeRendered = true;
    this._setOptionItems();
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    if (this.options === undefined) {
      this.options = [];
    }
    setTimeout(() => {
      super.connectedCallback();
    }, 0);
  }

  /**
   * List of observed attributes
   * @returns {string[]}
   */
  static get observedAttributes() {
    return [
      'value-field',
      'display-field',
      'sub-field',
      'value-sub-field',
      'display-sub-field',
      'auto-select-first',
    ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      // eslint-disable-next-line default-case
      switch (name) {
        case 'value-field':
          this.valueField = newVal;
          break;
        case 'display-field':
          this.displayField = newVal;
          break;
        case 'sub-field':
          this.subField = newVal;
          break;
        case 'value-sub-field':
          this.valueSubField = newVal;
          break;
        case 'display-sub-field':
          this.displaySubField = newVal;
          break;
        case 'auto-select-first':
          if ((newVal || newVal === '') && newVal !== 'false') {
            this.autoSelectFirst = true;
          }
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
      readonly: 'disabled',
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
   * Fired when an item from the dropdown was selected
   * detail payload: the original item object
   */
  _notifiySelectedItem(obj) {
    if (obj) {
      const customEvent = new Event('item-selected', { composed: true, bubbles: true });
      customEvent.detail = obj._original;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   *
   * @param arr
   * @private
   */
  _notifyAndTriggerUpdate(arr) {
    if (arr.length > 0) {
      this.setList(arr);
    }
  }

  /**
   * Set the options programmatically
   * @param {Array} Array with options
   */
  setList(optionArray) {
    this._injectedDropdownList = optionArray;
    this._dropdownList = this._injectedDropdownList;

    this._setOptionItems();
  }

  /**
   * set option items
   * @private
   */
  _setOptionItems() {
    if (
      this._dropdownList &&
      (this.autoSelectFirst || this._optionNeedToBeRendered || this._fieldNodeToUpdate._value)
    ) {
      this.optionItems = this._dropdownList;
    }
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

    let arr;
    if (this._fieldNodeToUpdate._value) {
      arr = collection.map(e => ({
        id: e.id,
        label: e.label,
        selected: this._fieldNodeToUpdate._value === e.id.toString() || false,
      }));
    } else {
      arr = collection.map(e => ({
        id: e.id,
        label: e.label,
        selected: this._fieldNodeToUpdate._value === e.selected || false,
      }));
    }

    if (!this._fieldNodeToUpdate._value) {
      // if no preselected select the first item
      this._fieldNodeToUpdate._value = arr[0].id;
      arr[0].selected = true;
    }

    // save parsed selection option array
    this.selectOptions = arr;
    this.addItems(this.selectOptions);

    const selectedObj = this._dropdownList.find(obj => obj.id === this._fieldNodeToUpdate._value);

    this._notifiySelectedItem(selectedObj);
    this._optionNeedToBeRendered = true;
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

    const arrSubfieldChains = this.subField.length ? this.subField.split('.') : [];

    if (Array.isArray(collection)) {
      collection.forEach(element => {
        const tmpValue = {};
        arrSubfieldChains.forEach(s => {
          if (element[s]) {
            Object.assign(tmpValue, element[s]);
          } else {
            Object.assign(tmpValue, element);
          }
        });
        tmpValue._original = element;
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
          id: list[i][this.valueField],
          label: list[i][this.displayField],
          selected: false,
          _original: list[i]._original,
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

  /**
   * Adds the option components to the default slot
   * @param options
   */
  addItems(options) {
    this.innerHTML = '';
    this.value = '';
    options.forEach(item => {
      const element = document.createElement('ui5-option');
      element.setAttribute('value', item.label);
      element.setAttribute('data-id', item.id);
      element.value = item.label;
      if (item.selected) {
        element.setAttribute('selected', '');
      }
      element.innerText = item.label;
      this.appendChild(element);
    });
    this._requestUpdate();
  }

  /**
   * @private
   */
  _requestUpdate() {
    // sync the ui5 options and re-render it to update the dropdown list
    setTimeout(() => {
      // direct modify the option of ui5 component is forbidden via ui5, therefor use splice
      this.options.splice(0, this.options.length);
      this._state.options.forEach(element => {
        this.options.push(element);
      });
      this._updateSlots();
    }, 0);
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
    return path.split('.').reduce((res, prop) => res[prop], obj) || obj;
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
      if (!this.binder.fieldNode._pristine) {
        this.binder.deleteLabel('pristine');
      }

      if (this.valueSubField) {
        this._fieldNodeToUpdate = this._getValueByPath(this.binder.fieldNode, this.valueSubField);
        this._fieldDisplayNodeToUpdate = this._getValueByPath(
          this.binder.fieldNode,
          this.displaySubField,
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

      this.binder.fieldNode.addEventListener('field-value-changed', e => {
        if (
          this.binder.fieldFormat === 'scalar' ||
          (this.binder.fieldFormat === 'complex' && this.valueSubField === e.detail._name)
        ) {
          this._updateField();
        }
      });

      this._updateField();
    }
  }

  _initDropdownItemWithoutCollectionInjection() {
    let valueIsEmpty = false;

    // complex value
    if (this.valueSubField && this.valueSubField !== 'null') {
      if (
        this.binder.fieldValue[this.valueSubField] !== null &&
        this.binder.fieldValue[this.displayField] !== null
      ) {
        this._pseudoDropdownList = [
          {
            id: this.binder.fieldValue[this.valueSubField],
            label: this.binder.fieldValue[this.displaySubField],
            selected: true,
          },
        ];
        if (
          !this.binder.fieldValue[this.valueSubField] &&
          this.binder.fieldValue[this.valueSubField] !== 0
        ) {
          valueIsEmpty = true;
        }
      }
    } else if (this.binder.fieldValue !== null) {
      this._pseudoDropdownList = [
        { id: this.binder.fieldValue, label: this.binder.fieldValue, selected: true },
      ];
      if (!this.binder.fieldValue && this.binder.fieldValue !== 0) {
        valueIsEmpty = true;
      }
    }

    if (this.autoSelectFirst && valueIsEmpty && this._injectedDropdownList.length > 0) {
      this._dropdownList = this._injectedDropdownList;
      this._setOptionItems();
    } else if (this._pseudoDropdownList.length > 0) {
      this._dropdownList = this._pseudoDropdownList;
      this._setOptionItems();
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
    if (!this.updateLock) {
      this._valueFoundInList = false;
      let size = this._injectedDropdownList.length;
      // eslint-disable-next-line no-plusplus
      while (size--) {
        if (this.valueSubField && this.valueSubField !== 'null') {
          if (this._injectedDropdownList[size].id === this.binder.fieldValue[this.valueSubField]) {
            this._injectedDropdownList[size].selected = true;
            this._valueFoundInList = true;
          }
        } else if (this._injectedDropdownList[size].id === this.binder.fieldValue) {
          this._injectedDropdownList[size].selected = true;
          this._valueFoundInList = true;
        }
      }

      if (!this._valueFoundInList) {
        this._initDropdownItemWithoutCollectionInjection();
      } else {
        this._notifyAndTriggerUpdate(this._injectedDropdownList);
      }
    }
  }

  _listHasDOValue () {

  }

  /**
   * change the value data of repeated field to an array according to the defined subfield likes `data.id`
   * @param data
   * @returns {[]}
   * @private
   */
  _parseRepeatedData(data) {
    const arrValue = [];
    const arrSubfieldChains = this.subField.split('.');
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
    if (options && options.list && options.list.length > 0) {
      this.autoSelectFirst = true;
      this.injectList(options.list);
    }
  }

  _setItemSelectedViaSelectedMark(list) {
    let arr = [];
    if (Array.isArray(list)) {
      arr = list.map(e => ({
        id: e[this.valueField],
        label: e[this.displayField],
        selected: !!e.selected,
        _original: e._original,
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

window.customElements.define('furo-ui5-data-collection-dropdown', FuroUi5DataCollectionDropdown);
