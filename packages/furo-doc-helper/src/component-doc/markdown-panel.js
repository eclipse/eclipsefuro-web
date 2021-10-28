import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/util/src/furo-markdown.js';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';
/**
 * `markdown-panel`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class MarkdownPanel extends FBP(LitElement) {
  constructor() {
    super();
    /**
     * Callback function to interact with close requests
     * Return a true if closing is allowed or false if not
     *
     * @return {boolean}
     */
    this.onCloseRequest = () => true;

    /**
     * Attach the close-requested listener to the nav node. So you can trigger a close-requested from another location like tab-bar,...
     */
    this._FBPAddWireHook('--navNode', fieldNode => {
      this.treeNode = fieldNode;
      fieldNode.addEventListener('close-requested', e => {
        if (this.onCloseRequest(e)) {
          this.treeNode.dispatchNodeEvent(new NodeEvent('panel-closed', this, false));
          this.closePanel();
        }
      });
      this._FBPTriggerWire('--content', this.treeNode.payload._value);
    });

    /**
     * closes the panel directly on internal events, stops the propagation to make it possible to have nested panels
     */
    this.addEventListener('close-immediately-request', e => {
      e.stopPropagation();
      this.closePanel();
    });

    /**
     * Register hook on wire --panelCloser to
     * close the panel with a wire
     */
    this._FBPAddWireHook('--panelCloser', () => {
      this.closePanel();
    });
  }

  /**
   * Close the panel
   */
  closePanel() {
    if (this.treeNode) {
      this.removePanel();
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
          background-color: var(--surface);
          padding: var(--spacing);
          height: 100%;
          overflow: scroll;
          box-sizing: border-box;
          position: relative;
        }

        :host([hidden]) {
          display: none;
        }

        furo-icon-button {
          position: absolute;
          right: var(--spacing);
          cursor: pointer;
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
      <furo-icon-button icon="close" @click="${this.closePanel}"></furo-icon-button>
      <furo-markdown ƒ-parse-markdown="--content">></furo-markdown>
    `;
  }
}

window.customElements.define('markdown-panel', MarkdownPanel);
