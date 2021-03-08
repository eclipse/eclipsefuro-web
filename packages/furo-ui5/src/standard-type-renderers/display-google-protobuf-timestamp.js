import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-protobuf-timestamp`
 * The display-google-protobuf-timestamp component displays a FieldNode of type `google.prtobuf.Timestamp` in read only mode.
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
 * @demo demo display-google-protobuf-timestamp Basic Usage
 */
class DisplayGoogleProtobufTimestamp extends LitElement {
  constructor() {
    super();
    this._field = undefined;
    this._formattedDateString = '';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayGoogleProtobufTimestamp') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        :host([tabular-form]) {
          text-align: right;
        }
      `
    );
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', e => {
        this._formattedDateString = DisplayGoogleProtobufTimestamp._convertDateToString(
          e.detail._value,
        );

        this.requestUpdate();
      });

      this._formattedDateString = DisplayGoogleProtobufTimestamp._convertDateToString(
        this._field._value,
      );
    } else {
      this._formattedDateString = '';
    }
  }

  /**
   * convert date object to String according to Intl DateTimeFormat
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * Example output: locale de-CH 15.01.2017, 02:30:15
   * @param fieldNode
   * @returns {string}
   * @private
   */
  static _convertDateToString(fieldValue) {
    let strDate = '';
    if (fieldValue) {
      const date = new Date(fieldValue);

      // eslint-disable-next-line eqeqeq
      if (date != 'Invalid Date') {
        strDate = Intl.DateTimeFormat([Env.locale, 'de-CH'], {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(date);
      }
    }

    return strDate;
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    return html`
      <span>${this._formattedDateString}</span>
    `;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._getTemplate()}
    `;
  }
}

window.customElements.define('display-google-protobuf-timestamp', DisplayGoogleProtobufTimestamp);
