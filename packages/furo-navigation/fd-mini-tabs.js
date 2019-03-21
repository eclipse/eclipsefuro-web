import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `fd-mini-tabs`
 *
 *
 * @summary kleine Tabs
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FdMiniTabs extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;

        }

        button {
          font-size: 12px;
          border: none;
          border-collapse: collapse;
          height: 100%;
          outline: none;
          cursor: pointer;
          background-color: var(--tab-backround-color);
          color:var(--tab-color);

        }

        button:hover {
          background-color: var(--tab-hover-color);
        }
        button[selected]:hover {
          background-color: var(--tab-backround-color);
        }
        button[selected] {
          border-bottom: 2px solid var(--tab-selected-b-color);
          color:var(--tab-selected-color);
        }
      </style>
      <template is="dom-repeat" items="[[items]]">
        <button data-index="[[index]]" data-value="[[item.value]]" on-click="_selectItem" selected$="[[item.selected]]">
          [[item.label]]
        </button>
      </template>

    `;
  }

  static get properties() {
    return {
      /**
       * items
       * Tab items in folgendem Format
       * ```
       * [
       *  {label: "Visual", selected: false, value: "visual"},
       *  {label: "Flow", selected: false, value: "flow"},
       *  {label: "Source", selected: false, value: "src"}
       * ]
       ```
       */
      items: {
        type: Array,

      },
      /**
       * selectedValue
       * Wert des ausgewählten Tabs
       */
      selectedValue: {
        type: String,
        notify: true,
        observer: "_setActive"
      },
    };
  }

  _setActive(value) {

    let items = this.items.map((e, i) => {
      if (e.value === value) {
        e.selected = true;
      } else {
        e.selected = false;
      }
    });
  }

  _selectItem(e) {
    this._disableAll();
    this.set('items.' + e.target.dataIndex + '.selected', true);
    this.set('selectedValue', e.target.dataValue);
  }

  _disableAll() {
    this.items.map((e, i) => {
      this.set('items.' + i + '.selected', false);
    });
  }
}

window.customElements.define('fd-mini-tabs', FdMiniTabs);
