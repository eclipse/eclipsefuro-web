import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-type-timeofday`
 * The display-google-type-timeofday component displays a FieldNode of type `google.type.TimeOfDay` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-type-timeofday Basic Usage
 */
class DisplayGoogleTypeTimeofday extends LitElement {
  constructor() {
    super();
    this._displayValue = '';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayGoogleTypeTimeofday') ||
      css`
        :host {
          display: inline;
          white-space: nowrap;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          opacity: var(--_ui5_input_disabled_opacity, 0.4);
        }

        :host([tabular-form]) {
          display: block;
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
      if (this._field._spec.type !== 'google.type.TimeOfDay') {
        // eslint-disable-next-line no-console
        console.warn('Invalid fieldNode in bindData. please bind a google.type.TimeOfDay field.');
        return;
      }
      this._field.addEventListener('field-value-changed', () => {
        this._formatDisplay();
      });
      this._formatDisplay();
    }
  }

  /**
   * convert date object to String according to local time string
   * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
   * Example output: 1:15:30 AM by en-US
   * @param fieldNode
   * @returns {string}
   * @private
   */
  static _convertDayTimeToString(fieldNode) {
    const date = new Date(
      `2000-01-01 ${fieldNode.hours._value}:${fieldNode.minutes._value}:${fieldNode.seconds._value}`,
    );

    // eslint-disable-next-line eqeqeq
    if (date != 'Invalid Date') {
      return date.toLocaleTimeString([Env.locale, 'de-CH'], {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
    }
    return '';
  }

  _formatDisplay() {
    this._displayValue = DisplayGoogleTypeTimeofday._convertDayTimeToString(this._field);
    this.requestUpdate();
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._displayValue}
    `;
  }
}

window.customElements.define('display-google-type-timeofday', DisplayGoogleTypeTimeofday);
