import {LitElement, html, css} from 'lit-element';

import '@furo/layout/furo-split-view';


/**
 * `topic-intro`
 * View Topic Intro
 *
 * Usage:
 *
 * ```
 * <topic-intro title="Storyboard"
 *              text="A storyboard is a visual representation of how a user will interact with an application or interface.">
 *              <element></element>
 * </topic-intro>
 * ```
 *
 * @customElement
 * @demo demo/index.html
 */
class TopicIntro extends LitElement {

    constructor() {
        super();
        this.title = '';
        this.text = '';

    }

    static get properties() {
        return {
            title: {type: String},
            text: {type: String}
        };
    }

    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    display: block;
                    overflow: auto;
                }

                :host([hidden]) {
                    display: none;
                }
                
                h1.panel-header{
                    font-size: 2.8rem;
                    font-weight: 400;
                    line-height: 3.125rem;
                    letter-spacing: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                p.panel-content {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                    letter-spacing: .03125em;
                }

                div.right {
                    background-color: var(--secondary);
                    min-height: 300px;
                    margin: var(--spacing);
                    padding:  var(--spacing);
                    max-width: 800px;
                    border-radius: var(--border-radius,  4px);
                }
            `
        ];
    }

    render() {
        // language=HTML
        return html`
<h2 class="panel-header">${this.title}</h2>
        <furo-split-view>
            <div slot="master">              
                <p class="panel-content">${this.text}</p>
            </div>
            <div class="right">
                <slot></slot>
            </div>
        </furo-split-view>
    `;
    }

}

window.customElements.define('topic-intro', TopicIntro);
