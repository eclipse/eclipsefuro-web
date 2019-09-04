import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
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
      let error = {
        "field": "display_name",
        "description": "Ping is a strange Method"
      };
      this.fields._setInvalid(error);

    })
  }


  bindData(d) {
    this.fields = d;

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
   * @private
   */
  render() {
    // language=HTML
    return html`
      <button>set error</button>
    `;
  }
}

window.customElements.define('simulate-error', SimulateError);
