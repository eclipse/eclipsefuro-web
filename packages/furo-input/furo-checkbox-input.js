import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-checkbox`
 * Simple checkbox input element which uses a native `<input type="checkbox">` tag
 *
 * Tags: input
 * @summary checkbox input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroCheckboxInput extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
label{        
margin-left: 24px;
font-size: 18px;             
pointer-events: unset;
display: unset;
width: unset;
overflow: unset;
text-align: left;
color:unset;
@apply --input-base-label-mixin;
}

</style>
     
      
      <input id="input" type="checkbox" list="datalist" ƒ-.value="--value" @-input="--inputInput(*.path.0)"   ƒ-focus="--focusReceived">
      <div class="border"></div>
      <label   for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `;
  }

  constructor() {
    super();
  }

}

customElements.define('furo-checkbox-input', FuroCheckboxInput);
