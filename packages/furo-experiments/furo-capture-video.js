import {LitElement} from 'lit-element';

/**
 * Video stream capture
 *
 *```
 * <video-source @-stream="--stream"></video-source>
 * <video autoplay playsinline ƒ-.src-object="--stream"></video>
 *
 *```
 *
 * @summary Capture video from Camera
 * @customElement
 * @demo demo/video-source.html
 */
class FuroCaptureVideo extends (LitElement) {

  constructor() {
    super();

    this.constraints = {
      audio: false,
      video: {width: {exact: 320}, height: {exact: 240}}
    };
  }


  stop() {
    this.tracks[0].stop();
  }

  start() {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia(this.constraints).then((stream) => {
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
        let customEvent = new Event('stream', {composed: true, bubbles: true});
        customEvent.detail = this.stream;
        this.dispatchEvent(customEvent)
      }).catch(this._err)
    } else {
      let e = new Error("Works with https only");
      this._err(e);
    }
  }

  _err(e) {
    console.error(e)
    /**
     * @event error
     * Fired when
     * detail payload:
     */
    let customEvent = new Event('error', {composed: true, bubbles: true});
    customEvent.detail = e;
    this.dispatchEvent(customEvent)
  }

  /**
   * @private
   * @return {Object}
   */
  static
  get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }


}

window.customElements.define('furo-capture-video', FuroCaptureVideo);
