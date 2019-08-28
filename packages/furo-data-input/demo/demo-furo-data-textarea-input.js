import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "./produce-qp-data";
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "@furo/data/furo-entity-agent";

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
    return Theme.getThemeForComponent(this.name) || css`
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
      <h2>Demo furo-data-textarea-input</h2>
      <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the furo-data-object specs.</p>
      <furo-demo-snippet >
        <template>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.furo_data_textarea_input)"></furo-data-textarea-input>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.furo_data_textarea_input)" @-value-changed="--textareaChanged"></furo-data-textarea-input>
          <!-- --textareaChanged only comes when data was typed in. -->
          <span ƒ-.inner-textarea="--textareaChanged"></span>

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
    `;
  }
}

window.customElements.define('demo-furo-data-textarea-input', DemoFuroDataTextareaInput );
