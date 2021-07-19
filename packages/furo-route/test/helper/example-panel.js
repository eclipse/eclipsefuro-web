import { html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';

import '@furo/util/src/furo-pretty-json';
import { BasePanel } from '../../src/lib/BasePanel.js';
/**
 * `example-panel`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class ExamplePanel extends BasePanel {
  constructor() {
    super();
    // register the close
    // todo: do some checks
    this._FBPAddWireHook('--navNode', treeNode => {
      this.treeNode = treeNode;
      treeNode.addEventListener(
        'close-requested',
        () => {
          this.treeNode.selectItem();
          this.removePanel();
        },
        { once: true },
      );
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      name: { type: String },
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
      Theme.getThemeForComponent('ExamplePanel') ||
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
      <p>I am a example-panel component with name ${this.name}</p>
      <furo-pretty-json ƒ-inject-data="--panelActivated"></furo-pretty-json>
    `;
  }
}

window.customElements.define('example-panel', ExamplePanel);
