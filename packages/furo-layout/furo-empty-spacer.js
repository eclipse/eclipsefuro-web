import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `empty-spacer`
 * Use this component as a spacer in flex layouts.
 * Set the attribute hidden to hide the spacer
 *
 * @summary empty flex spacer
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroEmptySpacer extends FBP(PolymerElement) {
    static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]){
          display: none;
        }
      </style>

    `;
  }

  static get properties() {
    return {
      /**
      * Default class flex for furo-horizontal-flex and furo-vertical-flex
      */
      class : {
          type:String,
          reflectToAttribute: true,
          value : "flex" ,
      },
      /**
      * Set to true to hide the spacer
      */
      hidden : {
          type:Boolean,
          reflectToAttribute: true,
          value : false ,
      },
    };
  }

}

window.customElements.define('furo-empty-spacer', FuroEmptySpacer);
