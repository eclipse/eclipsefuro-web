import * as Select from '@ui5/webcomponents/dist/Select.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js'; // eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { CollectionDropdownHelper } from './lib/DELETEMECollectionDropdownHelper.js';

/**
 * # DEPRECATED switch to `furo-ui5-data-select`
 *
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
 * @fires {{*} the original injected data (e.g. entity with link) of the selected item} item-selected -  Fired when the item of dropdown list is selected. **bubbles**
 *
 * @summary data collection dropdown
 * @customElement
 * @demo demo-furo-ui5-data-collection-dropdown Basic Usage
 * @demo demo-furo-ui5-data-collection-dropdown-auto Autoselect first
 */
export class FuroUi5DataCollectionDropdown extends Select.default {
  constructor() {
    super();

    // eslint-disable-next-line no-console
    console.warn(
      'furo-ui5-data-collection-dropdown is deprecated since 2021-06-18. ' +
        'Please switch to furo-ui5-data-select before 2021-Q4.',
    );

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
     * if you bind a complex type, you must declare here the field which gets updated of value by selecting an item. e.g. value-sub-field = "id"
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

    /**
     *
     * @type {{}}
     * @private
     */
    this._fieldNodeToUpdate = {};
    /**
     *
     * @type {{}}
     * @private
     */
    this._fieldDisplayNodeToUpdate = {};
    /**
     *
     * @type {*[]}
     * @private
     */
    this._dropdownList = [];

    /**
     * generated one element dropdown, which has only the data of the bounded DO
     * @type {*[]}
     * @private
     */
    this._pseudoDropdownList = [];
    /**
     * injected dropdown elements which from a collection of response or in spec defined options
     * @type {*[]}
     * @private
     */
    this._injectedDropdownList = [];
    /**
     *
     * @type {boolean}
     * @private
     */
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

      if (selectedObj && this.binder.fieldNode) {
        // by valid input reset meta and constraints
        this._fieldNodeToUpdate._value = selectedObj.id;
        // the _fieldNodeToUpdate and the _fieldDisplayNodeToUpdate are the same by scalar type. in this case
        // there is no need to update the display value
        if (this._fieldNodeToUpdate !== this._fieldDisplayNodeToUpdate) {
          this._fieldDisplayNodeToUpdate._value = CollectionDropdownHelper.findDisplayNameByValue(
            this,
            selectedObj.id,
          );
        }

        this.binder.addLabel('modified');
      }
      setTimeout(() => {
        this.updateLock = false;
      }, 50);

      CollectionDropdownHelper.notifiySelectedItem(this, selectedObj);
    });

    /**
     * set option items by opening the dropdown if items are not set before
     */
    this.addEventListener('click', () => {
      // always use injected list by clicking the dropdown
      CollectionDropdownHelper.triggerSetOptionItem(this);
    });

    this.addEventListener('focus', () => {
      // init once
      if (this.options.length === 0) {
        CollectionDropdownHelper.triggerSetOptionItem(this);
      }
    });
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
   * Bind a entity field to the range-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      if (this.valueSubField && this.valueSubField !== 'null') {
        this._fieldNodeToUpdate = CollectionDropdownHelper.getValueByPath(
          this.binder.fieldNode,
          this.valueSubField,
        );
        this._fieldDisplayNodeToUpdate = CollectionDropdownHelper.getValueByPath(
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

      // this._fieldDisplayNodeToUpdate.addEventListener('field-value-changed', () => {
      //   CollectionDropdownHelper.updateField(this);
      // });

      this.binder.fieldNode.addEventListener('field-value-changed', e => {
        if (
          this.binder.fieldFormat === 'scalar' ||
          (this.binder.fieldFormat === 'complex' && this.valueSubField === e.detail._name)
        ) {
          CollectionDropdownHelper.updateField(this);
        }
      });
      CollectionDropdownHelper.updateField(this);
    }
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  /**
   * Build the dropdown list with given options from meta
   * @param {options} list of options with id and display_name
   * @private
   */
  _buildListWithMetaOptions(options) {
    if (options && options.list && options.list.length > 0) {
      this._isMetaInjection = true;
      CollectionDropdownHelper.injectList(this, options.list);
    }
  }

  /**
   * Inject the array of a collection
   * @param {FieldNode} entities of type *Entities
   */
  injectEntities(entities) {
    CollectionDropdownHelper.injectList(this, entities);
  }
}

window.customElements.define('furo-ui5-data-collection-dropdown', FuroUi5DataCollectionDropdown);
