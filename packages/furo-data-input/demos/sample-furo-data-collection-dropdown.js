import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/data';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import './helper/produce-qp-data.js';
/**
 * `sample-furo-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroDataCollectionDropdown extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('SampleFuroDataCollectionDropdown') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
        furo-demo-snippet {
          height: 270px;
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
          <furo-form-layouter two>
            <furo-data-collection-dropdown
              hint="hint override"
              leading-icon="mail"
              trailing-icon="fingerprint"
              subfield="id"
              display-field="phone_nr"
              label="Use phone as display"
              ƒ-inject-entities="--response(*.entities)"
              ƒ-bind-data="--entity(*.owner)"
            ></furo-data-collection-dropdown>
            <furo-data-collection-dropdown
              hint="hint override"
              leading-icon="mail"
              trailing-icon="fingerprint"
              display-field="phone_nr"
              label="Use phone as display"
              ƒ-inject-entities="--response(*.entities)"
              ƒ-bind-data="--entity(*.owner.id)"
            ></furo-data-collection-dropdown>
          </furo-form-layouter>

          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>

          <furo-collection-agent
            service="PersonService"
            list-on-hts-in
            ƒ-hts-in="--entity(*.owner.link._value)"
            @-response="--response"
          >
          </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define(
  'sample-furo-data-collection-dropdown',
  SampleFuroDataCollectionDropdown,
);
