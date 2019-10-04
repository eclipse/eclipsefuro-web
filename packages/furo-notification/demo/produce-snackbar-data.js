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
class ProduceSnackbarData extends FBP(LitElement) {

  constructor() {
    super();


    this._FBPAddWireHook("--click", () => {
      /**
       * @event snackbar-label
       * Fired when
       * detail payload:
       */
      let customEvent = new Event('snackbar-label-'+this.id, {composed: true, bubbles: true});
      customEvent.detail = this.snackbarLabel;
      this.dispatchEvent(customEvent);

      /**
       * @event rset-snackbar-label
       * Fired when
       * detail payload:
       */
      customEvent = new Event('snackbar-button-text-'+this.id, {composed: true, bubbles: true});
      customEvent.detail = this.snackbarButtonText;
      this.dispatchEvent(customEvent);

      customEvent = new Event('show-'+this.id, {composed: true, bubbles: true});
      customEvent.detail = this.snackbarButtonText;
      this.dispatchEvent(customEvent);

      console.log(this.snackbarLabel);
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
      snackbarLabel: {
        type: String,
        attribute: "snackbar-label"
      },
      snackbarButtonText: {
        type: String,
        attribute: "snackbar-button-text"
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

window.customElements.define('produce-snackbar-data', ProduceSnackbarData);
