import {FBP} from "@furo/fbp";
import { LitElement, html, css } from 'lit-element';

/**
 * BasePanel to extend
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
    this.onCloseRequest = (e) => {
      return true
    };

    this._FBPAddWireHook("--navNode", (fieldNode) => {
      this.treeNode = fieldNode;
      fieldNode.addEventListener("close-requested", (e) => {
        if (this.onCloseRequest(e)) {
          this.closePanel();
        }
      });
    });
  }

  /**
   * Close the panel
   */
  closePanel() {
    if(this.treeNode){
      this.treeNode.selectItem();
      this.removePanel();
    }
  }
}
