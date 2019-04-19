import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
import "./furo-input-shared-styles"
import "@polymer/paper-ripple/paper-ripple"

/**
 * `furo-button`
 *
 * Simple button element which uses a native `<button>` tag with paper-ripple
 *
 * Tags: input
 * @summary button element
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroButton extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style include="furo-input-shared-styles">
        button {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid gainsboro;
          border-radius: 2px;
          width: 100%;
          cursor: pointer;
          @apply --furo-button-mixin;
        }

        button:focus {
          outline: none;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          @apply --furo-button-focus-mixin;
        }

        :host([danger]) button:focus {
          @apply --furo-button-danger-focus-mixin;
        }
        
        :host([danger]) button {
          @apply --furo-button-danger-mixin;
        } 
        :host([hidden]) button {
          display: none;
        }
        
      </style>

      <button  ƒ-focus="--focus" danger$="[[danger]]">[[label]]
        <slot></slot>
        <paper-ripple></paper-ripple>
      </button>
    `;
  }

  focus(e) {
    this._FBPTriggerWire("--focus", e);
  }

  static get properties() {
    return {
      /**
       * Beschriftung des buttons
       */
      label: {
        type: String,
        value: "label not set",
      },
      /**
       * Set danger to true if it is dangerous to press this button
       */
      danger: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
      },
    };
  }

}

window.customElements.define('furo-button', FuroButton);
