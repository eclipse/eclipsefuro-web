import { LitElement, html, css } from 'lit-element';

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


    constructor(){

        super();
    }


    /**
     * @private
     * @returns {CSSResult}
     */
    static get styles() {
        return css`
            :host {}
            
            ripple-wrapper {
              position: absolute;
              overflow: hidden;
              transform: translate3d(0, 0, 0);
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
              diplay: block;
            }
            
            ripple-wrapper:after {
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
            
            ripple-wrapper:active:after {
              transform: scale(0, 0);
              opacity: .2;
              transition: 0s;
            }
            
            .active:after {
              transform: scale(0, 0);
              opacity: .2;
              transition: 0s;
            }

        `;
    }

    /**
     *@private
     */
    static get properties(){

        return {};
    }


    /**
     * animate the ripple effect
     */
    trigger() {

        this.shadowRoot.getElementById("ripple").classList.add("active");

        let self = this;
        setTimeout(function(){

            self.shadowRoot.getElementById("ripple").classList.remove("active");
        },50);
    }


    /**
     * @private
     * @returns {TemplateResult}
     */
    render(){
        return html`
            <ripple-wrapper id="ripple"></ripple-wrapper>
        `;
    }

}

customElements.define('furo-ripple', FuroRipple);
