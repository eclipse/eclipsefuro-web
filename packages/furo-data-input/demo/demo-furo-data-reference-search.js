import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data/furo-data-object";
import "../furo-catalog";
import "@furo/data/furo-deep-link";
import "./produce-qp-data";
import "@furo/data/furo-entity-agent";
import "@furo/data/furo-collection-agent";
import "./helper/simulate-error"

/**
 * `demo-furo-data-reference-search`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataReferenceSearch extends FBP(LitElement) {

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
        <h2>Demo furo-data-reference-search</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <div flex>
          
             <furo-data-reference-search  flex ƒ-bind-data="--entity(*.owner)" min-term-length="2" @-search="--term" ƒ-collection-in="--refCol"></furo-data-reference-search>
              
            <produce-qp-data @-data="--qp" qp={"tsk":1}></produce-qp-data>

            <furo-data-object type="task.Task" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="TaskService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-deep-link service="PersonService" @-hts-out="--Phts" ƒ-qp-in="--qp"></furo-deep-link>
           
            <furo-entity-agent service="TaskService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
              
            <furo-collection-agent service="PersonService" ƒ-search="--term" ƒ-hts-in="--entity(*.owner.link.value)" @-response="--refCol"></furo-collection-agent>
              
        

        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-reference-search', DemoFuroDataReferenceSearch);
