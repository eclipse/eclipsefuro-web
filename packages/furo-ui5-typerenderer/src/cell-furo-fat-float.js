import { Env } from '@furo/framework/src/furo.js';
import { CellFloat } from './cell-float.js';
/**
 * `cell-furo-fat-float`
 * The cell-furo-fat-float component displays a FieldNode of type `furo.fat.Float` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-furo-fat-float Basic Usage
 */
class CellFuroFatFloat extends CellFloat {
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

window.customElements.define('cell-furo-fat-float', CellFuroFatFloat);
