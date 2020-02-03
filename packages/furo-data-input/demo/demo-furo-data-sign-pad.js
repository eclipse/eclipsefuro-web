import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-data-sign-pad`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataSignPad extends FBP(LitElement) {

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
              <furo-button @-click="--clrCLK">clear</furo-button>
              <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
              <furo-data-sign-pad ƒ-clear="--clrCLK" ƒ-bind-data="--entity(*.description)"></furo-data-sign-pad>
              <furo-data-sign-pad ƒ-bind-data="--entity(*.description)"></furo-data-sign-pad>
              <furo-data-textarea-input rows="12" cols="120"  hint="custom hint" required
                                    ƒ-bind-data="--entity(*.description)"></furo-data-textarea-input>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-sign-pad', DemoFuroDataSignPad);
