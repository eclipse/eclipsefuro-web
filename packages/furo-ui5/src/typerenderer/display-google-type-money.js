import { LitElement, html, css } from 'lit';

import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-type-money`
 * The display-google-type-money component displays a FieldNode of type `google.type.Money` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-google-type-money Basic Usage
 */
export class DisplayGoogleTypeMoney extends LitElement {
  constructor() {
    super();
    /**
     *
     * @type {string}
     * @private
     */
    this._displayValue = '';
    /**
     *
     * @type {{amount: number}}
     * @private
     */
    this._valueObject = { amount: Number.NaN };
  }

  static get styles() {
    // language=CSS
    return css`
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
      this._field.addEventListener('branch-value-changed', () => {
        this._formatDisplay();
      });

      this._formatDisplay();
    }
  }

  /**
   *
   * @param {FieldNode} fieldNode
   * @returns {number}
   * @private
   */
  static _convertTypeToNumber(fieldNode) {
    let numberStr = '';
    if (fieldNode.units && fieldNode.units._value && fieldNode.units._value > 0) {
      numberStr = fieldNode.units._value;
    }
    if (fieldNode.nanos && fieldNode.nanos._value && fieldNode.nanos._value > 0) {
      numberStr += `.${fieldNode.nanos._value}`;
    }
    if (numberStr > 0) {
      return Number(numberStr);
    }
    return Number.NaN;
  }

  _formatDisplay() {
    this._valueObject.amount = DisplayGoogleTypeMoney._convertTypeToNumber(this._field);
    if (
      this._valueObject.amount !== Number.NaN &&
      this._field.currency_code &&
      this._field.currency_code._value &&
      this._field.currency_code._value.length
    ) {
      this._displayValue = new Intl.NumberFormat(Env.locale, {
        style: 'currency',
        currency: this._field.currency_code._value,
      }).format(this._valueObject.amount);
    } else {
      this._displayValue = '';
    }

    this.requestUpdate();
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    // prettier-ignore
    return html`${this._displayValue}`;
  }
}

window.customElements.define('display-google-type-money', DisplayGoogleTypeMoney);
