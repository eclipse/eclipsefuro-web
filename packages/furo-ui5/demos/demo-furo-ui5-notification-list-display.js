import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import '@ui5/webcomponents/dist/Popover.js';
import '@ui5/webcomponents-icons/dist/message-error.js';

import './helper/notification-producer.js';

/**
 * `demo-furo-ui5-notification-list`
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroUi5NotificationListDisplay extends FBP(LitElement) {
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
          <h2>Demo furo-ui5-notification-list</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <ui5-shellbar @-notifications-click="--notificationsRequested(*.detail.targetRef)"
                          primary-title="gRPC Status Notifications"
                          secondary-title=""
                          ƒ-.notifications-count="--notificationCounterUpdated"
                          show-notifications
            ></ui5-shellbar>

            <ui5-popover ƒ-show-at="--notificationsRequested" placement-type="bottom">
              <div class="popover-content">
                <!-- gRPC Error Handling, display and creator components-->
                <furo-ui5-notification-list-display header-text="Notifications &amp; Errors"
                                                    ƒ-clear-all="--clearRequested"
                                                    group-title-message="Localized Messages"
                                                    group-title-help="Helpful information"
                                                    group-title-bad-request="Field Violations"
                                                    @-notification-counter-update="--notificationCounterUpdated"></furo-ui5-notification-list-display>

                <furo-ui5-notification ƒ-parse-grpc-status="--grpcReady"></furo-ui5-notification>
              </div>
              <div slot="footer" class="popover-footer"></div>
            </ui5-popover>

            </br>

            <furo-ui5-button-bar>
              <furo-ui5-button design="Negative"
                               @-click="--notificationsRequested(*.target)"
              >Errors</furo-ui5-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-ui5-button @-click="--grpc" design="Emphasized">show google rpc status messages</furo-ui5-button>
              <furo-ui5-button @-click="--clearRequested">clear messages</furo-ui5-button>

            </furo-ui5-button-bar>

            <p>The Status type defines a logical error model that is suitable for
              different programming environments, including REST APIs and RPC APIs. It is
              used by [gRPC](https://github.com/grpc). Each \`Status\` message contains
              three pieces of data: error code, error message, and error details.</p>
            <a href="https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto">github.com/googleapis/...</a>


            <notification-producer ƒ-get-grpc-status="--grpc"
                                   @-grpc-status-ready="--grpcReady"></notification-producer>


          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

customElements.define(
  'demo-furo-ui5-notification-list-display',
  DemoFuroUi5NotificationListDisplay,
);
