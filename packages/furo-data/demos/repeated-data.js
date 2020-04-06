import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";
import   "@furo/fbp/src/flow-repeat";

/**
 * `repeated-data`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class RepeatedData extends FBP(LitElement) {

  constructor() {
    super();
    this._FBPAddWireHook("--add",( )=>{
      this.field.add()
    })
  }

  static get properties() {
    return {
      message: {type: String},
      myArray: {type: Array},
      myBool: {type: Boolean}
    };
  }


  render() {
    // language=HTML
    return html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: block;

        }
        .box{
          border: 2px solid #e2e2e2;
          margin: 8px;
          padding: 8px;
        }
      </style>
      <h4>Repeated Zeitunddatum</h4>
      <template is="flow-repeat" ƒ-inject-items="--data">
           <div class="box">
          <furo-data-date-input ƒ-bind-data="--itemInjected(*.item.date)"></furo-data-date-input>
          <furo-data-time-input ƒ-bind-data="--itemInjected(*.item.time)"></furo-data-time-input>
          <hr>
          <div style="background-color: #e2e2e2">
            <repeated-string ƒ-bind-data="--itemInjected(*.item.repstring)"></repeated-string>
          </div>
          <hr>

          </div>
       </template>

      <button @-click="--add">add</button>
    `;
  }


  bindData(d) {
    if (d === undefined) {
      console.warn("Invalid binding ");
      console.log(this);
      return
    }

    this.field = d;


    this.field.addEventListener('repeated-fields-changed', (e) => {
      // updates wieder einspielen
      this._FBPTriggerWire('--data', e.detail);

    });


    // init
    this._FBPTriggerWire('--data', this.field.repeats);

  }
}

window.customElements.define('repeated-data', RepeatedData);
