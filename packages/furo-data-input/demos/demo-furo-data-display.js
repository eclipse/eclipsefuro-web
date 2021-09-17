import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';

/**
 * `demo-furo-data-display`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataDisplay extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataDisplay') ||
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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>
              furo-data-display {
                --display-label-color: #8c8c8c;
              }
            </style>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <furo-data-display
                  trailing-icon="dashboard"
                  label="hallo ustom hint"
                  required
                  ƒ-bind-data="--entity(*.furo_data_text_input)"
                ></furo-data-display>
                <furo-data-display
                  leading-icon="dashboard"
                  ƒ-bind-data="--entity(*.furo_data_text_input)"
                  min="4"
                  max="7"
                ></furo-data-display>
                <furo-data-display
                  readonly
                  ƒ-bind-data="--entity(*.furo_data_number_input)"
                ></furo-data-display>
                <furo-data-display
                  noborder
                  ƒ-bind-data="--entity(*.furo_data_date_input)"
                ></furo-data-display>
                <furo-data-display
                  ƒ-bind-data="--entity(*.furo_data_date_input_google)"
                ></furo-data-display>
                <furo-data-display
                  ƒ-bind-data="--entity(*.furo_data_date_input)"
                ></furo-data-display>
                <furo-data-display
                  ƒ-bind-data="--entity(*.furo_data_date_input_google)"
                ></furo-data-display>
                <furo-data-date-input
                  ƒ-bind-data="--entity(*.furo_data_date_input_google)"
                ></furo-data-date-input>
                <furo-data-display
                  displayfield="year"
                  ƒ-bind-data="--entity(*.furo_data_date_input_google)"
                ></furo-data-display>
              </furo-form-layouter>

              <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>

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
                load-on-hts-in
                ƒ-bind-request-data="--entity"
                @-response="--response"
              >
              </furo-entity-agent>

              <p>
                furo-data-display with google int32 wrapper or fat int32 bindings.
              </p>
              <furo-form-layouter two>
                <furo-data-display
                  autofocus
                  ƒ-bind-data="--entityU(*.data.fat_int32)"
                ></furo-data-display>
                <furo-data-display
                  autofocus
                  condensed
                  ƒ-bind-data="--entityU(*.data.fat_string)"
                ></furo-data-display>

                <furo-data-display
                  autofocus
                  ƒ-bind-data="--entityU(*.data.wrapper_int32)"
                ></furo-data-display>
                <furo-data-display
                  autofocus
                  condensed
                  ƒ-bind-data="--entityU(*.data.wrapper_string)"
                ></furo-data-display>
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
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-display', DemoFuroDataDisplay);
