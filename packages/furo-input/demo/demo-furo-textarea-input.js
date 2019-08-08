import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-element`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroTextareaInput extends FBP(LitElement) {

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
          <h2>Demo furo-textarea-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-textarea-input rows="1" label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
            <furo-text-input label="compare" value="text" hint="hint"></furo-text-input>
            <hr>
            <furo-textarea-input label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
          </template>
        </furo-demo-snippet>
        <furo-split-view flex>
          <furo-textarea-input style="width: 100%" slot="master" rows="14" label="Markdown" hint="just type"
                               @-value-changed="--text"></furo-textarea-input>
          <furo-markdown  style="width: 100%"  ƒ-parse-markdown="--text" ></furo-markdown>
        </furo-split-view>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-textarea-input', DemoFuroTextareaInput);
