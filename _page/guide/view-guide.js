import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme.js"
import {FBP} from "@furo/fbp";
import {nav} from "./nav_config";

import "@furo/doc-helper/src/side-navigation"
import "@furo/doc-helper/src/furo-demo-snippet"
import '@furo/app/src/furo-app-drawer'
import '@furo/app/src/furo-app-bar-top'
//pages
import "./panel-md-loader";
import "./demoimports";

import "./components/all-imports";

/**
 * `view-guide`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/view-guide.html
 * @appliesMixin FBP
 */
class ViewGuide extends FBP(LitElement) {


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
    return Theme.getThemeForComponent('ViewGuide') || css`
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

        furo-pages {
            height: 100%;
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
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-location url-space-regex="^/guide" @-location-changed="--pathChanged"></furo-location>
      <furo-vertical-flex>
        <furo-app-bar-top drawer="guide">
          <header-toolbar></header-toolbar>
        </furo-app-bar-top>
        <furo-app-drawer float-breakpoint="1200" name="guide"   ƒ-close="--pathChanged">
       
        <div slot="drawer" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/guide/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="welcome">
          <panel-md-loader name="md"></panel-md-loader>
          
          <div name="welcome">Coming soon.</div>
        </furo-pages>
        </furo-app-drawer>
    `;
  }


}

window.customElements.define('view-guide', ViewGuide);
