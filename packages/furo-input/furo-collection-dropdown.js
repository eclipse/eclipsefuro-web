import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"

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
            font-size: 12px;
            box-sizing: border-box;
            margin: 0 0 14px 0;
            padding: 8px 0 2px 0;
            height: 28px;
            font-family: "Roboto", "Noto", sans-serif;
            line-height: 1.5;
        }

        :host([hidden]) {
            display: none;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }


        select{
            width: 100%;
            outline: none;
        }

        .border {
            position: absolute;
            width: 100%;
            height: 1px;
            top: 28px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
         }

        label {
            position: absolute;
            top: 8px;
            color: rgba(0, 0, 0, .26);
            font-size: 12px;
            pointer-events: none;
            display: block;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-align: left;
         }

        label[float="true"] {
            color: var(--primary-color, #3f51b5);
            font-size: 10px;
            top: -4px;
            visibility: visible;
         }

        * {
            transition: all 150ms ease-out;
        }

        .hint {
            position: absolute;
            top: 30px;
            font-size: 10px;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
         }

        :host(:focus-within) .hint {
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }

        :host(:focus-within) .border {
            border-color: var(--primary-color, #3f51b5);
            border-width: 1px;
        }
    `
    }

    render() {
      // language=HTML
      return html`
      <select ?autofocus=${this.autofocus} ?disabled=${this.disabled} @-change="--inputInput(*)" ƒ-.value="--value">
            <template is="flow-repeat" ƒ-inject-items="--selection">
                <option ƒ-.value="--item(*.id)" ƒ-.selected="--item(*.selected)" ƒ-.inner-text="--item(*.label)"></option>
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
        let label = this.getAttribute("display-field");
        let val = this.getAttribute("value-field");
        // map
        let arr = collection.data.map((e) => {
            return {"id": e.data[val], "label": e.data[label], "selected": (this.value == e.data[val])}
        });

        if (!this.value) {
            this.field.value = arr[0].id;
        }

        this._FBPTriggerWire("--selection", arr);
    }
}

customElements.define('furo-collection-dropdown', FuroCollectionDropdown);
