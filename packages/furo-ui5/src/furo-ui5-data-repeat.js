import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js'
import { FlowRepeat } from '@furo/fbp/src/flow-repeat'

/**
 * `furo-ui5-data-repeat`
 *  Display for repeated fields.
 *
 *  ```html
 *  <furo-ui5-data-repeat ƒ-bind-data="--data(*.repeaterfield)"
 *      repeated-component="furo-date-input"
 *      delete-icon="remove"
 *      ƒ-add="--addDateClicked"
 *      ></furo-ui5-data-repeat>
 *
 *      <!-- Add is controlled from outside, delete from inside of the item -->
 *      <furo-ui5-data-repeat ƒ-bind-data="--data(*.repeatedcomplextype)"
 *      repeated-component="my-big-form"
 *      ƒ-add="--addClicked"
 *      ></furo-ui5-data-repeat>
 *
 *  ```
 *
 *  Every Attribute (boolean or string) which is set on furo-ui5-data-repeat which is not part of its own api, will be set on the child element.
 *  If you set condensed as an example, it will be set on the repeated element. It is not possible to set wires to the children.
 *
 *
 *
 * @summary automatic display of repeated fields
 * @customElement
 * @demo demo-furo-ui5-data-repeat
 * @appliesMixin FBP
 */
export class FuroUi5DataRepeat extends FieldNodeAdapter(FlowRepeat) {



  /**
   * @private
   */
  onFnaRepeatedFieldChanged() {
    this.injectItems(this.__fieldNode.repeats)
  }



  /**
   * Adds a repeated item
   * @param data
   */
  add(data) {
    if (!this.readonly && this.__fieldNode) {
      this.__fieldNode.add(data)
      if (this.focusOnCreate) {
        // setTimeout(()=>{
        this._repeaterNode.select(this.__fieldNode.repeats.length - 1)
        // },16)
      }
    }
  }

  /**
   * Adds a repeated item with type
   * @param type
   */
  addType(type) {
    if (this.field) {
      this.__fieldNode.add({ '@type': type })
    }
  }


}

window.customElements.define('furo-ui5-data-repeat', FuroUi5DataRepeat)
