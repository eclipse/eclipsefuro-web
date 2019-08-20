import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import "@furo/layout/furo-horizontal-flex"

/**
 * `furo-button-bar`
 *
 *
 * @summary
 * @customElement
 * @demo demo/furo-button-bar.html
 * @polymer
 */
class FuroButtonBar extends (LitElement) {

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
        }

        ::slotted(*) {
            margin: var(--spacing-xs, 8px);
        }

        ::slotted(*:first-child) {
            margin-left: 0;
        }

        ::slotted(*:last-child) {
            margin-right: 0;
        }

    `
  }

  render() {
    // language=HTML
    return html`        
        <furo-horizontal-flex>
          <slot></slot>
        </furo-horizontal-flex>
    `;
  }

}

window.customElements.define('furo-button-bar', FuroButtonBar);
