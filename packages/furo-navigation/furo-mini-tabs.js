import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import  "@furo/fbp/flow-repeat";

/**
 * `furo-mini-tabs`
 * Tabs
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-mini-tabs.html
 * @appliesMixin FBP
 */
class FuroMiniTabs extends FBP(LitElement) {

    constructor() {
        super();
    }

    injectItems(nodeArray){
      this._FBPTriggerWire("--itemsInjected");

    }

  /**
  * flow is ready lifecycle method
  */
  _FBPReady(){
    super._FBPReady();
    //this._FBPTraceWires();
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
