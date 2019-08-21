import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

//todo: implement like this: https://material.io/design/components/cards.html#anatomy

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
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Main title
       */
      title: {type: String},
      secondaryText: {type: String, attribute: "secondary-text"},
      hasaction: {type: Boolean, reflect: true},
      hasmedia: {type: Boolean, reflect: true}
    };
  }


  constructor() {
    super();
    this.hasaction = this.querySelectorAll('*[slot="action"]').length > 0;
    this.hasmedia = this.querySelectorAll('*[slot="media"]').length > 0;
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
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            --furo-button-padding: var(--spacing-xs, 8px);
            background: var(--furo-card-background, white);
            padding-bottom: var(--furo-card-padding, var(--spacing-xs, 8px));
            margin: var(--furo-card-margin, 0);
            box-sizing: border-box;
            position: relative;
            border-radius: 4px;
            font-size: 14px;
            letter-spacing: 0.1px;
        }


        :host([hidden]) {
            display: none;
        }

        :host([hasaction]) .content {
            padding-bottom: 44px;
        }


        /** no padding-top on .content if title is set **/
        :host([title]) .content {
            padding-top: 0;
        }
        
        /** set padding-top on .content if media is present **/
        :host([title][hasmedia]) .content {
            padding-top: var(--furo-card-padding, var(--spacing-s, 16px));
        }
        
        .content {
            padding: var(--furo-card-padding, var(--spacing-s, 16px));
        }

        .action {
            position: absolute;
            bottom: var(--furo-card-padding, var(--spacing-xs, 8px));
            left: var(--furo-card-padding, var(--spacing-xs, 8px));
            right: var(--furo-card-padding, var(--spacing-xs, 8px));

        }


        :host([title]) .head {
            display: block;
        }

        .head {
            display: none;
            padding: var(--spacing-s, 16px);
        }

        .head span {
            color: var(--secondary-color, var(--on-primary-light,#777777));
            line-height: 22px;
        }

        h1 {
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0;
            margin: 0;
            font-weight: normal;
            margin-bottom: 4px;
        }

        :host([title]) .media ::slotted(*) {
            border-radius: 0;
        }

        .media ::slotted(*) {
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
        <div class="head">
          <h1>${this.title}</h1>
        <span>${this.secondaryText}</span>  
        </div>
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
