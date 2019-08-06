import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-card`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-card
 * @appliesMixin FBP
 */
class FuroCard extends FBP(LitElement) {



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
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);

            background: var(--furo-card-background, white);
            padding: var(--furo-card-padding, 12px);
            margin: var(--furo-card-margin, 0);
            box-sizing: border-box;
            height: var(--furo-card-height, unset);
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }
        .action{
            position: absolute;
            bottom: 0;
            left: 0;
            right:0;
            border-top: 1px solid var(--separator);
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
      <div class="action">
        <slot name="action"></slot>
      </div>
    `;
  }
}

window.customElements.define('furo-card', FuroCard);
