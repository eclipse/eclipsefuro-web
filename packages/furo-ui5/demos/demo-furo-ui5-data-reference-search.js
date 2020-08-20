import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
import '@furo/data/src/furo-data-object.js';

/**
 * `demo-furo-ui5-data-reference-search`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataReferenceSearch extends FBP(LitElement) {
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
          --furo-form-layouter-row-gap: var(--spacing-xs);
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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter four>
              <furo-ui5-data-reference-search
                condensed
                ƒ-bind-data="--entityReady(*.owner)"
                @-search="--term"
                ƒ-collection-in="--refCol"
              >
              </furo-ui5-data-reference-search>

              <furo-ui5-data-reference-search
                placeholder="this is a placeholder"
                ƒ-bind-data="--entityReady(*.owner)"
                @-search="--term"
                ƒ-collection-in="--refCol"
              >
              </furo-ui5-data-reference-search>
            </furo-form-layouter>
            <furo-pretty-json ƒ-inject-data="--data(*.owner._value)"></furo-pretty-json>

            <furo-data-object
              type="task.Task"
              @-data-changed="--data"
              @-object-ready="--entityReady"
            >
            </furo-data-object>
            <furo-collection-agent
              service="PersonService"
              ƒ-hts-in="--entityReady(*.owner.link._value)"
              ƒ-search="--term"
              @-response="--refCol"
            >
            </furo-collection-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-reference-search', DemoFuroUi5DataReferenceSearch);
