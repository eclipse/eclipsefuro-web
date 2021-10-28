import { CelleditString } from './celledit-string.js';

class CelleditFuroStringproperty extends CelleditString {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define('celledit-furo-stringproperty', CelleditFuroStringproperty);
