import { LitElement, css } from 'lit';

/**
 * `furo-interval-pulse`
 *
 * Pulses a tick event every `interval` ms duration and every `takt` a tock event is also fired.
 *
 *
 * @fires {Number} tick - Fired on every interval with the position of the pulse starting at 0.
 * @fires {Number} tock - Fired nth interval defined by takt.
 *
 * @summary trigger an event in intervals
 * @customElement
 * @appliesMixin FBP
 */
class FuroIntervalPulse extends LitElement {
  constructor() {
    super();
    this.interval = 200;
    this.takt = 4;
    if (this.auto) {
      this.start();
    }
  }

  static get properties() {
    return {
      /**
       * Duration of a tact in ms.
       *
       * @type Number
       */
      interval: { type: Number },
      /**
       * Number of ticks per tact.
       *
       * @type Number
       */
      takt: { type: Number },
      /**
       * Starts interval automatically
       *
       * @type Boolean
       */
      auto: Boolean,
    };
  }

  /**
   * Starts the pulsing.
   */
  start() {
    let cnt = 0;
    clearInterval(this._intervalObject);
    this._intervalObject = setInterval(() => {
      cnt += 1;
      const pos = cnt % this.takt;

      const customEvent = new Event('tick', { bubbles: true });
      customEvent.detail = pos;
      this.dispatchEvent(customEvent);

      if (pos === 0) {
        const tockEvent = new Event('tock', { bubbles: true });
        tockEvent.detail = pos;
        this.dispatchEvent(tockEvent);
      }
    }, this.interval);
  }

  /**
   * Stops the pulsing.
   */
  stop() {
    clearInterval(this._intervalObject);
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

window.customElements.define('furo-interval-pulse', FuroIntervalPulse);
