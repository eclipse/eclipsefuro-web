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
class DemoFuroUi5NotificationList extends FBP(LitElement) {
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
            <furo-vertical-scroller>
              <furo-ui5-notification-list autofocus></furo-ui5-notification-list>

              <h2>Parse grpc status message</h2>

              <produce-banner-data
                @-response-error="^^notification-grpc-status"
            @-notification-closed="--notificationAction"
                label="Generate GRPC ERROR"
              ></produce-banner-data>

                            <h2>Parse notification messages </h2>

               <produce-qp-data @-data="--qp" qpescaped="%7B%22tsk%22%3A1%7D"></produce-qp-data>
                 <h2>Display the Action Wire </h2>
          <furo-text-input
          condensed
          ƒ-set-value="--notificationAction"
          ></furo-text-input>
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
            @-notification-closed="--notificationAction"
            @-notification-reject="--notificationAction"
            @-notification-accept="--notificationAction"
            @-response="--response,^^notification-message(*.notifications)"
          >
            <furo-pretty-json ƒ-inject-data="--notificationAction"></furo-pretty-json>



              <hr />
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

customElements.define('demo-furo-ui5-notification-list', DemoFuroUi5NotificationList);
