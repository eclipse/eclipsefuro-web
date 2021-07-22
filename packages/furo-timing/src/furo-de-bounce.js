import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-de-bounce`
 *  is a component with a input-wire, that, as long as it continues to be triggered, will not
 *  be invoked. The wire will be triggered after it stops being called for
 *  N milliseconds. If `immediate` is passed as a attribute, it triggers the input-wire on the
 *  leading edge, instead of the trailing.
 *
 * @fires {*} out - Fired after `input-wire` stops being called for N milliseconds.
 * If `immediate`is set to TRUE, it fires on the leading edge. object param from inputWire
 *
 * @summary event de bouncer
 * @customElement
 * @demo demo-furo-de-bounce Basic usage
 * @demo demo-furo-de-bounce-immediately Immediate usage
 * @appliesMixin FBP
 */
class FuroDeBounce extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * Debounce time in milliseconds
       * Default value: 250
       */
      wait: { type: Number, attribute: 'wait' },
      /**
       * If true, input-wire is triggered immediatley (leading edge instead of trailing)
       * Default value: false
       */
      immediate: { type: Boolean, attribute: 'immediate' },
    };
  }

  constructor() {
    super();

    // as taken from Underscore.js
    this._debounce = function debounce(func, wait, immediate) {
      let timeout;
      return function debouncer() {
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = function applyLater() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
    this._immediate = false;
    this._wait = 250;
    this._createHandler(this._wait, this._immediate);
  }

  set immediate(i) {
    this._immediate = i;
    this._createHandler(this._wait ? this._wait : 250, i);
  }

  set wait(w) {
    this._wait = w;
    this._createHandler(w, this._immediate ? this._immediate : false);
  }

  /**
   * Internal create of debounce handler function
   * @param wait
   * @param immediate
   * @private
   */
  _createHandler(wait, immediate) {
    this.handler = this._debounce(
      wire => {
        this.dispatchEvent(
          new CustomEvent('out', {
            detail: wire,
            bubbles: true,
            composed: true,
          }),
        );
      },
      wait,
      immediate,
    );
  }

  /**
   * Debounce function
   * @param wire
   */
  inputWire(wire) {
    this.handler(wire);
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-de-bounce', FuroDeBounce);
