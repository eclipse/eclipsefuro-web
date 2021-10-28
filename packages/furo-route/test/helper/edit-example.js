
import { html, css } from 'lit';
import { BasePanel } from '../../src/lib/BasePanel.js';

import '@furo/util/src/furo-pretty-json';
/**
 * `edit-example`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class EditExample extends BasePanel {
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
   * @private
   */
  _FBPReady() {
    super._FBPReady();
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
      <p>Edit Panel</p>
      <furo-pretty-json ƒ-inject-data="--navNode(*._value)"> </furo-pretty-json>
    `;
  }
}

window.customElements.define('edit-example', EditExample);
