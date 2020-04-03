import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";


/**
 * `furo-doc-events-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocEventsItem extends FBP(LitElement) {

  constructor() {
    super();
    this.prop;
  }

  data(data) {
    this.prop = data;
    if(data.privacy === "protected"){
      this.setAttribute("hidden","")
    }
    this._FBPTriggerWire("--data", data);

    this.requestUpdate();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
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
    return Theme.getThemeForComponent('FuroDocEventsItem') || css`
        :host {
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
        }
        strong {
            font-weight: 700;
            font-family: "Roboto Mono";
            
        }
        :host([hidden]) {
            display: none;
        }
        span.type, span.return {
            color: #717171;
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
      <strong>${this.prop.name}</strong> : <span class="type">${this.prop.type}</span> 
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `;
  }
}

window.customElements.define('furo-doc-events-item', FuroDocEventsItem);
