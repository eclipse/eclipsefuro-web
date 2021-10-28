import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/CardHeader.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents/dist/Icon.js';

/**
 * `furo-ui5-card`
 * is a bindable card that represents information in the form of a tile with separate header and content areas.
 *
 * ```html
 *  <furo-ui5-card
 *    heading="Title"
 *    subheading="Secondary text"
 *    icon="card"
 *  >
 *      <div slot="action"><furo-ui5-button>Action</furo-ui5-button></div>
 *      <div slot="content">content goes here</div>
 *  </furo-ui5-card>
 *```
 * ## How To Use Semantic Colors
 * You can use semantic colors to visualize the status or state. Set the attribute design="" with the following values:
 * - Positive (--sapPositiveColor)
 * - Negative (--sapNegativeColor)
 * - Critical (--sapCriticalColor)
 * - Neutral (--sapCriticalColor)
 *
 * * ```html
 *  <furo-ui5-card
 *    design="Positive"
 *    icon="card"
 *  >
 *      <div slot="content">content goes here</div>
 *  </furo-ui5-card>
 *```
 *
 * @slot {HTMLElement [0..n]} action - defines an action, displayed in the right most part of the header. Note: If status is set, the status text will be displayed, you can either have action, or status.
 * @slot {HTMLElement [0..n]} content - defines the content of the card
 *
 * @fires header-clicked - Fired when the card head is clicked. The header-interactive attribute must be set.
 * @fires header-click - Fired when interactive header was clicked.
 *
 * @customElement
 * @demo demo-furo-ui5-card Basic Usage
 * @demo demo-furo-ui5-card-binding With data binding
 */
export class FuroUi5Card extends FBP(LitElement) {
  constructor() {
    super();
    this.icon = '';
    this.heading = '';
    this.subheading = '';
    this.status = '';
    this.headerInteractive = false;
    this.noContentPadding = false;
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * @param {FieldNode} fieldNode
   */
  bindHeading(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.heading = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.heading = fieldNode._value;
    });
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
   * Bind any **scalar** field to set the subtitle of the panel.
   * @param {FieldNode} fieldNode
   */
  bindSubheading(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.subheading = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.subheading = fieldNode._value;
    });
  }

  /**
   * bind a field with the signature of furo.navigation.Navigationnode
   *
   * Used fields are:
   * - display_name
   * - secondary_text
   * - icon
   *
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
      this._setNavNodeSignatureValues();
    });

    this._setNavNodeSignatureValues();
  }

  /**
   * update attributes according to the value of furo.navigation.Navigationnode signature
   * @private
   */
  _setNavNodeSignatureValues() {
    this.heading = this._field.display_name._value;
    if (this._field.secondary_text !== undefined) {
      this.subheading = this._field.secondary_text._value;
    }
    if (this._field.icon !== undefined && this._field.icon._value !== undefined) {
      this.icon = this._field.icon._value;
    }
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return (

      css`
        :host {
          display: block;
          opacity: 1;
          transition: opacity ease-in-out 120ms;
        }

        :host([hidden]) {
          display: none;
        }

        :host([transparent]) {
          opacity: 0;
        }

        ui5-card {
          height: 100%;
        }

        :host([design='Positive']) ui5-icon {
          color: var(--sapPositiveColor);
        }

        :host([design='Negative']) ui5-icon {
          color: var(--sapNegativeColor);
        }

        :host([design='Critical']) ui5-icon {
          color: var(--sapCriticalColor);
        }

        :host([design='Neutral']) ui5-icon {
          color: var(--sapNeutralColor);
        }

        ::slotted([slot='content']) {
          padding: var(--_ui5_card_content_padding);
        }

        :host([no-content-padding]) ::slotted([slot='content']) {
          padding: 0;
        }

        /* this is used to make the card height from the consumer of the card (i.e. z-grid) */
        .content {
          height: var(--furo-ui5-cardContentHeight, initial);
        }
      `
    );
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the title displayed in the ui5-card header.
       */
      heading: { type: String },
      /**
       * Defines the subheading displayed in the ui5-card header.
       */
      subheading: { type: String },
      /**
       * Defines the visual representation in the header of the card. Supports images and icons.
       * https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
       */
      icon: { type: String, reflect: true, attribute: 'icon' },
      /**
       * Defines the status text displayed in the card header (upper right).
       *
       * By enabling the status, actions are not visible.
       */
      status: { type: String },
      /**
       * Defines if the ui5-card header would be interactive, e.g gets hover effect, gets focused and header-click event is fired, when it is pressed.
       *
       */
      headerInteractive: { type: Boolean, reflect: true, attribute: 'header-interactive' },
      /**
       * Shows the content slot area with no padding
       */
      noContentPadding: { type: Boolean, reflect: true, attribute: 'no-content-padding' },
    };
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-card ?no-content-padding="${this.noContentPadding}">
        <ui5-card-header
          @-click="^^header-clicked"
          slot="header"
          ?interactive="${this.headerInteractive}"
          title-text="${this.heading}"
          subtitle-text="${this.subheading}"
          status="${this.status}"
        >
          ${this.icon.length
            ? html`
                <ui5-icon name="${this.icon}" slot="avatar"></ui5-icon>
              `
            : html``}
          ${this.status !== ''
            ? html``
            : html`
                <div slot="action">
                  <slot name="action"></slot>
                </div>
              `}
        </ui5-card-header>

        <div class="content">
          <slot name="content"></slot>
        </div>
      </ui5-card>
    `;
  }
}

customElements.define('furo-ui5-card', FuroUi5Card);
