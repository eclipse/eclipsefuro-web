import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";
import "./helper/simulate-error"

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
      <furo-vertical-flex>
        <div><h2>Demo furo-data-money-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>

              <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)"></furo-data-money-input>
            </furo-horizontal-flex>
              
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_money_input","description":"custom error"}'></simulate-error>

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

window.customElements.define('demo-furo-data-money-input', DemoFuroDataMoneyInput);
