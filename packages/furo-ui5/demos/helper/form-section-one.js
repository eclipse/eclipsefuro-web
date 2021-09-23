import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-collection-agent.js';

/**
 * `form-section-one`
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FormSectionOne extends FBP(LitElement) {
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
    this._FBPTriggerWire('--disable', 'true');
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-form-layouter one>
        <furo-ui5-data-text-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.display_name)"
        ></furo-ui5-data-text-input-labeled>

        <furo-ui5-data-text-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.description)"
        ></furo-ui5-data-text-input-labeled>

        <furo-ui5-data-text-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_text_input)"
        ></furo-ui5-data-text-input-labeled>

        <furo-ui5-data-number-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_number_input)"
        ></furo-ui5-data-number-input-labeled>

        <furo-ui5-data-password-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_number_input)"
        ></furo-ui5-data-password-input-labeled>

        <furo-ui5-data-date-picker-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
        ></furo-ui5-data-date-picker-labeled>

        <furo-ui5-data-date-picker-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_date_input)"
        ></furo-ui5-data-date-picker-labeled>

        <furo-ui5-data-date-time-picker-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.google_timestamp)"
        ></furo-ui5-data-date-time-picker-labeled>

        <furo-ui5-data-reference-search-labeled
          @-search="--term"
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entityTaskReady(*.owner)"
          label="reference"
        ></furo-ui5-data-reference-search-labeled>

        <furo-ui5-data-collection-dropdown-labeled
          value-sub-field="id"
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entityTaskReady(*.owner)"
          ƒ-inject-entities="--refCol(*.entities)"
        ></furo-ui5-data-collection-dropdown-labeled>

        <furo-ui5-data-checkbox-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
        ></furo-ui5-data-checkbox-input-labeled>

        <furo-ui5-data-multi-input-labeled
          ƒ-.disabled="--disable"
          ƒ-bind-data="--entity(*.data.repstring)"
        ></furo-ui5-data-multi-input-labeled>

        <furo-ui5-form-field-container>
          <ui5-label label slot="label" for="Custom" show-colon
            >Use it for small option lists
          </ui5-label>

          <furo-ui5-data-segmented-button
            style="max-width: 100%;"
            content
            id-field-path="data.id"
            value-field-path="data.id"
            display-field-path="data.display_name"
            ƒ-.readonly="--disable"
            ƒ-bind-data="--entityTaskReady(*.owner.id)"
            ƒ-bind-options="--daoPersonCollection(*.entities)"
          ></furo-ui5-data-segmented-button>


      </furo-form-layouter>

      <furo-data-object type="task.Task" @-object-ready="--entityTaskReady"></furo-data-object>
      <furo-data-object
        type="person.PersonCollection"
        @-object-ready="--daoPersonCollection"
        ƒ-inject-raw="--refCol"
      ></furo-data-object>
      <furo-collection-agent
        service="PersonService"
        ƒ-hts-in="--entityTaskReady(*.owner.link._value)"
        list-on-hts-in
        ƒ-search="--term"
        @-response="--refCol"
      >
      </furo-collection-agent>
    `;
  }
}

window.customElements.define('form-section-one', FormSectionOne);
