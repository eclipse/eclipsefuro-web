import {dedupingMixin} from "@polymer/polymer/lib/utils/mixin";
import * as Path from '@polymer/polymer/lib/utils/path.js';

let FuroStateImpl;

(FuroStateImpl = () => {

  let stateStore = {};

  /**
   * Mixin for a shared State accross n components
   *
   * ## usage
   *
   * Apply the mixin to your components and give a unique name for your state.
   * The state is available in the ._state property.
   *
   * ```
   *
   *   class FuroStateConsumer extends FuroStateMixin(Polymer.Element) {
   *
   *     constructor() {
   *       super('shared-config');
   *     }
   *
   *     // _state.config.foo is shared accros every plugin with
   *     // FuroStateMixin which registers to shared-config
   *     someMethod(bar){
   *       this.set('_state.config.foo',bar);
   *     }
   *
   *
   * ```
   *
   * @polymerMixin FuroStateMixin
   */
  FuroStateImpl = (superClass) => {
    /**
     * @polymerMixinClass
     */
    return class extends superClass {
      // First consumer becomes master
      constructor(stateName) {
        super();
        this._stateName = stateName;
        if (!stateStore[stateName]) {
          stateStore[stateName] = this;
        }
      }

      static get properties() {
        return {
          /**
           * The list of the consumers who will get notified.
           * If master disconnects, the next consumer becomes master
           */
          _subscribers: {
            type: Array,
            value: () => []
          },
          /**
           * The shared state
           */
          _state: {
            type: Object,
            value: () => {
              return {}
            }
          }
        }
      }


      /**
       * Set the _state.
       * All subscribes will be notified.
       *
       * @param path {String} the path (begins with _state)
       * @param value {*} the value to set
       */
      _setState(path, value) {
        if (path.startsWith('_state') && stateStore[this._stateName] !== null) {
          let parts = path.split('.');
          if (parts.length > 1) {
            this.__appendPart(stateStore[this._stateName], parts)
          }
          Path.set(stateStore[this._stateName], path, value);
          for (let i = 0; i < stateStore[this._stateName]._subscribers.length; i++) {
            stateStore[this._stateName]._subscribers[i].notifyPath(path, value);
          }
        }
      }

      /**
       * Create deep Objects for non existing path in object.
       */
      __appendPart(target, parts) {
        let part = parts.shift();
        // create segment if it does not exist
        if (target[part] === undefined) {
          target[part] = {};
        }
        // append the tail
        if (parts.length > 1) {
          this.__appendPart(target[part], parts)
        }
      }

      // registrierung der Empfänger
      _register(subscriber) {
        subscriber._stateIndex = stateStore[this._stateName]._subscribers.push(subscriber) - 1;
        subscriber._state = this._state;
      }

      _unregister(subscriber) {
        stateStore[this._stateName]._subscribers.splice(stateStore[this._stateName]._subscribers.indexOf(subscriber), 1);
        //delete when no subscribers are left
        if (stateStore[this._stateName]._subscribers.length === 0) {
          stateStore[this._stateName] = null;
        }
      }

      /**
       * registration
       */
      connectedCallback() {
        super.connectedCallback();
        stateStore[this._stateName]._register(this);
      }

      /**
       * deregistration
       */
      disconnectedCallback() {
        super.disconnectedCallback();
        stateStore[this._stateName]._unregister(this);

      }
    }
  }

})();

/**
 *
 * @polymerMixin FuroStateMixin
 */
export const FuroStateMixin = dedupingMixin(FuroStateImpl);

