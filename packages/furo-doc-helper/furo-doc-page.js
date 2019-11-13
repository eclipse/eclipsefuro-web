import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/util"
import "@furo/layout"
import "./furo-catalog"
import "@furo/route"


/**
 * `panel-doc`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/panel-doc.html
 * @appliesMixin FBP
 */
class FuroDocPage extends FBP(LitElement) {

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
            background-color: var(--surface);
            --split-master-width: 212px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-doc-element {
            max-width: 800px;
            min-width: 500px;
        }
    `
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady(){
    super._FBPReady();
    //this._FBPTraceWires();
    this._FBPTriggerWire("--src","../analysis.json")
    if(window.location.pathname === "/"){
      history.pushState(null,"Doc","/doc/")
    }
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
        
      
      <furo-location url-space-regex="/doc" @-location-changed="--pathChanged"></furo-location>
      <furo-doc-fetch-analysis ƒ-fetch-src="--src" ƒ-check-subroute="--pathChanged" @-data="--analysis"></furo-doc-fetch-analysis>
      
      <furo-split-view >

        <!-- the doc menu -->
        <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element" 
                       @-class="--class" @-mixin="--class"></furo-doc-menu>

        <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>
        <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

      </furo-split-view>
    `;
  }
}

window.customElements.define('furo-doc-page', FuroDocPage);
