import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';

/**
 * `demo-furo-ui5-data-reference-search`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataReferenceSearch extends FBP(LitElement) {
  constructor() {
    super();
    this.collection = { entities: [] };
  }

  _FBPReady() {
    super._FBPReady();
    this._FBPAddWireHook('--term', e => {
      console.log(e);
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      collection: { type: Object },
    };
  }

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
          <h2>Demo furo-ui5-data-reference-search</h2>
          <p>
            The search is started when the input has reached the value of min-term-length (default
            value: 0).
          </p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-ui5-data-reference-search
                placeholder="max 2 results"
                max-items-to-display="2"
                max-results-hint="show max 2 items"
                display-field="name"
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
            <furo-form-layouter two>
              <furo-ui5-data-reference-search
                placeholder="min term length 2"
                min-term-length="2"
                max-items-to-display="2"
                max-results-hint="show max 2 items"
                display-field="name"
                ƒ-bind-data="--entityReady(*.owner)"
                @-search="--term"
                ƒ-collection-in="--refCol"
              >
              </furo-ui5-data-reference-search>

              <furo-ui5-data-reference-search
                placeholder="in loading example"
                ƒ-bind-data="--entityReady(*.owner)"
              >
              </furo-ui5-data-reference-search>

              <furo-ui5-data-reference-search
                placeholder="no result example"
                no-result-hint="no result found"
                @-search="--termNoResult"
                ƒ-collection-in="--refColNoResult(*.noResult)"
              >
              </furo-ui5-data-reference-search>
            </furo-form-layouter>
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

            <furo-collection-agent
              service="PersonService"
              ƒ-hts-in="--entityReady(*.owner.link._value)"
              ƒ-search="--termNoResult"
              @-response="--refColNoResult"
            >
            </furo-collection-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-reference-search', DemoFuroUi5DataReferenceSearch);
