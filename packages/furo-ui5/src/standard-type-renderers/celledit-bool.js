import { FuroUi5DataCheckboxInput } from '@furo/ui5/src/furo-ui5-data-checkbox-input.js';

export class CelleditBool extends FuroUi5DataCheckboxInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = "100%"
  }
}

window.customElements.define('celledit-bool', CelleditBool);
