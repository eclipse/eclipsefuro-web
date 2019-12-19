import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";

/**
 * `demo-furo-data-date-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataDateInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataDateInput') || css`
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
        <div><h2>Demo furo-data-date-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-form-layouter four>
                <furo-data-date-input autofocus ƒ-bind-data="--entity(*.furo_data_date_input)"
                                      hint="Hint should come from spec and overflows"></furo-data-date-input>
                <furo-data-date-input leading-icon="fingerprint" label="with step" step="30" ƒ-bind-data="--entity(*.furo_data_date_input)"
                                      @-value-changed="--dateChanged"
                                      hint="but that should be ok"></furo-data-date-input>
                <furo-data-date-input flex label="min max" min="2012-01-01" max="2025-12-08"
                                      ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-date-input>
                <furo-data-date-input label="disabled" disabled label="with step" step="7"
                                      ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-date-input>

                <furo-data-date-input  ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-date-input>
              <furo-data-date-input step="any" min="0001-01-01" ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-date-input>
              
              
            </furo-form-layouter>
         
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

window.customElements.define('demo-furo-data-date-input', DemoFuroDataDateInput);
