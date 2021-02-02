import * as MultiInput from '@ui5/webcomponents/dist/MultiInput';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';
import '@ui5/webcomponents/dist/Token.js';

/**
 * `furo-ui5-data-multi-input`
 *
 * The furo-ui5-data-multi-input component represents the repeated strings. e.g. ["aaa","bbb","ccc"]
 *
 * @summary data ui5 data multi input
 * @customElement
 * @demo demo-furo-ui5-data-multi-input Basic usage (recommended for repeated strings)
 */
export class FuroUi5DataMultiInput extends MultiInput.default {
  constructor() {
    super();
    this._initBinder();

    this.addEventListener('change', event => {
      this.valueState = 'Normal';

      if (!event.target.value) {
        return;
      }

      const isDuplicate = event.target.tokens.some(token => token.text === event.target.value);

      if (isDuplicate) {
        this.valueState = 'Error';

        setTimeout(() => {
          this.valueState = 'Normal';
        }, 2000);

        return;
      }

      // eslint-disable-next-line wc/no-constructor-attributes
      this.appendChild(this._createUi5Token(event.target.value));
      const value = this.binder.fieldNode._value;
      value.push(event.target.value);
      this.binder.fieldNode._value = value;

      // eslint-disable-next-line no-param-reassign
      event.target.value = '';

      this._triggerValueChangedEvent();
    });

    this.addEventListener('token-delete', event => {
      this.binder.fieldNode._value = this.binder.fieldNode._value.filter(
        item => item !== event.detail.token.text,
      );
      this._updateItems();
      this._triggerValueChangedEvent();
    });
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    this.applyBindingSet();
  }

  /**
   * apply the binding set to the universal field node binder
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      placeholder: 'placeholder', // map placeholder to placeholder
      'value-state': '_valueState',
      name: 'name',
      maxlength: 'maxlength', // for the input element itself
    };

    // set the label mappings
    this.binder.labelMappings = {
      'show-value-help-icon': 'showValueHelpIcon',
      'show-suggestions': 'showSuggestions',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine',
      highlight: 'highlight',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      maxlength: 'value._constraints.max.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      max: 'maxlength',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // update the value on input changes
    this.addEventListener('input', val => {
      // update the value
      this.binder.fieldValue = val.target.value;

      /**
       * Fired when value changed
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = val.target.value;
      this.dispatchEvent(customEvent);

      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');
    });
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    /**
     * Because of the UI5 TextArea Tokenizer we can not pass NULL as a value.
     * If the value is null, we pass an empty string
     * @type {string}
     * @private
     */
    // eslint-disable-next-line no-param-reassign
    fieldNode._value = fieldNode._value || '';

    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      /**
       * handle pristine
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine');
      } else {
        this.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine');
        this._updateItems();
        this._triggerValueChangedEvent();
      });

      this.binder.fieldNode.addEventListener('repeated-field-changed', () => {
        this._updateItems();
      });

      this._updateItems();
    }
  }

  _updateItems() {
    this.value = '';
    this._removeAllItems();
    this.binder.fieldNode._value.forEach(item => {
      this.appendChild(this._createUi5Token(item));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _createUi5Token(text) {
    const token = document.createElement('ui5-token');

    token.setAttribute('text', text);
    token.setAttribute('slot', 'tokens');

    return token;
  }

  _triggerValueChangedEvent() {
    /**
     * Fired when value changed
     * the event detail is the value of the repeated string
     * @type {Event}
     */
    const customEvent = new Event('value-changed', { composed: true, bubbles: true });
    customEvent.detail = this.binder.fieldNode._value;
    this.dispatchEvent(customEvent);
  }

  _removeAllItems() {
    this.innerHTML = '';
  }
}
window.customElements.define('furo-ui5-data-multi-input', FuroUi5DataMultiInput);
