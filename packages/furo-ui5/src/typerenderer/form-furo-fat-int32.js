import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-fat-int32` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for furo.fat.Int32
 * @customElement form-furo-fat-int32
 */

export class FormFuroFatInt32 extends FormInt32 {}

window.customElements.define('form-furo-fat-int32', FormFuroFatInt32);
