import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/navigation/src/furo-catalog.js';
import '@furo/data';
import '@furo/data-input';
import '@furo/layout';
import '@furo/form';
import './helper/produce-data.js';
import './helper/tree-demo-form.js';

/**
 * `demo-furo-tree`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroTree extends FBP(LitElement) {
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
        <p>description</p>
        <furo-demo-snippet flex>
          <template>
            <produce-data auto @-data="--data"></produce-data>
            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>
            <furo-data-object
              type="tree.TreeEntity"
              ƒ-inject-raw="--data"
              @-object-ready="--entityObj"
            ></furo-data-object>

            <furo-split-view style="height: 500px;">
              <furo-tree
                slot="master"
                ƒ-focus="--focusClicked"
                ƒ-bind-data="--entityObj(*.data)"
                @-node-selected="--nodeSelected"
                root-as-header
                ƒ-select-next="--next"
                ƒ-select-prev="--prev"
                ƒ-add-sub-node="--addSub"
                ƒ-expand-node-recursive="--expandNode"
                ƒ-expand-all="--expandAll"
                ƒ-collapse-all="--collapseAll"
                ƒ-delete-node="--deleteNode"
                @-node-hovered="--nodeHovered"
              ></furo-tree>

              <tree-demo-form
                ƒ-bind-data="--nodeSelected"
                @-nav-prev-clicked="--prev"
                @-nav-next-clicked="--next"
                @-nav-add-clicked="--addSub"
                @-nav-expand-clicked="--expandNode"
                @-nav-delete-clicked="--deleteNode"
              ></tree-demo-form>
            </furo-split-view>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-tree', DemoFuroTree);
