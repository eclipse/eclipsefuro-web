import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/util';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-ui/src/furo-data-table.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/util/src/furo-pretty-json.js';
import '@furo/input/src/furo-text-input.js';
import '@furo/input/src/furo-button.js';
import './helper/demo-project-filter-form.js';

/**
 * `demo-furo-sortby-container`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroSortbyContainer extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroSortbyContainer') ||
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
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo demo-furo-sortby-container</h2>
          <p>Basic usage of the furo sort_by pattern.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-card>
              <furo-data-table
                type="experiment.Experiment"
                single-selection
                fields="display_name, furo_data_number_input, furo_data_color_input, furo_data_money_input"
                sortable-fields="display_name, furo_data_number_input"
                @-ascending="--asc"
                @-descending="--desc"
              ></furo-data-table>

              <furo-text-input
                style="width: 100%"
                label="sort_by Query"
                ƒ-set-value="--sortUpdated"
              ></furo-text-input>

              <furo-button label="clear Query" @-click="--clearSortBy"></furo-button>
            </furo-card>

            <furo-sortby-container
              ƒ-add-ascending-field="--asc"
              ƒ-add-descending-field="--desc"
              ƒ-clear="--clearSortBy"
              @-sortby-condition-updated="--sortUpdated"
            ></furo-sortby-container>

            <furo-collection-agent
              service="ExperimentService"
              ƒ-set-order-by="--sortUpdated"
            ></furo-collection-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-sortby-container', DemoFuroSortbyContainer);
