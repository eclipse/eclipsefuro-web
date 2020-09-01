import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-ui5-message-strip`
 * Lit element
 *
 *  furo-ui5-message-strip should be used together witch furo-ui5-message-strip-display. you can place those two components into different places.
 *  best place the furo-ui5-message-strip-display on the main site. then you only need one furo-ui5-message-strip-display. it can work with n furo-ui5-message-strip.
 *
 * @summary ui5 message strip
 * @customElement
 * @demo demo-furo-ui5-message-strip-display message strip demo
 */
class FuroUi5MessageStrip extends FBP(LitElement) {
  constructor() {
    super();
    this.noCloseButton = false;
    this.noIcon = false;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * Defines whether the MessageStrip renders close icon.
       */
      noCloseButton: {
        type: Boolean,
        attribute: 'no-close-button',
      },

      /**
       * Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the icon slot. Otherwise, the default icon for the type will be used.
       */
      noIcon: {
        type: Boolean,
        attribute: 'no-icon',
      },

      /**
       * Defines the ui5-messagestrip type. Note: Available options are "Information", "Positive", "Negative", and "Warning".
       */
      type: {
        type: String,
      },

      /**
       * define the width of ui5-messagestrip. e.g. 200px
       */
      size: {
        type: String,
      },

      /**
       * Defines the content to be displayed as graphical element within the ui5-messagestrip.
       * ui5-icon: https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
       */
      icon: {
        type: String,
      },

      /**
       * the message content of MessageStrip
       */
      message: {
        type: String,
      },

      /**
       * payload
       */
      payload: {
        type: Object,
      },
    };
  }

  /**
   * request display message strip.
   * trigger `open-furo-ui5-message-strip-requested` event
   * @param p
   * @private
   */
  _requestDisplay(p) {
    this.payload = p;
    /**
     * @event open-furo-ui5-message-strip-requested
     * Fired when open message strip is requested
     * detail payload: {Object}  this
     */
    const customEvent = new Event('open-furo-ui5-message-strip-requested', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * show MessageStrip
   * @param p
   */
  show(p) {
    this._requestDisplay(p);
  }

  /**
   * the event `message-strip-closed` will be sent with payload when the MessageStrip is closed
   */
  _close() {
    /**
     * @event message-strip-closed
     * Fired when the MessageStrip is closed
     * detail payload: {Object}  payload
     */
    const customEvent = new Event('message-strip-closed', { composed: true, bubbles: true });
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);
  }

  /**
   * Defines whether the MessageStrip renders close icon.
   * @param t
   */
  noCloseButton(b) {
    this.noCloseButton = b;
  }

  /**
   * Defines whether the MessageStrip will show an icon in the beginning.
   * @param t
   */
  noIcon(b) {
    this.noIcon = b;
  }

  /**
   * set the type of the MessageStrip
   * Available options are "Information", "Positive", "Negative", and "Warning".
   * @param t
   */
  setType(t) {
    this.type = t;
  }

  /**
   * set the message content of the MessageStrip
   * @param m
   */
  setMessage(m) {
    this.message = m;
  }

  /**
   * parse grpc status object. the message in grpc status will be used as the content massage
   * @param s
   */
  parseGrpcStatus(s) {
    if (s.message) {
      this.setMessage(s.message);

      /**
       * https://github.com/grpc/grpc/blob/master/doc/statuscodes.md
       */
      if (s.code) {
        switch (s.code) {
          case 0:
            this.type = 'Positive';
            break;
          case 1:
            this.type = 'Information';
            break;
          default:
            this.type = 'Negative';
            break;
        }
      } else {
        this.type = 'Negative';
      }

      this._requestDisplay(s);
    }
  }

  // set display none
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

customElements.define('furo-ui5-message-strip', FuroUi5MessageStrip);
