import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"

/**
 * `furo-ripple` gives the ripple effect to a element
 *  use it directly in an element:
 *  <button>
 *       click here
 *      <furo-ripple></furo-ripple>
 *  </button>
 *
 *  or you can also trigger the ripple effect via wire
 *  <button @-click="--click" >
 *      ...
 *      <furo-ripple ƒ-trigger="--click"></furo-ripple>
 *  </button>
 *  with variable `--furo-ripple-bg-color` you can modify the backgroud color of the ripple effect
 *
 * Lit element
 *
 * @customElement
 * @demo demo/furo-button.html
 */
class FuroRipple extends LitElement {


    constructor() {
        super();
        this._active = true;
        this.noink = false;
    }


    connectedCallback() {
        this.parentNode.addEventListener("click", (e) => {
            if (!this.noink) {
                this.trigger();
            }
        });
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
                pointer-events: none;
                position: absolute;
                overflow: hidden;
                transform: translate3d(0, 0, 0);
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                display: block;
            }

            :host:after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                background-image: radial-gradient(circle, var(--furo-ripple-bg-color, #000) 10%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
                transform: scale(10, 10);
                opacity: 0;
                transition: transform .5s, opacity 1s;
            }

            :host([_active]):after {
                transform: scale(0, 0);
                opacity: .2;
                transition: 0s;
            }

        `
    }


    /**
     *@private
     */
    static get properties() {
        return {

            /**
             * Disables the click, only ripples with `trigger()`
             */
            noink: {type: Boolean, reflect: true}
        };
    }


    /**
     * animate the ripple effect
     */
    trigger() {
        this.setAttribute("_active", "");
        this._active = true;
        setTimeout(() => {
            this.removeAttribute("_active");
        }, 50);
    }
}

customElements.define('furo-ripple', FuroRipple);
