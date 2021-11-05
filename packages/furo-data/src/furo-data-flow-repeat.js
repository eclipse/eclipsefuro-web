import { FlowRepeat } from '@furo/fbp/src/flow-repeat';
import { FieldNodeAdapter } from './lib/FieldNodeAdapter.js';

/**
 * `furo-data-flow-repeat` Is a bindable repeater.
 *
 *
 *  ```html
 *  <furo-data-flow-repeat ƒ-bind-data="--data(*.repeaterfield)">
 *    <template>
 *      <furo-ui5-data-text-input-labeled
 *          ƒ-bind-data="--init"></furo-ui5-data-text-input-labeled>
 *    </template>
 *  </furo-data-flow-repeat>
 *  ```
 *  *The wire `--init` is fired from furo-data-flow-repeat*
 *
 *  If you want to delete a repeated item, implement something which triggers the `deleteNode` method on the fieldNode itself.
 *
 *  ## Available wires in the template:
 *
 * -  `--init` : contains the repeated item, fired only once on creation of the repeated node
 * -  `--item` : contains the repeated item, fired on every inject
 * -  `--firstItem` : contains the repeated item, fired on the first element.
 * -  `--lastItem` : contains the repeated item, fired on the last element.
 * -  `--index` : contains a number with the index of the element.
 * -  `--host` : contains a reference to the host component.
 * -  `--trigger` : contains what was passed in to the triggering method.
 * -  `--triggerFirst` : contains what was passed in to the triggering method.
 * -  `--triggerLast` : contains what was passed in to the triggering method.
 * -  `--itemSelected` : contains nothing, is triggered with select(index).
 * -  `--itemDeSelected` : contains nothing, is triggered when another item is selected with select(index).
 *
 * ## Available attributes
 * **index** contains the current index of the item. Use this to fire a event with an index like `@-click="^^item-clicked(index)"`
 * **item** contains the current index of the item. Use this to fire a event with the repeated item like `@-click="^^item-selected(item)"`
 *
 *
 * @summary automatic display of repeated fields
 * @customElement
 * @demo demo-furo-data-flow-repeat
 * @appliesMixin FlowRepeat
 */
export class FuroDataFlowRepeat extends FieldNodeAdapter(FlowRepeat) {
  constructor() {
    super();
    /**
     * Enable this to select the created item. This will trigger a wire `--itemSelected` which can be wired to
     * `ƒ-focus="--itemSelected"`.
     * @type {boolean}
     */
    this.selectAddedItem = false;
  }

  /**
   * @private
   */
  onFnaRepeatedFieldChanged() {
    this.injectItems(this.__fieldNode.repeats);
  }

  /**
   * Adds a repeated item of the same type.
   *
   * @param data {Object} Object that match the type of the repeated node.
   */
  add(data) {
    if (!this.readonly && this.__fieldNode) {
      this.__fieldNode.add(data);
      if (this.getAttribute('select-added-item') !== null) {
        this.select(this.__fieldNode.repeats.length - 1);
      }
    }
  }
}

window.customElements.define('furo-data-flow-repeat', FuroDataFlowRepeat);
