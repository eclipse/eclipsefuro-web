import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Icon.js';

/**
 * `ui5-data-repeat-delete`
 * Deletes a repeated item. Built for furo-ui5-data-repeat
 *
 * @customElement
 * @appliesMixin FBP
 */
class Ui5DataRepeatDelete extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      icon: { type: String },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * Register hook on wire --iconClicked to
     * delete the item
     */
    this._FBPAddWireHook('--iconClicked', () => {
      this.field.deleteNode();
    });
  }

  bindItem(repeatedNode) {
    this.field = repeatedNode;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('Ui5DataRepeatDelete') ||
      css`
        :host {
          display: block;
          box-sizing: border-box;
          cursor: pointer;
          margin-left: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
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
      <ui5-icon
        name="${this.icon}"
        @-click="--iconClicked"
        interactive
        accessible-name="delete"
      ></ui5-icon>
    `;
  }
}

window.customElements.define('ui5-data-repeat-delete', Ui5DataRepeatDelete);
