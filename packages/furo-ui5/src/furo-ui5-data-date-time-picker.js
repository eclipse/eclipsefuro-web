import '@ui5/webcomponents/dist/generated/i18n/i18n-defaults.js';
import * as DateTimePicker from '@ui5/webcomponents/dist/DateTimePicker.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * The furo-ui5-data-date-time-picker component allows the user to bind a date string
 * with IOS 8061 standard in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format likes "2017-01-15T01:30:15.01Z" to the ui5 date time picker and edit it.
 *
 * you can define the formatPattern (e.g. 'dd.MM.yyyy hh:mm aa' ) to show the date according to format pattern. but the data in
 * the payload will still be in format [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)  (2017-01-15T01:30:15.01Z)
 *
 * The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the datetime, the change event is fired, which enables you to react on any date change.
 *
 * You can bind a `string`, `google.protobuf.Timestamp`, `int32`, `int64`.
 *
 * `int32`, `int64` will be handled as unix timestamps (seconds since epoc) and can not be *empty*.
 *
 * ```html
 *  <furo-ui5-data-date-time-picker
 *     ƒ-bind-data="--data(*.validity_to)">
 *  </furo-ui5-data-date-time-picker>
 * ```
 *
 * The field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the date, the change event is fired, which enables you to react on any date change.
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 * - **min:"1999-12-31"** set the minDate for the element (use iso date in the constraint)
 * - **max:"1999-12-31"** set the maxDate for the element (use iso date in the constraint)
 * - **pattern:"1999-12-31"** set the pattern for the element
 *
 * The constraint **required** will mark the element as required
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind a entity field. You can use the entity even when no data was received.
 *
 * When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {String} field-value-changed - Fires the field value when it changes in ISO 8601 format.
 * @fires change - Fired when the input operation has finished by pressing Enter or on focusout.
 *
 * @summary furo data datetime picker field
 * @customElement
 * @demo demo-furo-ui5-data-date-time-picker Basic Usage
 */
export class FuroUi5DataDateTimePicker extends FieldNodeAdapter(DateTimePicker.default) {
  constructor() {
    super();
    this.formatPattern = ''; // needed to avoid cldr errors

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = { state: 'None', message: '' };

    this._attributesFromFNA = {
      readonly: undefined,
      placeholder: undefined,
      min: undefined,
      max: undefined,
      pattern: undefined,
    };

    this._constraintsFromFNA = {
      required: undefined,
    };

    // a list of privileged attributes. when those attributes are set in number-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
      maxDate: null,
      minDate: null,
      formatPattern: null,
    };

    this.addEventListener('input', this._updateFNA);

    // changed is fired when the input operation has finished by pressing Enter or on focusout.
    this.addEventListener('change', v => {
      const e = v.detail;
      const type = this.getDataType();
      switch (type) {
        case 'int32':
        case 'int64':
          if (e.value !== '' && e.valid) {
            this.setFnaFieldValue(this.dateValue.getTime() / 1000);
          } else {
            this.setFnaFieldValue(0);
          }
          break;

        case 'google.protobuf.Timestamp':
          if (e.value !== '' && e.valid) {
            this.setFnaFieldValue(this.dateValue.toISOString());
          } else {
            this.setFnaFieldValue(null);
          }
          break;
        case 'string':
        default:
          if (e.value !== '' && e.valid) {
            this.setFnaFieldValue(this.dateValue.toISOString());
          } else {
            this.setFnaFieldValue('');
          }
      }

      /**
       * Fired when value changed
       *
       * Payload: {Date}
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = this.dateValue;
      this.dispatchEvent(customEvent);
    });
  }

  /**
   * Workaround for language request
   * @private
   */
  get valueStateMessage() {
    return super.valueStateMessage || [];
  }

  onFnaFieldValueChanged(value) {
    const type = this.getDataType();
    switch (type) {
      case 'int32':
      case 'int64':
        this.value = this.formatValue(new Date(value * 1000));
        break;
      case 'google.protobuf.Timestamp':
      case 'string':
      default:
        if (value === '' || value === null || value === undefined) {
          this.value = '';
        } else {
          this.value = this.formatValue(new Date(value));
        }
    }
  }

  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();

    // created to avoid the default messages from ui5
    const vse = this.querySelector('div[slot="valueStateMessage"]');
    if (vse === null) {
      this._valueStateElement = document.createElement('div');
      this._valueStateElement.setAttribute('slot', 'valueStateMessage');
      // eslint-disable-next-line wc/no-constructor-attributes
      this.appendChild(this._valueStateElement);
    } else {
      this._valueStateElement = vse;
      this._previousValueState.message = vse.innerText;
    }
  }

  readAttributes() {
    this._previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';

    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      // this value state should not be saved as a previous value state
      this._setValueStateMessage('Error', validity.description);
    } else {
      this.valueState = 'Error';
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueStateMessage();
  }

  /**
   * update the value state and the value state message on demand
   *
   * @param valueState
   * @param message
   * @private
   */
  _setValueStateMessage(valueState, message) {
    this.valueState = valueState;
    // element was created in constructor
    this._valueStateElement.innerText = message;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueStateMessage() {
    this._setValueStateMessage(this._previousValueState.state, this._previousValueState.message);
  }

  /**
   * overwrite onFnaPlaceholderChanged function
   * @private
   * @param placeholder
   */
  onFnaPlaceholderChanged(placeholder) {
    this._attributesFromFNA.placeholder = placeholder;
    if (this._privilegedAttributes.placeholder === null) {
      this.placeholder = placeholder;
    }
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (this._privilegedAttributes.readonly === null) {
      this.readonly = readonly;
    }
  }

  /**
   * overwrite onFnaConstraintsChanged function
   * @private
   * @param constraints
   */
  onFnaConstraintsChanged(constraints) {
    // set this first if available, the following constraints uses formatValue()
    if (constraints.pattern !== undefined) {
      this._constraintsFromFNA.pattern = constraints.pattern;
      if (this._privilegedAttributes.formatPattern === null) {
        this.formatPattern = constraints.pattern.is;
      }
    }

    // required
    if (constraints.required !== undefined) {
      this._constraintsFromFNA.required = constraints.required;
      if (this._privilegedAttributes.required === null) {
        this.required = constraints.required.is === 'true';
      }
    }

    if (constraints.min !== undefined) {
      this._constraintsFromFNA.min = constraints.min;
      if (this._privilegedAttributes.minDate === null) {
        // const parts = constraints.min.is.match(/\d+/g);
        // eslint-disable-next-line no-console
        console.log(constraints.min);
        // eslint-disable-next-line no-console
        console.warn('not implemented');
        // this.minDate = this.formatValue(new Date(parts[0], parts[1] - 1, parts[2]));
      }
    }

    if (constraints.max !== undefined) {
      this._constraintsFromFNA.max = constraints.max;
      if (this._privilegedAttributes.maxDate === null) {
        // const parts = constraints.max.is.match(/\d+/g);
        // eslint-disable-next-line no-console
        console.log(constraints.max);
        // eslint-disable-next-line no-console
        console.warn('not implemented');
        // this.maxDate = this.formatValue(new Date(parts[0], parts[1] - 1, parts[2]));
      }
    }
  }
}

window.customElements.define('furo-ui5-data-date-time-picker', FuroUi5DataDateTimePicker);
