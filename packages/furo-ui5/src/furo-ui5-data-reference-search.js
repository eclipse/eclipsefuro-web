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
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    setTimeout(()=>{
      super.connectedCallback();
    },0);

    /**
     * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
     * If you bind a scalar, you dont need this attribute.
     * @property value-field
     * @private
     */
    this._valueField = 'id';

    /**
     * The name of the field from the injected collection that contains the label for the dropdown array.
     * @property display-field
     * @private
     */
    this._displayField = 'display_name';

    /**
     * The minimal length of the inputted string to trigger the search event
     * @property min-term-length
     * @private
     */
    this._minTermLength = 0;

    /**
     * the hint message when there is no search result
     * @property no-result-hint
     * @private
     */
    this._noResultHint = 'no result found';

    /**
     * The max number of the items to display in the list
     * @property max-items-to-display
     * @private
     */
    this._maxItemsToDisplay = null;

    /**
     * the hint message for the max number of the items to display in the list
     * @property max-result-hint
     * @private
     */
    this._maxResultsHint = null;

    /**
     * trigger search only when enter is pressed
     * @property search-on-enter-only
     * @private
     */
    this._searchOnEnterOnly = false;

    /**
     * the loaded collection
     */
    this._collection = [];

    this._initBinder();
  }

  /**
   * List of observed attributes
   * @returns {string[]}
   */
  static get observedAttributes() {
    return [
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
          this._valueField = newVal;
          break;
        case 'display-field':
          this._displayField = newVal;
          break;
        case 'min-term-length':
          this._minTermLength = newVal;
          break;
        case 'no-result-hint':
          this._noResultHint = newVal;
          break;
        case 'max-items-to-display':
          this._maxItemsToDisplay = newVal;
          break;
        case 'max-result-hint':
          this._maxResultsHint = newVal;
          break;
        case 'search-on-enter-only':
          this._searchOnEnterOnly = newVal;
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
      label: 'label', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      hint: 'hint',
      filter: 'filter',
      'no-result-hint': '_noResultHint',
      'max-result-hint': '_maxResultsHint',
      'value-field': '_valueField',
      'display-field': '_displayField',
      'value-state': 'valueState',
      'min-term-length': '_minTermLength',
      'max-items-to-display': '_maxItemsToDisplay',
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
    if (this.filterValue && this.filterValue.length >= this._minTermLength) {
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
    if (this.binder.fieldNode.display_name._value !== undefined) {
      this.filterValue = this.binder.fieldNode.display_name;
    }
  }

  /**
   * inject collection as a list
   * @param collection
   */
  collectionIn(collection) {
    if (collection && collection.entities && collection.entities.length > 0) {
      if (this._maxItemsToDisplay && collection.entities.length > this._maxItemsToDisplay) {
        // cut down the result size
        this._collection = collection.entities.slice(0, this._maxItemsToDisplay);
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

        element.setAttribute('text', e.data[this._displayField]);
        element.setAttribute('id', e.data[this._valueField]);
        this.appendChild(element);
      });

      if (withMaxItems) {
        // TODO: use valueStateMessage to show the max-items-info by next ui5 release
      }
    }
  }
}

window.customElements.define('furo-ui5-data-reference-search', FuroUi5DataReferenceSearch);
