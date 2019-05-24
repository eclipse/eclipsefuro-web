import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"

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
 * @demo demo/furo-horizontal-flex.html
 * @appliesMixin FBP
 */
class FuroHorizontalFlex extends (LitElement) {

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            width: 100%;
            --layout: {
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
            };

            --layout-horizontal: {
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
                -ms-flex-direction: row-reverse;
                -webkit-flex-direction: row-reverse;
                flex-direction: row-reverse;
            };

        }

        :host([hidden]) {
            display: none;
        }

    `
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
                    @apply --layout-horizontal;
                }

                :host([reverse]) {
                    @apply --layout-horizontal-reverse;
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
