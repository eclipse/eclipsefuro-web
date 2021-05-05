import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';

class DemoFuroZGrid extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
      css`
        :host {
          display: block;
          height: 100%;
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
      <furo-vertical-flex>
        <div>
          <h2>Resize your screen ...</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <style>
                .demopanel {
                  padding: 0;
                  margin-bottom: 40px;
                  height: 100%;
                  background: #eee;
                  background-image: linear-gradient(
                      45deg,
                      rgba(0, 0, 0, 0.2) 25%,
                      transparent 0,
                      transparent 75%,
                      rgba(0, 0, 0, 0.2) 0
                    ),
                    linear-gradient(
                      45deg,
                      rgba(0, 0, 0, 0.2) 25%,
                      transparent 0,
                      transparent 75%,
                      rgba(0, 0, 0, 0.2) 0
                    );
                  background-size: 30px 30px;
                  background-position: 0 0, 15px 15px;
                  border: 1px solid #666666;
                }
                furo-z-grid div {
                  border: 1px solid black;
                }
              </style>

              <h3>Default</h3>
              <p>By default the panel is collapsible</p>
              <div class="demopanel">
                <furo-z-grid>
                  <div vspan="2" hspan="1" style="background: whitesmoke;">1x2</div>
                  <div vspan="1" hspan="1" style="background: pink;">1x1</div>
                  <div vspan="2" hspan="2" style="background: papayawhip;">2x2</div>
                  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
                  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
                  <div vspan="1" hspan="3" style="background: lightgoldenrodyellow;">3x1</div>
                  <div newline vspan="1" hspan="4" style="background: rebeccapurple;">4x1</div>
                  <div vspan="1" hspan="4" style="background: rebeccapurple;">4x1</div>
                  <div vspan="1" hspan="5" style="background: darkolivegreen;">5x1</div>
                  <div hspan="full" style="background: papayawhip;">
                    full width, no height given
                  </div>
                </furo-z-grid>
              </div>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-z-grid', DemoFuroZGrid);
