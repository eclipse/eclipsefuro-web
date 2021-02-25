import { html } from 'lit-element';
import { Env } from '@furo/framework/src/furo.js';
import { DisplayFloat } from './display-float.js';
/**
 * `display-furo-fat-float`
 * The display-furo-fat-float component displays a FieldNode of type `furo.fat.Float` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-float Basic Usage
 */
class DisplayFuroFatFloat extends DisplayFloat {
  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    if (this._field) {
      this.displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.value._value);
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

window.customElements.define('display-furo-fat-float', DisplayFuroFatFloat);
