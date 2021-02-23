import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import {FBP} from "@furo/fbp";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/doc-helper"
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/experiments/src/furo-catalog.js';
/**
 * `demo-furo-apex-chart`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroApexChart extends FBP(LitElement) {

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
      <furo-vertical-flex>
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-horizontal-flex >
                <furo-apex-chart flex></furo-apex-chart>
              </furo-horizontal-flex>
            </furo-vertical-scroller>

          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-apex-chart', DemoFuroApexChart);
