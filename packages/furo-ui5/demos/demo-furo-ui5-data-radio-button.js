import { LitElement, html, css } from 'lit-element'
import { Theme } from '@furo/framework/src/theme'
import { FBP } from '@furo/fbp/src/fbp.js'

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js'

/**
 * `demo-furo-ui5-data-radio-button`
 *
 * @Summary basic usage of furo-ui5-data-radio-button
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataRadioButton extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataRadioButton') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 100%;
        }
      `
    )
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-demo-snippet>
        <h2>Demo furo-ui5-data-radio-button Group</h2>
        <template>
          <furo-form-layouter one>
            <div>
              <p>
                Use the single furo-ui5-data-radio-button to bind several single fields of type bool.
                If you have a set of Boolean, use the furo-ui5-data-radio-button-group.
              </p>
              <div>
                <furo-ui5-data-radio-button name="Group"
                                            ƒ-bind-data="--entity(*.furo_data_bool_icon)"
                                            @-item-selected="--itemSelected"
                ></furo-ui5-data-radio-button>
                <furo-ui5-data-radio-button name="Group"
                                            ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                            @-item-selected="--itemSelected"
                ></furo-ui5-data-radio-button>
              </div>
            </div>
            <hr/>
            <p>
              Bound input fields: Only one boolean field can be true
            </p>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.furo_data_bool_icon)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
            ></furo-ui5-data-text-input>

          </furo-form-layouter>

          <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>

        </template>
      </furo-demo-snippet>
    `
  }
}

window.customElements.define(
  'demo-furo-ui5-data-radio-button',
  DemoFuroUi5DataRadioButton,
)
