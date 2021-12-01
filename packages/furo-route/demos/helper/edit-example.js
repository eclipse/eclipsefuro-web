// eslint-disable-next-line import/no-extraneous-dependencies
import { BasePanel } from '@furo/route/src/lib/BasePanel';

import { html, css } from 'lit';

import '@furo/util/src/furo-pretty-json';
/**
 * `edit-example`
 * @customElement
 * @demo demo/edit-example.html
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
