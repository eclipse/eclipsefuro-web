import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-vertical-scroller`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroVerticalScroller extends FBP(LitElement) {

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
            padding-right: var(--spacing);
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
        <h2>Demo furo-vertical-scroller</h2>
        <p>Vertical scroller takes the height of his parent node and allows you to scroll its content.</p>
      <furo-demo-snippet >
        <template>
          <furo-vertical-scroller >
            <div style="height: 620px;background-image: linear-gradient(red, yellow);"></div>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
        
    `;
  }
}

window.customElements.define('demo-furo-vertical-scroller', DemoFuroVerticalScroller );
