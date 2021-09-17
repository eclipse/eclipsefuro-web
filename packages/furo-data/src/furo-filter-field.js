import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * #DEPRECATED
 * `furo-filter-field` is used with `furo-filter-container`, `furo-filter-and` and `furo-filter-and` to build the filter string.
 *  With `furo-filter-field` you will set the field, operator and value of a filter item.
 *
 *
 * ```html
 * <!-- this will result in a filter like ((description OR start) AND (end OR cost_limit))
 * <furo-filter-container>
 *  <furo-filter-and>
 *    <`furo-filter-or`>
 *      <furo-filter-field field="description" is="in" ƒ-set-value="--defaultChanged"></furo-filter-field>
 *      <furo-filter-field field="start" is="gte" ƒ-set-value="--startChanged"></furo-filter-field>
 *    </furo-filter-or>
 *    <furo-filter-or>
 *      <furo-filter-field field="end" is="lte" ƒ-set-value="--endChanged"></furo-filter-field>
 *      <furo-filter-field field="cost_limit" is="eq" ƒ-set-value="--costlimitChanged"></furo-filter-field>
 *    </furo-filter-or>
 *  </furo-filter-and>
 * </furo-filter-container>
 * ```
 *
 *
 *  ## Fitler operators
 *
 *| Operator          | Meaning                            |
 *|:----------------- |:---------------------------------- |
 *| lt  oder <        | lower than |
 *| lte oder <=       | lower than or equal |
 *| gt  oder >        | greater than |
 *| gte oder >=       | greater than or equal |
 *| eq  oder =        | equal |
 *|  **more operators**     ||
 *| in                | in |
 *| btw               | between |
 *| btwe              | between but including the values  |
 *| is null           | is null, true,false |
 *| sw                | starts with |
 *| ew                | ends with |
 *| con               | contains |
 *| **negations**     ||
 *| !eq               | not equal |
 *| !btw              | outside, not between |
 *| !null             | not null |
 *| !con              | does not contain |
 *| !sw               | does not starts with |
 *| !ew               | does not ends with |
 *| !in               | not in |
 *
 *
 * @summary set a filter field
 * @customElement
 * @demo demo-furo-filter Basic usage
 * @appliesMixin FBP
 */
class FuroFilterField extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       *  Defines the operator.
       */
      is: { type: String },
      /**
       *  Defines the field you want to filter
       */
      field: { type: String },
      /**
       *  Defines the value to filter
       */
      value: { type: String },
    };
  }

  set is(val) {
    this._is = val;
    this._notifyChanges();
  }

  set field(val) {
    this._field = val;
    this._notifyChanges();
  }

  set value(val) {
    this._value = val;
    this._notifyChanges();
  }

  /**
   * Set the value
   * @param v
   */
  setValue(v) {
    this.value = v;
  }

  /**
   * Use this method if you have a data-object
   * @param field
   */
  bindData(field) {
    if (field) {
      this._fieldNode = field;
      this._fieldNode.addEventListener('field-value-changed', e => {
        // TODO we need a solution for complex fields. Currently only scalar values are working properly
        this.value = e.detail._value;
      });
    }
  }

  _notifyChanges() {
    if (this._field && this._value !== undefined && this._is) {
      /**
       * @event furo-filter-changed
       * Fired when something changed
       * detail payload:
       */
      const customEvent = new Event('furo-filter-field-changed', { composed: true, bubbles: true });
      customEvent.detail = this;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-filter-field', FuroFilterField);
