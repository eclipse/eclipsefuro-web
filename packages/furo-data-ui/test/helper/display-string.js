import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';

/**
 * `display-string`
 * Desc
 *
 * @summary
 * @customElement
 * @demo demo display-string Basic Usage
 * @appliesMixin FBP
 */
class DisplayString extends FBP(LitElement) {
  /**
   *
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <p>Hej, welcome</p>
    `;
  }
}

window.customElements.define('display-string', DisplayString);
