import { DisplayString } from './display-string.js';

/**
 * `display-google-protobuf-stringvalue`
 * The display-google-protobuf-stringvalue component displays a FieldNode of type `google.protobuf.Stringvalue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

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
