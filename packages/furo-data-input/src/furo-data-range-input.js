import { FuroRangeInput } from '@furo/input/src/furo-range-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-range-input` is a extension of furo-range-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type number, google.protobuf.StringValue, furo.fat.String or any type with the signature
 * of the google.protobuf.StringValue (string must be in field `value`). It is also possible to bind numeric values, but the
 * values will be handled as string.
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 *  * ### following labels of fat types are supported:
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
 * - 'min': The minimum permitted value
 * - 'max': The maximum permitted value
 * - 'step': The stepping interval, used both for user interface and validation purposes
 *
 * ### following constrains are mapped into the attributes of the fat types :
 *
 * - 'max': is mapped to 'max' attribute
 * - 'min': is mapped to 'min' attribute
 * - 'step': is mapped to 'step' attribute
 * - 'required': is mapped to 'required' attribute
 *
 * <sample-furo-data-range-input></sample-furo-data-range-input>
 *
 * ## Attributes & Properties
 * see the Attributes & Properties of [furo-range-input](/furo-input?t=FuroRangeInput)
 *
 * @summary Bind a entityObject.field to a range input
 * @customElement
 * @demo demo-furo-data-range-input Data binding
 * @demo demo-fat-furo-data-range-input skalar, wrapper, FAT binding
 * @mixes FBP
 */
export class FuroDataRangeInput extends FuroRangeInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the range input value
   *
   * Comes from underlying component furo-range-input. **bubbles**
   */

  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the range input
   *
   * Comes from underlying component furo-range-input. **bubbles**
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the range input
   *
   * Comes from underlying component furo-range-input. **bubbles**
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
      required: 'value._constraints.required.is', // for the fieldnode constraint
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

    // the extended furo-range-input component uses _value
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
    // set flag empty on empty strings (for fat types)
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  /**
   * Bind a entity field to the range-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
  }
}

customElements.define('furo-data-range-input', FuroDataRangeInput);
