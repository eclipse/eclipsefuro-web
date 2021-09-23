import * as SegmentedButton from '@ui5/webcomponents/dist/SegmentedButton.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';
import '@ui5/webcomponents/dist/SegmentedButtonItem.js';

/**
 * `furo-ui5-data-segmented-button`
 * The furo-ui5-data-segmented-button component represents a drop-down list. The items inside define the available
 * options by using the furo-ui5-data-segmented-button component.
 *
 * ```
 * <furo-ui5-data-segmented-button
 *    ƒ-bind-data="--daoPerson(*.field_with_meta_options)">
 * </furo-ui5-data-segmented-button>
 * ```
 * ```
 * <furo-ui5-data-segmented-button
 *    ƒ-bind-data="--daoPerson(*.field)">
 *      <ui5-segmented-button-item pressed>Option A</ui5-segmented-button-item>
 *      <ui5-segmented-button-item>Option B</ui5-segmented-button-item>
 * </furo-ui5-data-segmented-button>
 * ```
 * @fires {{*} the value from the value-field. By default the value field is "id"} value-changed -  Fired when value has changed from the component inside. **bubbles**
 *
 * @fires {selectedOption} item-selected - Fired when the toggle button was clicked.
 *
 * Payload:
 * - if no option binding is active: ui5-segmented-button-item
 * - if a RepeaterNode is bound: FieldNode
 *
 * @fires {optionNodeList} options-updated - Fired  after the option list was rebuilt
 *
 * @summary segmented button
 * @customElement
 * @demo demo-furo-ui5-data-segmented-button Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5DataSegmentedButton extends FieldNodeAdapter(SegmentedButton.default) {
  constructor() {
    super();

    /**
     * Inner component tag
     * @type {string}
     * @private
     */
    this._tagItemComponent = 'ui5-segmented-button-item';

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
    };

    // changed is fired when the select operation has finished.
    this.addEventListener('click', this._updateFNA);
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

    if (this.buttons === undefined) {
      const OPTIONS = this.querySelectorAll(this._tagItemComponent);
      if (OPTIONS && OPTIONS.length) {
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

      const existingOptions = this.querySelectorAll(this._tagItemComponent);
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
    const BUTTONS = this.querySelectorAll(this._tagItemComponent);

    if (BUTTONS && BUTTONS.length) {
      let result;
      BUTTONS.forEach(elem => {
        // eslint-disable-next-line no-param-reassign
        elem.pressed = false;
        if (elem.dataset.id === val) {
          result = elem;
        }
      });

      if (result) {
        result.pressed = true;
      }
      // Update the internal state for ui5 navigation
      this._state.items = Array.from(BUTTONS);
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

    const existingOptions = this.querySelectorAll(this._tagItemComponent);
    existingOptions.forEach(elem => {
      // eslint-disable-next-line no-param-reassign
      elem.pressed = elem.getAttribute('data-id') === e.target.dataset.id;
    });

    if (this._optionList && this._optionList.repeats && this._optionList.repeats.length) {
      selectedOption = this._optionList.repeats.find(
        obj =>
          FuroUi5DataSegmentedButton.getValueByPath(
            obj,
            this._privilegedAttributes['id-field-path'],
          )._value === e.target.dataset.id,
      );

      if (selectedOption) {
        newValue = FuroUi5DataSegmentedButton.getValueByPath(
          selectedOption,
          this._privilegedAttributes['id-field-path'],
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
     * Payload:
     *  - if no option binding is active: ui5-segmented-button-item
     *  - if a RepeaterNode is bound: FieldNode
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
        const optionItem = document.createElement(this._tagItemComponent);
        optionItem.setAttribute(
          'data-id',
          FuroUi5DataSegmentedButton.getValueByPath(
            item,
            this._privilegedAttributes['id-field-path'],
          ),
        );

        const DISPLAY_TEXT = FuroUi5DataSegmentedButton.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path'],
        )._value;
        optionItem.innerText = DISPLAY_TEXT;
        optionItem.value = DISPLAY_TEXT;

        if (this._privilegedAttributes.readonly !== null) {
          optionItem.setAttribute('readonly', '');
        }
        if (this._privilegedAttributes.disabled !== null) {
          optionItem.setAttribute('disabled', '');
        }

        optionNodeList.push(optionItem);
      });
    } else if (list && list.length) {
      // applies static option list items from spec or
      // option list items from meta
      list.forEach(item => {
        const optionItem = document.createElement(this._tagItemComponent);
        optionItem.setAttribute(
          'data-id',
          FuroUi5DataSegmentedButton.getValueByPath(
            item,
            this._privilegedAttributes['id-field-path'],
          ),
        );

        const DISPLAY_TEXT = FuroUi5DataSegmentedButton.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path'],
        );

        optionItem.innerText = DISPLAY_TEXT;
        optionItem.value = DISPLAY_TEXT;

        if (this._privilegedAttributes.readonly !== null) {
          optionItem.setAttribute('readonly', '');
        }
        if (this._privilegedAttributes.disabled !== null) {
          optionItem.setAttribute('disabled', '');
        }
        optionNodeList.push(optionItem);
      });
    }

    if (optionNodeList.length) {
      const existingOptions = this.querySelectorAll(this._tagItemComponent);
      existingOptions.forEach(opt => {
        this.removeChild(opt);
      });

      optionNodeList.forEach(newOpt => {
        this.appendChild(newOpt);
      });
    }

    // Update the internal state for ui5 navigation
    this._state.items = optionNodeList;

    this._render();

    this.dispatchEvent(
      new CustomEvent('options-updated', {
        detail: optionNodeList,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

window.customElements.define('furo-ui5-data-segmented-button', FuroUi5DataSegmentedButton);
