// eslint-disable-next-line import/named
import { CellFloat } from './cell-float.js';

/**
 * `cell-google-protobuf-floatvalue`
 * The cell-google-protobuf-floatvalue component displays a FieldNode of type `google.protobuf.FloatValue` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-google-protobuf-floatvalue Basic Usage
 */
class CellGoolgeProtobufFloatvalue extends CellFloat {}

window.customElements.define('cell-google-protobuf-floatvalue', CellGoolgeProtobufFloatvalue);
