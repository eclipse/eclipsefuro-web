// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import {  FBP  } from '@furo/fbp';
import {  Theme  } from '@furo/framework/src/theme.js';

// eslint-disable-next-line no-unused-vars
import {  i18n  } from '@furo/framework/src/i18n.js';

import "@furo/form/furo-button-bar.js";
import "@furo/input/src/furo-button.js";

/**
 * service specs for the tree api
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class TreeTreeUpdateAction extends FBP(LitElement) {



  // Bind an entity data object. This will be forwarded to the furo-button-bar element inside this element.
  bindEntity(d) {
    this._FBPTriggerWire('--entityObjectInjected', d)
  }


  // Disables all elements inside furo-button-bar
  disableAll(d) {
    this._FBPTriggerWire('--disableAllReq', d)
  }


  // Enables all elements inside furo-button-bar
  enableAll(d) {
    this._FBPTriggerWire('--enableAllReq', d)
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
    return Theme.getThemeForComponent("TreeTreeUpdateAction") || css`
      
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
      <furo-button-bar ƒ-bind-entity="--entityObjectInjected" ƒ-disable-all="--disableAllReq" ƒ-enable-all="--enableAllReq">

        <!-- It is a good practice to set a description -->
        <furo-button primary unelevated hide-no-rel disable-not-valid disable-pristine label="${i18n.t('action.update')}" rel="update" @-click="-^update-req"></furo-button> 

        <!-- It is a good practice to set a description -->
        <furo-button danger unelevated hide-no-rel label="${i18n.t('action.delete')}" rel="delete" @-click="-^delete-req"></furo-button> 
      </furo-button-bar> 
    `;
  }
}

window.customElements.define('tree-tree-update-action', TreeTreeUpdateAction);

