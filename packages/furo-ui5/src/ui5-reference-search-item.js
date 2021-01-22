import * as StandardListItem from '@ui5/webcomponents/dist/StandardListItem.js';

/**
 * `reference-search-item`
 * Repeated item to display the search result set
 *
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
      const customEvent = new Event('item-selected', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = this._item;
      this.dispatchEvent(customEvent);
    });
  }

  /**
   * Attribute observer
   * @returns {string[]}
   */
  static get observedAttributes() {return ['display-field']; }

  /**
   * Native attribute changed callback
   * Setter for new value of displayField
   * @param name
   * @param oldValue
   * @param newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    this.displayField = newValue;
  }

  /**
   * Inject of the item
   * data of inner text of the element is defined with the attribute
   * display-field (default value: display_name)
   * @param item
   */
  injectItem(item) {
    this._item = item;
    this.innerText = item.data[this.displayField];
  }

  deselect() {
    this.removeAttribute('selected');
  }

  preselect() {
    this.setAttribute('selected', '');
    this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  select() {
    /**
     * @event item-selected
     * Fired when item is selected
     * detail payload: item
     */
    const customEvent = new Event('item-selected', { composed: true, bubbles: true });
    customEvent.detail = this._item;
    this.dispatchEvent(customEvent);
  }
}

window.customElements.define('ui5-reference-search-item', Ui5ReferenceSearchItem);
