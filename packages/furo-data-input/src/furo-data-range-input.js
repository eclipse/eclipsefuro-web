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
 * <sample-furo-data-range-input></sample-furo-data-range-input>
 *
 * Tags: input
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
   * detail payload: {String} the text value
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
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

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

  // because we defined the property max, the setter from the parent needs to be updated
  set max(val) {
    super.max = val;
  }

  // because we defined the property min, the setter from the parent needs to be updated
  set min(val) {
    super.min = val;
  }

  // because we defined the property pattern, the setter from the parent needs to be updated
  set pattern(val) {
    super.pattern = val;
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: { type: Boolean, reflect: true },
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
       * Overrides the pattern from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      pattern: {
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
        type: Number,
        reflect: true,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: Number,
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
       * Lets the placeholder always float
       */
      float: {
        type: Boolean,
        reflect: true,
      },
    };
  }
}

customElements.define('furo-data-range-input', FuroDataRangeInput);
