import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';
import './helper/simulate-error.js';

/**
 * `demo-furo-data-number-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataNumberInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataNumberInput') ||
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
        <div>
          <h2>Demo furo-data-number-input</h2>
          <p>
            Bind the field from furo-data-object with
            <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
            defaults are comming from the furo-data-object specs.
          </p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-horizontal-flex>
              <furo-data-number-input
                autofocus
                ƒ-bind-data="--entity(*.furo_data_number_input)"
                hint="min, max and step come from spec"
              ></furo-data-number-input>
              <furo-data-number-input
                label="with step"
                step="0.5"
                ƒ-bind-data="--entity(*.furo_data_number_input)"
                hint="min and max come from spec, custom step 0.5"
                @-value-changed="--numberChanged"
              ></furo-data-number-input>
              <furo-data-number-input
                flex
                label="min max"
                min="1"
                max="9"
                hint="min 1, max 9, step from sepc"
                ƒ-bind-data="--entity(*.furo_data_number_input)"
              ></furo-data-number-input>
              <furo-data-number-input
                disabled
                label="with step"
                step="3"
                hint="min and max come from spec, custom step 3"
                ƒ-bind-data="--entity(*.furo_data_number_input)"
              ></furo-data-number-input>
              <furo-data-number-input></furo-data-number-input>
            </furo-horizontal-flex>

            <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
            <simulate-error
              ƒ-bind-data="--entity"
              error='{"field":"furo_data_number_input","description":"min not match"}'
            ></simulate-error>

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
              furo-data-number-input with google int32 wrapper or fat int32 bindings.
            </p>
            <furo-form-layouter two>
              <furo-data-number-input
                autofocus
                ƒ-bind-data="--entityU(*.data.fat_int32)"
              ></furo-data-number-input>
              <furo-data-number-input
                autofocus
                condensed
                ƒ-bind-data="--entityU(*.data.fat_int32)"
              ></furo-data-number-input>

              <furo-data-number-input
                autofocus
                ƒ-bind-data="--entityU(*.data.wrapper_int32)"
              ></furo-data-number-input>
              <furo-data-number-input
                autofocus
                condensed
                ƒ-bind-data="--entityU(*.data.wrapper_int32)"
              ></furo-data-number-input>
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

window.customElements.define('demo-furo-data-number-input', DemoFuroDataNumberInput);
