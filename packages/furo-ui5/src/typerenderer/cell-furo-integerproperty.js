import { Env } from '@furo/framework/src/furo.js';
import { CellInt32 } from './cell-int32.js';

/**
 * `cell-furo-integerproperty`
 * The cell-furo-integerproperty component displays a FieldNode of type `furo.Integerproperty` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-cell-furo-integerproperty Basic Usage
 */
export class CellFuroIntegerproperty extends CellInt32 {
  /**
   *
   * @private
   */
  _formatCell() {
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.data);
    if (displayValue !== 'NaN') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }
}

window.customElements.define('cell-furo-integerproperty', CellFuroIntegerproperty);
