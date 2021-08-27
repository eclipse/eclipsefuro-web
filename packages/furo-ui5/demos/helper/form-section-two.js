import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
/**
 * `form-section-two`
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FormSectionTwo extends FBP(LitElement) {
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
      <furo-form-layouter>
        <div>
          <furo-ui5-data-textarea-input-labeled
            ƒ-.disabled="--disable"
            ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
          ></furo-ui5-data-textarea-input-labeled>
        </div>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('form-section-two', FormSectionTwo);
