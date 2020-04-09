import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-snackbar-display.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-snackbar.js';
import '@furo/input';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import './produce-snackbar-data.js';

/**
 * `demo-furo-snackbar-display`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroSnackbarDisplay extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroSnackbarDisplay') ||
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
   *@private
   */
  static get properties() {
    return {};
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-snackbar</h2>
          <p>The snack bar is set with position absolute.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <produce-snackbar-data
              id="snackbar1"
              label="show left"
              snackbar-label="this is a text label"
              @-snackbar-label-snackbar1="--setLabelTex1"
              @-show-snackbar1="--show1"
            ></produce-snackbar-data>
            <produce-snackbar-data
              id="snackbar2"
              label="show center"
              snackbar-label="this is a text label"
              @-snackbar-label-snackbar2="--setLabelTex2"
              @-show-snackbar2="--show2"
            ></produce-snackbar-data>
            <produce-snackbar-data
              id="snackbar3"
              label="show right stacked"
              snackbar-label="this is a text label"
              @-snackbar-label-snackbar3="--setLabelTex3"
              @-show-snackbar3="--show3"
            ></produce-snackbar-data>

            <furo-snackbar
              timeout-in-ms="5000"
              position-left
              icon="close"
              action-button-text="undo"
              close-on-escape
              ƒ-set-label-text="--setLabelTex1"
              max-size="500px"
              ƒ-show="--show1"
            ></furo-snackbar>
            <furo-snackbar
              timeout-in-ms="5000"
              icon="done"
              size="250px"
              action-button-text="undo"
              ƒ-show="--show2"
            ></furo-snackbar>
            <furo-snackbar
              position-right
              timeout-in-ms="5000"
              stacked
              size="350px"
              ƒ-show="--show3"
            ></furo-snackbar>
            <!-- this furo-banner-display should be place on the main page once 
            <furo-snackbar-display></furo-snackbar-display> 
          -->
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

customElements.define('demo-furo-snackbar-display', DemoFuroSnackbarDisplay);
