import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `reference-search-item`
 * Repeated item to display the search result set
 *
 * @summary representation of a result item
 * @customElement
 * @demo demo/reference-search-item.html
 * @appliesMixin FBP
 */
export class ReferenceSearchItem extends FBP(LitElement) {

    constructor() {
        super();
        this._item = {};
    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Description
             */
            myBool: {type: Boolean}
        };
    }

    injectItem(item) {
        this._item = item;
        this.requestUpdate();
    }

    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return css`
            :host {
                display: block;
            }

            :host([hover]) div {
                background-color: rgba(var(--primary-rgb), var(--state-hover));
                color: var(--primary);
            }

            :host(:hover) div {
                background-color: rgba(var(--primary-rgb), var(--state-selected-hover));
            }

            div {
                padding: var(--spacing-xs, 8px);
                cursor: pointer;
                box-sizing: border-box;
                transition: color var(--transition-duration, 200ms);
            }
        `
    }

    deselect() {
        this.removeAttribute("hover");

    }

    preselect() {
        this.setAttribute("hover", "");
        this.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
    }

    select() {
        /**
         * @event item-selected
         * Fired when item is selected
         * detail payload: item
         */
        let customEvent = new Event('item-selected', {composed: true, bubbles: true});
        customEvent.detail = this._item;
        this.dispatchEvent(customEvent)
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
        <div @-click="^^item-selected(_item)">
            ${this._item.data.display_name}
        </div>           
        `;
    }
}

window.customElements.define('reference-search-item', ReferenceSearchItem);
