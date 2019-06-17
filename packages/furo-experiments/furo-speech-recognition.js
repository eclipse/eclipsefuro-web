import {LitElement} from 'lit-element';

/**
 * `furo-speech-recognition`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-speech-recognition.html
 */
class FuroSpeechRecognition extends (LitElement) {

  constructor() {
    super();
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = false;



    this.recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      console.log(event.results)
      /**
      * @event transcript
      * Fired when speechToText
      * detail payload: string
      */
      let customEvent = new Event('transcript', {composed:true, bubbles: true});
      customEvent.detail = speechToText;
      this.dispatchEvent(customEvent);
    }




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
      myBool: {type: Boolean}
    };
  }


}

window.customElements.define('furo-speech-recognition', FuroSpeechRecognition);
