import { FuroRadioButtonInput } from '@furo/input/src/furo-radio-button-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-radio-button-input` is a extension of furo-checkbox-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type bool, google.protobuf.BoolValue, furo.fat.Bool. It is also possible to bind string values, but the
 * values will be handled as boolean true when the string is not empty.
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 *  * ### following labels of the furo.fat.Bool are supported:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'pristine': data is not changed. it is pristine
 * - 'condensed': input has condensed display
 * - 'hidden': input is hidden
 *
 * ### following attributes of the furo.fat.Bool are supported:
 *
 * - 'label': input label
 * - 'hint': input hint
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 *
 * ### following constrains are mapped into the attributes of the furo.fat.Bool :
 *
 * - 'required': is mapped to 'required' attribute
 *
 * <sample-furo-data-radio-button-input></sample-furo-data-radio-button-input>
 *
 * ## Attributes & Properties
 * see the Attributes & Properties of [furo-radio-button-input](/furo-input?t=FuroRadioButtonInput)
 *
 * @summary Bind a entityObject.field to a range input
 * @customElement
 * @demo demo-furo-data-radio-button-input Data binding
 * @mixes FBP
 */
export class FuroDataRadioButtonInput extends FuroRadioButtonInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Boolean} the bool value
   *
   * Comes from underlying component furo-radio-button-input. **bubbles**
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
      required: 'value._constraints.required.is',
    };

    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-checkbox-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      // set flag empty on empty strings (for fat types)
      if (this.binder.fieldFormat === 'fat') {
        if (val.detail) {
          this.binder.deleteLabel('empty');
        } else if (val.detail !== false) {
          this.binder.addLabel('empty');
        }

        // if something was entered the field is not empty
        this.binder.deleteLabel('pristine');
      }

      if (this.binder.fieldValue !== val.detail) {
        // update the value
        this.binder.fieldValue = val.detail;
      }
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
   * Bind a entity field to the furo-data-radio-button-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      /**
       * handle pristine
       *
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
      });
    }
  }
}

customElements.define('furo-data-radio-button-input', FuroDataRadioButtonInput);
