import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5-typerenderer/src/registry.js';

/**
 * `form-section-four`
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FormSectionFour extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  injectEntity(entity) {
    this._FBPTriggerWire('--entity', entity);
  }

  disable() {
    this._FBPTriggerWire('--disable', true);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-form-layouter one>
        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.description)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_number_input)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.description)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_money_input)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_time_input)"
        ></furo-ui5-data-display>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
        ></furo-ui5-data-display>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('form-section-four', FormSectionFour);
