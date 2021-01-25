import { LitElement } from 'lit-element';

/**
 * `furo-speech-recognition`
 * Speak recogninition API component
 *
 * <furo-demo-snippet>
 *   <template>
 *     <furo-button raised @-click="--start" label="start"></furo-button>
 *     <furo-speech-recognition ƒ-start="--start" @-transcript="--text"></furo-speech-recognition>
 *     <div ƒ-.inner-text="--text"></div>
 *   </template>
 * </furo-demo-snippet>
 *
 *
 * @summary Speech to text
 * @customElement
 * @demo demo-furo-speech-recognition
 */
class FuroSpeechRecognition extends LitElement {
  constructor() {
    super();
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = false;

    this.recognition.onresult = event => {
      const speechToText = event.results[0][0].transcript;
      console.log(event.results);
      /**
       * @event transcript
       * Fired when speechToText
       * detail payload: string
       */
      const customEvent = new Event('transcript', { composed: true, bubbles: true });
      customEvent.detail = speechToText;
      this.dispatchEvent(customEvent);
    };
  }

  start() {
    this.recognition.start();
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

window.customElements.define('furo-speech-recognition', FuroSpeechRecognition);
