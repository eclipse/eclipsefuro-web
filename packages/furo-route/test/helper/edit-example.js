import {BasePanel} from "../../lib/BasePanel";
import {Theme} from "@furo/framework/theme"
import { LitElement, html, css } from 'lit-element';

import "@furo/util/furo-pretty-json"
/**
 * `edit-example`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/edit-example.html
 * @appliesMixin FBP
 */
class EditExample extends BasePanel {

  constructor() {
    super();
    this._FBPAddWireHook("--navNode", (fieldNode) => {

    })
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
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `
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
      <furo-pretty-json ƒ-inject-data="--navNode(*.value)">
        
      </furo-pretty-json>
    `;
  }
}

window.customElements.define('edit-example', EditExample);
