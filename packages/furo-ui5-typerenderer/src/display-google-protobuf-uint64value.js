// eslint-disable-next-line import/named
import { DisplayUint64 } from './display-uint64.js';
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.BoolValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-boolvalue Basic Usage
 */
class DisplayGoolgeProtobufUin64value extends DisplayUint64 {}

window.customElements.define(
  'display-google-protobuf-uint64value',
  DisplayGoolgeProtobufUin64value,
);
