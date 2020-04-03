import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';

/**
 * `furo-empty-spacer` Takes the place in furo-horizontal-flex or a furo-vertical-flex.
 *
 *<furo-demo-snippet source>
 * <template>
 *  <furo-horizontal-flex>
 *   <div>small</div>
 *   <!-- A furo-empty-spacer will fill the available space. -->
 *   <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
 *   <div>small</div>
 *  </furo-horizontal-flex>
 * </template>
 *</furo-demo-snippet>
 *
 * @summary fill the space in a furo-xxxx-flex
 * @customElement
 * @demo demo-furo-vertical-flex With vertical flex
 * @demo demo-furo-horizontal-flex With horizontal flex
 * @appliesMixin FBP
 */
class FuroEmptySpacer extends LitElement {
  constructor() {
    super();
    this.flex = true;
    // eslint-disable-next-line wc/no-constructor-attributes
    this.hidden = false;
  }

  static get properties() {
    return {
      /**
       * Attribute flex for furo-horizontal-flex and furo-vertical-flex
       */
      flex: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Set to true to hide the spacer
       */
      hidden: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroEmptySpacer') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * @private
   * @returns {*}
   */
  render() {
    // language=HTML
    return html``;
  }
}

window.customElements.define('furo-empty-spacer', FuroEmptySpacer);
