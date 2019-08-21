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
          <collection-object type="vnd.com.acme.tree" @-response="--collection"></collection-object>
          <entity-object type="vnd.com.acme.treeitem" @-object-ready="--entity"></entity-object>
          <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"  label="Label" ƒ-inject-data="--collection" ƒ-bind-data="--entity(*.fields.description)"></furo-data-collection-dropdown>
          <furo-data-collection-dropdown condensed label="Label" leading-icon="mail" trailing-icon="fingerprint" ƒ-inject-data="--collection" ƒ-bind-data="--entity(*.fields.description)"></furo-data-collection-dropdown>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-data-collection-dropdown', SampleFuroDataCollectionDropdown );
