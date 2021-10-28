import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-ui/src/furo-data-context-menu.js';

/**
 * `demo-furo-data-context-menu`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataContextMenu extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        height: 100%;
        padding-right: var(--spacing);
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <div>
        <h2>Context menu demo</h2>
        <p>Click on the icon to open the menu</p>
        <p>The demo does not work on fullscreen.</p>
      </div>
      <furo-demo-snippet flex>
        <template>
          <furo-data-context-menu
            condensed
            position="below"
            ƒ-trigger="--menuClkd"
            ƒ-bind-data="--menuDO"
            @-menu-item-selected="--menuItem"
          >
            <furo-icon-button icon="menu" @-click="--menuClkd"></furo-icon-button>
          </furo-data-context-menu>

          <!-- data for the menu -->
          <furo-data-object
            type="menu.Menuitem"
            ƒ-inject-raw="--data"
            @-object-ready="--menuDO"
          ></furo-data-object>
          <furo-fetch-json
            ƒ-fetch="--menuClkd"
            src="/mockdata/menu/samplectxmenu.json"
            @-data="--data"
          ></furo-fetch-json>
          <!-- show the selected item -->
          <furo-pretty-json ƒ-inject-data="--menuItem(*.menuitem._value)"></furo-pretty-json>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-data-context-menu', DemoFuroDataContextMenu);
