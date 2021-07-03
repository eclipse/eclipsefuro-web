import { CellFuroFatInt32 } from './cell-furo-fat-int32.js';

/**
 * `cell-furo-fat-uint32`
 * The cell-furo-fat-uint32 component displays a FieldNode of type `furo.fat.Uint32` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-furo-fat-uint32 Basic Usage
 */
class CellFuroFatUint32 extends CellFuroFatInt32 {}

window.customElements.define('cell-furo-fat-uint32', CellFuroFatUint32);
