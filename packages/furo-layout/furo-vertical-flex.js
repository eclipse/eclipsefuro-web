import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
import '@polymer/iron-flex-layout/iron-flex-layout.js';

/**
 * `furo-vertical-flex`
 * Für vertikales anordnen von Komponenten. Die Höhe ist automatisch auf 100% gesetzt.
 * Setze auf dem flexiblen Element die Klasse **flex**
 *
 * ```
 * <furo-vertical-flex>
 *   <div>small</div>
 *   <div class="flex">full height</div>
 *   <div>small</div>
 * </furo-vertical-flex>
 * ```
 *
 * Tags: layout
 *
 * @summary vertikales anordnen
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroVerticalFlex extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
          @apply --layout-vertical;
        }

        ::slotted(.flex),::slotted(*[flex]) {
          @apply --layout-flex;
        }
      </style>

      <slot></slot>
    `
  }
}

window.customElements.define('furo-vertical-flex', FuroVerticalFlex);
