import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {nav} from "./nav_config";
import '@furo/route';
import "@furo/doc-helper/side-navigation"
import "./panel-doc"
import "./panel-demo"
import "./demoimports"

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
      <furo-location url-space-regex="^/api/[^/]*" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/api/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="default">
          <panel-doc name="doc"></panel-doc>
          <panel-demo name="demo"></panel-demo>
          <div name="md">a</div>
          <div name="default">welcome ....</div>
        </furo-pages>
      </furo-split-view>
    `;
  }
}

window.customElements.define('view-api', ViewApi);
