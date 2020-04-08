import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/data/src/furo-collection-agent';
import './helper/produce-empty-data.js';

/**
 * `demo-furo-data-reference-search-no-result`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataReferenceSearchNoResult extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataReferenceSearchNoResult') ||
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
        <h2>Demo furo-data-reference-search-no-result</h2>
        <p>default hint "no result found" for reference search</p>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-data-reference-search
                condensed
                ƒ-bind-data="--entityReady(*.owner)"
                @-search="--term"
                ƒ-collection-in="--refCol"
              >
              </furo-data-reference-search>
              <produce-empty-data ƒ-produce="--term" @-data="--refCol"></produce-empty-data>
            </furo-form-layouter>
            <furo-data-object type="task.Task" @-object-ready="--entityReady"> </furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define(
  'demo-furo-data-reference-search-no-result',
  DemoFuroDataReferenceSearchNoResult,
);
