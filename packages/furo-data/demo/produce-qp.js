import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";
import "@furo/input/src/furo-button.js";
/**
 * `produce-qp`
 *
 * @customElement
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
          display: inline;
        }
      </style>
      <furo-button primary ƒ-click="--autoclick" @-click="^^qp(qp)" label="make qp"></furo-button>
    `;
  }

}

window.customElements.define('produce-qp', ProduceQp);
