import {LitElement, html, css} from 'lit-element';
import {FBP} from '@furo/fbp';
import "../furo-snackbar-display";
import "../furo-snackbar";
import "@furo/input";

/**
 * `demo-furo-snackbar-display`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroSnackbarDisplay extends FBP(LitElement) {


    constructor(){
      super();

      this._FBPAddWireHook("--click1", (e) => {

        this.shadowRoot.getElementById("furo-snackbar1").setLabelText(Date.now() + "left text label");
        this._FBPTriggerWire("--show1")
      });
      this._FBPAddWireHook("--click2", (e) => {

        this.shadowRoot.getElementById("furo-snackbar2").setLabelText(Date.now() + "right text label");
        this._FBPTriggerWire("--show2")
      });

      this._FBPAddWireHook("--click3", (e) => {

        this.shadowRoot.getElementById("furo-snackbar3").setLabelText(Date.now()+ "center text label");
        this._FBPTriggerWire("--show3")
      });
    }
    
    
    /**
     * @private
     * @returns {CSSResult}
     */
    static get styles() {
        return css`
            :host {
            }
        `;
    }
    
    /**
     *@private
     */
    static get properties(){
    
        return {
        };
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render(){
        return html`
        <furo-button @-click="--click1" label="show left" raised></furo-button>
        <furo-button @-click="--click3" label="show center" raised></furo-button>
        <furo-button @-click="--click2" label="show right" raised></furo-button>
        <div @-open-furo-snackbar-requested="--openFuroSnackbarRequested">        
            <furo-snackbar timeout-in-ms=5000 position-left icon="close"  id="furo-snackbar1" ƒ-show="--show1"></furo-snackbar>
            <furo-snackbar position-right timeout-in-ms=5000 icon="done" size="250px" stacked id="furo-snackbar2" ƒ-show="--show2"></furo-snackbar>
            <furo-snackbar timeout-in-ms=5000 icon="done"  size="350px"  id="furo-snackbar3" ƒ-show="--show3"></furo-snackbar>
        </div>
        <furo-snackbar-display ƒ-show="--openFuroSnackbarRequested"></furo-snackbar-display>
        `;
    }
  
}

customElements.define('demo-furo-snackbar-display', DemoFuroSnackbarDisplay);
