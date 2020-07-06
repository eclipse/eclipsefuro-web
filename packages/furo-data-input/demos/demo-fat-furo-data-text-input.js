import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';
import './helper/simulate-error.js';
import './helper/fetch-universal-json.js';

/**
 * `demo-furo-data-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFatFuroDataTextInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataTextInput') ||
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
    // eslint-disable-next-line lit/attribute-value-entities
    return html`
      <furo-vertical-flex>
        <h2>Demo furo-data-text-input</h2>
        <p>
         furo-data-text-input with skalar, google wrapper and fat bindings.
        </p>
        <furo-demo-snippet flex ƒ-xx="--response">
          <template>
             <furo-form-layouter two>
            <furo-data-text-input
              trailing-icon="dashboard"            
              required
              ƒ-bind-data="--entity(*.scalar_string)"
            ></furo-data-text-input>
           
               
            <furo-data-text-input
              trailing-icon="dashboard"            
              required
              ƒ-bind-data="--entity(*.scalar_string)"
            ></furo-data-text-input>
           
              <furo-data-text-input
              ƒ-bind-data="--entity(*.wrapper_string)"
            ></furo-data-text-input>
           
               
            <furo-data-text-input
                required
              ƒ-bind-data="--entity(*.wrapper_string)"
            ></furo-data-text-input>
           
           
      <furo-data-text-input
              ƒ-bind-data="--entity(*.fat_string)"
            ></furo-data-text-input>
           
               
            <furo-data-text-input
                required
              ƒ-bind-data="--entity(*.fat_string)"
            ></furo-data-text-input>
           </furo-form-layouter>
           
<fetch-universal-json @-data-loaded="--mockdata"></fetch-universal-json>
            <furo-data-object
              type="universaltest.Universaltest"
              @-object-ready="--entity"
              ƒ-inject-raw="--mockdata"
            ></furo-data-object>
            
           
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-fat-furo-data-text-input', DemoFatFuroDataTextInput);
