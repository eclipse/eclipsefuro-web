import { FuroSelectInput } from '@furo/input/src/furo-select-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import {CollectionDropdownHelper} from './lib/CollectionDropdownHelper.js';

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
    this.displaySubField = 'display_name';
    this.valueField = 'id';
    this.subField = 'data';
    this.valueSubField = undefined;
    this.updateLock = false;

    this._dropdownList = [];
    // generated one element dropdown, which has only the data of the bounded DO
    this._pseudoDropdownList = [];
    // injected dropdown elements which from a collection of response or in spec defined options
    this._injectedDropdownList = [];
    this._valueFoundInList = true;


    this.addEventListener('value-changed', val => {
      if (this.binder.fieldNode) {
        // by valid input reset meta and constraints
        this._fieldNodeToUpdate._value = val.detail;

        if (this.subfield) {
          this._fieldDisplayNodeToUpdate._value = CollectionDropdownHelper.findDisplayNameByValue(this, val.detail);
        }
      }

      const selectedObj = this._dropdownList.find(
        obj => obj.id === this._fieldNodeToUpdate._value,
      );

      CollectionDropdownHelper.notifiySelectedItem(this,selectedObj);
    });

    this._initBinder();

    /**
     * set option items by opening the dropdown if items are not set before
     */
    this.addEventListener('focus', () => {
      // always use injected list by clicking the dropdown
      CollectionDropdownHelper.triggerSetOptionItem(this);
    });

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


  /**
   * @event item-selected
   * Fired when an item from the dropdown was selected
   * detail payload: the original item object
   */

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
      CollectionDropdownHelper.updateField(this);
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

  static get properties() {
    return {
      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
        reflect: true,
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
      displaySubField: {
        type: String,
        attribute: 'display-sub-field',
      },
      /**
       * The name of the field from the injected collection that contains the label for the dropdown array.
       */
      displayField: {
        type: String,
        attribute: 'display-field',
      },
      /**
       * The name of the field from the injected collection that contains the value you want to assign to the attribute value and the bounded field.
       */
      valueField: {
        type: String,
        attribute: 'value-field',
      },
      /**
       * The name of the field from the injected collection that contains the value you want to assign to the attribute value and the bounded field.
       */
      valueSubField: {
        type: String,
        attribute: 'value-sub-field',
      },

      autoSelectFirst: {
        type: Boolean,
        attribute: 'auto-select-first',
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
        reflect: true,
      },

      readonly: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Icon on the left side
       */
      leadingIcon: {
        type: String,
        attribute: 'leading-icon',
        reflect: true,
      },
      /**
       * Icon on the right side
       */
      trailingIcon: {
        type: String,
        attribute: 'trailing-icon',
        reflect: true,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"] by furo-select-input
       */
      list: {
        type: String,
        reflect: true,
      },
      /**
       * the dropdown list
       */
      _dropdownList: {
        type: Array,
      },

      /**
       * A Boolean attribute which, if present, means this field is not writeable for a while.
       */
      _writeLock: {
        type: Boolean,
      },
    };
  }





  /**
   * Bind a entity field to the range-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    CollectionDropdownHelper.bindData(this, fieldNode);
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  addItems(arr) {
    super.setOptions(arr);

    this.requestUpdate();
  }


  /**
   * Build the dropdown list with given options from meta
   * @param {options} list of options with id and display_name
   */
  _buildListWithMetaOptions(options) {
    const arr = CollectionDropdownHelper.mapDataToList(this,options.list);

    this._notifyAndTriggerUpdate(arr);
  }




  /**
   * Inject the array of a collection
   * @param entities
   */
  injectEntities(entities) {
    CollectionDropdownHelper.injectList(this,entities);
  }
}

customElements.define('furo-data-collection-dropdown', FuroDataCollectionDropdown);
