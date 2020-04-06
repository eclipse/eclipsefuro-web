import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";

/**
 * `simulate-error`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/simulate-error.html
 * @appliesMixin FBP
 */
class SimulateError extends FBP(LitElement) {

  constructor() {
    super();
    this.addEventListener("click",()=>{

      /**
       * error example
       * {
       * "field": "display_name",
       * "description": "display name can not be empty"
       *};
       */
      this.fields._setInvalid(this.error);
    })
  }


  bindData(d) {
    this.fields = d;

  }

  static get properties() {
    return {

      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      error: {
        type: Object
      }
    }
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('SimulateError') || css`
        :host {
            display: inline-block;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
        <furo-button raised danger>set error</furo-button>
    `;
  }
}

window.customElements.define('simulate-error', SimulateError);
