import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import slideDown from '@ui5/webcomponents-base/dist/animations/slideDown.js';
import slideUp from '@ui5/webcomponents-base/dist/animations/slideUp.js';
import '@furo/ui5/src/lib/ui5-icons.js';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/Panel';

/**
 * `furo-ui5-data-header-panel`
 *  A bindable header panel. Bind a navigation node...
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--furo-ui5-data-header-panel-icon-color` | Color of the icon  | #ffffff | --
 * `--furo-ui5-data-header-panel-icon-background-color` | background Color of the icon | #354a5f | --
 * `--furo-ui5-data-header-panel-splitter-start-color` |  the gradient-start hex-Color of the splitter | --primary-dark | #0854a0
 * `--furo-ui5-data-header-panel-splitter-end-rgba-color` | the gradient-end rgba-Color of the splitter | --primary-rgb | rgba(8, 84, 16, 0)
 *
 *
 * @summary A bindable header panel
 * @customElement
 * @demo demo-furo-ui5-data-header-panel
 * @appliesMixin FBP
 */
class FuroUi5DataHeaderPanel extends FBP(LitElement) {
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
      subTitle: { type: String, attribute: 'sub-title' },

      /**
       * icon
       */
      icon: { type: String, attribute: 'icon' },
    };
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * @param fieldNode
   */
  bindheaderText(fieldNode) {
    if (fieldNode === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.headerText = fieldNode._value;
    fieldNode.addEventListener("field-value-changed", () => {
      this.headerText = fieldNode._value;
    })
  }

  /**
   * Bind any **scalar** field to set the subtitle of the panel.
   * @param fieldNode
   */
  bindsubTitle(fieldNode) {
    if (fieldNode === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.subTitle = fieldNode._value;
    fieldNode.addEventListener("field-value-changed", () => {
      this.subTitle = fieldNode._value;
    })
  }

  /**
   * bind a tree.Navigationnode field
   * @param fieldNode
   */
   bindNavNode(fieldNode) {
    if (fieldNode === undefined || fieldNode.display_name !== undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    this._field = fieldNode;
    this._field.addEventListener('this-branch-value-changed', () => {
      this._setNavNodeSignatureValues();
    });

    this._setNavNodeSignatureValues();
  }

  /**
   * update attributes according to the value of tree.Navigationnode signature
   * @private
   */
  _setNavNodeSignatureValues() {
    this.headerText = this._field.display_name._value;
    if(this._field.secondary_text !== undefined){
      this.subTitle = this._field.secondary_text._value;
    }
    if(this._field.icon !== undefined) {
      this.icon = this._field.icon._value;
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    const panel = this.shadowRoot.querySelector('ui5-panel');

    this._FBPAddWireHook('--collapserClicked', () => {
      panel.collapsed = !panel.collapsed;

      if (!panel.shouldAnimate()) {
        panel.fireEvent('toggle');
        return;
      }

      panel._animationRunning = true;
      const elements = panel.getDomRef().querySelectorAll('.ui5-panel-content');
      const animations = [];

      [].forEach.call(elements, oElement => {
        if (panel.collapsed) {
          animations.push(
            slideUp({
              element: oElement,
            }).promise(),
          );
        } else {
          animations.push(
            slideDown({
              element: oElement,
            }).promise(),
          );
        }
      });

      Promise.all(animations).then(() => {
        panel._animationRunning = false;
        panel._contentExpanded = !panel.collapsed;
        panel.fireEvent('toggle');
      });

      if (panel.collapsed) {
        this.setAttribute('collapsed', '');
      } else {
        this.removeAttribute('collapsed');
      }
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
      Theme.getThemeForComponent('FuroUi5DataHeaderPanel') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        :host([collapsed]) .collapser-button {
          transform: rotate(180deg);
        }

        ui5-panel {
          padding: var(--spacing, 24px) var(--spacing, 24px) 0 var(--spacing, 24px);
          background: var(--surface, white);
        }

        .header {
          width: 100%;
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

        .icon {
          width: 40px;
          height: 40px;
          margin: 2px 32px 0 0;
          padding: 19px 20px 21px 20px;
          border-radius: 4px;
          display: inline-block;
          color: var(--furo-ui5-data-header-panel-icon-color, #ffffff);
          background-color: var(--furo-ui5-data-header-panel-icon-background-color, #354a5f);
        }

        :host([fixed]) .splitter_bar{
          display: none;
        }

        .splitter_bar {
          width: 100%;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          background-color: var(--sapGroup_TitleBackground);
          margin-top: -24px;
        }

        .collapser-button {
          width: 1.5rem;
          height: 1.5rem;
          min-width: 1.5rem;
          will-change: transform;
          overflow: visible;
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
            var(--furo-ui5-data-header-panel-splitter-start-color, var(--primary-dark, #0854a0)),
            var(--furo-ui5-data-header-panel-splitter-end-rgba-color,  rgba(var(--primary-rgb, 8, 84, 160), 0))
          );
        }

        .splitter.before {
          background-image: linear-gradient(
            to left,
            var(--furo-ui5-data-header-panel-splitter-start-color, var(--primary-dark, #0854a0)),
            var(--furo-ui5-data-header-panel-splitter-end-rgba-color,  rgba(var(--primary-rgb, 8, 84, 160), 0))
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
       <ui5-panel fixed>
          <div slot="header" class="header">
            <ui5-title>${this.headerText}</ui5-icon></ui5-title>
            <ui5-label>${this.subTitle}</ui5-label>
            <slot name="action" class="action"></slot>
          </div>
          <div class="wrapper">
            ${this.icon ? html` <ui5-icon class="icon" name="${this.icon}"></ui5-icon> ` : html``}
            <div class="content"><slot></slot></div>
          </div>
      </ui5-panel>
      <div class="splitter_bar">
        <div class="splitter before"></div>
        <ui5-button @-click="--collapserClicked" class="collapser-button" icon="slim-arrow-up" design="Transparent" ui5-button="" icon-only="" ></ui5-button>
        <div class="splitter after"></div>
      </div>
    `;
  }
}

window.customElements.define('furo-ui5-data-header-panel', FuroUi5DataHeaderPanel);
