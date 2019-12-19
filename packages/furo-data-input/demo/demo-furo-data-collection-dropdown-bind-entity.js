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
 * `demo-furo-data-collection-dropdown-bind-entity`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCollectionDropdownBindEntity extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataCollectionDropdownBindEntity') || css`
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
            <div><h2>Demo furo-data-collection-dropdown-bind-entity</h2>
                <p>this demo show you how to bind a entity to collection dropdown without inject</p>
            </div>
            <furo-demo-snippet flex>
                <template>

                    <furo-horizontal-flex>

                        <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"
                                                       ƒ-bind-data="--entity(*.data.description)"></furo-data-collection-dropdown>

                    </furo-horizontal-flex>


                    <produce-qp-data @-data="--qp" qp={"prj":1}></produce-qp-data>

                    <furo-data-object type="project.ProjectEntity" @-object-ready="--entity"
                                      ƒ-inject-raw="--response"></furo-data-object>
                    
                    <furo-deep-link service="ProjectService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                    <furo-entity-agent service="ProjectService"
                                       ƒ-hts-in="--hts"
                                       ƒ-load="--hts"
                                       ƒ-bind-request-data="--entity"
                                       @-response="--response">
                    </furo-entity-agent>

                </template>
            </furo-demo-snippet>
        </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-collection-dropdown-bind-entity', DemoFuroDataCollectionDropdownBindEntity);
