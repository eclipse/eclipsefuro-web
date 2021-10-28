/* eslint-disable */
import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/simulate-error.js';
/**
 * `demo-furo-ui5-data-money-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataMoneyInput extends FBP(LitElement) {
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
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    // eslint-disable-next-line lit/attribute-value-entities
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-ui5-data-money-input</h2>
          <p>
            Bind the field from furo-data-object with
            <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
            defaults are coming from the furo-data-object specs.
          </p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
                >Load Demo Data</furo-ui5-button
              >

              <furo-ui5-data-money-input
                placeholder="Fill in a money amount"
                step="0.01"
                options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa"}]}'
                autofocus
                ƒ-bind-data="--entity(*.data.furo_data_money_input)"
                @-value-changed="--dataChanged"
              ></furo-ui5-data-money-input>

              <furo-ui5-data-money-input
                options='{"list": [ "CHF","EUR","USD" ]}'
                ƒ-bind-data="--entity(*.data.furo_data_money_input)"
                @-value-changed="--dataChanged"
              ></furo-ui5-data-money-input>

              <furo-ui5-data-money-input
                currencies="CHF,EUR,USD"
                ƒ-bind-data="--entity(*.data.furo_data_money_input)"
                @-value-changed="--dataChanged"
              ></furo-ui5-data-money-input>

              <produce-qp-data
                hidden
                ƒ-produce="--demoDataRequested"
                @-data="--qp"
                qpescaped="%7B%22exp%22%3A1%7D"
              ></produce-qp-data>
            </furo-form-layouter>

            <furo-pretty-json ƒ-inject-data="--dataChanged"></furo-pretty-json>

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
              ƒ-load="--hts"
              ƒ-bind-request-data="--entity"
              @-response="--response"
            >
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-money-input', DemoFuroUi5DataMoneyInput);
