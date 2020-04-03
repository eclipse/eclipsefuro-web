import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';

/**
 * `demo-furo-resizer`
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroResizer extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroResize') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
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
      <h2>Demo furo-resize</h2>
      <p>
        Resize your the panels by dragging the border. The resizers in this demo have a maxwidth of
        300px set.
      </p>
      <p>The empty-spacer in this demo is the flexible part.</p>
      <furo-demo-snippet>
        <template>
          <furo-horizontal-flex style="height: 100px">
            <furo-resizer righthandle maxwidth="300">
              <div style="background: aquamarine;height: 100%">some content</div>
            </furo-resizer>

            <!-- A furo-empty-spacer will fill the available space. -->
            <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
            <furo-resizer lefthandle maxwidth="300">
              <div style="background: #a3fff7;height: 100%">some content</div>
            </furo-resizer>
          </furo-horizontal-flex>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-resizer', DemoFuroResizer);
