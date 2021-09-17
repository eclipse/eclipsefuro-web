import { LitElement } from 'lit';

/**
 * Video stream capture
 *
 *```
 * <video-source @-stream="--stream"></video-source>
 * <video autoplay playsinline ƒ-.src-object="--stream"></video>
 *
 *```
 *
 *
 * @fires {MediaStream} stream -  Fired when start was triggered.
 * @fires {Error} error -  Fired when a error occured.
 *
 * @summary Capture video from Camera
 * @customElement
 * @demo demo-capture-video Basic demo
 */
class FuroCaptureVideo extends LitElement {
  constructor() {
    super();

    this.constraints = {
      audio: false,
      video: { width: { exact: 320 }, height: { exact: 240 } },
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
    console.error(e);

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

window.customElements.define('furo-capture-video', FuroCaptureVideo);
