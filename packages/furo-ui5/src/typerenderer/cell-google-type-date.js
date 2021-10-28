import { LitElement, html, css } from 'lit';

import { Env } from '@furo/framework/src/furo.js';

/**
 * `cell-google-type-date`
 * The cell-google-type-date component displays a FieldNode of type `google.type.Date` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-google-type-date Basic Usage
 */
export class CellGoogleTypeDate extends LitElement {
  constructor() {
    super();
    /**
     *
     * @type {string}
     * @private
     */
    this._displayValue = '';
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        text-align: right;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        opacity: var(--_ui5_input_disabled_opacity, 0.4);
      }

      :host([data-size*='size-l']),
      :host([data-size*='size-xl']) {
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
    `;
  }

  /**
   * Binds a field node to the component
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this._formatCell();
      });
    }

    this._formatCell();
  }

  /**
   *
   * @private
   */
  _formatCell() {
    const displayValue = CellGoogleTypeDate._convertDateToString(this._field);
    if (displayValue !== 'N/A') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
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

window.customElements.define('cell-google-type-date', CellGoogleTypeDate);
