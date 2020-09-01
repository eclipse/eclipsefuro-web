import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-banner.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/demos/produce-banner-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-text-input.js';

/**
 * `demo-furo-ui5-notification-list`
 * Lit element
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
      Theme.getThemeForComponent('DemoFuroUi5NotificationList') ||
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
           <furo-ui5-notification-list-display autofocus></furo-ui5-notification-list-display>

            <furo-vertical-scroller>

              <h2>Parse grpc status message</h2>
                <furo-ui5-notification
                ƒ-parse-grpc-status="--notification-grpc-status"
                ƒ-inject-notification-collection="--response(*.notifications)"
                @-notification-closed="--notificationAction"
                @-notification-custom-action="--notificationAction"
                @-notification-custom-action-reject="--notificationAction"
                ></furo-ui5-notification>
              <produce-banner-data
                @-response-error="--notification-grpc-status"
            @-notification-closed="--notificationAction"
                label="Generate GRPC ERROR"
              ></produce-banner-data>

                            <h2>Parse notification messages </h2>

               <produce-qp-data @-data="--qp" qpescaped="%7B%22tsk%22%3A1%7D"></produce-qp-data>
                 <h2>Display the payload by notification custom action </h2>
            <furo-pretty-json ƒ-inject-data="--notificationAction"></furo-pretty-json>

          <furo-data-object
            type="task.Task"
            @-object-ready="--entity"
            ƒ-inject-raw="--response(*.data)"
          ></furo-data-object>
          <furo-deep-link
            service="TaskService"
            @-hts-out="--hts"
            ƒ-qp-in="--qp"
          ></furo-deep-link>
          <furo-entity-agent
            service="TaskService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
              <hr />
            </furo-vertical-scroller>
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
