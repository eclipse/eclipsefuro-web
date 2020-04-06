import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';
import './helper/furo-data-object-form.js';

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
    return (
      Theme.getThemeForComponent('DemoFuroDataObject') ||
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
              style="width: 300px; margin: 30px"
              header-text="Some data"
              secondary-text="Save is not implemented"
            >
              <furo-data-object-form ƒ-bind-fields="--dataObject(*.fields)"></furo-data-object-form>
              <furo-horizontal-flex slot="action">
                <!-- The button will trigger the wire --saveClicked, which triggers ƒ-save on the furo-entity-agent as soon it is clicked -->
                <furo-button primary @-click="--saveClicked" label="save data"></furo-button>
              </furo-horizontal-flex>
            </furo-card>

            <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
            <furo-entity-agent
              service="ProjectService"
              ƒ-save="--saveClicked"
              ƒ-bind-request-data="--dataObject"
              @-response="--response"
            ></furo-entity-agent>
            <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <furo-data-object
              type="project.Project"
              ƒ-inject-raw="--response(*.data)"
              @-object-ready="--dataObject"
            ></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-object', DemoFuroDataObject);
