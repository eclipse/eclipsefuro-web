import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import 'markdown-it/dist/markdown-it.js';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import '@ui5/webcomponents-fiori/dist/NotificationOverflowAction.js';
import '@ui5/webcomponents/dist/List.js';
import { Theme } from '@furo/framework';

/**
 * `furo-ui5-notification-list`
 * Lit element
 *
 *  best place the furo-ui5-notification-list on the main site. then you only need one furo-ui5-notification-list.
 *  you can also use more furo-ui5-notification-list for special needs. but You have to be sure the furo-ui5-notification-list can receive the notification events.
 *
 *
 * @summary ui5 notification list
 * @customElement
 * @demo demo-furo-ui5-notification-list-display ui5 notification display demo
 */
class FuroUi5NotificationListDisplay extends FBP(LitElement) {
  constructor() {
    super();
    this.headerText = '';
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * listening the 'notification-grpc-status' event
     * the message in the event detail should be GRPC status.
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
     * listening the 'item-close' event from notification-list-item. when the close button is clicked, close the notification
     * trigger the close event from target element. you can wire this closed event on target element.
     * e.g. when the notification messages come from a furo-entity-agent. you can use:
     * <furo-entity-agent @-notification-closed="--notificationAction" ..
     */
    this.shadowRoot.getElementById('ui5-list').addEventListener('item-close', e => {
      const customEvent = new Event('notification-closed', { bubbles: true, composed: true });
      customEvent.detail = 'notification closed.';
      e.detail.item.target._close();
      e.detail.item.remove();
    });

    /**
     * listening the click event on the action buttons. when the action button is clicked, close the notification
     * trigger the action event from target element. you can wire this action event on target element.
     * e.g. when the notification messages come from a furo-entity-agent. you can use:
     * <furo-entity-agent @-notification-actionName="--notificationAction" ..
     */
    this.shadowRoot.getElementById('ui5-list').addEventListener('click', e => {
      const action = e.target.getAttribute('action');
      if (action) {
        e.target.notification.target._customAction(action);
        e.target.notification.remove();
      }
    });
  }

  /**
   * parse grpc status object and set the notification text according to the LocalizedMessage in status.
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
   * @param s
   */
  parseGrpcStatus(d) {
    const status = d.payload;

    // fallback, if no localized message was given
    this.text = d.text ? d.text : d.payload.message;

    // log developper message
    if (status.details && status.details.length > 0) {
      this.multilineText = [];
      // show localized messages first
      this.multilineText = this.multilineText.concat(
        status.details
          .filter(det => det['@type'].includes('LocalizedMessage'))
          .map(det => det.message),
      );

      // list descriptions of badRequest errors
      this.multilineText = this.multilineText.concat(
        status.details
          .filter(det => det['@type'].includes('google.rpc.BadRequest'))
          // eslint-disable-next-line array-callback-return
          .map(det => {
            if (det.field_violations) {
              return det.field_violations.map(violation => violation.description);
            }
            return {};
          })[0],
      );
      // todo: implement the other error types from https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto
      // Help, RequestInfo, ResourceInfo, PreconditionFailure
    }

    if (this.multilineText) {
      this.text = this.multilineText.join('\n\n');
    }

    this.heading = status.code ? status.code : '';
    this.priority = 'High';
    this.actions = [];
    this.show();
  }

  /**
   * parse notification message and set the ui5 notification properties like priority, actions, heading..
   * @param message
   */
  parseNotificationMessage(message) {
    this.priority = message.message_priority ? message.message_priority : 'low';
    this.heading = message.heading ? message.heading : null;
    this.text = message.message;
    this.actions = message.actions;

    this.show();
  }

  /**
   * show notification list item.
   * @param text
   */
  show() {
    const md = window.markdownit({
      html: false,
      linkify: true,
      typographer: true,
    });

    const notification = document.createElement('ui5-li-notification');
    notification.setAttribute('show-close', true);
    notification.setAttribute('heading', this.heading);
    notification.setAttribute('priority', this.priority);
    notification.target = this.target;
    notification.innerHTML = md.render(this.text);

    /**
     * add actions
     */
    if (this.actions && Array.isArray(this.actions)) {
      this.actions.forEach(a => {
        const action = document.createElement('ui5-notification-overflow-action');
        action.setAttribute('icon', a.icon);
        action.setAttribute('text', a.text);
        action.setAttribute('action', a.command);
        action.setAttribute('slot', 'actions');
        action.notification = notification;
        notification.appendChild(action);
      });
    }

    this.shadowRoot.getElementById('ui5-list').appendChild(notification);
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
       * the target dom object, which sends the notification event
       */
      target: {
        type: Object,
      },
      /**
       * the priority of the notification. `High`, `Low`,`Medium`, `None`
       */
      priority: {
        type: String,
      },
      /**
       * the custom actioins of the notification. [{icon: "accept", command: "accept", text: "accept"},…]
       */
      actions: {
        type: Array,
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
      Theme.getThemeForComponent('FuroUi5NotificationList') ||
      css`
        :host {
          display: block;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-list id="ui5-list" header-text="${this.headerText}"></ui5-list>
    `;
  }
}

customElements.define('furo-ui5-notification-list-display', FuroUi5NotificationListDisplay);
