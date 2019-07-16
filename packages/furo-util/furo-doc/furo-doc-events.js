import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat.js";

/**
 * `furo-doc-events`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-events.html
 * @appliesMixin FBP
 */
class FuroDocEvents extends FBP(LitElement) {

  constructor() {
    super();
    this.hidden = true;

  }

  /**
   * @private
   * @return {Object}
   */
  static get events() {
    return {
      /**
       * hide props if empty
       */
      hidden: {type: Boolean, reflect: true}
    };
  }

  data(data) {
    if (Array.isArray(data)) {
      this._FBPTriggerWire("--data", data);
      this.removeAttribute("hidden");
    } else {
      this.setAttribute("hidden", "");
    }
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
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
        }

        

        :host([hidden]) {
            display: none;
        }

        h2 {
            font-weight: 400;
            line-height: 28px;
            font-size: 20px;
            margin-top: 48px;
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
      <h2>@-Events</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-events-item ƒ-data="--item"></furo-doc-events-item>

      </template>
    `;
  }
}

window.customElements.define('furo-doc-events', FuroDocEvents);


/**
 * `furo-doc-events-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-events-item.html
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
  __fbpReady() {
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
            font-size: 13px;
            margin-bottom: 24px;
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
      <strong>${this.prop.name}:</strong>  <span class="type">${this.prop.type}</span> 
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `;
  }
}

window.customElements.define('furo-doc-events-item', FuroDocEventsItem);
