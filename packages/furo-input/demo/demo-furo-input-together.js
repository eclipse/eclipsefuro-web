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
<style>furo-card{
  margin: 16px;
  width:300px;
}</style>
            <furo-horizontal-flex>
              <furo-card>
                
                  <furo-vertical-flex>
                    <furo-checkbox-input hint="Hint"   label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input   hint="Hint"   label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input    hint="Hint"  label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input  hint="Hint"    label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input    label="Benutzerdefinierter "></furo-checkbox-input>
                  </furo-vertical-flex>
                  

                
                <furo-horizontal-flex slot="action">
                  <furo-button primary label="primary"></furo-button>
                  <furo-button label="other"></furo-button>

                </furo-horizontal-flex>
              </furo-card>
              
              <furo-card>
                <furo-form-layouter two>
                  <furo-horizontal-flex>
                    <furo-time-input flex  ƒ-set-value="--time" value="01:00" step="900" hint="Step in 15 Minutes"
                                     label="Time  field" @-value-changed="--time"></furo-time-input>
                    <furo-color-input flex  label="Color" value="#FEA234"></furo-color-input>
                  </furo-horizontal-flex>
                  <furo-text-input leading-icon="fingerprint" label="Owner"></furo-text-input>
                  <furo-text-input label="Special hint"></furo-text-input>
                  <furo-text-input label="Owner"></furo-text-input>
                </furo-form-layouter>
              </furo-card>

              <furo-card>
                <div slot="media"
                     style="height:200px; background:url(&quot;data:image/svg+xml,%3Csvg%20width%3D%22344%22%20height%3D%22194%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-1%200h344v194H-1z%22%2F%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(1)%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23BDBDBD%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M173.65%2069.238L198.138%2027%20248%20112.878h-49.3c.008.348.011.697.011%201.046%200%2028.915-23.44%2052.356-52.355%2052.356C117.44%20166.28%2094%20142.84%2094%20113.924c0-28.915%2023.44-52.355%2052.356-52.355%2010%200%2019.347%202.804%2027.294%207.669zm0%200l-25.3%2043.64h50.35c-.361-18.478-10.296-34.61-25.05-43.64z%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E&quot;);">
                </div>
                <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">Do not forget to give the card <br> a height</div>
                <furo-horizontal-flex slot="action">
                  <furo-button primary label="primary"></furo-button>

                  <furo-button accent label="accent"></furo-button>
                  <furo-empty-spacer></furo-empty-spacer>
                  <furo-button danger label="Danger"></furo-button>
                </furo-horizontal-flex>
              </furo-card>
            </furo-horizontal-flex>
            

            <furo-search-input leading-icon="arrow-downward" hint="jkhdsfkjsfdjk" label="Search"></furo-search-input>
            <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"
                             hint="Min max in 2020 only" label="Date input field"
                             @-value-changed="--date"></furo-date-input>

            <furo-checkbox></furo-checkbox>
            <furo-password-input
                    value="1234"
                    hint="under your keyboard or on postit below monitor"
                    label="super secret password"
                    ƒ-make-visible="--showPasswordClicked"
                    ƒ-make-invisible="--hidePasswordClicked"
            ></furo-password-input><br>
            <furo-checkbox-input label="Benutzerdefinierter Text" hint="Hint" @-value-changed="--check"></furo-checkbox-input>
           
            <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                             label="Text input field" @-value-changed="--text"></furo-text-input>           
            <br>
            <furo-checkbox-input condensed ƒ-toggle="--check" label="Benutzerdefinierter "></furo-checkbox-input>
           
            <furo-text-input condensed ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                             label="Text input field" @-value-changed="--text"></furo-text-input>
            
            
            <furo-range-input label="Range" step="0.25" value="11" min="10" max="20" hint="Slide for a number"
                              @-value-changed="--rval" ƒ-set-value="--nval"></furo-range-input>
            <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                               label="Number input field" @-value-changed="--number"></furo-number-input>
            <furo-text-input style="width: 100%" ƒ-set-value="--time" label="Input field"
                             @-value-changed="--time"></furo-text-input>

            <hr>
            <furo-textarea-input rows="4" label="a lot of text" hint="just type" value="aa\nss\v"
                                 @-value-changed="--fromTextarea"></furo-textarea-input>

            
            <br>
              <furo-checkbox-input value="true" hint="With autofocus"
                               label="Checkbox"></furo-checkbox-input>
            
            <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                               label="Text input field" @-value-changed="--text"></furo-text-input>
              <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                                 label="Number input field" @-value-changed="--number"></furo-number-input>
            
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
