import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"

import '../furo-catalog';
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
        <h2>Demo demo-furo-tree</h2>
        <p>description</p>
        <furo-demo-snippet flex>
          <template>
            <style>furo-data-text-input, furo-data-textarea-input {
              width: 100%
            }</style>

            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>
            <data-object type="vnd.com.acme.tree" ƒ-inject-raw="--data" @-object-ready="--entityObj"></data-object>

            <furo-split-view style="height: 500px;">
              <furo-tree slot="master" ƒ-focus="--focusClicked" ƒ-bind-data="--entityObj"
                         @-node-selected="--nodeSelected"
                         ƒ-select-next="--next"
                         ƒ-select-prev="--prev"
                         ƒ-add-sub-node="--addSub"
                         ƒ-expand-node-recursive="--expandNode"
                         ƒ-expand-all="--expandAll"
                         ƒ-collapse-all="--collapseAll"
                         ƒ-delete-node="--deleteNode"
                         @-node-hovered="--nodeHovered"></furo-tree>

              <furo-card style="width: 400px">

                <h4>Selected tree node</h4>

                <furo-data-text-input label="title" hint="The title is the first part in the tree"
                                      ƒ-bind-data="--nodeSelected(*.display_name)"></furo-data-text-input>
                <furo-data-collection-dropdown leading-icon="apps" ƒ-bind-data="--nodeSelected(*.icon)"
                                               label="Select icon"
                                               list="apps, fingerprint, mail, send, filter-list, alarm-on, alarm-on, undefied-icon"
                                               @-value-changed="--icon"></furo-data-collection-dropdown>
                <furo-data-textarea-input label="Text"
                                          ƒ-bind-data="--nodeSelected(*.description)"></furo-data-textarea-input>
                <hr>
                <furo-button outline @-click="--prev" label="prev"></furo-button>
                <furo-button outline @-click="--next" label="next"></furo-button>
                <furo-button outline @-click="--expandNode" label="expand"></furo-button>
                <hr>
                <furo-button outline @-click="--addSub" icon="add" label="add sub"></furo-button>
                <furo-button danger outline @-click="--deleteNode" label="delete Node"></furo-button>
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
