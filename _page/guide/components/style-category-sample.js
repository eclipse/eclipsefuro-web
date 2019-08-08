import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp";
/**
 * `style-category-sample`
 * Style category component to show the 12 categories of the material theming concept.
 * https://material.io/design/material-theming/implementing-your-theme.html#color
 *
 * @customElement
 */
class StyleCategorySample extends FBP(LitElement) {

  constructor(){
    super();

  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }

  static get properties(){
    return {};
  }

  static get styles() {
    // language=CSS
    return [
        css`                
            :host {
                display: block;
            }
            :host([hidden]){
                display: none;
            }
            .container{
                display: grid;
                
                justify-content: center;
                align-content: start;
                grid-row-gap: var(--spacing-xl);
                background-color: rgb(245, 242, 240);
            }
            div.container[four]{
                grid-template-columns: repeat(4, 225px);
                grid-template-rows: auto;
            }
            div.container[three]{
                grid-template-columns: repeat(3, 300px);
                grid-template-rows: auto;
            }
            div.container[two]{
                grid-template-columns: repeat(2, 450px);
                grid-template-rows: auto;
            }
            .item{
                height: 225px;
                padding: var(--spacing);
                box-sizing: border-box;
                cursor: pointer;
                transition: all 0.25s ease-in;
            }
            .narrow{
                height: 90px;
            }
            p{
                margin: 0;
            }
            .spacer{
                height: var(--spacing-xl);
                background-color: rgb(245, 242, 240);
            }
            div.item[primary]{
                background-color: var(--primary);
                color: var(--on-primary);
            }
            div.item[primary]:hover{
                background-color: var(--primary-dark);
            }
            div.item[primary-variant]{
                background-color: var(--primary-variant);
                color: var(--on-primary);
            }
            div.item[primary-variant]:hover{
                background-color: var(--primary-variant);
            }
            div.item[secondary]{
                background-color: var(--secondary);
                color: var(--on-secondary);
            }
            div.item[secondary]:hover{
                background-color: var(--secondary-dark);
            }
            div.item[secondary-variant]{
                background-color: var(--secondary-variant);
                color: var(--on-secondary);
            }
            div.item[background]{
                background-color: var(--background);
                color: var(--on-background);
            }
            div.item[surface]{
                background-color: var(--surface);
                color: var(--on-surface);
            }
            div.item[surface]:hover{
                background-color: var(--surface-dark);
            }
            div.item[error]{
                background-color: var(--error);
                color: var(--on-error);
            }
            div.item[onprimary]{
                background-color: var(--on-primary);
                color: black;
            }
            div.item[onsecondary]{
                background-color: var(--on-secondary);
                color: white;
            }
            div.item[onbackground]{
                background-color: var(--on-background);
                color: var(--background);
            }
            div.item[onsurface]{
                background-color: var(--on-surface);
                color: var(--surface);
            }
            div.item[onerror]{
                background-color: var(--on-error);
                color: black;
            }
        `
    ];
  }

  render(){
    // language=HTML
    return html`
        <div class="container" four>
            <div class="item" primary><p>Primary</p></div>
            <div class="item" primary-variant><p>Primary variant</p></div>
            <div class="item" secondary><p>Secondary</p></div>
            <div class="item" secondary-variant><p>Secondary variant</p></div>
        </div>
        <div class="spacer"></div>
        <div class="container" three>
            <div class="item narrow" background><p>Background</p></div>
            <div class="item narrow" surface><p>Surface</p></div>
            <div class="item narrow" error><p>Error</p></div>
        </div>
        <div class="spacer"></div>
        <div class="container" two>
            <div class="item narrow" onprimary><p>On Primary</p></div>
            <div class="item narrow" onsecondary><p>On Secondary</p></div>
        </div>
        <div class="container" three>
            <div class="item narrow" onbackground><p>On Background</p></div>
            <div class="item narrow" onsurface><p>On Surface</p></div>
            <div class="item narrow" onerror><p>On Error</p></div>
        </div>
    `;
  }

}

window.customElements.define('style-category-sample', StyleCategorySample);
