// eslint-disable-next-line import/named
import { FormInt32 } from './form-int32.js';

/**
 * `form-google-protobuf-int64value` is a `form` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary form renderer for google.protobuf.Int64
 * @customElement form-google-protobuf-int64value
 */
class FormGoolgeProtobufIn64value extends FormInt32 {}

window.customElements.define('form-google-protobuf-int64value', FormGoolgeProtobufIn64value);
