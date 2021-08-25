// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-doublevalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for google.protobuf.Double
 * @customElement celledit-google-protobuf-doublevalue
 */
class CelleditGoogleProtobufDoublevalue extends CelleditInt32 {}

window.customElements.define(
  'celledit-google-protobuf-doublevalue',
  CelleditGoogleProtobufDoublevalue,
);
