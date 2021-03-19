import { LitElement, html, css } from 'lit-element';
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

    /**
     * icon handling
     */
    this._FBPAddWireHook('--iconChanged', e => {
      this._FBPTriggerWire('--iconSet', e.target.value);
    });

    /**
     * placeholder handling
     */
    this._FBPAddWireHook('--placeholderChanged', e => {
      this._FBPTriggerWire('--placeholderSet', e.target.value);
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
              <ui5-togglebutton @-click="--readonlyClicked(*)">readonly</ui5-togglebutton>
              <ui5-togglebutton @-click="--disableClicked(*)">disabled</ui5-togglebutton>
              <ui5-input
                @-change="--iconChanged(*)"
                placeholder="Available icons: edit, filter, home, accept"
                value=""
              ></ui5-input>
              <ui5-input
                @-change="--placeholderChanged(*)"
                placeholder="Fill in a placeholder"
                value=""
              ></ui5-input>
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
            ƒ-set-icon="--iconSet"
            ƒ-set-placeholder="--placeholderSet"
            ><slot></slot
          ></element-attribute-setter>
        </furo-z-grid>
      </furo-split-grid>
    `;
  }
}

window.customElements.define('ui5-demo-playground', Ui5DemoPlayground);
