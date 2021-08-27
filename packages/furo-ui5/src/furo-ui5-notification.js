import { LitElement, css } from 'lit';

/**
 * `furo-ui5-notification`
 * Lit element
 *
 *  furo-ui5-notification should be used together witch furo-ui5-notification-list-display or furo-ui5-notification-group-display. you can place those two components into different places.
 *  best place the furo-ui5-notification-list(or group)-display on the main site. then you only need one furo-ui5-notification-list(or group)-display. it can work with n furo-ui5-notification.
 *
 * @fires {{Object}  this} open-furo-ui5-notification-requested -  Fired when value open banner is requested
 * @fires {{Object}  this} open-furo-ui5-notification-group-requested -  Fired when value open banner is requested
 * @fires {{Object}  payload} notification-closed. -  Fired when notification is closed.
 * @fires {{Object}  payload} notification-custom-action -  Fired when notification custom action is triggered. this is a general action event.
 * @fires {{Object}  payload} notification-custom-action-`commandName` -  Fired when notification custom action is triggered.
 *
 * @summary a banner
 * @customElement
 * @demo demo-furo-ui5-notification-list-display ui5 notification display demo
 */
export class FuroUi5Notification extends LitElement {
  constructor() {
    super();
    this.dismissButtonText = 'dismiss';
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * banner text content. Use *word* to mark as strong. Use \n to insert a line break.
       *
       * *HTML tags will be stripped out.*
       */
      text: {
        type: String,
      },
      /**
       * payload. can be a GRPC error or a notification message collection.
       */
      payload: {
        type: Object,
      },
      /**
       * type of the notification. `grpc` or `notification`
       */
      _type: { type: String },
    };
  }

  /**
   * request to display the notifications
   * @param p {Object} payload
   */
  _requestListDisplay() {
    const customEvent = new Event('open-furo-ui5-notification-requested', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * request to display the notifications in group
   * @param p {Object} payload
   */
  _requestGroupDisplay() {
    const customEvent = new Event('open-furo-ui5-notification-group-requested', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * trigger event when notification is closed
   *
   * @param message
   * @private
   */
  _close(message) {
    const customEvent = new Event('notification-closed', { composed: true, bubbles: true });
    customEvent.detail = message || this.payload;
    this.dispatchEvent(customEvent);
  }

  /**
   * trigger events when notification actions are triggered
   *
   * @param command
   * @param message
   * @private
   */
  _customAction(command, message) {
    const customEvent = new Event('notification-custom-action', { composed: true, bubbles: true });
    customEvent.detail = message;
    this.dispatchEvent(customEvent);

    const customActionEvent = new Event(`notification-custom-action-${command}`, {
      bubbles: true,
      composed: true,
    });
    customActionEvent.detail = message;
    this.dispatchEvent(customActionEvent);

    this._close(message);
  }

  /**
   * inject a grpc status object
   * parse grpc status object and set the label according to the LocalizedMessage in status.
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto .
   * @param s
   */
  parseGrpcStatus(status) {
    this.payload = status;
    this._type = 'grpc';
    this._requestListDisplay();
  }

  /**
   * inject an array of notification messages.
   * the notification message should be an array of the following object signature:
   * {
   *  "id": 1,
   *  "display_name": "",
   *  "heading": "heading 1",
   *  "message_priority": "High",
   *  "category": "warning",
   *  "category_priority": "High",
   *  "actions": [
   *    {
   *      "icon":"accept",
   *      "command":"accept",
   *      "text": "accept"
   *    },
   *    {
   *      "icon":"message-error",
   *      "command":"reject",
   *      "text": "Reject"
   *    }
   *  ],
   *  "message": "Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3"
   *}
   * @param c
   */
  injectNotificationCollection(c) {
    this.payload = c;
    this._type = 'notification';
    this._requestGroupDisplay();
  }

  static get styles() {
    return css`
      :host {
        display: none;
      }
    `;
  }
}

customElements.define('furo-ui5-notification', FuroUi5Notification);
