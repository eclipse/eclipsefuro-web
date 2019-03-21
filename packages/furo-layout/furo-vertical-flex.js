import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-vertical-flex`
 *
 *  Für vertikales anordnen von Komponenten. Die Breite ist automatisch auf 100% gesetzt (display block).
 *
 *  Setze auf dem flexiblen Element das Attribut **flex**
 *
 *
 * ```
 * <furo-vertical-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-vertical-flex>
 * ```
 *  Tags: layout
 *
 * @customElement
 * @demo demo/furo-vertical-flex.html
 * @appliesMixin FBP
 */
class FuroVerticalFlex extends FBP(LitElement) {

  constructor() {
    super();
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;

          --layout: {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          };

          --layout-vertical: {
            @apply --layout;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
          };

          --layout-vertical: {
            @apply --layout;

            -ms-flex-direction: column;
            -webkit-flex-direction: column;
            flex-direction: column;
          };

          --layout-vertical-reverse: {
            @apply --layout;

            -ms-flex-direction: column-reverse;
            -webkit-flex-direction: column-reverse;
            flex-direction: column-reverse;
          };
          
          @apply --layout-vertical;
        }

        ::slotted(*[flex]) {
          @apply --layout-flex;
        }
      </style>

      <slot></slot>
    `;
  }

}

window.customElements.define('furo-vertical-flex', FuroVerticalFlex);
