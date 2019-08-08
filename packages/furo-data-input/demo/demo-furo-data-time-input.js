import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-data-time-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataTimeInput extends FBP(LitElement) {

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
        <div><h2>Demo furo-data-time-input</h2>
          <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the entity-object specs.</p>
          <p>As you can see, the "data-binding" is done by the entity-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
            <furo-horizontal-flex>
              <furo-data-time-input autofocus ƒ-bind-data="--entity(*.fields.id)"
                                      hint="Hint should come from spec and overflows"></furo-data-time-input>
              <furo-data-time-input label="with step" step="0.5" ƒ-bind-data="--entity(*.fields.id)"
                                      @-value-changed="--timeChanged"
                                      hint="but that should be ok"></furo-data-time-input>
              <furo-data-time-input flex label="min max" min="1" max="9"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-time-input>
              <furo-data-time-input label="disabled" disabled label="with step" step="0.5"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-time-input>
            </furo-horizontal-flex>
            <hr>
            <!-- --timeChanged only comes when data was typed in. -->
            <span ƒ-.inner-text="--timeChanged"></span>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-time-input', DemoFuroDataTimeInput);
