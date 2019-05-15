import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-horizontal-flex"
import "@furo/input/furo-toggle-icon"

/**
 * `furo-collapsible-box`
 *  Collapsible box with head bar, content slot and icon slot
 *
 *
 *
 * @summary collapsible box with head
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroCollapsibleBox extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
          padding: 20px;
          background: white;
          display: block;
          margin: 24px;

          box-sizing: border-box;
          @apply --furo-collapsible-mixin;

        }

        label {
          display: block;
          font-weight: 700;
          line-height: 24px;
          padding-left: 8px;
          @apply --furo-collapsible-label-mixin
        }

        .content{
          display: none;
        }
        :host([open]) .content {
          display: block;
        }
        
        .head{
          border-bottom:1px solid gainsboro;
          @apply --furo-collapsible-head-mixin;
         
        }
      </style>
      <furo-horizontal-flex class="head">
        <furo-toggle-icon value="{{open}}" ƒ-toggle="--lblClicked"></furo-toggle-icon>
        <label flex @-click="--lblClicked">[[label]]</label>
        <slot name="context"></slot>
      </furo-horizontal-flex>
      <div class="content">
        <slot></slot>
      </div>

    `;
  }


  static get properties() {
    return {
      /**
       * Label der Collapsible
       */
      label: {
        type: String,
        notify: true

      },
      /**
       * Indicates the collapse state, set the collapse state
       */
      open: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false,
      },
      /**
       * //todo remember componente einbauen
       */
      rememberState: {
        type: Boolean,
        notify: true,
        value: false,
      },

    };
  }

}

window.customElements.define('furo-collapsible-box', FuroCollapsibleBox);
