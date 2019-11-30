import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {nav} from "./nav_config";
import '@furo/route';
import "@furo/doc-helper/side-navigation"
import "./panel-doc"
import "./panel-demo"
import "./demoimports"
import '@furo/app/furo-app-drawer';
import '@furo/app/furo-app-bar-top';

/**
 * `view-api`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/view-api.html
 * @appliesMixin FBP
 */
class ViewApi extends FBP(LitElement) {


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
    this._FBPTriggerWire("--nav", nav);
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
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--surface, white);
            color: var(--on-surface, black);
            --split-master-width: 250px;
            
        }

        :host([hidden]) {
            display: none;
        }
        furo-pages{
            height: 100%;
            overflow: hidden;
        }

        /** the background of the bar itself. **/
        ::-webkit-scrollbar {
            width: 6px;
            background-color: var(--surface, white);
        }

        /** the directional buttons on the scrollbar. **/
        ::-webkit-scrollbar-button {
            background-color: var(--on-surface, black);
        }

        /** the empty space “below” the progress bar. **/
        ::-webkit-scrollbar-track {
        }

        /** the top-most layer of the the progress bar not covered by the thumb. **/
        ::-webkit-scrollbar-track-piece {
        }

        /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
        ::-webkit-scrollbar-thumb {
            background-color: var(--on-surface, black);
            border-radius: 3px;
        }

        /** the bottom corner of the scrollable element, where two scrollbar meet. **/
        ::-webkit-scrollbar-corner {
        }

        /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
        ::-webkit-resizer {
        }


        furo-vertical-flex {
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
      <furo-location url-space-regex="^/api/[^/]*" @-location-changed="--pathChanged"></furo-location>
      <furo-vertical-flex>
        <furo-app-bar-top drawer="api">
        <header-toolbar></header-toolbar>
        </furo-app-bar-top>
      <furo-app-drawer float-breakpoint="1200" name="api" ƒ-close="--pathChanged">
        <div slot="drawer" scroll>
          <!-- --nav comes from import {nav} from "./nav_config"; -->
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/api/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="default">
          <panel-doc name="doc"></panel-doc>
          <panel-demo name="demo"></panel-demo>
          <div name="default">404 ....</div>
        </furo-pages>
      </furo-app-drawer>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-api', ViewApi);
