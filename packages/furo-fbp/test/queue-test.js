import { LitElement, html } from 'lit-element';
import { FBP } from '../src/fbp.js';

/**
 * `queue-test`
 *
 * @customElement
 * @appliesMixin FBP
 */
class QueueTest extends FBP(LitElement) {
  constructor() {
    super();
    this.later = 333;
    this._FBPTriggerWire('--queue', 12);
    this._FBPAddWireHook('--queue', e => {
      this.later = e;
    });
  }

  firstUpdated(d) {
    super.firstUpdated(d);
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
      <p ƒ-click="--queue" @-click="--qq">Hej, welcome</p>
    `;
  }
}

window.customElements.define('queue-test', QueueTest);
