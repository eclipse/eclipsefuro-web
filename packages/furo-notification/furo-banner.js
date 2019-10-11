import {LitElement,html,css} from 'lit-element';

/**
 * `furo-banner`
 * Lit element
 *
 *  furo-banner should be used together witch furo-banner-display. you can place those two components into different places.
 *  best place the furo-banner-display on the main site. then you only need one furo-banner-display. it can work with n furo-banner.
 *
 * @customElement
 * @demo demo-furo-banner-display banner demo
 */
class FuroBanner extends LitElement {


  constructor(){
    super();
    this.dismissButtonText = "dismiss";
    this.confirmButtonText = "confirm";
  }


  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
            :host {
            }
        `;
  }

  /**
   *@private
   */
  static get properties(){

    return {
      text: {
        type: String
      },
      dismissButtonText: {
        type: String,
        attribute: "dismiss-button-text"
      },
      confirmButtonText: {
        type: String,
        attribute: "confirm-button-text"
      },
      icon: {
        type: String
      },
      payload: {
        type: Object
      }
    };
  }

  setIcon(i) {
    this.icon = i;
  }

  setText(t) {
    this.text = t;
  }

  setConfirmButtonText(t) {
    this.confirmButtonText = t;
  }

  setDismissButtonText(t) {
    this.dismissButtonText = t;
  }

  /**
   * show banner
   * @param p {Object} payload
   */
  show(p) {

    this.payload = p;
    /**
     * @event open-furo-banner-requested
     * Fired when value open banner is requested
     * detail payload: {Object}  this
     */
    let customEvent = new Event("open-furo-banner-requested",{composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * close banner
   * event `close-furo-banner-requested` will be sent to furo-banner-display with payload this
   */
  close() {

    /**
     * @event close-furo-banner-requested
     * Fired when value open banner is requested
     * detail payload: {Object}  this
     */
    let customEvent = new Event("close-furo-banner-requested",{composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent)
  }


  /**
   * snackbar closed. event `snackbar-closed` will be sent with payload
   */
  closed() {

    /**
     * @event snackbar-closed
     * Fired when snackbar is closed
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("banner-closed",{composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent)
  }

  /**
   * trigger the action of snackbar. event `banner-action-clicked` will be sent with payload
   */
  action() {

    /**
     * @event banner-action-clicked
     * Fired when action button of banner is clicked
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("banner-action-clicked",{composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent)
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render(){
    return html`
        `;
  }

}

customElements.define('furo-banner', FuroBanner);
