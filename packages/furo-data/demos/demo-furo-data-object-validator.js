import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme.js"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/data/src/furo-catalog.js";
import "./helper/furo-data-object-form.js"

/**
 * `demo-furo-data-object-validator`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataObjectValidator extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataObjectValidator') || css`
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
          <h2>Demo for object validator</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
              <furo-horizontal-flex>
              <furo-data-text-input  ƒ-bind-data="--entity(*.text)"></furo-data-text-input>
              <furo-data-text-input autofocus ƒ-bind-data="--entity(*.text)"></furo-data-text-input>
              <furo-data-number-input  autofocus ƒ-bind-data="--entity(*.number)"></furo-data-number-input>
              <furo-data-number-input  autofocus ƒ-bind-data="--entity(*.number)"></furo-data-number-input>
              
              <furo-data-object type="experiment.Constraints" @-object-ready="--entity" ƒ-validate-all-fields="--clicked"
                                ƒ-inject-raw="--response(*.data)"></furo-data-object>
              </furo-horizontal-flex>
              <furo-button raised label="validate object" @-click="--clicked"></furo-button>
              
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-object-validator', DemoFuroDataObjectValidator);
