import { LitElement, html, css } from 'lit';
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
 * `demo-furo-data-money-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataMoneyInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataMoneyInput') ||
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
          <h2>Demo furo-data-money-input</h2>
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
              <furo-data-money-input
                autofocus
                ƒ-bind-data="--entity(*.furo_data_money_input)"
              ></furo-data-money-input>
            </furo-horizontal-flex>

            <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
            <simulate-error
              ƒ-bind-data="--entity"
              error='{"field":"furo_data_money_input","description":"custom error"}'
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
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-money-input', DemoFuroDataMoneyInput);
