import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";

/**
 * `furo-data-bool-icon`
 * Displays a icon/symbol for a boolean value
 *
 * This component uses utf-8 symbols for true and false at the moment.
 *
 * @summary  Displays a icon/symbol for a boolean value
 * @customElement
 * @demo demo-furo-data-bool-icon
 * @appliesMixin FBP
 */
class FuroDataBoolIcon extends FBP(LitElement) {

    constructor() {
        super();
        this.addEventListener("click",()=>{
          this.toggle();
        });
      this.symboltrue = "▼";
      this.symbolfalse = "▶";
      this.field = {};
      this._updateSymbol();
    }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();
    // check initial overrides
    CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
  }

    toggle(){
      this.field._value= !this.field._value;
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
            myBool: {type: Boolean},
            symboltrue: {type: String},
            symbolfalse: {type: String},
        };
    }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataBoolIcon') || css`
        :host {
            display: inline-block;
            width: 16px;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  bindData(d) {
    if (d === undefined) {
      return
    }

    if(d._spec.type !== "bool"){
      console.warn("wrong type binded", this);
      return;
    }
    this.field = d;



    // render on changed data
    this.field.addEventListener("field-value-changed", () => {
      this._updateSymbol();
    });


    this._updateSymbol();
  }

  _updateSymbol(){
    this._ocSymbol = this.field._value? this.symboltrue : this.symbolfalse;
    this.requestUpdate();
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._ocSymbol}
    `;
  }
}

window.customElements.define('furo-data-bool-icon', FuroDataBoolIcon);
