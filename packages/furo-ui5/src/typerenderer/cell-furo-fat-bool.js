import { html } from 'lit';
// eslint-disable-next-line no-unused-vars
import { CellBool } from './cell-bool.js';

/**
 * `cell-furo-fat-bool`
 * The cell-furo-fat-bool component displays a FieldNode of type `furo.fat.bool` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-furo-fat-bool Basic Usage
 */
class CellFuroFatBool extends CellBool {
  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    let tmpl = '';
    if (this._field) {
      if (!this._field.value._value || this._field.value._value === 'false') {
        tmpl = html`
          <ui5-icon name="border"></ui5-icon>
        `;
      } else {
        tmpl = html`
          <ui5-icon name="accept" value-state="Success"></ui5-icon>
        `;
      }
    }

    return tmpl;
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

window.customElements.define('cell-furo-fat-bool', CellFuroFatBool);
