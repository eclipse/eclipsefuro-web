// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataCheckboxInputLabeled } from '@furo/ui5/src/furo-ui5-data-checkbox-input-labeled.js';

/**
 * `form-bool` is a `form` context renderer.
 *
 * It uses furo-ui5-data-checkbox-input as the renderer
 *
 * @summary form renderer for bool
 * @customElement form-bool
 */
export class FormBool extends FuroUi5DataCheckboxInputLabeled {
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
  }
}
window.customElements.define('form-bool', FormBool);
