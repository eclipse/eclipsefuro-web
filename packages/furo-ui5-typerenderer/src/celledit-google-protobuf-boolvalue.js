// eslint-disable-next-line import/named
import { CelleditBool } from './celledit-bool.js';

/**
 * `celledit-google-protobuf-boolvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-checkbox-input as the renderer
 *
 * @summary celledit renderer for bool
 * @customElement celledit-google-protobuf-boolvalue
 */

class CelleditGoogleProtobufBoolvalue extends CelleditBool {}

window.customElements.define('celledit-google-protobuf-boolvalue', CelleditGoogleProtobufBoolvalue);
