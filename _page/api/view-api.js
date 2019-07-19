import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {nav} from "./nav_config";
import "../components/side-navigation"

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
  __fbpReady(){
    super.__fbpReady();
    //this._FBPTraceWires()
    this._FBPTriggerWire("--nav",nav);
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
            overflow: auto;
            box-sizing: border-box;
            padding: var(--spacing);
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
      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/api/"></side-navigation>
        </div>
        <div scroll> <p>Hej, welcome</p>
          <div style="height: 900px"></div>
          dsfd
        </div>
      </furo-split-view>
    `;
  }
}

window.customElements.define('view-api', ViewApi);
