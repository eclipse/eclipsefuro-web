import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';
import 'markdown-it/dist/markdown-it.js';

/**
 * `furo-ui5-message-strip`
 *
 * The furo-ui5-message-strip component enables the embedding of app-related messages. It displays 4 types of messages,
 * each with corresponding semantic color and icon: Information, Positive, Warning and Negative.
 * Each message can have a Close button, so that it can be removed from the UI, if needed.
 *
 * It should be used together witch furo-ui5-message-strip-display. You can place those two components into different places.
 * Best place the furo-ui5-message-strip-display on the main site. then you only need one furo-ui5-message-strip-display. It can work with n furo-ui5-message-strip.
 * https://experience.sap.com/fiori-design-web/message-strip/
 *
 *  ```
 *  <furo-ui5-message-strip-display></furo-ui5-message-strip-display>
 *  <furo-ui5-message-strip ƒ-show-information="--wire"></furo-ui5-message-strip>
 *  ```
 *
 * @fires {{Object}  this} open-furo-ui5-message-strip-requested -  Fired when open message strip is requested
 * @fires {{Object}  payload} message-strip-closed -  Fired when the MessageStrip is closed
 *
 * @summary furo ui5 message strip
 * @customElement
 * @demo demo-furo-ui5-message-strip-display Basic Usage
 */
export class FuroUi5MessageStrip extends FBP(LitElement) {
  constructor() {
    super();
    this.noCloseButton = false;
    this.noIcon = false;
    this.displayMessage = '';

    this._md = window.markdownit({
      html: false,
      linkify: true,
      typographer: true,
    });
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
       * define the width of ui5-messagestrip. e.g. 200px
       */
      size: {
        type: String,
      },

      /**
       * the text message of the message strip
       */
      message: {
        type: String,
      },
    };
  }

  /**
   * request display message strip.
   * trigger `open-furo-ui5-message-strip-requested` event
   * @param p
   * @private
   */
  _requestDisplay() {
    const customEvent = new Event('open-furo-ui5-message-strip-requested', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * the event `message-strip-closed` will be sent with payload when the MessageStrip is closed
   */
  _close() {
    const customEvent = new Event('message-strip-closed', { composed: true, bubbles: true });
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);
  }

  /**
   * Defines whether the MessageStrip renders close icon.
   * @param b
   */
  noCloseButton(b) {
    this.noCloseButton = b;
  }

  /**
   * Defines whether the MessageStrip will show an icon in the beginning.
   * @param b
   */
  noIcon(b) {
    this.noIcon = b;
  }

  /**
   * Compatibility function to avoid breaking change
   * @deprecated
   * @param msg
   */
  show(msg) {
    this.showInformation(msg);
    // eslint-disable-next-line no-console
    console.warn(
      'Deprecated. Instead, use the explicit show functions such as showInformation, showError, showSuccess or showWarning.',
    );
  }

  /**
   * shows an information message
   * if the param msg is empty, the attribute message is used.
   * @param msg
   */
  showInformation(msg) {
    if (Object.prototype.toString.call(msg) === '[object String]') {
      this.displayMessage = this._md.renderInline(msg);
    } else {
      this.displayMessage = this.message;
    }

    this.type = 'Information';
    this._requestDisplay();
  }

  /**
   * shows a success message
   * if the param msg is empty, the attribute message is used.
   * @param msg
   */
  showSuccess(msg) {
    if (Object.prototype.toString.call(msg) === '[object String]') {
      this.displayMessage = this._md.renderInline(msg);
    } else {
      this.displayMessage = this.message;
    }

    this.type = 'Positive';
    this._requestDisplay();
  }

  /**
   * shows a warning message
   * if the param msg is empty, the attribute message is used.
   * @param msg
   */
  showWarning(msg) {
    if (Object.prototype.toString.call(msg) === '[object String]') {
      this.displayMessage = this._md.renderInline(msg);
    } else {
      this.displayMessage = this.message;
    }

    this.type = 'Warning';
    this._requestDisplay();
  }

  /**
   * shows an error message
   * if the param msg is empty, the attribute message is used.
   * @param msg
   */
  showError(msg) {
    if (Object.prototype.toString.call(msg) === '[object String]') {
      this.displayMessage = this._md.renderInline(msg);
    } else {
      this.displayMessage = this.message;
    }

    this.type = 'Negative';
    this._requestDisplay();
  }

  /**
   * shows a google rpc status message (message LocalizedMessage)
   * Provides a localized error message that is safe to return to the user
   * which can be attached to an RPC error.
   *
   * Rendering rules:
   * - Every @type LocalizedMessage inside of details[] is displayed with a line break in the message strip.
   * - One message strip element is created per RPC status.
   *
   * Example rpc status:
   *
   * ```json
   * {
   *  "code":3,
   *  "message":"Missing mandatory values",
   *  "details":[
   *    {"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-GB","message":"Please register all the mandatory values."},
   *    {"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-GB","message":"If you need help completing the data, call 0800-HELP-FURO."},
   *    {"@type":"type.googleapis.com/google.rpc.BadRequest","field_violations":[
   *      {"field":"short_form","description":"The country designation (short form) should be set."},
   *      {"field":"id","description":"The id should be ISO Alpha-2 code as described in the ISO 3166 international standard"},
   *      {"field":"area","description":"Please set a value for the field area."}]
   *    }
   *   ]}
   *```
   *
   * Example message strip display:
   * ```
   * | X  Please register all the mandatory values.
   * |    If you need help completing the data, call 0800-HELP-FURO.
   * ```
   *
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto
   *
   * @param rpcStatus
   */
  showGrpcLocalizedMessage(rpcStatus) {
    if (rpcStatus && rpcStatus.details && rpcStatus.details.length) {
      let messages = [];
      messages = messages.concat(
        rpcStatus.details
          .filter(det => det['@type'].includes('LocalizedMessage'))
          .map(det => this._md.renderInline(det.message)),
      );

      this.displayMessage = messages.join('</br>');

      /**
       * https://github.com/grpc/grpc/blob/master/doc/statuscodes.md
       */
      if (rpcStatus.code) {
        switch (rpcStatus.code) {
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
        this.type = 'Error';
      }

      this._requestDisplay();
    }
  }

  /**
   * Deprecated function! Use showGrpcLocalizedMessage
   * parse grpc status object. the message in grpc status will be used as the content massage
   * @deprecated
   * @param rpcStatus
   */
  parseGrpcStatus(rpcStatus) {
    // eslint-disable-next-line no-console
    console.warn('Deprecated function. Use showGrpcLocalizedMessage instead.');
    this.showGrpcLocalizedMessage(rpcStatus);
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
