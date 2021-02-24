import { html } from 'lit-element';
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
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-furo-type-date Basic Usage
 */
class DisplayFuroTypeDate extends DisplayGoogleTypeDate {
  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        if (this._field.display_name._value && this._field.display_name._value.length) {
          this._formattedDateString = this._field.display_name._value;
        } else {
          this._formattedDateString = DisplayFuroTypeDate._convertDateToString(this._field);
        }
        this.requestUpdate();
      });
    }

    if (this._field.display_name._value && this._field.display_name._value.length) {
      this._formattedDateString = this._field.display_name._value;
    } else {
      this._formattedDateString = DisplayFuroTypeDate._convertDateToString(this._field);
    }
  }

  render() {
    // language=HTML
    return html`
      ${this._getTemplate()}
    `;
  }
}

window.customElements.define('display-furo-type-date', DisplayFuroTypeDate);
