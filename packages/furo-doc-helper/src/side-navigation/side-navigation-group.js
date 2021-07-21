import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import './side-navigation-item.js';
/**
 * `side-navigation-group`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class SideNavigationGroup extends FBP(LitElement) {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.basePath = this.getAttribute('base-path');
  }

  injectItem(group) {
    this.item = group;
    this._FBPTriggerWire('--items', group.items);
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('SideNavigationGroup') ||
      css`
        :host {
          display: block;
          padding-bottom: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }

        div.label {
          background-color: var(--surface, white);
          z-index: 1;
          color: var(--on-surface, black);
          letter-spacing: 0.07272727em;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: var(--spacing-s) 0;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: rgba(0, 0, 0, 0.12);
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
      <div class="label">${this.item.group}</div>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--items">
          <side-navigation-item
            base-path="${this.basePath}"
            ƒ-inject-item="--item"
          ></side-navigation-item>
        </template>
      </ul>
    `;
  }
}

window.customElements.define('side-navigation-group', SideNavigationGroup);
