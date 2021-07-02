// eslint-disable-next-line import/named
import { DisplayInt32 } from './display-int32.js';
/**
 * `display-uint32`
 * The display-uint32 component displays a FieldNode of type `uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-uint32 Basic Usage
 */
export class DisplayUint32 extends DisplayInt32 {}

window.customElements.define('display-uint32', DisplayUint32);
