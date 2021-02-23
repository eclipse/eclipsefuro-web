import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
import '@ui5/webcomponents-icons/dist/project-definition-triangle-2.js';
import '@ui5/webcomponents-icons/dist/collaborate.js';

import '../src/standard-type-renderers/display-registry.js';

/**
 * `demo-furo-ui5-data-table-repeats`
 *
 * @Summary basic usage
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTableRepeats extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataTableRepeats') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
          --_ui5_input_width: 24px;
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 100%;
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
      <h2>Demo furo-ui5-data-table-repeats</h2>
      <furo-demo-snippet>
        <template>
          <furo-ui5-card
            heading="Display Data in Tabular Form"
            subheading="You can bind every repeated field (Array of Objects)"
            icon="project-definition-triangle-2"
          >
            <furo-ui5-data-table
              slot="content"
              show-no-data
              no-data-text="No data available. Click on load test data"
              ƒ-bind-data="--dao(*.entities)"
              columns="data.id, data.display_name, data.cost_limit, data.start, data.end, data.description"
              @-tablerow-selected="--itemSelected"
            ></furo-ui5-data-table>
          </furo-ui5-card>

          <furo-ui5-button-bar>
            <furo-empty-spacer></furo-empty-spacer>
            <produce-qp-data @-data="--qp" qpescaped="%7B%22prj%22%3A1%7D"></produce-qp-data>
          </furo-ui5-button-bar>

          <br />

          <furo-ui5-card
            heading="Project Members"
            subheading="Simple RepeaterNode Bind"
            icon="collaborate"
          >
            <furo-ui5-data-table
              slot="content"
              show-no-data
              no-data-text="No data available. Click on load test data"
              ƒ-bind-data="--daoProjectEntity(*.data.members)"
              columns="first_name, name, phone_nr"
            ></furo-ui5-data-table>
          </furo-ui5-card>

          <furo-deep-link
            service="ProjectService"
            @-hts-out="--hts"
            ƒ-qp-in="--qp"
          ></furo-deep-link>

          <furo-collection-agent
            service="ProjectService"
            ƒ-hts-in="--hts"
            list-on-hts-in
            @-response="--response"
          >
          </furo-collection-agent>

          <furo-data-object
            type="project.ProjectCollection"
            @-object-ready="--dao"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-entity-agent
            service="ProjectService"
            ƒ-hts-in="--itemSelected(*.links)"
            load-on-hts-in
            @-load-success="--projectLoaded"
          ></furo-entity-agent>

          <furo-data-object
            type="project.ProjectEntity"
            @-object-ready="--daoProjectEntity"
            ƒ-inject-raw="--projectLoaded"
          ></furo-data-object>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-table-repeats', DemoFuroUi5DataTableRepeats);
