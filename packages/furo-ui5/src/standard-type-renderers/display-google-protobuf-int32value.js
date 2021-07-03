// eslint-disable-next-line import/named
import { DisplayInt32 } from './display-int32.js';
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
class DisplayGoolgeProtobufIn32value extends DisplayInt32 {}

window.customElements.define('display-google-protobuf-int32value', DisplayGoolgeProtobufIn32value);
