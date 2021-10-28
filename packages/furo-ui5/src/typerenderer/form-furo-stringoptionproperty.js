// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataSelectLabeled } from '@furo/ui5/src/furo-ui5-data-select-labeled.js';

class FormFuroStringoptionproperty extends FuroUi5DataSelectLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define('form-furo-stringoptionproperty', FormFuroStringoptionproperty);
