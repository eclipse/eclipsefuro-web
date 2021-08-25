import { CellFuroIntegerproperty } from './cell-furo-integerproperty.js';

/**
 * `cell-furo-numberproperty`
 * The cell-furo-numberrproperty component displays a FieldNode of type `furo.Numberproperty` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-cell-furo-numberproperty Basic Usage
 */
export class CellFuroNumberproperty extends CellFuroIntegerproperty {}

window.customElements.define('cell-furo-numberproperty', CellFuroNumberproperty);
