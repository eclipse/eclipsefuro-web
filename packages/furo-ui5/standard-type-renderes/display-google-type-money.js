import { LitElement, html, css } from 'lit-element';
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
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-type-money Basic Usage
 */
class DisplayGoogleTypeMoney extends LitElement {
  constructor() {
    super();
    this._field = undefined;
    this._displayValue = 'N/A';
    this._valueObject = { amount: Number.NaN };
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          word-break: keep-all;
        }

        :host([tabular-form]) {
          text-align: right;
        }

        :host([hidden]) {
          display: none;
        }

        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this._valueObject.amount = DisplayGoogleTypeMoney._convertTypeToNumber(this._field);
        this.requestUpdate();
      });
    }

    this._valueObject.amount = DisplayGoogleTypeMoney._convertTypeToNumber(this._field);
  }

  /**
   *
   * @param fieldNode
   * @returns {number}
   * @private
   */
  static _convertTypeToNumber(fieldNode) {
    let numberStr = '';
    if (fieldNode.units._value > 0) {
      numberStr = fieldNode.units._value;
    }
    if (fieldNode.nanos._value > 0) {
      numberStr += `.${fieldNode.nanos._value}`;
    }
    if (numberStr.length) {
      return Number(numberStr);
    }
    return Number.NaN;
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    if (this._field.currency_code._value.length) {
      this._displayValue = new Intl.NumberFormat(Env.locale, {
        style: 'currency',
        currency: this._field.currency_code._value,
      }).format(this._valueObject.amount);
    }

    return html` <span>${this._displayValue}</span> `;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html` ${this._getTemplate()} `;
  }
}

window.customElements.define('display-google-type-money', DisplayGoogleTypeMoney);
