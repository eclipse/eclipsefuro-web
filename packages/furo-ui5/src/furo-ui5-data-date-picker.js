import '@ui5/webcomponents/dist/generated/i18n/i18n-defaults';
import * as DatePicker from '@ui5/webcomponents/dist/DatePicker.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * The furo-ui5-data-date-picker component allows the user to bind an date object like google.type.Date or a date string
 * with IOS 8061 format likes "2020-12-31" to the ui5 datepicker and edit it.
 *
 * you can define the formatPattern (e.g. 'dd.MM.yyyy' ) to show the date according to format pattern. but the data in
 * the payload will still be in format IOS 8061 (yyyy-MM-dd)
 *
 * The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the date, the change event is fired, which enables you to react on any date change.
 *
 * @summary furo data datepicker field
 * @customElement
 * @demo demo-furo-ui5-data-date-picker Basic Usage
 */
export class FuroUi5DataDatePicker extends DatePicker.default {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event change
   */

  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * the event detail is the date in IOS 8601 format
   * @event value-changed
   */

  constructor() {
    super();
    this._initBinder();
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    // initiate valueStateMessage to avoid error in InputTemplate.lit.js
    if (this.valueStateMessage === undefined) {
      this.valueStateMessage = '';
    }
    setTimeout(() => {
      super.connectedCallback();
    }, 0);
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    this.applyBindingSet();
  }

  /**
   * apply the binding set to the universal field node binder
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      hint: '_hint',
      icon: 'ui5Icon', // icon and leading icon maps to the same
      'leading-icon': 'ui5Icon', // icon and leading icon maps to the same
      'value-state': 'valueState',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'formatPattern', // date format-pattern for datepicker
      name: 'name',
      suggestions: 'suggestions', // suggestion items
      'max-date': 'maxDate', // max date
      'min-date': 'minDate', // min date
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine',
      highlight: 'highlight',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      'max-date': 'value._constraints.max.is', // for the fieldnode constraint
      'min-date': 'value._constraints.min.is', // for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      max: 'max-date',
      min: 'min-date',
      pattern: 'pattern',
      required: 'required',
    };

    // update the value on input changes
    this.addEventListener('change', val => {
      let dateValue = this.value;
      const dateIOS8601 = FuroUi5DataDatePicker._convertDateToString(new Date(this.dateValue));
      if (this.binder.fieldNode) {
        if (
          this.binder.fieldNode._spec.type === 'google.type.Date' ||
          this.binder.fieldNode._spec.type === 'furo.type.Date' ||
          (this.binder.fieldNode['@type'] &&
            this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'google.type.Date') ||
          (this.binder.fieldNode['@type'] &&
            this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'furo.type.Date')
        ) {
          dateValue = FuroUi5DataDatePicker._convertDateToGoogleDateObj(
            new Date(this.dateValue),
            this.binder.fieldNode._value,
          );
        } else if (this.binder.fieldNode._spec.type === 'string') {
          dateValue = dateIOS8601;
        }

        if (JSON.stringify(this.binder.fieldValue) !== JSON.stringify(dateValue)) {
          // update the value
          this.binder.fieldValue = dateValue;
        }
      }

      /**
       * Fired when datepicker value changed
       * the event detail is the date in IOS 8601 format
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = dateIOS8601;
      this.dispatchEvent(customEvent);

      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');
    });
  }

  /**
   * convert js date object to google.type.Date object
   * @param date
   * @param obj
   * @returns {*}
   * @private
   */
  static _convertDateToGoogleDateObj(date, obj) {
    // only override properties: day, month, year
    if (date) {
      // eslint-disable-next-line no-param-reassign
      obj.day = date.getDate();
      // eslint-disable-next-line no-param-reassign
      obj.month = date.getMonth() + 1;
      // eslint-disable-next-line no-param-reassign
      obj.year = date.getFullYear();
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

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
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

      this.binder.fieldNode.addEventListener('field-value-changed', () => {
        this._updateInputDateValue();
      });

      // should show the date according to new pattern when the pattern in constrains changes
      this.binder.fieldNode.addEventListener('this-metas-changed', () => {
        this._updateInputDateValue();
      });

      this._updateInputDateValue();
    }
  }

  /**
   * update input value
   * @private
   */
  _updateInputDateValue() {
    let localDateString;

    // google.type.Date
    if (
      this.binder.fieldNode._spec.type === 'google.type.Date' ||
      this.binder.fieldNode._spec.type === 'furo.type.Date' ||
      (this.binder.fieldNode['@type'] &&
        this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'google.type.Date') ||
      (this.binder.fieldNode['@type'] &&
        this.binder.fieldNode['@type']._value.replace(/.*\//, '') === 'furo.type.Date')
    ) {
      // date string with format ISO 8601 yyyy-MM-dd
      const dateString = FuroUi5DataDatePicker._convertGoogleDateObjToString(
        this.binder.fieldNode._value,
      );

      if (dateString) {
        // use the ui5 function formatValue to localize the Date. it will use the local information if formatPattern is not defined
        localDateString = this.formatValue(new Date(dateString));

        if (localDateString && localDateString !== this.value) {
          this.value = localDateString;
        }
      } else if (this.value) {
        this.value = '';
      }
    }
    // scalar string type
    else if (this.binder.fieldNode._spec.type === 'string') {
      localDateString = this.formatValue(new Date(this.binder.fieldNode._value));
      this.value = localDateString;
    }
  }

  /**
   * convert google date object to String according to ISO 8601 (e.g. 2020-12-31)
   * @param obj
   * @returns {string}
   * @private
   */
  static _convertGoogleDateObjToString(obj) {
    let date = '';

    if (obj && obj.day && obj.month && obj.year) {
      date = FuroUi5DataDatePicker._converToIso8601(obj.year, obj.month, obj.day);
    }
    return date;
  }

  /**
   * convert date object to String according to IOS 8601 (e.g. 2020-12-31)
   * @param date
   * @returns {string}
   * @private
   */
  static _convertDateToString(date) {
    let str = '';

    if (date) {
      str = FuroUi5DataDatePicker._converToIso8601(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
      );
    }
    return str;
  }

  /**
   * convert to date with format IOS 8601 (e.g. 2020-12-31)
   * @param year
   * @param month
   * @param day
   * @returns {string}
   * @private
   */
  static _converToIso8601(y, m, d) {
    let year = y.toString();
    let month = m.toString();
    let day = d.toString();

    if (month.length < 2) {
      month = `0${month}`;
    }

    if (day.length < 2) {
      day = `0${day}`;
    }

    if (year.length < 4) {
      const l = 4 - year.length;
      for (let i = 0; i < l; i += 1) {
        year = `0${year}`;
      }
    }
    return `${year}-${month}-${day}`;
  }
}

window.customElements.define('furo-ui5-data-date-picker', FuroUi5DataDatePicker);
