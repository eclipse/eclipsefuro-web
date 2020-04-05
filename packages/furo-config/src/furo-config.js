import {LitElement, html, css} from 'lit-element';
import {Config} from "./lib/Config";


/**
 * `furo-config`
 *
 *  Access config data
 *
 *
 * ```
 *
 *   <furo-config-loader section="views" src="/viewconfig.json"></furo-config>
 *   <furo-config-loader section="second" src="/second.json"></furo-config>
 *   <furo-config section="views" @-config-updated="--conf"></furo-config>
 *   <furo-config section="second.section.deep" @-config-updated="--deepconf"></furo-config>
 * ```
 *
 * @summary config access
 * @customElement
 */
class FuroConfig extends (LitElement) {

  constructor() {
    super();
    this.config = Config;
  }


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * section of the config object that you are interested in
       *
       * access deep object with dots like `main.sub.sub`
       */
      section: {type: String}
    };
  }

  set section(val) {

    Config.watch(val, (section) => {

      /**
       * @event config-updated
       * Fired when section changed
       * detail payload: section config
       */
      let customEvent = new Event('config-updated', {composed: true, bubbles: true});
      customEvent.detail = section.detail._value;
      this.dispatchEvent(customEvent);
    })
  }

}

window.customElements.define('furo-config', FuroConfig);
