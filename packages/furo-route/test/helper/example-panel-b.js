import { html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';

import '@furo/util/src/furo-pretty-json';
import { BasePanel } from '../../src/lib/BasePanel.js';
/**
 * `example-panel-b`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class ExamplePanelB extends BasePanel {
  constructor() {
    super();
    // register the close
    // todo: do some checks
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
      Theme.getThemeForComponent('ExamplePanelB') ||
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

      <furo-pretty-json ƒ-inject-data="--panelActivated"></furo-pretty-json>
      <button @-click="-^close-panel-requested(name)">close</button>
    `;
  }
}

window.customElements.define('example-panel-b', ExamplePanelB);
