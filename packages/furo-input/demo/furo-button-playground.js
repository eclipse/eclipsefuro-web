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
    return Theme.getThemeForComponent(this.name) || [css`
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
    this.unevelated = false;
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

    ["primary", "secondary", "accent", "raised", "danger", "outline", "unevelated", "disabled"].forEach((bool) => {

      this._FBPAddWireHook("--toggle" + bool, () => {
        let newstate = !this[bool];

        switch (bool) {
          case "primary":
          case "secondary":
          case "accent":
          case "danger":
            this.primary = false;
            this.secondary = false;
            this.accent = false;
            this.danger = false;
            break;

          case "raised":
          case "unevelated":
          case "outline":
            this.raised = false;
            this.outline = false;
            this.unevelated = false;
            break;
        }
        this[bool] = newstate;
        this.requestUpdate();

      });
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
              <furo-text-input autofocus label="Icon" value="${this.icon}" hint="mail, send, filter-list, fingerprint" @-value-changed="--icon"></furo-text-input>
              
              <furo-button raised label="Primary" ?primary="${this.primary}" @-click="--toggleprimary"></furo-button>
              <furo-button raised label="secondary" ?primary="${this.secondary}" @-click="--togglesecondary"></furo-button>
              <furo-button raised label="accent" ?primary="${this.accent}" @-click="--toggleaccent"></furo-button>
              <furo-button raised label="danger" ?primary="${this.danger}" @-click="--toggledanger"></furo-button>
              
              <hr>
              
              <furo-button raised label="raised" ?primary="${this.raised}" @-click="--toggleraised"></furo-button>
              <furo-button raised label="unevelated" ?primary="${this.unevelated}" @-click="--toggleunevelated"></furo-button>
              <furo-button raised label="outline" ?primary="${this.outline}" @-click="--toggleoutline"></furo-button>
              <hr>
              <furo-button raised label="disabled" ?primary="${this.disabled}" @-click="--toggledisabled"></furo-button>
              
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
                 ?unevelated="${this.unevelated}" 
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
                   ?unevelated="${this.unevelated}" 
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
                 ?unevelated="${this.unevelated}" 
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
                   ?unevelated="${this.unevelated}" 
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
