import { css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FuroButtonBar } from '@furo/form/src/furo-button-bar.js';

/**
 * `furo-ui5-button-bar`
 *  is a wrapper for buttons which gives a nice border and paddings to a group of buttons.
 *
 *  It uses the furo-button-bar which allows you to bind a entitiy.
 *
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--furo-ui5-content-shadow` | shadow of button bar  | rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 2px 8px 0px) | --sapContent_Shadow0
 *
 *  ## Methods and Attributes
 *  All methods, attributes  are inherited from [furo-button-bar](/?t=FuroButtonBar)
 *
 * @customElement
 * @demo demo-furo-ui5-button-bar Basic usage
 */
export class FuroUi5ButtonBar extends FuroButtonBar {
  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return (
      Theme.getThemeForComponent('FuroUi5ButtonBar') ||
      css`
        :host {
          display: block;
          border-radius: 4px;
          margin-left: 1px;
          margin-right: 1px;
          box-shadow: var(
            --furo-ui5-content-shadow,
            var(
              --sapContent_Shadow0,
              rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
              rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
            )
          );
          background-color: #ffffff;
        }
        :host([hidden]) {
          display: none;
        }

        ::slotted(*) {
          margin: var(--spacing-xs, 8px) var(--spacing-s, 16px) var(--spacing-xs, 8px)
            var(--spacing-s, 16px);
        }
      `
    );
  }
}

customElements.define('furo-ui5-button-bar', FuroUi5ButtonBar);
