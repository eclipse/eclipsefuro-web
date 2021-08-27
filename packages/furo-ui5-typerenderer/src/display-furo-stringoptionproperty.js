import { html } from 'lit';
import { DisplayFuroStringproperty } from './display-furo-stringproperty.js';

/**
 * `display-furo-stringoptionproperty`
 * The display-furo-numberrproperty component displays a FieldNode of type `furo.Stringoptionproperty` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-stringoptionproperty Basic Usage
 */
export class DisplayFuroStringoptionproperty extends DisplayFuroStringproperty {
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

window.customElements.define('display-furo-stringoptionproperty', DisplayFuroStringoptionproperty);
