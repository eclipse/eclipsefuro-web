import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-button`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroButton extends FBP(LitElement) {

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
            padding-right: var(--spacing);

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
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-button</h2>
          <p>description</p>
        </div>

        <furo-demo-snippet flex>
          <template>
            <table>
              <tr>
              <th></th>
              <th>Default</th>
              <th>Disabled</th>
              <th>Raised</th>
              <th>Raised Disabled</th>
              </th>
              <tr>
                <td>Default</td>
                <td>
                  <furo-button label="other"></furo-button>
                </td>
                <td>
                  <furo-button raised label="raised"></furo-button>
                </td> 
                <td>
                  <furo-button disabled label="other"></furo-button>
                </td>
                <td>
                  <furo-button disabled raised label="raised"></furo-button>
                </td>
              </tr>
              
            </table>
            <furo-button></furo-button>


            <furo-button disabled label="disabled"></furo-button>
            <furo-button danger label="danger"></furo-button>
            <furo-button accent label="Accent"></furo-button>
            <furo-button primary label="Primary"></furo-button>
            <furo-button secondary label="Secondary"></furo-button>

            <hr>


            <furo-button raised label="autofocus" autofocus></furo-button>
            <furo-button raised label="other"></furo-button>
            <furo-button raised disabled label="disabled"></furo-button>
            <furo-button raised danger label="Danger"></furo-button>
            <furo-button raised accent label="Accent"></furo-button>
            <furo-button raised primary label="Primary"></furo-button>
            <furo-button raised secondary label="Secondary"></furo-button>
          </template>
        </furo-demo-snippet>

      </furo-vertical-flex>

    `;
  }
}

window.customElements.define('demo-furo-button', DemoFuroButton);
