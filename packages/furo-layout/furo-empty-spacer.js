import {LitElement, html} from 'lit-element';

/**
 * `furo-empty-spacer`
 *
 * @customElement
 * @demo demo/furo-vertical-flex.html
 * @demo demo/furo-horizontal-flex.html
 * @appliesMixin FBP
 */
class FuroEmptySpacer extends LitElement {

  constructor() {
    super();
    this.flex = true;
    this.hidden = false;
  }

  static get properties() {
    return {
      /**
       * Attribute flex for furo-horizontal-flex and furo-vertical-flex
       */
      flex: {
        type: Boolean,
        reflect: true
      },
      /**
       * Set to true to hide the spacer
       */
      hidden: {
        type: Boolean,
        reflect: true
      }
    };
  }

  /**
   * @private
   * @returns {*}
   */
  render() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
    `;
  }

}

window.customElements.define('furo-empty-spacer', FuroEmptySpacer);
