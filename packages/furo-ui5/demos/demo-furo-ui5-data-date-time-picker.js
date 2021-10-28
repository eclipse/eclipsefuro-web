import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';

/**
 * `demo-furo-ui5-data-date-time-picker`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataDateTimePicker extends FBP(LitElement) {
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
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-ui5-data-date-time-picker</h2>
          <p>Basic usage of a bound date time picker.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form-layouter four>
                <furo-ui5-data-date-time-picker
                  format-pattern="dd.MM.yyyy hh:mm aa"
                  max-date="2022-02-02"
                  ƒ-bind-data="--entity(*.data.google_timestamp)"
                ></furo-ui5-data-date-time-picker>
                <furo-ui5-data-date-time-picker
                  value-state="Error"
                  ƒ-bind-data="--entity(*.data.google_timestamp)"
                ></furo-ui5-data-date-time-picker>
              </furo-form-layouter>
              <furo-button-bar>
                <fetch-universal-json
                  file="/mockdata/ui5/demos/experiment-get.json"
                  @-data-loaded="--mockdata"
                ></fetch-universal-json>
              </furo-button-bar>

              <furo-pretty-json ƒ-inject-data="--data(*._value)"></furo-pretty-json>

              <furo-data-object
                type="experiment.ExperimentEntity"
                @-object-ready="--entity"
                @-data-changed="--data"
                ƒ-inject-raw="--mockdata"
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
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-date-time-picker', DemoFuroUi5DataDateTimePicker);
