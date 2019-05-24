import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"

/**
 * `furo-empty-spacer`
 *
 * @customElement
 * @demo demo/furo-vertical-flex.html
 * @demo demo/furo-horizontal-flex.html
 * @appliesMixin FBP
 */
class FuroEmptySpacer extends LitElement {

  constructor() {
    super();
    this.flex = true;
    this.hidden = false;
  }

  static get properties() {
    return {
      /**
       * Attribute flex for furo-horizontal-flex and furo-vertical-flex
       */
      flex: {
        type: Boolean,
        reflect: true
      },
      /**
       * Set to true to hide the spacer
       */
      hidden: {
        type: Boolean,
        reflect: true
      }
    };
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
        }

        :host([hidden]) {
            display: none;
        }
    `
  }

  /**
   * @private
   * @returns {*}
   */
  render() {
    // language=HTML
    return html``;
  }

}

window.customElements.define('furo-empty-spacer', FuroEmptySpacer);
