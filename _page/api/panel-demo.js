import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/route/furo-location"
import "@furo/doc-helper/furo-demo-loader"
/**
 * `panel-demo`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/panel-demo.html
 * @appliesMixin FBP
 */
class PanelDemo extends FBP(LitElement) {

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
  _FBPReady(){
    super._FBPReady();
   // this._FBPTraceWires()
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
            padding-left: var(--spacing-s);
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--surface);
            --split-master-width: 212px;
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
      
      <furo-location url-space-regex="^/api/[^/]*/demo" @-location-path-changed="--pathChanged"></furo-location>
      <furo-demo-loader ƒ-load="--pathChanged"></furo-demo-loader>
    `;
  }
}

window.customElements.define('panel-demo', PanelDemo);
