import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';
import '@ui5/webcomponents/dist/RadioButton.js';

/**
 * `furo-ui5-data-radio-button-group`
 * The furo-ui5-data-radio-button-group component enables users to select a single option from a set of options.
 * When a furo-ui5-data-radio-button-group is selected by the user, the select event is fired.
 * When a furo-ui5-data-radio-button-group that is within a group is selected, the one that was previously selected gets automatically deselected.
 * You can group radio buttons by using the group-name property.
 *
 * ```
 * <furo-ui5-data-radio-button-group
 *    group-name="Option"
 *    ƒ-bind-data="--daoPerson(*.field_with_meta_options)">
 * </furo-ui5-data-radio-button-group>
 * ```
 * ```
 * <furo-ui5-data-radio-button-group
 *    group-name="Option"
 *    ƒ-bind-data="--daoPerson(*.field)">
 *      <ui5-radio-button text="Option A" selected name="Owner"></ui5-radio-button>
 *      <ui5-radio-button text="Option B with a very long text" name="Owner"></ui5-radio-button>
 * </furo-ui5-data-radio-button-group>
 * ```
 * @fires {{*} the value from the value-field. By default the value field is "id"} value-changed -  Fired when value has changed from the component inside. **bubbles**
 *
 * @fires {selectedOption}  item-selected - Fired when the radio button is selected.
 * @fires options-updated - Fires event options-updated after rebuilding option list.
 *
 * @summary
 * @customElement
 * @demo demo-furo-ui5-data-radio-button-group Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5DataRadioButtonGroup extends FieldNodeAdapter(HTMLElement) {
  constructor() {
    super();

    /**
     * Inner radio component tag
     * @type {string}
     * @private
     */
    this._tagRadioButton = 'ui5-radio-button';

    /**
     * Defines the name of the inner radio button. Radio buttons with the same name will form a radio button group.
     * @type {string}
     */
    this.groupName = '';

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
      'group-name': null,
    };

    // changed is fired when the select operation has finished.
    this.addEventListener('change', this._updateFNA);
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
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    this.readAttributes();

    if (this.options === undefined) {
      const OPTIONS = this.querySelectorAll(this._tagRadioButton);
      if (OPTIONS && OPTIONS.length) {
        this.options = OPTIONS;

        OPTIONS.forEach(opt => {
          /**
           * set readonly, disabled to all existing options
           */
          if (this._privilegedAttributes.readonly !== null) {
            opt.setAttribute('readonly', '');
          }
          if (this._privilegedAttributes.disabled !== null) {
            opt.setAttribute('disabled', '');
          }
        });
      } else {
        this.options = [];
      }
    }
  }

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `readonly`,`disabled`, `value-field-path`, `display-field-path`
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      if (this.getAttribute(attr) !== null) {
        this._privilegedAttributes[attr] = this.getAttribute(attr);
      }
    });
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      this.selectOptionById(this._tmpFAT.value);
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
    } else {
      this.selectOptionById(val);
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
      // set attribute readonly to all children
      this.readonly = readonly;

      const existingOptions = this.querySelectorAll(this._tagRadioButton);
      existingOptions.forEach(opt => {
        if (this.readonly) {
          opt.setAttribute(readonly, '');
        } else {
          opt.removeAttribute('readonly');
        }
      });
    }
  }

  /**
   * Overwrite onFnaOptionsChanged
   * Notifies when the options for the field is changed or set.
   * @private
   * @param options
   */
  onFnaOptionsChanged(options) {
    if (options && Array.isArray(options.list)) {
      this._updateOptions(options.list);
    }
  }

  /**
   * Selects an option by id
   * @param id
   */
  selectOptionById(val) {
    if (!this.activeFieldBinding) {
      // there is no active field binding. No update needed.
      return false;
    }
    this.options = this.querySelectorAll(this._tagRadioButton);

    if (this.options && this.options.length) {
      let result;
      this.options.forEach(elem => {
        if (elem.dataset.id === val) {
          result = elem;
        }
      });

      if (result) {
        result.checked = true;
      }
    }
    return true;
  }

  /**
   * Let you get an attribute value by path
   * @param obj
   * @param path
   * @returns {}
   * @private
   */
  static getValueByPath(obj, path) {
    return path.split('.').reduce((res, prop) => res[prop], obj) || obj;
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

    if (this._optionList && this._optionList.repeats && this._optionList.repeats.length) {
      selectedOption = this._optionList.repeats.find(
        obj =>
          FuroUi5DataRadioButtonGroup.getValueByPath(
            obj,
            this._privilegedAttributes['id-field-path'],
          )._value === e.target.dataset.id,
      );

      if (selectedOption) {
        newValue = FuroUi5DataRadioButtonGroup.getValueByPath(
          selectedOption,
          this._privilegedAttributes['value-field-path'],
        )._value;
      }
    } else {
      // if there is no active option binding
      // The id of the attribute data-id will be set available. Fallback is: text of the option element.
      newValue = e.target.dataset.id || e.target.text;
      selectedOption = e.target;
    }

    /**
     * Only if activeFieldBinding is true
     */
    if (this.activeFieldBinding) {
      if (this.isFat()) {
        if (newValue === '') {
          this._tmpFAT.value = null;
          // add empty state
          if (this._tmpFAT.labels === null) {
            this._tmpFAT.labels = {};
          }
          this._tmpFAT.labels.empty = true;
        } else {
          this._tmpFAT.value = newValue;
          // remove empty state
          if (this._tmpFAT.labels && this._tmpFAT.labels.empty) {
            delete this._tmpFAT.labels.empty;
          }
          // init labels in_tmpFAT
          if (this._tmpFAT.labels === null) {
            this._tmpFAT.labels = {};
          }
          // set modified on changes
          this._tmpFAT.labels.modified = true;
        }
        this.setFnaFieldValue(this._tmpFAT);
      } else if (this.isWrapper()) {
        this.setFnaFieldValue(newValue === '' ? null : newValue);
      } else {
        this.setFnaFieldValue(newValue === '' ? '' : newValue);
      }
    }

    /**
     * Fired when the value has changed
     *  * @fires {String} field-value-changed - Fires the field value when it changes.
     * @type {Event}
     */
    const customEvent = new Event('value-changed', { composed: true, bubbles: true });
    customEvent.detail = selectedOption;
    this.dispatchEvent(customEvent);

    const customSelectEvent = new Event('item-selected', { composed: true, bubbles: true });
    customSelectEvent.detail = selectedOption;
    this.dispatchEvent(customSelectEvent);
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
        const optionItem = document.createElement(this._tagRadioButton);
        optionItem.setAttribute(
          'data-id',
          FuroUi5DataRadioButtonGroup.getValueByPath(
            item,
            this._privilegedAttributes['id-field-path'],
          ),
        );

        optionItem.text = FuroUi5DataRadioButtonGroup.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path'],
        )._value;

        if (this._privilegedAttributes.readonly !== null) {
          optionItem.setAttribute('readonly', '');
        }
        if (this._privilegedAttributes.disabled !== null) {
          optionItem.setAttribute('disabled', '');
        }

        optionItem.name = this._privilegedAttributes['group-name'];
        optionNodeList.push(optionItem);
      });
    } else if (list && list.length) {
      // applies static option list items from spec or
      // option list items from meta
      list.forEach(item => {
        const optionItem = document.createElement(this._tagRadioButton);
        optionItem.setAttribute(
          'data-id',
          FuroUi5DataRadioButtonGroup.getValueByPath(
            item,
            this._privilegedAttributes['id-field-path'],
          ),
        );

        optionItem.text = FuroUi5DataRadioButtonGroup.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path'],
        );

        if (this._privilegedAttributes.readonly !== null) {
          optionItem.setAttribute('readonly', '');
        }
        if (this._privilegedAttributes.disabled !== null) {
          optionItem.setAttribute('disabled', '');
        }
        optionItem.name = this._privilegedAttributes['group-name'];
        optionNodeList.push(optionItem);
      });
    }

    if (optionNodeList.length) {
      const existingOptions = this.querySelectorAll(this._tagRadioButton);
      existingOptions.forEach(opt => {
        this.removeChild(opt);
      });

      optionNodeList.forEach(newOpt => {
        this.appendChild(newOpt);
      });
    }

    this.dispatchEvent(
      new CustomEvent('options-updated', {
        detail: optionNodeList,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

window.customElements.define('furo-ui5-data-radio-button-group', FuroUi5DataRadioButtonGroup);
