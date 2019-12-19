import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"


import '../test/helper/example-panel';
import '../test/helper/example-panel-b';
import '../test/helper/edit-example'
import "@furo/navigation";
import "@furo/navigation/furo-mini-tabs";


import "@furo/util/furo-key-filter"
import "@furo/data"
import "../test/helper/panel-produce-data"
import "@furo/layout"
import "../test/registerTypes"


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
    return Theme.getThemeForComponent('DemoFuroPanelCoordinator') || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --split-master-width: 400px
        }

        :host([hidden]) {
            display: none;
        }

    `
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
                <furo-tree slot="master" ƒ-focus="--escapeOnTabs" ƒ-bind-data="--entityObj(*.data)"
                           qp="t"
                           ƒ-location-in="--qp"
                           @-keydown="--keydownOnTree(*)"
                           @-node-selected="--nodeSelected"
                           @-qp-change-requested="--qpchangerequest"></furo-tree>
                <furo-vertical-flex class="mainContent">
                  <furo-panel-coordinator-tabs ƒ-inject-tabs="--panelChanges" ƒ-focus="--escapeOnPanel"
                                               @-escape="--escapeOnTabs"></furo-panel-coordinator-tabs>
                  <furo-vertical-scroller flex>

                    <furo-pages default="welcome" @-escape="--escapeOnPanel">
                      <div name="welcome">Welcome</div>
                      <furo-panel-coordinator
                              ƒ-show-page="--nodeSelected"
                              ƒ-close-all="--escapeOnTree"
                              @-panels-changed="--panelChanges"></furo-panel-coordinator>
                    </furo-pages>
                  </furo-vertical-scroller>
                </furo-vertical-flex>
              </furo-split-view>


              <furo-key-filter ƒ-filter="--keydownOnTree" @-matched="--escapeOnTree" keys="Escape"></furo-key-filter>
              
              <furo-app-flow event="goback-requested" ƒ-trigger="--escapeOnTree"></furo-app-flow>

              <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
              <furo-data-object type="tree.TreeEntity" ƒ-inject-raw="--data"
                                @-object-ready="--entityObj"></furo-data-object>
              <furo-location url-space-regex="^/api/route/demo/demo-furo-panel-coordinator"
                             @-location-query-changed="--qp"></furo-location>

            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-panel-coordinator', DemoFuroPanelCoordinator);
