import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';
/**
 * `demo-furo-vertical-flex`
 *
 * @summary demo for furo-vertical-flex
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroVerticalFlex extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

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
      <h2>Demo furo-vertical-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet>
        <template>
          <furo-vertical-flex style="height: 180px">
            <div>small</div>
            <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
            <div>small</div>
          </furo-vertical-flex>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-vertical-flex', DemoFuroVerticalFlex);
