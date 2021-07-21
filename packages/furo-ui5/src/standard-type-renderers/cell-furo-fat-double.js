import { Env } from '@furo/framework/src/furo.js';
import { CellDouble } from './cell-double.js';
/**
 * `cell-furo-fat-double`
 * The cell-furo-fat-double component displays a FieldNode of type `furo.fat.Double` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-furo-fat-double Basic Usage
 */
class CellFuroFatDouble extends CellDouble {
  /**
   *
   * @private
   */
  _formatCell() {
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.value._value);
    if (displayValue !== 'NaN') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }
}

window.customElements.define('cell-furo-fat-double', CellFuroFatDouble);
