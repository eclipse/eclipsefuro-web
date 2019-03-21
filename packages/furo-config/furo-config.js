import {PolymerElement} from '@polymer/polymer';
import {FuroStateMixin} from "@furo/mixins/shared-state"
import * as Path from '@polymer/polymer/lib/utils/path.js';


/**
 * `furo-config`
 *
 * Stellt eine Sektion der injecteten Konfigurationen zur Verfügung
 * ```
 *   <furo-config-injector data="{menu:true,...}" section="views"></furo-config-injector>
 *
 *   <furo-config section="views" config="{{_viewConfig}}"></furo-config>
 *   <furo-config section="second.section.deep" config="{{_subSubSubConfig}}"></furo-config>
 * ```
 *
 * @customElement
 * @polymer
 * @summary shared config
 * @demo demo/furo-config_demo.html
 * @mixes FuroStateMixin
 */
class FuroConfig extends FuroStateMixin(PolymerElement) {
  constructor() {
    super('furo-shared-config');
  }

  static get properties() {
    return {
      /**
       * config
       * Die konfiguration
       */
      config: {
        type: Object,
        notify: true,
        readOnly: true
      },
      /**
       * section
       * Die Sektion der Konfiguration mit optionaler Pfadangabe
       * `views.home`
       */
      section: {
        type: String,
        observer: "_resolveSection",
      },

    };
  }

  static get observers(){
    return ['_resolveSection(section,_state.*)']

  }

  _resolveSection(section,conf) {

    if(section!==undefined && conf !== undefined){
      this._setConfig(Path.get(this._state, section));
    }
  }
}

window.customElements.define("furo-config", FuroConfig);
