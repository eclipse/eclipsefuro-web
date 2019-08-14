import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-form-layouter`
 *
 * Use furo-form-layouter to structure your forms.
 * It is based on a grid system with the following properties:
 * - full-width row (Standard)
 * - two columns
 * - four columns
 *
 * The required variant is set using an attribute.
 * e.g. two, four
 *
 * <demo-furo-form-layouter></demo-furo-form-layouter>
 *
 * Tags: form
 * @summary Grid based form field row
 * @customElement
 * @demo demo-furo-form-layouter Form Design Sample
 * @mixes FBP
 */
class FuroFormLayouter extends FBP(LitElement) {

    constructor() {
        super();
        this.narrow = false;
        this.narrower = false;
        this.breakpointBig = 810;
        this.breakpointSmall = 405;

        const ro = new ResizeObserver(entries => {

            for (let entry of entries) {
                if (entry.contentRect && entry.contentRect.width > 0 && entry.contentRect.width < this.breakpointBig && entry.contentRect.width > this.breakpointSmall) {
                    this.setAttribute('narrow', '');
                    this.narrow = true;
                    this.removeAttribute('narrower');
                    this.narrower = false;
                    this._fireResize();
                } else if (entry.contentRect && entry.contentRect.width > 0 && entry.contentRect.width < this.breakpointSmall) {
                    this.setAttribute('narrower', '');
                    this.narrower = true;
                    this.removeAttribute('narrow');
                    this.narrow = false;
                    this._fireResize();
                } else {
                    this.removeAttribute('narrow');
                    this.removeAttribute('narrower');
                    this.narrow = this.narrower = false;
                }
            }

        });
        ro.observe(this);
    }

    _fireResize(){
        this.dispatchEvent(new CustomEvent('layout-changed', {
            detail: this, bubbles: true, composed: true
        }));
    }

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires()
    }

    static get properties() {
        return {
            /**
             * Set custom breakpoints max. two values
             * Default: "810,405"
             */
            breakpointBig: {type: String, attribute: 'breakpoint-big', reflect: true},
            breakpointSmall: {type: String, attribute: 'breakpoint-small', reflect: true},
            /**
             * Set narrow-fix attribute to force
             * the layout analog to breakpoint big
             */
            narrowFix: {
                type: Boolean,
                attribute: 'narrow-fix',
                reflect: true
            },
            /**
             * Set narrower-fix attribute to force
             * 1 column view (analog breakpoint small)
             */
            narrowerFix: {
                type: Boolean,
                attribute: 'narrower-fix',
                reflect: true
            }

        }
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`
            :host {
                display: grid;
                grid-row-gap: 0px;
                grid-column-gap: 0px;
                grid-template-columns: repeat(1, 1fr);
            }

            :host([hidden]) {
                display: none;
            }

            :host([two]) {
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: var(--spacing);
            }

            :host([four]) {
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: var(--spacing);
            }

            :host([narrow]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([four][narrow]) {
                grid-template-columns: repeat(2, 1fr);
            }

            :host([narrower]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([narrow-fix]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([four][narrow-fix]) {
                grid-template-columns: repeat(2, 1fr);
            }

            :host([four][narrower-fix]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([narrower-fix]) {
                grid-template-columns: repeat(1, 1fr);
            }

            ::slotted(*) {
                width: 100%;
            }

        `
    }

    /**
     * @private
     * @returns {TemplateResult | TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <slot></slot>
        `;
    }
}

window
    .customElements
    .define(
        'furo-form-layouter'
        ,
        FuroFormLayouter
    )
;
