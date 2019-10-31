// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: person.person.referencesearch.spec
import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/data"
import "@furo/data-input"



/**
 * `person-person-reference-search`
 *  Complete reference searcher for person.Person
 *
 *  
 *
 * @summary search person.Person
 * @customElement
 * @appliesMixin FBP
 */
class PersonPersonReferenceSearch extends FBP(LitElement) {

  bindData(field){
    this.field = field;
    this._FBPTriggerWire("--field-injected", field);

    this.field.addEventListener("field-value-changed", (e)=>{

      if(e.detail._name == "type") {
        this._FBPTriggerWire("--htsUpdated", this.field.link._value);
      }
    });
  }
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('ReferenceBaseTheme') || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-data-reference-search{
            width:100%;
        }
    `
  }

  static get properties() {
    return {
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean
      }
    };
  }
  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-data-reference-search ƒ-bind-data="--field-injected"
                                  @-search="--term"
                                  value-field="id"
                                  display-field="display_name"
                                  ?condensed="${this.condensed}" 
                                  min-term-length= "1"
                                  ƒ-collection-in="--collection">
      </furo-data-reference-search>
      <furo-collection-agent
              service="ProjectMembersService"
              ƒ-hts-in="--field-injected(*.link._value), --htsUpdated"
              ƒ-search="--term"
              @-response="--collection">
      </furo-collection-agent>
    `;
  }
}

window.customElements.define('person-person-reference-search', PersonPersonReferenceSearch);
