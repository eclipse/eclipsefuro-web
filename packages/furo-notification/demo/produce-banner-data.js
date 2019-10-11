import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import "@furo/input";

/**
 * `produce-error`
 *
 * @customElement
 * @demo demo/index.html
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
