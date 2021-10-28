import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// import slideDown from '@ui5/webcomponents-base/dist/animations/slideDown.js';
// import slideUp from '@ui5/webcomponents-base/dist/animations/slideUp.js';

import '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import '@ui5/webcomponents/dist/Avatar.js';

import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/Panel.js';

/**
 * `furo-ui5-header-panel`
 *  A bindable **header** panel.
 *
 *  **Info**: This component is intended to use as a header panel, if you need panels in your view, consider to use
 *  a ui5-panel directly. That is also the reason that the api does not match with ui5-panel.
 *
 *  This component is a container which has a header and a content area and is used for grouping and displaying information.
 *  It can be collapsed to save space on the screen.
 *
 * @slot {HTMLElement [0..n]} action - defines an action, displayed in the right most part of the header panel.
 * @slot {HTMLElement [0..n]} - defines the content of the panel
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * @cssprop {#ffffff} [--furo-ui5-header-panel-icon-color=--ui5-avatar-initials-color] - Color of the icon
 * @cssprop {#354a5f} [--furo-ui5-header-panel-icon-background-color=--ui5-avatar-accent6] - background Color of the icon
 * @cssprop {#354a5f} [--furo-ui5-header-panel-splitter-start-color=--primary-dark] - the gradient-start hex-Color of the splitter
 * @cssprop {rgba(8, 84, 16, 0)} [--furo-ui5-header-panel-splitter-end-rgba-color=--primary-rgb] - the gradient-end rgba-Color of the splitter
 *
 * @summary A bindable header panel
 * @customElement
 * @demo demo-furo-ui5-header-panel Without data binding
 * @demo demo-furo-ui5-header-panel-binding With data binding
 * @appliesMixin FBP
 */
export class FuroUi5HeaderPanel extends FBP(LitElement) {
  constructor() {
    super();
    this.icon = '';
    this.iconSize = 'S';
    this.headerText = '';
    this.secondaryText = '';
    this.collapsed = false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Header Text
       */
      headerText: { type: String, attribute: 'header-text' },

      /**
       * sub title
       */
      secondaryText: { type: String, attribute: 'secondary-text' },

      /**
       * icon
       */
      icon: { type: String, attribute: 'icon' },

      /**
       * size of the icon. Available options are: XS S M L XL. Default is S.
       */
      iconSize: { type: String, attribute: 'icon-size' },

      collapsed: { type: Boolean, reflect: true },
    };
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * @param {FieldNode} fieldNode
   */
  bindHeaderText(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.headerText = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.headerText = fieldNode._value;
    });
  }

  /**
   * Bind any **scalar** field to set the secondaryText of the panel.
   * @param {FieldNode} fieldNode
   */
  bindSecondaryText(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.secondaryText = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.secondaryText = fieldNode._value;
    });
  }

  /**
   * bind a furo.navigation.Navigationnode field
   * @param {FieldNode} fieldNode
   */
  bindNavNode(fieldNode) {
    if (fieldNode === undefined || fieldNode.display_name === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    this._field = fieldNode;
    this._field.addEventListener('field-value-changed', () => {
      this._setNavNodeSignatureValues(fieldNode);
    });

    this._setNavNodeSignatureValues(fieldNode);
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * Do not forget to import the icon you will use in your component.
   * @param {FieldNode} fieldNode
   */
  bindIcon(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.icon = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.icon = fieldNode._value;
    });
  }

  /**
   * toggles the collapse state
   */
  toggleCollapse() {
    this._FBPTriggerWire('--collapserClicked', null);
  }

  /**
   * update attributes according to the value of furo.navigation.Navigationnode signature
   * @private
   */
  _setNavNodeSignatureValues(fieldNode) {
    this.headerText = fieldNode.display_name._value;
    if (fieldNode.secondary_text !== undefined) {
      this.secondaryText = fieldNode.secondary_text._value;
    } else if (fieldNode.description !== undefined) {
      this.secondaryText = fieldNode.description._value;
    }

    if (fieldNode.icon !== undefined) {
      this.icon = fieldNode.icon._value;
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    const panel = this.shadowRoot.querySelector('ui5-panel');

    this._FBPAddWireHook('--collapserClicked', () => {
      // toggle the panel
      panel.collapsed = !panel.collapsed;
      this.collapsed = panel.collapsed;
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
          position: relative;
        }

        :host([hidden]) {
          display: none;
        }

        :host([collapsed]) .collapser-button {
          transform: rotate(180deg);
        }

        ui5-panel {
          padding: var(--spacing, 24px) var(--spacing, 24px) 0 var(--spacing, 24px);
          background: var(--sapGroup_ContentBackground, white);
          min-height: 5rem;
          box-sizing: border-box;
          border-bottom: none;
        }

        .header {
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .content {
          display: inline-block;
          width: 100%;
        }

        .wrapper {
          display: flex;
        }

        .action {
          display: inline-block;
          float: right;
          margin-top: -26px;
        }

        .header .ui5-panel-header-button-root {
          display: none;
        }

        ui5-avatar {
          color: var(--furo-ui5-header-panel-icon-color, var(--ui5-avatar-initials-color, #fffff));
          background-color: var(
            --furo-ui5-header-panel-icon-background-color,
            var(--ui5-avatar-accent6, #354a5f)
          );
          margin-right: var(--spacing-xs);
        }

        :host([fixed]) .splitter_bar {
          display: none;
        }

        .splitter_bar {
          width: 100%;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          background: var(--sapGroup_ContentBackground, white);
          border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
          position: absolute;
          bottom: 0;
        }

        .collapser-button {
          width: 1rem;
          height: 1rem;
          min-width: 1rem;
          will-change: transform;
          overflow: visible;
          cursor: pointer;
          color: var(--primary-dark);
        }

        .splitter {
          width: 6rem;
          height: 1rem;
          background-size: 100% 0.0625rem;
          background-repeat: no-repeat;
          background-position: center;
        }

        .splitter.after {
          background-image: linear-gradient(
            to right,
            var(--furo-ui5-header-panel-splitter-start-color, var(--primary-dark, #0854a0)),
            var(
              --furo-ui5-header-panel-splitter-end-rgba-color,
              rgba(var(--primary-rgb, 8, 84, 160), 0)
            )
          );
        }

        .splitter.before {
          background-image: linear-gradient(
            to left,
            var(--furo-ui5-header-panel-splitter-start-color, var(--primary-dark, #0854a0)),
            var(
              --furo-ui5-header-panel-splitter-end-rgba-color,
              rgba(var(--primary-rgb, 8, 84, 160), 0)
            )
          );
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <ui5-panel fixed ?collapsed="${this.collapsed}">
        <div slot="header" class="header">
          <ui5-title>${this.headerText}</ui5-title>
          <ui5-label>${this.secondaryText}</ui5-label>
          <slot name="action" class="action"></slot>
        </div>
        <div class="wrapper">
          ${this.icon
            ? html`
                <ui5-avatar
                  class="icon"
                  icon="${this.icon}"
                  size="${this.iconSize}"
                  shape="Square"
                ></ui5-avatar>
              `
            : html``}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </ui5-panel>
      <div class="splitter_bar">
        <div class="splitter before"></div>
        <ui5-icon
          @-click="--collapserClicked"
          class="collapser-button"
          name="slim-arrow-up"
          design="Transparent"
          ui5-button=""
          icon-only=""
        ></ui5-icon>
        <div class="splitter after"></div>
      </div>
    `;
  }
}

window.customElements.define('furo-ui5-header-panel', FuroUi5HeaderPanel);
