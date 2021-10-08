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

  setData(d) {
    this._data = d;
  }

  _select() {
    if (this.mode === 'MultiSelect') {
      /**
       * @event multiselect-change
       * Fired when selection was changed in multiselect mode
       */
      this.dispatchEvent(new Event('ui5-selection-requested', { composed: true, bubbles: true }));
    }

    /**
     * @fires {entity} tablerow-selected - Fired when the row is selected. The event detail is the original entity of the row.
     */
    this.dispatchEvent(
      new CustomEvent('tablerow-selected', {
        detail: this._data._value,
        bubbles: true,
        composed: true,
      }),
    );
  }

  _arrowDownPressed(event) {
    if (this.nextSibling && this.nextSibling.tagName !== 'FURO-UI5-TABLE-ROW') {
      event.stopPropagation();

      /**
       * @fires {entity} arrow-down-on-last-row - Fired when the ArrowDown is pressed on the last row. The event detail is the original entity of the row.
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
       * @fires {entity} arrow-up-on-first-row - Fired when the ArrowUp is pressed on the first row. The event detail is the original entity of the row
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
