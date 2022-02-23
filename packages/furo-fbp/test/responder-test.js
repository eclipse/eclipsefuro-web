import { LitElement, html } from 'lit';
import { FBP } from '../src/fbp.js';

/**
 * `responder-test`
 *
 * @customElement
 * @appliesMixin FBP
 */
class ResponderTest extends FBP(LitElement) {
  constructor() {
    super();
  }

  firstUpdated(d) {
    super.firstUpdated(d);
  }

  double(n) {
    return n * 2;
  }

  tripple(n) {
    return n * 3;
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
      Hej, welcome
    `;
  }
}

window.customElements.define('responder-test', ResponderTest);
