import {PolymerElement, html} from '@polymer/polymer';
import {FuroStateMixin} from "@furo/mixins/shared-state";

/**
 * `api-environment`
 *
 *
 * @summary
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroStateMixin
 */
class ApiEnvironment extends FuroStateMixin(PolymerElement) {
  constructor() {
    super('api-environment');
  }

  static get properties() {
    return {
      /**
       * config
       * Die konfiguration
       */
      config: {
        type: Object,
        observer: "_setEnv"
      }
    };
  }

  // set config in _state to share it with the consumers
  _setEnv(conf) {
    this._setState('_state.env', conf);
  }

}

window.customElements.define('api-environment', ApiEnvironment);
