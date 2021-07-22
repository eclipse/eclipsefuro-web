import * as StandardListItem from '@ui5/webcomponents/dist/StandardListItem.js';

/**
 * `reference-search-item`
 * Repeated item to display the search result set
 *
 * @fires {item} item-selected -  Fired when item is selected
 * @summary representation of a result item
 * @customElement
 * @appliesMixin FBP
 */
export class Ui5ReferenceSearchItem extends StandardListItem.default {
  constructor() {
    super();
    this._item = {};
    this.displayField = 'display_name';

    this.addEventListener('click', () => {
      this.select();
    });
  }

  /**
   * Inject of the item
   * data of inner text of the element is defined with the attribute
   * display-field (default value: display_name)
   * @param item
   */
  injectItem(item) {
    this._item = item;
    this.innerText = item.display;
  }

  deselect() {
    this.removeAttribute('selected');
  }

  preselect() {
    this.setAttribute('selected', '');
    this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  select() {
    const customEvent = new Event('item-selected', { composed: true, bubbles: true });
    customEvent.detail = this._item.data;
    this.dispatchEvent(customEvent);
  }
}

window.customElements.define('ui5-reference-search-item', Ui5ReferenceSearchItem);
