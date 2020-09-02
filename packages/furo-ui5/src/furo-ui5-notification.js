import { LitElement, css } from 'lit-element';

/**
 * `furo-ui5-notification`
 * Lit element
 *
 *  furo-ui5-notification should be used together witch furo-ui5-notification-list-display. you can place those two components into different places.
 *  best place the furo-ui5-notification-list-display on the main site. then you only need one furo-ui5-notification-list-display. it can work with n furo-ui5-notification.
 *
 * @summary a banner
 * @customElement
 * @demo demo-furo-ui5-notification-list-display ui5 notification display demo
 */
class FuroUi5Notification extends LitElement {
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
  requestDisplay() {
    /**
     * @event open-furo-ui5-notification-requested
     * Fired when value open banner is requested
     * detail payload: {Object}  this
     */
    const customEvent = new Event('open-furo-ui5-notification-requested', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   *  trigger event when notification is closed
   */
  _close() {
    /**
     * @event notification-closed.
     * Fired when notification is closed.
     * detail payload: {Object}  payload
     */
    const customEvent = new Event('notification-closed', { composed: true, bubbles: true });
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);
  }

  /**
   *  trigger events when notification actions are triggered
   */
  _customAction(command) {
    /**
     * @event notification-custom-action
     * Fired when notification custom action is triggered. this is a general action event.
     * detail payload: {Object}  payload
     */
    const customEvent = new Event('notification-custom-action', { composed: true, bubbles: true });
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);

    /**
     * @event notification-custom-action-`commandName`
     * Fired when notification custom action is triggered.
     * detail payload: {Object}  payload
     */
    const customActionEvent = new Event(`notification-custom-action-${command}`, {
      bubbles: true,
      composed: true,
    });
    customActionEvent.detail = this.payload;
    this.dispatchEvent(customActionEvent);

    this._close();
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
    this.requestDisplay();
  }

  /**
   * inject a collection of notification messages.
   * @param c
   */
  injectNotificationCollection(c) {
    this.payload = c;
    this._type = 'notification';
    this.requestDisplay();
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
