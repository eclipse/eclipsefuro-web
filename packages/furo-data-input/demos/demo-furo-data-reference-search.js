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

/**
 * `demo-furo-data-reference-search`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataReferenceSearch extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataReferenceSearch') ||
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
        <h2>Demo furo-data-reference-search</h2>
        <p>
          Bind the reference field from furo-data-object with
          <strong>ƒ-bind-data="--entityReady(*.refFieldName)"</strong>. The labels, hints, defaults
          are comming from the furo-data-object specs.
        </p>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-data-reference-search
                condensed
                ƒ-bind-data="--entityReady(*.owner)"
                required
                max-items-to-display="2"
                max-results-hint="only 2 items displayed..."
                @-search="--term"
                ƒ-collection-in="--refCol"
              >
              </furo-data-reference-search>

              <furo-data-display
                label="selected id"
                leading-icon="apps"
                condensed
                ƒ-bind-data="--entityReady(*.owner.id)"
              ></furo-data-display>
              <furo-data-reference-search
                condensed
                label="Search on enter only"
                search-on-enter-only
                ƒ-bind-data="--entityReady(*.owner)"
                @-search="--term"
                ƒ-collection-in="--refCol"
              >
              </furo-data-reference-search>
            </furo-form-layouter>
            <furo-data-object type="task.Task" @-object-ready="--entityReady" ƒ-inject-raw="--response(*.data)"> </furo-data-object>
            <furo-entity-agent
              service="TaskService"
              ƒ-hts-in="--hts"
              ƒ-load="--hts"
              @-response="--response"
            >
            </furo-entity-agent>
            <furo-deep-link
              service="TaskService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>
            <produce-qp-data @-data="--qp" qpescaped="%7B%22tsk%22%3A1%7D"></produce-qp-data>
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

window.customElements.define('demo-furo-data-reference-search', DemoFuroDataReferenceSearch);
