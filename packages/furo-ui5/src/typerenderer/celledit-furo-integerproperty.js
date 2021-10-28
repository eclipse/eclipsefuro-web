import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-integerproperty` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.Integerproperty
 * @customElement celledit-furo-integerproperty
 */
class CelleditFuroIntegerproperty extends CelleditInt32 {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define('celledit-furo-integerproperty', CelleditFuroIntegerproperty);
