import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';

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
    return (
      Theme.getThemeForComponent('SampleFuroButton') ||
      css`
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
    );
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
          <style>


            td{
              padding: 12px;
              text-align: center;
            }
          </style>
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
                <furo-button autofocus label="default" ƒ-focus="--primaryraisedClicked" @-click="--defautlClicked"></furo-button>
              </td>
              <td>
                <furo-button disabled>label in tag</furo-button>
              </td>
              <td>
                <furo-button raised icon="fingerprint" label="other" ƒ-focus="--defautlClicked" @-click="--raisedClicked"></furo-button>
              </td>
              <td>
                <furo-button disabled raised label="raised"></furo-button>
              </td>
            </tr>

            <tr>
              <td>primary</td>
              <td>
                <furo-button primary label="primary" ƒ-focus="--raisedClicked" @-click="--primaryClicked"></furo-button>
              </td>
              <td>
                <furo-button primary disabled label="primary"></furo-button>
              </td>
              <td>
                <furo-button primary raised label="primary" ƒ-focus="--primaryClicked" @-click="--primaryraisedClicked"></furo-button>
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
