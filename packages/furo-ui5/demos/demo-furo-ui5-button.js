import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Icon.js';

/**
 * `demo-furo-ui5-button`
 *
 * @Summary basic usage of furo-ui5-button
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5Button extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
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
        <h2>Demo furo-ui5-button</h2>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <ui5-panel>
                <furo-form-layouter one>
                  <p>Button state default:</p>
                  <furo-ui5-button>Action</furo-ui5-button>

                  <p>Buttons with various designs:</p>
                  <furo-ui5-button-bar>
                    <furo-ui5-button design="Negative">Negative</furo-ui5-button>
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-ui5-button design="Emphasized">Emphasized</furo-ui5-button>
                    <furo-ui5-button design="Positive">Positive</furo-ui5-button>
                    <furo-ui5-button design="Attention">Attention</furo-ui5-button>
                    <furo-ui5-button design="Transparent">Transparent</furo-ui5-button>
                    <furo-ui5-button>Default</furo-ui5-button>
                  </furo-ui5-button-bar>

                  <p>Button disabled:</p>
                  <furo-ui5-button
                    ƒ-enable="--enableRequested"
                    ƒ-disable="--disableRequested"
                    disabled
                    >Disabled or Enabled</furo-ui5-button
                  >
                  <p>Use of the convenience functions enable/disable</p>
                  <furo-ui5-button-bar>
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-ui5-button @-click="--enableRequested" design="Positive"
                      >ƒ-enable</furo-ui5-button
                    >
                    <furo-ui5-button @-click="--disableRequested" design="Negative"
                      >ƒ-disable</furo-ui5-button
                    >
                  </furo-ui5-button-bar>

                  <p>Buttons with icons:</p>
                  <furo-ui5-button-bar>
                    <furo-ui5-button
                      icon="away"
                      design="Negative"
                      aria-labelledby="lblAway"
                    ></furo-ui5-button>
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-ui5-button
                      icon="accept"
                      design="Positive"
                      aria-labelledby="lblAccept"
                    ></furo-ui5-button>
                    <furo-ui5-button icon="accept" design="Positive" aria-labelledby="lblAccept"
                      >With leading icon</furo-ui5-button
                    >
                    <furo-ui5-button
                      icon="accept"
                      icon-end
                      design="Positive"
                      aria-labelledby="lblAccept"
                      >With trailing icon</furo-ui5-button
                    >
                    <furo-ui5-button
                      icon="action-settings"
                      aria-labelledby="lblSettings"
                      design="Transparent"
                    ></furo-ui5-button>
                  </furo-ui5-button-bar>
                </furo-form-layouter>
              </ui5-panel>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-button', DemoFuroUi5Button);
