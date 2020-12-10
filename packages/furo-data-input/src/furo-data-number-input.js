import { FuroNumberInput } from '@furo/input/src/furo-number-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-number-input` is a extension of furo-number-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type int32, int64, google.protobuf.Int32Value, google.protobuf.Int64Value, furo.fat.Int32,
 * furo.fat.Int64
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * ### following labels of the furo.fat.Int32 or furo.fat.Int64 are supported:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'condensed': input has condensed display
 * - 'hidden': input is hidden
 *
 * ### following attributes of the furo.fat.Int32 or furo.fat.Int64 are supported:
 *
 * - 'label': input label
 * - 'hint': input hint
 * - 'leading-icon': furo leading icon of the input
 * - 'trailing-icon': furo trailing icon of the input
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 * - 'step': the step of number input.
 * - 'min': minimum value in the input field
 * - 'max': maximum value in the input field
 *
 * ### following constrains are mapped into the attributes of the furo.fat.Int32 or furo.fat.Int64:
 *
 * - 'max': is mapped to 'max' attribute
 * - 'min': is mapped to 'min' attribute
 * - 'step': is mapped to 'step' attribute
 * - 'required': is mapped to 'required' attribute
 *
 * <sample-furo-data-number-input></sample-furo-data-number-input>
 *
 * ## Attributes & Properties
 * Please refer to furo-number-input
 *
 * @summary Bind a numeric entityObject.field to a number input
 * @customElement
 * @demo demo-furo-data-number-input Data binding
 * @demo demo-fat-furo-data-text-input skalar, wrapper, FAT binding
 * @mixes FBP
 */
export class FuroDataNumberInput extends FuroNumberInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the number value
   *
   * Comes from underlying component furo-number-input. **bubbles**
   */

  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the number input
   *
   * Comes from underlying component furo-number-input. **bubbles**
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the value input
   *
   * Comes from underlying component furo-number-input. **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;

    this._initBinder();
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
      step: 'step',
      min: 'min',
      max: 'max',
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
      max: 'value._constraints.max.is', // for the fieldnode constraint
      min: 'value._constraints.min.is', // for the fieldnode constraint
      step: 'value._constraints.step.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      min: 'min',
      max: 'max',
      step: 'step',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-number-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      // set flag empty on empty strings (for fat types)
      if (val.detail) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }

      // update the value
      this.binder.fieldValue = val.detail;
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
   * Bind a entity field to the number-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
  }

  /**
   * check the empty state by furo.fat object. check the null value by wrapper object.
   * empty the input field.
   * @private
   */
  _checkAndEmptyInput() {
    if (
      (this.binder.fieldFormat === 'wrapper' && this.binder.fieldNode._value.value === null) ||
      (this.binder.fieldFormat === 'fat' && this.binder.fieldNode.labels.empty !== undefined)
    ) {
      this.setValue(null);
    }
  }
}

customElements.define('furo-data-number-input', FuroDataNumberInput);
