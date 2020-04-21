import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/src/theme.js"
import {FBP} from "@furo/fbp";

/**
 * `footer-bar`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/footer-bar.html
 * @appliesMixin FBP
 */
class FooterBar extends FBP(LitElement) {


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FooterBar') || css`
        :host {
            display: block;
            background-color: var(--surface, white);
            color: var(--on-surface, black);
            height: 120px;
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
      
    `;
  }
}

window.customElements.define('footer-bar', FooterBar);
