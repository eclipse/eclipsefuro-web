import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat";
import "./furo-panel-coordinator-tab-item"
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"

/**
 * Tabs for open panels in panel coordinator
 * Tabs
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-mini-tabs.html
 * @appliesMixin FBP
 */
class FuroPanelCoordinatorTabs extends FBP(LitElement) {

    constructor() {
        super();
        this.tabindex = 0;

        this._hoverIndex = 0;

        // keyboard navigation
        this.addEventListener("keydown", (event) => {
            let key = event.key || event.keyCode;

            switch (key) {
                case "Enter":
                    event.preventDefault();

                    // open the hovered field
                    this._tabs[this._hoverIndex].selectItem();

                    break;


                case "ArrowLeft":
                    event.preventDefault();
                    if (this._hoverIndex === 0) {
                        // hover last item
                        this._hoverIndex = this._tabs.length - 1;
                    } else {
                        this._hoverIndex--;
                    }
                    this._tabs[this._hoverIndex].selectItem();

                    break;
                case "ArrowRight":
                    event.preventDefault();
                    if (this._hoverIndex === this._tabs.length - 1) {
                        // hover first item
                        this._hoverIndex = 0;
                    } else {
                        this._hoverIndex++;
                    }

                    this._tabs[this._hoverIndex].selectItem();

                    break;
                case"Escape":
                    event.stopPropagation();
                    event.preventDefault();
                    this._escape(event);

                    break;

            }

        });

        // keyboard navigation
        this.addEventListener("keyup", (event) => {
            let key = event.key || event.keyCode;
            switch (key) {
                case"Escape":
                    //safari :-((
                    event.stopPropagation();
                    event.preventDefault();
                    break;
            }});
        // keyboard navigation
        this.addEventListener("keypress", (event) => {
            let key = event.key || event.keyCode;
            switch (key) {
                case"Escape":
                    //safari :-((
                    event.stopPropagation();
                    event.preventDefault();
                    break;



                // close tab
                case "c":
                    this._hoverIndex = 0;
                    this._tabs.forEach((e, i) => {
                        if (e._isSelected) {
                            this._hoverIndex = i;
                        }
                    });
                    this._tabs[this._hoverIndex]._isSelected = false;
                    this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent('close-requested', this, false));

                    if (this._tabs.length === 0) {
                        this._escape(event);
                        this.setAttribute("hidden", "");
                    }


                    break;

                case "m":
                    this._hoverIndex = 0;
                    this._tabs.forEach((e, i) => {
                        if (e._isSelected) {
                            this._hoverIndex = i;
                        }
                    });
                    this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent('modified', this, false));

                    break;

                    case "e":
                    this._hoverIndex = 0;
                    this._tabs.forEach((e, i) => {
                        if (e._isSelected) {
                            this._hoverIndex = i;
                        }
                    });
                    this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent('has-error', this, false));

                    break;

                    case "r":
                    this._hoverIndex = 0;
                    this._tabs.forEach((e, i) => {
                        if (e._isSelected) {
                            this._hoverIndex = i;
                        }
                    });
                    this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent('bereinigt', this, false));

                    break;
            }

        });


        // hover selected
        this.addEventListener("focus", (e) => {
            // find selected tab and set hover index
            this._hoverIndex = 0;
            this._tabs.forEach((e, i) => {
                if (e._isSelected) {
                    this._hoverIndex = i;
                }
            });
            this._tabs[0].__parentNode.broadcastEvent(new NodeEvent('tab-unhover-requested', this));
            this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent('this-tab-hover-requested', this, false));

        });


    }

    _escape(event) {
        /**
         * @event escape
         * Fired when Escape was pressed
         * detail payload: keyEvent
         */
        let customEvent = new Event('escape', {composed: true, bubbles: true});
        customEvent.detail = event;
        this.dispatchEvent(customEvent);
    }

    injectTabs(nodeArray) {
        this._tabs = nodeArray;
        this._FBPTriggerWire("--itemsInjected", nodeArray);
        this.removeAttribute("hidden");
    }

    /**
     * flow is ready lifecycle method
     */
    _FBPReady(){
        super._FBPReady();
        //this._FBPTraceWires();
    }

    /**
     * focuses the element
     */
    focus() {
        super.focus();

    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Sets the tabindex
             */
            tabindex: {type: Number, reflect: true},
            /**
             * indicator for searching. Maybe you want style your item depending on this attribute
             */
            _searchIsActive: {type: Boolean, attribute: "searching", reflect: true}
        };
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
                display: block;
                outline: none;
                position: relative;
                
                padding-left: var(--spacing-s, 24px);
            }

            :host(:focus-within) furo-panel-coordinator-tab-item[selected] {
                border-bottom: 2px solid var(--primary, #686868);
                color:  var(--primary, #686868);
            }
            
            :host(:focus-within) furo-panel-coordinator-tab-item[selected][haserror] {
                border-bottom: 2px solid var(--error, red);
            }
            furo-panel-coordinator-tab-item{
                margin: 0;
            }
            :host([hidden]) {
                display: none;
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
            <template is="flow-repeat" ƒ-inject-items="--itemsInjected" identity-path="id._value"><furo-panel-coordinator-tab-item ƒ-bind-data="--init"></furo-panel-coordinator-tab-item></template>

        `;
    }
}

window.customElements.define('furo-panel-coordinator-tabs', FuroPanelCoordinatorTabs);
