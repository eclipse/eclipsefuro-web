import { LitElement, html, css } from 'lit-element'
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js'
import { FBP } from '@furo/fbp'
import { Theme } from '@furo/framework'
import '@furo/fbp/src/flow-repeat'
import '@ui5/webcomponents/dist/List.js'
import './ui5-reference-search-item.js'

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
 *  * ### following labels of fat types are supported:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'pristine': data is not changed. it is pristine
 * - 'condensed': input has condensed display
 *
 * ### following attributes of fat types are supported:
 *
 * - 'placeholder': placeholder of the search field
 * - 'hint': input hint
 * - 'min_term_length': the minimum number of characters that use should to input to trigger the search
 * - 'no_result_hint': hint text when result not found by search
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 *
 *
 * ### following constrains are mapped into the attributes of the fat types and presence in payload:
 *
 * - 'required': is mapped to 'required' attribute
 *
 *
 * @summary furo ui5 data reference search
 * @customElement
 * @demo demo-furo-ui5-data-reference-search Basic Usage
 */
export class FuroUi5DataReferenceSearch extends FBP(LitElement) {
  constructor() {
    super()
    this.minTermLength = 0
    this.valueField = 'id'
    this.displayField = 'display_name'
    this.noResultHint = 'no result found'
    /**
     * the loaded collection
     */
    this._collection = []
    this.placeholder = ''

    this._initBinder()
  }

  /**
   * Bind an entity field to the search-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode)

    if (this.binder.fieldNode) {
      // update the value on input changes
      this.binder.fieldNode.addEventListener('field-value-changed', val => {
        // set flag empty on empty strings (for fat types)
        if (val.detail) {
          this.binder.deleteLabel('empty')
        } else {
          this.binder.addLabel('empty')
        }
        // if something was entered the field is not empty
        this.binder.deleteLabel('pristine')

        this._FBPTriggerWire('--listDeselectAll')

        this._updateField()
      })

      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine')
      } else {
        this.binder.deleteLabel('pristine')
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine')
      })

      this._updateField()
    }

    this._init()
  }

  _init() {
    this.requestUpdate()
  }

  _FBPReady() {
    super._FBPReady()
    this._registerListeners()
  }

  _registerListeners() {
    this._FBPAddWireHook('--input', e => {
      this._searchTerm = e.composedPath()[0].value

      if (!this.searchOnEnterOnly) {
        this._fireSearchEvent()
      }
    })

    // lock blur for slow clickers
    this.addEventListener('mousedown', () => {
      this._lockBlur = true
    })
    // unlock after long click
    this.addEventListener('mouseup', () => {
      this._lockBlur = false
    })

    // close list on blur
    this._FBPAddWireHook('--blured', () => {
      this._focused = false
      this.removeAttribute('busy')
      if (!this._lockBlur) {
        this._closeList()
      }
    })

    // opens the list on focus
    this._FBPAddWireHook('--focused', () => {
      this._focused = true
      if (this._hasCollection) {
        this._showList()
      }
    })

    this._FBPAddWireHook('--itemSelected', item => {
      this.binder.fieldNode.id._value = item.data[this.valueField]
      this.binder.fieldNode.display_name._value = item.data[this.displayField]
      this._updateField()
      this._closeList()
      /**
       * @event item-selected
       * Fired from inner element when item is selected
       * detail payload: {Object} item
       */
    })

    /**
     * listen to keyboard events
     */
    this.addEventListener('keydown', event => {
      const key = event.key || event.keyCode

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        this._updateField()

        if (this._listIsOpen) {
          // close list if open and  then clear search
          event.preventDefault()
        }
        this._closeList()
        if (this._searchTerm === '') {
          event.preventDefault()
          // re set display_name
        }
      }

      // keyboard navigation
      if (this._listIsOpen) {
        if (key === 'Enter') {
          event.preventDefault()
          this._FBPTriggerWire('--enterPressedForSelect')
        }
        if (key === 'ArrowDown') {
          event.preventDefault()
          this._FBPTriggerWire('--arrowDownPressed')
        }
        if (key === 'ArrowUp') {
          event.preventDefault()
          this._FBPTriggerWire('--arrowUpPressed')
        }
      } else {
        // list is closed
        if (key === 'ArrowDown') {
          if (this._hasCollection) {
            this._showList()
          }
        }
        if (key === 'Enter') {
          if (this.searchOnEnterOnly) {
            event.preventDefault()
            this._fireSearchEvent()
          }
        }
      }
    })
  }

  _updateField() {
    if (this.binder.fieldNode.display_name._value !== undefined) {
      this._FBPTriggerWire('--value', this.binder.fieldNode.display_name._value)
    }

    this.requestUpdate()
  }

  _closeList() {
    this._listIsOpen = false
    this.removeAttribute('show-list')
  }

  _fireSearchEvent() {
    if (this._searchTerm && this._searchTerm.length >= this.minTermLength) {
      this.setAttribute('busy', '')
      this._hasCollection = false
      this._collection = []
      this._closeList()

      /**
       * @event search
       * Fired when term is entered and bigger then min-term-length
       * detail payload: {String} term
       */
      const customEvent = new Event('search', { composed: true, bubbles: true })
      customEvent.detail = this._searchTerm
      this.dispatchEvent(customEvent)
    } else {
      /**
       * empty search term will dereference the fieldNode
       */
      this.binder.fieldNode[this.valueField].reset()
      if (this.binder.fieldNode[this.displayField]) {
        this.binder.fieldNode[this.displayField].reset();
      } else if (this.binder.fieldNode.display_name){
          this.binder.fieldNode.display_name.reset();
        }
    }
  }

  collectionIn(collection) {
    this.removeAttribute('busy')
    this._resetInputValueState()
    if (collection && collection.entities && collection.entities.length > 0) {
      // this.shadowRoot.getElementById('input').removeAttribute('no-result');
      this._hasCollection = true

      if (this.maxItemsToDisplay && collection.entities.length > this.maxItemsToDisplay) {
        // cut down the result size
        this._collection = collection.entities.slice(0, this.maxItemsToDisplay)
        if (this.maxResultsHint) {
          this.setAttribute('showmaxhint', '')
        }
      } else {
        this._collection = collection.entities
        this.removeAttribute('showmaxhint', '')
      }

      this._FBPTriggerWire('--listItemsInjected', this._collection)

      if (this._focused) {
        this._showList()
      }
    } else {
      this.setAttribute('show-list', '')

      this._hasCollection = false
      this._collection = []
      this._closeList()
      this.shadowRoot.getElementById('input').setAttribute('value-state', 'Information')

      const information = document.createElement('div')
      information.slot = 'valueStateMessage'
      information.innerText = this.noResultHint
      this.shadowRoot.getElementById('input').appendChild(information)
    }
  }

  _resetInputValueState() {
    this.shadowRoot.getElementById('input').removeAttribute('value-state')

    this.shadowRoot
      .getElementById('input')
      .querySelectorAll('div')
      .forEach(e => {
        e.remove()
      })
  }

  _showList() {
    this.removeAttribute('busy')
    if (this._collection && this._collection.length > 0) {
      this._listIsOpen = true
      this.setAttribute('show-list', '')
      let index
      // find index to preselect item in the opened list
      for (let i = 0; i < this._collection.length; i += 1) {
        if (
          this._collection[i].data &&
          this._collection[i].data[this.valueField] === this.binder.fieldNode.id._value
        ) {
          index = i
          break
        }
      }
      if (index !== undefined) {
        this._FBPTriggerWire('--listOpened', index)
      }
    }
    // trigger wire to select item
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this)

    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label',
      hint: 'hint',
      placeholder: 'placehoder',
      min_term_length: 'min-term-length',
      no_result_hint: 'no-result-hint',
      errortext: 'errortext',
      'error-msg': 'errortext',
    }

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      condensed: 'condensed',
    }

    this.binder.fatAttributesToConstraintsMappings = {
      'min-term-length': 'value._constraints.min_term_length.is', // for the fieldnode constraint
      'no-result-hint': 'value._constraints.no_result_hint', // for the fieldnode constraint message
    }

    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    }

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides()

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value'

    // set flag empty on emptfuroy strings (for fat types)
  }

  /**
   * reset reference search
   */
  reset() {
    this._collection = []
    this._FBPTriggerWire('--value', '')
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * the field name of reference-item which should be used to asign to value (likes id) field of the the data entity object
       */
      valueField: {
        type: String,
        attribute: 'value-field',
        reflect: true,
      },
      /**
       * the field name of reference-item which should be used as display which will be showed in the dropdown.
       */
      displayField: {
        type: String,
        attribute: 'display-field',
        reflex: true,
      },
      /**
       * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */
      subfield: {
        type: String,
        reflect: true,
      },
      /**
       * this property saves the value of the displayField of selected item from collection
       */
      _displayName: {
        type: String,
      },
      /**
       * mark if the collection is already loaded
       */
      _hasCollection: {
        type: Boolean,
      },
      /**
       * the placeholder of the search input field
       */
      placeholder: {
        type: String,
        reflect: true,
      },
      /**
       * hint text when result not found by search
       */
      noResultHint: {
        type: String,
        attribute: 'no-result-hint',
        reflect: true,
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
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * the minimal length of search term to trigger the search event.
       *
       * Use with caution, normally the specs defines this value.
       */
      minTermLength: {
        type: Number,
        attribute: 'min-term-length',
        reflect: true,
      },
      /**
       * The maximal number of items to display. If the collection contains more data then then this value,
       * the **max-results-hint** will be displayed at the bottom of the list.
       */
      maxItemsToDisplay: {
        type: Number,
        attribute: 'max-items-to-display',
        reflect: true,
      },
      /**
       * hint text to display when the result set is bigger then  **maxItemsToDisplay**.
       */
      maxResultsHint: {
        type: String,
        attribute: 'max-results-hint',
        reflect: true,
      },
      /**
       * Enable this, to avoid the automatic triggering of "search".
       *
       * The user have to press enter to trigger the search. Min-term-length is respected.
       */
      searchOnEnterOnly: {
        type: Boolean,
        attribute: 'search-on-enter-only',
        reflect: true,
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this.binder.fieldNodecannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * passes always float the label
       */
      float: {
        type: Boolean,
        reflect: true,
      },
    }
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5DataReferenceSearch') ||
      css`
        :host {
          display: inline-block;
          position: relative;
        }

        .list,
        .loading {
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

        :host([showmaxhint]) .maxresulthint {
          display: block;
        }

        .maxresulthint {
          display: none;
          padding-top: 0;
        }

        :host([busy]) .loading {
          display: block;
        }

        .loading {
          display: none;
          width: inherit;
        }

        ui5-input,
        ui5-list {
          width: inherit;
        }
      `
    )
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
        ?required=${this.required}
        ?disabled=${this.readonly || this.disabled}
        ƒ-.value="--value"
        @-input="--input(*)"
        @-blur="--blured"
        @-focus="--focused"
        @-click="--focused"
        placeholder="${this.placeholder}"
      >
        <ui5-icon slot="icon" name="search" @-click="^^trailing-icon-clicked"></ui5-icon>
      </ui5-input>

      <ui5-list class="loading" header-text="" busy></ui5-list>

      <ui5-list mode="SingleSelect" class="list" @-item-selected="--itemSelected">
        <template
          is="flow-repeat"
          ƒ-inject-items="--listItemsInjected"
          ƒ-select="--listOpened"
          ƒ-deselect-all="--listDeselectAll"
          ƒ-select-next-index="--arrowDownPressed"
          ƒ-select-previous-index="--arrowUpPressed"
          ƒ-trigger-selected="--enterPressedForSelect"
        >
          <ui5-reference-search-item
            display-field="${this.displayField}"
            ƒ-deselect="--itemDeSelected"
            ƒ-select="--trigger"
            ƒ-preselect="--itemSelected"
            ƒ-inject-item="--item"
          ></ui5-reference-search-item>
        </template>
        <ui5-li-groupheader class="maxresulthint">${this.maxResultsHint}</ui5-li-groupheader>
      </ui5-list>
    `
  }
}

window.customElements.define('furo-ui5-data-reference-search', FuroUi5DataReferenceSearch)
