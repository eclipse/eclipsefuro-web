import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Env, i18n} from "@furo/framework"
import {Theme} from "@furo/framework/theme"

import '@furo/fbp/flow-repeat.js';


const tableHeaders = (fields) => html`${fields.map(f => html`<th class="head" row-width="${f.meta.datatable.row_width}"><div class="bog">${f.meta.label}</div></th>`)}`;
const tableDetails = (fields) => html`${fields.map(f => html`<td row-width="${f.meta.datatable.row_width}"><div class="bog" ƒ-.inner-text="${f.name}"></div></td>`)}`;

/**
 * `furo-data-table`
 * Read only data table based on the response type from the rest api spec.
 *
 * ```
 * <furo-data-table ƒ-bind-data="--data" type="vnd.com.abc" @-tablerow-selected="--rowSelected" @-checkstate-changed="--checkStateChanged"></furo-data-table>
 * ```
 *
 * Tags: data-ui
 *
 * @summary datatable
 * @demo demo/index.html
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
        this.cols = [];
        this._selectedIndex = -1;
        this.hideHeader = false;
        this._checkedRows = [];
        this._collection = [];

        this._FBPAddWireHook("--rowCheckChanged", (r) => {
            if (r.path[0].nodeName === 'INPUT') {
                if (r.path[0].checked) {
                    this._checkedRows.push(this._collection.data[this._selectedIndex]);
                } else {
                    this._checkedRows.pop(this._collection.data[this._selectedIndex]);
                }
            }
            this.dispatchEvent(new CustomEvent('checkstate-changed', {
                detail: this._checkedRows, bubbles: true, composed: true
            }));
        });

    }

    static get properties() {
        return {
            /**
             * Typedefinition of incoming collection items
             * REST SPEC Type
             * e.g. vnd.com.abc.[type]
             */
            type: {
                type: String, attribute: "type"
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
            }

            :host([hidden]) {
                display: none;
            }

            :host([hide-header]) thead {
                display: none;
            }

            table {
                table-layout: fixed;
                width: 100%;
                border-spacing: 0;
                padding: 0;
                margin-bottom: var(--gap-size, 8px);
            }

            tbody, thead {
                display: table;
            }

            th {
                background-color: var(--on-primary, white);
                color: var(--primary-color, #035CA1);
                white-space: nowrap;
                font-weight: bold;
            }

            tr {
                outline: none;
                padding-bottom: 10px;
                padding-top: 10px;
                -webkit-box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
                box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                position: relative;
            }

            tbody tr:hover {
                box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
                z-index: 1;
            }

            td, th {
                padding-left: 0;
                padding-right: var(--gap-size, 8px);
                -webkit-font-smoothing: antialiased;
                font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
                font-size: .875rem;
                letter-spacing: .2px;
                text-align: left;

            }

            td[row-width=width-xs], th[row-width=width-xs] {
                width: var(--spacing-xs, 8px);
            }

            td[row-width=width-s], th[row-width=width-s] {
                width: var(--spacing-s, 24px);
            }

            td[row-width=width-m], th[row-width=width-m] {
                width: var(--spacing-m, 72px);
            }

            td[row-width=width-l], th[row-width=width-l] {
                width: var(--spacing-l, 96px);
            }

            td[row-width=width-xl], th[row-width=width-xl] {
                width: var(--spacing-xl, 120px);
            }

            .bog {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .fx {
                display: block;
                width: var(--gap-size, 12px);
                outline: none;
            }

            .ri {
                width: 2px;
                line-height: 20px;
                padding-right: 4px;
            }

            tbody tr[selected=true] .ri:before {
                background-color: var(--primary-color, #4d90f0);
                content: '';
                display: block;
                height: 100%;
                position: absolute;
                top: 0;
                width: 2px;
            }

            input[type=checkbox] {
                opacity: .48;
            }

            *[hidden] {
                display: none;
            }

        `
    }

    set type(type) {
        if (this._type) {
            this._checkType(type);
        }
        this._type = type;
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

        for (const key in this._specs[this._type].fields) {
            //optional check for properties from prototype chain
            if (this._specs[this._type].fields.hasOwnProperty(key)) {
                let field = {};
                if (this._specs[this._type].fields[key].type.startsWith('vnd.')) {
                    field.name = '--entity(*.fields.' + key + '.display_name)';
                } else {
                    field.name = '--entity(*.fields.' + key + ')';
                }
                field.meta = this._specs[this._type].fields[key].meta || {datatable: {row_width: "width-m"}};
                if (!field.meta.datatable) {
                    field.meta.datatable = {row_width: "width-m"};
                }
                /**
                 * Internationalisation if possible
                 * @type {*|{}}
                 */
                field.meta.label = i18n.t(field.meta.label);

                field.contraints = this._specs[this._type].fields[key].contraints || {};
                field.id = key;

                this.cols.push(field);
            }
        }
        this.requestUpdate();

    }

    /**
     * Event listening and type check
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
                detail: this._collection.data[e.target.parentElement.rowIndex], bubbles: false, composed: true
            }));
        };

    }

    focus() {
        this._selectRowByIndex(0);
        this._FBPTriggerWire('--focus');
    }

    /**
     * Binds collection-object to data-table
     * @param {CollectionNode} collectionNode
     */
    bindData(collectionNode) {
        this._collection = collectionNode;

        /**
         * new data arrived from CollectionNode
         */
        this._collection.addEventListener('data-changed', (data) => {
            this._FBPTriggerWire('--collectionData', data.detail);
        });

        this.dispatchEvent(new CustomEvent('data-loaded', {
            detail: this, bubbles: true, composed: true
        }));

    }

    /**
     * Template rendering
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <table @-input="--rowCheckChanged(*)">
                <thead>
                <tr>
                    <th class="ri fx" tabindex="-1"></th>
                    <th class="fx"></th>
                    ${tableHeaders(this.cols)}
                </tr>
                </thead>
                <tbody>
                
                <template is="flow-repeat" ƒ-inject-items="--collectionData" internal-wire="--internal">
                    <tr tabindex="0" ƒ-focus="--entity" draggable="true">

                        <td class="ri fx" tabindex="-1"></td>
                        <td class="fx">
                            <div><input type="checkbox"></div>
                        </td>
                        
                        ${tableDetails(this.cols)}
                        
                        <span hidden></span>
                        <entity-object type="${this._type}" ƒ-inject-raw="--internal(*.item)"
                                       @-object-ready="--entity"></entity-object>

                    </tr>
                        
                </template>
                </tbody>
            </table>`;
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
                    detail: this._collection.data[this._selectedIndex], bubbles: true, composed: true
                }));
                break;
        }

    }

    /**
     * Handles table row select
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
                    detail: this._collection.data[this._selectedIndex], bubbles: true, composed: true
                }));
            }
        } else if (e.target.parentNode.parentElement.parentElement.rowIndex >= 0 && e.target.nodeName === 'INPUT') {
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
