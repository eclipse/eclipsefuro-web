import { Env } from '@furo/framework/src/furo.js';
// eslint-disable-next-line no-unused-vars
import { DisplayInt32 } from './display-int32.js';

/**
 * `display-int32`
 * The display-int32 component displays a FieldNode of type `furo.fat.Int32` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-int32 Basic Usage
 */
export class DisplayFuroFatInt32 extends DisplayInt32 {
  _formatDisplay() {
    if (this._field.value._value !== null) {
      const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.value._value);
      if (displayValue !== 'NaN') {
        this._displayValue = displayValue;
        this.requestUpdate();
      }
    }
  }
}

window.customElements.define('display-furo-fat-int32', DisplayFuroFatInt32);
