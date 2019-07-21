import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-horizontal-flex`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/demo-furo-horizontal-flex.html
 * @appliesMixin FBP
 */
class DemoFuroHorizontalFlex extends FBP(LitElement) {

  constructor() {
    super();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }

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
      <h2>Demo furo-horizontal-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet>
        <template>
          <furo-horizontal-flex>
            <div>small</div>
            <!-- A furo-empty-spacer will fill the available space. -->
            <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
            <div>small</div>
          </furo-horizontal-flex>
        </template>
      </furo-demo-snippet>

      
    `;
  }
}

window.customElements.define('demo-furo-horizontal-flex', DemoFuroHorizontalFlex);
