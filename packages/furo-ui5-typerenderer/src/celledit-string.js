// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataTextInput } from '@furo/ui5/src/furo-ui5-data-text-input.js';

export class CelleditString extends FuroUi5DataTextInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('celledit-string', CelleditString);
