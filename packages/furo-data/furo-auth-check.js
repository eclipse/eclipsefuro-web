import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-auth-check`
 * Prüft verbindung zum Server und wirft entsprechende Meldungen wie `unauthorized` aus
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-auth-check.html
 * @appliesMixin FBP
 */
class FuroAuthCheck extends FBP(LitElement) {

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
      <p>Hej, welcome</p>
    `;
  }
}

window.customElements.define('furo-auth-check', FuroAuthCheck);
