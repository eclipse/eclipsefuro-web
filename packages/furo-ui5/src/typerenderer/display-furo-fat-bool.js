import { html } from 'lit';
// eslint-disable-next-line no-unused-vars
import { DisplayBool } from './display-bool.js';

/**
 * `display-furo-fat-bool`
 * The display-furo-fat-bool component displays a FieldNode of type `furo.fat.bool` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-bool Basic Usage
 */
class DisplayFuroFatBool extends DisplayBool {
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

window.customElements.define('display-furo-fat-bool', DisplayFuroFatBool);
