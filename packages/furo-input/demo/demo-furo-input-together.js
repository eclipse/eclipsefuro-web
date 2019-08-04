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
class DemoFuroInputTogether extends FBP(LitElement) {

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
          <h2>Demo input items together</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-card style="margin:8px;height:200px">
              <div ƒ-.inner-text="--fromTextarea">Do not forget to give the card <br> a height</div>
              <furo-horizontal-flex slot="action">
                <furo-button primary label="primary"></furo-button>
                <furo-button label="other"></furo-button>
                <furo-button accent label="accent"></furo-button>
                <furo-empty-spacer></furo-empty-spacer>
                <furo-button danger label="Danger"></furo-button>
              </furo-horizontal-flex>
            </furo-card>
            <br>
            <br>
            <furo-time-input ƒ-set-value="--time" value="01:00" step="900" hint="Step in 15 Minutes"
                             label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-range-input label="Range" step="0.25" value="11" min="10" max="20" hint="Slide for a number"
                              @-value-changed="--rval" ƒ-set-value="--nval"></furo-range-input>
           
            <furo-search-input label="Search"></furo-search-input>
            <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"
                             hint="Min max in 2020 only" label="Date input field"
                             @-value-changed="--date"></furo-date-input>
            <furo-password-input
                    value="1234"
                    hint="under your keyboard or on postit below monitor"
                    label="super secret password"
                    ƒ-make-visible="--showPasswordClicked"
                    ƒ-make-invisible="--hidePasswordClicked"
            ></furo-password-input>

            <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                             label="Text input field" @-value-changed="--text"></furo-text-input>
            <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                               label="Number input field" @-value-changed="--number"></furo-number-input>
            <furo-text-input ƒ-set-value="--time" label="Input field" @-value-changed="--time"></furo-text-input>

            <hr>
            <furo-textarea-input rows="4" label="a lot of text" hint="just type" value="aa\nss\v" @-value-changed="--fromTextarea"></furo-textarea-input>
            
            <furo-input-row label="row label">
              <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                               label="Text input field" @-value-changed="--text"></furo-text-input>
              <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                                 label="Number input field" @-value-changed="--number"></furo-number-input>
            </furo-input-row>
            <furo-button-bar>
              <furo-button primary raised label="primary"></furo-button>
              <furo-button secondary raised label="secondary"></furo-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button danger raised label="danger"></furo-button>
            </furo-button-bar>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-input-together', DemoFuroInputTogether);
