import { FuroDateInput } from '@furo/input/src/furo-date-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-date-input` is a extension of furo-date-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type string, furo.fat.String with format '2009-12-24' or type of google.type.Date with format
 * {"day": 24, "month": 12, "year": 2009}
 *
 * ### following labels of fat types are supported:
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
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 * - 'pattern': the input regex pattern.
 * - 'min': The earliest date to accept. format according to ISO 8601. e.g. '2000-01-01'
 * - 'max': The latest date to accept. format according to ISO 8601. e.g. '2000-01-01'
 * - 'step': The stepping interval to use for this input, such as when clicking arrows on spinner controls or performing validation
 *
 * ### following constrains are mapped into the attributes of the fat types :
 *
 * - 'max': is mapped to 'max' attribute
 * - 'min': is mapped to 'min' attribute
 * - 'step': is mapped to 'step' attribute
 * - 'required': is mapped to 'required' attribute
 *
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * ## Attributes & Properties
 * see the Attributes & Properties of [furo-date-input](/furo-input?t=FuroDateInput)
 *
 * @fires {{Date} the date value} value-changed -  Fired when value has changed from inside the input field. Comes from underlying component furo-date-input. **bubbles**
 * @fires {the value of the date input} trailing-icon-clicked -  Fired when the trailing icon was clicked. Comes from underlying component furo-date-input. **bubbles**
 * @fires {the value of the date input} leading-icon-clicked -  Fired when the leading icon was clicked. Comes from underlying component furo-date-input. **bubbles**
 *
 * @summary Bind a entityObject.field to a date input
 * @customElement
 * @demo demo-furo-data-date-input Data binding
 * @mixes FBP
 */
class FuroDataDateInput extends FuroDateInput {
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

    // the extended furo-color-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      let dateValue = val.detail;

      if (this.binder.fieldNode) {
        if (
          this.binder.fieldNode._spec.type === 'google.type.Date' ||
          this.binder.fieldNode._spec.type === 'furo.type.Date' ||
          (this.binder.fieldNode['@type'] &&
            this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'google.type.Date') ||
          (this.binder.fieldNode['@type'] &&
            this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'furo.type.Date')
        ) {
          dateValue = this._convertStringToDateObj(dateValue, this.binder.fieldNode._value);
        }
        // store tmpval to check against loop
        this.tmpval = dateValue;

        if (JSON.stringify(this.binder.fieldValue) !== JSON.stringify(dateValue)) {
          // update the value
          this.binder.fieldValue = dateValue;
        }
      }

      // set flag empty on empty strings (for fat types)
      if (this.binder.fieldFormat === 'fat') {
        if (dateValue) {
          this.binder.deleteLabel('empty');
        } else {
          this.binder.addLabel('empty');
        }
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
   * Bind a entity field to the color-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
  }

  // convert date string ISO 8601 to object for google.type.Dates
  // eslint-disable-next-line class-methods-use-this
  _convertStringToDateObj(str, obj) {
    const arr = str.split('-', 3);
    // only override properties: day, month, year
    if (arr.length === 3) {
      // eslint-disable-next-line no-param-reassign
      obj.day = Number(arr[2]);
      // eslint-disable-next-line no-param-reassign
      obj.month = Number(arr[1]);
      // eslint-disable-next-line no-param-reassign
      obj.year = Number(arr[0]);
    } else {
      // eslint-disable-next-line no-param-reassign
      obj.day = null;
      // eslint-disable-next-line no-param-reassign
      obj.month = null;
      // eslint-disable-next-line no-param-reassign
      obj.year = null;
      // eslint-disable-next-line no-param-reassign
      obj.display_name = null;
    }

    return obj;
  }
}

customElements.define('furo-data-date-input', FuroDataDateInput);
