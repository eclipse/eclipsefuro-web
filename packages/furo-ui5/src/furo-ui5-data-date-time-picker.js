import '@ui5/webcomponents/dist/generated/i18n/i18n-defaults';
import * as DateTimePicker from '@ui5/webcomponents/dist/DateTimePicker.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * The furo-ui5-data-date-time-picker component allows the user to bind a date string
 * with IOS 8061 standard in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format likes "2017-01-15T01:30:15.01Z" to the ui5 date time picker and edit it.
 *
 *
 * you can define the formatPattern (e.g. 'dd.MM.yyyy hh:mm aa' ) to show the date according to format pattern. but the data in
 * the payload will still be in format [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)  (2017-01-15T01:30:15.01Z)
 *
 * The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the datetime, the change event is fired, which enables you to react on any date change.
 *
 * @summary furo data datepicker field
 * @customElement
 * @demo demo-furo-ui5-data-date-time-picker Basic Usage
 */
export class FuroUi5DataDateTimePicker extends DateTimePicker.default {
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
    this.placeholder = 'dd.MM.yyyy hh:mm aa';
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
      label: 'label',
      'format-pattern': 'formatPattern', // Determines the format, displayed in the input field.
       name: 'name', // Determines the name with which the ui5-date-picker will be submitted in an HTML form.
      'max-date': 'maxDate', // Determines the maximum date available for selection.
      'min-date': 'minDate', // Determines the minimum date available for selection.
      'value-state': 'valueState', // Defines the value state of the ui5-date-picker.  Available options are:  None, Error, Warning, Success, Information
      'primary-calendar-type': 'primary-calendar-type' // Determines the calendar type. The input value is formated according to the calendar type and the picker shows the months and years from the specified calendar. Available options are: Gregorian, Islamic, Japanese, Buddhist, Persian
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly', // Determines whether the ui5-date-picker is displayed as read-only.
      required: 'required', // Defines whether the ui5-date-picker is required.
      disabled: 'disabled', // Determines whether the ui5-date-picker is displayed as disabled.
      pristine: 'pristine',
      'hide-week-numbers':'hideWeekNumbers' // Defines the visibility of the week numbers column.  Note: For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      'max-date': 'value._constraints.max.is',
      'min-date': 'value._constraints.min.is',
      pattern: 'value._constraints.pattern.is',
      required: 'value._constraints.required.is',
      'min-msg': 'value._constraints.min.message',
      'max-msg': 'value._constraints.max.message',
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      max: 'max-date',
      min: 'min-date',
      pattern: 'format-pattern',
      required: 'required',
    };

    // update the value on input changes
    this.addEventListener('change', val => {

      const dateValue = new Date(this.dateValue).toISOString();

      if (this.binder.fieldNode) {

        if (JSON.stringify(this.binder.fieldValue) !== JSON.stringify(dateValue)) {
          // update the value
          this.binder.fieldNode._value = dateValue;
        }
      }

      /**
       * Fired when datepicker value changed
       * the event detail is the date in IOS 8601 format
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = dateValue;
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
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {

      // set pristine on new data
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
    // use the ui5 function formatValue to localize the Date. it will use the local information if formatPattern is not defined
    const localDateString = this.formatValue(new Date(this.binder.fieldNode._value));

    if (localDateString && localDateString !== this.value) {
      this.value = localDateString;
    }
  }
}

window.customElements.define('furo-ui5-data-date-time-picker', FuroUi5DataDateTimePicker);
