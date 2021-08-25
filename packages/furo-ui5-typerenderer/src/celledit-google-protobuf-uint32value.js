// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-uint32value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for google.protobuf.Uint32value
 * @customElement celledit-google-protobuf-uint32value
 */
class CelleditGoolgeProtobufUin32value extends CelleditInt32 {}

window.customElements.define(
  'celledit-google-protobuf-uint32value',
  CelleditGoolgeProtobufUin32value,
);
