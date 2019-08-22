import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data/entity-object"
import "../furo-catalog"
/**
 * `demo-furo-data-checkbox-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCheckboxInput extends FBP(LitElement) {

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
      <h2>Demo furo-data-checkbox-input</h2>
      <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the entity-object specs.</p>
      <furo-demo-snippet >
        <template>
          <entity-object type="navigationnode" @-object-ready="--entity"></entity-object>
          <furo-data-checkbox-input trailing-icon="dashboard" ƒ-bind-data="--entity(*.fields.open)"></furo-data-checkbox-input>
          <furo-data-checkbox-input leading-icon="dashboard"  label="disabled" hint="disabled hint" disabled=true ƒ-bind-data="--entity(*.fields.open)"></furo-data-checkbox-input>
          <furo-data-checkbox-input autofocus ƒ-bind-data="--entity(*.fields.open)" @-value-changed="--checkChanged" hint="the checked value will be sent to text input"></furo-data-checkbox-input>
            <!-- --textChanged only comes when data was typed in. -->
            <furo-text-input label="wire the checkbox" ƒ-set-value="--checkChanged"></furo-text-input>
        </template>
      </furo-demo-snippet>
    `;
    }
}

window.customElements.define('demo-furo-data-checkbox-input', DemoFuroDataCheckboxInput );
