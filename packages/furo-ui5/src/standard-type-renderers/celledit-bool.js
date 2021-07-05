// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataCheckboxInput } from '@furo/ui5/src/furo-ui5-data-checkbox-input.js';

/**
 * `celledit-bool` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-checkbox-input as the renderer
 *
 * @summary celledit renderer for bool
 * @customElement celledit-bool
 */
export class CelleditBool extends FuroUi5DataCheckboxInput {
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.style.display = 'block';
    this.style.setProperty('--_ui5_checkbox_width_height', '0');
  }
}
window.customElements.define('celledit-bool', CelleditBool);
