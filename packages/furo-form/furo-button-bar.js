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
          @apply --furo-button-bar-mixin;
        }

        ::slotted(*) {
          margin: var(--furo-button-bar-margin, 0 8px);
          @apply --furo-button-bar-slot-mixin;
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
