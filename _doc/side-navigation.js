import {LitElement, html, css} from 'lit-element';
import {FBP} from '@furo/fbp';
import '@furo/layout';
import "@polymer/iron-icons/iron-icons";
import "@polymer/iron-icons/image-icons";
import "@polymer/iron-icons/av-icons";
import "@polymer/iron-icons/notification-icons";

/**
 * `side-navigation`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/side-navigation.html
 * @appliesMixin FBP
 */
class SideNavigation extends FBP(LitElement) {

    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    display: block;
                    height: 100%;
                    background-color: var(--background);
                    
                    --primary-color: #eaddfd;
                    --primary-variant-color: #eff5fa;
                    --secondary-color: #f4f4f4;
                    --secondary-variant-color: #edeeed;
                    --background: #ffffff;
                    --surface: #ffffff;
                    --error: #C51162;
                    --success: #129991;
                    --llm-color: #ffffff;
                    --llm-variant-color: #f0f1f4;
                    --disabled-color: #B4B5B4;

                    --on-primary: #691eee;
                    --on-secondary: #212121;
                    --on-background: #212121;
                    --on-surface: #212121;

                    --on-error: #ffffff;
                    --on-success: #202124;
                    --on-llm: #2c2c2c;
                    --gap-size: 12px;
                }


                h1{
                    margin: 0;
                    color: white;
                    background-color: #947b36;
                    line-height: 64px;
                    font-size:20px;
                    font-weight:400;
                    padding-left: 12px;
                }

                
                ul {
                    list-style: none;
                    margin: 0 8px 0 8px;
                    padding: 8px 0;
                    border-bottom: 1px solid var(--llm-color);
                }

                li {
                    min-height: 40px;
                    padding-left: 16px;
                    margin-bottom: 4px;
                    color: var(--on-background);
                    letter-spacing: .01785714em;
                    font-size: .875rem;
                    font-weight: 500;
                    line-height: 1.25rem;
                    transition: all 0.2s;
                }

                li:hover {
                    background-color: var(--secondary-color);
                    border-radius: 4px;
                    color: var(--on-secondary);
                    cursor: pointer;
                }

                li:focus {
                    background-color: var(--secondary-variant-color);
                    border-radius: 4px;
                    color: var(--on-secondary);
                    outline: none;
                }

                a[disabled], a[disabled] li {
                    color: var(--disabled-color);
                    cursor: not-allowed;
                    pointer-events: none;
                }

                a[disabled]:hover, a[disabled] li:hover {
                    color: var(--disabled-color);
                    background-color: transparent;
                    cursor: not-allowed;
                }

                span {
                    display: inline-block;
                    line-height: 40px;
                    vertical-align: top;
                    width: 176px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                a {
                    text-decoration: none;
                    outline: none;
                }

                iron-icon {
                    margin-right: var(--gap-size);
                }

                div.label {
                    color: var(--on-background);
                    cursor: default;
                    letter-spacing: .07272727em;
                    font-family: Roboto, Arial, sans-serif;
                    font-size: .6875rem;
                    font-weight: 500;
                    line-height: 1rem;
                    text-transform: uppercase;
                    padding: 15px 24px 10px;
                }

                hr {
                    margin: 3px 0 4px;
                    height: 0;
                    border: none;
                    border-bottom-width: 1px;
                    border-bottom-style: solid;
                    border-bottom-color: rgba(0, 0, 0, .12);
                }

                .mdc-divider-list {
                    height: 0;
                    margin: 0;
                    border: none;
                    border-bottom-width: 1px;
                    border-bottom-style: solid;
                    border-bottom-color: rgba(0, 0, 0, .12);
                }
            `
        ];
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <h1>フロー Furo</h1>
            <furo-vertical-flex>
                <furo-vertical-scroller>
                    <div class="label">Fundamentals</div>
                    <ul>
                        <a tabindex="-1" href="./_doc/welcome.html" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:home"></iron-icon>Overview</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="https://veith.github.io/flowbased-polymer/" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:track-changes"></iron-icon>Development Process</span>
                            </li>
                        </a>
                        
                        <a tabindex="-1" href="./_doc/api-design.html" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:create"></iron-icon>API Design</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="/components/@furo/framework/readme.md" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:toc"></iron-icon>The Framework</span>
                            </li>
                        </a>                       
                        

                    </ul>
                    <hr>
                    <div class="label">Components</div>
                    <ul flex>
                        <a tabindex="-1" href="/components/@furo/input" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:input"></iron-icon>Getting input</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="/components/@furo/data" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:cloud"></iron-icon>Dealing with data</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="/components/@furo/layout" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:dashboard"></iron-icon>Layouts helper</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="/components/@furo/config" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:settings"></iron-icon>App Config</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="/components/@furo/framework/#/classes/i18n" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:language"></iron-icon>Internationalization</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="/components/@furo/navigation/" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon
                                icon="icons:tab"></iron-icon>Navigation</span></li>
                        </a>
                        
                       
                     
                        
                        <a tabindex="-1" href="/components/@furo/route/" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:arrow-forward"></iron-icon>Routing</span>
                            </li>
                        </a>
                       
                    </ul>
                    <div class="label">Misc.</div>
                    <ul flex>
                        <a tabindex="-1" href="./_doc/testing.html" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="av:playlist-add-check"></iron-icon>Testing</span>
                            </li>
                        </a>
                        <a tabindex="-1" href="./coverage/lcov-report/index.html" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="notification:network-check"></iron-icon>Test Coverage</span>
                            </li>
                        </a>
                   
                        <a tabindex="-1" href="./_doc/LICENSE.html" @-click=":STOP, ^^navigation-clicked">
                            <li role="menuitem" tabindex="0"><span><iron-icon icon="icons:account-balance"></iron-icon>License</span>
                            </li>
                        </a>
                    </ul>
                </furo-vertical-scroller>
            </furo-vertical-flex>

        `;
    }

}

window.customElements.define('side-navigation', SideNavigation);
