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

    /**
     * listen to keyboard events
     */
    this.shadowRoot.addEventListener('keydown', event => {
      const key = event.key || event.keyCode;

      if (key === 'Enter' || key === 13) {
        this.dispatchEvent(
          new CustomEvent('tablerow-selected', {
            detail: this._data,
            bubbles: true,
            composed: true,
          }),
        );
      } else if (key === 'ArrowDown' || key === 40) {
        if (this.nextSibling && this.nextSibling.tagName !== 'FURO-UI5-TABLE-ROW') {
          event.stopPropagation();
        }
      }
    });
  }
}
window.customElements.define('furo-ui5-table-row', FuroUi5TableRow);
