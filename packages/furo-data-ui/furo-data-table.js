import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Env, i18n} from "@furo/framework"
import {Theme} from "@furo/framework/theme"

import '@furo/fbp/flow-repeat.js';
import '@furo/data';
import '@furo/data-input';
import '@furo/data-ui/furo-data-table-toggle';


const tableHeaders = (fields) => html`${fields.map(f => html`<th class="head"><div class="cell">${f.meta.label}<furo-data-table-toggle sortable="${f.sortable}" field="${f.id}"></furo-data-table-toggle></div></th>`)}`;
const tdWRepeat = (fields) => html`
  ${fields.map(f => html`
    ${f.meta.repeated
    ? html`<td><div class="cell">
        <template is="flow-repeat" ƒ-inject-items="${f.wire}" internal-wire="--internal">
        <div ƒ-.inner-text="--internal(*.item.display_name)"></div>
        </template>
`
    : html`<td><div class="cell" ƒ-.inner-text="${f.wire}"></div></td>`
}
  `)}
  
`;


/**
 * `furo-data-table`
 * Read only data table based on the response type from the rest api spec.
 *
 * ```
 * <furo-data-table type="project.Project"
 *                  ƒ-bind-data="--data"></furo-data-table>
 * ```
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--furo-data-table-background` | Background color of the element | --surface | transparent
 * `--furo-data-table-on-background` | Color of the element | --on-surface | black
 * `--furo-data-table-select-background` | Background color of the focused table row element | --accent-light | lightgrey
 * `--furo-data-table-select-on-background` | Color of the focused table row element | --on-accent | black
 *
 * Configuration:
 * Attribute: hide-header | hides the table header row
 *
 * Tags: data-ui
 *
 * @summary datatable
 * @demo demo-furo-data-table Simple data table demo
 * @customElement
 * @mixes FBP
 */
class FuroDataTable extends FBP(LitElement) {

    /**
     * Fired when a table row has been selected.
     * Payload: Entity
     * @event tablerow-selected
     */

    /**
     * Fired when inject data has successfully finished.
     * Payload: this
     * @event data-loaded
     */

    /**
     * Fired when context menu is requested
     * Payload: entity
     * @event contextmenu-requested
     */

    /**
     * Fired when a key was pressed
     * Payload: KeyboardEvent
     * @event key-pressed
     */

    /**
     * Fired when a row is checked or unchecked
     * Payload: Array of raw Entities
     * @event checkstate-changed
     */
    constructor() {
        super();
        this._specs = Env.api.specs;
        this.type = '';
        this.fields = '';
        this.sortableFields = '';
        /**
         * Column meta information
         * used to render all the column stuff
         * @type {Array}
         */
        this.cols = [];
        this._selectedIndex = -1;
        this.hideHeader = false;
        this._checkedRows = [];
        this._collection = [];

        this._FBPAddWireHook("--rowCheckChanged", (r) => {
            if (r.composedPath()[0].nodeName === 'INPUT') {
                if (r.composedPath()[0].checked) {
                    this._checkedRows.push(this._collection.rawEntity.entities[this._selectedIndex]);
                } else {
                    this._checkedRows.pop(this._collection.rawEntity.entities[this._selectedIndex]);
                }
            }
            this.dispatchEvent(new CustomEvent('checkstate-changed', {
                detail: this._checkedRows, bubbles: true, composed: true
            }));
        });

    }

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
    }

    static get properties() {
        return {
            /**
             * Typedefinition of row items
             * REST SPEC Type
             * e.g. task.Task.[type]
             */
            type: {
                type: String, attribute: "type"
            },
            /**
             * list of fields which columns should be displayed
             * comma separated field list
             */
            fields: {
                type: String,
                attribute: "fields",
                reflect: true
            },
            /**
             * list of sortable fields
             * comma separated field list
             */
            sortableFields: {
                type: String,
                attribute: "sortable-fields",
                reflect: true

            },
            /**
             * Flag to show table header information
             * TRUE => shows header
             */
            hideHeader: {
                type: Boolean, attribute: "hide-header"
            }
        };
    }

    /**
     * Theme data or default style
     * @returns {*|CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`

            :host {
                display: block;
                height: 100%;
                background-color: var(--furo-data-table-background, var(--surface, transparent));
                color: var(--furo-data-table-on-background, var(--on-surface, black));
            }

            :host([hidden]) {
                display: none;
            }

            :host([hide-header]) thead {
                display: none;
            }

            table {
                table-layout: fixed;
                display: block;
                width: 0;
                border-spacing: 0;
                padding: 0;
                margin-bottom: var(--spacing, 8px);
            }

            th {
                color: var(--primary, #035CA1);
                white-space: nowrap;
                font-weight: 500;
                padding-left: 0;
                -webkit-font-smoothing: antialiased;
                text-align: left;
                letter-spacing: 1.5px;
                text-transform: uppercase;
            }

            tr {
                outline: none;
                line-height: 40px;
                position: relative;
            }

            tr:nth-child(even) {
                /** add here zebra style */
            }

            tbody tr:hover {
                box-shadow: inset 1px 0 0 var(--furo-data-table-select-background, var(--primary, lightgrey)), inset -1px 0 0 var(--furo-data-table-select-background, var(--primary, lightgrey)), 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
                z-index: 1;
                background-color: rgba(var(--primary-rgb), var(--state-selected-hover));
            }

            td {
                vertical-align: baseline;
            }

            .head:hover {
                cursor: pointer;
            }

            .cell {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                padding-right: var(--spacing, 12px);
            }

            .fx {
                display: block;
                width: var(--spacing, 12px);
                padding-right: var(--spacing, 12px);
                padding-left: var(--spacing, 12px);
                outline: none;
            }

            tbody tr[selected=true] {
                background-color: rgba(var(--furo-data-table-select-background, var(--primary-rgb)), var(--state-hover));
                color: var(--furo-data-table-select-on-background, var(--primary));
            }

            input[type=checkbox] {
                opacity: .48;
            }

            *[hidden] {
                display: none;
            }

            .table-container {
                overflow-x: auto;
            }

        `
    }

    set type(type) {
        if (this._type) {
            this._checkType(type);
        }
        this._type = type;
    }

    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
        if (newval !== oldval) {
            switch (name) {
                case 'fields': {
                    this._init(newval);
                    break;
                }
                case 'sortable-fields': {
                    this._applySortableFields(newval);
                    break;
                }
            }
        }
    }

    /**
     * SPEC Type checker
     * Builds the column Array for the inner template
     * @param type
     * @private
     */
    _checkType(type) {

        if (this._specs[type] === undefined) {
            /**
             * @event spec-error
             * Fired when spec could not be loaded
             * detail payload: {string} spec name
             */
            let customEvent = new Event('spec-error', {composed: true, bubbles: true});
            customEvent.detail = type;
            setTimeout(() => {

                this.dispatchEvent(customEvent);
                console.warn('spec-error: Could not find specification of type: ' + type);
            }, 0);
        }


    }

    /**
     * Prepare columns form attribute fields
     * @param fields
     * @private
     */
    _init(fields) {
        if (fields && fields.length) {
            let cols = fields.replace(/ /g, "").split(',');
            if (cols.length > 0) {
                this.cols = [];
                cols.forEach(c => {
                    this._internalAddColumn(c);
                });
            }
        }
    }

    /**
     * parses the attribute sortable-fields
     * and creates an internal array of sortable fields
     * @param fields
     * @private
     */
    _applySortableFields(fields) {
        if (fields && fields.length) {
            let sortableCols = fields.replace(/ /g, "").split(',');
            sortableCols.forEach((f)=>{
                let column = this.cols.filter(obj => {
                    return obj.id === f;
                });
                column[0].sortable = true;
            });
        }
    }

    /**
     * Internal addColumn
     */
    _internalAddColumn(c) {
        if (this._specs[this._type].fields[c]) {

            let field = {};
            if (this._specs[this._specs[this._type].fields[c].type] === undefined) {
                field.wire = '--internal(*.item.data.' + c + ')';
            } else {
                // append .display_name if the field type is a registered  type in data_environment
                field.wire = '--internal(*.item.data.' + c + '.display_name)';
            }
            // Special treatment for repeated fields
            if (this._specs[this._type].fields[c].meta && this._specs[this._type].fields[c].meta.repeated) {
                field.wire = '--internal(*.item.data.' + c + '.repeats)';
            }
            field.sortable = false;
            field.meta = this._specs[this._type].fields[c].meta || {};
            field.contraints = this._specs[this._type].fields[c].contraints || {};
            field.id = c;

            this.cols.push(field);
        }
        this.requestUpdate();

    }

    /**
     * add new column
     */
    addColumn(field) {
        this.fields = this.fields.concat(',' + field);
        this._init(this.fields);
    }

    /**
     * remove column by name
     * e.g. removeColumn('id');
     * @param field
     */
    removeColumn(field) {
        this.fields = this.fields.replace(',' + field, '');
        this.cols = [];
        this._init(this.fields);
    }

    /**
     * Event listening and type check
     * @private
     * @param changedProps
     */
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);

        // queueing
        if (this._type) {
            this._checkType(this._type);
        }
        this.shadowRoot.querySelector('tbody').onclick = (e) => {
            this._selectRow(e);
        };
        this.shadowRoot.querySelector('tbody').onkeydown = (e) => {
            this._navigate(e);
        };
        this.shadowRoot.querySelector('tbody').onkeypress = (e) => {
            this.dispatchEvent(new CustomEvent('key-pressed', {
                detail: e, bubbles: false, composed: true
            }));
        };
        this.shadowRoot.querySelector('tbody').oncontextmenu = (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('contextmenu-requested', {
                detail: this._collection.rawEntity.entities[e.target.parentElement.rowIndex],
                bubbles: false,
                composed: true
            }));
        };

    }

    /**
     * Triggers wire name --focus for internal use
     */
    focus() {
        this._selectRowByIndex(0);
        this._FBPTriggerWire('--focus');
    }

    /**
     * Binds data-object to data-table
     * @param {CollectionNode} collectionNode
     */
    bindData(collectionNode) {
        this._collection = collectionNode;
        /**
         * new data arrived from CollectionNode
         */
        this._collection.addEventListener('data-injected', (data) => {
            this.data = data.detail.entities.repeats;
            this._FBPTriggerWire('--collectionData', data.detail.entities.repeats);
        });

        this.dispatchEvent(new CustomEvent('data-loaded', {
            detail: this, bubbles: true, composed: true
        }));

    }

    /**
     * Template rendering
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        //language=HTML
        return html`
        <div class="table-container">
            <table @-input="--rowCheckChanged(*)">
                <thead>
                    <tr>
                        <th class="fx"></th>
                        ${tableHeaders(this.cols)}
                    </tr>
                </thead>
                <tbody>
                    <template is="flow-repeat" ƒ-inject-items="--collectionData" internal-wire="--internal">
                        <tr tabindex="0" draggable="true">
                            <td class="fx">
                                <div><input type="checkbox"></div>
                            </td>
                            ${tdWRepeat(this.cols)}
                             <span hidden></span>                     
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>`;
    }

    /**
     * Handles key navigation
     * @param e
     * @private
     */
    _navigate(e) {

        let allTr = this.shadowRoot.querySelector('tbody').querySelectorAll('tr');

        switch (e.key) {
            case 'ArrowUp':
                if (this._selectedIndex >= 0) {
                    this._selectRowByIndex(this._selectedIndex - 1);
                }
                break;
            case 'ArrowDown':
                if (allTr.length > this._selectedIndex) {
                    this._selectRowByIndex(this._selectedIndex + 1);
                }
                break;
            case 'Enter':
                this.dispatchEvent(new CustomEvent('tablerow-selected', {
                    detail: this._collection.rawEntity.entities[this._selectedIndex], bubbles: true, composed: true
                }));
                break;
        }

    }

    /**
     * Handles table row select
     * @private
     * @param e
     */
    _selectRow(e) {
        let allTr = this.shadowRoot.querySelector('tbody').querySelectorAll('tr');
        let len = allTr.length;
        while (len--) {
            allTr[len].setAttribute('selected', false);
        }

        if (e.target.parentElement.parentNode.rowIndex >= 0) {
            e.target.parentElement.parentNode.setAttribute('selected', true);
            this._selectedIndex = e.target.parentElement.parentNode.rowIndex - 1;

            if (e.type === 'click') {
                this.dispatchEvent(new CustomEvent('tablerow-selected', {
                    detail: this._collection.rawEntity.entities[this._selectedIndex], bubbles: true, composed: true
                }));
            }
        } else if (e.target.nodeName === 'INPUT' && e.target.parentNode.parentElement.parentElement.rowIndex >= 0) {
            this._selectedIndex = e.target.parentNode.parentElement.parentElement.rowIndex - 1;
        }

    }

    /**
     * Comfort function to select a specific table row
     * by index
     * @param idx
     * @private
     */
    _selectRowByIndex(idx) {
        let allTr = this.shadowRoot.querySelector('tbody').querySelectorAll('tr');

        if (idx >= 0 && allTr.length > 1 && idx < allTr.length) {

            let len = allTr.length;
            while (len--) {
                allTr[len].setAttribute('selected', false);
            }
            allTr[idx].setAttribute('selected', true);
            this._selectedIndex = idx;
        }
    }

}

window.customElements.define('furo-data-table', FuroDataTable);
