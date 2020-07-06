import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `fetch-universal-json`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-fetch-universal-json
 * @appliesMixin FBP
 */
class FetchUniversalJson extends FBP(LitElement) {


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()


    fetch('/mockdata/tests/universalfieldnodebinder/fat-universal.json')
      .then(res => res.json())
      .then(response => {
        /**
        * @event data-loaded
        * Fired when universal.json is loaded
        * detail payload:
        */
        const customEvent = new Event('data-loaded', {composed:true, bubbles: true});
        customEvent.detail = response.data;
        this.dispatchEvent(customEvent)
      });

  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FetchUniversalJson') || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `;
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
    `;
  }
}

window.customElements.define('fetch-universal-json', FetchUniversalJson);
