import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "./helper/data-object-form"

/**
 * `demo-data-object`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoDataObject extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `
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
          <h2>Demo demo-data-object</h2>
          <p>A data-object receives its data regulary from a entity-agent or a collection-ageen. Make sure that you bind 
            the correct properties to the receiver. In this example <i>data-object-form</i> is excepting fields.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card style="width: 300px; margin: 30px" title="Some data" secondary-text="Save is not implemented">
              <data-object-form ƒ-bind-fields="--dataObject(*.fields)"></data-object-form>
              <furo-horizontal-flex slot="action">
                <!-- The button will trigger the wire --saveClicked, which triggers ƒ-save on the entity-agent as soon it is clicked -->
                <furo-button primary  @-click="--saveClicked" label="save data"></furo-button>
              </furo-horizontal-flex>
            </furo-card>
           
           <!-- The entity-agent will fetch the data from ProjectService and pass it in @-response to the data-object.  --> 
            <entity-agent service="ProjectService" ƒ-save="--saveClicked" ƒ-bind-request-data="--dataObject" @-response="--response" ></entity-agent>
            <!-- The data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <data-object type="project.Project" ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-data-object', DemoDataObject);
