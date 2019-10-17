import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";
/**
 * `demo-furo-data-collection-dropdown`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCollectionDropdown extends FBP(LitElement) {

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
            <div><h2>Demo furo-data-collection-dropdown</h2>
            </div>
            <furo-demo-snippet flex>
                <template>

                    <furo-horizontal-flex>

                        <furo-data-collection-dropdown hint="hint override" leading-icon="mail" trailing-icon="fingerprint"
                                                       label="Use phone as display"
                                                       subfield="id"
                                                       subfield-display="description"
                                                       ƒ-inject-entities="--response(*.entities)"
                                                       ƒ-bind-data="--entity"></furo-data-collection-dropdown>

                        <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"
                                                       display-field="description"
                                                       ƒ-inject-entities="--response(*.entities)"
                                                       ƒ-bind-data="--entity"></furo-data-collection-dropdown>

                    </furo-horizontal-flex>

                    <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>

                    <furo-collection-agent service="TaskService"
                                           ƒ-hts-in="--hts"
                                           ƒ-list="--load"
                                           @-response="--response">
                    </furo-collection-agent>


                    <furo-location @-location-changed="--locationChanged"></furo-location>

                    <furo-deep-link service="TaskService" @-hts-out="--hts" ƒ-qp-in="--locationChanged(*.query)"></furo-deep-link>

                    <furo-button raised label="load" @-click="--load"></furo-button>

                </template>
            </furo-demo-snippet>
        </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-collection-dropdown', DemoFuroDataCollectionDropdown);
