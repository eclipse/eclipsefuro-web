import { Env } from '@furo/framework/src/furo.js';
// eslint-disable-next-line import/named
import { CellGoogleTypeMoney } from './cell-google-type-money.js';

/**
 * `cell-furo-type-money`
 * The cell-furo-type-money component displays a FieldNode of type `furo.type.Money` in read only mode.
 *
 * if the field `display_name` is set, the component will use that value for the display.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-furo-type-money Basic Usage
 */
class CellFuroTypeMoney extends CellGoogleTypeMoney {
  /**
   *
   * @private
   */
  _formatCell() {
    this._valueObject.amount = CellGoogleTypeMoney._convertTypeToNumber(this._field);

    if (this._field.display_name._value) {
      this._displayValue = this._field.display_name._value;
    } else if (this._valueObject.amount !== Number.NaN && this._field.currency_code._value.length) {
      this._displayValue = new Intl.NumberFormat(Env.locale, {
        style: 'currency',
        currency: this._field.currency_code._value,
      }).format(this._valueObject.amount);
    }

    this.requestUpdate();
  }
}

window.customElements.define('cell-furo-type-money', CellFuroTypeMoney);
