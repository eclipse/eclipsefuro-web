import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `demo-extended-searcher`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-demo-extended-searcher
 * @appliesMixin FBP
 */
class DemoExtendedSearcher extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * htsIn inject the hts
   * @public
   * @param hts
   */
  // eslint-disable-next-line class-methods-use-this
  htsIn(hts) {
    // eslint-disable-next-line no-console
    console.log(hts);
  }

  /**
* focus focuses the first element
* @public

*/
  focus() {
    this._FBPTriggerWire('|--focus', null);
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
      <p>Hej, welcome</p>
      <furo-ui5-data-text-input ƒ-focus="|--focus"></furo-ui5-data-text-input>
    `;
  }
}

window.customElements.define('demo-extended-searcher', DemoExtendedSearcher);
