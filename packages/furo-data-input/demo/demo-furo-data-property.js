import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/fbp/flow-repeat"
import "../furo-catalog"

/**
 * `demo-furo-data-property`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataProperty extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataProperty') || css`
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
          <h2>Demo furo-data-property</h2>
          <p>Bind your fields as usual.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <!-- repeated Property -->

                <furo-data-property ƒ-bind-data="--entity(*.data.type_property)"></furo-data-property>


                <!-- single Property -->
                <furo-data-property ƒ-bind-data="--entity(*.data.single_type_property)"></furo-data-property>
              </furo-form-layouter>

              <furo-button @-click="--reload">reload</furo-button>
              <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>
              
              <furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity"
                                ƒ-inject-raw="--response"></furo-data-object>
              
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 ƒ-load="--hts,--reload"
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-property', DemoFuroDataProperty);
