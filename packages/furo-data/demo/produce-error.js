import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `produce-error`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class ProduceError extends FBP(LitElement) {

  constructor() {
    super();


    this._FBPAddWireHook("--click",()=>{
      /**
      * @event response-error
      * Fired when
      * detail payload:
      */
      let customEvent = new Event('response-error', {composed:true, bubbles: true});
      customEvent.detail = {
        error: {
          "code": 401,
          "message": "Request had invalid credentials.",
          "status": "UNAUTHENTICATED",
          "fields": [{
            "code": 5432,
            "field": "title",
            "message": "Sollte den titel erroren",
            "developerMessage": "Check this field, before sending. Give a hint to theuser."
          }],
          "details": [
            {
              "@type": "type.googleapis.com/google.rpc.RetryInfo"
            }
          ]
        }
      };
      this.dispatchEvent(customEvent)
    })
  }


  render() {
    // language=HTML
    return html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: inline;
          cursor: pointer;
        }
      </style>
      <button @-click="--click">trigger error</button>
    `;
  }

}

window.customElements.define('produce-error', ProduceError);
