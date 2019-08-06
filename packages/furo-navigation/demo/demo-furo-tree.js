import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"

import '../furo-catalog';
import "../test/initEnv"
import "@furo/data"
import "../test/produce-data"
import "@furo/data-input"
import "@furo/layout"
import "@furo/form"

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
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
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
        <h2>Demo demo-furo-tree</h2>
        <p>description</p>
        <furo-demo-snippet flex>
          <template>
            
            
            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>
            <entity-object type="vnd.com.acme.tree" ƒ-inject-raw="--data" @-object-ready="--entityObj"></entity-object>
            
            <furo-split-view style="height: 500px;">
              <furo-tree slot="master" ƒ-focus="--focusClicked" ƒ-bind-data="--entityObj(*.fields)" @-node-selected="--nodeSelected"
                         ƒ-select-next="--next"
                         ƒ-select-prev="--prev"
                         ƒ-add-sub-node="--addSub"
                         ƒ-expand-node-recursive="--expandNode"
                         ƒ-expand-all="--expandAll"
                         ƒ-collapse-all="--collapseAll"
                         ƒ-delete-node="--deleteNode"
                         @-node-hovered="--nodeHovered"></furo-tree>
              
              <furo-card>
                <h4>Hovered</h4>
                <furo-input-row label="title" @-click="--thcl">
                  <furo-text-input flex ƒ-focus="--thcl" ƒ-bind-data="--nodeHovered(*.display_name)"></furo-text-input>
                </furo-input-row>
                <furo-input-row label="description">
                  <furo-data-textarea-input flex ƒ-bind-data="--nodeHovered(*.description)"></furo-data-textarea-input>
                </furo-input-row>

                <h4>Selected</h4>
                <furo-input-row label="title">
                  <furo-text-input flex
                                   ƒ-bind-data="--nodeSelected(*.display_name)"></furo-text-input>
                </furo-input-row>
                <furo-input-row label="description">
                  <furo-data-textarea-input flex ƒ-bind-data="--nodeSelected(*.description)"></furo-data-textarea-input>
                </furo-input-row>
                <furo-button @-click="--prev">prev</furo-button>
                <furo-button @-click="--next">next</furo-button>
                <furo-button @-click="--addSub">add sub</furo-button>
                <furo-button @-click="--deleteNode">deleteNode</furo-button>
                <furo-button @-click="--expandNode">expand</furo-button>
              </furo-card>
            </furo-split-view>


            <produce-data auto @-data="--data"></produce-data>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-tree', DemoFuroTree);
