import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `furo-vertical-scroller`
 *
 *
 * @summary verticales scrollen
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroVerticalScroller extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
          overflow-y: scroll;
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {};
  }

}

window.customElements.define('furo-vertical-scroller', FuroVerticalScroller);
