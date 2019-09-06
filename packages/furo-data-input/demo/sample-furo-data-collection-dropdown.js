import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data"

import "../furo-catalog"
/**
 * `sample-furo-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroDataCollectionDropdown extends FBP(LitElement) {

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
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
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
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <furo-data-object type="tree.Tree" @-response="--collection"></furo-data-object>
          <furo-data-object type="tree.navigationnode" @-object-ready="--entity"></furo-data-object>
          <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"  label="Label" ƒ-inject-data="--collection" ƒ-bind-data="--entity(*.fields.description)"></furo-data-collection-dropdown>
          <furo-data-collection-dropdown condensed label="Label" leading-icon="mail" trailing-icon="fingerprint" ƒ-inject-data="--collection" ƒ-bind-data="--entity(*.fields.description)"></furo-data-collection-dropdown>

            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            
            <furo-entity-agent service="TreeService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>


            <furo-collection-agent service="TreeService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--collection"
                               @-response="--response">
            </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-data-collection-dropdown', SampleFuroDataCollectionDropdown );
