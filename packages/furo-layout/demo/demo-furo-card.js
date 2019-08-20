import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-card`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCard extends FBP(LitElement) {

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
        furo-demo-snippet{
            height: 800px;
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
      <h2>Demo demo-furo-card</h2>
      <p>description</p>
      <furo-demo-snippet>
        <template>
          <style>furo-card {
            margin: 20px;
            width: 320px;
            float: left;
            
          }</style>
          
          <furo-card title="Title goes here" secondary-text="Secondary text goes hereSecondary text goes hereSecondary text goes hereSecondary text goes here">
            <div>Secondary</div>
            <div slot="action">
              <furo-horizontal-flex space slot="action">
              <furo-button primary label="primary"></furo-button>
              
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button label="Danger"></furo-button>
              </furo-horizontal-flex>
            </div>
          </furo-card>
          
          <furo-card title="Title goes here" secondary-text="Secondary text goes here">
            <div>
              Content text blah
            </div>
            <div slot="action">
              <furo-horizontal-flex space slot="action">
              <furo-button primary label="primary"></furo-button>
              
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button label="Danger"></furo-button>
              </furo-horizontal-flex>
            </div>
          </furo-card>

          <furo-card title="With media" secondary-text="Secondary text goes here">
            <div slot="media"
                 style="height:200px; background:url(&quot;data:image/svg+xml,%3Csvg%20width%3D%22344%22%20height%3D%22194%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-1%200h344v194H-1z%22%2F%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(1)%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23BDBDBD%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M173.65%2069.238L198.138%2027%20248%20112.878h-49.3c.008.348.011.697.011%201.046%200%2028.915-23.44%2052.356-52.355%2052.356C117.44%20166.28%2094%20142.84%2094%20113.924c0-28.915%2023.44-52.355%2052.356-52.355%2010%200%2019.347%202.804%2027.294%207.669zm0%200l-25.3%2043.64h50.35c-.361-18.478-10.296-34.61-25.05-43.64z%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E&quot;);">
            </div>
            <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">Do not forget to give the card <br> a height</div>
            <furo-horizontal-flex space slot="action">
              <furo-button primary label="primary"></furo-button>
              <furo-button accent label="accent"></furo-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button danger label="Danger"></furo-button>
            </furo-horizontal-flex>
          </furo-card>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-card', DemoFuroCard);
