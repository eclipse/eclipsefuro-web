import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `fd-form-box`
 *  Card um Formulare für fd zu bauen
 *
 * @summary 680px breite card
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FdFormBox extends FBP(PolymerElement) {
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
          
        }

        label {
          display: block;
          font-weight: 700;
          margin-bottom: 16px;
        }

        ::slotted(furo-text-input), ::slotted(furo-password-input), ::slotted(furo-date-input)   {
          display: block;
        }

        ::slotted(textarea) {
          width: 100%;
        }
      </style>
      <label>[[label]]</label>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      /**
      * Label der Form
      */
      label : {
          type:String,
          notify: true,

      },
    };
  }

}

window.customElements.define('fd-form-box', FdFormBox);
