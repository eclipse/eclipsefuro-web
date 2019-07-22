import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";


import './icons/icons-demo'
import './icons/furo-default-icons-list'
import "@furo/util/furo-markdown"


/**
 * `page-icons`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class PageIcons extends FBP(LitElement) {

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
            overflow: auto;
            height: 100%;
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
    render(){
        return html`
            <topic-intro title="SVG Icons"
                     text="In this section we'll talk about svg Icons component. We'll explain how you can used svg icons and custom them.">
                     
                <icons-demo></icons-demo>
            </topic-intro>
    
            <topic-title title="default icons"></topic-title>
            <furo-markdown unsafe ƒ-fetch="--pageActivated"  mdsrc="/_page/markdown/default-icons.md"></furo-markdown>
            <furo-default-icons-list></furo-default-icons-list>
            
            <topic-title title="custom icons"></topic-title>
            <furo-markdown ƒ-fetch="--pageActivated" mdsrc="/_page/markdown/custom-icons.md"></furo-markdown>
            
            
        `;
    }

}

customElements.define('page-icons', PageIcons);
