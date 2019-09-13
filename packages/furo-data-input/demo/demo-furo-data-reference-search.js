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
            <p>Bind the reference field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.refFieldName)"</strong>.
                The labels, hints, defaults are comming from the furo-data-object specs.</p>
            <furo-demo-snippet flex>
                <template>
                    <furo-data-reference-search style="position:absolute"
                            ƒ-bind-data="--entityReady(*.owner)"  
                            @-search="--term"
                            ƒ-collection-in="--refCol">
                    </furo-data-reference-search>
                    <furo-data-object 
                            type="task.Task" 
                            @-object-ready="--entityReady">
                    </furo-data-object>
                    <furo-collection-agent 
                            service="PersonService" 
                            ƒ-hts-in="--entityReady(*.owner.link.value)"
                            ƒ-search="--term"
                            @-response="--refCol">
                    </furo-collection-agent>
                </template>
            </furo-demo-snippet>
        </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-reference-search', DemoFuroDataReferenceSearch);
