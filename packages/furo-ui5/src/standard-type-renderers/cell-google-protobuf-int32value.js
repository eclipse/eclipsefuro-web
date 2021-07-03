// eslint-disable-next-line import/named
import { CellInt32 } from './cell-int32.js';
/**
 * `cell-google-protobuf-boolvalue`
 * The cell-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.BoolValue` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-google-protobuf-boolvalue Basic Usage
 */
class CellGoolgeProtobufIn32value extends CellInt32 {}

window.customElements.define('cell-google-protobuf-int32value', CellGoolgeProtobufIn32value);
