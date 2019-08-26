import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-data-textarea-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataTextareaInput extends FBP(LitElement) {

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
      <h2>Demo furo-data-textarea-input</h2>
      <p>Bind the field from furo-entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the furo-entity-object specs.</p>
      <furo-demo-snippet >
        <template>
          <furo-entity-object type="project.Project" @-object-ready="--entity"></furo-entity-object>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.fields.description)"></furo-data-textarea-input>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.fields.description)" @-value-changed="--textareaChanged"></furo-data-textarea-input>
          <!-- --textareaChanged only comes when data was typed in. -->
          <span ƒ-.inner-textarea="--textareaChanged"></span>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-data-textarea-input', DemoFuroDataTextareaInput );
