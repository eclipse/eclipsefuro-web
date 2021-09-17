import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/developer-settings.js';

import './element-attribute-setter.js';

/**
 * `ui5-demo-playground`
 * Desc
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class Ui5DemoPlayground extends FBP(LitElement) {
  constructor() {
    super();
    this.heading = 'Element Playground';
    this.subheading = '';
    this.icon = 'developer-settings';
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    /**
     * Readonly attribute
     */
    this._FBPAddWireHook('--readonlyClicked', e => {
      if (e.target.pressed) {
        this._FBPTriggerWire('--flagSet', 'readonly');
      } else {
        this._FBPTriggerWire('--flagRemoved', 'readonly');
      }
    });

    /**
     * Disable attribute
     */
    this._FBPAddWireHook('--disableClicked', e => {
      if (e.target.pressed) {
        this._FBPTriggerWire('--flagSet', 'disabled');
      } else {
        this._FBPTriggerWire('--flagRemoved', 'disabled');
      }
    });
  }

  static get properties() {
    return {
      heading: { type: String, attribute: 'heading' },
      subheading: { type: String, attribute: 'subheading' },
      icon: { type: String, attribute: 'icon' },
    };
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          --furo-form-layouter-row-gap: var(--spacing-xs);
        }
        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-split-grid padding>
        <div hspan="4" full-on-size-medium full-on-size-small>
          <furo-ui5-card
            slot="left"
            hspan="full"
            heading="${this.heading}"
            subheading="${this.subheading}"
            icon="${this.icon}"
          >
            <furo-form-layouter one slot="content">
              <ui5-toggle-button @-click="--readonlyClicked(*)">readonly</ui5-toggle-button>
              <ui5-toggle-button @-click="--disableClicked(*)">disabled</ui5-toggle-button>
            </furo-form-layouter>

            <furo-button-bar slot="action">
              <furo-ui5-button @-click="^^test-data-requested">load</furo-ui5-button>
            </furo-button-bar>
          </furo-ui5-card>
        </div>
        <furo-z-grid hstart="5" fill>
          <element-attribute-setter
            hspan="full"
            ƒ-set-flag="--flagSet"
            ƒ-remove-flag="--flagRemoved"
            ><slot></slot
          ></element-attribute-setter>
        </furo-z-grid>
      </furo-split-grid>
    `;
  }
}

window.customElements.define('ui5-demo-playground', Ui5DemoPlayground);
