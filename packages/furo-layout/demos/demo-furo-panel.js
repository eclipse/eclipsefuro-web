import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';

/**
 * `demo-furo-panel`
 * Simple furo-panel Demo
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/demo-furo-panel.html
 * @appliesMixin FBP
 */
class DemoFuroPanel extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroPanel') ||
      css`
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          padding-right: var(--spacing, 16px);
        }

        :host([hidden]) {
          display: none;
        }
        h2 {
          margin-top: 0;
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
      <h2>Demo furo-panel</h2>
      <p>Simple panel with content slot</p>
      <furo-demo-snippet>
        <template>
          <furo-panel bordered>
            <h1>Panel outside bordered</h1>
            <furo-panel bordered margin-m>
              <p>Panel inside, bordered, margin-m</p>
            </furo-panel>
          </furo-panel>
          <furo-panel>
            <h1>Another panel</h1>
          </furo-panel>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-panel', DemoFuroPanel);
