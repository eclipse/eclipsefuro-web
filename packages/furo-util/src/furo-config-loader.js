import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import './furo-fetch-json.js';
import { Config } from './lib/Config.js';

/**
 * `furo-config-loader` loads a configuration json in to the defined section.
 *
 * To access the config values, use `furo-config`.
 *
 * ```html
 * <furo-config-loader
 *     src="/custom/view-config.json"
 *     section="views"
 *     ></furo-config-loader>
 * ```
 *
 * @fires {Object} config-loaded - Fired when the config is loaded with the loaded config as detail.
 *
 * @summary load config files
 * @customElement
 * @appliesMixin FBP
 */
export class FuroConfigLoader extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * File source
       * @type String
       */
      src: {
        type: String,
      },

      /**
       * Targeted section to load the config in.
       * @type String
       */
      section: {
        type: String,
      },
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    // eslint-disable-next-line wc/guard-super-call
    super.attributeChangedCallback(name, oldval, newval);

    if (this.section && this.src) {
      this._FBPTriggerWire('--load', this.src);
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --response to
     * parse the response
     */
    this._FBPAddWireHook('--response', e => {
      const c = Config.append(this.section, e);
      const customEvent = new Event('config-loaded', { composed: true, bubbles: true });
      customEvent.detail = c._value;
      this.dispatchEvent(customEvent);
    });
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }

  /**
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-fetch-json fn-fetch-src="--load" at-data="--response"></furo-fetch-json>
    `;
  }
}

window.customElements.define('furo-config-loader', FuroConfigLoader);
