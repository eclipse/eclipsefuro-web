import { LitElement, html } from 'lit-element';
import {FBP} from "../fbp.js";

/**
 * `data-maker`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class DataMaker extends FBP(LitElement) {

  constructor() {
    super();
    this.data = [
        {node:"AAA", data:{id:"111"}, total:3},
        {node:"Peramnently changed on pos 2", data:{id:"222"}},
        {node:"CCC", data:{id:"333"}},
        {node:"DDD", data:{id:"444"}},
        ];

    this.addEventListener("click",()=>{
        let l = this.data.length;
        this.data[0].total = l +1;
        this.data[1].data.id = "222-" +l;
        this.data.push({node: l+ "-auto", data:{id:l}})
    });
  }

    static get properties() {
        return {
            data: {type: Array, attribute:true}
        };
    }

  render() {
    // language=HTML
    return html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: inline;
        }
        span{
        border:1px solid green;
        padding: 8px;
        }
      </style>
      <span @-click="^^data(data)">Make ${this.data.length} Data</span>
      
    `;
  }

}

window.customElements.define('data-maker', DataMaker);
