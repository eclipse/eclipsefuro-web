import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Env } from '@furo/framework';

import '@furo/fbp/src/flow-repeat.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/util/src/furo-de-bounce.js';
import '@ui5/webcomponents/dist/List.js';
import './ui5-reference-search-item.js';
import '@ui5/webcomponents-icons/dist/value-help.js';
import '@ui5/webcomponents-icons/dist/search.js';
import './furo-ui5-dialog.js';

/**
 * The furo-ui5-data-reference-search
 *  search a reference
 *
 *  Bounded data must fullfill the  furo.reference signature. The service, deeplink,... is taken from the spec of your field.
 *  Do not forget to specify.
 *
 *  *default usage*
 * ```html
 *   <furo-ui5-data-reference-search
 *   ƒ-bind-data="--data(*.is_person)"
 *   ></furo-ui5-data-reference-search>
 * ```
 *
 *  *usage with a extended searcher*
 * ```html
 *   <furo-ui5-data-reference-search
 *   extended-searcher="country-filter"
 *   ƒ-bind-data="--data(*.is_person)"
 *   ></furo-ui5-data-reference-search>
 * ```
 *
 *  *usage example for a non default response*
 *```html
 *   <furo-ui5-data-reference-search
 *   extended-searcher="contact-filter"
 *   search-response-path="xx_entities"
 *   value-field-path="data.xx_id"
 *   display-field-path="data.xx_display_name"
 *   ƒ-bind-data="--data(*.is_person)"
 *   ></furo-ui5-data-reference-search-labeled>
 * ```
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 * - **max:"number"** set the maximum number of characters available in the input field.
 *
 * The constraint **required** will mark the element as required
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind a entity field. This can be a scalar type or any complex type with 'id','display_name' signature.
 *
 * If your type has a *reference* type signature ('id','display_name', 'link'), the service, and initial deep link is extracted from
 * the link part of your type.
 *
 * If you bind a skalar field, the value which is set in 'valueFieldPath' will be set.
 *
 * When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * ## Specs
 * Define a propper default value on the reference type.
 *
 * ```yaml
 * link:
 * type: furo.Link
 * description: HTS for the initial search (the default works on root resources only)
 * __proto:
 *    number: 3
 * __ui: null
 * meta:
 *   default: |
 *     {
 *          "rel": "list",
 *          "href": "/contacts",
 *          "method": "GET",
 *          "type": "contact.Contact",
 *          "service": "Contacts"
 *      }
 *   placeholder: ""
 *   hint: ""
 *   label: contact.Reference.link.label
 *   options:
 *     flags: []
 *     list: []
 *   readonly: false
 *   repeated: false
 *   typespecific: null
 *
 * ```
 * ### API of a extended searcher
 * ### Searcher Mehtods
 * The only method you have to implement is **htsIn**. The reference-search will pass its own hts to the extended
 * searcher. A call on qpIn on the searcher will also pass the resulting hts to the extended searcher.
 *
 * ### Searcher Events
 * Fire a **@-record-selected** to set the item on the reference-search.
 * Fire a **@-close-requested** to close the extended search.
 *
 * @cssprop {#ffffff} [--furo-data-reference-search-list-background=--surface] - background color of the result list
 *
 * @fires {`Object` the complete item} item-selected -  Fired when a item was selected from the list.
 * @fires {`text`} change -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @fires {} input -  Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected.
 * @fires {} xxxx -  All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).
 *
 * @summary furo ui5 data reference search
 * @customElement furo-ui5-data-reference-search
 * @demo demo-furo-ui5-data-reference-search Basic Usage
 */
export class FuroUi5DataReferenceSearch extends FBP(FieldNodeAdapter(LitElement)) {
  constructor() {
    super();

    this.service = '';
    this.searchResponsePath = 'entities';
    this.valueFieldPath = 'data.id';
    this.displayFieldPath = 'data.display_name';
    this.extendedValueFieldPath = 'data.id';
    this.extendedDisplayFieldPath = 'data.display_name';
    this.maxItemsToDisplay = 8;
    // initial value
    this.value = { id: '', display_name: '' };

    this.minTermLength = 2;

    this.debounceTimeout = 250;
    this.placeholder = '';
    this.label = '';

    this.noDataText = 'no result found';

    // for the show more button
    this._hasmore = 'None';
    this._hasExtendedSearcher = false;
    this.disableSearchList = false;
    this.icon = 'search';

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = { state: 'None', message: '' };
    this.valueState = 'None';

    this._attributesFromFNA = {
      readonly: undefined,
      placeholder: undefined,
      label: undefined,
    };

    this._constraintsFromFNA = {
      required: undefined,
    };

    // a list of privileged attributes. when those attributes are set in text-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      placeholder: null,
      label: null,
      required: null,
      disabled: null,
      icon: null,
    };
  }

  /**
   * This is triggered from the FieldNodeAdapter when the data has changed
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.__fieldNode.__childNodes.length === 0) {
      // assuming a scalar
      this.value = { id: val, display_name: val };
      this._FBPTriggerWire('--displayValue', val || '');
    } else {
      this._FBPTriggerWire('--displayValue', val.display_name || '');
      this.value = val;
    }

    // set the service by wire, because collection-agent can not handle empty service entries
    if (typeof val.link === 'object' && val.link.service !== null) {
      this._FBPTriggerWire('--detectedService', val.link.service);
      this._FBPTriggerWire('--hts', val.link);
    } else if (Env.api.specs[this.__fieldNode._spec.type].fields?.link?.meta?.default) {
      // todo: check if the defaults from the field itself (not the defaults from the used type) are given
      // try the defaults from the ref type

      this._FBPTriggerWire(
        '--detectedService',
        Env.api.specs[this.__fieldNode._spec.type].fields.link.meta.default.service,
      );
      this._FBPTriggerWire(
        '--hts',
        Env.api.specs[this.__fieldNode._spec.type].fields.link.meta.default,
      );
    }
  }

  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();

    this.updateComplete.then(() => {
      // created to avoid the default messages from ui5
      const vse = this.querySelector('div[slot="valueStateMessage"]');
      if (vse === null) {
        this._valueStateElement = document.createElement('div');
        this._valueStateElement.setAttribute('slot', 'valueStateMessage');
        // eslint-disable-next-line wc/no-constructor-attributes
        this._inputField.appendChild(this._valueStateElement);
      } else {
        this._valueStateElement = vse;
        this._previousValueState.message = vse.innerText;
      }
    });
  }

  /**
   * This is used to update the FieldNodeAdapter
   * @private
   */
  _updateField() {
    if (this.value.display_name !== undefined) {
      this._FBPTriggerWire('--displayValue', this.value.display_name);
    }
    if (this.__fieldNode.__childNodes.length === 0) {
      this.setFnaFieldValue(this.value.id);
    } else {
      this.setFnaFieldValue(this.value);
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Path to the node in the response value which contains the array with the selection items.
       * By default this goes to *entitites*
       */
      searchResponsePath: { type: String, attribute: 'search-response-path' },
      /**
       * Path to response value item which is used for the id.
       * By default this goes to *data.id*
       */
      valueFieldPath: { type: String, attribute: 'value-field-path' },
      /**
       * Path to selection value node which is used for the display.
       * By default this goes to *data.display_name*
       */
      displayFieldPath: { type: String, attribute: 'display-field-path' },
      /**
       * Path to response value item of the exteded search which is used for the id.
       * By default this goes to *data.id*.
       * Only needed when your extended searcher does not have the id, display_name signature in the response.
       */
      extendedValueFieldPath: { type: String, attribute: 'extended-value-field-path' },
      /**
       * Path to response value item of the exteded search which is used for the display.
       * By default this goes to *data.display_name*.
       * Only needed when your extended searcher does not have the id, display_name signature in the response.
       */
      extendedDisplayFieldPath: { type: String, attribute: 'extended-display-field-path' },
      /**
       * Set the service. This is only needed when you do not use a bind or bind a scalar value.
       */
      service: { type: String },
      /**
       * Use this attribute to set a custom icon for your searcher
       */
      icon: { type: String },
      /**
       * A Boolean attribute which, if present, means this field can not be searched.
       *
       * This is very useful when you want enforce the usage of the extended search
       */
      disableSearchList: {
        type: Boolean,
        attribute: 'disable-search-list',
      },
      /**
       * hint text when result not found by search
       */
      noDataText: {
        type: String,
        attribute: 'no-data-text',
      },
      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      placeholder: {
        type: String,
      },
      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
      },
      /**
       * The minimal length of search term to trigger a search.
       *
       */
      minTermLength: {
        type: Number,
        attribute: 'min-term-length',
      },
      /**
       * The maximal number of items to display.
       *
       * This value will be set as page-size query-param for the backend.
       *
       * If the response contains hts information with rel *next* a "load more" button will be displayed at the end
       * of the list.
       */
      maxItemsToDisplay: {
        type: Number,
        attribute: 'max-items-to-display',
      },

      /**
       * Enable this, to avoid the automatic triggering of "search".
       *
       * The user have to press enter to trigger the search. Min-term-length is respected.
       */
      searchOnEnterOnly: {
        type: Boolean,
        attribute: 'search-on-enter-only',
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
        type: Boolean,
      },
      /**
       * Disable
       */
      disabled: {
        type: Boolean,
      },
      /**
       * This is used to activate the loading indicator.
       */
      busy: {
        type: Boolean,
      },

      /**
       * wait for this time between keystrokes to trigger a search to the service
       */
      debounceTimeout: {
        type: Number,
        attribute: 'debounce-timeout',
      },

      /**
       * Define the extended searcher. Do not forget to import the searcher you want to use.
       */
      extendedSearcher: {
        type: String,
        attribute: 'extended-searcher',
      },
    };
  }

  /**
   * setter for the service
   * @public
   * @param service
   */
  set service(service) {
    if (!(service === '' || service === undefined)) {
      this._FBPTriggerWire('|--service', service);
      // set empty qp
      this._FBPTriggerWire('|--qpIn', {});
    }
  }

  _FBPReady() {
    /**
     * handle extended searcher
     */
    if (this.extendedSearcher) {
      if (this.icon === 'search') {
        this.icon = 'value-help';
      }

      this._dialog = this.shadowRoot.getElementById('dialog');
      this._hasExtendedSearcher = true;
      this._valueHelperComponent = document.createElement(this.extendedSearcher);
      this._valueHelperComponent.style.height = '100%';

      /**
       * Register hook on wire --BackdropFocus , |--htsIn, --hts to pass it to the value helper
       * This is done so, because we can not set @-xxx attributes in js
       */
      this._FBPAddWireHook('--BackdropFocus', () => {
        this._valueHelperComponent.focus();
        // trigger the search method if it is available
        if (this._valueHelperComponent.search !== undefined) {
          this._valueHelperComponent.search(this._searchTerm || this.value.display_name);
        }
      });
      this._FBPAddWireHook('|--htsIn', hts => {
        this._valueHelperComponent.htsIn(hts);
      });
      this._FBPAddWireHook('--hts', hts => {
        this._valueHelperComponent.htsIn(hts);
      });

      this._dialog.appendChild(this._valueHelperComponent);
    }

    // the input field
    this._inputField = this.shadowRoot.getElementById('input');

    // listen to search input
    this._inputField.addEventListener('input', () => {
      this._searchTerm = this._inputField.value;
      if (
        this._searchTerm.length >= this.minTermLength &&
        !this.searchOnEnterOnly &&
        !this.disableSearchList
      ) {
        this._FBPTriggerWire('--searchTerm', this._inputField.value);
      }
    });

    /**
     * Register hook on wire --searchResponse to
     * build the --resultList
     */
    this._FBPAddWireHook('--searchResponse', response => {
      this._hasmore = 'None';
      // check for rel next to show the more button
      if (response.links) {
        response.links.forEach(link => {
          if (link.rel === 'next') {
            this._hasmore = 'Button';
          }
        });
      }

      // build the "entities" list for the repeater
      const entities = response[this.searchResponsePath];
      if (entities && entities.length > 0) {
        this._hasCollection = true;
        this._searchResultItems = entities.map(e => ({
          id: this.valueFieldPath.split('.').reduce((acc, part) => acc && acc[part], e),
          display: this.displayFieldPath.split('.').reduce((acc, part) => acc && acc[part], e),
          data: e,
        }));

        this._FBPTriggerWire('--resultList', this._searchResultItems);

        if (this._focused) {
          this._showList();
        }
      } else {
        /**
         * No results
         */
        this._closeList();
        this._hasCollection = false;
        this._searchResultItems = [];
        this._closeList();
        this._setValueStateMessage('Information', this.noDataText);
      }
      this.requestUpdate();
    });

    // trigger a loadMore when there is a next page
    // lastListElementReached is fired by flow-repeat when the cursor reaches the last item
    this._FBPAddWireHook('--lastListElementReached', () => {
      if (this._hasmore !== 'None') {
        this._FBPTriggerWire('--loadMore', null);
      }
    });

    /**
     * Register hook on wire --nextRejected to
     * disable the more link, because the next rel was rejected from the server
     */
    this._FBPAddWireHook('--nextRejected', () => {
      this._hasmore = 'None';
      this.requestUpdate();
    });

    // append more data to the list
    this._FBPAddWireHook('--nextSearchResponse', response => {
      if (response.links) {
        response.links.forEach(link => {
          if (link.rel === 'next') {
            this._hasmore = 'Button';
          } else {
            this._hasmore = 'None';
          }
        });
      } else {
        this._hasmore = 'None';
      }

      const entities = this.searchResponsePath
        .split('.')
        .reduce((acc, part) => acc && acc[part], response);
      if (entities && entities.length > 0) {
        const currentIndex = this._searchResultItems.length - 1;
        this._searchResultItems = this._searchResultItems.concat(
          entities.map(e => ({
            id: this.valueFieldPath.split('.').reduce((acc, part) => acc && acc[part], e),
            display: this.displayFieldPath.split('.').reduce((acc, part) => acc && acc[part], e),
            data: e,
          })),
        );
        this._FBPTriggerWire('--resultList', this._searchResultItems);
        this._FBPTriggerWire('--listOpened', currentIndex);
      }
    });

    // lock blur for slow clickers
    this.addEventListener('mousedown', () => {
      this._lockBlur = true;
    });
    // unlock after long click
    this.addEventListener('mouseup', () => {
      this._lockBlur = false;
    });

    // close list on blur
    this._FBPAddWireHook('--blured', () => {
      this._focused = false;

      if (!this._lockBlur) {
        this._closeList();
      }
    });

    // opens the list on focus
    this._FBPAddWireHook('--focused', () => {
      this._focused = true;
      if (this._hasCollection) {
        this._showList();
      }
    });

    /**
     * Register hook on wire --responseReceived to
     * disable the busy indicator
     */
    this._FBPAddWireHook('--responseReceived', () => {
      this.busy = false;
    });

    /**
     * Register hook on wire --debouncedSrch to
     * enable the busy indicator
     */
    this._FBPAddWireHook('--debouncedSrch', () => {
      this.busy = true;
    });

    /**
     * Update the fieldnode when an item from the list was selected
     */
    this._FBPAddWireHook('--itemSelected', item => {
      this.value.id = this.valueFieldPath.split('.').reduce((acc, part) => acc && acc[part], item);
      this.value.display_name = this.displayFieldPath
        .split('.')
        .reduce((acc, part) => acc && acc[part], item);
      this._updateField();
      this._closeList();
    });

    /**
     * Register hook on wire --backdropClosed to
     * focus on the list
     */
    this._FBPAddWireHook('--backdropClosed', () => {
      this._hasCollection = false;
      this._inputField.focus();
    });

    /**
     * Update the fieldnode when an item from the list was selected
     * TODO: valueFieldPath and displayFieldPath for value helper
     */
    this._FBPAddWireHook('--recordSelected', item => {
      this.value.id = this.extendedValueFieldPath
        .split('.')
        .reduce((acc, part) => acc && acc[part], item);
      this.value.display_name = this.extendedDisplayFieldPath
        .split('.')
        .reduce((acc, part) => acc && acc[part], item);
      this._updateField();
      this._closeList();
    });

    /**
     * Register hook on wire --responseError to
     * notify about response errors
     */
    this._FBPAddWireHook('--responseError', e => {
      this._setValueStateMessage('Error', `System Error: ${e.message}`);
    });

    /**
     * Register hook on wire --expandIconClicked to
     * expand the value helper if it is set
     */
    this._FBPAddWireHook('--expandIconClicked', () => {
      if (this._hasExtendedSearcher) {
        this._closeList();
        this._FBPTriggerWire('--valueHelperRequested', null);
      } else {
        // clear the field and focus for a new search
        this._FBPTriggerWire('--displayValue', '');
        this._inputField.focus();
      }
    });

    /**
     * listen to keyboard events
     */
    this.addEventListener('keydown', event => {
      const key = event.key || event.keyCode;

      if (key === 'F4') {
        if (this._hasExtendedSearcher) {
          this._closeList();
          this._FBPTriggerWire('--valueHelperRequested', null);
        }
      }

      /**
       * The keyboard actions are handled differently, when the list is openn or closed
       */
      if (this._listIsOpen) {
        if (key === 'Enter') {
          event.preventDefault();
          this._FBPTriggerWire('--enterPressedForSelect');
        }
        if (key === 'ArrowDown') {
          event.preventDefault();
          this._FBPTriggerWire('--arrowDownPressed');
        }
        if (key === 'ArrowUp') {
          event.preventDefault();
          this._FBPTriggerWire('--arrowUpPressed');
        }

        if (key === 'Escape' || key === 'Esc' || key === 27) {
          /**
           * close the list and reset to the value that was set
           *
           * When list is closed, clear the field
           */
          this._closeList();
          this._inputField.value = this.value.display_name;
        }
      } else {
        // list is closed
        if (key === 'ArrowDown') {
          if (this._hasCollection) {
            this._showList();
          }
        }
        if (key === 'Enter') {
          if (this.searchOnEnterOnly) {
            event.preventDefault();
            this._searchTerm = this._inputField.value;
            if (this._searchTerm.length >= this.minTermLength) {
              this._FBPTriggerWire('--searchTerm', this._inputField.value);
            }
          }
        }
        if (key === 'Escape' || key === 'Esc' || key === 27) {
          /**
           * esc on fields with data clears the field
           * esc on empty fields which were cleared will restore the field to the previous value
           */
          if (this._inputField.value !== '') {
            this._tmp_value = JSON.stringify(this.value);
            this.value = { id: '', display_name: '' };
            this._updateField();
          } else {
            this.value = JSON.parse(this._tmp_value);
            this._inputField.value = this.value.display_name;
            this._updateField();
          }
        }
      }
    });

    super._FBPReady();
  }

  /**
   * Closes the list
   * @private
   */
  _closeList() {
    this._listIsOpen = false;
    this.removeAttribute('show-list');
  }

  /**
   * Opens the list and selects the last selected item
   * @private
   */
  _showList() {
    this.busy = false;
    this._resetValueStateMessage();
    if (this._searchResultItems && this._searchResultItems.length > 0) {
      this._listIsOpen = true;
      this.setAttribute('show-list', '');
      let index;
      // find index to preselect item in the opened list
      for (let i = 0; i < this._searchResultItems.length; i += 1) {
        if (
          this._searchResultItems[i].data &&
          this._searchResultItems[i].data[this.valueField] === this.value.id
        ) {
          index = i;
          break;
        }
      }
      if (index !== undefined) {
        this._FBPTriggerWire('--listOpened', index);
      }
    }
  }

  /**
   * Update the placeholder from the FNA
   * @private
   * @param placeholder
   */
  onFnaPlaceholderChanged(placeholder) {
    this._attributesFromFNA.placeholder = placeholder;
    if (this._privilegedAttributes.placeholder === null) {
      this.placeholder = placeholder;
    }
  }

  /**
   * Update the label from the FNA
   * @private
   * @param label
   */
  onFnaLabelChanged(label) {
    this._attributesFromFNA.label = label;
    if (this._privilegedAttributes.label === null) {
      this.label = label;
    }
  }

  /**
   * Updates the readonly state from FNA
   * @private
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (this._privilegedAttributes.readonly === null) {
      this.readonly = readonly;
      // deactivate suggestions
      this.showSuggestions = false;
    }
  }

  /**
   * Updates the required constraint from the FNA
   * @private
   * @param constraints
   */
  onFnaConstraintsChanged(constraints) {
    // required
    if (constraints.required !== undefined) {
      this._constraintsFromFNA.required = constraints.required;
      if (this._privilegedAttributes.required === null) {
        this.required = constraints.required.is === 'true';
      }
    }
  }

  /**
   * Updates the error state from FNA
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      // this value state should not be saved as a previous value state
      this._setValueStateMessage('Error', validity.description);
    }
  }

  /**
   * Clears the error state from FNA
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueStateMessage();
  }

  /**
   * updater for the value state and message
   *
   * @param valueState
   * @param message
   * @private
   */
  _setValueStateMessage(valueState, message) {
    this.valueState = valueState;
    // element was created in constructor
    this._valueStateElement.innerText = message;
    this.requestUpdate();
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueStateMessage() {
    this._setValueStateMessage(this._previousValueState.state, this._previousValueState.message);
  }

  /**
   * Reads the attributes which are set on the component dom.
   *
   * Following attributes can be set:
   * - `value-state`
   * - `value-state-message`
   * - `icon`
   * - `placeholder`
   * - `label`
   * - `required`
   * - `readonly`
   * - `disabled`
   *
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
    this._previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';

    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * htsIn sets the HTS for the collection-agent.
   *
   * This is only needed if you want to have fine grained control over the hts
   *
   * @public
   * @param hts
   */
  htsIn(hts) {
    this._FBPTriggerWire('|--htsIn', hts);
  }

  /**
   * qpIn Use this to set query params manualy
   * @public
   * @param qp
   */
  qpIn(qp) {
    this._FBPTriggerWire('|--qpIn', qp);
  }

  /**
   * Sets the filter.
   * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side
   * or do btoa(JSON.stringify(FILTER))
   *
   * @param filter
   */
  setFilter(filter) {
    this._FBPTriggerWire('--filter', filter);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: inline-block;
          position: relative;
        }

        .list {
          position: absolute;
          overflow: auto;
          box-shadow: rgba(0, 0, 0, 0.42) 0 0 0 1px;
          z-index: 1;
          display: none;
          background-color: var(
            --furo-data-reference-search-list-background,
            var(--surface, #ffffff)
          );
        }

        :host([show-list]) .list {
          display: block;
        }

        ui5-input,
        ui5-list {
          width: inherit;
        }

        ui5-busy-indicator {
          position: absolute;
          left: 50%;
          top: 15px;
          width: 24px;
        }

        ui5-icon {
          color: var(--sapContent_IconColor);
          cursor: pointer;
          outline: none;
          padding: var(--_ui5_input_icon_padding);
          border-left: 1px solid transparent;
          min-width: 1rem;
          min-height: 1rem;
        }

        :host([readonly]) ui5-icon {
          display: none;
        }

        ui5-icon:hover {
          background: var(--sapButton_Hover_Background);
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <ui5-input
        id="input"
        ?required="${this.required}"
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        value-state="${this.valueState}"
        ƒ-.value="--displayValue"
        @-blur="--blured"
        @-focus="--focused"
        @-click="--focused"
        placeholder="${this.placeholder}"
      >
        <ui5-icon
          slot="icon"
          name="${this.icon}"
          @-click="^^search-icon-clicked,--expandIconClicked"
        ></ui5-icon>
      </ui5-input>
      <ui5-busy-indicator size="Small" ?active="${this.busy}"></ui5-busy-indicator>
      <ui5-list
        mode="SingleSelect"
        class="list"
        @-item-selected="--itemSelected"
        growing="${this._hasmore}"
        @-load-more="--loadMore"
        @-last-element-selected="--lastListElementReached"
      >
        <flow-repeat
          ƒ-inject-items="--resultList"
          ƒ-select="--listOpened"
          ƒ-deselect-all="--listDeselectAll"
          ƒ-select-next-index="--arrowDownPressed"
          ƒ-select-previous-index="--arrowUpPressed"
          ƒ-trigger-selected="--enterPressedForSelect"
        >
          <template>
            <ui5-reference-search-item
              display-field="data.display_name"
              ƒ-deselect="--itemDeSelected"
              ƒ-select="--trigger"
              ƒ-preselect="--itemSelected"
              ƒ-inject-item="--item"
            ></ui5-reference-search-item>
          </template>
        </flow-repeat>
      </ui5-list>
      <furo-ui5-dialog
        ƒ-show="--valueHelperRequested"
        @-after-open="--BackdropFocus"
        ƒ-close="--closeRequested, --recordSelected"
        @-after-close="--backdropClosed"
        stretch
        header-text="${this.label}"
        @-escape-filter-panel="--closeRequested"
        @-record-selected="--recordSelected"
        id="dialog"
      >
      </furo-ui5-dialog>
      <furo-de-bounce
        ƒ-input-wire="--searchTerm"
        @-out="--debouncedSrch"
        wait="${this.debounceTimeout}"
      ></furo-de-bounce>

      <furo-deep-link
        ƒ-.service="--detectedService, |--service"
        ƒ-qp-in="|--qpIn"
        @-hts-out="--hts"
      >
      </furo-deep-link>

      <!-- todo: ƒ-cancel-request="--searchTerm" -->
      <furo-collection-agent
        ƒ-.service="--detectedService, |--service"
        ƒ-set-filter="--filter"
        ƒ-search="--debouncedSrch"
        ƒ-next="--loadMore"
        page-size="${this.maxItemsToDisplay}"
        ƒ-hts-in="|--htsIn, --hts"
        @-search-success="--searchResponse"
        @-next-success="--nextSearchResponse"
        @-next-rejected="--nextRejected"
        @-response="--responseReceived"
        @-response-error="--responseReceived, --responseError"
      ></furo-collection-agent>
    `;
  }
}

window.customElements.define('furo-ui5-data-reference-search', FuroUi5DataReferenceSearch);
