import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';

/**
 * `furo-mini-tabs`
 * Tabs
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroMiniTabs extends FBP(LitElement) {
  injectItems(nodeArray) {
    this._FBPTriggerWire('--itemsInjected', nodeArray);
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
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
   */
  render() {
    // language=HTML
    return html`
      <flow-repeat ƒ-inject-items="--itemsInjected">
        <template>
          jkj
        </template>
      </flow-repeat>
    `;
  }
}

window.customElements.define('furo-mini-tabs', FuroMiniTabs);
