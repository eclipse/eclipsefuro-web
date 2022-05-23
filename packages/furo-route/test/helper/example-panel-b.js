import { html, css } from 'lit';


import '@furo/util/src/furo-pretty-json';
import { BasePanel } from '../../src/lib/BasePanel.js';
/**
 * `example-panel-b`
 *
 * @customElement
 * @appliesMixin FBP
 */
class ExamplePanelB extends BasePanel {
  constructor() {
    super();
    // register the close
    this._FBPAddWireHook('--navNode', treeNode => {
      this.treeNode = treeNode;
      treeNode.addEventListener('close-requested', () => {
        this.treeNode.selectItem();

        const result = true; // window.confirm("Sie haben ungespeicherte daten, Wirklich schliessen?");
        if (result) {
          this.removePanel();
        }
      });
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

      css`
        :host {
          display: block;
          background-color: #ebe34b;
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
      <p>I am a example-panel-b component with name ${this.name}</p>

      <furo-pretty-json fn-inject-data="--panelActivated"></furo-pretty-json>
      <button at-click="-^close-panel-requested(name)">close</button>
    `;
  }
}

window.customElements.define('example-panel-b', ExamplePanelB);
