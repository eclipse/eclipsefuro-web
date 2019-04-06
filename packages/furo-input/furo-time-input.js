import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-time`
 * Simple time input element which uses a native `<input type="time">` tag
 *
 * Tags: input
 * @summary time input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroTimeInput extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
</style>
     
      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="time" list="datalist" ƒ-.value="--value" @-input="--inputInput(*.path.0)"   ƒ-focus="--focusReceived">
      <div class="borderBig"></div>
      <label float="true" for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `;
  }

  constructor() {
    super();
  }

  _init() {
    super._init()
    this._float = true;
  }

}

customElements.define('furo-time-input', FuroTimeInput);
