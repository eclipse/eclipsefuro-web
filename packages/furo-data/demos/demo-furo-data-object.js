import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/app/src/furo-card.js';

import './helper/furo-data-object-form.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';

/**
 * `demo-furo-data-object`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataObject extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        height: 100%;
        padding-right: var(--spacing);
      }

      :host([hidden]) {
        display: none;
      }
    `;
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
          <h2>Demo demo-furo-data-object</h2>
          <p>
            A furo-data-object receives its data regulary from a furo-entity-agent or a
            collection-ageen. Make sure that you bind the correct properties to the receiver. In
            this example <i>furo-data-object-form</i> is excepting fields.
          </p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card
              style="width: 420px; margin:  30px; display: inline-block; vertical-align: top"
              header-text="Some data"
              secondary-text="Save is not implemented"
            >
              <furo-data-object-form ƒ-bind-fields="--dataObject"></furo-data-object-form>

              <furo-horizontal-flex slot="action">
                <!-- The button will trigger the wire --saveClicked, which triggers ƒ-save on the furo-entity-agent as soon it is clicked -->
                <furo-button primary @-click="--saveClicked" label="save data"></furo-button>
              </furo-horizontal-flex>
            </furo-card>
            <furo-card
              style="width: 420px; margin: 30px; display: inline-block;vertical-align: top"
              header-text="Get the data of DataObject"
              secondary-text="get data of a data object via getData method"
            >
              <furo-form-layouter two>
                <furo-pretty-json
                  style="width: 320px; "
                  ƒ-inject-data="--objectData(*._value)"
                ></furo-pretty-json>

                <furo-data-textarea-input
                  label="value in base64"
                  ƒ-set-value="--objectData(*._base64)"
                ></furo-data-textarea-input>
              </furo-form-layouter>

              <furo-horizontal-flex slot="action">
                <furo-button primary @-click="--getData" label="get data"></furo-button>
              </furo-horizontal-flex>
            </furo-card>

            <furo-deep-link
              service="ProjectService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>

            <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
            <furo-entity-agent
              service="ProjectService"
              ƒ-save="--saveClicked"
              ƒ-hts-in="--hts"
              ƒ-bind-request-data="--dataObject"
              @-response="--response"
            ></furo-entity-agent>
            <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <furo-data-object
              type="project.Project"
              ƒ-inject-raw="--response(*.data)"
              ƒ-get-data="--getData"
              @-object-ready="--dataObject"
              @-ƒ-get-data="--objectData"
            ></furo-data-object>
            <produce-qp-data
              hidden
              auto
              @-data="--qp"
              qpescaped="%7B%22prj%22%3A1%7D"
            ></produce-qp-data>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-object', DemoFuroDataObject);
