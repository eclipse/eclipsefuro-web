import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Icon.js';

/**
 * `demo-furo-ui5-busyindicator`
 *
 * @Summary basic usage of furo-ui5-busyindicator
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5Busyindicator extends FBP(LitElement) {
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
          --furo-form-layouter-row-gap: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
        }

        div.grid {
          padding: var(--spacing) var(--spacing-l);
          display: grid;
          grid-row-gap: var(--spacing);
          grid-column-gap: var(--spacing);
          grid-template-columns: 37.5% auto 37.5%;
        }

        .content {
          padding: var(--spacing-xs) var(--spacing);
        }

        furo-demo-snippet {
          height: 100%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo furo-ui5-busyindicator</h2>
      <furo-demo-snippet>
        <template>
          <div class="grid">
            <furo-ui5-card heading="Usage of Busy Indicator with cards">
              <furo-ui5-busyindicator
                size="Small"
                slot="action"
                ƒ-activate="--activityStarted"
                ƒ-deactivate="--activityStopped"
              ></furo-ui5-busyindicator>
              <div slot="content" style="padding: var(--spacing-xs) var(--spacing);">
                <p>
                  If you use furo-api-fetch for network requests via FETCH API, then use the custom
                  events to start/stop the activity. E.g. request-started, response, response-error
                </p>
                <furo-ui5-button @-click="--activityStarted">start Activity</furo-ui5-button>
                <furo-ui5-button design="Negative" @-click="--activityStopped"
                  >stop Activity</furo-ui5-button
                >
              </div>
            </furo-ui5-card>
          </div>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-busyindicator', DemoFuroUi5Busyindicator);
