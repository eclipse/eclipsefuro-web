import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `<%= componentName %>`
 * todo Describe your component
 *
 *
 * @summary todo add shortdescription of the component
 * @customElement
 * @polymer
 * @demo demo-<%= componentName %> my awesome demo
 * @appliesMixin FBP
 */
class <%= className %> extends FBP(LitElement) {

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
      mybool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady(){
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('<%= className %>') || css`
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

window.customElements.define('<%= componentName %>', <%= className %>);
