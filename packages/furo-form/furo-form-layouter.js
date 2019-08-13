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
        this.breakpoints = '';

        const ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.contentRect && entry.contentRect.width < 810 && entry.contentRect.width > 405) {
                    this.setAttribute('narrow', '');
                    this.removeAttribute('narrower');
                } else if (entry.contentRect && entry.contentRect.width < 405) {
                    this.setAttribute('narrower', '');
                    this.removeAttribute('narrow');
                } else {
                    this.removeAttribute('narrow');
                    this.removeAttribute('narrower');
                }
            }
        });
        ro.observe(this);
    }

    /**
     * flow is ready lifecycle method
     */
    __fbpReady() {
        super.__fbpReady();
        //this._FBPTraceWires()
    }

    static get properties() {
        return {
            /**
             * Set custom breakpoints max. two values
             * Default: "810,405"
             */
            breakpoints: {type: String},
            /**
             * Set narrow attribute to force
             * a
             */
            narrow: {
                type: Boolean,
                reflect: true
            },
            /**
             * Set narrower attribute to force
             * 1 column view
             */
            narrower: {
                type: Boolean,
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

            ::slotted(*) {
                width: 100%;
            }

        `
    }

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
