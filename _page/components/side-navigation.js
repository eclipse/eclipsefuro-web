import {LitElement, html, css} from 'lit-element';
import {FBP} from '@furo/fbp';
import '@furo/layout';
import "@furo/fbp/flow-repeat"
import "./side-navigation/side-navigation-group"

/**
 * `api-navigation`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/api-navigation.html
 * @appliesMixin FBP
 */
class SideNavigation extends FBP(LitElement) {

  constructor() {
    super();

  }

  injectNavConfig(items) {
    this._FBPTriggerWire("--groups", items);
  }


  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return [
      css`
          :host {
              display: block;
              background-color: var(--background);
          }

      `
    ];
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <template is="flow-repeat" ƒ-inject-items="--groups">
        <side-navigation-group ƒ-inject-item="--item"></side-navigation-group>
      </template>
    `;
  }

}

window.customElements.define('side-navigation', SideNavigation);
