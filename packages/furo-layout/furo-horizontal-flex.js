import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 * `furo-horizontal-flex`
 *  Für vertikales anordnen von Komponenten. Die Breite ist automatisch auf 100% gesetzt (display block).
 *
 *  Setze auf dem flexiblen Element die Klasse **flex**
 *
 *
 * ```
 * <furo-horizontal-flex>
 *   <div>small</div>
 *   <div class="flex">full width</div>
 *   <div>small</div>
 * </furo-horizontal-flex>
 * ```
 *  Tags: layout
 *
 * @summary horizontale andordnung von elementen
 * @customElement
 * @polymer
 */
class FuroHorizontalFlex extends (PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
          @apply --layout-horizontal;
        }

        ::slotted(.flex),::slotted(*[flex]) {
          @apply --layout-flex;
        }
      </style>

      <slot></slot>
    `
  }

}

window.customElements.define('furo-horizontal-flex', FuroHorizontalFlex);
