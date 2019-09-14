import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout"
/**
 * `viz-nav`
 * main navigation
 *
 * @customElement
 * @appliesMixin FBP
 */
class VizNav extends FBP(LitElement) {
 
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
            --spacing-xs: 2px;
        }

        :host([hidden]) {
            display: none;
        }

        .nav {
            min-width: 35px;
            padding: 0;
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
      <furo-horizontal-flex space>
        <!-- This is the button, you see on the top left corner of the app. Everything starts with pressing this button (as long you have some content in your clipboard) -->
        <furo-button autofocus raised primary @-click="-^clipboard-requested">render from clippboard</furo-button>
        <furo-button class="nav" raised label="◀" @-click="-^arrow-left"></furo-button>
        <furo-button class="nav" raised label="▶" @-click="-^arrow-right"></furo-button>
        <furo-button class="nav" raised label="✘" @-click="-^delete-current"></furo-button>
        <furo-empty-spacer></furo-empty-spacer>

        <!-- The help button ot the top right side just links to /man. Thats all. -->
        <a href="/man">
          <furo-button outline>help</furo-button>
        </a>
      </furo-horizontal-flex>
        
      <furo-keydown global key="v" @-key="-^clipboard-requested"></furo-keydown>
      <furo-keydown global key="ArrowLeft" @-key="-^arrow-left"></furo-keydown>
      <furo-keydown global key="ArrowRight" @-key="-^arrow-right"></furo-keydown>
      <furo-keydown global key="Backspace" @-key="-^delete-current"></furo-keydown>
    `;
  }
}

window.customElements.define('viz-nav', VizNav);
