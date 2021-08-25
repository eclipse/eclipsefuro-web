// eslint-disable-next-line import/named
import { FormInt32 } from './form-int32.js';

/**
 * `form-google-protobuf-floatvalue` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for google.protobuf.Float
 * @customElement form-google-protobuf-floatvalue
 */
class FormGoolgeProtobufFloatvalue extends FormInt32 {}

window.customElements.define('form-google-protobuf-floatvalue', FormGoolgeProtobufFloatvalue);
