import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import "@furo/input";

/**
 * `produce-error`
 *
 * @customElement
 * @appliesMixin FBP
 */
class ProduceBannerData extends FBP(LitElement) {

  constructor() {
    super();


    this._FBPAddWireHook("--click", () => {
      /**
       * @event banner-label
       * Fired when
       * detail payload:
       */
      let customEvent = new Event('banner-text-'+this.id, {composed: true, bubbles: true});
      customEvent.detail = this.bannerLabel;
      this.dispatchEvent(customEvent);


      customEvent = new Event('show-'+this.id, {composed: true, bubbles: true});
      customEvent.detail = this.bannerButtonText;
      this.dispatchEvent(customEvent);


      /**
       * @event response-error
       * Fired when
       * detail payload:
       */
      let customEventError = new Event('response-error', {composed: true, bubbles: true});

      customEventError.detail = {
        "error": "invalid username",
        "message": "invalid username",
        "code": 3,
        "details": [
          {
            "@type": "type.googleapis.com/google.rpc.BadRequest",
            "field_violations": [{
              "code": 5432,
              "field": "display_name",
              "description": " have fancy characters"
            }, {
              "code": 5432,
              "field": "repdate.0.repstring.1",
              "description": "Bitte kein B"
            }, {
              "code": 5432,
              "field": "zeitunddatum.date",
              "description": "Deeeep"
            }, {
              "code": 5432,
              "field": "unknown_field",
              "description": "unknown"
            }],
          },{
            "@type": "type.googleapis.com/google.rpc.LocalizedMessage",
            "message": "Some localized message\nwith newline",
            "locale": "de-ch"
          },{
            "@type": "type.googleapis.com/google.rpc.LocalizedMessage",
            "message": "*Other* localized message with newline",
            "locale": "de-ch"
          },{
            "@type": "type.googleapis.com/google.rpc.BadRequest",
            "message": "This should not be visible",
            "locale": "de-ch"
          }
        ]
      };
      this.dispatchEvent(customEventError)

    })
  }


  /**
   *@private
   */
  static get properties(){

    return {

      label: {
        type: String
      },
      bannerLabel: {
        type: String,
        attribute: "banner-text"
      },
      id: {
        type: String
      }
    };
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
      <furo-button raised @-click="--click" label="${this.label}"></furo-button>
    `;
  }

}

window.customElements.define('produce-banner-data', ProduceBannerData);
