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
class DemoFuroDataChartMixed extends FBP(LitElement) {
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
              <furo-card header-text="Multiple Data Sources in one chart">
                <furo-chart-display
                  chart-type="line"
                  title-text="Title"
                  title-align="center"
                  no-data-text="Press load data"
                  fixed-height="350"
                  tooltip
                  grid
                  legend
                  toolbar
                  toolbar-download
                >
                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.cost_limit.units"
                    category-field="data.description"
                    chart-type="line"
                    legend-label="Unit"
                    chart-stroke-width="4"
                    chart-curve="straight"
                    axis-label="data.Unit._value"
                    axis-border
                    axis-tooltip
                  ></furo-data-chart-binder>

                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.cost_limit.units"
                    category-field="data.description"
                    legend-label="Cost"
                    chart-type="column"
                    chart-color="#FEA555"
                    chart-stroke-width="0"
                    axis
                    axis-label="Cost"
                    axis-label-opposite
                    axis-ticks
                    axis-ticks-color="#FEA555"
                    axis-border
                    axis-border-color="#FEA555"
                    axis-label-color="#FEA232"
                    axis-tooltip
                  ></furo-data-chart-binder>

                  <furo-data-chart-binder
                    ƒ-bind-data="--projectDAO(*.entities)"
                    data-field="data.start.day"
                    category-field="data.description"
                    chart-type="area"
                    legend-label="Day"
                    axis-label="Day"
                    axis-ticks
                    axis-border
                    axis-tooltip
                    chart-marker-size="1"
                    chart-color="#cd00fb"
                    chart-stroke-width="10"
                    chart-curve="smooth"
                    y-axis-ticks
                    y-axis-border
                    y-axis-border-color="#008FFB"
                    y-axis-label-color="#008FFB"
                    tooltip
                    opposite
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

window.customElements.define('demo-furo-data-chart-mixed', DemoFuroDataChartMixed);
