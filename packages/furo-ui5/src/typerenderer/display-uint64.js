// eslint-disable-next-line import/named
import { DisplayInt64 } from './display-int64.js';
/**
 * `display-uint64`
 * The display-uint64 component displays a FieldNode of type `uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-uint64 Basic Usage
 */
export class DisplayUint64 extends DisplayInt64 {}

window.customElements.define('display-uint64', DisplayUint64);
