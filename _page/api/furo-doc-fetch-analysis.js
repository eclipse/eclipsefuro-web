import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-doc-fetch-analysis`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-fetch-analysis.html
 * @appliesMixin FBP
 */
class FuroDocFetchAnalysis extends FBP(LitElement) {

  constructor() {
    super();
  }


  fetchLocation(location) {
    let p = location.pathSegments[0];
    fetch("/node_modules/@furo/" + p + "/analysis.json").then(res => res.json()).then(analysis => {

      /**
       * @event data
       * Fired when analysis loaded
       * detail payload: analysis
       */
      let customEvent = new Event('data', {composed: true, bubbles: true});
      customEvent.detail = analysis;
      this.dispatchEvent(customEvent);

    }).catch(err => err);
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
    `
  }
}

window.customElements.define('furo-doc-fetch-analysis', FuroDocFetchAnalysis);
