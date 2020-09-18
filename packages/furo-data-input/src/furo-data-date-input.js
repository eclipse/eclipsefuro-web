import { FuroDateInput } from '@furo/input/src/furo-date-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-date-input` is a extension of furo-date-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type string, furo.fat.String with format '2009-12-24' or type of google.type.Date with format
 * {"day": 24, "month": 12, "year": 2009}
 *
 * ### following labels of fat types are supported by default:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'pristine': data is not changed. it is pristine
 * - 'condensed': input has condensed display
 *
 * ### following attributes of fat types are supported by default:
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
 * ### following constrains are mapped into the attributes of the fat types and presence in payload:
 *
 * - 'max': is mapped to 'max' attribute
 * - 'min': is mapped to 'min' attribute
 * - 'step': is mapped to 'step' attribute
 * - 'required': is mapped to 'required' attribute
 *
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * Tags: input
 * @summary Bind a entityObject.field to a date input
 * @customElement
 * @demo demo-furo-data-date-input Data binding
 * @mixes FBP
 */
class FuroDataDateInput extends FuroDateInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Date} the date value
   *
   * Comes from underlying component furo-date-input. **bubbles**
   */

  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the date input
   *
   * Comes from underlying component furo-date-input. **bubbles**
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the date input
   *
   * Comes from underlying component furo-date-input. **bubbles**
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
          (this.binder.fieldNode['@type'] &&
            this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'google.type.Date')
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

        // if something was entered the field is not empty
        this.binder.deleteLabel('pristine');
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

  static get properties() {
    return {
      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      min: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      step: {
        type: String, // string, because "any" is also a valid step
        reflect: true,
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Icon on the left side
       */
      leadingIcon: {
        type: String,
        attribute: 'leading-icon',
        reflect: true,
      },
      /**
       * Icon on the right side
       */
      trailingIcon: {
        type: String,
        attribute: 'trailing-icon',
        reflect: true,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * passes always float the label
       */
      float: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  /**
   * Bind a entity field to the color-input. You can use the entity even when no data was received.
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
