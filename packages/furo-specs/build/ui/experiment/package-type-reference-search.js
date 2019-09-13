import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/data"
import "@furo/data-input"

/**
 * `package-type-reference-search`
 *  Complete reference searcher for {{.type}}
 *
 * @summary search {{.type}}
 * @customElement
 * @appliesMixin FBP
 */
class PackageTypeReferenceSearch extends FBP(LitElement) {

  bindData(field){
    this._FBPTriggerWire("--field-injected", field);
  }
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
      <furo-data-reference-search style="position:absolute"
                                  ƒ-bind-data="--field-injected"
                                  @-search="--term"
                                  ƒ-collection-in="--collection">
      </furo-data-reference-search>
      <furo-collection-agent
              service="PersonService"
              ƒ-hts-in="--field-injected(*.link.value)"
              ƒ-search="--term"
              @-response="--collection">
      </furo-collection-agent>
    `;
  }
}

window.customElements.define('package-type-reference-search', PackageTypeReferenceSearch);
