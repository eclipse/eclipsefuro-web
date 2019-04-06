import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-text`
 * Simple text input element which uses a native `<input type="text">` tag
 *
 * Tags: input
 * @summary text input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroCollectionDropdown extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
select{
width: 100%;
outline: none;
}
</style>
     
      <select @-change="--inputInput(*.path.0)" ƒ-.value="--value">
            <template is="flow-repeat" ƒ-inject-items="--selection">
              <option ƒ-.value="--item(*.id)" ƒ-.selected="--item(*.selected)" ƒ-.inner-text="--item(*.label)">
              </option>
            </template>
          </select>
               
      <div class="border"></div>
      <label float="true" for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
      
    `;
  }

  constructor() {
    super();
  }



  /**
   * Exposes --injectCollection
   * @param {collection} det
   */
  injectCollection(collection) {
    let label = this.getAttribute("display-field")
    let val = this.getAttribute("value-field")
    // map
    let arr = collection.data.map((e) => {
      return {"id": e.data[val], "label": e.data[label], "selected": (this.value == e.data[val])}
    })

    this._FBPTriggerWire("--selection", arr);
  }


}

customElements.define('furo-collection-dropdown', FuroCollectionDropdown);
