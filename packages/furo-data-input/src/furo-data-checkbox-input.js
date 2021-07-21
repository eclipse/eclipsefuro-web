import { FuroCheckboxInput } from '@furo/input/src/furo-checkbox-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-checkbox-input` is a extension of furo-checkbox-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type bool, google.protobuf.BoolValue, furo.fat.Bool. It is also possible to bind string values, but the
 * values will be handled as boolean true when the string is not empty.
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * ### following labels of the furo.fat.Bool are supported:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
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
 * <sample-furo-data-checkbox-input></sample-furo-data-checkbox-input>
 *
 * ## Attributes & Properties
 * see the Attributes & Properties of [furo-checkbox-input](/furo-input?t=FuroCheckboxInput)
 *
 * @fires {{Boolean} the bool value} value-changed -  Fired when value has changed from inside the input field. Comes from underlying component furo-checkbox-input. **bubbles**
 *
 * @summary Bind a entityObject.field to a checkbox input
 * @customElement
 * @demo demo-furo-data-checkbox-input Data binding
 * @mixes FBP
 */
export class FuroDataCheckboxInput extends FuroCheckboxInput {


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
    this.binder.targetValueField = '__value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      // set flag empty on empty strings (for fat types)
      if (this.binder.fieldFormat === 'fat') {
        if (val.detail) {
          this.binder.deleteLabel('empty');
        } else if (val.detail !== false) {
          this.binder.addLabel('empty');
        }
      }

      // update the value
      this.setValue(val.detail);
    });
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    if (this.binder.fieldNode) {
      // update only if field is bound
      if (this.binder.fieldNode._spec.type === 'string') {
        const v = val ? 'true' : 'false';
        if (this.binder.fieldValue !== v) {
          this.binder.fieldValue = v;
        }
      } else if (this.binder.fieldValue !== val) {
        this.binder.fieldValue = val;
      }
    }
  }


  /**
   * pass the value to the underlieying component always as boolean
   * @param v
   * @private
   */
  set __value(v) {
    if (typeof v === 'string') {
      this._value = v.toLowerCase() === 'true';
    } else {
      this._value = v;
    }
  }

  /**
   * Bind a entity field to the checkbox-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
  }
}

customElements.define('furo-data-checkbox-input', FuroDataCheckboxInput);
