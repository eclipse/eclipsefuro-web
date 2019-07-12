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




    this.addEventListener("swap",()=>{
        this._array_move(this.data, this.data.length-1, 1 );
        this._array_move(this.data, 2, this.data.length-1);
        let customEvent = new Event('data', {composed:true, bubbles: true});
        customEvent.detail = this.data;
        this.dispatchEvent(customEvent)

    });

    this.addEventListener("fire",()=>{


        let l = this.data.length;
        this.data[0].total = l +1;
        this.data[1].data.id = "222-" +l;
        this.data.push({node: l+ "-auto", data:{id:l}});

        /**
         * @event data
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('data', {composed:true, bubbles: true});
        customEvent.detail = this.data;
        this.dispatchEvent(customEvent);
    });


  }

    static get properties() {
        return {
            data: {type: Array, attribute:true}
        };
    }

    _array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

    };
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
      <span @-click="^^fire">Make ${this.data.length} Data</span>
      
      <span @-click="^^swap">swap</span>
      
    `;
  }

}

window.customElements.define('data-maker', DataMaker);
