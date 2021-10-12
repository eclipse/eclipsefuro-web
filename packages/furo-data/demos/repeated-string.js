import { LitElement, html } from 'lit';
import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';

/**
 * `repeated-data`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class RepeatedString extends FBP(LitElement) {
  constructor() {
    super();
    this._FBPAddWireHook('--add', () => {
      this.field.add();
    });

    // delete field
    this.addEventListener('delete-item', e => {
      e.detail.deleteFromList();
    });
  }

  static get properties() {
    return {
      message: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean },
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

        span {
          cursor: pointer;
        }
      </style>
      <h4>Repeated String</h4>
      <button @-click="--last">last</button>
      <button @-click="--index">index</button>
      <div>
        <flow-repeat
          ƒ-inject-items="--data"
          ƒ-trigger-first="--first"
          ƒ-trigger-last="--last"
          ƒ-trigger-index="--index"
        >
          <template>
            <furo-text-input
              ƒ-bind-data="--itemInjected(*.item)"
              ƒ-focus="--lastItem, --trigger"
            ></furo-text-input>
            <span @-click="^^delete-item(item)">X</span>
          </template>
        </flow-repeat>
      </div>
      <button @-click="--add">add</button>
      <button @-click="--first">first</button>
    `;
  }

  bindData(d) {
    if (d === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ');
      // eslint-disable-next-line no-console
      console.log(this);
      return;
    }

    this.field = d;

    this.field.addEventListener('repeated-fields-changed', () => {
      // updates wieder einspielen
      this._FBPTriggerWire('--data', this.field.repeats);
    });

    // init
    this._FBPTriggerWire('--data', this.field.repeats);
  }
}

window.customElements.define('repeated-string', RepeatedString);
