import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {nav} from "./nav_config";



import "./pages/page-icons"
import "../components/topic-title"
import "../components/topic-intro"

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
  __fbpReady() {
    super.__fbpReady();
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
            padding: var(--spacing) 0  var(--spacing)  var(--spacing);
            --split-master-width: 250px;
        }

        :host([hidden]) {
            display: none;
        }
        furo-pages{
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
      <furo-location url-space-regex="^/guide" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/guide/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="welcome">
          <panel-guide name="pages"></panel-guide>
          <page-icons name="icons"></page-icons>
          <div name="welcome">welcome to the guide</div>
        </furo-pages>
      </furo-split-view>
    `;
  }


}

window.customElements.define('view-guide', ViewGuide);
