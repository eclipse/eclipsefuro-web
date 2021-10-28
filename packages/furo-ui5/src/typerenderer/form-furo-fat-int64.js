import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-fat-int64` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for furo.fat.Int64
 * @customElement form-furo-fat-int64
 */
export class FormFuroFatInt64 extends FormInt32 {}

window.customElements.define('form-furo-fat-int64', FormFuroFatInt64);
