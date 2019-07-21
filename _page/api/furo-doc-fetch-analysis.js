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
    // fetch only if location segment 0 changes


    if (this._path !== location.pathSegments[0]) {
      this._path = location.pathSegments[0];

      fetch("/node_modules/@furo/" + this._path + "/analysis.json").then(res => res.json()).then(analysis => {
        this._analysis = analysis;
        this._checkSubroute(location);
      }).catch(err => err);
    } else {
      this._checkSubroute(location);
    }
  }

  _checkSubroute(location) {
    // Subelement deep linking
    // on ../input/component-name we want to select component-name
    if (location.pathSegments[1]) {
      let subElement = location.pathSegments[1];
      this._analysis.elements.forEach((e) => {
        // needed for linking to the demos
        e.__package = this._path;

        if (e.tagname === subElement) {
          this._analysis.__selectedElement = e;
          //disable class
          this._analysis.__selectedClass = undefined;
          e.__selected = true;
        }else{
          e.__selected = false;
        }
      });
      // check classes if available
      if (this._analysis.classes) {
        this._analysis.classes.forEach((e, i) => {
          if (e.name === subElement) {
            this._analysis.__selectedClass = e;
            //disable element
            this._analysis.__selectedElement = undefined;
            e.__selected = true;
          }else{
            e.__selected = false;
          }
        });
      }
    } else {
      // select first on default
      this._analysis.__selectedElement = this._analysis.elements[0];
    }

    /**
     * @event data
     * Fired when analysis loaded
     * detail payload: analysis
     */
    let customEvent = new Event('data', {composed: true, bubbles: true});
    customEvent.detail = this._analysis;
    this.dispatchEvent(customEvent);
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
