import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `main-menu`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/main-menu.html
 * @appliesMixin FBP
 */
class MainMenu extends FBP(LitElement) {

    constructor() {
        super();
    }



  /**
   *
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
          <h3>@furo/data</h3>

          <hr>
          <a href="/components/@furo/framework/">framework</a>
          <p>Framework core classes</p>

          <hr>
          <a href="/components/@furo/data/">furo-data</a> <br>
          <p>Data manipulation and access components</p>

          <hr>
          <a href="/components/@furo/input/">furo-input</a>
          <p>Input components which are fitted to furo-data</p>

          <hr>
          <a href="/components/@furo/fbp/">furo-fbp</a>
          <p>the language and some nice helpers like flow-bind and flow-repeat</p>


          <hr>
          <a href="/components/@furo/navigation/">furo-navigation</a>

          <hr>
          <a href="/components/@furo/route/">furo-route</a>

          <hr>
          <a href="/components/@furo/form/">furo-form</a>

          <hr>
          <a href="/components/@furo/layout/">furo-layout</a>

          <hr>
          <a href="/components/@furo/config/">furo-config</a>

          <hr>
          <a href="/components/@furo/mixins/">furo-mixins</a>


          <h3>Work in progress</h3>

          <ul>
            <li><a href="/components/@furo/indicators/">furo-indicators</a>
            </li>
          </ul>
        `;
    }
}

window.customElements.define('main-menu', MainMenu);
