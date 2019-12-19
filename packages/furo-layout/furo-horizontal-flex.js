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
 * ```html
 * <furo-horizontal-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-horizontal-flex>
 * ```
 *  Tags: layout
 *
 * @customElement
 * @demo demo-furo-horizontal-flex
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
    return Theme.getThemeForComponent('FuroHorizontalFlex') || css`
        
        :host {
            width: 100%;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
        }

        :host([reverse]) {
            -ms-flex-direction: row-reverse;
            -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse;
        }

        ::slotted(*[flex]) {
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
        }
        :host([hidden]) {
            display: none;
        }
        
        
        :host([space]) ::slotted(*:not(:first-child)) {
            margin-left:   var(--spacing-xs, 8px);
        }      
        
        :host([space]) ::slotted(*:not(:last-child)) {
            margin-right:  var(--spacing-xs, 8px);
        }


        :host([bigspace]) ::slotted(*:not(:first-child)) {
            margin-left:   var(--spacing, 8px);
        }

        :host([bigspace]) ::slotted(*:not(:last-child)) {
            margin-right:  var(--spacing, 24px);
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
            <slot></slot>
        `;
  }
}

window.customElements.define('furo-horizontal-flex', FuroHorizontalFlex);
