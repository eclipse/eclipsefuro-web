import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';

import '@ui5/webcomponents/dist/Card.js';

/**
 * `demo-furo-ui5-form-field-container`
 *
 * @Summary basic usage of furo-ui5-form-field-container
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5FormFieldContainer extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5FormFieldContainer') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
          --_ui5_input_width: 24px;
        }

        :host([hidden]) {
          display: none;
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
      <h2>Demo furo-ui5-form-field-container</h2>
      <furo-demo-snippet>
        <template>
          <ui5-card heading="How to build a form.">
            <div style="margin: var(--spacing)">
              <furo-form-layouter one>
                <furo-ui5-data-text-input-labeled
                  ƒ-bind-data="--entity(*.data.display_name)"
                ></furo-ui5-data-text-input-labeled>

                <furo-ui5-data-text-input-labeled
                  ƒ-bind-data="--entity(*.data.description)"
                ></furo-ui5-data-text-input-labeled>

                <furo-ui5-data-text-input-labeled
                  ƒ-bind-data="--entity(*.data.furo_data_text_input)"
                ></furo-ui5-data-text-input-labeled>

                <furo-ui5-data-number-input-labeled
                  ƒ-bind-data="--entity(*.data.furo_data_number_input)"
                ></furo-ui5-data-number-input-labeled>

                <furo-ui5-data-password-input-labeled
                  ƒ-bind-data="--entity(*.data.furo_data_number_input)"
                ></furo-ui5-data-password-input-labeled>

                <furo-ui5-form-field-container>
                  <ui5-label label slot="label" for="Custom" show-colon
                    >Currency / Units (custom)
                  </ui5-label>
                  <furo-horizontal-flex id="Custom" content space>
                    <furo-ui5-data-text-input
                      flex
                      ƒ-bind-data="--entity(*.data.furo_data_money_input.currency_code)"
                    ></furo-ui5-data-text-input>
                    <furo-ui5-data-number-input
                      flex
                      ƒ-bind-data="--entity(*.data.furo_data_money_input.units)"
                    ></furo-ui5-data-number-input>
                  </furo-horizontal-flex>
                </furo-ui5-form-field-container>

                <furo-ui5-data-date-picker-labeled
                  ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
                ></furo-ui5-data-date-picker-labeled>
                <furo-ui5-data-date-picker-labeled
                  ƒ-bind-data="--entity(*.data.furo_data_date_input)"
                ></furo-ui5-data-date-picker-labeled>
                <furo-ui5-data-reference-search-labeled
                  @-search="--term"
                  ƒ-bind-data="--entityTaskReady(*.owner)"
                  ƒ-collection-in="--refCol"
                ></furo-ui5-data-reference-search-labeled>

                <furo-ui5-data-collection-dropdown-labeled
                  ƒ-bind-data="--entityTaskReady(*.owner)"
                  ƒ-inject-list="--refCol(*.entities)"
                ></furo-ui5-data-collection-dropdown-labeled>

                <furo-ui5-form-field-container>
                  <ui5-label label slot="label" for="Custom" show-colon
                    >Use it for small option lists
                  </ui5-label>
                  <furo-ui5-data-segmented-button
                    content
                    ƒ-bind-data="--entityTaskReady(*.owner)"
                    ƒ-inject-list="--refCol(*.entities)"
                  ></furo-ui5-data-segmented-button>
                </furo-ui5-form-field-container>
              </furo-form-layouter>

              <furo-form-layouter>
                <div>
                  <p>New form field section</p>
                  <furo-ui5-data-textarea-input-labeled
                    ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
                  ></furo-ui5-data-textarea-input-labeled>
                </div>
              </furo-form-layouter>

              <furo-button-bar slot="action">
                <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
              </furo-button-bar>
            </div>
          </ui5-card>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>
          <furo-deep-link
            service="ExperimentService"
            @-hts-out="--hts"
            ƒ-qp-in="--qp"
          ></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            load-on-hts-in
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>

          <furo-data-object type="task.Task" @-object-ready="--entityTaskReady"></furo-data-object>
          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--entityTaskReady(*.owner.link._value)"
            ƒ-search="--term"
            @-response="--refCol"
          >
          </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-form-field-container', DemoFuroUi5FormFieldContainer);
