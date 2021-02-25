// eslint-disable-next-line import/named
import { DisplayString } from './display-string.js';

/**
 * `display-google-protobuf-stringvalue`
 * The display-google-protobuf-stringvalue component displays a FieldNode of type `google.protobuf.Stringvalue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-stringvalue Basic Usage
 */
class DisplayGoogleProtobufStringvalue extends DisplayString {}

window.customElements.define(
  'display-google-protobuf-stringvalue',
  DisplayGoogleProtobufStringvalue,
);
