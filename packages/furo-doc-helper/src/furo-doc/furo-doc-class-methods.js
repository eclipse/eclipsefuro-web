import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import './furo-doc-class-methods-item.js';
/**
 * `furo-doc-methods`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocClassMethods extends FBP(LitElement) {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.hidden = true;
  }

  /**
   * @private
   * @return {Object}
   */
  static get methods() {
    return {
      /**
       * hide props if empty
       */
      hidden: { type: Boolean, reflect: true },
    };
  }

  data(data) {
    if (Array.isArray(data)) {
      // show public fields only
      // eslint-disable-next-line no-param-reassign
      data = data.filter(m => m.privacy === 'public');
      this._FBPTriggerWire('--data', data);
      this.removeAttribute('hidden');
    } else {
      this.setAttribute('hidden', '');
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
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
    return (

      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        h2 {
          font-weight: 400;
          line-height: 28px;
          font-size: 20px;
          margin-top: 48px;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Methods</h2>
      <flow-repeat ƒ-inject-items="--data">
        <template>
          <furo-doc-class-methods-item ƒ-data="--item"></furo-doc-class-methods-item>
        </template>
      </flow-repeat>
    `;
  }
}

window.customElements.define('furo-doc-class-methods', FuroDocClassMethods);
