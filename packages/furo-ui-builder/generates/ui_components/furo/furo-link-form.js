// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import "@furo/data-input";
import "@furo/form";

/**
 * link
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class FuroLinkForm extends FBP(LitElement) {

  
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
    return Theme.getThemeForComponent("FormBaseTheme") || css`
      
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

          <!-- field: rel -->
          <furo-data-text-input condensed double ƒ-bind-data="--data(*.rel)" ƒ-focus="--focused"></furo-data-text-input> 

          <!-- field: method -->
          <furo-data-text-input condensed double ƒ-bind-data="--data(*.method)"></furo-data-text-input> 

          <!-- field: href -->
          <furo-data-text-input condensed double ƒ-bind-data="--data(*.href)"></furo-data-text-input> 

          <!-- field: type -->
          <furo-data-text-input condensed double ƒ-bind-data="--data(*.type)"></furo-data-text-input> 

          <!-- field: service -->
          <furo-data-text-input condensed double ƒ-bind-data="--data(*.service)"></furo-data-text-input> 
        </furo-form-layouter> 
      </furo-form> 
    `;
  }
}

window.customElements.define('furo-link-form', FuroLinkForm);

