import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import '@ui5/webcomponents-icons/dist/message-error.js';
import '@ui5/webcomponents-icons/dist/accept.js';

import './helper/notification-producer.js';

/**
 * `demo-furo-ui5-notification-group-display`
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroUi5NotificationGroupDisplay extends FBP(LitElement) {
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
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   *@private
   */
  static get properties() {
    return {};
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // eslint-disable-next-line lit/no-invalid-html
    return html`

      <furo-vertical-flex>
        <div>
          <h2>Demo furo-ui5-notification-group-display</h2>
          <p>The furo-ui5-notification-group-display is a special type of list item, that unlike others can group items within self. Use it together with the furo-ui5-notification component.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <ui5-shellbar primary-title="Notifications"
                          secondary-title=""
                          show-notifications
            ></ui5-shellbar>

            <!-- Notification Handling, display and creator components-->
            <furo-ui5-notification-group-display ƒ-clear-all="--clearRequested"
                                                 show-counter></furo-ui5-notification-group-display>

            <furo-ui5-notification ƒ-inject-notification-collection="--notificationReady"></furo-ui5-notification>

            </br>

            <furo-ui5-button-bar>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-ui5-button @-click="--notification" design="Emphasized">show notification messages</furo-ui5-button>
              <furo-ui5-button @-click="--clearRequested">clear messages</furo-ui5-button>
            </furo-ui5-button-bar>

            <notification-producer ƒ-get-notifications="--notification"
                                   @-notifications-ready="--notificationReady"></notification-producer>

          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

customElements.define(
  'demo-furo-ui5-notification-group-display',
  DemoFuroUi5NotificationGroupDisplay,
);
