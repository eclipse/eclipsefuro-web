import { KeyState } from './KeyState.js';
/**
 *
 * @private
 */
const keystore = {};


/**
 * - `data-furo-toggle-append` Appends the element on true state of the key, removes the element on false state
 * - data-furo-toggle-remove Removes the element on true state of the key, appends the element on false state
 *
 * - data-furo-toggle-hide Adds a hidden attribute to the element on true state of the key, removes the attribute on false state
 * - data-furo-toggle-show Removes a hidden attribute from the element on true state of the key, adds the attribute on false state
 *
 * - data-furo-toggle-disable Adds a disabled attribute to the element on true state of the key, removes the attribute on false state
 * - data-furo-toggle-enable Removes a disabled attribute from the element on true state of the key, adds the attribute on false state
 *
 */
export class FuroFeatureToggle {
  /**
   * Parses the DOM for feature toggles and applies them.
   * @param root {DOM}
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
   * @param key
   * @param state
   */
  static setKeyState(key, state) {
    FuroFeatureToggle._mustKey(key);
    keystore[key].state = state;
  }

  /**
   * Reads the current state of a key
   * @param key
   * @return {*}
   */
  static getKeyState(key) {
    FuroFeatureToggle._mustKey(key);
    return keystore[key].state;
  }

  /**
   * Register a callback on a key.
   *
   * The callback will be immediately executed.
   *
   * @param key
   * @param cb {function(boolean)}
   */
  static registerCallback(key, cb) {
    FuroFeatureToggle._mustKey(key);
    keystore[key].registerCallback(cb);
  }

  /**
   * Ensure that a key is created
   * @param key
   * @private
   */
  static _mustKey(key) {
    if (keystore[key] === undefined) {
      // create with a falsy initial state
      keystore[key] = new KeyState(false);
    }
  }
}
