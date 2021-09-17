import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';

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
    return (
      Theme.getThemeForComponent('DemoFuroInputTogether') ||
      css`
        :host {
          display: block;
          height: 100%;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
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
            <style>
              furo-vertical-scroller {
                padding: 24px;
                box-sizing: border-box;
              }
              furo-card {
                margin: 16px 16px 16px 0;
                width: 300px;
              }
              .nomargin furo-checkbox-input {
                margin: 0;
              }
            </style>
            <furo-vertical-scroller>
              <furo-horizontal-flex>
                <furo-card header-text="Select some">
                  <furo-vertical-flex class="nomargin">
                    <furo-checkbox-input
                      hint="Hint"
                      label="Benutzerdefinierter "
                    ></furo-checkbox-input>
                    <furo-checkbox-input
                      hint="Hint"
                      label="Benutzerdefinierter "
                    ></furo-checkbox-input>
                    <furo-checkbox-input
                      hint="Hint"
                      label="Benutzerdefinierter "
                    ></furo-checkbox-input>
                    <furo-checkbox-input label="Benutzerdefinierter "></furo-checkbox-input>
                  </furo-vertical-flex>

                  <furo-horizontal-flex slot="action">
                    <furo-button primary label="primary"></furo-button>
                    <furo-button label="other"></furo-button>
                  </furo-horizontal-flex>
                </furo-card>

                <furo-card>
                  <furo-form-layouter two>
                    <furo-horizontal-flex space>
                      <furo-time-input
                        ƒ-set-value="--time"
                        value="01:00"
                        step="900"
                        hint="Step in 15 Minutes"
                        label="Time  field"
                        @-value-changed="--time"
                      ></furo-time-input>
                      <furo-empty-spacer></furo-empty-spacer>
                      <furo-color-input label="Color" value="#FEA234"></furo-color-input>
                    </furo-horizontal-flex>
                    <furo-text-input leading-icon="fingerprint" label="Owner"></furo-text-input>
                    <furo-text-input label="Special hint"></furo-text-input>
                    <furo-text-input label="Owner"></furo-text-input>
                  </furo-form-layouter>
                </furo-card>

                <furo-card>
                  <img slot="media" src="/_page/images/hamburg.png" alt="" />
                  <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">
                    Do not forget to give the card <br />
                    a height
                  </div>
                  <furo-horizontal-flex space slot="action">
                    <furo-button primary label="primary"></furo-button>
                    <furo-button accent label="accent"></furo-button>
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-button danger label="Danger"></furo-button>
                  </furo-horizontal-flex>
                </furo-card>
              </furo-horizontal-flex>

              <furo-horizontal-flex space>
                <furo-card>
                  <img slot="media" src="/_page/images/hamburg.png" alt="" />
                  <furo-form-layouter two>
                    <furo-search-input
                      leading-icon="arrow-downward"
                      hint="jkhdsfkjsfdjk"
                      label="Search"
                    ></furo-search-input>
                    <furo-date-input
                      ƒ-set-value="--date"
                      max="2020-12-31"
                      min="2020-01-01"
                      value="2020-02-02"
                      hint="Min max in 2020 only"
                      label="Date Input"
                      @-value-changed="--date"
                    ></furo-date-input>

                    <furo-password-input
                      value="1234"
                      hint="under your keyboard or on postit below monitor"
                      label="super secret password"
                      ƒ-make-visible="--showPasswordClicked"
                      ƒ-make-invisible="--hidePasswordClicked"
                    ></furo-password-input>
                  </furo-form-layouter>
                </furo-card>
                <div flex>
                  <furo-form-layouter four>
                    <furo-text-input
                      flex
                      ƒ-set-value="--text"
                      autofocus
                      value="some text"
                      hint="With autofocus"
                      label="Text input field"
                      @-value-changed="--text"
                    ></furo-text-input>

                    <furo-range-input
                      label="Range"
                      step="0.25"
                      value="11"
                      min="10"
                      max="20"
                      hint="Slide for a number"
                      @-value-changed="--rval"
                      ƒ-set-value="--nval"
                    ></furo-range-input>
                    <furo-number-input
                      ƒ-set-value="--number"
                      value="123.25"
                      step="0.25"
                      hint="Steps 0.25"
                      label="Number input field"
                      @-value-changed="--number"
                    ></furo-number-input>
                  </furo-form-layouter>

                  <furo-form-layouter four>
                    <furo-checkbox-input
                      style="margin-top: 19px"
                      label="Benutzerdefinierter Text"
                      hint="Hint"
                      @-value-changed="--check"
                      autofocus
                    ></furo-checkbox-input>
                    <furo-checkbox-input
                      style="margin-top: 19px"
                      label="Disabled "
                      ƒ-set-value="--check"
                      checked
                      disabled
                    ></furo-checkbox-input>
                    <furo-text-input
                      condensed
                      ƒ-set-value="--text"
                      autofocus
                      value="some text"
                      hint="With autofocus"
                      label="Text input field"
                      @-value-changed="--text"
                    ></furo-text-input>

                    <furo-date-input
                      condensed
                      ƒ-set-value="--time"
                      label="Date field"
                      @-value-changed="--date"
                    ></furo-date-input>
                  </furo-form-layouter>
                  <furo-form-layouter>
                    <furo-textarea-input
                      rows="4"
                      label="a lot of text"
                      hint="just type"
                      value="aa ss "
                      @-value-changed="--fromTextarea"
                    ></furo-textarea-input>
                  </furo-form-layouter>
                </div>
              </furo-horizontal-flex>

              <furo-button-bar>
                <furo-button primary raised label="primary"></furo-button>
                <furo-button secondary raised label="secondary"></furo-button>
                <furo-empty-spacer></furo-empty-spacer>
                <furo-button danger raised label="danger"></furo-button>
              </furo-button-bar>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-input-together', DemoFuroInputTogether);
