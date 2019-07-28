import {PolymerElement} from '@polymer/polymer';
import {FuroStateMixin} from "./shared-state"

/**
 * `furo-config-injector`
 *
 * ladet eine Konfiguration in eine vorgegebene Sektion. Diese lassen sich mit furo-config in jeder Komponente verwenden.
 *
 * ```
 *   <furo-config-injector data="{menu:true,...}" section="views"></furo-config-injector>
 *
 *   <furo-config section="views" config="{{_viewConfig}}"></furo-config>
 * ```
 *
 *
 * @customElement
 * @polymer
 * @mixes FuroStateMixin
 */
class FuroConfigInjector extends FuroStateMixin(PolymerElement){

  constructor() {
    super('furo-shared-config');
  }

  static get properties() {
    return {
      /**
       * data
       * Die Konfigurationsdateien
       */
      data: {
        type: Object
      },

      /**
       * section
       * Die Sektion in der die Antwort gesichert wird
       */
      section: {
        type: String,
      },

    };
  }

  static get observers() {
    return [
      '_injectConfig(data,section)'
    ]
  }

  /**
   * Appends the loaded file to the state section
   * @param {Object} data
   * @param {String} section
   * @private
   */
  _injectConfig(data,section) {
    if(data !== undefined && section !== undefined){
      this._setState('_state.' + this.section , data);
      /**
       * @event config-loaded
       * Fired when config is loaded and appended
       * detail payload: config
       */
      let customEvent = new Event('config-loaded', {composed:true, bubbles: true});
      customEvent.detail = {section:section,data:data};
      this.dispatchEvent(customEvent)
    }
  }




}

window.customElements.define("furo-config-injector", FuroConfigInjector);
