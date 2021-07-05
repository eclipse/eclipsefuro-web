// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataCheckboxInput } from '@furo/ui5/src/furo-ui5-data-checkbox-input.js';

export class CelleditBool extends FuroUi5DataCheckboxInput {
  connectedCallback() {
    super.connectedCallback();
    this.text = '';
    this.style.display = 'block';
    this.style.setProperty('--_ui5_checkbox_width_height', '0');
  }
}
window.customElements.define('celledit-bool', CelleditBool);
