import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";


/**
 * `demo-furo-data-bool-icon`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataBoolIcon extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataBoolIcon') || css`
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
      <h2>Demo demo-furo-data-bool-icon</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-data-bool-icon ƒ-bind-data="--entity(*.furo_data_bool_icon)"></furo-data-bool-icon>
            
          <produce-qp-data  @-data="--qp" qp={"exp":1}></produce-qp-data>

          <furo-data-object type="experiment.Experiment" @-data-injected="--entity"
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

window.customElements.define('demo-furo-data-bool-icon', DemoFuroDataBoolIcon );
