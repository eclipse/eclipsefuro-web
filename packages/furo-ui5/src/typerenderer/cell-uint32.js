// eslint-disable-next-line import/named
import { CellInt32 } from './cell-int32.js';
/**
 * `cell-uint32`
 * The cell-uint32 component displays a FieldNode of type `uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-uint32 Basic Usage
 */
export class CellUint32 extends CellInt32 {}

window.customElements.define('cell-uint32', CellUint32);
