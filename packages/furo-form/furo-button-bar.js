import {PolymerElement, html} from '@polymer/polymer';
import "@furo/layout/furo-horizontal-flex"

/**
 * `furo-button-bar`
 *
 *
 * @summary
 * @customElement
 * @polymer
 */
class FuroButtonBar extends (PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
        }

        ::slotted(*) {
          margin: 0 8px;
        }

        ::slotted(*:first-child) {
          margin-left: 0;
        }

        ::slotted(*:last-child) {
          margin-right: 0;
        }
      </style>
      <furo-horizontal-flex>
        <slot></slot>
      </furo-horizontal-flex>
    `;
  }

}

window.customElements.define('furo-button-bar', FuroButtonBar);
