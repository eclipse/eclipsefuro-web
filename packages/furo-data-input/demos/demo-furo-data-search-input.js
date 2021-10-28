import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';
import './helper/simulate-error.js';

/**
 * `demo-furo-data-search-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroSearchTextInput extends FBP(LitElement) {
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
        <h2>Demo furo-data-search-input</h2>
        <p>
          Bind the field from furo-data-object with
          <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
          defaults are comming from the furo-data-object specs.
        </p>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter four>
              <furo-data-search-input
                trailing-icon="dashboard"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
              ></furo-data-search-input>
              <furo-data-search-input
                leading-icon="dashboard"
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                min="4"
                max="7"
              ></furo-data-search-input>
              <furo-data-search-input
                readonly
                ƒ-bind-data="--entity(*.furo_data_text_input)"
              ></furo-data-search-input>
              <furo-data-search-input
                autofocus
                ƒ-bind-data="--entity(*.furo_data_text_input)"
              ></furo-data-search-input>
              <furo-data-search-input></furo-data-search-input>
              <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
              <simulate-error
                ƒ-bind-data="--entity"
                error='{"field":"furo_data_text_input","description":"pattern not match"}'
              ></simulate-error>
            </furo-form-layouter>
            <furo-data-object
              type="experiment.Experiment"
              @-object-ready="--entity"
              ƒ-inject-raw="--response(*.data)"
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

            <p>
              furo-data-searc-input with google wrapper or fat bindings.
            </p>
            <furo-form-layouter two>
              <furo-data-search-input
                autofocus
                ƒ-bind-data="--entityU(*.data.fat_string)"
              ></furo-data-search-input>
              <furo-data-search-input
                autofocus
                rows="6"
                condensed
                ƒ-bind-data="--entityU(*.data.fat_string)"
              ></furo-data-search-input>
            </furo-form-layouter>
            <fetch-universal-json
              file="/mockdata/tests/universalfieldnodebinder/fat-universal.json"
              @-data-loaded="--mockdata"
            ></fetch-universal-json>
            <fetch-universal-json
              file="/mockdata/tests/universalfieldnodebinder/fat-universal-demo.json"
              @-data-loaded="--mockdata"
            ></fetch-universal-json>
            <fetch-universal-json
              file="/mockdata/tests/universalfieldnodebinder/fat-universal-unset-label.json"
              @-data-loaded="--mockdata"
            ></fetch-universal-json>
            <fetch-universal-json
              file="/mockdata/tests/universalfieldnodebinder/fat-universal-with-meta.json"
              @-data-loaded="--mockdata"
            ></fetch-universal-json>

            <fetch-universal-json @-data-loaded="--mockdata"></fetch-universal-json>
            <furo-data-object
              type="universaltest.UniversaltestEntity"
              @-object-ready="--entityU"
              ƒ-inject-raw="--mockdata"
            ></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-search-input', DemoFuroSearchTextInput);
