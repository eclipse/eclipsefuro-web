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
          // this will import from xxx/guide/
          this._FBPTriggerWire("--fetchMD","/_page/markdown/"+ md + ".md");
          this.scrollTop = 0;
      })
    }



  /**
  * flow is ready lifecycle method
  */
  _FBPReady(){
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
            height: 100%;
            overflow-y: auto;
            box-sizing: border-box;
            /* adjust the width to match the doc width */
            max-width: 1278px;
        }

        :host([hidden]) {
            display: none;
        }
        
        furo-markdown{
            padding: var(--spacing);
          background-color: var(--surface);
           
            min-width: 500px;
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
