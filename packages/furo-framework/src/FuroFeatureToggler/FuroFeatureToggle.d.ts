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
 * - `data-furo-toggle-custom-add` Adds the custom attribute to the element on true state of the key, removes the attribute on false state
 * - `data-furo-toggle-custom-remove` Removes the custom attribute from the element on true state of the key, adds the attribute on false state
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
 *  custom add:
 *  <div data-furo-toggle-custom-add='feature.key, ATTRIBUTE, VALUE'>
 *   Div will get a custom attribute when the key state is true, otherwise the custom attribute will be removed.
 *  </div>
 *
 *  custom remove:
 *  <div data-furo-toggle-custom-remove='feature.key, ATTRIBUTE, VALUE'>
 *   The custom attribute will be removed when the key state is true, otherwise the custom attribute will be set.
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
    static parseDom(root: any): void;
    /**
     * Use this method to register a key with an initial state or to update a state.
     * @param key {String} The key of a feature.
     * @param state {Boolean} The state to set.
     */
    static setKeyState(key: string, state: boolean): void;
    /**
     * Use this method to bulk register feature toggles.
     *
     * @param keymap {map String,Boolean} Object with keys and their initial state
     */
    static registerKeyMap(keymap: any): void;
    /**
     * Reads the current state of a key
     * @param key {String} The key of a feature.
     * @return {Boolean} The current state.
     */
    static getKeyState(key: string): boolean;
    /**
     * Register a custom callback on a key.
     *
     * The callback will be immediately executed when you register it and every time the key state changes.
     *
     * @param key {String} The key of a feature.
     * @param cb {function(Boolean, KeyState)} The callback method signature is a boolean for the current state and the KeyState object.
     */
    static registerCallback(key: string, cb: (arg0: boolean, arg1: KeyState) => any): void;
    /**
     * Ensure that a key is created
     * @param key {String} The key of a feature.
     * @private
     */
    private static _mustKey;
}
import { KeyState } from "@furo/framework/src/FuroFeatureToggler/KeyState";
