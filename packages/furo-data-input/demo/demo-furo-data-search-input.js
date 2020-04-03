import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data/furo-data-object";
import "../furo-catalog";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";
import "./helper/simulate-error"

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
    return Theme.getThemeForComponent('DemoFuroSearchTextInput') || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <h2>Demo furo-data-search-input</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_text_input","description":"pattern not match"}'></simulate-error>
            <furo-data-search-input trailing-icon="dashboard" hint="custom hint" required
                                  ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-search-input>
            <furo-data-search-input leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_text_input)" min="4"
                                  max="7"></furo-data-search-input>
            <furo-data-search-input readonly ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-search-input>
            <furo-data-search-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-search-input>
            <furo-data-search-input></furo-data-search-input>
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>

        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-search-input', DemoFuroSearchTextInput);
