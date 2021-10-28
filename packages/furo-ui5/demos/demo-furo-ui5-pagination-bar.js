import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
import '@furo/app/src/furo-card.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-collection-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
/**
 * `demo-furo-ui5-pagination-bar`
 *
 * @Summary basic usage of furo-ui5-pagination-bar
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5PaginationBar extends FBP(LitElement) {
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
      <h2>Demo furo-ui5-pagination-bar</h2>
      <p>Analyzes the HATEOAS links and creates a corresponding pagination bar</p>
      <furo-demo-snippet>
        <template>
          <furo-card header-text="Usage of furo-ui5-pagination-bar">
            <p>The demo collection record has a rel for next and one for last.</p>
            <furo-ui5-pagination-bar
              ƒ-inject="--responseHts"
              @-pagination-next="--next"
              @-pagination-last="--last"
            ></furo-ui5-pagination-bar>
            <furo-button
              slot="action"
              label="load collection"
              @-click="--btnListClicked"
            ></furo-button>
          </furo-card>

          <furo-deep-link
            ƒ-trigger="--btnListClicked"
            service="ProjectService"
            @-hts-out="--hts"
          ></furo-deep-link>
          <furo-collection-agent
            service="ProjectService"
            ƒ-hts-in="--hts"
            ƒ-next="--next"
            ƒ-last="--last"
            list-on-hts-in
            @-response-hts-updated="--responseHts"
            @-response="--collectionResponse"
          >
          </furo-collection-agent>

          <furo-data-object
            type="project.ProjectCollection"
            ƒ-inject-raw="--collectionResponse"
            @-object-ready="--data"
          >
          </furo-data-object>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-pagination-bar', DemoFuroUi5PaginationBar);
