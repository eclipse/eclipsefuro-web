import { CelleditInt32 } from './celledit-int32.js';

class CelleditFuroNumberproperty extends CelleditInt32 {

  bindData(fieldNode){
    super.bindData(fieldNode.data)
  }
}

window.customElements.define(
  'celledit-furo-numberproperty',
  CelleditFuroNumberproperty,
);
