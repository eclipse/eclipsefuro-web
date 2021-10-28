import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';


import 'markdown-it/dist/markdown-it.js';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import '@ui5/webcomponents/dist/List.js';

/**
 * `furo-ui5-notification-list`
 *  Displays google.rpc.Status messages in a grouped list.
 *  https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
 *
 *  Best place the furo-ui5-notification-list on the main site. then you only need one furo-ui5-notification-list.
 *  you can also use more than one furo-ui5-notification-list for special needs.
 *  But you have to be sure the furo-ui5-notification-list can receive the notification events from furo-ui5-notification.
 *
 * @fires {Number} field-value-changed - Fires a notification counter changed. Use this event to show the amount of notifications to the user.
 *
 * @summary ui5 notification list
 * @customElement
 * @demo demo-furo-ui5-notification-list-display ui5 notification display demo
 */
export class FuroUi5NotificationListDisplay extends FBP(LitElement) {
  constructor() {
    super();
    this.headerText = '';
    this.noDataText = 'No messages';
    this._notificationCount = 0;
    this.groupTitleHelp = 'Help';
    this.groupTitleBadRequest = 'Bad Request';
    this.groupTitleMessage = 'Information';

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
       * the header text of the notification
       */
      headerText: {
        type: String,
        attribute: 'header-text',
      },
      /**
       * Defines if the close button would be displayed.
       */
      showClose: {
        type: Boolean,
        attribute: 'show-close',
      },
      /**
       * Defines the text that is displayed when the list contains no items.
       */
      noDataText: {
        type: String,
        attribute: 'no-data-text',
      },
      /**
       * Defines the notification group element title for notifications of type
       * "type.googleapis.com/google.rpc.LocalizedMessage"
       */
      groupTitleMessage: {
        type: String,
        attribute: 'group-title-message',
      },
      /**
       * Defines the notification group element title for notifications of type
       * "type.googleapis.com/google.rpc.Help"
       */
      groupTitleHelp: {
        type: String,
        attribute: 'group-title-help',
      },
      /**
       * Defines the notification group element title for notifications of type
       * "type.googleapis.com/google.rpc.BadRequest"
       */
      groupTitleBadRequest: {
        type: String,
        attribute: 'group-title-bad-request',
      },
    };
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
        }
      `
    );
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * listening the 'open-furo-ui5-notification-requested' event
     * the payload message in the event detail should be a grpc status message or a collection of notifications.
     * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
     */
    this.parentNode.addEventListener('open-furo-ui5-notification-requested', e => {
      e.stopPropagation();
      this.target = e.detail;

      if (e.detail._type === 'grpc') {
        this.parseGrpcStatus(e.detail);
      } else if (e.detail.payload && Array.isArray(e.detail.payload)) {
        e.detail.payload.forEach(n => {
          this.parseNotificationMessage(n);
        });
      }
    });

    /**
     * listening the `item-close` event from ui5-li-notification element. when the close button is clicked, close the notification and
     * call the _close function on the target element (furo-ui5-notification).
     */
    this.shadowRoot.getElementById('ui5-list').addEventListener('item-close', e => {
      e.detail.item.target._close(e.detail.item.message);
      e.detail.item.remove();
      // update notification counter
      if (e.detail.item.nodeName === 'UI5-LI-NOTIFICATION-GROUP') {
        this._notificationCount -= e.detail.item.childElementCount;
      } else {
        // eslint-disable-next-line no-plusplus
        --this._notificationCount;
      }
      this._dispatchNotificationCounterUpdates(this._notificationCount);
    });

    /**
     * listening the `click` event on the action buttons. when the action button is clicked, close the notification and
     * call the _customAction function on the target element (furo-ui5-notification).
     */
    this.shadowRoot.getElementById('ui5-list').addEventListener('click', e => {
      const action = e.target.getAttribute('action');
      if (action) {
        e.target.notification.target._customAction(action, e.target.notification.message);
        e.target.notification.remove();
      }
    });
  }

  /**
   * parse grpc status object and set the notification text according to the LocalizedMessage in status.
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
   * @param d
   */
  parseGrpcStatus(d) {
    const status = d.payload;

    if (status.details && status.details.length > 0) {
      this.multilineText = [];
      // _show localized messages first
      this.multilineText = this.multilineText.concat(
        status.details
          .filter(det => det['@type'].includes('LocalizedMessage'))
          .map(det => det.message),
      );

      // @type: "type.googleapis.com/google.rpc.BadRequest"
      this.localizedMsg = [];
      this.localizedMsg = status.details.filter(det =>
        det['@type'].includes('google.rpc.LocalizedMessage'),
      );

      // @type: "type.googleapis.com/google.rpc.BadRequest"
      this.badRequests = [];
      this.badRequests = status.details.filter(det =>
        det['@type'].includes('google.rpc.BadRequest'),
      );

      // @type: "type.googleapis.com/google.rpc.Help"
      this.help = [];
      this.help = status.details.filter(det => det['@type'].includes('google.rpc.Help'));

      // @TODO: implement the other error types from https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto
      // RequestInfo, ResourceInfo, PreconditionFailure
    }

    if (this.multilineText) {
      this.text = this.multilineText.join(' ');
    }

    this.heading = '';
    this.priority = 'High';
    this.actions = [];
    this.message = status;
    this._show();
  }

  /**
   * parse notification message and set the ui5 notification properties like priority, actions, heading..
   * the notification message should be a furo.notification type:
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
   * @param message
   */
  parseNotificationMessage(message) {
    this.priority = message.message_priority ? message.message_priority : 'Low';
    this.heading = message.heading ? message.heading : null;
    this.text = message.message;
    this.actions = message.actions;
    this.message = message;

    this._show();
  }

  /**
   * shows grpc status notifications
   * implemented types are:
   * - Bad Request with Field Violations
   * -
   */
  _show() {
    // show localized messages first
    this._createLocalizedMessageElement().then(g => {
      this.shadowRoot.getElementById('ui5-list').appendChild(g);
    });

    /**
     * Handling of Help
     */
    this._createHelpElements().then(g => {
      this.shadowRoot.getElementById('ui5-list').appendChild(g);
    });

    /**
     * Handling of Bad Request Field Violations
     */
    this._createBadRequestElements().then(g => {
      this.shadowRoot.getElementById('ui5-list').appendChild(g);
    });
  }

  _dispatchNotificationCounterUpdates(count) {
    const VALUE = count > 0 ? count : '';
    this.dispatchEvent(
      new CustomEvent('notification-counter-update', {
        detail: VALUE.toString(),
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Creates notification items of type @type: "type.googleapis.com/google.rpc.LocalizedMessage"
   * @returns {Promise<unknown>}
   * @private
   */
  _createLocalizedMessageElement() {
    return new Promise(resolve => {
      if (this.localizedMsg) {
        this._notificationCount += this.localizedMsg.length;
        this._dispatchNotificationCounterUpdates(this._notificationCount);
        /**
         * Localized Messge group element
         */
        const group = document.createElement('ui5-li-notification-group');
        group.setAttribute('show-close', '');
        group.setAttribute('show-counter', '');
        group.titleText = this.groupTitleMessage;
        group.target = this.target;

        this.localizedMsg.forEach(msg => {
          const notification = document.createElement('ui5-li-notification');
          notification.setAttribute('show-close', '');
          // notification.setAttribute('priority', 'Low')
          notification.read = true;
          notification.titleText = '';
          notification.target = this.target;
          notification.innerHTML = this._md.renderInline(msg.message);
          // save the initial message for the later usage
          notification.message = msg.message;
          // add to group element
          group.appendChild(notification);
        });
        resolve(group);
      }
    });
  }

  /**
   * Creates notification items of type @type: "type.googleapis.com/google.rpc.Help"
   * @returns {Promise<unknown>}
   * @private
   */
  _createHelpElements() {
    return new Promise(resolve => {
      if (this.help) {
        this.help.forEach(help => {
          /**
           * Bad Request group element
           */
          const group = document.createElement('ui5-li-notification-group');
          group.setAttribute('show-close', '');
          group.setAttribute('show-counter', '');
          group.titleText = this.groupTitleHelp;
          group.target = this.target;

          /**
           * Link List
           */
          this._notificationCount += help.links.length;
          this._dispatchNotificationCounterUpdates(this._notificationCount);

          help.links.forEach(item => {
            const notification = document.createElement('ui5-li-notification');
            notification.setAttribute('show-close', '');
            notification.setAttribute('priority', 'Low');
            notification.read = true;
            notification.titleText = item.description;
            notification.target = this.target;
            // save the initial message for the later usage
            notification.message = this.message;

            const fieldItem = document.createElement('span');
            fieldItem.innerHTML = `<a href='${item.url}' title='${item.description}' target='_blank'>${item.url}</a>`;
            fieldItem.slot = 'footnotes';
            notification.appendChild(fieldItem);
            // add to group element
            group.appendChild(notification);
          });
          resolve(group);
        });
      }
    });
  }

  /**
   * Creates notification items of type @type: "type.googleapis.com/google.rpc.BadRequest"
   * @returns {Promise<unknown>}
   * @private
   */
  _createBadRequestElements() {
    return new Promise(resolve => {
      if (this.badRequests) {
        this.badRequests.forEach(err => {
          /**
           * Bad Request group element
           * @type {HTMLElement}
           */
          const group = document.createElement('ui5-li-notification-group');
          group.setAttribute('show-close', '');
          group.setAttribute('show-counter', '');
          group.titleText = this.groupTitleBadRequest;
          group.target = this.target;

          /**
           * Field Violation list
           */
          this._notificationCount += err.field_violations.length;
          this._dispatchNotificationCounterUpdates(this._notificationCount);

          err.field_violations.forEach(item => {
            const notification = document.createElement('ui5-li-notification');
            notification.setAttribute('show-close', '');
            notification.setAttribute('priority', this.priority);
            notification.read = true;
            notification.titleText = item.field;
            notification.target = this.target;
            // save the initial message for the later usage
            notification.message = this.message;
            notification.innerHTML = this._md.renderInline(item.description);

            // const fieldItem = document.createElement('span');
            // fieldItem.innerText = item.field;
            // fieldItem.slot = 'footnotes';
            // notification.appendChild(fieldItem);
            // add to group element
            group.appendChild(notification);
          });
          resolve(group);
        });
      }
    });
  }

  /**
   * clear all notifications
   */
  clearAll() {
    this.shadowRoot.getElementById('ui5-list').innerHTML = '';
    this._notificationCount = 0;
    this._dispatchNotificationCounterUpdates(this._notificationCount);
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-list
        id="ui5-list"
        no-data-text=${this.noDataText}
        header-text="${this.headerText}"
      ></ui5-list>
    `;
  }
}

customElements.define('furo-ui5-notification-list-display', FuroUi5NotificationListDisplay);
