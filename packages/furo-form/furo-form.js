import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import '@furo/layout';

/**
 *
 * Form container with integrated activity indicator and three slots.
 *
 * `furo-form`
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-form
 * @appliesMixin FBP
 */
class FuroForm extends FBP(LitElement) {

  constructor() {
    super();
    this.hasaction = this.querySelectorAll('*[slot="action"]').length > 0;
    this.hasmedia = this.querySelectorAll('*[slot="media"]').length > 0;
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


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            --furo-button-padding: var(--spacing-xs, 8px);
            background: var(--furo-form-background, var(--surface, white));
            padding-bottom: var(--furo-form-padding, var(--spacing-xs, 8px));
            margin: var(--furo-form-margin, 0);
            box-sizing: border-box;
            position: relative;
            font-size: 14px;
            letter-spacing: 0.1px;
        }

        furo-loading-indicator-bar{
            position: absolute;
            top:0;
            width: 100%;
        }
        :host([hidden]) {
            display: none;
        }

        :host([hasaction]) .content {
            padding-bottom: 54px;
        }


        /** no padding-top on .content if header-text is set **/
        :host([header-text]) .content {
            padding-top: 0;
        }

        /** set padding-top on .content if media is present **/
        :host([header-text][hasmedia]) .content {
            padding-top: var(--furo-form-padding, var(--spacing-s, 16px));
        }


        .content ::slotted(h1) {
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0;
            margin: 0;
            font-weight: normal;
            margin-bottom: var(--spacing-xxs, 4px);
            margin-top: var(--spacing-s, 16px);
        }

        .content ::slotted(secondary) {
            color: var(--secondary-color, var(--primary-light, #777777));
            line-height: 22px;
            font-size: unset;
            display: block;
            margin-bottom: var(--spacing-xs, 4px);
        }
        .content ::slotted(h2) {
            line-height: 24px;
            letter-spacing: 0;
            margin: 0;
            font-weight: normal;
            margin-bottom: var(--spacing-xxs, 4px);
            margin-top: var(--spacing-s, 16px);
        }

        .action {
            position: absolute;
            bottom: var(--furo-form-padding, var(--spacing-xs, 8px));
            left: var(--furo-form-padding, 0);
            right: var(--furo-form-padding, 0);

        }


        :host([header-text]) .head {
            display: block;
        }

        .head {
            display: none;
            padding: var(--spacing-s, 16px) 0;
        }

        .head span {
            color: var(--secondary-color, var(--primary-light, #777777));
            line-height: 22px;
        }

        h1 {
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0;
            margin: 0;
            font-weight: normal;
            margin-bottom: var(--spacing-xxs, 4px);
        }


        .media ::slotted(*) {
            width: 100%;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-loading-indicator-bar ƒ-start="--activityStarted" ƒ-stop="--activityStopped"></furo-loading-indicator-bar>
      <div class="head">
      <h1>${this.headerText}</h1>
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

window.customElements.define('furo-form', FuroForm);
