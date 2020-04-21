import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme.js"
import {FBP} from "@furo/fbp";
import {nav} from "./nav_config";

import "@furo/doc-helper/src/side-navigation"
import "@furo/doc-helper/src/furo-demo-snippet"

//pages
import "./spec-md-loader.js";
import "./imports.js";



/**
 * `view-spec`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/view-spec.html
 * @appliesMixin FBP
 */
class ViewSpec extends FBP(LitElement) {


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
    return Theme.getThemeForComponent('ViewSpec') || css`
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
      <furo-location url-space-regex="^/spec" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/spec/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="welcome">
          <spec-md-loader name="md"></spec-md-loader>
        </furo-pages>
      </furo-split-view>
    `;
  }


}

window.customElements.define('view-spec', ViewSpec);
