import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/route/src/furo-location"
import "./furo-demo-loader"
/**
 * `panel-demo`
 * panel to show a demo
 *
 * @customElement
 * @appliesMixin FBP
 */
class FuroDemoPage extends FBP(LitElement) {



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
    return Theme.getThemeForComponent('FuroDemoPage') || css`
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
      
      <furo-location url-space-regex="/demo" @-location-changed="--pathChanged"></furo-location>
      <furo-demo-loader ƒ-load="--pathChanged"></furo-demo-loader>
    `;
  }
}

window.customElements.define('furo-demo-page', FuroDemoPage);
