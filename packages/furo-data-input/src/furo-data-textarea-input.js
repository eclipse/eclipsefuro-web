import { FuroTextareaInput } from '@furo/input/src/furo-textarea-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-textarea-input` is a extension of furo-textarea-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type string, google.protobuf.StringValue, furo.fat.String or any type with the signature
 * of the google.protobuf.StringValue (string must be in field `value`). It is also possible to bind numeric values, but the
 * values will be handled as string.
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * ### following labels of the furo.fat.String are supported:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'condensed': input has condensed display
 * - 'hidden': input is hidden
 *
 * ### following attributes of the furo.fat.String are supported:
 *
 * - 'label': input label
 * - 'hint': input hint
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 * - 'pattern': the input regex pattern.
 * - 'min': minimum number of characters available in the input field
 * - 'max': maximum number of characters available in the input field
 * - 'rows': number of rows in the input field
 * - 'cols': number of cols in the input field
 *
 * ### following constrains are mapped into the attributes of the furo.fat.String :
 *
 * - 'max': is mapped to 'max' attribute
 * - 'min': is mapped to 'min' attribute
 * - 'required': is mapped to 'required' attribute
 *
 * <sample-furo-data-textarea-input></sample-furo-data-textarea-input>
 *
 * ## Attributes & Properties
 * see the Attributes & Properties of [furo-textarea-input](/furo-input?t=FuroTextareaInput)
 *
 * @summary Bind a entityObject.field to a textarea input
 * @customElement
 * @demo demo-furo-data-textarea-input Data binding
 * @mixes FBP
 */
export class FuroDataTextareaInput extends FuroTextareaInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the textarea value
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */

  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the textarea input
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the textarea input
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
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
      errortext: 'errortext',
      'error-msg': 'errortext',
      min: 'min',
      max: 'max',
      rows: 'rows',
      cols: 'cols',
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
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      min: 'min',
      max: 'max',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
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
   * Bind a entity field to the textarea-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
  }
}

customElements.define('furo-data-textarea-input', FuroDataTextareaInput);
