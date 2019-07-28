import {PolymerElement, html} from '@polymer/polymer';
import {FuroStateMixin} from "./shared-state"
import "@polymer/iron-ajax/iron-ajax"
import {FBP} from "@furo/fbp";



/**
 * `furo-config-loader`
 *
 * ladet eine Konfiguration in eine vorgegebene Sektion. Diese lassen sich mit furo-config in jeder Komponente verwenden.
 *
 * ```
 *   <furo-config-loader src="/custom/view-config.json" section="views"></furo-config-loader>
 *
 *   <furo-config section="views" config="{{_viewConfig}}"></furo-config>
 * ```
 *
 * @summary Loads a config file
 * @customElement
 * @polymer
 * @mixes FuroStateMixin
 */
class FuroConfigLoader extends FuroStateMixin(FBP(PolymerElement)) {

  constructor() {
    super('furo-shared-config');
  }

  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: none;
        }
      </style>
      <iron-ajax ƒ-generate-request="--componentReady" url="[[src]]" handle-as="json"
                 on-iron-ajax-response="_stateAppend"></iron-ajax>
    `;
  }

  static get properties() {
    return {
      /**
       * src
       * Quelle der Konfiguration
       */
      src: {
        type: String
      },

      /**
       * section
       * Die Sektion in der die Antwort gesichert wird
       */
      section: {
        type: String,
      },
      /**
       * Antwort von iron-ajax
       */
      _axResponse: Object,
      _appendConf: {type: Object, value: {}}
    };
  }

  static get observers() {
    return [
      '__loadConfig(src,section)'
    ]
  }

  /**
   * Appends the loaded file to the state section
   * @param c
   * @private
   */
  _stateAppend(c) {
    this._setState('_state.' + this.section, c.detail.response);
    /**
     * @event config-loaded
     * Fired when config is loaded and appended
     * detail payload: config
     */
    let customEvent = new Event('config-loaded', {composed: true, bubbles: true});
    customEvent.detail = c.detail.response;
    this.dispatchEvent(customEvent)
  }

  /**
   * löst den wire --compnentReady aus
   */
  __loadConfig(src, section) {
    if (src !== undefined && section !== undefined) {
      this._FBPTriggerWire('--componentReady');
    }

  }


}

window.customElements.define("furo-config-loader", FuroConfigLoader);
