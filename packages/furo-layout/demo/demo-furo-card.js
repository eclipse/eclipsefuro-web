import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-card`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCard extends FBP(LitElement) {

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
      <h2>Demo demo-furo-card</h2>
      <p>description</p>
      <furo-demo-snippet>
        <template>
          <style>furo-card {
            margin: 20px
          }</style>
          
          <furo-card>
            <div><furo-icon icon="mail"></furo-icon>
              <hr>
              Content</div>
            <div slot="action"><button>df</button></div>
          </furo-card>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-card', DemoFuroCard);
