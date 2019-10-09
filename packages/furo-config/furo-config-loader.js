import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp";
import "@furo/util/furo-fetch-json"
import {Config} from "./lib/Config";

/**
 * `furo-config-loader`
 *
 * ladet eine Konfiguration in eine vorgegebene Sektion. Diese lassen sich mit furo-config in jeder Komponente verwenden.
 *
 * ```
 *   <furo-config-loader src="/custom/view-config.json" section="views"></furo-config-loader>
 *
 * ```
 *
 * @summary load config files
 * @customElement
 * @demo demo-furo-config-loader
 * @appliesMixin FBP
 */
class FuroConfigLoader extends  FBP(LitElement) {

    constructor() {
        super();

        this.src;
        this.section;
    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
          /**
           * src
           * Quelle der Konfiguration
           */
          src: {
            type: String
          },

          /**
           * section
           * Die Sektion in der die Antwort gesichert wird
           */
          section: {
            type: String,
          }
        };
    }


  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);

    if(this.section && this.src){
      console.log(this.section)
      this._FBPTriggerWire("--load", this.src)
    }
  }

  /**
  * flow is ready lifecycle method
  */
  _FBPReady(){
    super._FBPReady();
    //this._FBPTraceWires()
    /**
     * Register hook on wire --response to
     * parse the response
     */
    this._FBPAddWireHook("--response",(e)=>{
       /**
       * @event config-loaded
       * Fired when
       * detail payload:
       */
       let customEvent = new Event('config-loaded', {composed:true, bubbles: true});
       customEvent.detail = Config.append(this.section, e);
       this.dispatchEvent(customEvent)
    });
  }


  static get styles() {
    // language=CSS
    return css`
        :host {
            display: none;
        }
    `
  }


  /**
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-fetch-json  ƒ-fetch-src="--load" @-data="--response"></furo-fetch-json>
    `;
  }
}

window.customElements.define('furo-config-loader', FuroConfigLoader);
