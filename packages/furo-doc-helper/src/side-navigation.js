import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import { Theme } from '@furo/framework/src/theme';
import '@furo/layout';
import '@furo/fbp/src/flow-repeat';
import './side-navigation/side-navigation-group.js';
/**
 * `api-navigation`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class SideNavigation extends FBP(LitElement) {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.basePath = this.getAttribute('base-path');
  }

  injectNavConfig(items) {
    this._FBPTriggerWire('--groups', items);
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('SideNavigation') ||
      css`
        :host {
          display: block;
          background-color: var(--surface, white);
          padding: var(--spacing);
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
      <template is="flow-repeat" ƒ-inject-items="--groups">
        <side-navigation-group
          base-path="${this.basePath}"
          ƒ-inject-item="--item"
        ></side-navigation-group>
      </template>
    `;
  }
}

window.customElements.define('side-navigation', SideNavigation);
