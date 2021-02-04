import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import 'markdown-it/dist/markdown-it.js';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import '@ui5/webcomponents/dist/List.js';
import { Theme } from '@furo/framework/src/theme.js';
import '@ui5/webcomponents/dist/MessageStrip';

/**
 * `furo-ui5-message-strip-display`
 * Lit element
 *
 *  best place the furo-ui5-message-strip-display on the main site. then you only need one furo-ui5-message-strip-display.
 *  you can also use more furo-ui5-message-strip for special needs. but You have to be sure the furo-ui5-message-strip-display can receive the message events.
 *
 *
 * @summary ui5 notification list
 * @customElement
 * @demo demo-furo-ui5-message-strip-display ui5 notification display demo
 */
class FuroUi5MessageStripDisplay extends FBP(LitElement) {
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
    this.parentNode.addEventListener('open-furo-ui5-message-strip-requested', e => {
      e.stopPropagation();
      this.target = e.detail;

      this.show(e.detail);
    });

    /**
     * listening the 'close' event from messageStrip. when the close button is clicked, close the messageStrip
     * trigger the close event from target element.
     */
    this.shadowRoot.addEventListener('close', e => {
      e.target.target._close();
      this.shadowRoot.removeChild(e.target);
    });
  }

  /**
   * show notification list item.
   * @param text
   */
  show(message) {
    const messagestrip = document.createElement('ui5-messagestrip');
    messagestrip.setAttribute('type', message.type ? message.type : 'Information');

    if (message.noCloseButton) {
      messagestrip.setAttribute('no-close-button', true);
    }

    if (message.noIcon) {
      messagestrip.setAttribute('no-icon', true);
    }

    if (message.size) {
      messagestrip.setAttribute('style', `width: ${message.size}`);
    }

    if (message.icon) {
      const icon = document.createElement('ui5-icon');
      icon.setAttribute('name', message.icon);
      icon.setAttribute('slot', 'icon');
      messagestrip.appendChild(icon);
    }

    messagestrip.target = this.target;
    messagestrip.innerHTML = message.message;

    this.shadowRoot.appendChild(messagestrip);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5MessageStripDisplay') ||
      css`
        :host {
          display: block;
        }

        ui5-messagestrip {
          margin: var(--spacing-xxs);
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html``;
  }
}

customElements.define('furo-ui5-message-strip-display', FuroUi5MessageStripDisplay);
