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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-data-property ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property>
              <furo-data-property ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property>
              
              <furo-horizontal-flex>
                <div>
              <template is="flow-repeat" ƒ-inject-items="--dd(*.type_property.repeats)" identity-path="id.value">
                <furo-data-property ƒ-bind-data="--item"></furo-data-property>
              </template>
                </div>
                <div>
              <template is="flow-repeat" ƒ-inject-items="--dd(*.type_property.repeats)" identity-path="id.value">
                <furo-data-property ƒ-bind-data="--item"></furo-data-property>
              </template>
                </div>
              </furo-horizontal-flex>
              <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>
              <furo-data-object type="experiment.Experiment" @-object-ready="--entity" @-data-injected="--dd"
                                ƒ-inject-raw="--response(*.data)"></furo-data-object>
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 ƒ-load="--hts"
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
