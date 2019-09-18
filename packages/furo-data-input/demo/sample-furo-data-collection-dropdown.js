import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data"

import "../furo-catalog"
import "./helper/produce-qp-data"
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
            height: 270px;
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
          
          <furo-form-layouter two>
          <furo-data-collection-dropdown label="label overrid" hint="hint override" leading-icon="mail" trailing-icon="fingerprint"  value-field="id" display-field="phone_nr" label="Use phone as display" ƒ-inject-entities="--response(*.entities)" ƒ-bind-data="--entity(*.description)"></furo-data-collection-dropdown>
          
          <furo-data-collection-dropdown  label="Default display" leading-icon="mail" trailing-icon="fingerprint" ƒ-inject-entities="--response(*.entities)" ƒ-bind-data="--entity(*.description)"></furo-data-collection-dropdown>
          <furo-data-collection-dropdown condensed label="List as input" leading-icon="mail" trailing-icon="fingerprint" list="1,2,3" ƒ-bind-data="--entity(*.description)"></furo-data-collection-dropdown>
          <furo-data-display condensed label="selected value" ƒ-bind-data="--entity(*.description)"></furo-data-display>
          </furo-form-layouter>
          
            
          <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>
      
          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
      
          <furo-data-object type="project.ProjectCollection" @-object-ready="--collection"
                            ƒ-inject-raw="--response"></furo-data-object>
      
          <furo-deep-link service="PersonService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
      
          <furo-collection-agent service="PersonService"
                                 ƒ-hts-in="--hts"
                                 ƒ-list="--hts"
                                 @-response="--response">
          </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-data-collection-dropdown', SampleFuroDataCollectionDropdown );
