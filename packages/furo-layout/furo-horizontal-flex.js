import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-horizontal-flex`
 *
 *  Für vertikales anordnen von Komponenten. Die Breite ist automatisch auf 100% gesetzt (display block).
 *
 *  Setze auf dem flexiblen Element das Attribut **flex**
 *
 *
 * ```
 * <furo-horizontal-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-horizontal-flex>
 * ```
 *  Tags: layout
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class FuroHorizontalFlex extends FBP(LitElement) {

  constructor() {
    super();
  }

  static get properties() {
    return {
      message: {type: String},
      myArray: {type: Array},
      myBool: {type: Boolean}
    };
  }


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

          --layout-horizontal: {
            @apply --layout;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
          };

          --layout-flex: {
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
          };
          
          --layout-horizontal-reverse: {
            @apply --layout;

            -ms-flex-direction: row-reverse;
            -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse;
          };

          @apply --layout-horizontal;
        }

        ::slotted(*[flex]) {
          @apply --layout-flex;
        }
      </style>

      <slot></slot>
    `;
  }

}

window.customElements.define('furo-horizontal-flex', FuroHorizontalFlex);
