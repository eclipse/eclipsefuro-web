import { Env } from '@furo/framework/src/furo.js';
import { DisplayFloat } from './display-float.js';
/**
 * `display-furo-fat-float`
 * The display-furo-fat-float component displays a FieldNode of type `furo.fat.Float` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-float Basic Usage
 */
class DisplayFuroFatFloat extends DisplayFloat {
  _formatDisplay() {
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.value._value);
    if (displayValue !== 'NaN') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }
}

window.customElements.define('display-furo-fat-float', DisplayFuroFatFloat);
