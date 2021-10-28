import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-banner.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
import '@ui5/webcomponents/dist/Title.js';
import './helper/notification-producer.js';

/**
 * `demo-furo-ui5-notification-list`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroUi5MessageStripDisplay extends FBP(LitElement) {
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
          <h2>Demo furo-ui5-message-strip-display</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
           <furo-ui5-message-strip-display autofocus></furo-ui5-message-strip-display>
            </br>

            <furo-ui5-message-strip
              message="Static message from attribute &apos; message &apos;"
              ƒ-show-error="--staticError, --errorReady"
              ƒ-show-information="--staticInformation, --informationReady"
              ƒ-show-warning="--staticWarning, --warningReady"
              ƒ-show-success="--staticSuccess, --successReady"
              ƒ-show-grpc-localized-message="--grpcReady"
              @-message-strip-closed="--closed"
            ></furo-ui5-message-strip>

            <h4>Message strips with static message</h4>

            <furo-ui5-button-bar>
              <furo-ui5-button @-click="--staticError" design="Negative">show static error message</furo-ui5-button>
              <furo-ui5-button @-click="--staticInformation" design="Informative">show static information message</furo-ui5-button>
              <furo-ui5-button @-click="--staticWarning" design="Attention">show static warning message</furo-ui5-button>
              <furo-ui5-button @-click="--staticSuccess" design="Positive">show static success message</furo-ui5-button>
            </furo-ui5-button-bar>

            <h4>Message strips with dynamic message</h4>

            <notification-producer ƒ-get-information-message="--information"
                                   @-information-msg-ready="--informationReady"
                                   ƒ-get-error-message="--error"
                                   @-error-msg-ready="--errorReady"
                                   ƒ-get-success-message="--success"
                                   @-success-msg-ready="--successReady"
                                   ƒ-get-warning-message="--warning"
                                   @-warning-msg-ready="--warningReady"
                                   ƒ-get-grpc-status="--grpc"
                                   @-grpc-status-ready="--grpcReady"></notification-producer>

            <furo-ui5-button-bar>
              <furo-ui5-button @-click="--error" design="Negative">show error message</furo-ui5-button>
              <furo-ui5-button @-click="--information" design="Informative">show information message</furo-ui5-button>
              <furo-ui5-button @-click="--warning" design="Attention">show warning message</furo-ui5-button>
              <furo-ui5-button @-click="--success" design="Positive">show success message</furo-ui5-button>
            </furo-ui5-button-bar>

            <h4>Message strips with gRPC status</h4>
            <furo-ui5-button-bar>
              <furo-ui5-button @-click="--grpc" design="Emphasized">show grpc localized messages</furo-ui5-button>
            </furo-ui5-button-bar>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

customElements.define('demo-furo-ui5-message-strip-display', DemoFuroUi5MessageStripDisplay);
