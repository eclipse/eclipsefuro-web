import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/util/src/furo-catalog.js';

/**
 * `demo-furo-markdown`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroMarkdown extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroMarkdown') ||
      css`
        :host {
          display: block;
          height: 100%;
          overflow: auto;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo furo-markdown</h2>
      <p>If unsafe is not set, html will not be rendered</p>
      <furo-demo-snippet source>
        <template>
          <furo-markdown mdsrc="/mockdata/markdown/README.md"></furo-markdown>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-markdown', DemoFuroMarkdown);
