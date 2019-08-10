import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data/entity-object"
import "../furo-catalog"
/**
 * `demo-furo-data-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataTextInput extends FBP(LitElement) {

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
      <h2>Demo furo-data-text-input</h2>
      <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the entity-object specs.</p>
      <furo-demo-snippet >
        <template>
          <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
          <furo-data-text-input trailing-icon="dashboard" ƒ-bind-data="--entity(*.fields.description)"></furo-data-text-input>
          <furo-data-text-input leading-icon="dashboard" float label="Always float" hint="Always float" ƒ-bind-data="--entity(*.fields.description)"></furo-data-text-input>
          <furo-data-text-input autofocus ƒ-bind-data="--entity(*.fields.description)" @-value-changed="--textChanged"></furo-data-text-input>
          <!-- --textChanged only comes when data was typed in. -->
          <span ƒ-.inner-text="--textChanged"></span>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-data-text-input', DemoFuroDataTextInput );
