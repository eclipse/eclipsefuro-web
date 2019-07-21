import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
// demo imports
import '../furo-catalog';
import "../furo-demo-snippet"
import "./fetch-analysis"

/**
 * `demo-furo-demo-snippet`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/demo-furo-demo-snippet.html
 * @appliesMixin FBP
 */
class DemoFuroDemoSnippet extends FBP(LitElement) {

    constructor() {
        super();
    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Description
             */
            myBool: {type: Boolean}
        };
    }

  /**
  * flow is ready lifecycle method
  */
  __fbpReady(){
    super.__fbpReady();
    //this._FBPTraceWires()
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
      
      <furo-demo-snippet style="height: 100%;">
        <template>
          <a href="./util">util</a>
          <a href="./data">data</a>
          <furo-location url-space-regex="^/api/demo/util/demo-furo-demo-snippet" @-location-changed="--pathChanged"></furo-location>
          <!-- load analysis based on --pathChanged.pathSegments[0] -->
          <furo-doc-fetch-analysis ƒ-fetch-location="--pathChanged" @-data="--analysis"></furo-doc-fetch-analysis>
          <furo-split-view >

            <!-- the doc menu -->
            <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element"
                           @-class="--class"></furo-doc-menu>

            <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>
            <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

          </furo-split-view>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-demo-snippet', DemoFuroDemoSnippet);
