import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `fd-input-row`
 *
 *
 * @summary Zweigespaltene Formularzeile
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FdInputRow extends FBP(PolymerElement) {
    static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
          margin-bottom: 16px;
          margin-top: 8px;
          @apply --input-row-mixin;
        }
        div{
         line-height: 40px;
          width: 120px;
          @apply --input-row-label-mixin;
        }
        ::slotted(*){
          resize: ;
        }
        
      </style>
      <furo-horizontal-flex>
        <div>[[label]]</div>
        <slot></slot>
      </furo-horizontal-flex>
    `;
  }

  static get properties() {
    return {
      /**
      * label
      * Die Bezeichnung der Zeile
      */
      label : {
          type:String,
          value : "set the label!" ,
      },
    };
  }

}

window.customElements.define('fd-input-row', FdInputRow);
