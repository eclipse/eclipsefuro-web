import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Card.js';

/**
 * `demo-furo-ui5-readonly-card`
 *
 * @Summary basic usage of furo-ui5-readonly-card
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5ReadonlyCard extends FBP(LitElement) {
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
      <h2>Demo furo-ui5-readonly-card</h2>
      <furo-demo-snippet>
        <template>
          <ui5-card heading="How to display data in a card." subheading="Secondary description">
            <div style="margin: var(--spacing)">
              <furo-form-layouter four>
                <furo-ui5-data-display
                  value-state="Critical"
                  ƒ-bind-data="--entity(*.data.description)"
                ></furo-ui5-data-display>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_money_input)"
                ></furo-ui5-data-display>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_color_input)"
                ></furo-ui5-data-display>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_date_input)"
                ></furo-ui5-data-display>
              </furo-form-layouter>

              <hr />
              <furo-form-layouter two>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
                ></furo-ui5-data-display>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
                ></furo-ui5-data-display>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_number_input)"
                ></furo-ui5-data-display>
                <furo-ui5-data-display
                  ƒ-bind-data="--entity(*.data.furo_data_date_input)"
                ></furo-ui5-data-display>
              </furo-form-layouter>
            </div>
            <furo-button-bar slot="action">
              <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
            </furo-button-bar>
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
            list-on-hts-in
            ƒ-search="--term"
            @-response="--refCol"
          >
          </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-readonly-card', DemoFuroUi5ReadonlyCard);
