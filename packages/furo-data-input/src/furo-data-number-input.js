import {FuroNumberInput} from '@furo/input/src/furo-number-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import { BindFatLabel } from './lib/BindFatLabel.js';


/**
 * `furo-data-number-input` is a extension of furo-number-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type int32, int64, google.protobuf.Int32Value, google.protobuf.Int64Value, furo.fat.int32,
 * furo.fat.int64
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * <sample-furo-data-number-input></sample-furo-data-number-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a number input
 * @customElement
 * @demo demo-furo-data-number-input Data binding
 * @demo demo-fat-furo-data-number-input skalar, wrapper, FAT binding
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
      'label': 'label',
      'hint': 'hint',
      'leading-icon': 'leadingIcon',
      'trailing-icon': 'trailingIcon',
      'errortext': 'errortext',
      'error-msg': 'errortext',
      'step': 'step',
      'min': 'min',
      'max': 'max',
    };

    // set the label mappings
    this.binder.labelMappings = {
      'error': 'error',
      'readonly': 'readonly',
      'required': 'required',
      'disabled': 'disabled',
      'condensed': 'condensed',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-number-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      // update the value
      this.binder.fieldValue = val.detail;
    });
    // set flag empty on empty strings (for fat types)
    BindFatLabel.addEmpty(this);
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val){
    this.binder.fieldValue = val;
  }

  /**
   * Bind a entity field to the number-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    // set flag pristine (for fat types)
    BindFatLabel.addPristine(this);
  }
}

customElements.define('furo-data-number-input', FuroDataNumberInput);
