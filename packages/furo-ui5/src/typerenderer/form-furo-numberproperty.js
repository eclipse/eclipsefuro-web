import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-integerproperty` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for furo.Integerproperty
 * @customElement form-furo-integerproperty
 */
class FormFuroNumberproperty extends FormInt32 {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define('form-furo-numberproperty', FormFuroNumberproperty);
