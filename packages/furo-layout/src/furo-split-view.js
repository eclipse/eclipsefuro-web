import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import { Theme } from '@furo/framework/src/theme';

import './furo-horizontal-flex.js';
import './furo-vertical-scroller.js';

/**
 * `furo-split-view`  is a layouter for master detail views.
 *
 * You can add the attribute scroll on the detail view to make the content scrollable.
 *
 *
 * ```html
 * <furo-split-view>
 *   <div slot="master">Master</div>
 *   <big-component scroll> </big-component>
 * </furo-split-view>
 * ```
 * ### Styling
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--split-master-width` | width of the master slot | 270px | --
 *
 * Left right layout for master detail views
 *
 * @summary splitted layout
 * @customElement
 * @demo demo-furo-split-view Basic usage
 * @appliesMixin FBP
 */
class FuroSplitView extends FBP(LitElement) {
  static get properties() {
    return {
      /**
       * flip the left and right side
       */
      reverse: { type: Boolean },
    };
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroSplitView') ||
      css`
        :host {
          display: block;
          height: inherit;
        }
        :host([hidden]) {
          display: none;
        }
        .master {
          height: inherit;
          width: var(--split-master-width, 270px);
          min-width: var(--split-master-width, 270px);
        }

        .detail {
          height: 100%;
          position: relative;
        }

        furo-horizontal-flex {
          height: 100%;
        }
        ::slotted([scroll]) {
          height: 100%;
          overflow-y: auto;
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
      <furo-horizontal-flex ?reverse="${this.reverse}">
        <div class="master">
          <slot name="master"></slot>
        </div>
        <div flex class="detail">
          <slot></slot>
        </div>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-split-view', FuroSplitView);
