import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Styling } from '@furo/doc-helper/src/styling.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-ui/src/furo-catalog.js';

import '@furo/data';
import '@furo/input';
import '@furo/util/src/furo-navigation-pad.js';

/**
 * `demo-furo-data-table`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataTable extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataTable') || [
        css`
          :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
          }

          :host([hidden]) {
            display: none;
          }

          furo-data-table {
            /*--furo-data-table-background: #3c3f41;*/
            /*--furo-data-table-on-background: #e2e2e2;*/
            /*--furo-data-table-header-background: #2b2b2b;*/
            /*--furo-data-table-header-on-background: #cc7832;*/
            /*--data-table-separator: #555758;*/
          }
        `,
        Styling.theme,
      ]
    );
  }

  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
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
          <h2>furo-data-table playground</h2>
        </div>
        <furo-navigation-pad @-navigated="--navpad"></furo-navigation-pad>

        <furo-card
          header-text="Project Overview - Data Table Standard"
          secondary-text="All your project data"
          class="flex"
        >
          <furo-data-table
            type="project.Project"
            fields="display_name, members, start,end,cost_limit"
            sortable-fields="cost_limit,start"
            single-selection
            ƒ-bind-data="--data"
            ƒ-trigger-navigation="--navpad"
            ƒ-first="--collectionResponse"
            ƒ-prev="--arrowUp"
            ƒ-next="--arrowDown"
            ƒ-select="--enter"
            @-tablerow-selected="--rowSelected"
          >
            <furo-button-bar>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button primary label="place your component here. E.g. pagination"></furo-button>
            </furo-button-bar>
          </furo-data-table>

          <furo-horizontal-flex space slot="action">
            <furo-button label="List data" primary @-click="--btnListClicked"></furo-button>
          </furo-horizontal-flex>
        </furo-card>

        <furo-pretty-json ƒ-inject-data="--rowSelected"></furo-pretty-json>
      </furo-vertical-flex>

      <furo-deep-link
        ƒ-trigger="--btnListClicked"
        service="ProjectService"
        @-hts-out="--hts"
      ></furo-deep-link>
      <furo-collection-agent
        service="ProjectService"
        ƒ-hts-in="--hts"
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
    `;
  }
}

window.customElements.define('demo-furo-data-table', DemoFuroDataTable);
