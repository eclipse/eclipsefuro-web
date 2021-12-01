import { html, css } from 'lit';


import '@furo/util/src/furo-pretty-json';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BasePanel } from '@furo/route/src/lib/BasePanel';
/**
 * `example-panel`
 *
 * @customElement
 * @demo demo/example-panel.html
 * @appliesMixin FBP
 */
class ExamplePanel extends BasePanel {
  constructor() {
    super();
    // register the close
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
