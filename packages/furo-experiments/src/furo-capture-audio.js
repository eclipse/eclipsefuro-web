import { LitElement } from 'lit-element';

/**
 * Video stream capture
 *
 *```
 * <furo-capture-audio @-stream="--stream"></furo-capture-audio>
 *
 *```
 *
 * @summary Capture Audio
 * @customElement
 */
class FuroCaptureAudio extends LitElement {
  constructor() {
    super();

    this.constraints = {
      audio: true,
      video: false,
    };
  }

  stop() {
    this.tracks[0].stop();
  }

  start() {
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia(this.constraints)
        .then(stream => {
          /**
           *
           * @type {MediaStream}
           */
          this.stream = stream;
          this.tracks = stream.getTracks();
          /**
           * the stream
           * @type {MediaStream}
           */

          /**
           * @event stream
           * Fired when
           * detail payload:
           */
          const customEvent = new Event('stream', { composed: true, bubbles: true });
          customEvent.detail = this.stream;
          this.dispatchEvent(customEvent);
        })
        .catch(this._err);
    } else {
      const e = new Error('Works with https only');
      this._err(e);
    }
  }

  _err(e) {
    /**
     * @event error
     * Fired when
     * detail payload:
     */
    const customEvent = new Event('error', { composed: true, bubbles: true });
    customEvent.detail = e;
    this.dispatchEvent(customEvent);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }
}

window.customElements.define('furo-capture-audio', FuroCaptureAudio);
