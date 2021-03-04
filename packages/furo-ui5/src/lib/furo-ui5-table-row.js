import * as TableRow from '@ui5/webcomponents/dist/TableRow.js';

/**
 * this is a helper component to send `tablerow-selected` event by clicking the row or pressing the enter on the row.
 */
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
     * listen to the keyboard events
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

          /**
           * Fired when the ArrowDown is pressed on the last row.
           * the event detail is the original entity of the row
           * @event arrow-down-on-last-row
           */
          this.dispatchEvent(
            new CustomEvent('arrow-down-on-last-row', {
              bubbles: true,
              composed: true,
            }),
          );
        }
      } else if (key === 'ArrowUp' || key === 38) {
        if (this.previousSibling && this.previousSibling.tagName === undefined) {
          /**
           * Fired when the ArrowUp is pressed on the first row.
           * the event detail is the original entity of the row
           * @event arrow-up-on-first-row
           */
          this.dispatchEvent(
            new CustomEvent('arrow-up-on-first-row', {
              bubbles: true,
              composed: true,
            }),
          );
        }
      }
    });
  }
}
window.customElements.define('furo-ui5-table-row', FuroUi5TableRow);
