import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-filter-field`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/furo-filter-field.html
 * @appliesMixin FBP
 */
class FuroFilterField extends FBP(LitElement) {

  constructor() {
    super();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      is: {type: String},
      field: {type: String},
      value: {type: String}
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

  _notifyChanges() {
    if (this._field && this._value && this._is) {
      /**
       * @event furo-filter-changed
       * Fired when something changed
       * detail payload:
       */
      let customEvent = new Event('furo-filter-field-changed', {composed: true, bubbles: true});
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
    `
  }


}

window.customElements.define('furo-filter-field', FuroFilterField);
