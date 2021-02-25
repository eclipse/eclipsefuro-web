// eslint-disable-next-line import/named
import { DisplayFloat } from './display-float.js';

/**
 * `display-google-protobuf-floatvalue`
 * The display-google-protobuf-floatvalue component displays a FieldNode of type `google.protobuf.FloatValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-floatvalue Basic Usage
 */
class DisplayGoolgeProtobufFloatvalue extends DisplayFloat {}

window.customElements.define('display-google-protobuf-floatvalue', DisplayGoolgeProtobufFloatvalue);
