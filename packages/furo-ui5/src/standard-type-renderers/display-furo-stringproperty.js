import { html } from 'lit-element';
import { DisplayString } from './display-string.js';

/**
 * `display-furo-stringproperty`
 * The display-furo-stringproperty component displays a FieldNode of type `furo.Stringproperty` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-stringproperty Basic Usage
 */
export class DisplayFuroStringproperty extends DisplayString {
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

window.customElements.define('display-furo-stringproperty', DisplayFuroStringproperty);
