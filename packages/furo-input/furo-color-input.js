import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-color`
 * Simple color input element which uses a native `<input type="color">` tag
 *
 * Tags: input
 * @summary color input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroColorInput extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}

input{
  min-width:30px;
    height: 19px;
}

</style>
     
      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="color" ƒ-.value="--value" @-input="--inputInput(*.path.0)"   ƒ-focus="--focusReceived">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `;
  }

  constructor() {
    super();
  }


  _init() {
    super._init();
    this._float = true;
  }
}

customElements.define('furo-color-input', FuroColorInput);
