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
      this._select();
    });

    /**
     * listen to the keyboard events
     */
    this.shadowRoot.addEventListener('keydown', event => {
      const key = event.key || event.keyCode;

      switch (key) {
        case 'Enter':
        case 13:
          this._select();
          break;
        case 'ArrowDown':
        case 40:
          this._arrowDownPressed(event);
          break;
        case 'ArrowUp':
        case 38:
          this._arrowUpPressed();
          break;
        default:
          break;
      }
    });
  }

  /**
   * focus this row
   */
  focus() {
    const tr = this.shadowRoot.querySelector('tr');
    if (tr) {
      tr.focus();
    }
  }

  _select() {
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
  }

  _arrowDownPressed(event) {
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
  }

  _arrowUpPressed() {
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
}
window.customElements.define('furo-ui5-table-row', FuroUi5TableRow);
