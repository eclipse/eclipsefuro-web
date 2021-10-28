// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataNumberInputLabeled } from '@furo/ui5/src/furo-ui5-data-number-input-labeled.js';

export class FormInt32 extends FuroUi5DataNumberInputLabeled {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('form-int32', FormInt32);
