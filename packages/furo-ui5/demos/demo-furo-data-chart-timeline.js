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
class DemoFuroDataChartTimeline extends FBP(LitElement) {
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
              <furo-card header-text="Timeline aka rangeBar">
                <furo-chart-display
                  chart-type="rangeBar"
                  title-text="Just numbers"
                  title-align="center"
                  no-data-text="Loading..."
                  fixed-height="300"
                  zebra="#f3f4f5, #fff"
                  xaxis-title="Duration"
                  plot-horizontal
                  tooltip
                  legend
                  grid
                >
                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.start.day, data.end.day"
                    category-field="data.description"
                    axis-label="Project"
                  ></furo-data-chart-binder>
                </furo-chart-display>
                <furo-chart-display
                  chart-type="rangeBar"
                  title-text="With dates"
                  title-align="center"
                  no-data-text="Loading..."
                  fixed-height="300"
                  xaxis-title="Duration"
                  plot-horizontal
                  tooltip
                  legend
                  data-labels
                  xaxis-datetime
                >
                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.start, data.end"
                    category-field="data.description"
                    axis-label="Project"
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

window.customElements.define('demo-furo-data-chart-timeline', DemoFuroDataChartTimeline);
