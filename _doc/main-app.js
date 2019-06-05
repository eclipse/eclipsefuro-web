import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import "@furo/layout/furo-catalog"
import "@furo/input/furo-button"
import "./side-navigation"
/**
 * `main-app`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/main-app.html
 * @appliesMixin FBP
 */
class MainApp extends FBP(LitElement) {

    constructor() {
        super();

      this._FBPAddWireHook("--nav-clicked", (e) => {


        /**
         * event.path is not standard :-( method composedPath is...
         * https://dom.spec.whatwg.org/#dom-event-composedpath
         * triggered when path is extracted from the click event
         * detail payload: href from navigation source
         */
        this._FBPTriggerWire("--path-resolved", e.composedPath()[0].href)

      }, true);
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
        furo-split-view {
            height: 100vh;
        }

        iframe {
            width: 100%;
            height: 100%;
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
      <furo-split-view>
        <side-navigation slot="master" @-navigation-clicked="--nav-clicked(*)"></side-navigation>
        <iframe ƒ-.src="--path-resolved" src="_doc/welcome.html" frameborder="0"></iframe>
      </furo-split-view>
    `;
  }
}

window.customElements.define('main-app', MainApp);
