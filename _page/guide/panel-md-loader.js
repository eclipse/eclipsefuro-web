import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/util/furo-markdown"

/**
 * `fbp-wires`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/fbp-wires.html
 * @appliesMixin FBP
 */
class PanelMdLoader extends FBP(LitElement) {

    constructor() {
        super();
        this._FBPAddWireHook("--pathChanged",(e)=>{
          let md = e.pathSegments[0];
          this._FBPTriggerWire("--fetchMD","/_page/markdown/"+ md + ".md");
          this.scrollTop = 0;
      })
    }



  /**
  * flow is ready lifecycle method
  */
  __fbpReady(){
    super.__fbpReady();
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
            height: 100%;
            overflow-y: auto;
            padding: 0 var(--spacing);
            max-width: 100%;
            box-sizing: border-box;
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
      <furo-location url-space-regex="^/guide/md" @-location-changed="--pathChanged"></furo-location>
      <furo-markdown unsafe ƒ-fetch-md="--fetchMD"></furo-markdown>
    `;
  }
}

window.customElements.define('panel-md-loader', PanelMdLoader);
