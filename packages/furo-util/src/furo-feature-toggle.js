import { LitElement, html, css } from 'lit'
import { FBP } from '@furo/fbp'
import { FuroFeatureToggle as FeatureToggle } from '@furo/framework/src/FuroFeatureToggler/FuroFeatureToggle.js'

/**
 * `furo-feature-toggle`
 *  Is a handler for feature toggles, you can react to key changes with FBP.
 *  This component is quite simple, but gives you a lot of possibilities.
 *  Read more about feature toggles in the [guide](/docs/guides/featuretoggle/)
 *
 *  ```html
 *  <!-- setting a key -->
 * <furo-feature-toggle
 *     key="feature.easter.egg" fn-set-true="--activateClicked" fn-set-false="--disableClicked">
 *     </furo-feature-toggle>
 *
 *  <!-- observing key changes -->
 *  <furo-feature-toggle
 *     key="feature.xxxx.yyy"  at-key-activated="--fxyActivated" at-key-changed="--fxyChanged">
 *     </furo-feature-toggle>
 *
 *  ```
 *
 * @fires {true} key-true - Fired when the key is set to true or is true on init.
 * @fires {false} key-false - Fired when the key is set to false or is false on init.
 * @fires {Boolean} key-changed - Fired on init and when the key changes its state.
 *
 *
 * @summary flow based handler for feature toggles
 * @customElement furo-feature-toggle
 * @appliesMixin FBP
 */
class FuroFeatureToggle extends FBP(LitElement) {


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Name of a feature toggle.
       *
       * @type String
       */
      key: { type: String },
    }
  }

  /**
   *
   * @private
   */
  _FBPReady() {
    super._FBPReady()
    // this._FBPTraceWires()
    FeatureToggle.registerCallback(this.key, (newstate) => {
      if (newstate === true) {
        this.dispatchEvent(new Event('key-true', { composed: true, bubbles: true, detail: true }));
      } else {
        this.dispatchEvent(new Event('key-false', { composed: true, bubbles: true, detail: true }));
      }
      this.dispatchEvent(new Event('key-changed', { composed: true, bubbles: true, detail: newstate }));
    })
  }

  /**
   * Sets a feature key state to false.
   */
  setFalse() {
    FeatureToggle.setKeyState(this.key, false)
  }

  /**
   * Sets a feature key state to true.
   */
  setTrue() {
    FeatureToggle.setKeyState(this.key, true)
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <p>Hej, welcome</p>
    `
  }
}

window.customElements.define('furo-feature-toggle', FuroFeatureToggle)
