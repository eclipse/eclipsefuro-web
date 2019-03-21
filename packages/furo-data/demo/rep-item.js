import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `rep-item`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class RepItem extends FBP(LitElement) {

  constructor() {
    super();
  }

  static get properties() {
    return {
      item: {type: Object},
      myArray: {type: Array},
      myBool: {type: Boolean}
    };
  }

inject(d){
    this.item = d.item;
    this.index = d.index;
    this._FBPTriggerWire("--data", d.item)
}
  render() {
    // language=HTML
    return html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: block;
        }
      </style>
      ${this.index}
      <entity-object type="vnd.com.acme.task" ƒ-inject-raw="--data"  @-object-ready="--entity"></entity-object>
      
      <input-text autofocus ƒ-bind-data="--entity(*.fields.title)"></input-text>
      <input-text autofocus ƒ-bind-data="--entity(*.fields.taskId)"></input-text>
      
    `;
  }

}

window.customElements.define('rep-item', RepItem);
