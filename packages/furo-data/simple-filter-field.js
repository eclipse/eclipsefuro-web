import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `simple-filter-field`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/simple-filter-field.html
 * @appliesMixin FBP
 */
class SimpleFilterField extends FBP(LitElement) {

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
       * @event simple-filter-changed
       * Fired when something changed
       * detail payload:
       */
      let customEvent = new Event('simple-filter-changed', {composed: true, bubbles: true});
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

window.customElements.define('simple-filter-field', SimpleFilterField);
