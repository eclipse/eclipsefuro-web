import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `produce-data`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/produce-data.html
 * @appliesMixin FBP
 */
class ProduceData extends FBP(LitElement) {

  constructor() {
    super();

    this.addEventListener("click", this.produce)
  }

  _FBPReady() {
    super._FBPReady();
    if (this.auto) {
      this.produce();
    }
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
      auto: {type: Boolean}
    };
  }


  produce() {
    /**
     * @event data
     * Fired when
     * detail payload:
     */
    return fetch("/mockdata/trees/1/paneltestdata.json").then(res => res.json()).then(data => {
      this.data = data;
      let customEvent = new Event('data', {composed: true, bubbles: true});
      customEvent.detail = this.data;
      this.dispatchEvent(customEvent)
    });


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
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-button label="create tree data"></furo-button>
    `;
  }
}

window.customElements.define('panel-produce-data', ProduceData);
