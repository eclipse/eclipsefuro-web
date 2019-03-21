import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
import "@polymer/iron-icon/iron-icon"
import "@polymer/iron-icons/iron-icons"

/**
 * `furo-toggle-icon`
 *
 * Tags: input
 * @summary toggles a boolean
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroToggleIcon extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
        }

        iron-icon {
          width: 24px;
          height: 24px;
          @apply --toggle-icon-icon;
        }
      </style>
      <iron-icon on-click="toggle" icon="[[_icon]]"></iron-icon>
    `;
  }

  /**
   * toggles open state
   * @private
   */
  toggle() {
    this.set('value', !this.value);
  }

  static get properties() {
    return {
      /**
       * Indicates the  state
       */
      value: {
        type: Boolean,
        notify: true,
        value: true,
        observer: "_updateIcon"
      },
      /**
       * Icon to display in true state
       */
      iconTrue: {
        type: String,
        value: "expand-more",
      },

      /**
       * Icon to display in true state
       */
      iconFalse: {
        type: String,
        value: "expand-less",
      },
      _icon: String
    };
  }

  _updateIcon(state) {
    if (state) {
      this.set('_icon', this.iconTrue);
    } else {
      this.set('_icon', this.iconFalse);
    }
  }
}

window.customElements.define('furo-toggle-icon', FuroToggleIcon);
