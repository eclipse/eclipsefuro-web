import { DisplayFuroFatInt32 } from './display-furo-fat-int32.js';

/**
 * `display-furo-fat-uint32`
 * The display-furo-fat-uint32 component displays a FieldNode of type `furo.fat.Uint32` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-uint32 Basic Usage
 */
class DisplayFuroFatUint32 extends DisplayFuroFatInt32 {}

window.customElements.define('display-furo-fat-uint32', DisplayFuroFatUint32);
