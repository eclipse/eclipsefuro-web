import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/navigation/src/furo-catalog.js';
import '@furo/data';
import '@furo/data-input';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/route';
import '@furo/layout';
import '@furo/form';
import './helper/produce-data.js';

/**
 * `demo-furo-tree`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroTreeQp extends FBP(LitElement) {
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
        <h2>Demo demo-furo-tree</h2>
        <p>Navigate and refresh the browser to see the deep-linking</p>
        <furo-demo-snippet flex>
          <template>
            <produce-data auto @-data="--data"></produce-data>
            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>
            <furo-button @-click="--scrollSelected" label="scroll to selected"></furo-button>
            <furo-button @-click="--focusFirst" label="focus first node"></furo-button>
            <furo-button @-click="--focusLast" label="focus last node"></furo-button>
            <furo-button @-click="--focusParent" label="focus parent node"></furo-button>
            <furo-button @-click="--selectFocused" label="select focused node"></furo-button>

            <furo-split-view style="height: 500px;">
              <furo-tree
                slot="master"
                ƒ-focus="--focusClicked"
                ƒ-focus-selected="--scrollSelected"
                ƒ-focus-first="--focusFirst"
                ƒ-focus-last="--focusLast"
                ƒ-focus-parent="--focusParent"
                ƒ-select-focused="--selectFocused"
                ƒ-bind-data="--entityObj(*.data)"
                qp="panel"
                ƒ-location-in="--qp"
                @-node-selected="--nodeSelected"
                @-qp-change-requested="--qpchangerequest"
                ƒ-select-next="--next"
                ƒ-select-prev="--prev"
                ƒ-add-sub-node="--addSub"
                ƒ-expand-node-recursive="--expandNode"
                ƒ-expand-all="--expandAll"
                ƒ-collapse-all="--collapseAll"
                ƒ-delete-node="--deleteNode"
                ƒ-trigger-navigation="--navigation"
              >
                <!-- add the furo-navigation-pad for keyboard navigation -->
                <furo-navigation-pad @-navigated="--navigation"></furo-navigation-pad>
              </furo-tree>

              <tree-demo-form
                ƒ-bind-data="--nodeSelected"
                @-nav-prev-clicked="--prev"
                @-nav-next-clicked="--next"
                @-nav-add-clicked="--addSub"
                @-nav-expand-clicked="--expandNode"
                @-nav-delete-clicked="--deleteNode"
              ></tree-demo-form>
            </furo-split-view>

            <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
            <furo-data-object
              type="tree.TreeEntity"
              ƒ-inject-raw="--data"
              @-object-ready="--entityObj"
            ></furo-data-object>
            <furo-location @-location-query-changed="--qp"></furo-location>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-tree-qp', DemoFuroTreeQp);
