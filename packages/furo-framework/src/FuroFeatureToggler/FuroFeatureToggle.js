import { KeyState } from './KeyState.js';
/**
 *
 * @private
 */
const keystore = {};


/**
 * Use the FuroFeatureToggle to control features from a central registry.
 * FuroFeatureToggle only needs a key and a boolean value.
 * These key can be set at any time.
 * A requested key which was not set, is interpreted as false.
 *
 * ## Available toggles
 * Following toggles are given, use the one which is appropriate to your problem.
 * Sometimes you want to hide some parts if a key is true and sometimes you have to do the opposite.
 *
 * - `data-furo-toggle-append` Appends the element on true state of the key, removes the element on false state
 * - `data-furo-toggle-remove` Removes the element on true state of the key, appends the element on false state
 *
 * - `data-furo-toggle-hide` Adds a hidden attribute to the element on true state of the key, removes the attribute on false state
 * - `data-furo-toggle-show` Removes a hidden attribute from the element on true state of the key, adds the attribute on false state
 *
 * - `data-furo-toggle-disable` Adds a disabled attribute to the element on true state of the key, removes the attribute on false state
 * - `data-furo-toggle-enable` Removes a disabled attribute from the element on true state of the key, adds the attribute on false state
 *
 *
 * ## Example usage:
 * ### js
 * ```js
 * // import FuroFeatureToggle
 * import { FuroFeatureToggle } from '@furo/framework/src/FuroFeatureToggler/FuroFeatureToggle.js';
 *
 * // enabling for a part of your component
 * FuroFeatureToggle.parseDom(this.shadowRoot)
 *
 * // enabling for a part of your component
 *  FuroFeatureToggle.parseDom(this.shadowRoot.querySelector('#partial'))
 *
 *
 * // setting a key
 *  FuroFeatureToggle.setKeyState('feature.key', true);
 *
 * ```
 * ### html
 *
 * ```html
 *  remove:
 *  <span data-furo-toggle-remove='feature.key'>
 *    span is removed if key state is true, otherwise appended</span>
 *
 *  append:
 *  <span data-furo-toggle-append='feature.key'>
 *    span is appended when key state true, otherwise removed</span>
 *
 *  enable:
 *  <button data-furo-toggle-disable='feature.key'>
 *    button is enabled when state is true, otherwise disabled</button>
 *
 *  disable:
 *  <button data-furo-toggle-enable='feature.key'>
 *    button is disabled when state is true, otherwise enabled</button>
 *
 *  hide:
 *  <div data-furo-toggle-hide='feature.key'>
 *    Div will get a hidden attribute when the key state is true, otherwise hidden
 *  </div>
 *
 *  show:
 *  <div data-furo-toggle-show='feature.key'>
 *   The hidden attribute will be removed when the key state is true, otherwise the hidden attribute will be set.
 *  </div>
 *
 * ```
 *
 */
export class FuroFeatureToggle {
  /**
   * Parses the DOM for feature toggles and applies them.
   * @param root {DOM} The dom root you want to be managed.
   */
  static parseDom(root) {
    // register all appenders
    Array.from(root.querySelectorAll('*[data-furo-toggle-append]')).forEach(
      e => {
        const key = e.dataset.furoToggleAppend;
        FuroFeatureToggle._mustKey(key);
        keystore[key].registerAppender(e);
      }
    );
    // register all appenders
    Array.from(root.querySelectorAll('*[data-furo-toggle-remove]')).forEach(
      e => {
        const key = e.dataset.furoToggleRemove;
        FuroFeatureToggle._mustKey(key);
        keystore[key].registerRemover(e);
      }
    );

    // register all show
    Array.from(root.querySelectorAll('*[data-furo-toggle-show]')).forEach(
      e => {
        const key = e.dataset.furoToggleShow;
        FuroFeatureToggle._mustKey(key);
        keystore[key].registerShower(e);
      }
    );

    // register all hide
    Array.from(root.querySelectorAll('*[data-furo-toggle-hide]')).forEach(
      e => {
        const key = e.dataset.furoToggleHide;
        FuroFeatureToggle._mustKey(key);
        keystore[key].registerHider(e);
      }
    );

    // register all disable
    Array.from(root.querySelectorAll('*[data-furo-toggle-disable]')).forEach(
      e => {
        const key = e.dataset.furoToggleDisable;
        FuroFeatureToggle._mustKey(key);
        keystore[key].registerDisabler(e);
      }
    );

    // register all enable
    Array.from(root.querySelectorAll('*[data-furo-toggle-enable]')).forEach(
      e => {
        const key = e.dataset.furoToggleEnable;
        FuroFeatureToggle._mustKey(key);
        keystore[key].registerEnabler(e);
      }
    );
  }

  /**
   * Use this method to register a key with an initial state or to update a state.
   * @param key {String} The key of a feature.
   * @param state {Boolean} The state to set.
   */
  static setKeyState(key, state) {
    FuroFeatureToggle._mustKey(key);
    keystore[key].state = state;
  }

  /**
   * Use this method to bulk register feature toggles.
   *
   * @param keymap {map String,Boolean} Object with keys and their initial state
   */
  static registerKeyMap(keymap){
    Object.keys(keymap).forEach((key)=>{
      FuroFeatureToggle.setKeyState(key,keymap[key]);
    })
  }

  /**
   * Reads the current state of a key
   * @param key {String} The key of a feature.
   * @return {Boolean} The current state.
   */
  static getKeyState(key) {
    FuroFeatureToggle._mustKey(key);
    return keystore[key].state;
  }

  /**
   * Register a custom callback on a key.
   *
   * The callback will be immediately executed when you register it and every time the key state changes.
   *
   * @param key {String} The key of a feature.
   * @param cb {function(Boolean, KeyState)} The callback method signature is a boolean for the current state and the KeyState object.
   */
  static registerCallback(key, cb) {
    FuroFeatureToggle._mustKey(key);
    keystore[key].registerCallback(cb);
  }

  /**
   * Ensure that a key is created
   * @param key {String} The key of a feature.
   * @private
   */
  static _mustKey(key) {
    if (keystore[key] === undefined) {
      // create with a falsy initial state
      keystore[key] = new KeyState(false);
    }
  }
}
