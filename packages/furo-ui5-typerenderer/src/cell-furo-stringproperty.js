import { html } from 'lit';
import { CellString } from './cell-string.js';

/**
 * `cell-furo-stringproperty`
 * The cell-furo-stringproperty component displays a FieldNode of type `furo.Stringproperty` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-cell-furo-stringproperty Basic Usage
 */
export class CellFuroStringproperty extends CellString {
  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._field
        ? html`
            ${this._field.data._value}
          `
        : html``}
    `;
  }
}

window.customElements.define('cell-furo-stringproperty', CellFuroStringproperty);
