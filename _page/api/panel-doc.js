import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/util"
import "@furo/layout"
import "./furo-doc-fetch-analysis"

/**
 * `panel-doc`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/panel-doc.html
 * @appliesMixin FBP
 */
class PanelDoc extends FBP(LitElement) {

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
            padding-left: var(--spacing-s);
            overflow: hidden;
            box-sizing: border-box;
        }

        :host([hidden]) {
            display: none;
        }
        
    `
  }
  /**
   * flow is ready lifecycle method
   */
  __fbpReady(){
    super.__fbpReady();
    this._FBPTraceWires()
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
        
      <furo-location url-space-regex="^/api/doc" @-location-changed="--pathChanged"></furo-location>
      <!-- load analysis based on --pathChanged.pathSegments[0] -->
      <furo-doc-fetch-analysis ƒ-fetch-location="--pathChanged" @-data="--analysis"></furo-doc-fetch-analysis>
      <furo-split-view>

        <!-- the doc menu -->
        <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element" 
                       @-class="--class"></furo-doc-menu>

        <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>
        <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

      </furo-split-view>
    `;
  }
}

window.customElements.define('panel-doc', PanelDoc);
