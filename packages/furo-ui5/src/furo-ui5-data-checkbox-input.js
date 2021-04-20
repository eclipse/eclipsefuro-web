import * as CheckBox from '@ui5/webcomponents/dist/CheckBox.js';
import { css } from 'lit-element';

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
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind a entity field. You can use the entity even when no data was received.
 *
 * When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 * @summary data checkbox input field
 * @customElement
 * @demo demo-furo-ui5-data-checkbox-input Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataCheckboxInput extends FieldNodeAdapter(CheckBox.default) {
  /**
   * @event change
   * Fired when the checkbox checked state changes.
   *
   * detail payload: `bool`
   */

  /**
   * @event xxxx
   * All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).
   *
   */

  constructor() {
    super();

    this._attributesFromFNA = {
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    };

    this._constraintsFromFNA = {};

    this._attributesFromFAT = {
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    };

    // a list of privileged attributes. when those attributes are set in number-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      disabled: null,
      text: null,
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
   */
  readAttributes() {
    this._valueState = this.getAttribute('value-state') ? this.getAttribute('value-state') : 'None';
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
      this._tmpFAT.value = this.checked;
      this.setFnaFieldValue(this._tmpFAT);
    } else {
      this.setFnaFieldValue(this.checked);
    }

    /**
     * Fired when value changed
     * @type {Event}
     */
    const customEvent = new Event('value-changed', { composed: true, bubbles: true });
    customEvent.detail = this.checked;
    this.dispatchEvent(customEvent);
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      this.checked = !!val.value;
      this._updateAttributesFromFat(this._tmpFAT.attributes);
    } else {
      this.checked = !!val;
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
    this._attributesFromFAT.readonly = fatAttributes.readonly;
    this._attributesFromFAT.disabled = fatAttributes.disabled;
    this._attributesFromFAT.text = fatAttributes.text;
    this._attributesFromFAT.label = fatAttributes.label;

    // readonly
    if (this._privilegedAttributes.readonly === null) {
      if (fatAttributes.readonly !== undefined) {
        this.readonly = fatAttributes.readonly === 'true';
      } else if (this._attributesFromFNA.readonly !== undefined) {
        this.readonly = this._attributesFromFNA.readonly;
      }
    }

    // text
    if (this._privilegedAttributes.text === null) {
      if (fatAttributes.label !== undefined) {
        this.text = fatAttributes.label;
      } else if (this._attributesFromFNA.label !== undefined) {
        this.text = this._attributesFromFNA.label;
      }
      this._render();
    }

    // disabled
    if (this._privilegedAttributes.disabled === null) {
      if (fatAttributes.disabled !== undefined) {
        this.disabled = fatAttributes.disabled === 'true';
      }
    }

    // error-msg
    if (fatAttributes['error-msg'] !== undefined) {
      this._valueState = 'Error';
      this._setValueState('Error');
    }

    // error-msg
    if (fatAttributes.errortext !== undefined) {
      this._valueState = 'Error';
      this._setValueState('Error');
    }

    // warning-msg
    if (fatAttributes['warning-msg'] !== undefined) {
      this._valueState = 'Warning';
      this._setValueState('Warning');
    }

    // success-msg
    if (fatAttributes['success-msg'] !== undefined) {
      this._valueState = 'None';
      this._setValueState('None');
    }

    // information-msg
    if (fatAttributes['information-msg'] !== undefined) {
      this._valueState = 'None';
      this._setValueState('None');
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @param validaty
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
   * Updates the vs and creates the element in the slot on demand
   * ui5 checkbox has only 3 states: Warning, Error, and None (default) https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/
   * @param msg
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
    this._setValueState(this._valueState);
  }

  /**
   * overwrite onFnaLabelChanged function
   * label is mapped to text
   * @param placeholder
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
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (
      this._privilegedAttributes.readonly === null &&
      this._attributesFromFAT.readonly === undefined
    ) {
      this.readonly = readonly;
    }
  }

  /**
   * extend styling
   * @returns {string}
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
