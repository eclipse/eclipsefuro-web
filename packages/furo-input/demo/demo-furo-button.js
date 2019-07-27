import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-button`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroButton extends FBP(LitElement) {

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
        
        furo-demo-snippet {
            height: 180px;
            padding: 8px;
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
      <h2>Demo demo-furo-button</h2>
      <p>description</p>
      <furo-demo-snippet>
        <template>
          <furo-button label="Label"></furo-button>
          <furo-button label="Label" disabled></furo-button>
          <furo-button label="Label" danger></furo-button>
          <furo-button label="Label" autofocus></furo-button>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-button', DemoFuroButton);
