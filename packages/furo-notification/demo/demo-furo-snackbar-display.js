import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from '@furo/fbp';
import "../furo-snackbar-display";
import "../furo-snackbar";
import "@furo/input";
import "@furo/doc-helper"
import "./produce-snackbar-data";

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
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `
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
      <h2>Demo furo-checkbox</h2>
      
      <furo-demo-snippet >
        <template>
        <produce-snackbar-data id="snackbar1" label="show left" snackbar-label="this is a text label"
         @-snackbar-label-snackbar1="--setLabelTex1" 
         @-show-snackbar1="--show1"
         ></produce-snackbar-data>
        <produce-snackbar-data id="snackbar2" label="show center" snackbar-label="this is a text label"
         @-snackbar-label-snackbar2="--setLabelTex2" 
         @-show-snackbar2="--show2"
        ></produce-snackbar-data>
        <produce-snackbar-data id="snackbar3" label="show right stacked" snackbar-label="this is a text label"
         @-snackbar-label-snackbar3="--setLabelTex3" 
         @-show-snackbar3="--show3"
        ></produce-snackbar-data>

        <div @-open-furo-snackbar-requested="--openFuroSnackbarRequested">        
            <furo-snackbar timeout-in-ms=5000 position-left icon="close" close-on-escape ƒ-set-label-text="--setLabelTex1" max-size="500px" ƒ-show="--show1"></furo-snackbar>
            <furo-snackbar timeout-in-ms=5000 icon="done" size="250px"   ƒ-show="--show2"></furo-snackbar>
            <furo-snackbar position-right  timeout-in-ms=5000 icon="done" stacked size="350px" ƒ-show="--show3"></furo-snackbar>
        </div>
        <furo-snackbar-display ƒ-show="--openFuroSnackbarRequested"></furo-snackbar-display>
                </template>
      </furo-demo-snippet>
        `;
    }
  
}

customElements.define('demo-furo-snackbar-display', DemoFuroSnackbarDisplay);
