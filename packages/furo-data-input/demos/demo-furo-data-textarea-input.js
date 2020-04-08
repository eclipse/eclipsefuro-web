import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link';
import '@furo/data/src/furo-entity-agent';

/**
 * `demo-furo-data-textarea-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataTextareaInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataTextareaInput') ||
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
      <h2>Demo furo-data-textarea-input</h2>
      <p>
        Bind the field from furo-data-object with
        <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
        defaults are comming from the furo-data-object specs.
      </p>
      <furo-demo-snippet>
        <template>
          <furo-data-textarea-input
            autofocus
            ƒ-bind-data="--entity(*.furo_data_textarea_input)"
          ></furo-data-textarea-input>
          <furo-data-textarea-input
            autofocus
            ƒ-bind-data="--entity(*.furo_data_textarea_input)"
            @-value-changed="--textareaChanged"
          ></furo-data-textarea-input>

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
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-data-textarea-input', DemoFuroDataTextareaInput);
