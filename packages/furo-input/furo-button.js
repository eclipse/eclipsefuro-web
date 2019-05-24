import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
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
      <style >

        :host {
          display: inline-block;
          position: relative;
          font-size: 16px;
          box-sizing: border-box;
          margin: 0;
          padding: 8px 0;
        }
        input {
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, .12);
          display: block;
          background: 0 0;
          font-size: 12px;
          margin: 0;
          padding: 4px 0;
          width: 100%;
          text-align: left;
          color: inherit;
          outline: none;
        }

        input:focus {
          border-color: var(--app-primary-color,#3f51b5);
          border-width: 1px;
        }

        label {
          bottom: 0;
          color: rgba(0, 0, 0, .26);
          font-size: 12px;
          left: 0;
          right: 0;
          pointer-events: none;
          position: absolute;
          display: block;
          top: 12px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-align: left;
        }

        label[float] {
          color: #3f51b5;
          font-size: 10px;
          top: -4px;
          visibility: visible;
        }

        * {
          transition: all 200ms ease-in;
        }
        .hint{
          position: absolute;
          bottom: -7px;
          font-size: 10px;
          color:transparent;

        }
        :host(:focus-within) .hint{
          color: var(--app-hint-color);
          transition: all 750ms ease-in;
        }
        
        button {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid gainsboro;
          border-radius: 2px;
          width: 100%;
          cursor: pointer;
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
