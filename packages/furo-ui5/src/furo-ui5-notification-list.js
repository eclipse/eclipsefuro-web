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
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * @summary ui5 notification list
 * @customElement
 * @demo demo-furo-ui5-notification-list banner display demo
 */
class FuroUi5NotificationList extends FBP(LitElement) {
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
     */
    this.parentNode.addEventListener('notification-grpc-status', e => {
      e.stopPropagation();
      this.parseGrpcStatus(e.detail);
    });

    /**
     * listening the 'item-close' event from notification-list-item
     */
    this.shadowRoot.getElementById('ui5-list').addEventListener('item-close', e => {
      e.detail.item.remove();
    });
  }

  /**
   * parse grpc status object and set the label according to the LocalizedMessage in status
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto
   * @param s
   */
  parseGrpcStatus(status) {
    // fallback, if no localized message was given
    let text = status.message;
    // log developper message
    if (status.details && status.details.length > 0) {
      const textTmp = status.details
        .filter(det => det['@type'].includes('LocalizedMessage'))
        .map(det => det.message);

      if (textTmp && textTmp.length) {
        text = textTmp.join('\n\n');
      }
    }
    this.text = text;
    this.code = status.code ? status.code : '';
    this.show();
  }

  /**
   * show notification list item
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
    notification.setAttribute('heading', this.code);
    notification.setAttribute('priority', 'High');
    notification.innerHTML = md.render(this.text);
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

customElements.define('furo-ui5-notification-list', FuroUi5NotificationList);
