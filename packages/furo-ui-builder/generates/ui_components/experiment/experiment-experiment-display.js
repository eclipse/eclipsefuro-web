// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import "@furo/data-input";
import "@furo/form";

/**
 * experiment spec for testing
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class ExperimentExperimentDisplay extends FBP(LitElement) {


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {

      // Header text to label the form
      headerText: {
        type: String,
        attribute: "header-text",
      },
      // Secondary text for a detailed description
      secondaryText: {
        type: String,
        attribute: "secondary-text",
      },
    }
  }

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d)
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }


  /**
   *  Bind your furo-data-object event @-object-ready
   * @public
   * @param data
   */
  bindData(data) {
    this._FBPTriggerWire('--data', data);
    this.field = data;
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent("DisplayBaseTheme") || css`
      
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`

      <!-- It is a good practice to set a description -->
      <furo-form header-text="${this.headerText?this.headerText:""}" secondary-text="${this.secondaryText?this.secondaryText:""}">

        <!-- It is a good practice to set a description -->
        <furo-form-layouter four>

          <!-- field: description -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.description)" ƒ-focus="--focused"></furo-data-display> 

          <!-- field: furo_data_checkbox_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_checkbox_input)"></furo-data-display> 

          <!-- field: furo_data_text_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_text_input)"></furo-data-display> 

          <!-- field: furo_data_textarea_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_textarea_input)"></furo-data-display> 

          <!-- field: furo_data_time_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_time_input)"></furo-data-display> 

          <!-- field: furo_data_range_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_range_input)"></furo-data-display> 

          <!-- field: furo_data_number_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_number_input)"></furo-data-display> 

          <!-- field: furo_data_color_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_color_input)"></furo-data-display> 

          <!-- field: furo_data_password_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_password_input)"></furo-data-display> 

          <!-- field: furo_data_search_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_search_input)"></furo-data-display> 

          <!-- field: furo_data_date_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_date_input)"></furo-data-display> 

          <!-- field: furo_data_bool_icon -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_bool_icon)"></furo-data-display> 

          <!-- field: the_any_type -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.the_any_type)"></furo-data-display> 

          <!-- field: type_with_options -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.type_with_options)"></furo-data-display> 

          <!-- It is a good practice to set a description -->
          <furo-form full header-text="${i18n.t('experiment.experiment.properties.header.text')}" secondary-text="${i18n.t('experiment-experiment.properties.secondary.text')}">

            <!-- It is a good practice to set a description -->
            <furo-form-layouter four>

              <!-- field: type_property -->
              <furo-data-display condensed double ƒ-bind-data="--data(*.type_property)"></furo-data-display> 
            </furo-form-layouter> 
          </furo-form> 

          <!-- field: furo_data_date_input_google -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_date_input_google)"></furo-data-display> 

          <!-- It is a good practice to set a description -->
          <furo-form full header-text="${i18n.t('experiment.experiment.properties.header.text')}" secondary-text="${i18n.t('experiment-experiment.properties.secondary.text')}">

            <!-- It is a good practice to set a description -->
            <furo-form-layouter four>

              <!-- field: single_type_property -->
              <furo-data-display condensed double ƒ-bind-data="--data(*.single_type_property)"></furo-data-display> 
            </furo-form-layouter> 
          </furo-form> 

          <!-- field: repstring -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.repstring)"></furo-data-display> 

          <!-- field: furo_data_money_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_money_input)"></furo-data-display> 

          <!-- field: furo_data_file_input -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.furo_data_file_input)"></furo-data-display> 

          <!-- field: update_mask -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.update_mask)"></furo-data-display> 
        </furo-form-layouter> 
      </furo-form> 
    `;
  }
}

window.customElements.define('experiment-experiment-display', ExperimentExperimentDisplay);

