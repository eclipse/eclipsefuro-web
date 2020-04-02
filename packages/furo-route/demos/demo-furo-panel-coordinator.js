import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/route/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/navigation/src/furo-catalog.js';

import './helper/example-panel.js';
import './helper/example-panel-b.js';
import './helper/edit-example.js';

import '@furo/navigation/src/furo-mini-tabs';

import '@furo/util/src/furo-key-filter';
import '@furo/data';
import './helper/panel-produce-data.js';
import '@furo/layout';
import './helper/registerTypes.js';

/**
 * `demo-furo-panel-coordinator`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroPanelCoordinator extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroPanelCoordinator') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --split-master-width: 400px;
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
            <furo-vertical-scroller>
              <panel-produce-data auto @-data="--data"></panel-produce-data>

              <furo-split-view style="height: 500px;">
                <furo-tree
                  slot="master"
                  ƒ-focus="--escapeOnTabs"
                  ƒ-bind-data="--entityObj(*.data)"
                  qp="panel"
                  ƒ-location-in="--qp"
                  @-keydown="--keydownOnTree(*)"
                  @-node-selected="--nodeSelected"
                  @-qp-change-requested="--qpchangerequest"
                ></furo-tree>
                <furo-vertical-flex class="mainContent">
                  <furo-panel-coordinator-tabs
                    ƒ-inject-tabs="--panelChanges"
                  ></furo-panel-coordinator-tabs>
                  <furo-vertical-scroller flex>
                    <furo-pages default="welcome" @-escape="--escapeOnPanel">
                      <div name="welcome">Welcome</div>
                      <furo-panel-coordinator
                        ƒ-show-page="--nodeSelected"
                        @-panels-changed="--panelChanges"
                      ></furo-panel-coordinator>
                    </furo-pages>
                  </furo-vertical-scroller>
                </furo-vertical-flex>
              </furo-split-view>

              <furo-key-filter
                ƒ-filter="--keydownOnTree"
                @-matched="--escapeOnTree"
                keys="Escape"
              ></furo-key-filter>

              <furo-app-flow event="goback-requested" ƒ-trigger="--escapeOnTree"></furo-app-flow>

              <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
              <furo-data-object
                type="tree.TreeEntity"
                ƒ-inject-raw="--data"
                @-object-ready="--entityObj"
              ></furo-data-object>
              <furo-location @-location-query-changed="--qp"></furo-location>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-panel-coordinator', DemoFuroPanelCoordinator);
