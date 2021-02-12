import { LitElement, css } from 'lit-element';

/**
 * `furo-interval-pulse`
 * todo Describe your element
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
      interval: { type: Number },
      takt: { type: Number },
      /**
       * Starts interval automatically
       */
      auto: Boolean,
    };
  }

  start() {
    let cnt = 0;
    clearInterval(this._intervalObject);
    this._intervalObject = setInterval(() => {
      cnt += 1;
      const pos = cnt % this.takt;
      /**
       * Fired when interval is
       * detail payload: position
       * @event tick
       */
      const customEvent = new Event('tick', { bubbles: true });
      customEvent.detail = pos;
      this.dispatchEvent(customEvent);

      if (pos === 0) {
        /**
         * Fired when tock
         * detail payload: position
         * @event tick
         */
        const tockEvent = new Event('tock', { bubbles: true });
        tockEvent.detail = pos;
        this.dispatchEvent(tockEvent);
      }
    }, this.interval);
  }

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
