import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';
import { i18n } from '@furo/framework/src/i18n.js';

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
import '@ui5/webcomponents-icons/dist/project-definition-triangle-2';

import '../src/standard-type-renderers/display-registry.js';
import './helper/data-table-col-tmpl.js';
import './helper/data-table-col-tmpl-link.js';

/**
 * `demo-furo-ui5-data-table-tmpl`
 *
 * @Summary basic usage
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTableTmpl extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataTableTmpl') ||
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
      <furo-vertical-flex>
        <h2>Demo furo-ui5-data-table-tmpl</h2>
        <furo-demo-snippet>
          <template>
            <furo-vertical-scroller>
              <furo-ui5-card
                heading="Display Data in Tabular Form"
                subheading="Add custom template columns"
                icon="project-definition-triangle-2"
              >
                <furo-ui5-data-table
                  slot="content"
                  show-no-data
                  no-data-text="No data available. Click on load test data"
                  ƒ-bind-data="--dao(*.entities)"
                  @-template-col-clicked="--rowData"
                  headers="${i18n.t('header1')}|120,${i18n.t('header2')}|600,${i18n.t(
      'header3',
    )}|400,${i18n.t('header4')}--:|400,${i18n.t('header5')}:-:|400,${i18n.t(
      'header6',
    )}:-:|&gt;400,${i18n.t('header7')}|&gt;400"
                  columns="data.id, data.display_name, {data-table-col-tmpl}, data.cost_limit, data.start, data.end, {data-table-col-tmpl-link}"
                ></furo-ui5-data-table>
              </furo-ui5-card>

              <furo-ui5-button-bar>
                <furo-empty-spacer></furo-empty-spacer>
                <produce-qp-data @-data="--qp" qpescaped="%7B%22prj%22%3A1%7D"></produce-qp-data>
              </furo-ui5-button-bar>

              <furo-pretty-json ƒ-inject-data="--rowData"></furo-pretty-json>
            </furo-vertical-scroller>
      </furo-vertical-flex>
      <furo-data-object
        type="project.ProjectCollection"
        @-object-ready="--dao"
        ƒ-inject-raw="--response"
      ></furo-data-object>
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

      <furo-data-object type="task.Task" @-object-ready="--entityTaskReady"></furo-data-object>
      <furo-collection-agent
        service="PersonService"
        ƒ-hts-in="--entityTaskReady(*.owner.link._value)"
        list-on-hts-in
        ƒ-search="--term"
        @-response="--refCol"
      >
      </furo-collection-agent>
      </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-table-tmpl', DemoFuroUi5DataTableTmpl);
