import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp";
import "@furo/form"
import "@furo/input"
/**
 * `sample-form`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class SampleForm extends FBP(LitElement) {

  constructor(){
    super();

  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }

  static get properties(){
    return {};
  }

  static get styles() {
    // language=CSS
    return [
        css`                
            :host {
                display: block;
            }
            :host([hidden]){
                display: none;
            }
        `
    ];
  }

  render(){
    // language=HTML
    return html`
        <form-field-row>
            <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
            <furo-select-input label="Mutation reason" value="New" list="New, mutation, remake"></furo-select-input>
            <p>Put your additional information here...</p>
        </form-field-row>
    `;
  }

}

window.customElements.define('sample-form', SampleForm);
