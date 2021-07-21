// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import "@furo/data-input";
import "@furo/form";
import "../furo/furo-reference-display.js";
import "../projectmemberservice/person-person-reference-search.js";

/**
 * Task data description
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class TaskTaskDisplay extends FBP(LitElement) {


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
   * @private
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

          <!-- field: estimated_time -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.estimated_time)"></furo-data-display>

          <!-- field: owner -->
          <person-person-reference-search condensed full header-text="${i18n.t('furo.reference.form.header.text')}" secondary-text="${i18n.t('furo.reference.form.secondary.text')}" ƒ-bind-data="--data(*.owner)"></person-person-reference-search>

          <!-- field: subtasks -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.subtasks)"></furo-data-display>
        </furo-form-layouter>
      </furo-form>
    `;
  }
}

window.customElements.define('task-task-display', TaskTaskDisplay);

