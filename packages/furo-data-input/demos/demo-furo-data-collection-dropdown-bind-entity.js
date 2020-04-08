import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';

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
    return (
      Theme.getThemeForComponent('DemoFuroDataCollectionDropdownBindEntity') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-data-collection-dropdown-bind-entity</h2>
          <p>this demo show you how to bind a entity to collection dropdown without inject</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-horizontal-flex>
              <furo-data-collection-dropdown
                flex
                leading-icon="mail"
                trailing-icon="fingerprint"
                ƒ-bind-data="--entity(*.data.description)"
              ></furo-data-collection-dropdown>
            </furo-horizontal-flex>

            <produce-qp-data @-data="--qp" qpescaped="%7B%22prj%22%3A1%7D"></produce-qp-data>

            <furo-data-object
              type="project.ProjectEntity"
              @-object-ready="--entity"
              ƒ-inject-raw="--response"
            ></furo-data-object>

            <furo-deep-link
              service="ProjectService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>
            <furo-entity-agent
              service="ProjectService"
              ƒ-hts-in="--hts"
              ƒ-load="--hts"
              ƒ-bind-request-data="--entity"
              @-response="--response"
            >
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define(
  'demo-furo-data-collection-dropdown-bind-entity',
  DemoFuroDataCollectionDropdownBindEntity,
);
