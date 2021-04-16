// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import '@ui5/webcomponents/dist/RadioButton.js';

/**
 * `furo-ui5-data-radio-button-group`
 * The furo-ui5-data-radio-button-group component enables users to select a single option from a set of options.
 * When a furo-ui5-data-radio-button-group is selected by the user, the select event is fired. When a furo-ui5-data-radio-button-group
 * that is within a group is selected, the one that was previously selected gets automatically deselected.
 * You can group radio buttons by using the name property.
 * Note: If furo-ui5-data-radio-button-group is not part of a group, it can be selected once, but can not be deselected back.
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

    this.readonly = false;
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

    this._fieldNodeToUpdate = {};
    this._fieldDisplayNodeToUpdate = {};
    this._dropdownList = [];

    this._initBinder();

    /**
     * Listener to catch the selected button
     */
    this.addEventListener('select', val => {
      const selectedObj = this._dropdownList.find(
        // eslint-disable-next-line eqeqeq
        obj => obj.id == val.target.dataset.id,
      );

      if (this.binder.fieldNode && selectedObj) {
        // by valid input reset meta and constraints
        this._fieldNodeToUpdate._value = selectedObj.id;
        this._fieldDisplayNodeToUpdate._value = this._findDisplayNameByValue(selectedObj.id);
      }
    });
  }

  /**
   * List of observed attributes
   * @returns {string[]}
   */
  static get observedAttributes() {
    return [
      'readonly',
      'value-field',
      'display-field',
      'sub-field',
      'value-sub-field',
      'display-sub-field',
    ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      // eslint-disable-next-line default-case
      switch (name) {
        case 'readonly':
          this.readonly = newVal === '';
          this._updateField();
          break;
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
  }

  _findDisplayNameByValue(val) {
    let displayName = '';

    for (let i = 0; i < this._dropdownList.length; i += 1) {
      // eslint-disable-next-line eqeqeq
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
    const selectedObj = this._dropdownList.find(
      // eslint-disable-next-line eqeqeq
      item => item.id === obj,
    );

    if (selectedObj && selectedObj._original) {
      const customEvent = new Event('item-selected', { composed: true, bubbles: true });
      customEvent.detail = selectedObj._original;
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
      this._dropdownList = arr;

      if (this._fieldNodeToUpdate && this._fieldNodeToUpdate._value) {
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
        readonly: this.readonly,
        _original: e,
      };
    });

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

    const arrSubfieldChains = this.subField.length ? this.subField.split('.') : [];

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
          id: list[i][this.valueField],
          label: list[i][this.displayField],
          selected: false,
          readonly: this.readonly,
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

  /**
   * Adds the option components to the default slot
   * @param options
   */
  addItems(options) {
    const toggleGroup = this;

    const existingOptions = toggleGroup.querySelectorAll('ui5-radiobutton');

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
    const toggleGroup = this;
    const existingOptions = toggleGroup.querySelectorAll('ui5-radiobutton');
    const existingIds = options.map(a => a.id);

    // if id of existing element is no longer in the option list, remove the ui5-radiobutton element
    existingOptions.forEach(elem => {
      if (existingIds.indexOf(elem.getAttribute('data-id')) < 0) {
        // remove element
        toggleGroup.removeChild(elem);
      }
    });

    options.forEach(item => {
      const radio = toggleGroup.querySelector(`[data-id="${item.id}"]`);
      if (radio) {
        if (toggleGroup._fieldNodeToUpdate._value === item.id) {
          radio.selected = true;
        } else {
          radio.selected = false;
        }
        radio.text = item.label;
        // eslint-disable-next-line babel/no-unused-expressions
        item.readonly ? radio.setAttribute('disabled', true) : radio.removeAttribute('disabled');
      } else {
        // add new element
        const element = document.createElement('ui5-radiobutton');
        element.setAttribute('value', item.label);
        element.setAttribute('data-id', item.id);
        if (item.selected) {
          element.setAttribute('selected', item.selected);
        } else {
          element.removeAttribute('selected');
        }
        // eslint-disable-next-line babel/no-unused-expressions
        item.readonly
          ? element.setAttribute('disabled', true)
          : element.removeAttribute('disabled');

        element.value = item.label;
        element.selected = item.selected;
        element.text = item.label;
        element.readonly = item.readonly;

        toggleGroup.appendChild(element);
      }
    });
  }

  /**
   *
   * @param options
   * @private
   */
  _initialAddOptions(options) {
    const toggleGroup = this;
    toggleGroup.value = '';
    options.forEach(item => {
      const element = document.createElement('ui5-radiobutton');
      element.setAttribute('value', item.label);
      element.setAttribute('data-id', item.id);
      if (item.selected) {
        element.setAttribute('selected', item.selected);
      } else {
        element.removeAttribute('selected');
      }
      // eslint-disable-next-line babel/no-unused-expressions
      item.readonly ? element.setAttribute('disabled', true) : element.removeAttribute('disabled');

      element.value = item.label;
      element.selected = item.selected;
      element.text = item.label;

      toggleGroup.appendChild(element);
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
    return path.split('.').reduce((res, prop) => res[prop], obj) || {};
  }

  /**
   * Bind a entity field to the range-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      if (this.valueSubField) {
        this._fieldNodeToUpdate = this._getValueByPath(this.binder.fieldNode, this.valueSubField);
        this._fieldDisplayNodeToUpdate = this._getValueByPath(
          this.binder.fieldNode,
          this.displaySubField,
        );
      } else {
        this._fieldNodeToUpdate = this.binder.fieldNode[this.valueField] || this.binder.fieldNode;
        this._fieldDisplayNodeToUpdate = this.binder.fieldNode[this.displayField] || {};
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
    let size = this._dropdownList.length;
    if (size) {
      // eslint-disable-next-line no-plusplus
      while (size--) {
        this._dropdownList[size].selected =
          this._dropdownList[size].id === this._fieldNodeToUpdate._value;
      }
      this._notifyAndTriggerUpdate(this._dropdownList);
    }
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
