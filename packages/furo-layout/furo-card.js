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
            --furo-button-padding: 4px;
            background: var(--furo-card-background, white);
            padding-bottom: var(--furo-card-padding, var(--spacing-xs, 8px));
            margin: var(--furo-card-margin, 0);
            box-sizing: border-box;
            position: relative;
            border-radius: 4px;
        }

      
        :host([hidden]) {
            display: none;
        }
        
        .content{
            padding: var(--furo-card-padding, var(--spacing-s, 16px));
        }
        
        .action {
            position: absolute;
            bottom:var(--furo-card-padding, var(--spacing-xs, 8px));
            left: var(--furo-card-padding, var(--spacing-xs, 8px));
        }
        
        .media ::slotted(*){
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
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
      <div class="media">
      <slot name="media"></slot>
      </div>
      <div class="content">
      <slot></slot>
      </div>
      <div class="action">
        <slot name="action"></slot>
      </div>
    `;
  }
}

window.customElements.define('furo-card', FuroCard);
