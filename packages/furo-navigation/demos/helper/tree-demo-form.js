import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `tree-demo-form`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/tree-demo-form.html
 * @appliesMixin FBP
 */
class TreeDemoForm extends FBP(LitElement) {
  constructor() {
    super();
    this.newnode = { id: Date.now(), display_name: 'Generated', secondary_text: 'secondary' };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  bindData(Entity) {
    this._FBPTriggerWire('--data', Entity);
    /**
     * Register hook on wire --added to
     *
     */
    this._FBPAddWireHook('--added', () => {
      this.newnode.id = Date.now();
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
        furo-data-text-input,
        furo-data-textarea-input {
          width: 100%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-card style="width: 400px">
        <h4>Selected tree node</h4>

        <furo-data-text-input
          label="title"
          hint="The title is the first part in the tree"
          ƒ-bind-data="--data(*.display_name)"
        ></furo-data-text-input>
        <furo-data-collection-dropdown
          leading-icon="apps"
          ƒ-bind-data="--data(*.icon)"
          label="Select icon"
          list="apps, fingerprint, mail, send, filter-list, alarm-on, alarm-on, undefied-icon, android, account-balance, apps, check-box-outline-blank, aspect-ratio, change-history"
          @-value-changed="--icon"
        ></furo-data-collection-dropdown>
        <furo-data-textarea-input
          label="Text"
          ƒ-bind-data="--data(*.description)"
        ></furo-data-textarea-input>
        <furo-button-bar>
          <furo-button outline @-click="^^nav-prev-clicked" label="prev"></furo-button>
          <furo-button outline @-click="^^nav-next-clicked" label="next"></furo-button>
          <furo-button outline @-click="^^nav-expand-clicked" label="expand"></furo-button>
        </furo-button-bar>
        <furo-button-bar>
          <furo-button
            outline
            @-click="^^nav-add-clicked(newnode),--added"
            icon="add"
            label="add sub"
          ></furo-button>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-button
            danger
            outline
            @-click="^^nav-delete-clicked"
            label="delete Node"
          ></furo-button>
        </furo-button-bar>
      </furo-card>
    `;
  }
}

window.customElements.define('tree-demo-form', TreeDemoForm);
