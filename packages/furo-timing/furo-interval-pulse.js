import { LitElement } from 'lit-element';

/**
 * `furo-interval-pulse`
 * todo Describe your element
 *
 * @summary trigger an event in intervals
 * @customElement
 * @appliesMixin FBP
 */
class FuroIntervalPulse extends (LitElement) {

    constructor() {
        super();
        this.interval = 200;
        this.takt = 4;
        if(this.auto){
          this.start();
        }
    }


  static get properties() {
    return {
      interval: {type: Number},
      takt: {type: Number},
      /**
       * Starts interval automatically
       */
      auto:Boolean
    }
  }

  start() {
    let cnt = 0;
    clearInterval(this._intervalObject);
    this._intervalObject = setInterval(() => {
      let pos = cnt++ % this.takt;
      /**
       * Fired when interval is
       * detail payload: position
       * @event tick
       */
      let customEvent = new Event('tick', {bubbles: true});
      customEvent.detail = pos;
      this.dispatchEvent(customEvent);

      if (pos == 0) {
        /**
         * Fired when tock
         * detail payload: position
         * @event tick
         */
        let customEvent = new Event('tock', {bubbles: true});
        customEvent.detail = pos;
        this.dispatchEvent(customEvent);
      }

    }, this.interval)
  }

  stop() {
    clearInterval(this._intervalObject);
  }
}

window.customElements.define('furo-interval-pulse', FuroIntervalPulse);
