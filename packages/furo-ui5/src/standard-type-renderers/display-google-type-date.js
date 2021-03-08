import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-type-date`
 * The display-google-type-date component displays a FieldNode of type `google.type.Date` in read only mode.
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
 * @demo demo display-google-type-date Basic Usage
 */
export class DisplayGoogleTypeDate extends LitElement {
  constructor() {
    super();
    this._formattedDateString = '';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayGoogleTypeDate') ||
      css`
        :host {
          display: inline-block;
          word-break: keep-all;
        }

        :host([hidden]) {
          display: none;
        }
        :host([disabled]) span {
          opacity: var(--_ui5_input_disabled_opacity);
        }
        span {
          margin: 0;
          font-family: var(--sapFontFamily, '72');
          color: var(--sapTextcolor, '#32363a');
        }
        span::first-line {
          line-height: var(--_ui5_input_height, 36px);
        }
        :host([data-size='size-s']) span::first-line {
          line-height: var(--sapElement_Compact_Height, 26px);
        }

        :host([data-size='size-l']),
        :host([data-size='size-xl']) {
          padding-top: 0.5rem;
        }

        :host([value-state='Positive']),
        :host([value-state='Success']) {
          color: var(--sapPositiveColor, #107e3e);
        }
        :host([value-state='Informative']),
        :host([value-state='Information']) {
          color: var(--sapInformativeColor, #0a6ed1);
        }
        :host([value-state='Negative']),
        :host([value-state='Error']) {
          color: var(--sapNegativeColor, #b00);
        }
        :host([value-state='Critical']),
        :host([value-state='Warning']) {
          color: var(--sapCrticalColor, #e9730c);
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
      this._field.addEventListener('field-value-changed', () => {
        this._formattedDateString = DisplayGoogleTypeDate._convertDateToString(this._field);
        this.requestUpdate();
      });
    }

    this._formattedDateString = DisplayGoogleTypeDate._convertDateToString(this._field);
    this.requestUpdate();
  }

  /**
   * convert date object to String according to Intl DateTimeFormat
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * Example output: locale de-CH 31.12.2021
   * @param date
   * @returns {string}
   * @private
   */
  static _convertDateToString(fieldNode) {
    if (!fieldNode || !fieldNode.year._value || !fieldNode.month._value || !fieldNode.day._value) {
      return 'N/A';
    }

    const date = new Date(
      Date.UTC(fieldNode.year._value, fieldNode.month._value - 1, fieldNode.day._value, 0, 0, 0, 0),
    );

    return new Intl.DateTimeFormat([Env.locale, 'de-CH'], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
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

window.customElements.define('display-google-type-date', DisplayGoogleTypeDate);
