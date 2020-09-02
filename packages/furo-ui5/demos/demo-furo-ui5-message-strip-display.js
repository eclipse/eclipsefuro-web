import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-banner.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/demos/produce-banner-data.js';

import '../src/lib/ui5-icons.js';

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
      Theme.getThemeForComponent('DemoFuroUi5MessageStripDisplay') ||
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
            <furo-vertical-scroller>
              <h2>Parse grpc status message</h2>
                <furo-ui5-message-strip
                ƒ-parse-grpc-status="--notification-grpc-status"
                @-message-strip-closed="--closed"
                ></furo-ui5-message-strip>
              <produce-banner-data
                @-response-error="--notification-grpc-status"
            @-notification-closed="--notificationAction"
                label="Generate GRPC ERROR"
              ></produce-banner-data>
                            <h2>trigger the wire to show message strip </h2>

                <furo-ui5-message-strip
                ƒ-show="--show"
                size="200px"
                message="MessageStrip with size"
                @-message-strip-closed="--closed"
                ></furo-ui5-message-strip>

              <furo-button label="show" @-click="--show"></furo-button>

                 <h2>Display the payload by notification custom action </h2>
            <furo-pretty-json ƒ-inject-data="--closed"></furo-pretty-json>
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

customElements.define('demo-furo-ui5-message-strip-display', DemoFuroUi5MessageStripDisplay);
