import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../<%= componentName %>"

/**
 * `demo-furo-element`
 *
 * @customElement
 * @appliesMixin FBP
 */
class Demo<%= className %> extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('Demo<%= className %>') || css`
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
      <h2>Demo <%= componentName %></h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <<%= componentName %>></<%= componentName %>>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-<%= componentName %>', Demo<%= className %> );
