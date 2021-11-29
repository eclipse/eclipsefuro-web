import { FBP } from './fbp.js';
import './empty-fbp-node.js';

/**
 * `flow-repeat`
 *
 * Custom element to repeat Arrays. The repeated items are injected *before* the `flow-repeat` element. If you need the repeated items inside of an other dom node, use [`setInsertRef`](./flow-repeat/#setinsertref)
 *
 *
 * ```html
 * <flow-repeat ƒ-inject-items="--dataArray">
 *  <template>
 *   <repeated-item index="${this.index}" ƒ-inject="--init">
 * </template>
 * </flow-repeat>
 * ```
 * > **Note**: if you want to bind a repeater node, use `furo-data-flow-repeat`.
 *
 *
 *  ## Available wires in the template:
 *
 *  > **Note**: Each repeated item has its own closed scope. You can not use the wires outside of the `template`.
 *  > Use events to interact with components outside of the template.
 *
 * -  `--init` : contains the repeated item, fired only once on creation of the repeated node
 * -  `--item` : contains the repeated item, fired on every inject
 * -  `--firstItem` : contains the repeated item, fired on the first element.
 * -  `--lastItem` : contains the repeated item, fired on the last element.
 * -  `--index` : contains a number with the index of the element.
 * -  `--host` : contains a reference to the host component.
 * -  `--trigger` : contains what was passed in to the triggering method.
 * -  `--triggerFirst` : contains what was passed in to the triggering method.
 * -  `--triggerLast` : contains what was passed in to the triggering method.
 * -  `--itemSelected` : contains nothing, is triggered with select(index).
 * -  `--itemDeSelected` : contains nothing, is triggered when another item is selected with select(index).
 *
 * ## Available attributes
 * **index** contains the current index of the item. Use this to fire a event with an index like `@-click="^^item-clicked(index)"`
 * **item** contains the current index of the item. Use this to fire a event with the repeated item like `@-click="^^item-selected(item)"`
 *
 *
 * @summary Custom element to allow using FBPs template features in repeated template
 *
 * @fires {index of the element} last-element-selected -  Fired when the last element is selected. Use this to trigger a load next.
 * @fires {Number} items-in-dom -  Fired when items are attached to the dom, with Number of items.
 *
 * @customElement
 * @mixes FBP
 */
export class FlowRepeat extends FBP(HTMLElement) {
  constructor() {
    super();
    /**
     * @private
     */
    this.template = undefined;
    /**
     * @private
     */
    this._insertedItems = [];
  }

  /**
   * Clear the list
   */
  clear() {
    this.injectItems([]);
  }

  /**
   * Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item.
   *
   * @param index {int} - Index of item to select
   */
  select(index) {
    if (this._insertedItems[index]) {
      // deselect the last selected
      if (this.selectedIndex !== undefined) {
        this.deselect(this.selectedIndex);
      }

      this._insertedItems[index].virtualElement._FBPTriggerWire(
        '--itemSelected'
      );
      this.selectedIndex = index;
    }
  }

  /**
   * Select item by its identity.
   *
   * Using this method only works when you have set the `identity-path`.
   *
   * @param identifier {*} Identity from `identity-path`
   */
  selectIdentity(identifier) {
    if (this._insertedItems.length === 0) {
      this._selIdentityQueue = identifier;
    } else {
      this._selIdentityQueue = undefined;

      // eslint-disable-next-line no-restricted-syntax
      const arrayLength = this._insertedItems.length;
      let i = 0;
      do {
        if (this._insertedItems[i].identity === identifier) {
          this.select(i);
          break;
        }
        i += 1;
      } while (i < arrayLength);
    }
  }

  /**
   * Selects next index.  If none was selected, the first index will be selected.
   *
   * If you reached the last index, the first index will be selected.
   *
   * If you reach the last element, `last-element-selected` will fire.
   *
   * Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item
   */
  selectNextIndex() {
    let i = this.selectedIndex + 1;
    // loop around
    if (!this._insertedItems[i]) {
      i = 0;
    }
    this.select(i);

    if (this._insertedItems.length - 1 === this.selectedIndex) {
      const customEvent = new Event('last-element-selected', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = i;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * Selects the previous index.
   *
   * If you are on the first item, the last will be selected.
   *
   * Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item
   */
  selectPreviousIndex() {
    let i = this.selectedIndex - 1;
    // loop around
    if (i < 0) {
      i = this._insertedItems.length - 1;
    }
    this.select(i);
  }

  /**
   * Triggers the currently selected item.
   *
   * Triggers the wire `--trigger` on the every item.
   *
   * Triggers the wire `--triggerIndex` on the every item.
   *
   * @param data {*} - Data to forward.
   */
  triggerSelected(data) {
    this.triggerIndex(this.selectedIndex, data);
  }

  /**
   * Triggers all nodes.
   *
   * Triggers the wire `--trigger` on the every item.
   *
   * Triggers the wire `--triggerIndex` on the every item.
   *
   * @param data {*} - data to forward
   */
  triggerAll(data) {
    for (let i = 0; i < this._insertedItems.length; i += 1) {
      this.triggerIndex(i, data);
    }
  }

  /**
   * Triggers the wire `--itemDeSelected` on the last selected item
   */
  deselect() {
    if (
      this.selectedIndex !== undefined &&
      this._insertedItems[this.selectedIndex]
    ) {
      this._insertedItems[this.selectedIndex].virtualElement._FBPTriggerWire(
        '--itemDeSelected'
      );
      this.selectedIndex = undefined;
    }
  }

  /**
   * Set a reference to append the repeated elements in to the ref instead of appending them before the repeater itself.
   *
   * @param ref {DomNode} - Node to append the repeated items.
   */
  setInsertRef(ref) {
    this._insertMode = 'appendchild';
    this._insertTarget = ref;
  }

  /**
   *
   * @param attachedElem
   * @param reference
   * @private
   */
  _insertToDom(attachedElem, reference) {
    if (this._insertMode === 'appendchild') {
      this._insertTarget.appendChild(attachedElem);
    } else {
      this.parentNode.insertBefore(attachedElem, reference);
    }
  }

  /**
   * Triggers the wire `--itemDeSelected` on all items
   */
  deselectAll() {
    this._insertedItems.forEach(item => {
      item.virtualElement._FBPTriggerWire('--itemDeSelected');
      this.selectedIndex = undefined;
    });
  }

  /**
   *
   * @param parent
   * @return {null|*}
   * @private
   */
  _findFirstHost(parent) {
    if (parent && parent.host) {
      return parent.host;
    }
    if (parent === null) {
      return null;
    }
    return this._findFirstHost(parent.parentNode);
  }

  /**
   * Inject items to repeat.
   *
   * @param items {Array} - Items to repeat
   */
  injectItems(items) {
    if (!Array.isArray(items)) {
      // eslint-disable-next-line no-console
      console.info('Items is not an array ', items, this);
      // make the list empty
      // eslint-disable-next-line no-param-reassign
      items = [];
    }

    this._firstHost = this._findFirstHost(this.parentNode);
    items.forEach((e, i, a) => {
      let identity = false;
      if (this.identityPath) {
        identity = this.identityPath
          .split('.')
          .reduce((acc, part) => acc && acc[part], e);
      }

      let elem;
      // wenn das element noch nicht existiert
      if (!this._insertedItems[i]) {
        elem = this._buildDomNode(identity, i);
        elem._FBPTriggerWire('--init', e);
      } else if (
        this._insertedItems[i].identity === false ||
        this._insertedItems[i].identity !== identity
      ) {
        elem = this._buildDomNode(identity, i);
        // Schiebe alle elemente des Knotens vor das erste kind des nächsten möglichen knoten
        let reference = this;
        if (
          this._insertedItems[i + 1] &&
          this._insertedItems[i + 1].children[0]
        ) {
          [reference] = this._insertedItems[i + 1].children;
        }

        // move the nodes
        this._insertedItems[i].children.forEach(attachedElem => {
          this._insertToDom(attachedElem, reference);
        });
        elem._FBPTriggerWire('--init', e);
      } else {
        elem = this._insertedItems[i].virtualElement;
      }

      // set item and index value on created element
      elem.item = e;
      elem.index = i;

      // trigger wires
      elem._FBPTriggerWire(this._internalWire, { item: e, index: i });
      if (i === 0) {
        elem._FBPTriggerWire('--firstItem', e);
      }

      if (i === a.length - 1) {
        elem._FBPTriggerWire('--lastItem', e);
      }

      elem._FBPTriggerWire('--item', e);

      elem._FBPTriggerWire('--host', this._firstHost);
      elem._FBPTriggerWire('--index', i);
    });

    // überzählige elemente aus dem dom entfernen
    this._insertedItems
      .slice(items.length, this._insertedItems.length)
      .forEach(handle => {
        handle.children.forEach(attachedElem => {
          attachedElem.remove();
        });
      });
    // überzählige elemente aus dem array entfernen
    this._insertedItems.splice(items.length);

    if (items.length > 0) {
      setTimeout(() => {
        const customEvent = new Event('items-in-dom', {
          composed: true,
          bubbles: false,
        });
        customEvent.detail = items.length;
        this.dispatchEvent(customEvent);
      }, 0);
    }

    // selectByIdentity queue
    if (this._selIdentityQueue) {
      this.selectIdentity(this._selIdentityQueue);
    }
  }

  /**
   *
   * @param identity
   * @param i
   * @return {HTMLElement}
   * @private
   */
  _buildDomNode(identity, i) {
    // build hidden elem

    const elem = document.createElement('empty-fbp-node');
    elem.attachShadow({ mode: 'open' });

    // this is sometimes needed when template is="flow-repeat" is used.
    if (this.template === undefined) {
      const t = this.querySelector('template');
      if (t && t.content) {
        this.template = t.content;
      }
    }

    elem.shadowRoot.appendChild(this.template.cloneNode(true));
    elem._appendFBP(elem.shadowRoot);

    const handle = {
      virtualElement: elem,
      children: [].slice.call(elem.shadowRoot.children),
      identity,
    };

    // remove old entries
    if (this._insertedItems[i]) {
      this._insertedItems[i].children.forEach(attachedElem => {
        attachedElem.remove();
      });
    }

    this._insertedItems[i] = handle;

    this._insertToDom(elem.shadowRoot.firstElementChild, this);
    return elem;
  }

  /**
   * @private
   */
  connectedCallback() {
    this.style.display = 'none';
    // Create a shadow root to the element.

    const t = this.querySelector('template');
    if (t && t.content) {
      this.template = t.content;
    }

    /**
     * Identity path of a single item.
     * Use this if you have a field which identifies the item.
     * @type {*string}
     */
    this.identityPath = this.getAttribute('identity-path') || false;

    this._internalWire = this.getAttribute('internal-wire') || '--itemInjected';
  }

  /**
   * Triggers the wire `--trigger` on the first item.
   *
   * Triggers the wire --triggerFirst on the first item.
   *
   * @param data {*} - data to forward to the item.
   */
  triggerFirst(data) {
    if (this._insertedItems[0]) {
      this._insertedItems[0].virtualElement._FBPTriggerWire('--trigger', data);
      this._insertedItems[0].virtualElement._FBPTriggerWire(
        '--triggerFirst',
        data
      );
    }
  }

  /**
   * Triggers the wire `--trigger` on the last item.
   *
   * Triggers the wire --triggerLast on the last item.
   *
   * @param data {*} - data to forward to the item.
   */
  triggerLast(data) {
    if (this._insertedItems[this._insertedItems.length - 1]) {
      this._insertedItems[
        this._insertedItems.length - 1
      ].virtualElement._FBPTriggerWire('--trigger', data);
      this._insertedItems[
        this._insertedItems.length - 1
      ].virtualElement._FBPTriggerWire('--triggerLast', data);
    }
  }

  /**
   * Triggers the wire `--trigger` on the  item.
   *
   * Triggers the wire `--triggerIndex` on the  item.
   *
   *
   * @param i {int} - index of item that you want to trigger.
   * @param data {*} - data to forward to the item.
   */
  triggerIndex(i, data) {
    if (this._insertedItems[i]) {
      this._insertedItems[i].virtualElement._FBPTriggerWire('--trigger', data);
      this._insertedItems[i].virtualElement._FBPTriggerWire(
        '--triggerIndex',
        data
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn('Out of index', this);
    }
  }
}

window.customElements.define('flow-repeat', FlowRepeat);
