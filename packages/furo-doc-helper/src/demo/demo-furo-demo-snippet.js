import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// demo imports
import '../furo-catalog.js';
import '../furo-demo-snippet.js';
import './fetch-analysis.js';

/**
 * `demo-furo-demo-snippet`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDemoSnippet extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDemoSnippet') ||
      css`
        :host {
          display: block;
          height: 100%;
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
        <p>Demo is flickering, because it gets completly re rendered on each change</p>
        <furo-demo-snippet flex demo>
          <template>
            <a
              href="/api/demo/util/demo-furo-demo-snippet/util/"
              @-park="((park)),((other))"
              @-event="^event,((other))"
              @-bubble="^^bubble,((other))"
              @-hostevent="-^hostevent"
              >Package util</a
            >
            <a href="/api/demo/util/demo-furo-demo-snippet/data/">Package data</a>

            <furo-location
              url-space-regex="^/api/demo/util/demo-furo-demo-snippet"
              @-location-changed="--pathChanged"
            ></furo-location>
            <!-- load analysis based on --pathChanged.pathSegments[0] -->
            <furo-doc-fetch-analysis
              ƒ-fetch-location="--pathChanged"
              ƒ-activate="--pageActivated"
              @-data="--analysis"
            ></furo-doc-fetch-analysis>
            <furo-split-view>
              <!-- the doc menu 
              Multiline comment
              on furo-doc-menu
              -->
              <furo-doc-menu
                slot="master"
                scroll
                ƒ-analysis="--analysis"
                @-element="--element"
                @-class="--class"
              ></furo-doc-menu>

              <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>
              <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>
            </furo-split-view>

            <dummy-element
              ƒ-remove="--class(*.path), --element, --analysis(*.path)"
              ƒ-.prop="--analysis"
              @-done="((hostattribute)),notarget"
            ></dummy-element>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-demo-snippet', DemoFuroDemoSnippet);
