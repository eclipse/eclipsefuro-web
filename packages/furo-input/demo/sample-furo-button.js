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
class SampleFuroButton extends FBP(LitElement) {

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
        
        furo-demo-snippet {
            height: 200px;
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
      <h3>Sample</h3>
      <furo-demo-snippet>
        <template>
          <table>
            <tr>
              <th></th>
              <th>Default</th>
              <th>disabled</th>
              <th>raised</th>
              <th>raised disabled</th>
              </th>
            <tr>
              <td>Default</td>
              <td>
                <furo-button autofocus label="default"></furo-button>
              </td>
              <td>
                <furo-button disabled label="raised"></furo-button>
              </td>
              <td>
                <furo-button raised label="other"></furo-button>
              </td>
              <td>
                <furo-button disabled raised label="raised"></furo-button>
              </td>
            </tr>

            <tr>
              <td>primary</td>
              <td>
                <furo-button primary label="primary"></furo-button>
              </td>
              <td>
                <furo-button primary disabled label="primary"></furo-button>
              </td>
              <td>
                <furo-button primary raised label="primary"></furo-button>
              </td>
              <td>
                <furo-button primary disabled raised label="primary"></furo-button>
              </td>
            </tr>
          </table>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-button', SampleFuroButton);
