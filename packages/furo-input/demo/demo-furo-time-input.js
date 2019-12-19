import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-element`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroTimeInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroTimeInput') || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-time-input</h2>
          <p>If you type in a time outside the min max range or the step, an "error" will be indicated. But not the error text.</p>
          <p>You can also type in a time in a "furo-input-field" (the 3rd field). But when you feed "furo-time-input" with bad data, it displays "--:--"</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>hr{margin:30px 0;}</style>
            <furo-time-input label="nothing "></furo-time-input>
            <furo-time-input ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            
            <hr>

            <furo-time-input condensed label="nothing "></furo-time-input>
            <furo-time-input condensed ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input condensed ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input condensed ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input condensed error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input condensed disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            <hr>
            
            <furo-time-input filled label="nothing "></furo-time-input>
            <furo-time-input filled ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input filled ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input filled error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            
            <hr>

            <furo-time-input filled condensed label="nothing "></furo-time-input>
            <furo-time-input filled condensed ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled condensed ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input filled condensed ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input filled condensed error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled condensed disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            <hr>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-time-input', DemoFuroTimeInput);
