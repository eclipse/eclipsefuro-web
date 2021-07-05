// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-floatvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for google.protobuf.Float
 * @customElement celledit-google-protobuf-floatvalue
 */
class CelleditGoolgeProtobufFloatvalue extends CelleditInt32 {}

window.customElements.define(
  'celledit-google-protobuf-floatvalue',
  CelleditGoolgeProtobufFloatvalue,
);
