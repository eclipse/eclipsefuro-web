import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

/**
 * `element-attribute-setter`
 * Helper component to set attributes and values
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class ElementAttributeSetter extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  setFlag(flag) {
    const slottedNodes = this.assignedSlot.assignedNodes()[1].childNodes[0].assignedNodes();
    slottedNodes.forEach(node => {
      if (node.nodeName.toLocaleLowerCase().startsWith('furo-ui5')) {
        node.setAttribute(flag, null);
      }
    });
  }

  removeFlag(flag) {
    const slottedNodes = this.assignedSlot.assignedNodes()[1].childNodes[0].assignedNodes();
    slottedNodes.forEach(node => {
      if (node.nodeName.toLocaleLowerCase().startsWith('furo-ui5')) {
        node.removeAttribute(flag);
      }
    });
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('element-attribute-setter', ElementAttributeSetter);
