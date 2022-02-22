import { FBP } from '@furo/fbp';
import { LitElement } from 'lit';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';

/**
 * Extend BasePanel to build a panel which is controllable by furo-panel-coordinator.
 *
 * @customElement
 * @appliesMixin FBP
 */
export class BasePanel extends FBP(LitElement) {
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
      if (!fieldNode.__eventListener['close-requested']) {
        fieldNode.addEventListener('close-requested', e => {
          if (this.onCloseRequest(e)) {
            this.closePanel();
          }
        });
      }
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
      this.treeNode.dispatchNodeEvent(new NodeEvent('panel-closed', this, false));
    }
  }
}
