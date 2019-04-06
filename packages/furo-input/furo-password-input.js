import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-password`
 * Simple password input element which uses a native `<input type="password">` tag
 *
 * Tags: input
 * @summary password input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroPasswordInput extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
</style>
     
      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="password" list="datalist" ƒ-.value="--value" @-input="--inputInput(*.path.0)"   ƒ-focus="--focusReceived">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `;
  }

  constructor() {
    super();
  }

}

customElements.define('furo-password-input', FuroPasswordInput);
