import { css } from 'lit';

import { FuroButtonBar } from '@furo/form/src/furo-button-bar.js';

/**
 * `furo-ui5-button-bar`
 *  is a wrapper for buttons which gives a nice border and paddings to a group of buttons.
 *  It uses the furo-button-bar which allows you to bind a data entity with HATEOAS information.
 *
 * @slot {HTMLElement [0..n]} - default slot to add action controls (e.g. button, furo-button, furo-ui5-button).
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

      css`
        :host {
          display: block;
          border-radius: 4px;
          margin-left: 1px;
          margin-right: 1px;
          box-shadow: var(
            --furo-ui5-content-shadow,
            var(
              --sapContent_Shadow1,
              rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
              rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
            )
          );
          background-color: #ffffff;
        }

        :host([design='Footer']) {
          border-radius: 0;
          background-color: var(--sapPageFooter_Background);
          border-top: 0.0625rem solid var(--sapPageFooter_BorderColor);
          box-shadow: none;
        }
        :host([design='Subheader']) {
          border-radius: 0;
          background-color: var(--sapPageHeader_Background);
          height: var(--_ui5_bar_subheader_height);
          box-shadow: inset 0 -0.0625rem var(--sapPageHeader_BorderColor);
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
