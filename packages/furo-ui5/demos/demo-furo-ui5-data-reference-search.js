import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import './helper/demo-extended-searcher.js';

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
      // eslint-disable-next-line no-console
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
            value: 2).
          </p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <div>
                <p>min-term-length set to 1 character</p>
                <furo-ui5-data-reference-search
                  ƒ-bind-data="--entityReady(*.owner)"
                  extended-searcher="demo-extended-searcher"
                  min-term-length="1"
                >
                </furo-ui5-data-reference-search>
              </div>
              <furo-ui5-data-reference-search-labeled
                display-field-path="data.name"
                ƒ-bind-data="--entityReady(*.owner)"
                @-search="--term"
              >
              </furo-ui5-data-reference-search-labeled>
            </furo-form-layouter>
            <furo-data-object
              type="task.Task"
              @-data-changed="--data"
              @-object-ready="--entityReady"
            >
            </furo-data-object>
            <!-- Used for the demo only -->
            <furo-pretty-json ƒ-inject-data="--data(*.owner._value)"></furo-pretty-json>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-reference-search', DemoFuroUi5DataReferenceSearch);
