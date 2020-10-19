import * as ComboBox from '@ui5/webcomponents/dist/ComboBox.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * The furo-ui5-data-reference-search
 *  search a reference
 *  bounded data should be furo.reference
 *
 *  the furo-ui5-data-reference-search should be used together with the fur-collection-agent:
 *```
 * <!--  furo-data-object -->
 * <furo-data-object type="task.Task" @-object-ready="--entityReady"></furo-data-object>
 *
 *<furo-horizontal-flex>
 *    <furo-ui5-data-reference-search autofocus  flex ƒ-bind-data="--entityReady(*.fields.ref)" @-search="--term" ƒ-collection-in="--refCol"></furo-ui5-data-reference-search>
 *</furo-horizontal-flex>
 *
 *<furo-collection-agent service="tasks" ƒ-search="--term" ƒ-hts-in="--entityReady(*.fields.ref._value)" @-response="--refCol"></furo-collection-agent>
 *
 * ```
 *
 * @summary furo ui5 data reference search
 * @customElement
 * @demo demo-furo-ui5-data-reference-search Basic Usage
 */
export class FuroUi5DataReferenceSearch extends ComboBox.default {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event change
   */

  /**
   * Fired when the value of the ui5-date-picker is changed at each key stroke.
   * @event input
   */

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    /**
     * declare here the name of the field from the injected collection.  by selecting an item from dropdown the id
     *  of bounded complex type or the value of scalar type will be updated according to the value of this field.
     * @type {string}
     */
    this.valueField = 'id';

    /**
     * The name of the field from the injected collection that contains the label for the dropdown array.
     *
     * @type {string}
     */
    this.displayField = 'display_name';

    /**
     * The minimal length of the inputted string to trigger the search event
     *
     * @type {number}
     */
    this.minTermLength = 0;

    /**
     * define the hint message when there is no search result.
     *
     * @type {string}
     */
    this.noResultHint = 'no result found';

    /**
     * define the max number of the items to display in the list.
     *
     * @type {number}
     */
    this.maxItemsToDisplay = null;

    /**
     * define the hint message for the max number of the items to display in the list.
     *
     * @type {number}
     */
    this.maxResultsHint = null;

    /**
     * define whether trigger search only when enter is pressed. default value false.
     *
     * @type {boolean}
     */
    this.searchOnEnterOnly = false;

    /**
     * the loaded collection.
     * @type {*[]}
     * @private
     */
    this._collection = [];

    /**
     * Defines a short hint intended to aid the user with data entry when the reference-search has no value.
     *
     * @type {string}
     */
    this.placeholder = '';

    this._initBinder();
  }

  /**
   * rewrite this super _selectMatchingItem function
   * initiate _filteredItems in order to avoid error
   * @private
   */
  _selectMatchingItem() {
    if (this._filteredItems === undefined) {
      this._filteredItems = [];
    }
    super._selectMatchingItem();
  }

  /**
   * List of observed attributes
   * @returns {string[]}
   */
  static get observedAttributes() {
    return [
      'placeholder',
      'value-field',
      'display-field',
      'min-term-length',
      'no-result-hint',
      'max-items-to-display',
      'max-result-hint',
      'search-on-enter-only',
    ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      // eslint-disable-next-line default-case
      switch (name) {
        case 'value-field':
          this.valueField = newVal;
          break;
        case 'display-field':
          this.displayField = newVal;
          break;
        case 'min-term-length':
          this.minTermLength = newVal;
          break;
        case 'no-result-hint':
          this.noResultHint = newVal;
          break;
        case 'max-items-to-display':
          this.maxItemsToDisplay = newVal;
          break;
        case 'max-result-hint':
          this.maxResultsHint = newVal;
          break;
        case 'search-on-enter-only':
          this._searchOnEnterOnly = newVal;
          break;
        case 'placeholder':
          this.placeholder = newVal;
          break;
      }
    }
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label', // map label
      hint: 'hint',
      filter: 'filter',
      'no-result-hint': 'noResultHint',
      'max-result-hint': 'maxResultsHint',
      'value-field': 'valueField',
      'display-field': 'displayField',
      'value-state': 'valueState',
      'min-term-length': 'minTermLength',
      'max-items-to-display': 'maxItemsToDisplay',
      'search-on-enter-only': '_searchOnEnterOnly',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      condensed: 'condensed',
      loading: 'loading',
    };

    this.binder.fatAttributesToConstraintsMappings = {
      'min-term-length': 'value._constraints.min_term_length.is', // for the fieldnode constraint
      'no-result-hint': 'value._constraints.no_result_hint.is', // for the fieldnode constraint message
      'max-items-to-display': 'value._constraints.max_items_to_display.is', // for the fieldnode constraint message
      'search-on-enter-only': 'value._constraints.search_on_enter_only.is', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';

    this._registerListeners();
  }

  /**
   * add listeners
   * @private
   */
  _registerListeners() {
    // by inputting
    this.addEventListener('input', () => {
      if (!this._searchOnEnterOnly) {
        this._fireSearchEvent();
      }
    });

    // by item selected
    this.addEventListener('change', () => {
      this.querySelectorAll('ui5-cb-item').forEach(e => {
        if (e.selected && e.getAttribute('id') !== undefined) {
          this.binder.fieldNode.id._value = e.getAttribute('id');
          this.binder.fieldNode.display_name._value = e.getAttribute('text');
        }
      });
    });
  }

  /**
   * fire search event
   * @private
   */
  _fireSearchEvent() {
    if (this.filterValue && this.filterValue.length >= this.minTermLength) {
      /**
       * @event search
       * Fired when term is entered and bigger then min-term-length
       * detail payload: {String} term
       */
      const customEvent = new Event('search', { composed: true, bubbles: true });
      customEvent.detail = this.filterValue;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * Bind a entity field to the reference-search. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);

    if (this.binder.fieldNode) {
      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine');
      } else {
        this.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine');
      });

      this.binder.fieldNode.addEventListener('field-value-changed', () => {
        this._updateInputField();
      });

      this._updateInputField();
    }
  }

  /**
   * update search input text
   * @private
   */
  _updateInputField() {
    // initially show display_name in the input field by no collection injection
    if (this._collection.length === 0 && this.binder.fieldNode.display_name._value !== undefined) {
      this.filterValue = this.binder.fieldNode[this.displayField];
    }

    if (this.binder.fieldNode.id._value !== undefined) {
      const element = this._collection.filter(e => {
        if (e.data[this.valueField] === this.binder.fieldNode.id._value) {
          return e;
        }
        return undefined;
      });
      if (element[0] !== undefined && element[0].data && element[0].data[this.displayField]) {
        this.filterValue = element[0].data[this.displayField];
        this.value = element[0].data[this.displayField];
      }
    }
  }

  /**
   * inject collection as a list
   * @param collection
   */
  collectionIn(collection) {
    if (collection && collection.entities && collection.entities.length > 0) {
      if (this.maxItemsToDisplay && collection.entities.length > this.maxItemsToDisplay) {
        // cut down the result size
        this._collection = collection.entities.slice(0, this.maxItemsToDisplay);
        this._showList(true);
      } else {
        this._collection = collection.entities;
        this._showList();
      }
    } else {
      // TODO: use valueStateMessage to show no-result-message by next ui5 release
    }
  }

  /**
   * show item list
   * @param withMaxItems
   * @private
   */
  _showList(withMaxItems) {
    if (this._collection) {
      this.querySelectorAll('ui5-cb-item').forEach(e => {
        e.remove();
      });

      this._collection.forEach(e => {
        const element = document.createElement('ui5-cb-item');

        element.setAttribute('text', e.data[this.displayField]);
        element.setAttribute('id', e.data[this.valueField]);
        this.appendChild(element);
      });

      if (withMaxItems) {
        // TODO: use valueStateMessage to show the max-items-info by next ui5 release
      }
    }
  }
}

window.customElements.define('furo-ui5-data-reference-search', FuroUi5DataReferenceSearch);
