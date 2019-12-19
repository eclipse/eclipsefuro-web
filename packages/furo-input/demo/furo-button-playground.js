import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import {Styling} from "@furo/doc-helper/styling";

/**
 * `demo-furo-button`
 *
 * @customElement
 * @appliesMixin FBP
 */
class FuroButtonPlayground extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroButtonPlayground') || [css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);

        }

        :host([hidden]) {
            display: none;
        }

        .display {
            padding: 60px;
            background-color: var(--surface);
            margin: 8px;
        }

        furo-button {
            margin: 8px;
        }

        hr {
            width: 100%;
            color: #eeeeee;
        }

    `, Styling.theme]
  }

  constructor() {
    super();
    this.label = "Label";
    this.icon = "apps";
    this.primary = false;
    this.secondary = false;
    this.accent = false;
    this.danger = false;
    this.raised = false;
    this.unelevated = false;
    this.outline = false;
    this.disabled = false;
  }

  _FBPReady() {
    super._FBPReady();
    this._FBPAddWireHook("--label", (val) => {
      this.label = val;
      this.requestUpdate();
    });
    this._FBPAddWireHook("--icon", (val) => {
      this.icon = val;
      this.requestUpdate();
    });

    this._FBPAddWireHook("--colorset" , (color) => {
      this.primary = false;
      this.secondary = false;
      this.accent = false;
      this.danger = false;
      this[color] = true;
      this.requestUpdate();
    });

     this._FBPAddWireHook("--layout" , (layout) => {
       this.raised = false;
       this.outline = false;
       this.unelevated = false;
       this[layout] = true;
      this.requestUpdate();
    });

     this._FBPAddWireHook("--toggledisabled" , () => {
       this.disabled = !this.disabled;
      this.requestUpdate();
    });


    this._FBPAddWireHook("--enable", () => {
      this.disabled = false;
      this.requestUpdate();
    });

    this._FBPAddWireHook("--disable", () => {
      this.disabled = true;
      this.requestUpdate();
    });


  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <furo-vertical-flex>
        <div>
          <h2>furo-button playground</h2>
          <p>Try the button states</p>
        </div>
        <div class="flex">
          <furo-split-view>
            <furo-vertical-flex slot="master">          
              <furo-text-input autofocus label="Label" value="${this.label}" @-value-changed="--label"></furo-text-input>             
              <furo-select-input value="${this.icon}" label="Select icon" list="apps, fingerprint, mail, send, filter-list, alarm-on, alarm-on, undefied-icon"  @-value-changed="--icon"></furo-select-input>
              <furo-select-input label="Theme Color" list="none, primary, secondary, accent, danger"  @-value-changed="--colorset"></furo-select-input>
              <furo-select-input label="Border / Fill" list="none, raised, unelevated, outline"  @-value-changed="--layout"></furo-select-input>
              
              
              <hr>
               <furo-checkbox-input label="disabled" @-checked="--disable"  @-unchecked="--enable" ?checked="${this.disabled}"></furo-checkbox-input>

              <div>
              <hr>
              Methods</div>
              
              <furo-button label="ƒ-focus" @-click="--focus"></furo-button>
              <furo-button label="ƒ-enable" @-click="--enable"></furo-button>
              <furo-button label="ƒ-disable" @-click="--disable"></furo-button>
              
            </furo-vertical-flex>
           <div class="display">
              <furo-button 
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?unelevated="${this.unelevated}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}" 
                 ƒ-focus="--focus"
                 ƒ-enable="--enable"
                 ƒ-disable="--disable"
                 ></furo-button>
                 <furo-button 
                 icon="${this.icon}"
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                   ?unelevated="${this.unelevated}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}"                
                 ></furo-button> 
                 
                 <div style="background-color: white">
                  <furo-button 
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?unelevated="${this.unelevated}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}" 
                 ƒ-focus="--focus"
                 ƒ-enable="--enable"
                 ƒ-disable="--disable"
                 ></furo-button>
                 <furo-button 
                 icon="${this.icon}"
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                   ?unelevated="${this.unelevated}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}"                
                 ></furo-button> 
                 
              </div>
           </div>
          
          
          </furo-split-view>
        </div>
        

      </furo-vertical-flex>

    `;
    // language=HTML
  }
}

window.customElements.define('furo-button-playground', FuroButtonPlayground);
