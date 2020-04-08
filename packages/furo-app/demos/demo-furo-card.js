import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/app/src/furo-catalog.js';

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
    return (
      Theme.getThemeForComponent('DemoFuroCard') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
        furo-demo-snippet {
          height: 800px;
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
        <h2>Demo demo-furo-card</h2>
        <p>description</p>
        <furo-demo-snippet flex>
          <template>
            <style>
              furo-card {
                margin: 20px;
                width: 320px;
                float: left;
              }
            </style>
            <furo-vertical-scroller>
              <furo-card header-text="With media" secondary-text="Secondary text goes here">
                <img slot="media" src="/assets/images/hamburg.jpg" alt="" />
                <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">
                  Do not forget to give the card <br />
                  a height
                </div>
                <furo-horizontal-flex space slot="action">
                  <furo-button primary label="primary"></furo-button>
                  <furo-button accent label="accent"></furo-button>
                  <furo-empty-spacer></furo-empty-spacer>
                  <furo-button danger label="Danger"></furo-button>
                </furo-horizontal-flex>
              </furo-card>

              <furo-card>
                <img slot="media" src="/assets/images/hamburg.jpg" alt="" />
                <h1>Title in content</h1>
                <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">
                  Do not forget to give the card <br />
                  a height
                </div>
                <furo-horizontal-flex space slot="action">
                  <furo-button primary label="primary"></furo-button>
                  <furo-button accent label="accent"></furo-button>
                  <furo-empty-spacer></furo-empty-spacer>
                  <furo-button danger label="Danger"></furo-button>
                </furo-horizontal-flex>
              </furo-card>

              <furo-card
                header-text="Title goes here"
                secondary-text="Secondary text goes hereSecondary text goes hereSecondary text goes hereSecondary text goes here"
              >
                <div>Text in default slot</div>
                <div slot="action">
                  <furo-horizontal-flex space slot="action">
                    <furo-button primary label="primary"></furo-button>

                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-button label="Danger"></furo-button>
                  </furo-horizontal-flex>
                </div>
              </furo-card>

              <furo-card header-text="Title goes here" secondary-text="Secondary text goes here">
                <div>
                  Content text blah
                </div>
                <div slot="action">
                  <furo-horizontal-flex space slot="action">
                    <furo-button primary label="primary"></furo-button>

                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-button label="Danger"></furo-button>
                  </furo-horizontal-flex>
                </div>
              </furo-card>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-card', DemoFuroCard);
