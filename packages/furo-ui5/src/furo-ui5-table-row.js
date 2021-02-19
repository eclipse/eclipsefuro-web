import * as TableRow from '@ui5/webcomponents/dist/TableRow.js';

export class FuroUi5TableRow extends TableRow.default {
  constructor() {
    super();
    this._data = {};

    this.shadowRoot.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      /**
       * Fired when the row is selected.
       * the event detail is the original entity of the row
       * @event tablerow-selected
       */
      this.dispatchEvent(
        new CustomEvent('tablerow-selected', {
          detail: this._data,
          bubbles: true,
          composed: true,
        }),
      );
    });
  }
}
window.customElements.define('furo-ui5-table-row', FuroUi5TableRow);
