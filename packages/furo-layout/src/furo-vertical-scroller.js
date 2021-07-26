import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-vertical-scroller`
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * ```html
 * <furo-vertical-scroller>
 *   <your-content></your-content>
 * </furo-vertical-scroller>
 * ```
 *
 *
 * @summary vertical scroll
 * @customElement
 * @demo demo-furo-vertical-scroller Basic usage
 * @appliesMixin FBP
 */
class FuroVerticalScroller extends FBP(LitElement) {
  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroVerticalScroller') ||
      css`
        :host {
          display: block;
          height: 100%;
          overflow-y: auto;
        }

        :host([hidden]) {
          display: none;
        }

        /** the background of the bar itself. **/
        ::-webkit-scrollbar {
          width: 8px;
          background-color: var(--surface, white);
        }

        /** the directional buttons on the scrollbar. **/
        ::-webkit-scrollbar-button {
          background-color: var(--on-surface, black);
        }

        /** the empty space “below” the progress bar. **/
        ::-webkit-scrollbar-track {
        }

        /** the top-most layer of the the progress bar not covered by the thumb. **/
        ::-webkit-scrollbar-track-piece {
        }

        /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
        ::-webkit-scrollbar-thumb {
          background-color: var(--on-surface, black);
          border-radius: 10px;
        }

        /** the bottom corner of the scrollable element, where two scrollbar meet. **/
        ::-webkit-scrollbar-corner {
        }

        /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
        ::-webkit-resizer {
        }
      `
    );
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

window.customElements.define('furo-vertical-scroller', FuroVerticalScroller);
