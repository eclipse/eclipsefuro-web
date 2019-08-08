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
class DemoFuroDateInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
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
          <h2>Demo furo-date-input</h2>
          <p>If you type in a date outside the min max range or the step, an "error" will be indicated. But not the error text.</p>
          <p>You can also type in a date in a "furo-input-field" (the 3rd field). But when you feed "furo-date-input" with bad data, it displays "--:--"</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-date-input ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input condensed ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input condensed ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input condensed ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input condensed error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input condensed disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input filled ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input filled ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input filled error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input filled condensed ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled condensed ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input filled condensed ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input filled condensed error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled condensed disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-date-input', DemoFuroDateInput);
