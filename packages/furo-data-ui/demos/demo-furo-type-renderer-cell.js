import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Styling } from '@furo/doc-helper/src/styling.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-ui/src/furo-catalog.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5-typerenderer/src/display-registry.js';

/**
 * `demo-furo-type-renderer`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroTypeRendererCell extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroTypeRenderer') || [
        css`
          :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
          }

          :host([hidden]) {
            display: none;
          }
        `,
        Styling.theme,
      ]
    );
  }

  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div>
          <h2>furo-type-renderer examples</h2>
        </div>
        <furo-form-layouter one>
          <furo-button full @-click="--demoDataRequested">Load Demo Data</furo-button>
          <furo-button @-click="--reload">reload</furo-button>
        </furo-form-layouter>

        <furo-form-layouter two>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.display_name)"
          ></furo-type-renderer>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-type-renderer>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.the_any_type)"
          ></furo-type-renderer>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
          ></furo-type-renderer>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.single_type_property)"
          ></furo-type-renderer>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.furo_data_text_input)"
          ></furo-type-renderer>
          <furo-type-renderer
            context="cell"
            ƒ-bind-data="--entity(*.data.type_property)"
          ></furo-type-renderer>
        </furo-form-layouter>
      </furo-vertical-flex>

      <produce-qp-data
        auto
        hidden
        ƒ-produce="--demoDataRequested"
        @-data="--qp"
        qpescaped="%7B%22exp%22%3A1%7D"
      ></produce-qp-data>

      <furo-data-object
        type="experiment.ExperimentEntity"
        @-object-ready="--entity"
        ƒ-inject-raw="--response"
      ></furo-data-object>
      <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
      <furo-entity-agent
        service="ExperimentService"
        ƒ-hts-in="--hts"
        ƒ-load="--reload"
        load-on-hts-in
        ƒ-bind-request-data="--entity"
        @-response="--response"
      >
      </furo-entity-agent>
    `;
  }
}

window.customElements.define('demo-furo-type-renderer-cell', DemoFuroTypeRendererCell);
