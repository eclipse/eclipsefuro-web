// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataNumberInput } from '@furo/ui5/src/furo-ui5-data-number-input.js';

export class CelleditInt32 extends FuroUi5DataNumberInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('celledit-int32', CelleditInt32);
