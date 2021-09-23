import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
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
 * `demo-furo-data-color-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataColorInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataColorInput') ||
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
        <h2>Demo furo-data-color-input</h2>
        <p>
          Bind the field from furo-data-object with
          <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
          defaults are comming from the furo-data-object specs.
        </p>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter four>
              <furo-data-color-input
                hint="custom hint"
                required
                ƒ-bind-data="--entity(*.furo_data_color_input)"
              ></furo-data-color-input>
              <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
              <simulate-error
                ƒ-bind-data="--entity"
                error='{"field":"furo_data_color_input","description":"wrong color value"}'
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
              load-on-hts-in
              ƒ-bind-request-data="--entity"
              @-response="--response"
            >
            </furo-entity-agent>

            <p>
              furo-data-color-input with google wrapper and fat bindings.
            </p>
            <furo-form-layouter two>
              <furo-data-color-input
                autofocus
                ƒ-bind-data="--entityU(*.data.wrapper_string)"
              ></furo-data-color-input>
              <furo-data-color-input
                autofocus
                ƒ-bind-data="--entityU(*.data.wrapper_string)"
              ></furo-data-color-input>
              <furo-data-color-input
                autofocus
                rows="6"
                condensed
                ƒ-bind-data="--entityU(*.data.fat_string)"
              ></furo-data-color-input>
              <furo-data-color-input
                autofocus
                rows="6"
                condensed
                ƒ-bind-data="--entityU(*.data.fat_string)"
              ></furo-data-color-input>
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

window.customElements.define('demo-furo-data-color-input', DemoFuroDataColorInput);
