import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-collapsible-box`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCollapsibleBox extends FBP(LitElement) {

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
      <h2>Demo demo-furo-collapsible-box</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-collapsible-box>
            <div>Content comes here</div>
          </furo-collapsible-box>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-collapsible-box', DemoFuroCollapsibleBox );
