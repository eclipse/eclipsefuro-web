import { html } from 'lit-element';
import { Env } from '@furo/framework/src/furo.js';
import { DisplayDouble } from './display-double.js';
/**
 * `display-furo-fat-double`
 * The display-furo-fat-double component displays a FieldNode of type `furo.fat.Double` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-double Basic Usage
 */
class DisplayFuroFatDouble extends DisplayDouble {
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

window.customElements.define('display-furo-fat-double', DisplayFuroFatDouble);
