import * as CheckBox from '@ui5/webcomponents/dist/CheckBox.js';
import { css } from 'lit';

// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * The 'furo-ui5-data-checkbox-input' component allows the user to switch true and false for Bool with data binding.
 *
 * It supports all features from the [SAP ui5 checkbox element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).

 * You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 *  * ```html
 *  <furo-ui5-data-checkbox-input
 *     ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 *  ></furo-ui5-data-checkbox-input>
 * ```
 *
 * ### Specificity
 * 1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
 * 2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.
 *
 * | meta 	| fat 	| html 	|
 * |------	|-----	|------	|
 * | 1    	| 10  	| 100  	|
 *
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"disabled":"true"** set the element to disabled
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 * The constraint **required** will mark the element as required
 *
 * ```
 *
 *
 *
 *
 * @fires {Boolean} change -  Fired when the checkbox checked state changes.
 * @fires {} xxxx -  All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).
 *
 * @fires {Boolean} field-value-changed - Fires the field value when it changes.
 *
 * When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 * @summary data checkbox input field
 * @customElement
 * @demo demo-furo-ui5-data-checkbox-input Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataCheckboxInput extends FieldNodeAdapter(CheckBox.default) {
  constructor() {
    super();

    /**
     * used to restore the state after a invalidation -> validation change
     * @type {string}
     * @private
     */
    this._previousValueState = 'None';
    /**
     *
     * @type {{readonly: undefined, disabled: undefined, label: undefined}}
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    };

    /**
     *
     * @type {{}}
     * @private
     */
    this._constraintsFromFNA = {};
    /**
     *
     * @type {{label: undefined}}
     * @private
     */
    this._attributesFromFAT = {
      label: undefined,
    };

    /**
     *
     * @type {{readonly: undefined, disabled: undefined}}
     * @private
     */
    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
    };

    /**
     * a list of privileged attributes. when those attributes are set in number-input components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     *
     * @type {{readonly: null, disabled: null, text: null}}
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
      disabled: null,
      text: null,
      indeterminate: null,
      checked: null,
    };

    this.addEventListener('change', this._updateFNA);
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();
  }

  /**
   * Reads the attributes which are set on the component dom.
   * @public
   */
  readAttributes() {
    this._previousValueState = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';
    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * Handler function for the checkbox changes.
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA() {
    if (this.isFat()) {
      this._tmpFAT.value = this.checked || this.indeterminate;
      // set modified on changes
      if (this._tmpFAT.labels === null) {
        this._tmpFAT.labels = {};
      }
      this._tmpFAT.labels.modified = true;

      this.setFnaFieldValue(this._tmpFAT);
    } else if (this.isWrapper()) {
      this.setFnaFieldValue(this.checked || this.indeterminate);
    } else {
      this.setFnaFieldValue(this.checked);
    }

    const customEvent = new Event('field-value-changed', { composed: true, bubbles: true });
    customEvent.detail = this.checked;
    this.dispatchEvent(customEvent);
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @param val
   * @private
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      if (val && val.value === null) {
        this.checked = true;
        this.indeterminate = true;
      } else {
        this.checked = !!val;
        this.indeterminate = false;
      }
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
    } else if (this.isWrapper()) {
      if (val === null) {
        this.checked = true;
        this.indeterminate = true;
      } else {
        this.checked = !!val;
        this.indeterminate = false;
      }
    } else {
      this.checked = !!val;
    }
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
    // this is needed to check the specifity in the onFnaReadonlyChanged callback functions
    this._labelsFromFAT.readonly = fatLabels.readonly;

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
    this._attributesFromFAT.label = fatAttributes.label;

    // text
    if (this._privilegedAttributes.text === null) {
      if (fatAttributes.label !== undefined) {
        this.text = fatAttributes.label;
      } else if (this._attributesFromFNA.label !== undefined) {
        this.text = this._attributesFromFNA.label;
      }
      this._render();
    }

    // value-state and corresponding message
    if (fatAttributes['value-state'] !== undefined) {
      // save state as previous state
      this._previousValueState = fatAttributes['value-state'];
      this._setValueState(fatAttributes['value-state']);
    } else {
      // remove state if fat does not have state, even it is set in the html
      // save state as previous state
      this._previousValueState = 'None';
      this._setValueState('None');
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   */
  onFnaFieldNodeBecameInvalid() {
    this._setValueState('Error');
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueState();
  }

  /**
   * Updates the valueState
   * ui5 checkbox has only 3 states: Warning, Error, and None (default) https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/
   * @private
   */
  _setValueState(valueState) {
    this.valueState = valueState;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueState() {
    this._setValueState(this._previousValueState);
  }

  /**
   * overwrite onFnaLabelChanged function
   * label is mapped to text
   * @param {String} placeholder
   * @private
   */
  onFnaLabelChanged(text) {
    this._attributesFromFNA.label = text;
    if (this._privilegedAttributes.text === null && this._attributesFromFAT.label === undefined) {
      this.text = text;
    }
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param {Boolean} readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (
      this._privilegedAttributes.readonly === null &&
      this._labelsFromFAT.readonly === undefined
    ) {
      this.readonly = readonly;
    }
  }

  /**
   * extend styling
   * @returns {string}
   * @private
   */
  static get styles() {
    return `${css`` + super.styles}
        :host([left]) .ui5-checkbox-root{
          width: auto;
        }
      `;
  }
}

window.customElements.define('furo-ui5-data-checkbox-input', FuroUi5DataCheckboxInput);
