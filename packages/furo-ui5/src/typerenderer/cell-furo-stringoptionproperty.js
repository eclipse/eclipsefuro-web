import { html } from 'lit';
import { CellFuroStringproperty } from './cell-furo-stringproperty.js';

/**
 * `cell-furo-stringoptionproperty`
 * The cell-furo-numberrproperty component displays a FieldNode of type `furo.Stringoptionproperty` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-cell-furo-stringoptionproperty Basic Usage
 */
export class CellFuroStringoptionproperty extends CellFuroStringproperty {
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
            ${this._field.display_name}
          `
        : html``}
    `;
  }
}

window.customElements.define('cell-furo-stringoptionproperty', CellFuroStringoptionproperty);
