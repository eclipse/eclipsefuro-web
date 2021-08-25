// eslint-disable-next-line import/named
import { CellInt64 } from './cell-int64.js';
/**
 * `cell-uint64`
 * The cell-uint64 component displays a FieldNode of type `uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-uint64 Basic Usage
 */
export class CellUint64 extends CellInt64 {}

window.customElements.define('cell-uint64', CellUint64);
