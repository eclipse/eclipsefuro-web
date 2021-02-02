import { FuroUi5DataInput } from './furo-ui5-data-input.js';

/**
 * The furo-ui5-data-ro component allows the user to show text information.
 *
 * The text field is read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 *
 * @summary data display field
 * @customElement
 * @demo demo-furo-ui5-data-ro Basic usage (scalar, fat, wrapper values)
 */
export class FuroUi5DataRo extends FuroUi5DataInput {
  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    this.readonly = true;
  }

  /**
   * apply the binding set to the binder
   * binding set can be customised here otherwise the standard set in the ui5-data-input will be used
   * @param fieldNode
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      hint: '_hint',
      icon: 'ui5Icon', // icon and leading icon maps to the same
      'leading-icon': 'ui5Icon', // icon and leading icon maps to the same
      'value-state': '_valueState',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'pattern',
      name: 'name',
    };

    // set the label mappings
    this.binder.labelMappings = {
      disabled: 'disabled',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {};

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {};
  }

  /**
   * Binds the fieldNode to the component
   * binding set can be customised here otherwise the standard bindData in the ui5-data-input will be used
   * @param fieldNode
   */
  bindData(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    this.binder.bindField(fieldNode);
    this.binder.fieldNode.addEventListener('field-value-changed', () => {
      this._updateField();
    });

    this.binder.fieldNode.addEventListener('new-data-injected', () => {
      this._requestUpdate();
    });
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
    this._updateField();
  }

  _updateField() {
    if (this.binder.fieldFormat === 'fat') {
      this.value = this.binder.fieldNode.value._value;
    } else if (
      typeof this.binder.fieldNode._value === 'object' &&
      !Array.isArray(this.binder.fieldNode._value) &&
      this.binder.fieldNode._value !== null
    ) {
      this.value = JSON.stringify(this.binder.fieldNode._value);
    } else {
      this.value = this.binder.fieldNode._value.toString();
    }

    if (this.displayField && this.displayField.length && this.binder.fieldNode[this.displayField]) {
      this.value = this.binder.fieldNode[this.displayField]._value;
    } else if (this.binder.fieldNode.display_name) {
      this.value = this.binder.fieldNode.display_name;
    }

    if (this.value && this.value.toString() === undefined) {
      this.value = '';
    }
  }
}
window.customElements.define('furo-ui5-data-ro', FuroUi5DataRo);
