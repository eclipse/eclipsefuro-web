import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `form-section-three`
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FormSectionThree extends FBP(LitElement) {
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
        <furo-ui5-form-field-container>
          <ui5-label label slot="label" for="Custom" show-colon
            >Currency / Units (custom)
          </ui5-label>
          <furo-horizontal-flex id="Custom" content space>
            <furo-ui5-data-text-input
              ƒ-.disabled="--disable"
              flex
              ƒ-bind-data="--entity(*.data.furo_data_money_input.currency_code)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-number-input
              ƒ-.disabled="--disable"
              flex
              ƒ-bind-data="--entity(*.data.furo_data_money_input.units)"
            ></furo-ui5-data-number-input>
          </furo-horizontal-flex>
        </furo-ui5-form-field-container>

        <furo-ui5-data-display
          ƒ-.disabled="--disable"
          label="data-display-labeled"
          ƒ-bind-data="--entity(*.data.furo_data_money_input)"
        ></furo-ui5-data-display>

        <furo-ui5-data-money-input-labeled
          label="money input labeled"
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_money_input)"
        ></furo-ui5-data-money-input-labeled>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('form-section-three', FormSectionThree);
