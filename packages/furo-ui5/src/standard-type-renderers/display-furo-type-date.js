// eslint-disable-next-line import/named
import { DisplayGoogleTypeDate } from './display-google-type-date.js';

/**
 * `display-furo-type-date`
 * The display-furo-type-date component displays a FieldNode of type `furo.type.Date` in read only mode.
 *
 * if the field `display_name` is set, the component will use that value for the display.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-furo-type-date Basic Usage
 */
class DisplayFuroTypeDate extends DisplayGoogleTypeDate {
  _formatDisplay() {
    if (this._field.display_name._value && this._field.display_name._value.length) {
      this._displayValue = this._field.display_name._value;
    } else {
      const displayValue = DisplayGoogleTypeDate._convertDateToString(this._field);
      if (displayValue !== 'N/A') {
        this._displayValue = displayValue;
      }
    }
    this.requestUpdate();
  }
}

window.customElements.define('display-furo-type-date', DisplayFuroTypeDate);
