import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat";
import "@furo/input/furo-search-input";
import "./reference-search-item";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-reference-search`
 *  Sucht eine Referenz
 *  bounded data should be furo-reference
 *
 *```
 * <!--  furo-data-object will eine Referenz auflösen -->
 * <furo-data-object type="task.Task" @-object-ready="--entityReady"></furo-data-object>
 *
 *<furo-horizontal-flex>
 *    <!--  furo-data-reference-search kann eine Referenz die entity-objekt besitzt darstellen.
 *    Bei einer Texteingabe wird ^^search mit dem eingegebenen Text gesucht. Diesr geht via wire --term an den furo-collection-agent.
 *    Wenn furo-collection-agent eine Kollektion zurückliefert, klappt die Auswahl auf. -->
 *    <furo-data-reference-search autofocus  flex ƒ-bind-data="--entityReady(*.fields.ref)" @-search="--term" ƒ-collection-in="--refCol"></furo-data-reference-search>
 *
 *    <furo-data-reference-search  flex ƒ-bind-data="--entityReady(*.fields.ref)" min-term-length="2" @-search="--term" ƒ-collection-in="--refCol"></furo-data-reference-search>
 *
 *</furo-horizontal-flex>
 *
 *<!-- Der furo-collection-agent erhält die hts von ref.value, wenn ein term eingegeben wurde beginnt dieser zu suchen.
 *Die Resultate werden an furo-data-reference-search zurück gegeben. -->
 *<furo-collection-agent service="tasks" ƒ-search="--term" ƒ-hts-in="--entityReady(*.fields.ref._value)" @-response="--refCol"></furo-collection-agent>
 *
 * ```
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property                                | Description | Default  | Fallback
 * -----------------------------------------------|-------------|----------|----------
 * `--furo-data-reference-search-list-background` | Background color of result list | --surface | #ffffff;
 * `--reference-search-no-result-hint` | color of hint when no result found | --accent | #ddb13d;
 *
 * @summary shortdescription
 * @customElement
 * @demo demo-furo-data-reference-search
 * @demo demo-furo-data-reference-search-no-result
 * @appliesMixin FBP
 */
class FuroDataReferenceSearch extends FBP(LitElement) {

    constructor() {
        super();
        this._minTermLength = 0;
        this.valueField = "id";
        this.displayField = "display_name";
        this._noResultHint = "no result found";
    }


    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
        // check initial overrides
        CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
    }


    _init() {

        this.addEventListener("searchInput", (e) => {
            // by valid input reset meta and constraints
            CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
            this._searchTerm = e.detail;

            if (!this.searchOnEnterOnly) {
                this._fireSearchEvent();
            }
        });


        this._FBPAddWireHook("--itemSelected", (item) => {

            this.field.id._value = item.data[this.valueField];
            this.field.display_name._value = item.data[this.displayField];
            this._updateField();
            this._closeList();
        });

        /**
         * listen to keyboard events
         */
        this.addEventListener("keydown", (event) => {
            let key = event.key || event.keyCode;

            if (key === 'Escape' || key === 'Esc' || key === 27) {

                this._updateField();

                if (this._listIsOpen) {
                    // close list if open and  then clear search
                    event.preventDefault();
                }
                this._closeList();
                if (this._searchTerm === "") {
                    event.preventDefault();
                    // re set display_name

                }
            }

            // keyboard navigation
            if (this._listIsOpen) {
                if (key === "Enter") {
                    event.preventDefault();
                    this._FBPTriggerWire("--enterPressedForSelect");
                }
                if (key === "ArrowDown") {
                    event.preventDefault();
                    this._FBPTriggerWire("--arrowDownPressed");
                }
                if (key === "ArrowUp") {
                    event.preventDefault();
                    this._FBPTriggerWire("--arrowUpPressed");
                }
            } else {
                // list is closed
                if (key === "ArrowDown") {
                  if (this._hasCollection) {
                    this._showList();
                  }
                }
                if (key === "Enter") {
                    if (this.searchOnEnterOnly) {
                        event.preventDefault();
                        this._fireSearchEvent();
                    }
                }
            }
        });


        // lock blur for slow clickers
        this.addEventListener("mousedown", (event) => {
            this._lockBlur = true;
        });
        // unlock after long click
        this.addEventListener("mouseup", (event) => {
            this._lockBlur = false;
        });

        // reinit binded value on cleared
        this._FBPAddWireHook("--cleared", (item) => {
            this._clear();
        });

        // close list on blur
        this._FBPAddWireHook("--blured", (item) => {
            this._focused = false;
            if (!this._lockBlur) {
                this._closeList();
            }
        });

        // opens the list on focus
        this._FBPAddWireHook("--focused", (item) => {
            this._focused = true;
            if (this._hasCollection) {
                this._showList();
            }
        });

        this.requestUpdate();

    }


    _fireSearchEvent() {

        if (this._searchTerm && this._searchTerm.length >= this._minTermLength) {
            /**
             * @event search
             * Fired when term is entered and bigger then min-term-length
             * detail payload: {String} term
             */
            let customEvent = new Event('search', {composed: true, bubbles: true});
            customEvent.detail = this._searchTerm;
            this.dispatchEvent(customEvent);
        }
    }

    _showList() {
      let arrCollection = this._collection;
      if(arrCollection && arrCollection.length > 0) {
        this._listIsOpen = true;
        this.setAttribute("show-list", "");
        let index = 0;

        for (let i = 0; i < arrCollection.length; i++) {

          if (arrCollection[i].data && arrCollection[i].data[this.valueField] == this.field.id._value) {
            index = i;
            break;
          }
        }
        this._FBPTriggerWire("--listOpened", index);

      }
      // trigger wire to select item
    }

    _closeList() {
        this._listIsOpen = false;
        this.removeAttribute("show-list");
    }

    _clear(){
      this._clearNoResultHint();

      this.field.reinit();
        this._updateField();
        this._closeList();

        /**
         * @event value-cleared
         * Fired when input value is cleared
         * detail payload: empty
         */
        let customEvent = new Event('value-cleared', {composed: true, bubbles: true});
        this.dispatchEvent(customEvent);
    }

    /**
     * Updater for the min => minlength attr
     * same problem like in pattern
     *
     * @param value
     */
    set _minTermLength(value) {
        this.__minTermLength = value;
        Helper.UpdateInputAttribute(this, "min", value);
    }

    get _minTermLength() {
        return this.__minTermLength;
    }

    /**
     * Updater for the label attr
     * @param value
     */
    set _label(value) {
        Helper.UpdateInputAttribute(this, "label", value);
    }

    /**
     * Updater for the hint attr
     * @param value
     */
    set _hint(value) {
        Helper.UpdateInputAttribute(this, "hint", value);
    }

    /**
     * Updater for the errortext attr
     * @param value
     */
    set errortext(value) {
        Helper.UpdateInputAttribute(this, "errortext", value);
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
            valueField: {type: String, attribute: 'value-field'},
            /**
             * the field name of reference-item which should be used as display which will be showed in the dropdown.
             */
            displayField: {
                type: String,
                attribute: "display-field"
            },
            /**
             * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
             *
             * If you bind a scalar, you dont need this attribute.
             */
            subfield: {
                type: String,
            },
            /**
             * this property saves the value of the displayField of selected item from collection
             */
            _displayName: {
                type: String
            },
            /**
             * mark if the collection is already loaded
             */
            _hasCollection: {
                type: Boolean
            },
            /**
             * the loaded collection
             */
            _collection: {
                type: Array
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
             * hint text when result not found by search
             */
            noResultHint: {
              type: String,
              attribute: 'no-result-hint'
            },
            /**
             * Overrides the required value from the **specs**.
             *
             * Use with caution, normally the specs defines this value.
             */
            required: {
                type: Boolean
            },
            /**
             * Overrides the hint text from the **specs**.
             *
             * Use with caution, normally the specs defines this value.
             */
            hint: {
                type: String,
            },
            /**
             * Overrides the min value from the **specs**.
             *
             * Use with caution, normally the specs defines this value.
             */
            minTermLength: {
                type: Number,
                attribute: 'min-term-length'
            },
            /**
             * Enable this, to avoid the automatic triggering of "search".
             *
             * The user have to press enter to trigger the search. Min-term-length is respected.
             */
            searchOnEnterOnly: {
                type: Boolean,
                attribute: 'search-on-enter-only'
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
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            disabled: {
                type: Boolean, reflect: true
            },

            /**
             * Set this attribute to autofocus the input field.
             */
            autofocus: {
                type: Boolean
            },
            /**
             * html input validity
             */
            valid: {
                type: Boolean,
                reflect: true
            },
            /**
             * The default style (md like) supports a condensed form. It is a little bit smaller then the default
             */
            condensed: {
                type: Boolean, reflect: true
            },
            /**
             * passes always float the label
             */
            float: {
                type: Boolean
            }

        };
    }

    /**
     * Bind a entity field to the search-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */
    bindData(fieldNode) {

        Helper.BindData(this, fieldNode);

        this._init();
    }

    _updateField() {

        if (this.field.display_name._value !== undefined) {
            this._FBPTriggerWire('--value', this.field.display_name._value);
        }

        this.requestUpdate();
    }

    collectionIn(collection) {

      if(collection && collection.entities) {

        this.shadowRoot.getElementById("input").removeAttribute("no-result");

        this._FBPTriggerWire("--listItemsIjnected", collection.entities);
        this._hasCollection = true;
        this._collection = collection.entities;

        if (this._focused) {
          this._showList();
        }
      }
      else {
        this.setAttribute("show-list", "");

        this._hasCollection = false;
        this._collection = [];
        this._closeList();
        this.shadowRoot.getElementById("input").setAttribute("no-result","");
        this._hint = this._noResultHint;
      }
    }

  /**
   * clear no result hint. reset hint to original value
   * @private
   */
  _clearNoResultHint() {
      this.shadowRoot.getElementById("input").removeAttribute("no-result");
      // reset hint to original value
      if(this.hint) {
        this._hint = this.hint;
      }
      else if(this.field._meta && this.field._meta.hint) {
        this._hint = this.field._meta.hint;
      }
      else {
        this._hint = "";
      }
    }

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`
            :host {
                display: inline-block;
                position: relative;
            }

            .list {
                position: absolute;
                top: 51px;
                left: 0;
                right: 0;
                overflow: auto;
                max-height: 300px;
                background-color: var(--furo-data-reference-search-list-background, var(--surface, #ffffff));
                border-radius: 4px;
                z-index: 1;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12),
                0 3px 1px -2px rgba(0, 0, 0, 0.2);
                display: none;
            }

            :host([show-list]) .list {
                display: block;
            }

            furo-search-input {
                width: 100%;
            }

            furo-search-input[no-result] {
                --input-hint-color: var(--reference-search-no-result-hint,var(--accent,  #ddb13d));
            }
        `
    }


    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
    <furo-search-input id="input"
      trailing-icon="search" 
      ?autofocus=${this.autofocus} 
      ?condensed=${this.condensed} 
      ƒ-set-value="--value"
      @-value-changed="^^searchInput"
      @-value-cleared="--cleared" 
      @-blur="--blured" 
      @-focus="--focused" 
      ƒ-focus="--focusReceived"></furo-search-input>
    <div class="list" @-item-selected="--itemSelected"   >
       
        <template is="flow-repeat" ƒ-inject-items="--listItemsIjnected" ƒ-select="--listOpened" ƒ-select-next-index="--arrowDownPressed" ƒ-select-previous-index="--arrowUpPressed" ƒ-trigger-selected="--enterPressedForSelect">
          <reference-search-item ƒ-.index="--index" ƒ-deselect="--itemDeSelected" ƒ-select="--trigger" ƒ-preselect="--itemSelected" ƒ-inject-item="--item"></reference-search-item>
        </template>
             
    </div>                                
`;
    }

}

window.customElements.define('furo-data-reference-search', FuroDataReferenceSearch);
