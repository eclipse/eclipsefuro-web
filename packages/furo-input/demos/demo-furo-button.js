import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';

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
    return (
      Theme.getThemeForComponent('DemoFuroButton') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
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

              <tr>
                <td>secondary</td>
                <td>
                  <furo-button secondary label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary disabled label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary raised  label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary disabled raised label="secondary"></furo-button>
                </td>
              </tr>

              <tr>
                <td>accent</td>
                <td>
                  <furo-button accent label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent disabled label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent raised label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent disabled raised label="accent"></furo-button>
                </td>
              </tr>
              <tr>
                <td>danger</td>
                <td>
                  <furo-button danger label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger disabled label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger raised label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger disabled raised label="danger"></furo-button>
                </td>
              </tr>
            </table>
           
          </template>
        </furo-demo-snippet>

      </furo-vertical-flex>

    `;
  }
}

window.customElements.define('demo-furo-button', DemoFuroButton);
