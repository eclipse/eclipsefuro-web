import { html } from 'lit-element';
import { Env } from '@furo/framework/src/furo.js';
// eslint-disable-next-line no-unused-vars
import { DisplayInt32 } from './display-int32.js';

/**
 * `display-int32`
 * The display-int32 component displays a FieldNode of type `furo.fat.Int32` in read only mode.
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
 * @demo demo display-int32 Basic Usage
 */
export class DisplayFuroFatInt32 extends DisplayInt32 {
  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    if (this._field) {
      this.displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field._value.value);
      return html`
        <span>${this.displayValue}</span>
      `;
    }
    return '';
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

window.customElements.define('display-furo-fat-int32', DisplayFuroFatInt32);
