import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import 'markdown-it/dist/markdown-it.js';
import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import '@ui5/webcomponents/dist/List.js';


/**
 * `furo-ui5-notification-group`
 * Lit element
 *
 *  best place the furo-ui5-notification-group on the main site. then you only need one furo-ui5-notification-group.
 *  you can also use more furo-ui5-notification-group for special needs. but You have to be sure the furo-ui5-notification-group can receive the notification events.
 *
 *
 * @summary ui5 notification group display
 * @customElement
 * @demo demo-furo-ui5-notification-group-display Basic Usage
 */
export class FuroUi5NotificationGroupDisplay extends FBP(LitElement) {
  constructor() {
    super();
    this.headerText = '';
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
    this.parentNode.addEventListener('open-furo-ui5-notification-group-requested', e => {
      e.stopPropagation();
      this.target = e.detail;

      if (e.detail.payload && Array.isArray(e.detail.payload)) {
        this._groupNotifications(e.detail.payload);
      }
    });

    /**
     * listening the `item-close` event from notification-list-item. when the close button is clicked, close the notification and
     * call the _close function on the target element (furo-ui5-notification).
     */
    this.shadowRoot.getElementById('ui5-list').addEventListener('item-close', e => {
      e.detail.item.target._close(e.detail.item.message);
      e.detail.item.remove();
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
   * group the notification messages
   * the notification message should be an array of the following object signature:
   * {
   *  "id": 1,
   *  "display_name": "",
   *  "heading": "heading 1",
   *  "message_priority": "High",
   *  "category": "warning",  // this attribute will be also used as group heading
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
   *
   * @param c
   * @private
   */
  _groupNotifications(c) {
    const obj = {};
    c.forEach(n => {
      if (n.category) {
        if (!obj[n.category]) {
          obj[n.category] = [];
        }
        obj[n.category].push(n);
      }
    });
    this._show(obj);
  }

  /**
   * show notification list item.
   *
   * @param groups
   * @private
   */
  _show(groups) {
    const md = window.markdownit({
      html: false,
      linkify: true,
      typographer: true,
    });

    Object.keys(groups).forEach(key => {
      const notificationGroup = document.createElement('ui5-li-notification-group');
      let categoryPriority;
      groups[key].forEach(n => {
        if (!categoryPriority) {
          categoryPriority = n.category_priority;
        }

        const notification = document.createElement('ui5-li-notification');

        notification.setAttribute('heading', n.heading);
        notification.setAttribute('priority', n.message_priority);
        notification.target = this.target;
        notification.showClose = this.showClose;
        notification.innerHTML = md.render(n.message);
        // save the initial message for the later usage
        notification.message = n;

        /**
         * add actions
         */
        if (n.actions && Array.isArray(n.actions)) {
          n.actions.forEach(a => {
            const action = document.createElement('ui5-notification-action');
            action.setAttribute('icon', a.icon);
            action.setAttribute('text', a.text);
            action.setAttribute('action', a.command);
            action.setAttribute('slot', 'actions');
            action.notification = notification;
            notification.appendChild(action);
          });
        }

        notificationGroup.appendChild(notification);
      });

      notificationGroup.setAttribute('priority', categoryPriority || 'Low');
      notificationGroup.setAttribute('heading', key);
      notificationGroup.showClose = this.showClose;
      notificationGroup.showCounter = this.showCounter;
      notificationGroup.collapsed = this.collapsed || true;
      notificationGroup.target = this.target;
      // save the initial message for the later usage
      notificationGroup.message = groups[key];

      this.shadowRoot.getElementById('ui5-list').appendChild(notificationGroup);
    });
  }

  /**
   * clear all notifications
   */
  clearAll() {
    this.shadowRoot.getElementById('ui5-list').innerHTML = '';
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
       * Defines if the group is collapsed or expanded.
       */
      collapsed: {
        type: Boolean,
      },
      /**
       * Defines if the items counter would be displayed.
       */
      showCounter: {
        type: Boolean,
        attribute: 'show-counter',
      },
      /**
       * Defines if the close button would be displayed.
       */
      showClose: {
        type: Boolean,
        attribute: 'show-close',
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
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-list id="ui5-list" header-text="${this.headerText}"></ui5-list>
    `;
  }
}

customElements.define('furo-ui5-notification-group-display', FuroUi5NotificationGroupDisplay);
