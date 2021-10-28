import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-collection-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';

/**
 * `demo-furo-ui5-data-radio-button`
 *
 * @Summary basic usage of furo-ui5-data-segemented-button
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataRadioButton extends FBP(LitElement) {
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

        furo-demo-snippet {
          height: 100%;
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
      <h2>Demo furo-ui5-data-radio-button</h2>
      <p>
        The furo-ui5-data-radio-button component enables users to select a single option from a set
        of options. When a furo-ui5-data-radio-button that is within a group is selected, the one
        that was previously selected gets automatically deselected.
      </p>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter one>
            <furo-ui5-radiogroup>
              <furo-ui5-data-radio-button
                content
                name="group"
                value-state="Warning"
                ƒ-bind-data="--data(*.furo_data_checkbox_input)"
              ></furo-ui5-data-radio-button>
              <furo-ui5-data-radio-button
                content
                name="group"
                ƒ-bind-data="--data(*.furo_data_bool_icon)"
              ></furo-ui5-data-radio-button>
            </furo-ui5-radiogroup>
          </furo-form-layouter>

          <furo-form-layouter one>
            <p>Bound fields:</p>
            <furo-ui5-data-text-input
              ƒ-bind-data="--data(*.furo_data_checkbox_input)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--data(*.furo_data_bool_icon)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-form-layouter one>
            <furo-ui5-radiogroup>
              <p>Using furo-ui5-data-radio-button with type furo.fat.Bool</p>
              <furo-ui5-data-radio-button
                content
                name="FatWrapper"
                value-state="Warning"
                ƒ-bind-data="--dataUni(*.fat_bool)"
              ></furo-ui5-data-radio-button>
              <p>Using furo-ui5-data-radio-button with type google.protobuf.BoolValue</p>
              <furo-ui5-data-radio-button
                content
                name="FatWrapper"
                ƒ-bind-data="--dataUni(*.wrapper_bool)"
              ></furo-ui5-data-radio-button>
            </furo-ui5-radiogroup>
          </furo-form-layouter>

          <furo-form-layouter one>
            <p>Bound fields:</p>
            <furo-ui5-data-text-input
              ƒ-bind-data="--dataUni(*.fat_bool)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--dataUni(*.wrapper_bool)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-data-object
            type="universaltest.Universaltest"
            @-object-ready="--dataUni"
          ></furo-data-object>
          <furo-data-object type="experiment.Experiment" @-object-ready="--data"></furo-data-object>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-radio-button', DemoFuroUi5DataRadioButton);
