// eslint-disable-next-line import/named
import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-fat-double` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for furo.fat.Double
 * @customElement form-furo-fat-double
 */
class FormFuroFatDouble extends FormInt32 {}

window.customElements.define('form-furo-fat-double', FormFuroFatDouble);
