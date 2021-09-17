import { html } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/navigation/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroTreeItem } from '@furo/navigation/src/furo-tree-item.js';
import '@furo/icon/src/furo-icon.js';

/**
 * `demo-tree-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/demo-tree-item.html
 * @appliesMixin FBP
 */
class DemoTreeItem extends FuroTreeItem {
  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex
        @-dblclick="--dblclicked"
        @mouseenter="${() => this.fieldNode.triggerHover()}"
      >
        <div style="width: ${this.fieldNode.depth * 8}px; border-right: 1px solid green;"></div>

        <div class="oc">
          <furo-data-bool-icon
            ?hidden="${!this.fieldNode.children.repeats.length}"
            ƒ-toggle="--dblclicked"
            ƒ-bind-data="--fieldOpen"
          ></furo-data-bool-icon>
        </div>
        <div flex class="label" @-click="--labelClicked">
          ${this.fieldNode.display_name} <span class="desc">${this.fieldNode.description}</span>
        </div>
        <furo-icon icon="more-vert"></furo-icon>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('demo-tree-item', DemoTreeItem);
