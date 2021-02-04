import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `nav-node-form`
 *  Demo helper
 *
 *  Displays a form for a nav-node
 *
 * @customElement
 * @appliesMixin FBP
 */
class NavNodeForm extends FBP(LitElement) {

  bindData(navnode){
    navnode.display_name._value = "Display_name"
    navnode.secondary_text._value = "secondary"
    navnode.icon._value = "action"
    this._FBPTriggerWire("--navNode", navnode)

  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('NavNodeForm') || css`
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
      <furo-form-layouter one>
        <furo-ui5-data-text-input-labeled ƒ-bind-data="--navNode(*.display_name)"></furo-ui5-data-text-input-labeled>
        <furo-ui5-data-text-input-labeled ƒ-bind-data="--navNode(*.secondary_text)"></furo-ui5-data-text-input-labeled>
        <furo-ui5-data-text-input-labeled ƒ-bind-data="--navNode(*.icon)"></furo-ui5-data-text-input-labeled>


      </furo-form-layouter>
    `;
  }
}

window.customElements.define('nav-node-form', NavNodeForm);
