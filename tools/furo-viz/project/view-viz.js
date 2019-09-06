import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-button"
import "@furo/layout/furo-icon"
import "@furo/doc-helper/graph/furo-show-flow"
/**
 * `view-viz`
 * Visualize your flow
 *
 * @customElement
 * @demo demo/view-viz.html
 * @appliesMixin FBP
 */
class ViewViz extends FBP(LitElement) {

    constructor() {
        super();
        this.addEventListener("keypress",(key)=>{
          if(key.code==="KeyF"){
            this.requestFullscreen();
          }
        });
        this.addEventListener("keydown",(key)=>{
          if(key.code==="KeyV"){
            this._readClippboard();
          }
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
            myBool: {type: Boolean}
        };
    }

  /**
  * flow is ready lifecycle method
  */
  _FBPReady(){
    super._FBPReady();
    //this._FBPTraceWires()
    /**
     * Register hook on wire --readClipboardClicked to
     *
     */
    this._FBPAddWireHook("--readClipboardClicked",(e)=>{
          this._readClippboard();
    });
  }

  _readClippboard(){
    navigator.clipboard.readText().then(
        clipText => {
          let tpl =   document.createElement("div");
          tpl.innerHTML = clipText;
          this._FBPTriggerWire("--template", tpl);
  })};

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
            background: var(--surface);
        }

        :host([hidden]) {
            display: none;
        }

        furo-show-flow {
            height: 100vh;
        }

        furo-button{
            position: absolute;
            left: 24px;
            top:16px
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
        <furo-button autofocus raised primary @-click="--readClipboardClicked">render from clippboard</furo-button>
        <furo-show-flow id="flow" ƒ-parse-template="--template"></furo-show-flow>
       
    `;
  }
}

window.customElements.define('view-viz', ViewViz);
