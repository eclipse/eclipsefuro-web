import {LitElement, html,css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-checkbox`
 * Checkbox input element which uses a native `<input type="checkbox">` tag. Works best with furo-data components.
 *
 * Tags: input
 * @summary checkbox input element
 * @demo demo/checkbox.html
 * @customElement
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroDataCheckboxInput extends FBP(FuroInputBase(LitElement)) {

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            margin: 0;
            padding: 8px 0 2px 0;
            height: 75px;
            line-height: 1.5;
            font-family: "Roboto", "Noto", sans-serif;
            font-kerning: auto;
            font-size: 16px;
            font-stretch: 100%;
            font-style: normal;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }

        :host([hidden]) {
            display: none;
        }

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
        }
        
        .border{
            position: absolute;
            width: 100%;
            height: 1px;
            top:28px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
        }

        :host(:focus-within) .border{
            border-color: var(--primary,#3f51b5);
            border-width: 1px;
        }
        
        label {
            position: unset;
            top: unset;
            color: unset;
            pointer-events: unset;
            display: unset;
            width: unset;
            overflow: unset;
            padding-left: 12px;
        }
        * {
            transition: all 150ms ease-out;
        }

        .hint{
            position: absolute;
            top: 30px;
            font-size: 10px;
            color:transparent;
            white-space: nowrap;
            pointer-events: none;
        }
        :host(:focus-within) .hint{
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }
    `
  }

  render() {
    return html` 
      <input id="input"  aria-label="${this._label}" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="checkbox" list="datalist" ƒ-.checked="--value" @-input="--inputCheckbox(*)"   ƒ-focus="--focusReceived">     
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

customElements.define('furo-data-checkbox-input', FuroDataCheckboxInput);
