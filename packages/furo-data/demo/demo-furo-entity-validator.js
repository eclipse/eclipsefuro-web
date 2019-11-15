import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data";
import "@furo/util";

import "../furo-catalog"
import "./helper/demo-project-filter-form"

/**
 * `demo-furo-entity-validator`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroEntityValidator extends FBP(LitElement) {

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
  }

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
                <div>
                    <h2>Demo demo-furo-entity-validator</h2>
                </div>
                <furo-demo-snippet flex>
                    <template>
                        <furo-horizontal-flex>

                            <furo-data-search-input autofocus ƒ-bind-data="--entity(*.furo_data_search_input)"></furo-data-search-input>
                            <furo-data-number-input autofocus ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
                            <furo-data-text-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-text-input>
                            <furo-data-text-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-text-input>
                        </furo-horizontal-flex>

                        <produce-qp-data @-data="--qp" qp={"exp":2}></produce-qp-data>

                        <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                          ƒ-inject-raw="--response(*.data)"></furo-data-object>
                        <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                        <furo-entity-agent service="ExperimentService"
                                           ƒ-hts-in="--hts"
                                           ƒ-load="--hts"
                                           ƒ-bind-request-data="--entity"
                                           @-response="--response">
                        </furo-entity-agent>
                        <furo-entity-validator ƒ-bind-data="--entity"></furo-entity-validator>

                    </template>
                </furo-demo-snippet>
            </furo-vertical-flex>
        `;
  }
}

window.customElements.define('demo-furo-entity-validator', DemoFuroEntityValidator);
