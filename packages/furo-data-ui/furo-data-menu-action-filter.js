import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `furo-data-menu-action-filter`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-menu-action-filter
 * @appliesMixin FBP
 */
class FuroDataMenuActionFilter extends FBP(LitElement) {


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

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataMenuActionFilter') || css`
        :host {
            display: block;
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
      <p>Hej, welcome</p>
    `;
  }
}

window.customElements.define('furo-data-menu-action-filter', FuroDataMenuActionFilter);
