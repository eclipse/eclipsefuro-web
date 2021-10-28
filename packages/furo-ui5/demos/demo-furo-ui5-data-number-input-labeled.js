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
import '@furo/input/src/furo-button.js';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents-icons/dist/filter.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/accept.js';

/**
 * `demo-furo-ui5-data-number-input-labeled`
 *
 * @Summary basic usage of furo-ui5-data-number-input-labeled
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataNumberInputLabeled extends FBP(LitElement) {
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
          --furo-form-layouter-column-gap: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 100%;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 1em;
        }

        .width-4\\/12 {
          grid-column: span 4;
          justify-self: end;
          align-self: center;
        }

        .width-8\\/12 {
          grid-column: span 8;
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
      <h2>
        Basic usage of furo-ui5-data-number-input-labeled
      </h2>
      <p>If you want to simply use a data bound text field with automatic label handling.</p>
      <p>The following markup overwrites are possible:</p>
      <ol>
        <li>set a custom icon</li>
        <li>disabled</li>
        <li>readonly</li>
        <li>required</li>
      </ol>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter two>
            <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data</furo-ui5-button
            >
            <p full>
              The title is set in the markup and will show up as hint. Custom icons and required
              have also been set.
            </p>
            <furo-ui5-data-number-input-labeled
              required
              title="The title attribute specifies extra information about an element."
              icon="filter"
              ƒ-bind-data="--entity(*.data.furo_data_number_input)"
            >
            </furo-ui5-data-number-input-labeled>

            <furo-ui5-data-number-input-labeled
              title="The title attribute specifies extra information about an element."
              icon="edit"
              ƒ-bind-data="--entity(*.data.furo_data_range_input)"
            >
            </furo-ui5-data-number-input-labeled>
          </furo-form-layouter>

          <furo-form-layouter two>
            <p full>With readonly overwrite:</p>
            <furo-ui5-data-number-input-labeled
              readonly
              icon="filter"
              title="READONLY. The title attribute specifies extra information about an element."
              ƒ-bind-data="--entity(*.data.furo_data_number_input)"
            >
            </furo-ui5-data-number-input-labeled>

            <furo-ui5-data-number-input-labeled
              readonly
              icon="edit"
              title="READONLY. The title attribute specifies extra information about an element."
              ƒ-bind-data="--entity(*.data.furo_data_range_input)"
            >
            </furo-ui5-data-number-input-labeled>
          </furo-form-layouter>

          <furo-form-layouter two>
            <p full>With disabled overwrite:</p>
            <furo-ui5-data-number-input-labeled
              disabled
              icon="filter"
              title="DISABLED. The title attribute specifies extra information about an element."
              ƒ-bind-data="--entity(*.data.furo_data_number_input)"
            >
            </furo-ui5-data-number-input-labeled>

            <furo-ui5-data-number-input-labeled
              disabled
              icon="edit"
              title="DISABLED. The title attribute specifies extra information about an element."
              ƒ-bind-data="--entity(*.data.furo_data_range_input)"
            >
            </furo-ui5-data-number-input-labeled>
          </furo-form-layouter>

          <produce-qp-data
            hidden
            ƒ-produce="--demoDataRequested"
            @-data="--qp"
            qpescaped="%7B%22exp%22%3A1%7D"
          ></produce-qp-data>

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
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define(
  'demo-furo-ui5-data-number-input-labeled',
  DemoFuroUi5DataNumberInputLabeled,
);
