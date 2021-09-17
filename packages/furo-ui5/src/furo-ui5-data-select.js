import * as Select from '@ui5/webcomponents/dist/Select.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';

import '@ui5/webcomponents/dist/Option.js';

/**
 * The furo-ui5-data-select component is used to create a drop-down list. The items inside the furo-ui5-data-select define
 * the available options by using the ui5-option component. Use the function bindOptions to bind a RepeaterNode as a option list.
 *
 * ```
 * <furo-ui5-data-select
 *    ƒ-bind-data="--entity(*.data.description)"
 *    ƒ-bind-options="--collection(*.entities)">
 * </furo-ui5-data-select>
 * ```
 *
 * @fires {optionNodeList} options-updated - Fired  after the option list was rebuilt.
 * @fires {selectedOption} item-selected - Fired when the item of the dropdown list is selected.
 * @fires {selectedOption} field-value-changed - Fires the field value when it changes.
 *
 * @summary data select field
 * @customElement
 * @demo demo-furo-ui5-data-select Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataSelect extends FieldNodeAdapter(Select.default) {
  constructor() {
    super();

    /**
     * Flag to indicate if a field is attached
     * Default: false
     * @type {boolean}
     */
    this.activeFieldBinding = false;

    /**
     * Defines the field path that is used from the injected RepeaterNode to identify the option items.
     * Point-separated path to the field
     * E.g. data.partner.ulid
     * default: id
     * @type {string}
     */
    this.idFieldPath = 'id';

    /**
     * Defines the field path that is used from the injected RepeaterNode to display the option items.
     * Point-separated path to the field
     * E.g. data.partner.display_name
     * default: display_name
     * @type {string}
     */
    this.displayFieldPath = 'display_name';

    /**
     * Defines the field path that is used to update the bound component if the user has selected an option.
     * Point-separated path to the field
     * Must be set if a data binding is specified.
     * default: id
     * @type {string}
     */
    this.valueFieldPath = 'id';

    /**
     * Internal RepeaterNode
     * Defines the ui5-select options.
     * Note: Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.
     * @type {*[]}
     * @private
     */
    this._optionList = [];

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = { state: 'None', message: '' };

    this._attributesFromFNA = {
      readonly: undefined,
    };

    this._constraintsFromFNA = {
      required: undefined,
    };

    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
      required: undefined,
    };

    this._attributesFromFAT = {};

    /**
     * a list of privileged attributes. when those attributes are set in furo-ui5-data-select components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     */
    this._privilegedAttributes = {
      readonly: null,
      required: null,
      disabled: null,
      'id-field-path': 'id',
      'value-field-path': 'id',
      'display-field-path': 'display_name',
    };

    // changed is fired when the select operation has finished.
    this.addEventListener('change', this._updateFNA);
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    this.readAttributes();

    if (this.options === undefined) {
      const OPTIONS = this.querySelectorAll('ui5-option');
      if (OPTIONS && OPTIONS.length) {
        this.options = [];
        OPTIONS.forEach(item => {
          this.options.push(item);
        });
      } else {
        this.options = [];
      }
    }
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    // created to avoid the default messages from ui5
    const vse = this.querySelector('*[slot="valueStateMessage"]');
    if (vse === null) {
      this._valueStateElement = document.createElement('div');
      this._valueStateElement.setAttribute('slot', 'valueStateMessage');
      // eslint-disable-next-line wc/no-constructor-attributes
      this.appendChild(this._valueStateElement);
    } else {
      this._valueStateElement = vse;
      this._previousValueState.message = vse.innerText;
    }
  }

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `value-state`, `required`,`readonly`,`disabled`, `value-field-path`, `display-field-path`
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
    this._previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';

    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      if (this.getAttribute(attr) !== null) {
        this._privilegedAttributes[attr] = this.getAttribute(attr);
      }
    });
  }

  /**
   * Here a RepeaterNode can be connected to the component as an option list.
   * @param repeaterNode
   */
  bindOptions(repeaterNode) {
    if (!(repeaterNode instanceof RepeaterNode)) {
      // eslint-disable-next-line no-console
      console.warn(
        'Invalid param in function bindOptions. Param is not of type RepeaterNode',
        repeaterNode,
      );
      return false;
    }
    this._optionList = repeaterNode;

    /**
     * Subscription for changes in the RepeaterNode
     */
    this._optionList.addEventListener('this-repeated-field-changed', () => {
      this._updateOptions();
    });
    this._updateOptions();
    return true;
  }

  /**
   * overwrite bindData of FieldNodeAdapter
   * @param {FieldNode} fieldNode
   * @returns {boolean}
   */
  bindData(fieldNode) {
    this.activeFieldBinding = true;
    return super.bindData(fieldNode);
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    const type = this.getDataType();
    if (type === 'furo.StringOptionProperty') {
      this._tmpValue = val.id;
      this._stringOptionValue = val;
      this.selectOptionById(this._tmpValue);
      return;
    }
    if (this.isFat()) {
      this._fatValue = val;
      this._tmpValue = this._fatValue.value;
      this.selectOptionById(this._fatValue.value);
      this._updateAttributesFromFat(this._fatValue.attributes);
      this._updateLabelsFromFat(this._fatValue.labels);
    } else {
      this._tmpValue = val;
      this.selectOptionById(this._tmpValue);
    }
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (
      this._privilegedAttributes.readonly === null &&
      this._labelsFromFAT.readonly === undefined
    ) {
      // ui5-select has no proper readonly support
      this.disabled = readonly;
    }
  }

  /**
   * overwrite onFnaOptionsChanged function
   * @private
   * @param options
   */
  onFnaOptionsChanged(options) {
    if (options && options.list) {
      this._updateOptions(options.list);
    }
  }

  /**
   * overwrite onFnaConstraintsChanged function
   * @private
   * @param constraints
   */
  onFnaConstraintsChanged(constraints) {
    // required
    if (constraints.required !== undefined) {
      this._constraintsFromFNA.required = constraints.required;
      if (
        this._privilegedAttributes.required === null &&
        this._labelsFromFAT.required === undefined
      ) {
        this.required = constraints.required.is === 'true';
      }
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    // if (validity.description) {
    // this value state should not be saved as a previous value state
    this._setValueStateMessage('Error', validity.description);
    // }
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueStateMessage();
  }

  /**
   * Selects an option by id
   * @param id
   */
  selectOptionById(id) {
    if (!this.activeFieldBinding) {
      // there is no active field binding. No update needed.
      return false;
    }

    if (this.options && this.options.length) {
      const result = this.options.filter(elem => elem.dataset.id === id);
      if (result && result.length) {
        if (this.selectedOption) {
          this.selectedOption.removeAttribute('selected');
        }
        result[0].setAttribute('selected', '');
      }
    }
    return true;
  }

  /**
   * labels are map <string,bool>, we handle every boolean attribute with the labels
   *
   * @param fatLabels
   * @private
   */
  _updateLabelsFromFat(fatLabels) {
    if (fatLabels === null || fatLabels === undefined) {
      return;
    }
    // this is needed to check the specifity in the onFnaXXXXChanged callback functions
    this._labelsFromFAT.readonly = fatLabels.readonly;
    this._labelsFromFAT.required = fatLabels.required;

    // readonly
    if (this._privilegedAttributes.readonly === null) {
      if (fatLabels.readonly !== undefined) {
        // apply from fat
        this.readonly = fatLabels.readonly;
      } else if (this._attributesFromFNA.readonly !== undefined) {
        // apply from fieldnode (meta)
        this.readonly = this._attributesFromFNA.readonly;
      }
    }

    // CONSTRAINT required
    if (this._privilegedAttributes.required === null) {
      if (fatLabels.required !== undefined) {
        this.required = fatLabels.required;
      } else if (this._constraintsFromFNA.required !== undefined) {
        this.required = this._constraintsFromFNA.required.is === 'true';
      }
    }

    // disabled
    if (this._privilegedAttributes.disabled === null) {
      if (fatLabels.disabled !== undefined) {
        this.disabled = fatLabels.disabled;
      }
    }
  }

  /**
   * sync input attributes according to fat attributes
   * @private
   */
  _updateAttributesFromFat(fatAttributes) {
    if (fatAttributes === null || fatAttributes === undefined) {
      return;
    }

    // this is needed to check the specifity in the onFnaXXXXChanged callback functions
    this._attributesFromFAT.disabled = fatAttributes.disabled;

    // value-state and corresponding message
    if (fatAttributes['value-state'] !== undefined) {
      // save state as previous state
      this._previousValueState = {
        state: fatAttributes['value-state'],
        message: fatAttributes['value-state-message'],
      };
      this._setValueStateMessage(
        fatAttributes['value-state'],
        fatAttributes['value-state-message'],
      );
    } else {
      // remove state if fat does not have state, even it is set in the html
      this._previousValueState = { state: 'None', message: fatAttributes['value-state-message'] };
      this._setValueStateMessage('None', fatAttributes['value-state-message']);
    }
  }

  /**
   * update the value state and the value state message on demand
   *
   * @param valueState
   * @param message
   * @private
   */
  _setValueStateMessage(valueState, message) {
    this.valueState = valueState;
    if (message !== undefined) {
      // element was created in constructor
      this._valueStateElement.innerText = message;
    }
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueStateMessage() {
    this._setValueStateMessage(this._previousValueState.state, this._previousValueState.message);
  }

  /**
   * Maps and updates array of option
   * @param list
   * @private
   */
  _updateOptions(list) {
    const optionNodeList = [];

    if (this._optionList && this._optionList.repeats) {
      this._optionList.repeats.forEach(item => {
        const optionItem = document.createElement('ui5-option');
        optionItem.setAttribute(
          'data-id',
          FuroUi5DataSelect.getValueByPath(item, this._privilegedAttributes['id-field-path']),
        );

        optionItem.innerText = FuroUi5DataSelect.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path'],
        )._value;
        optionNodeList.push(optionItem);
      });
    } else if (list && list.length) {
      // applies static option list items from spec or
      // option list items from meta
      list.forEach(item => {
        const optionItem = document.createElement('ui5-option');
        optionItem.setAttribute(
          'data-id',
          FuroUi5DataSelect.getValueByPath(item, this._privilegedAttributes['id-field-path']),
        );
        if (item.disabled === true) {
          optionItem.setAttribute('disabled', 'true');
        }

        if (item.icon !== undefined) {
          optionItem.setAttribute('icon', item.icon);
        }

        optionItem.innerText = FuroUi5DataSelect.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path'],
        );
        optionNodeList.push(optionItem);
      });
    }

    if (optionNodeList.length) {
      const existingOptions = this.querySelectorAll('ui5-option');
      existingOptions.forEach(opt => {
        this.removeChild(opt);
        this.options.pop();
      });

      optionNodeList.forEach(newOpt => {
        this.insertBefore(newOpt, this._valueStateElement);
        this.options.push(newOpt);
      });
    }

    /**
     * if there is an active field binding
     * the option should be re-selected
     */
    if (this.activeFieldBinding) {
      setTimeout(() => {
        this.selectOptionById(this._tmpValue);
      }, 0);
    }

    this.dispatchEvent(
      new CustomEvent('options-updated', {
        detail: optionNodeList,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Let you get an attribute value by path
   * @param obj
   * @param path
   * @returns {}
   * @private
   */
  static getValueByPath(obj, path) {
    if (obj && path) {
      return path.split('.').reduce((res, prop) => res[prop], obj) || obj;
    }
    return {};
  }

  /**
   * Handler function for the select value changes.
   * This is done to be able to remove the event-listeners as a protection for multiple calls
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA(e) {
    let newValue = '';
    let selectedOption = {};

    if (this._optionList && this._optionList.repeats) {
      selectedOption = this._optionList.repeats.find(
        obj =>
          FuroUi5DataSelect.getValueByPath(obj, this._privilegedAttributes['id-field-path'])
            ._value === e.detail.selectedOption.dataset.id,
      );

      if (selectedOption) {
        newValue = FuroUi5DataSelect.getValueByPath(
          selectedOption,
          this._privilegedAttributes['value-field-path'],
        )._value;
      }
    } else {
      // if there is no active option binding
      // The id of the attribute data-id will be set available. Fallback is: innerText of the option element.
      newValue = e.detail.selectedOption.dataset.id || e.detail.selectedOption.innerText;
      selectedOption = e.detail.selectedOption;
    }

    /**
     * Only if activeFieldBinding is true
     */
    if (this.activeFieldBinding) {
      if (this.isFat()) {
        if (newValue === '') {
          this._tmpValue = null;
          this._fatValue.value = null;
          // add empty state
          if (this._fatValue.labels === null) {
            this._fatValue.labels = {};
          }
          this._fatValue.labels.empty = true;
        } else {
          this._tmpValue = newValue;
          this._fatValue.value = newValue;
          // remove empty state
          if (this._fatValue.labels && this._fatValue.labels.empty) {
            delete this._fatValue.labels.empty;
          }
          // init labels in _fatValue
          if (this._fatValue.labels === null) {
            this._fatValue.labels = {};
          }
          // set modified on changes
          this._fatValue.labels.modified = true;
        }
        this.setFnaFieldValue(this._fatValue);
      } else if (this.isWrapper()) {
        this._tmpValue = newValue === '' ? null : newValue;
        this.setFnaFieldValue(newValue === '' ? null : newValue);
      } else if (this.getDataType() === 'furo.StringOptionProperty') {
        this._stringOptionValue.id = newValue;
        this._stringOptionValue.display_name = selectedOption.textContent;
        this.setFnaFieldValue(this._stringOptionValue);
        return;
      } else {
        this._tmpValue = newValue;
        this.setFnaFieldValue(newValue === '' ? '' : newValue);
      }
    }

    const customEvent = new Event('value-changed', { composed: true, bubbles: true });
    customEvent.detail = selectedOption;
    this.dispatchEvent(customEvent);

    const customSelectEvent = new Event('item-selected', { composed: true, bubbles: true });
    customSelectEvent.detail = selectedOption;
    this.dispatchEvent(customSelectEvent);
  }
}

window.customElements.define('furo-ui5-data-select', FuroUi5DataSelect);
