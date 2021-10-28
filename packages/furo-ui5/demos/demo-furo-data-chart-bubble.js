import { LitElement, html, css } from 'lit';

// eslint-disable-next-line import/no-extraneous-dependencies

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
import '@furo/data';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/app/src/furo-card';

/**
 * `demo-furo-data-chart`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataChartBubble extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        height: 100%;
        padding-right: var(--spacing);
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>
              furo-card {
                margin: 10px;
              }
            </style>

            <furo-vertical-scroller>
              <furo-card header-text="Bubble">
                <furo-chart-display
                  chart-type="bubble"
                  data-labels
                  tooltip
                  toolbar
                  legend
                  fixed-height="350"
                >
                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.start.day, data.end.day, data.start.day"
                    category-field="data.description"
                    axis-label="End"
                    legend-label="Group A"
                  ></furo-data-chart-binder>

                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.end.day,data.start.day, data.start.day"
                    category-field="data.description"
                    legend-label="Group B"
                  ></furo-data-chart-binder>
                </furo-chart-display>

                <div slot="action">
                  <furo-button label="load data" primary @-click="--btnListClicked"></furo-button>
                  <furo-button
                    label="change loaded data"
                    primary
                    @-click="--changeDataClicked"
                  ></furo-button>
                </div>
              </furo-card>

              <furo-deep-link
                ƒ-trigger="--btnListClicked"
                service="ProjectService"
                @-hts-out="--hts"
              ></furo-deep-link>
              <furo-collection-agent
                service="ProjectService"
                ƒ-hts-in="--hts"
                ƒ-list="--changeDataClicked"
                list-on-hts-in
                @-response-hts-updated="--responseHts"
                @-response="--collectionResponse"
              >
              </furo-collection-agent>

              <furo-data-object
                type="project.ProjectCollection"
                ƒ-inject-raw="--collectionResponse"
                @-object-ready="--projectDAO"
              >
              </furo-data-object>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-chart-bubble', DemoFuroDataChartBubble);
