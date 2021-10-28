import { LitElement, html, css } from 'lit';

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
  bindData(navnode) {
    // eslint-disable-next-line no-param-reassign
    navnode.description._value = 'Primary';
    // eslint-disable-next-line no-param-reassign
    navnode.secondary_text._value = 'Secondary';
    // eslint-disable-next-line no-param-reassign
    navnode.icon._value = 'action';
    this._FBPTriggerWire('--navNode', navnode);
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
      <furo-form-layouter one>
        <furo-ui5-data-text-input ƒ-bind-data="--navNode(*.description)"></furo-ui5-data-text-input>
        <furo-ui5-data-text-input
          ƒ-bind-data="--navNode(*.secondary_text)"
        ></furo-ui5-data-text-input>
        <furo-ui5-data-text-input ƒ-bind-data="--navNode(*.icon)"></furo-ui5-data-text-input>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('nav-node-form', NavNodeForm);
