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
class FuroTextareaInput extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
  :host{
    height: unset;
  }
  .border{
    top:unset;
    bottom: -4px;                
  }
  
        textarea {
          border: none;
          display: inline-block;
          background: 0 0;
          font-size: 12px;
          margin: 0 0 -3px 0;
          padding: 0;
          width: 100%;
          text-align: left;
          color: inherit;
          outline: none;
        }

</style>
     
     
      <textarea id="input" type="text" list="datalist" ƒ-.value="--value" @-input="--inputInput(*.path.0)" rows="${this.rows}"  ƒ-focus="--focusReceived"></textarea>
      <div class="border"></div>
      <label float="${this._float}" for="input">${this.label}</label>   
      <div class="hint">${this.hint}</div>
 
    `;
  }


  constructor() {
    super();
    this.rows = 3;

  }


  static get properties() {
    return {
      rows: {
        type: Number
      }
    };
  }


}

customElements.define('furo-textarea-input', FuroTextareaInput);
