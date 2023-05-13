import {LitElement, css} from 'lit';
import {FBP} from '@furo/fbp';

/**
 * The Debounce technique allow us to “group” multiple sequential calls in a single one.
 *
 * [Read more about debouncing here](https://css-tricks.com/debouncing-throttling-explained-examples/)
 *
 *
 *
 * ```html
 * <furo-de-bounce
 *     fn-trigger="--searchStringEntered" at-debounced="--debouncedSrch"
 *     ></furo-de-bounce>
 * ```
 *
 * @fires {*} debounced - Fired after N milliseconds. If `immediate`is set to TRUE, it fires on the leading edge.
 * @fires {*} out - deprecated, use debounced instead.
 *
 * // TODO: remove @out and fn-input-wire in q2 2022
 * @summary event de bouncer
 * @customElement
 * @appliesMixin FBP
 */
export class FuroDeBounce extends FBP(LitElement) {
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
       * @type Number
       */
      wait: {type: Number, attribute: 'wait'},
      /**
       * If true, input-wire is triggered immediatley (leading edge instead of trailing)
       * Default value: false
       *
       * @type Boolean
       */
      immediate: {type: Boolean, attribute: 'immediate'},
    };
  }

  constructor() {
    super();


    /**
     * as taken from Underscore.js
     * @param func
     * @param wait
     * @param immediate
     * @return {(function(): void)|*}
     * @private
     */
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
    /**
     *
     * @type {boolean}
     * @private
     */
    this._immediate = false;
    /**
     *
     * @type {number}
     * @private
     */
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
          })
        );
        this.dispatchEvent(
          new CustomEvent('debounced', {
            detail: wire,
            bubbles: true,
            composed: true,
          })
        );
      },
      wait,
      immediate,
    );
  }

  /**
   * Trigger the debounce
   * @param {*} data - Any data, will be dispatched on the `debounced` event.
   */
  trigger(data) {
    this.handler(data);
  }

  /**
   * Debounce function
   * @param wire
   * @private
   * @deprecated -  Use trigger() instead
   */
  inputWire(wire) {
    this.handler(wire);
    console.warn("input-wire is deprecated, use the trigger method instead", this)
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
