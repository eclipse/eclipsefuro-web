import {PolymerElement} from '@polymer/polymer';

/**
 * With `default-value` you can set a default value in a declarative way.
 *
 * ```
 * <default-value default-value="view1" input="[[routeData.page]]" output="{{page}}"></default-value>
 * ```
 *
 * You can use `default-value` also as an **or** condition for a value (`input || default-value`).
 *
 *
 * @summary Set a default value
 * @customElement
 * @polymer
 */
class DefaultValue extends (PolymerElement) {

  static get properties() {
    return {
      /**
       * If this value is not set or falsy, the default-value is used.
       */
      input: {type: Object, observer: '_setOut'},
      /**
       * The default value which is used when input is falsy
       */
      defaultValue: {type: Object, observer: '_setOut'},
      /**
       * The output
       */
      output: {type: Object, notify: true},
    };
  }

  setDefault() {
    this.set('output', this.defaultValue);
  }

  _setOut(input) {
    if (!input) {
      this.set('output', this.defaultValue);
    } else {
      this.set('output', input);
    }
  }
}

window.customElements.define('default-value', DefaultValue);
