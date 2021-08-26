// eslint-disable-next-line import/named
import { FormBool } from './form-bool.js';

/**
 * `form-google-protobuf-boolvalue` is a `form` context renderer.
 *
 * It uses furo-ui5-data-checkbox-input as the renderer
 *
 * @summary form renderer for bool
 * @customElement form-google-protobuf-boolvalue
 */

class FormGoogleProtobufBoolvalue extends FormBool {}

window.customElements.define('form-google-protobuf-boolvalue', FormGoogleProtobufBoolvalue);
