// eslint-disable-next-line import/named
import { DisplayDouble } from './display-double.js';
/**
 * `display-double`
 * The display-double component displays a FieldNode of type `google.protobuf.DoubleValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-double Basic Usage
 */
class DisplayGoogleProtobufDoublevalue extends DisplayDouble {}

window.customElements.define(
  'display-google-protobuf-doublevalue',
  DisplayGoogleProtobufDoublevalue,
);
