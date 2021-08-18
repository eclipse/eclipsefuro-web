import * as RadioButton from '@ui5/webcomponents/dist/RadioButton.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * The 'furo-ui5-data-radio-button' component allows the user to switch true and false for Bool with data binding.
 *
 * It supports all features from the [SAP ui5 toggleButton element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/).

 * You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 * ```html
 *  <furo-ui5-data-radio-button
 *     ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 *  ></furo-ui5-data-radio-button>
 * ```
 * ```html
 *  <furo-ui5-radio-group>
 *    <furo-ui5-data-radio-button name="group"
 *       ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 *    ></furo-ui5-data-radio-button>
 *    <furo-ui5-data-radio-button name="group"
 *       ƒ-bind-data="--daoCountry(*.data.classified_as_high_risk_area)"
 *    ></furo-ui5-data-radio-button>
 *  </furo-ui5-radio-group>
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
 *  - **"icon":""** set the icon
 *  - **"design":""** set the design
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
 *
 * @fires {} select -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @fires {} xxxx -  All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/).
 * @fires {Boolean} field-value-changed - Fired when value changed
 *
 * @summary boolean toggle button
 * @customElement
 * @demo demo-furo-ui5-data-radio-button Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataRadioButton extends FieldNodeAdapter(RadioButton.default) {
  constructor() {
    super();

    // used to restore the state after a invalidation -> validation change
    this._previousDesign = 'Default';

    this._attributesFromFNA = {
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    };

    this._constraintsFromFNA = {};

    this._attributesFromFAT = {
      label: undefined,
      icon: undefined,
      design: undefined,
    };

    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
    };

    // a list of privileged attributes. when those attributes are set in number-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      disabled: null,
      text: null,
      icon: null,
      design: null,
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
    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * Handler function for the toggleButton changes.
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA() {
    if (this.isFat()) {
      this._tmpFAT.value = this.checked;
      // set modified on changes
      if (this._tmpFAT.labels === null) {
        this._tmpFAT.labels = {};
      }
      this._tmpFAT.labels.modified = true;

      this.setFnaFieldValue(this._tmpFAT);
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
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      this.selected = !!val.value;
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
    } else {
      this.selected = !!val;
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
        this.innerText = fatAttributes.label;
      } else if (this._attributesFromFNA.label !== undefined) {
        this.innerText = this._attributesFromFNA.label;
      }
      this._render();
    }

    // icon
    if (this._privilegedAttributes.icon === null) {
      if (fatAttributes.icon !== undefined) {
        this.icon = fatAttributes.icon;
      } else if (this._attributesFromFNA.icon !== undefined) {
        this.icon = this._attributesFromFNA.icon;
      }
      this._render();
    }

    // design and corresponding message
    if (fatAttributes.design !== undefined) {
      // save state as previous state
      this._previousDesign = fatAttributes.design;
      this._setDesign(fatAttributes.design);
    } else {
      // remove state if fat does not have state, even it is set in the html
      // save state as previous state
      this._previousDesign = 'Default';
      this._setDesign('Default');
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   */
  onFnaFieldNodeBecameInvalid() {
    this._setDesign('Error');
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetDesign();
  }

  /**
   * Updates the design
   *
   * @private
   */
  _setDesign(design) {
    this.design = design;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetDesign() {
    this._setDesign(this._previousDesign);
  }

  /**
   * overwrite onFnaLabelChanged function
   * label is mapped to text
   * @param placeholder
   */
  onFnaLabelChanged(text) {
    this._attributesFromFNA.label = text;
    if (this._privilegedAttributes.text === null && this._attributesFromFAT.label === undefined) {
      this.innerText = text;
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
      this.readonly = readonly;
    }
  }
}
window.customElements.define('furo-ui5-data-radio-button', FuroUi5DataRadioButton);
