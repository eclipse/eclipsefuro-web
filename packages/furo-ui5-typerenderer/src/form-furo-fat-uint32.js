import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-fat-uint32` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for furo.fat.Uint32
 * @customElement form-furo-fat-uint32
 */
class FormFuroFatUint32 extends FormInt32 {}

window.customElements.define('form-furo-fat-uint32', FormFuroFatUint32);
