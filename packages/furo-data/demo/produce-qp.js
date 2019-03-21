import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `produce-qp`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class ProduceQp extends FBP(LitElement) {

  constructor() {
    super();
    this.qp= {"vtr":12, "tfag":233};
    setTimeout(()=>{
      this._FBPTriggerWire("--autoclick")
    },300)
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
      <p ƒ-click="--autoclick" @-click="^^qp(qp)">make qp</p>
    `;
  }

}

window.customElements.define('produce-qp', ProduceQp);
