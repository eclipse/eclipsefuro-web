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
    return html`
    <style>
    ${this._sharedStyle}
    
        input {
          border: none;  
          background: 0 0;
          font-size: 12px;
          margin: 0;
          padding: 0;
          width: unset;
          text-align: left;
          color: inherit;
          outline: none;
          @apply --input-base-input-mixin; 
        }
  
        label.text {
          position: unset;        
          top: unset;        
          color: unset;                 
          pointer-events: unset;        
          display: unset;        
          width: unset;        
          overflow: unset;        
          
          
          padding-left: 12px;
          @apply --input-base-label-mixin;
          @apply --checkbox-label-mixin;
        }
 
        
        
        
        
</style>
     
      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="checkbox" list="datalist" ƒ-.value="--value" @-input="--inputCheckbox(*.path.0)"   ƒ-focus="--focusReceived">     
      <label for="input" class="text">${this._label}</label>
      
      <div class="border"></div>  
      <div class="hint">${this.hint}</div>
 
    `;
    // language=HTML
  }

  constructor() {
    super();
    this._text = this.getAttribute('text')
  }

  static get properties() {
    return {
      text: {
        type: String,
        attribute: true
      }
    }
  }
}

customElements.define('furo-checkbox-input', FuroCheckboxInput);
