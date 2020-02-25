import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Env, i18n} from "@furo/framework"
import {Theme} from "@furo/framework/theme"

import '@furo/fbp/flow-repeat.js';
import '@furo/data';
import '@furo/data-input';
import '@furo/data-ui/furo-data-table-toggle';


const tableHeaders = (fields) => html`${fields.map(f => html`<th class="header-cell" numeric="${f.ui.flags.includes('align-right')}" role="columnheader" scope="col">${f.meta.label}<furo-data-table-toggle sortable="${f.sortable}" field="${f.id}"></furo-data-table-toggle></th>`)}`;
const tdWRepeat = (fields) => html`
  ${fields.map(f => html`
    ${f.meta.repeated
    ? html`<td class="table-cell" numeric="${f.ui.flags.includes('align-right')}">
        <template is="flow-repeat" ƒ-inject-items="${f.wire}" internal-wire="--internal">
        <div ƒ-.inner-text="--internal(*.item.display_name)"></div>
        </template>
`
    : html`<td class="table-cell" numeric="${f.ui.flags.includes('align-right')}" ƒ-.inner-text="${f.wire}"></td>`
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
        this.singleSelection = false;
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
            if (r.target.type === 'checkbox') {
                if (r.target.checked) {
                    if (r.target.parentElement.parentElement.nodeName === 'TH') {
                        // bulk update, check all rows
                        let rows = this.shadowRoot.querySelectorAll('tbody tr');
                        rows.forEach((elem) => {
                            elem.querySelector('input').checked = true;
                            this._checkedRows = this._collection.rawEntity.entities;
                        });
                    } else {
                        this._checkedRows.push(this._collection.rawEntity.entities[this._selectedIndex]);
                    }
                } else {
                    if (r.target.parentElement.parentElement.nodeName === 'TH') {
                        // bulk update, uncheck all rows
                        let rows = this.shadowRoot.querySelectorAll('tbody tr');
                        rows.forEach((elem) => {
                            elem.querySelector('input').checked = false;
                            this._checkedRows = [];
                        });
                    } else {
                        this._checkedRows.pop(this._collection.rawEntity.entities[this._selectedIndex]);
                    }
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
        this._FBPTraceWires();
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
            },
            /**
             * if True the single row selection mode is activated
             */
            singleSelection: {
                type: Boolean, attribute: "single-selection"
            }
        };
    }

    /**
     * Theme data or default style
     * @returns {*|CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FuroDataTable') || css`

            :host {
                display: block;
                height: 100%;
                background-color: var(--furo-data-table-background, var(--surface, transparent));
                color: var(--furo-data-table-on-background, var(--on-surface, black));
            }

            :host([hidden]) {
                display: none;
            }

            div.data-table {
                background-color: var(--surface, #fff);
                border-radius: 4px;
                border-width: 1px;
                border-style: solid;
                border-color: var(--separator, rgba(0, 0, 0, .12));
                -webkit-overflow-scrolling: touch;
                display: block;
                box-sizing: border-box;
                overflow-x: auto;
            }

            table {
                display: table;
                color: var(--on-surface);
                border-spacing: 2px;
                min-width: 100%;
                border: 0;
                white-space: nowrap;
                border-collapse: collapse;
                table-layout: fixed;
            }

            thead {
            }

            furo-data-table-toggle:hover {
                cursor: pointer;
            }

            tbody {
                -webkit-font-smoothing: antialiased;
                font-size: .875rem;
                line-height: 1.25rem;
                font-weight: 400;
                letter-spacing: .0178571429em;
                text-decoration: inherit;
                text-transform: inherit;
            }

            .header-row {
                background-color: inherit;
            }

            .header-cell {
                -webkit-font-smoothing: antialiased;
                font-size: .875rem;
                line-height: 1.375rem;
                font-weight: 500;
                letter-spacing: .0071428571em;
                text-decoration: inherit;
                text-transform: inherit;
                box-sizing: border-box;
                text-align: left;
                text-overflow: ellipsis;
                overflow: hidden;
                padding-right: 16px;
                padding-left: 16px;
                height: 56px;
            }

            .cell-checkbox {
                padding-left: var(--spacing-x, 12px);
            }

            .table-row {
                border-top-width: 1px;
                border-top-style: solid;
                border-top-color: rgba(0, 0, 0, .12);
            }

            .table-cell {
                -webkit-font-smoothing: antialiased;
                font-size: .875rem;
                line-height: 1.25rem;
                font-weight: 400;
                letter-spacing: .0178571429em;
                text-decoration: inherit;
                text-transform: inherit;
                box-sizing: border-box;
                text-overflow: ellipsis;
                overflow: hidden;
                padding-right: 16px;
                padding-left: 16px;
                height: 52px;
            }

            th[numeric=true], td[numeric=true] {
                text-align: right;
            }

            .table-row:hover {
                background-color: rgba(var(--primary-rgb), var(--state-hover));
            }

            .table-row[focused=true] {
                background-color: rgba(var(--primary-rgb), var(--state-focus));
            }

            .table-row[focused=true]:hover {
                background-color: rgba(var(--primary-rgb), var(--state-focused-hover));
            }

            .table-row[selected=true] {
                background-color: rgba(var(--primary-rgb), var(--state-selected));
            }

            .table-row[selected=true][focused=true] {
                background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
            }

            .table-row[selected=true]:hover {
                background-color: rgba(var(--primary-rgb), var(--state-selected-hover));
            }

            input[type=checkbox] {
                top: 0px;
                right: 0px;
                left: 0px;
                width: 40px;
                height: 40px;
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
            sortableCols.forEach((f) => {
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
            field.ui = {flags: []};
            field.meta = this._specs[this._type].fields[c].meta || {};
            field.contraints = this._specs[this._type].fields[c].contraints || {};
            if (this._specs[this._type].fields[c].__ui && this._specs[this._type].fields[c].__ui.flags) {
                field.ui.flags = this._specs[this._type].fields[c].__ui.flags;
            }
            field.id = c;

            this.cols.push(field);
        }
        this.requestUpdate();

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
        <div class="data-table">
            <table @-input="--rowCheckChanged(*)">
                <thead>
                <tr class=header-row">
                    <th class="header-cell" role="columnheader" scope="col">
                        <div class="cell-checkbox">
                            <input type="checkbox" tabindex="-1">
                        </div>
                    </th>
                    ${tableHeaders(this.cols)}
                </tr>

                </thead>
                <tbody class="">
                <template is="flow-repeat" ƒ-inject-items="--collectionData" internal-wire="--internal">
                        <tr class="table-row" aria-selected="false">
                            <td class="table-cell cell--checkbox">
                                <div class="cell-checkbox">
                                    <input type="checkbox" tabindex="-1">
                                </div>
                            </td>
                            ${tdWRepeat(this.cols)}                     
                        </tr>
                    </template>
                
                </tbody>
            </table>
        </div>`;
    }

    /**
     * Integration of furo-navigation-pad keys
     * @param key
     */
    triggerNavigation(key){
        switch (key) {
            case "ArrowDown":
                this.next();
                break;
            case "ArrowUp":
                this.prev();
                break;
            case "Enter":
                this.select();
                break;
            case "Home":
                this.first();
                break;
            case "End":
                this.last();
                break;
        }

    }
    /**
     * Triggers wire name --focus for internal use
     */
    focus() {
        this._focusRowByIndex(0);
        this._FBPTriggerWire('--focus');
    }

    /**
     * Focuses the first table row element
     */
    first() {
        this._focusRowByIndex(0);
    }

    /**
     * Focuses the first table row element
     */
    select() {
        let allTr = this.shadowRoot.querySelector('tbody').querySelectorAll('tr');
        let len = allTr.length;
        while (len--) {
            allTr[len].setAttribute('selected', false);
            allTr[len].setAttribute('focused', false);
            allTr[len].setAttribute('aria-selected', false);
        }

        allTr[this._selectedIndex].setAttribute("selected", true);
        allTr[this._selectedIndex].setAttribute("aria-selected", true);
        this.dispatchEvent(new CustomEvent('tablerow-selected', {
            detail: this._collection.rawEntity.entities[this._selectedIndex], bubbles: true, composed: true
        }));

    }

    /**
     * Focuses the last table row element
     */
    last() {
        this._focusRowByIndex(this._collection.rawEntity.entities.length - 1);
    }

    /**
     * Focuses previous table row element
     */
    prev() {
        if (this._selectedIndex >= 0) {
            this._focusRowByIndex(this._selectedIndex - 1);
        }
    }

    /**
     * Focuses next table row element
     */
    next() {
        let allTr = this.shadowRoot.querySelector('tbody').querySelectorAll('tr');
        if (allTr.length > this._selectedIndex) {
            this._focusRowByIndex(this._selectedIndex + 1);
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
            allTr[len].setAttribute('focused', false);
            allTr[len].setAttribute('aria-selected', false);
        }

        if (e.target.parentElement.rowIndex >= 0) {
            e.target.parentElement.setAttribute('selected', true);
            e.target.parentElement.setAttribute('aria-selected', true);
            this._selectedIndex = e.target.parentElement.rowIndex - 1;

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
     * Comfort function to focus a specific table row
     * by index
     * @param idx
     * @private
     */
    _focusRowByIndex(idx) {
        let allTr = this.shadowRoot.querySelector('tbody').querySelectorAll('tr');

        if (idx >= 0 && allTr.length > 1 && idx < allTr.length) {

            let len = allTr.length;
            while (len--) {
                allTr[len].setAttribute('focused', false);
            }
            allTr[idx].setAttribute('focused', true);
            allTr[idx].querySelector('input').focus();
            this._selectedIndex = idx;
        }
    }

}

window.customElements.define('furo-data-table', FuroDataTable);
