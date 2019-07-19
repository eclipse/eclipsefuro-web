import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `view-guide`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/view-guide.html
 * @appliesMixin FBP
 */
class ViewGuide extends FBP(LitElement) {

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
            overflow: auto;
            box-sizing: border-box;
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
        <furo-split-view>
          <div slot="master">
          <a href="/guide/sub">sub</a>
          </div>
          <div scroll> <p>Hej, welcome</p>
            <div style="height: 900px"></div>
          dsfd
          </div>
        </furo-split-view>
    `;
  }
}

window.customElements.define('view-guide', ViewGuide);
