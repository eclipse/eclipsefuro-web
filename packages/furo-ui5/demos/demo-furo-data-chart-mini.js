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
import '@furo/util/src/furo-pretty-json.js';

/**
 * `demo-furo-data-chart`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataChartMini extends FBP(LitElement) {
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
                width: 200px;
                height: 250px;
                float: left;
              }
            </style>

            <furo-vertical-scroller @-data-point-clicked="--markerData">
              <furo-horizontal-flex>
                <div flex>
                  <furo-card header-text="minibar :-)">
                    <furo-chart-display chart-type="bar" stacked fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="mixed">
                    <furo-chart-display chart-type="line" stacked fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        chart-type="area"
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.start.month"
                        legend-label="Cost"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                      <furo-data-chart-binder
                        chart-type="column"
                        legend-label="Other"
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.start.month"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                      <furo-data-chart-binder
                        chart-stroke-width="4"
                        chart-curve="smooth"
                        legend-label="Third"
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.start.day"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="minline">
                    <furo-chart-display chart-type="line" fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>
                  <furo-card header-text="radar">
                    <furo-chart-display chart-type="radar" sparkline fixed-height="170">
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="radialBar">
                    <furo-chart-display chart-type="radialBar" fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        chart-stroke-width="6"
                        data-field="data.end.day"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="bar horizontal">
                    <furo-chart-display
                      chart-type="bar"
                      fixed-height="170"
                      plot-horizontal
                      sparkline
                    >
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="pie">
                    <furo-chart-display chart-type="pie" tooltip fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="donut">
                    <furo-chart-display chart-type="donut" tooltip fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="parallel bar">
                    <furo-chart-display chart-type="bar" fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                        legend-label="Cost"
                      ></furo-data-chart-binder>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                        legend-label="Secondary"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="stacked bar">
                    <furo-chart-display chart-type="bar" stacked fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                        legend-label="Cost"
                      ></furo-data-chart-binder>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                        legend-label="Secondary"
                      ></furo-data-chart-binder>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.start.day"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="polarArea">
                    <furo-chart-display chart-type="polarArea" tooltip fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="area  colored">
                    <furo-chart-display chart-type="area" fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        chart-stroke-width="4"
                        chart-color="#FEA234"
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <furo-card header-text="area">
                    <furo-chart-display chart-type="area" fixed-height="170" sparkline>
                      <furo-data-chart-binder
                        ƒ-bind-data="--projectDAO(*.entities)"
                        data-field="data.cost_limit.units"
                        category-field="data.description"
                      ></furo-data-chart-binder>
                    </furo-chart-display>
                  </furo-card>

                  <br clear="all" />

                  <furo-button label="load data" primary @-click="--btnListClicked"></furo-button>
                  <furo-button
                    label="change loaded data"
                    primary
                    @-click="--changeDataClicked"
                  ></furo-button>
                </div>

                <furo-pretty-json
                  style="width: 300px"
                  ƒ-inject-data="--markerData(*._value)"
                ></furo-pretty-json>
              </furo-horizontal-flex>
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

window.customElements.define('demo-furo-data-chart-mini', DemoFuroDataChartMini);
