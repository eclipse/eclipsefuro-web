import { LitElement, html } from 'lit-element';
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
   * @private
   * @returns {TemplateResult}
   */
  render() {
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

}

window.customElements.define('furo-vertical-scroller', FuroVerticalScroller);
