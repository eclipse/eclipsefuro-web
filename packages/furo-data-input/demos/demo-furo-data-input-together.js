import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';
import './helper/simulate-error.js';
import '@furo/form';

/**
 * `demo-furo-data-input-together`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataInputTogether extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataInputTogether') ||
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
        <h2>Demo furo-data-text-input</h2>
        <p>
          Bind the field from furo-data-object with
          <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
          defaults are comming from the furo-data-object specs.
        </p>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter four>
              <furo-data-text-input
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>

              <furo-data-number-input
                leading-icon="apps"
                autofocus
                ƒ-bind-data="--entity(*.furo_data_number_input)"
                min="4"
                max="7"
                trailing-icon="apps"
              ></furo-data-number-input>
              <furo-data-date-input
                leading-icon="apps"
                ƒ-bind-data="--entity(*.furo_data_date_input)"
                trailing-icon="apps"
              ></furo-data-date-input>
              <furo-data-color-input
                leading-icon="apps"
                ƒ-bind-data="--entity(*.furo_data_color_input)"
                trailing-icon="apps"
              ></furo-data-color-input>

              <furo-data-text-input
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>

              <furo-data-display leading-icon="apps" trailing-icon="apps"></furo-data-display>

              <furo-data-password-input
                ƒ-bind-data="--entity(*.furo_data_password_input)"
                leading-icon="apps"
                trailing-icon="apps"
              ></furo-data-password-input>

              <furo-data-range-input
                ƒ-bind-data="--entity(*.furo_data_password_input)"
                leading-icon="apps"
                trailing-icon="apps"
              ></furo-data-range-input>

              <furo-data-text-input
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>

              <furo-data-reference-search
                leading-icon="apps"
                hint="custom hint"
                trailing-icon="apps"
              ></furo-data-reference-search>

              <furo-data-search-search
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*)"
                trailing-icon="apps"
              ></furo-data-search-search>

              <furo-data-textarea-input
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_textarea_input)"
                trailing-icon="apps"
              ></furo-data-textarea-input>

              <furo-data-text-input
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>
              <furo-data-checkbox-input
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
              ></furo-data-checkbox-input>

              <furo-data-radio-button-input
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
              ></furo-data-radio-button-input>

              <furo-data-time-input
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_time_input)"
                trailing-icon="apps"
              ></furo-data-time-input>
            </furo-form-layouter>
            <p>condensed</p>
            <furo-form-layouter four>
              <furo-data-text-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>

              <furo-data-number-input
                condensed
                leading-icon="apps"
                autofocus
                leading-icon="dashboard"
                ƒ-bind-data="--entity(*.furo_data_number_input)"
                min="4"
                max="7"
                trailing-icon="apps"
              ></furo-data-number-input>
              <furo-data-date-input
                condensed
                leading-icon="apps"
                ƒ-bind-data="--entity(*.furo_data_date_input)"
                trailing-icon="apps"
              ></furo-data-date-input>
              <furo-data-color-input
                condensed
                leading-icon="apps"
                ƒ-bind-data="--entity(*.furo_data_color_input)"
                trailing-icon="apps"
              ></furo-data-color-input>

              <furo-data-text-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>

              <furo-data-display
                condensed
                leading-icon="apps"
                trailing-icon="apps"
              ></furo-data-display>

              <furo-data-password-input
                condensed
                ƒ-bind-data="--entity(*.furo_data_password_input)"
                leading-icon="apps"
                trailing-icon="apps"
              ></furo-data-password-input>

              <furo-data-range-input
                condensed
                ƒ-bind-data="--entity(*.furo_data_password_input)"
                leading-icon="apps"
                trailing-icon="apps"
              ></furo-data-range-input>

              <furo-data-text-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>

              <furo-data-reference-search
                condensed
                leading-icon="apps"
                hint="custom hint"
                trailing-icon="apps"
              ></furo-data-reference-search>

              <furo-data-search-search
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_search_input)"
                trailing-icon="apps"
              ></furo-data-search-search>

              <furo-data-textarea-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_textarea_input)"
                trailing-icon="apps"
              ></furo-data-textarea-input>

              <furo-data-text-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_text_input)"
                trailing-icon="apps"
              ></furo-data-text-input>
              <furo-data-checkbox-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                trailing-icon="apps"
              ></furo-data-checkbox-input>

              <furo-data-radio-button-input
                condensed
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
              ></furo-data-radio-button-input>

              <furo-data-time-input
                condensed
                leading-icon="apps"
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_time_input)"
                trailing-icon="apps"
              ></furo-data-time-input>
            </furo-form-layouter>

            <furo-data-object
              type="experiment.Experiment"
              @-object-ready="--entity"
              ƒ-inject-raw="--response(*.data)"
            ></furo-data-object>

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

            <simulate-error
              ƒ-bind-data="--entity"
              error='{"field":"furo_data_text_input","description":"pattern not match"}'
            ></simulate-error>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-input-together', DemoFuroDataInputTogether);
