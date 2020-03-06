import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "./furo-loading-indicator-bar"

//todo: implement like this: https://material.io/design/components/cards.html#anatomy

/**
 * `furo-card`
 *  is a container with a shadow and slots for media, content, actions,...
 *
 * @summary Material design card element
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
      headerText: {type: String, attribute: "header-text"},
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
    return Theme.getThemeForComponent('FuroCard') || css`
      :host {
        display: block;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
        --furo-button-padding: var(--spacing-xs, 8px);
        background: var(--furo-card-background, var(--surface, white));
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
        padding-bottom: 56px;
      }


      /** no padding-top on .content if header-text is set **/
      :host([header-text]) .content {
        padding-top: 0;
      }

      /** set padding-top on .content if media is present **/
      :host([header-text][hasmedia]) .content {
        padding-top: var(--furo-card-padding, var(--spacing-s, 16px));
      }

      .content {
        padding: var(--furo-card-padding, var(--spacing-s, 16px));
      }

      .content ::slotted(h1) {

        font-size: 24px;
        line-height: 24px;
        letter-spacing: 0;
        margin: 0;
        font-weight: normal;
        margin-bottom: 4px;

      }

      .action {
        position: absolute;
        bottom: var(--furo-card-padding, var(--spacing-s, 16px));
        left: var(--furo-card-padding, var(--spacing-s, 16px));
        right: var(--furo-card-padding, var(--spacing-s, 16px));

      }

 
      .head {
        padding: var(--spacing-s, 16px);
      }

      .head span {
        color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
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

      :host([header-text]) .media ::slotted(*) {
        border-radius: 0;
      }

      .media ::slotted(*) {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        width: 100%;
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
      <furo-loading-indicator-bar ƒ-start="--activityStarted" ƒ-stop="--activityStopped"></furo-loading-indicator-bar>
            ${this.headerText ? html`
      <div class="head">
         <h1>${this.headerText}</h1>
         ${this.secondaryText ? html`<span>${this.secondaryText}</span>` : html``}     
      </div>` : html``} 
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

  /**
   * You can show a progress indicator while you have pending requests or work
   * Shows furo-loading-indicator-bar
   */
  startActivity() {
    this._FBPTriggerWire('--activityStarted');
  }

  /**
   * Stop loading indicator
   * Hides furo-loading-indicator-bar
   */
  stopActivity() {
    this._FBPTriggerWire('--activityStopped');
  }
}

window.customElements.define('furo-card', FuroCard);
