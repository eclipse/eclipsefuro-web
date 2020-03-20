import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `furo-data-context-menu-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-context-menu-item
 * @appliesMixin FBP
 */
class FuroDataContextMenuItem extends FBP(LitElement) {


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  bindData(menuNode){
    this.menuitem = menuNode;

  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataContextMenuItem') || css`
        :host {
            display: block;
          height: 32px;
          line-height: 32px;
        }

        :host([hidden]) {
            display: none;
        }
    `;
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      ${this.menuitem.display_name}
    `;
  }
}

window.customElements.define('furo-data-context-menu-item', FuroDataContextMenuItem);
