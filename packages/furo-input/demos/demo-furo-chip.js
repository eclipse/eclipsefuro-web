import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';
/**
 * `demo-furo-chip`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroChip extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroChip') ||
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
      <h2>Demo furo-chip</h2>

      <furo-demo-snippet style="height: 500px">
        <template>
          <table>
            <tr>
              <th></th>
              <th>selected</th>
              <th>unselected</th>
            </tr>
            <tr>
              <td>enabled</td>
              <td><furo-chip selected condensed text="selected"></furo-chip></td>
              <td><furo-chip text="unselected"></furo-chip></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td><furo-chip selected disabled text="selected disabled"></furo-chip></td>
              <td><furo-chip disabled text="Unselected disabled"></furo-chip></td>
            </tr>
            <tr>
              <td>focus</td>
              <td><furo-chip autofocus selected condensed text="auto focus"></furo-chip></td>
              <td></td>
            </tr>
          </table>

          <h3>outlined</h3>

          <table>
            <tr>
              <th></th>
              <th>selected</th>
              <th>unselected</th>
            </tr>
            <tr>
              <td>enabled</td>
              <td>
                <furo-chip
                  selected
                  outlined
                  condensed
                  leading-icon="schedule"
                  trailing-icon="close"
                  text="hallo world"
                ></furo-chip>
              </td>
              <td>
                <furo-chip
                  outlined
                  leading-icon="schedule"
                  trailing-icon="close"
                  text="hallo world"
                ></furo-chip>
              </td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>
                <furo-chip
                  outlined
                  selected
                  disabled
                  leading-icon="schedule"
                  trailing-icon="close"
                  text="selected disabled"
                ></furo-chip>
              </td>
              <td>
                <furo-chip
                  outlined
                  disabled
                  leading-icon="schedule"
                  trailing-icon="close"
                  text="Unselected disabled"
                ></furo-chip>
              </td>
            </tr>
            <tr></tr>
          </table>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-chip', DemoFuroChip);
