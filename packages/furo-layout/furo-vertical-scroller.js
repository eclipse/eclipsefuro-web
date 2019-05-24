import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-vertical-scroller`
 *
 * ```
 * <furo-vertical-scroller>
 *   <your-content></your-content>
 * </furo-vertical-scroller>
 * ```
 *
 *
 * @summary vertical scroll
 * @customElement
 * @demo demo/furo-vertical-scroller.html
 * @appliesMixin FBP
 */
class FuroVerticalScroller extends FBP(LitElement) {

  constructor() {
    super();
  }


    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
      // language=CSS
      return Theme.getThemeForComponent(this.name) || css`
          :host {
              display: block;
              height: 100%;
              overflow-y: auto;
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
    return html`<slot></slot>`;
  }

}

window.customElements.define('furo-vertical-scroller', FuroVerticalScroller);
