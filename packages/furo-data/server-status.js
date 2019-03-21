import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
import "@polymer/iron-ajax/iron-ajax"

/**
 * `server-check`
 * Prüft verbindung zum Server und wirft entsprechende Meldungen wie `unauthorized` aus
 *
 * @summary Prüft Serververbindung
 * @customElement
 * @polymer
 * @mixes FBP
 */
class ServerStatus extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: none;
        }
      </style>
      <!-- prüfen ob wir eine gültige Anmeldung haben und der Server erreichbar ist -->
      <iron-ajax id="ajax" url="[[url]]" auto="[[auto]]" on-error="_err"></iron-ajax>
    `;
  }

  _err(e) {
    let statuscode = this.$.ajax.lastError.status;
    let response = this.$.ajax.lastError.response;

    if(statuscode == 401){
      /**
      * @event unauthorized
      * Fired when server responds with 401
      * detail payload: response
      */
      let customEvent = new Event('unauthorized', {composed:true, bubbles: true});
      customEvent.detail = response;
      this.dispatchEvent(customEvent)

    }
  }

  static get properties() {
    return {
      /**
       * If true, automatically performs an Ajax request when url changes
       */
      auto: {type: Boolean, value: true}
      ,
      /**
      * The URL target of the request.
      */
      url : {
          type:String
      },
    };
  }

}

window.customElements.define('server-status', ServerStatus);
