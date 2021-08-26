// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataSelect } from '@furo/ui5/src/furo-ui5-data-select.js';

class CelleditFuroStringoptionproperty extends FuroUi5DataSelect {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define(
  'celledit-furo-stringoptionproperty',
  CelleditFuroStringoptionproperty,
);
