// eslint-disable-next-line import/named
import { CellDouble } from './cell-double.js';
/**
 * `cell-double`
 * The cell-double component displays a FieldNode of type `google.protobuf.DoubleValue` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-double Basic Usage
 */
class CellGoogleProtobufDoublevalue extends CellDouble {}

window.customElements.define('cell-google-protobuf-doublevalue', CellGoogleProtobufDoublevalue);
