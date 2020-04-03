import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';
/**
 * `demo-furo-checkbox`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCheckbox extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroCheckbox') ||
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
      <h2>Demo furo-checkbox</h2>

      <furo-demo-snippet>
        <template>
          <table>
            <tr>
              <th></th>
              <th>checked</th>
              <th>unchecked</th>
            </tr>
            <tr>
              <td>enabled</td>
              <td><furo-checkbox checked></furo-checkbox></td>
              <td><furo-checkbox></furo-checkbox></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td><furo-checkbox checked disabled></furo-checkbox></td>
              <td><furo-checkbox disabled></furo-checkbox></td>
            </tr>
            <tr>
              <td>focus</td>
              <td><furo-checkbox checked autofocus></furo-checkbox></td>
              <td></td>
            </tr>
          </table>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-checkbox', DemoFuroCheckbox);
