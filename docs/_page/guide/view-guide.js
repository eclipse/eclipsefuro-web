define(["exports","../furo-shell.js"],function(_exports,_furoShell){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.nav=_exports.Styling=_exports.$styling=_exports.$navConfig=void 0;class TopicIntro extends _furoShell.LitElement{constructor(){super();this.title="";this.text=""}static get properties(){return{title:{type:String},text:{type:String}}}static get styles(){// language=CSS
return[_furoShell.css`
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
            `]}render(){// language=HTML
return _furoShell.html`
<h2 class="panel-header">${this.title}</h2>
        <furo-split-view>
            <div slot="master">              
                <p class="panel-content">${this.text}</p>
            </div>
            <div class="right">
                <slot></slot>
            </div>
        </furo-split-view>
    `}}window.customElements.define("topic-intro",TopicIntro);class TopicTitle extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}static get properties(){return{title:{type:String}}}static get styles(){// language=CSS
return[_furoShell.css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }
                h2{
                    font-size: 1.25rem;
                    font-weight: 500;
                    letter-spacing: .0125em;
                    border-bottom: 1px solid rgba(0,0,0,.87);
                }
            `]}render(){// language=HTML
return _furoShell.html`
            <h2>${this.title}</h2>
        `}}window.customElements.define("topic-title",TopicTitle);class LightBulb extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.off=!0;this.color="#fee753"}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */off:{type:Boolean,reflect:!0},on:{type:Boolean}}}set on(v){this.off=!v}setColor(color){this.color=color;this.requestUpdate()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
        }

        :host([hidden]) {
            display: none;
        }

        :host([off]) furo-icon {
            color: black;
        }

        furo-icon {
            width: 96px;
            height: 96px;
        }



    `}/**
     * toggles the light bulb on off
     */toggle(){this.off=!this.off}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <style>
        furo-icon {
          color:${this.color}
        }
      </style>
      <furo-icon icon="lightbulb-outline"></furo-icon>
    `}}window.customElements.define("light-bulb",LightBulb);class IntervalPulse extends _furoShell.LitElement{constructor(){super();this.interval=200;if(this.auto){this.start()}}static get properties(){return{interval:{type:Number,value:200,observer:"_interval"},takt:{type:Number,value:4},/**
       * Starts interval automatically
       */auto:Boolean}}start(){let cnt=0,tick="tick";clearInterval(this._intervalObject);this._intervalObject=setInterval(()=>{let pos=cnt++%this.takt,customEvent=new Event("tick",{bubbles:!0});/**
                                    * Fired when interval is
                                    * detail payload: position
                                    * @event tick
                                    */customEvent.detail=pos;this.dispatchEvent(customEvent);if(0==pos){/**
         * Fired when tock
         * detail payload: position
         * @event tick
         */let customEvent=new Event("tock",{bubbles:!0});customEvent.detail=pos;this.dispatchEvent(customEvent)}},this.interval)}stop(){clearInterval(this._intervalObject)}}window.customElements.define("interval-pulse",IntervalPulse);class StyleCategorySample extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * flow is ready lifecycle method
     */__fbpReady(){super.__fbpReady();//this._FBPTraceWires()
}static get properties(){return{}}static get styles(){// language=CSS
return[_furoShell.css`                
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
        `]}render(){// language=HTML
return _furoShell.html`
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
    `}}window.customElements.define("style-category-sample",StyleCategorySample);class Styling{static get theme(){// language=CSS
return _furoShell.css`
            :host {

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary-light: #6200ff;
                --primary: #6200EE;
                --primary-dark: #5200d4;
                --primary-variant: #3700B3;
                --on-primary: #ffffff;

                --secondary-light: #03f4e0;
                --secondary: #03DAC6;
                --secondary-dark: #03c0ac;
                --secondary-variant: #018786;
                --on-secondary: #000000;

                --accent-light: #ffcb4c;
                --accent: #ddb13d;
                --accent-dark: #9e7f2b;
                --on-accent: #000000;

                --background: #ffffff;
                --on-background: #000000;

                --surface-light: #f2f2f2;
                --surface: #eeeeee;
                --surface-dark: #DEDEDE;
                --on-surface: #212121;
                --separator: #c3c4c3;

                /* Input, Forms, Toast*/
                --error: #C51162;
                --on-error: #ffffff;

                --danger-light: #FA0202;
                --danger: #e20202;
                --danger-dark: #b50202;
                --on-danger: #FAFAFA;

                --success: #129991;
                --on-success: #202124;

                --disabled: #c3c4c3;
                --on-disabled: #585858;


                /* Spacing */
                --spacing-xxs: 4px;
                --spacing-xs: 8px;
                --spacing-s: 16px;
                --spacing: 24px;
                --spacing-m: 24px;
                --spacing-l: 32px;
                --spacing-xl: 48px;
                --spacing-xxl: 96px;


            }

        `}}_exports.Styling=Styling;var styling={Styling:Styling};_exports.$styling=styling;const nav=[{group:"Fundamentals",items:[{label:"Overview",icon:"dashboard",href:"md/overview/"},{label:"Installation",icon:"flight-takeoff",href:"md/installation/"},{label:"Starterpacks",icon:"next-week",href:"md/starterpacks/"}]},{group:"\u30D5\u30ED\u30FC Furo FBP",items:[{label:"Wires",icon:"compare-arrows",href:"md/fbp-wires/"},{label:"Events",icon:"open-in-new",href:"md/fbp-events/"},{label:"Data",icon:"input",href:"md/fbp-data/"},{label:"More wiring",icon:"compare-arrows",href:"md/fbp-wires-more/"},{label:"Scripting",icon:"av:play-arrow",href:"md/fbp-scripting/"},{label:"Lifecycle",icon:"restore",href:"md/fbp-lifecycle/"},{label:"Debugging",icon:"bug-report",href:"md/fbp-debugging/"}]},{group:"Manuals",items:[{label:"Styling",icon:"image:color-lens",href:"styling/"},{label:"Theming",icon:"image:brush",href:"md/theming/"},{label:"Icons",icon:"social:mood",href:"icons/"},{label:"Dealing with data",icon:"cloud",href:"md/dealing-w-data/"},{label:"Data UI",icon:"view-column",href:"md/data-ui/"},{label:"Layouts helper",icon:"dashboard",href:"md/layout-helpers/"},{label:"Forms helper",icon:"dashboard",href:"md/form-helpers/"},{label:"App Config",icon:"settings",href:"md/config/"},{label:"Navigation",icon:"tab",href:"md/navigation/"},{label:"Routing",icon:"arrow-forward",href:"md/route/"},{label:"Timing",icon:"alarm",href:"md/timing/"},{label:"Util",icon:"star-border",href:"md/util/"}]},{group:"Advanced Topics",items:[{label:"build",icon:"build",href:"md/build/"},{label:"Testing",icon:"favorite",href:"md/testing/"},{label:"Writing Demos",icon:"picture-in-picture",href:"md/demo/"}]},{group:"Misc",items:[{label:"License",icon:"create",href:"md/license/"}]},{group:"Credits",items:[{label:"The Polymer Project",icon:"polymer",href:""},{label:"Lit Element",icon:"lightbulb-outline",href:""},{label:"webcomponents.org",icon:"polymer",href:""},{label:"J.P Morrison",icon:"thumb-up",href:""}]}];_exports.nav=nav;var nav_config={nav:nav};_exports.$navConfig=nav_config;class FuroDefaultIconsList extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}static get properties(){return{}}static get styles(){// language=CSS
return[_furoShell.css`                
            `]}render(){// language=HTML
return _furoShell.html`
        <div>

            <furo-horizontal-flex">
            <furo-icon-with-label icon="3d-rotation"></furo-icon-with-label>
            <furo-icon-with-label icon="accessibility"></furo-icon-with-label>
            <furo-icon-with-label icon="accessible"></furo-icon-with-label>
            <furo-icon-with-label icon="account-balance"></furo-icon-with-label>
            <furo-icon-with-label icon="account-balance-wallet"></furo-icon-with-label>
            <furo-icon-with-label icon="account-box"></furo-icon-with-label>
            <furo-icon-with-label icon="account-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="add"></furo-icon-with-label>
            <furo-icon-with-label icon="add-alert"></furo-icon-with-label>
            <furo-icon-with-label icon="add-box"></furo-icon-with-label>
            <furo-icon-with-label icon="add-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="add-circle-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="add-shopping-cart"></furo-icon-with-label>
            <furo-icon-with-label icon="alarm"></furo-icon-with-label>
            <furo-icon-with-label icon="alarm-add"></furo-icon-with-label>
            <furo-icon-with-label icon="alarm-off"></furo-icon-with-label>
            <furo-icon-with-label icon="alarm-on"></furo-icon-with-label>
            <furo-icon-with-label icon="all-out"></furo-icon-with-label>
            <furo-icon-with-label icon="android"></furo-icon-with-label>
            <furo-icon-with-label icon="announcement"></furo-icon-with-label>
            <furo-icon-with-label icon="apps"></furo-icon-with-label>
            <furo-icon-with-label icon="archive"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-back"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-downward"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-drop-down"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-drop-down-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-drop-up"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-forward"></furo-icon-with-label>
            <furo-icon-with-label icon="arrow-upward"></furo-icon-with-label>
            <furo-icon-with-label icon="aspect-ratio"></furo-icon-with-label>
            <furo-icon-with-label icon="assessment"></furo-icon-with-label>
            <furo-icon-with-label icon="assignment"></furo-icon-with-label>
            <furo-icon-with-label icon="assignment-ind"></furo-icon-with-label>
            <furo-icon-with-label icon="assignment-late"></furo-icon-with-label>
            <furo-icon-with-label icon="assignment-return"></furo-icon-with-label>
            <furo-icon-with-label icon="assignment-returned"></furo-icon-with-label>
            <furo-icon-with-label icon="assignment-turned-in"></furo-icon-with-label>
            <furo-icon-with-label icon="attachment"></furo-icon-with-label>
            <furo-icon-with-label icon="autorenew"></furo-icon-with-label>
            <furo-icon-with-label icon="backspace"></furo-icon-with-label>
            <furo-icon-with-label icon="backup"></furo-icon-with-label>
            <furo-icon-with-label icon="block"></furo-icon-with-label>
            <furo-icon-with-label icon="book"></furo-icon-with-label>
            <furo-icon-with-label icon="bookmark"></furo-icon-with-label>
            <furo-icon-with-label icon="bookmark-border"></furo-icon-with-label>
            <furo-icon-with-label icon="bug-report"></furo-icon-with-label>
            <furo-icon-with-label icon="build"></furo-icon-with-label>
            <furo-icon-with-label icon="cached"></furo-icon-with-label>
            <furo-icon-with-label icon="camera-enhance"></furo-icon-with-label>
            <furo-icon-with-label icon="cancel"></furo-icon-with-label>
            <furo-icon-with-label icon="card-giftcard"></furo-icon-with-label>
            <furo-icon-with-label icon="card-membership"></furo-icon-with-label>
            <furo-icon-with-label icon="card-travel"></furo-icon-with-label>
            <furo-icon-with-label icon="change-history"></furo-icon-with-label>
            <furo-icon-with-label icon="check"></furo-icon-with-label>
            <furo-icon-with-label icon="check-box"></furo-icon-with-label>
            <furo-icon-with-label icon="check-box-outline-blank"></furo-icon-with-label>
            <furo-icon-with-label icon="check-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="chevron-left"></furo-icon-with-label>
            <furo-icon-with-label icon="chevron-right"></furo-icon-with-label>
            <furo-icon-with-label icon="chrome-reader-mode"></furo-icon-with-label>
            <furo-icon-with-label icon="class"></furo-icon-with-label>
            <furo-icon-with-label icon="clear"></furo-icon-with-label>
            <furo-icon-with-label icon="close"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud-done"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud-download"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud-off"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud-queue"></furo-icon-with-label>
            <furo-icon-with-label icon="cloud-upload"></furo-icon-with-label>
            <furo-icon-with-label icon="code"></furo-icon-with-label>
            <furo-icon-with-label icon="compare-arrows"></furo-icon-with-label>
            <furo-icon-with-label icon="content-copy"></furo-icon-with-label>
            <furo-icon-with-label icon="content-cut"></furo-icon-with-label>
            <furo-icon-with-label icon="content-paste"></furo-icon-with-label>
            <furo-icon-with-label icon="copyright"></furo-icon-with-label>
            <furo-icon-with-label icon="create"></furo-icon-with-label>
            <furo-icon-with-label icon="create-new-folder"></furo-icon-with-label>
            <furo-icon-with-label icon="credit-card"></furo-icon-with-label>
            <furo-icon-with-label icon="dashboard"></furo-icon-with-label>
            <furo-icon-with-label icon="date-range"></furo-icon-with-label>
            <furo-icon-with-label icon="delete"></furo-icon-with-label>
            <furo-icon-with-label icon="delete-forever"></furo-icon-with-label>
            <furo-icon-with-label icon="delete-sweep"></furo-icon-with-label>
            <furo-icon-with-label icon="description"></furo-icon-with-label>
            <furo-icon-with-label icon="dns"></furo-icon-with-label>
            <furo-icon-with-label icon="done"></furo-icon-with-label>
            <furo-icon-with-label icon="done-all"></furo-icon-with-label>
            <furo-icon-with-label icon="donut-large"></furo-icon-with-label>
            <furo-icon-with-label icon="donut-small"></furo-icon-with-label>
            <furo-icon-with-label icon="drafts"></furo-icon-with-label>
            <furo-icon-with-label icon="eject"></furo-icon-with-label>
            <furo-icon-with-label icon="error"></furo-icon-with-label>
            <furo-icon-with-label icon="error-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="euro-symbol"></furo-icon-with-label>
            <furo-icon-with-label icon="event"></furo-icon-with-label>
            <furo-icon-with-label icon="event-seat"></furo-icon-with-label>
            <furo-icon-with-label icon="exit-to-app"></furo-icon-with-label>
            <furo-icon-with-label icon="expand-less"></furo-icon-with-label>
            <furo-icon-with-label icon="expand-more"></furo-icon-with-label>
            <furo-icon-with-label icon="explore"></furo-icon-with-label>
            <furo-icon-with-label icon="extension"></furo-icon-with-label>
            <furo-icon-with-label icon="face"></furo-icon-with-label>
            <furo-icon-with-label icon="favorite"></furo-icon-with-label>
            <furo-icon-with-label icon="favorite-border"></furo-icon-with-label>
            <furo-icon-with-label icon="feedback"></furo-icon-with-label>
            <furo-icon-with-label icon="file-download"></furo-icon-with-label>
            <furo-icon-with-label icon="file-upload"></furo-icon-with-label>
            <furo-icon-with-label icon="filter-list"></furo-icon-with-label>
            <furo-icon-with-label icon="find-in-page"></furo-icon-with-label>
            <furo-icon-with-label icon="find-replace"></furo-icon-with-label>
            <furo-icon-with-label icon="fingerprint"></furo-icon-with-label>
            <furo-icon-with-label icon="first-page"></furo-icon-with-label>
            <furo-icon-with-label icon="flag"></furo-icon-with-label>
            <furo-icon-with-label icon="flight-land"></furo-icon-with-label>
            <furo-icon-with-label icon="flight-takeoff"></furo-icon-with-label>
            <furo-icon-with-label icon="flip-to-back"></furo-icon-with-label>
            <furo-icon-with-label icon="flip-to-front"></furo-icon-with-label>
            <furo-icon-with-label icon="folder"></furo-icon-with-label>
            <furo-icon-with-label icon="folder-open"></furo-icon-with-label>
            <furo-icon-with-label icon="folder-shared"></furo-icon-with-label>
            <furo-icon-with-label icon="font-download"></furo-icon-with-label>
            <furo-icon-with-label icon="forward"></furo-icon-with-label>
            <furo-icon-with-label icon="fullscreen"></furo-icon-with-label>
            <furo-icon-with-label icon="fullscreen-exit"></furo-icon-with-label>
            <furo-icon-with-label icon="g-translate"></furo-icon-with-label>
            <furo-icon-with-label icon="gavel"></furo-icon-with-label>
            <furo-icon-with-label icon="gesture"></furo-icon-with-label>
            <furo-icon-with-label icon="get-app"></furo-icon-with-label>
            <furo-icon-with-label icon="gif"></furo-icon-with-label>
            <furo-icon-with-label icon="grade"></furo-icon-with-label>
            <furo-icon-with-label icon="group-work"></furo-icon-with-label>
            <furo-icon-with-label icon="help"></furo-icon-with-label>
            <furo-icon-with-label icon="help-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="highlight-off"></furo-icon-with-label>
            <furo-icon-with-label icon="history"></furo-icon-with-label>
            <furo-icon-with-label icon="home"></furo-icon-with-label>
            <furo-icon-with-label icon="hourglass-empty"></furo-icon-with-label>
            <furo-icon-with-label icon="hourglass-full"></furo-icon-with-label>
            <furo-icon-with-label icon="http"></furo-icon-with-label>
            <furo-icon-with-label icon="https"></furo-icon-with-label>
            <furo-icon-with-label icon="important-devices"></furo-icon-with-label>
            <furo-icon-with-label icon="inbox"></furo-icon-with-label>
            <furo-icon-with-label icon="indeterminate-check-box"></furo-icon-with-label>
            <furo-icon-with-label icon="info"></furo-icon-with-label>
            <furo-icon-with-label icon="info-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="input"></furo-icon-with-label>
            <furo-icon-with-label icon="invert-colors"></furo-icon-with-label>
            <furo-icon-with-label icon="label"></furo-icon-with-label>
            <furo-icon-with-label icon="label-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="language"></furo-icon-with-label>
            <furo-icon-with-label icon="last-page"></furo-icon-with-label>
            <furo-icon-with-label icon="launch"></furo-icon-with-label>
            <furo-icon-with-label icon="lightbulb-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="line-style"></furo-icon-with-label>
            <furo-icon-with-label icon="line-weight"></furo-icon-with-label>
            <furo-icon-with-label icon="link"></furo-icon-with-label>
            <furo-icon-with-label icon="list"></furo-icon-with-label>
            <furo-icon-with-label icon="lock"></furo-icon-with-label>
            <furo-icon-with-label icon="lock-open"></furo-icon-with-label>
            <furo-icon-with-label icon="lock-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="low-priority"></furo-icon-with-label>
            <furo-icon-with-label icon="loyalty"></furo-icon-with-label>
            <furo-icon-with-label icon="mail"></furo-icon-with-label>
            <furo-icon-with-label icon="markunread"></furo-icon-with-label>
            <furo-icon-with-label icon="markunread-mailbox"></furo-icon-with-label>
            <furo-icon-with-label icon="menu"></furo-icon-with-label>
            <furo-icon-with-label icon="more-horiz"></furo-icon-with-label>
            <furo-icon-with-label icon="more-vert"></furo-icon-with-label>
            <furo-icon-with-label icon="motorcycle"></furo-icon-with-label>
            <furo-icon-with-label icon="move-to-inbox"></furo-icon-with-label>
            <furo-icon-with-label icon="next-week"></furo-icon-with-label>
            <furo-icon-with-label icon="note-add"></furo-icon-with-label>
            <furo-icon-with-label icon="offline-pin"></furo-icon-with-label>
            <furo-icon-with-label icon="opacity"></furo-icon-with-label>
            <furo-icon-with-label icon="open-in-browser"></furo-icon-with-label>
            <furo-icon-with-label icon="open-in-new"></furo-icon-with-label>
            <furo-icon-with-label icon="open-with"></furo-icon-with-label>
            <furo-icon-with-label icon="pageview"></furo-icon-with-label>
            <furo-icon-with-label icon="pan-tool"></furo-icon-with-label>
            <furo-icon-with-label icon="payment"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-camera-mic"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-contact-calendar"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-data-setting"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-device-information"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-identity"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-media"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-phone-msg"></furo-icon-with-label>
            <furo-icon-with-label icon="perm-scan-wifi"></furo-icon-with-label>
            <furo-icon-with-label icon="pets"></furo-icon-with-label>
            <furo-icon-with-label icon="picture-in-picture"></furo-icon-with-label>
            <furo-icon-with-label icon="picture-in-picture-alt"></furo-icon-with-label>
            <furo-icon-with-label icon="play-for-work"></furo-icon-with-label>
            <furo-icon-with-label icon="polymer"></furo-icon-with-label>
            <furo-icon-with-label icon="power-settings-new"></furo-icon-with-label>
            <furo-icon-with-label icon="pregnant-woman"></furo-icon-with-label>
            <furo-icon-with-label icon="print"></furo-icon-with-label>
            <furo-icon-with-label icon="query-builder"></furo-icon-with-label>
            <furo-icon-with-label icon="question-answer"></furo-icon-with-label>
            <furo-icon-with-label icon="radio-button-checked"></furo-icon-with-label>
            <furo-icon-with-label icon="radio-button-unchecked"></furo-icon-with-label>
            <furo-icon-with-label icon="receipt"></furo-icon-with-label>
            <furo-icon-with-label icon="record-voice-over"></furo-icon-with-label>
            <furo-icon-with-label icon="redeem"></furo-icon-with-label>
            <furo-icon-with-label icon="redo"></furo-icon-with-label>
            <furo-icon-with-label icon="refresh"></furo-icon-with-label>
            <furo-icon-with-label icon="remove"></furo-icon-with-label>
            <furo-icon-with-label icon="remove-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="remove-circle-outline"></furo-icon-with-label>
            <furo-icon-with-label icon="remove-shopping-cart"></furo-icon-with-label>
            <furo-icon-with-label icon="reorder"></furo-icon-with-label>
            <furo-icon-with-label icon="reply"></furo-icon-with-label>
            <furo-icon-with-label icon="reply-all"></furo-icon-with-label>
            <furo-icon-with-label icon="report"></furo-icon-with-label>
            <furo-icon-with-label icon="report-problem"></furo-icon-with-label>
            <furo-icon-with-label icon="restore"></furo-icon-with-label>
            <furo-icon-with-label icon="restore-page"></furo-icon-with-label>
            <furo-icon-with-label icon="room"></furo-icon-with-label>
            <furo-icon-with-label icon="rounded-corner"></furo-icon-with-label>
            <furo-icon-with-label icon="rowing"></furo-icon-with-label>
            <furo-icon-with-label icon="save"></furo-icon-with-label>
            <furo-icon-with-label icon="schedule"></furo-icon-with-label>
            <furo-icon-with-label icon="search"></furo-icon-with-label>
            <furo-icon-with-label icon="select-all"></furo-icon-with-label>
            <furo-icon-with-label icon="send"></furo-icon-with-label>
            <furo-icon-with-label icon="settings"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-applications"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-backup-restore"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-bluetooth"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-brightness"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-cell"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-ethernet"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-input-antenna"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-input-component"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-input-composite"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-input-hdmi"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-input-svideo"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-overscan"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-phone"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-power"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-remote"></furo-icon-with-label>
            <furo-icon-with-label icon="settings-voice"></furo-icon-with-label>
            <furo-icon-with-label icon="shop"></furo-icon-with-label>
            <furo-icon-with-label icon="shop-two"></furo-icon-with-label>
            <furo-icon-with-label icon="shopping-basket"></furo-icon-with-label>
            <furo-icon-with-label icon="shopping-cart"></furo-icon-with-label>
            <furo-icon-with-label icon="sort"></furo-icon-with-label>
            <furo-icon-with-label icon="speaker-notes"></furo-icon-with-label>
            <furo-icon-with-label icon="speaker-notes-off"></furo-icon-with-label>
            <furo-icon-with-label icon="spellcheck"></furo-icon-with-label>
            <furo-icon-with-label icon="star"></furo-icon-with-label>
            <furo-icon-with-label icon="star-border"></furo-icon-with-label>
            <furo-icon-with-label icon="star-half"></furo-icon-with-label>
            <furo-icon-with-label icon="stars"></furo-icon-with-label>
            <furo-icon-with-label icon="store"></furo-icon-with-label>
            <furo-icon-with-label icon="subdirectory-arrow-left"></furo-icon-with-label>
            <furo-icon-with-label icon="subdirectory-arrow-right"></furo-icon-with-label>
            <furo-icon-with-label icon="subject"></furo-icon-with-label>
            <furo-icon-with-label icon="supervisor-account"></furo-icon-with-label>
            <furo-icon-with-label icon="swap-horiz"></furo-icon-with-label>
            <furo-icon-with-label icon="swap-vert"></furo-icon-with-label>
            <furo-icon-with-label icon="swap-vertical-circle"></furo-icon-with-label>
            <furo-icon-with-label icon="system-update-alt"></furo-icon-with-label>
            <furo-icon-with-label icon="tab"></furo-icon-with-label>
            <furo-icon-with-label icon="tab-unselected"></furo-icon-with-label>
            <furo-icon-with-label icon="text-format"></furo-icon-with-label>
            <furo-icon-with-label icon="theaters"></furo-icon-with-label>
            <furo-icon-with-label icon="thumb-down"></furo-icon-with-label>
            <furo-icon-with-label icon="thumb-up"></furo-icon-with-label>
            <furo-icon-with-label icon="thumbs-up-down"></furo-icon-with-label>
            <furo-icon-with-label icon="timeline"></furo-icon-with-label>
            <furo-icon-with-label icon="toc"></furo-icon-with-label>
            <furo-icon-with-label icon="today"></furo-icon-with-label>
            <furo-icon-with-label icon="toll"></furo-icon-with-label>
            <furo-icon-with-label icon="touch-app"></furo-icon-with-label>
            <furo-icon-with-label icon="track-changes"></furo-icon-with-label>
            <furo-icon-with-label icon="translate"></furo-icon-with-label>
            <furo-icon-with-label icon="trending-down"></furo-icon-with-label>
            <furo-icon-with-label icon="trending-flat"></furo-icon-with-label>
            <furo-icon-with-label icon="trending-up"></furo-icon-with-label>
            <furo-icon-with-label icon="turned-in"></furo-icon-with-label>
            <furo-icon-with-label icon="turned-in-not"></furo-icon-with-label>
            <furo-icon-with-label icon="unarchive"></furo-icon-with-label>
            <furo-icon-with-label icon="undo"></furo-icon-with-label>
            <furo-icon-with-label icon="unfold-less"></furo-icon-with-label>
            <furo-icon-with-label icon="unfold-more"></furo-icon-with-label>
            <furo-icon-with-label icon="update"></furo-icon-with-label>
            <furo-icon-with-label icon="verified-user"></furo-icon-with-label>
            <furo-icon-with-label icon="view-agenda"></furo-icon-with-label>
            <furo-icon-with-label icon="view-array"></furo-icon-with-label>
            <furo-icon-with-label icon="view-carousel"></furo-icon-with-label>
            <furo-icon-with-label icon="view-column"></furo-icon-with-label>
            <furo-icon-with-label icon="view-day"></furo-icon-with-label>
            <furo-icon-with-label icon="view-headline"></furo-icon-with-label>
            <furo-icon-with-label icon="view-list"></furo-icon-with-label>
            <furo-icon-with-label icon="view-module"></furo-icon-with-label>
            <furo-icon-with-label icon="view-quilt"></furo-icon-with-label>
            <furo-icon-with-label icon="view-stream"></furo-icon-with-label>
            <furo-icon-with-label icon="view-week"></furo-icon-with-label>
            <furo-icon-with-label icon="visibility"></furo-icon-with-label>
            <furo-icon-with-label icon="visibility-off"></furo-icon-with-label>
            <furo-icon-with-label icon="warning"></furo-icon-with-label>
            <furo-icon-with-label icon="watch-later"></furo-icon-with-label>
            <furo-icon-with-label icon="weekend"></furo-icon-with-label>
            <furo-icon-with-label icon="work"></furo-icon-with-label>
            <furo-icon-with-label icon="youtube-searched-for"></furo-icon-with-label>
            <furo-icon-with-label icon="zoom-in"></furo-icon-with-label>
            <furo-icon-with-label icon="zoom-out"></furo-icon-with-label>

            </furo-vertical-flex>
        </div>
    `}}window.customElements.define("furo-default-icons-list",FuroDefaultIconsList);class IconsDemo extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}static get properties(){return{}}static get styles(){// language=CSS
return[_furoShell.css`                
            `]}render(){// language=HTML
return _furoShell.html`
        <div>

            <furo-horizontal-flex">

                <furo-icon icon="3d-rotation"></furo-icon>
                <furo-icon icon="accessibility"></furo-icon>
                <furo-icon icon="accessible"></furo-icon>
                <furo-icon icon="account-balance"></furo-icon>
                <furo-icon icon="account-balance-wallet"></furo-icon>
                <furo-icon icon="account-box"></furo-icon>
                <furo-icon icon="account-circle"></furo-icon>
                <furo-icon icon="add"></furo-icon>
                <furo-icon icon="add-alert"></furo-icon>
                <furo-icon icon="add-box"></furo-icon>
                <furo-icon icon="add-circle"></furo-icon>
                <furo-icon icon="add-circle-outline"></furo-icon>
                <furo-icon icon="add-shopping-cart"></furo-icon>
                <furo-icon icon="alarm"></furo-icon>
                <furo-icon icon="alarm-add"></furo-icon>
                <furo-icon icon="alarm-off"></furo-icon>
                <furo-icon icon="alarm-on"></furo-icon>
                <furo-icon icon="all-out"></furo-icon>
                <furo-icon icon="android"></furo-icon>
                <furo-icon icon="announcement"></furo-icon>
                <furo-icon icon="apps"></furo-icon>
                <furo-icon icon="archive"></furo-icon>
                <furo-icon icon="arrow-back"></furo-icon>
                <furo-icon icon="arrow-downward"></furo-icon>
                <furo-icon icon="arrow-drop-down"></furo-icon>
                <furo-icon icon="arrow-drop-down-circle"></furo-icon>
                <furo-icon icon="arrow-drop-up"></furo-icon>
                <furo-icon icon="arrow-forward"></furo-icon>
                <furo-icon icon="arrow-upward"></furo-icon>
                <furo-icon icon="aspect-ratio"></furo-icon>
                <furo-icon icon="assessment"></furo-icon>
                <furo-icon icon="assignment"></furo-icon>
                <furo-icon icon="assignment-ind"></furo-icon>
                <furo-icon icon="assignment-late"></furo-icon>
                <furo-icon icon="assignment-return"></furo-icon>
                <furo-icon icon="assignment-returned"></furo-icon>
                <furo-icon icon="assignment-turned-in"></furo-icon>
                <furo-icon icon="attachment"></furo-icon>
                <furo-icon icon="autorenew"></furo-icon>
                <furo-icon icon="backspace"></furo-icon>
                <furo-icon icon="backup"></furo-icon>
                <furo-icon icon="block"></furo-icon>
                <furo-icon icon="book"></furo-icon>
                <furo-icon icon="bookmark"></furo-icon>
                <furo-icon icon="bookmark-border"></furo-icon>
                <furo-icon icon="bug-report"></furo-icon>
                <furo-icon icon="build"></furo-icon>
                <furo-icon icon="cached"></furo-icon>
                <furo-icon icon="camera-enhance"></furo-icon>
                <furo-icon icon="cancel"></furo-icon>
                <furo-icon icon="card-giftcard"></furo-icon>
                <furo-icon icon="card-membership"></furo-icon>
                <furo-icon icon="card-travel"></furo-icon>
                <furo-icon icon="change-history"></furo-icon>
                <furo-icon icon="check"></furo-icon>
                <furo-icon icon="check-box"></furo-icon>
                <furo-icon icon="check-box-outline-blank"></furo-icon>
                <furo-icon icon="check-circle"></furo-icon>
                <furo-icon icon="chevron-left"></furo-icon>
                <furo-icon icon="chevron-right"></furo-icon>
                <furo-icon icon="chrome-reader-mode"></furo-icon>
                <furo-icon icon="class"></furo-icon>
                <furo-icon icon="clear"></furo-icon>
                <furo-icon icon="close"></furo-icon>
                <furo-icon icon="cloud"></furo-icon>
                <furo-icon icon="cloud-circle"></furo-icon>
                <furo-icon icon="cloud-done"></furo-icon>
                <furo-icon icon="cloud-download"></furo-icon>
                <furo-icon icon="cloud-off"></furo-icon>
                <furo-icon icon="cloud-queue"></furo-icon>
                <furo-icon icon="cloud-upload"></furo-icon>
                <furo-icon icon="code"></furo-icon>
                <furo-icon icon="compare-arrows"></furo-icon>
                <furo-icon icon="content-copy"></furo-icon>
                <furo-icon icon="content-cut"></furo-icon>
                <furo-icon icon="content-paste"></furo-icon>
                <furo-icon icon="copyright"></furo-icon>
                <furo-icon icon="create"></furo-icon>
                <furo-icon icon="create-new-folder"></furo-icon>
                <furo-icon icon="credit-card"></furo-icon>
                <furo-icon icon="dashboard"></furo-icon>
                <furo-icon icon="date-range"></furo-icon>
                <furo-icon icon="delete"></furo-icon>
                <furo-icon icon="delete-forever"></furo-icon>
                <furo-icon icon="delete-sweep"></furo-icon>
                <furo-icon icon="description"></furo-icon>
                <furo-icon icon="dns"></furo-icon>
                <furo-icon icon="done"></furo-icon>
                <furo-icon icon="done-all"></furo-icon>
                <furo-icon icon="donut-large"></furo-icon>
                <furo-icon icon="donut-small"></furo-icon>
                <furo-icon icon="drafts"></furo-icon>
                <furo-icon icon="eject"></furo-icon>
                <furo-icon icon="error"></furo-icon>
                <furo-icon icon="error-outline"></furo-icon>
                <furo-icon icon="euro-symbol"></furo-icon>
                <furo-icon icon="event"></furo-icon>
                <furo-icon icon="event-seat"></furo-icon>
                <furo-icon icon="exit-to-app"></furo-icon>
                <furo-icon icon="expand-less"></furo-icon>
                <furo-icon icon="expand-more"></furo-icon>
                <furo-icon icon="explore"></furo-icon>
                <furo-icon icon="extension"></furo-icon>
                <furo-icon icon="face"></furo-icon>
                <furo-icon icon="favorite"></furo-icon>
                <furo-icon icon="favorite-border"></furo-icon>
                <furo-icon icon="feedback"></furo-icon>
                <furo-icon icon="file-download"></furo-icon>
                <furo-icon icon="file-upload"></furo-icon>
                <furo-icon icon="filter-list"></furo-icon>
                <furo-icon icon="find-in-page"></furo-icon>
                <furo-icon icon="find-replace"></furo-icon>
                <furo-icon icon="fingerprint"></furo-icon>
                <furo-icon icon="first-page"></furo-icon>
                <furo-icon icon="flag"></furo-icon>
                <furo-icon icon="flight-land"></furo-icon>
                <furo-icon icon="flight-takeoff"></furo-icon>
                <furo-icon icon="flip-to-back"></furo-icon>
                <furo-icon icon="flip-to-front"></furo-icon>
                <furo-icon icon="folder"></furo-icon>
                <furo-icon icon="folder-open"></furo-icon>
                <furo-icon icon="folder-shared"></furo-icon>
                <furo-icon icon="font-download"></furo-icon>
                <furo-icon icon="forward"></furo-icon>
                <furo-icon icon="fullscreen"></furo-icon>
                <furo-icon icon="fullscreen-exit"></furo-icon>
                <furo-icon icon="g-translate"></furo-icon>
                <furo-icon icon="gavel"></furo-icon>
                <furo-icon icon="gesture"></furo-icon>
                <furo-icon icon="get-app"></furo-icon>
                <furo-icon icon="gif"></furo-icon>
                <furo-icon icon="grade"></furo-icon>
                <furo-icon icon="group-work"></furo-icon>
                <furo-icon icon="help"></furo-icon>
                <furo-icon icon="help-outline"></furo-icon>
                <furo-icon icon="highlight-off"></furo-icon>
                <furo-icon icon="history"></furo-icon>
                <furo-icon icon="home"></furo-icon>
                <furo-icon icon="hourglass-empty"></furo-icon>
                <furo-icon icon="hourglass-full"></furo-icon>
                <furo-icon icon="http"></furo-icon>
                <furo-icon icon="https"></furo-icon>
                <furo-icon icon="important-devices"></furo-icon>
                <furo-icon icon="inbox"></furo-icon>
                <furo-icon icon="indeterminate-check-box"></furo-icon>
                <furo-icon icon="info"></furo-icon>
                <furo-icon icon="info-outline"></furo-icon>
                <furo-icon icon="input"></furo-icon>
                <furo-icon icon="invert-colors"></furo-icon>
                <furo-icon icon="label"></furo-icon>
                <furo-icon icon="label-outline"></furo-icon>
                <furo-icon icon="language"></furo-icon>
                <furo-icon icon="last-page"></furo-icon>
                <furo-icon icon="launch"></furo-icon>
                <furo-icon icon="lightbulb-outline"></furo-icon>
                <furo-icon icon="line-style"></furo-icon>
                <furo-icon icon="line-weight"></furo-icon>
                <furo-icon icon="link"></furo-icon>
                <furo-icon icon="list"></furo-icon>
                <furo-icon icon="lock"></furo-icon>
                <furo-icon icon="lock-open"></furo-icon>
                <furo-icon icon="lock-outline"></furo-icon>
                <furo-icon icon="low-priority"></furo-icon>
                <furo-icon icon="loyalty"></furo-icon>
                <furo-icon icon="mail"></furo-icon>
                <furo-icon icon="markunread"></furo-icon>
                <furo-icon icon="markunread-mailbox"></furo-icon>
                <furo-icon icon="menu"></furo-icon>
                <furo-icon icon="more-horiz"></furo-icon>
                <furo-icon icon="more-vert"></furo-icon>
                <furo-icon icon="motorcycle"></furo-icon>
                <furo-icon icon="move-to-inbox"></furo-icon>
                <furo-icon icon="next-week"></furo-icon>
                <furo-icon icon="note-add"></furo-icon>
                <furo-icon icon="offline-pin"></furo-icon>
                <furo-icon icon="opacity"></furo-icon>
                <furo-icon icon="open-in-browser"></furo-icon>
                <furo-icon icon="open-in-new"></furo-icon>
                <furo-icon icon="open-with"></furo-icon>
                <furo-icon icon="pageview"></furo-icon>
                <furo-icon icon="pan-tool"></furo-icon>
                <furo-icon icon="payment"></furo-icon>
                <furo-icon icon="perm-camera-mic"></furo-icon>
                <furo-icon icon="perm-contact-calendar"></furo-icon>
                <furo-icon icon="perm-data-setting"></furo-icon>
                <furo-icon icon="perm-device-information"></furo-icon>
                <furo-icon icon="perm-identity"></furo-icon>
                <furo-icon icon="perm-media"></furo-icon>
                <furo-icon icon="perm-phone-msg"></furo-icon>
                <furo-icon icon="perm-scan-wifi"></furo-icon>
                <furo-icon icon="pets"></furo-icon>
                <furo-icon icon="picture-in-picture"></furo-icon>
                <furo-icon icon="picture-in-picture-alt"></furo-icon>
                <furo-icon icon="play-for-work"></furo-icon>
                <furo-icon icon="polymer"></furo-icon>
                <furo-icon icon="power-settings-new"></furo-icon>
                <furo-icon icon="pregnant-woman"></furo-icon>
                <furo-icon icon="print"></furo-icon>
                <furo-icon icon="query-builder"></furo-icon>
                <furo-icon icon="question-answer"></furo-icon>
                <furo-icon icon="radio-button-checked"></furo-icon>
                <furo-icon icon="radio-button-unchecked"></furo-icon>
                <furo-icon icon="receipt"></furo-icon>
                <furo-icon icon="record-voice-over"></furo-icon>
                <furo-icon icon="redeem"></furo-icon>
                <furo-icon icon="redo"></furo-icon>
                <furo-icon icon="refresh"></furo-icon>
                <furo-icon icon="remove"></furo-icon>
                <furo-icon icon="remove-circle"></furo-icon>
                <furo-icon icon="remove-circle-outline"></furo-icon>
                <furo-icon icon="remove-shopping-cart"></furo-icon>
                <furo-icon icon="reorder"></furo-icon>
                <furo-icon icon="reply"></furo-icon>
                <furo-icon icon="reply-all"></furo-icon>
                <furo-icon icon="report"></furo-icon>
                <furo-icon icon="report-problem"></furo-icon>
                <furo-icon icon="restore"></furo-icon>
                <furo-icon icon="restore-page"></furo-icon>
                <furo-icon icon="room"></furo-icon>
                <furo-icon icon="rounded-corner"></furo-icon>
                <furo-icon icon="rowing"></furo-icon>
                <furo-icon icon="save"></furo-icon>
                <furo-icon icon="schedule"></furo-icon>
                <furo-icon icon="search"></furo-icon>
                <furo-icon icon="select-all"></furo-icon>
                <furo-icon icon="send"></furo-icon>
                <furo-icon icon="settings"></furo-icon>
                <furo-icon icon="settings-applications"></furo-icon>
                <furo-icon icon="settings-backup-restore"></furo-icon>
                <furo-icon icon="settings-bluetooth"></furo-icon>
                <furo-icon icon="settings-brightness"></furo-icon>
                <furo-icon icon="settings-cell"></furo-icon>
                <furo-icon icon="settings-ethernet"></furo-icon>
                <furo-icon icon="settings-input-antenna"></furo-icon>
                <furo-icon icon="settings-input-component"></furo-icon>
                <furo-icon icon="settings-input-composite"></furo-icon>
                <furo-icon icon="settings-input-hdmi"></furo-icon>
                <furo-icon icon="settings-input-svideo"></furo-icon>
                <furo-icon icon="settings-overscan"></furo-icon>
                <furo-icon icon="settings-phone"></furo-icon>
                <furo-icon icon="settings-power"></furo-icon>
                <furo-icon icon="settings-remote"></furo-icon>
                <furo-icon icon="settings-voice"></furo-icon>
                <furo-icon icon="shop"></furo-icon>
                <furo-icon icon="shop-two"></furo-icon>
                <furo-icon icon="shopping-basket"></furo-icon>
                <furo-icon icon="shopping-cart"></furo-icon>
                <furo-icon icon="sort"></furo-icon>
                <furo-icon icon="speaker-notes"></furo-icon>
                <furo-icon icon="speaker-notes-off"></furo-icon>
                <furo-icon icon="spellcheck"></furo-icon>
                <furo-icon icon="star"></furo-icon>
                <furo-icon icon="star-border"></furo-icon>
                <furo-icon icon="star-half"></furo-icon>
                <furo-icon icon="stars"></furo-icon>
                <furo-icon icon="store"></furo-icon>
                <furo-icon icon="subdirectory-arrow-left"></furo-icon>
                <furo-icon icon="subdirectory-arrow-right"></furo-icon>
                <furo-icon icon="subject"></furo-icon>
                <furo-icon icon="supervisor-account"></furo-icon>
                <furo-icon icon="swap-horiz"></furo-icon>
                <furo-icon icon="swap-vert"></furo-icon>
                <furo-icon icon="swap-vertical-circle"></furo-icon>
                <furo-icon icon="system-update-alt"></furo-icon>
                <furo-icon icon="tab"></furo-icon>
                <furo-icon icon="tab-unselected"></furo-icon>
                <furo-icon icon="text-format"></furo-icon>
                <furo-icon icon="theaters"></furo-icon>
                <furo-icon icon="thumb-down"></furo-icon>
                <furo-icon icon="thumb-up"></furo-icon>
                <furo-icon icon="thumbs-up-down"></furo-icon>
                <furo-icon icon="timeline"></furo-icon>
                <furo-icon icon="toc"></furo-icon>
                <furo-icon icon="today"></furo-icon>
                <furo-icon icon="toll"></furo-icon>
                <furo-icon icon="touch-app"></furo-icon>
                <furo-icon icon="track-changes"></furo-icon>
                <furo-icon icon="translate"></furo-icon>
                <furo-icon icon="trending-down"></furo-icon>
                <furo-icon icon="trending-flat"></furo-icon>
                <furo-icon icon="trending-up"></furo-icon>
                <furo-icon icon="turned-in"></furo-icon>
                <furo-icon icon="turned-in-not"></furo-icon>
                <furo-icon icon="unarchive"></furo-icon>
                <furo-icon icon="undo"></furo-icon>
                <furo-icon icon="unfold-less"></furo-icon>
                <furo-icon icon="unfold-more"></furo-icon>
                <furo-icon icon="update"></furo-icon>
                <furo-icon icon="verified-user"></furo-icon>
                <furo-icon icon="view-agenda"></furo-icon>
                <furo-icon icon="view-array"></furo-icon>
                <furo-icon icon="view-carousel"></furo-icon>
                <furo-icon icon="view-column"></furo-icon>
                <furo-icon icon="view-day"></furo-icon>
                <furo-icon icon="view-headline"></furo-icon>
                <furo-icon icon="view-list"></furo-icon>
                <furo-icon icon="view-module"></furo-icon>
                <furo-icon icon="view-quilt"></furo-icon>
                <furo-icon icon="view-stream"></furo-icon>
                <furo-icon icon="view-week"></furo-icon>
                <furo-icon icon="visibility"></furo-icon>
                <furo-icon icon="visibility-off"></furo-icon>
                <furo-icon icon="warning"></furo-icon>
                <furo-icon icon="watch-later"></furo-icon>
                <furo-icon icon="weekend"></furo-icon>
                <furo-icon icon="work"></furo-icon>
                <furo-icon icon="youtube-searched-for"></furo-icon>
                <furo-icon icon="zoom-in"></furo-icon>
                <furo-icon icon="zoom-out"></furo-icon>
            </furo-vertical-flex>
        </div>
    `}}window.customElements.define("icons-demo",IconsDemo);class PageIcons extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            overflow: auto;
            height: 100%;
            padding: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
            <topic-intro title="SVG Icons"
                     text="In this section we'll talk about svg Icons component. We'll explain how you can used svg icons and custom them.">
                     
                <icons-demo></icons-demo>
            </topic-intro>
    
            
            <furo-markdown unsafe mdsrc="/FuroBaseComponent/_page/markdown/default-icons.md"></furo-markdown>
            <demo-furo-icon-list></demo-furo-icon-list>
            
            <topic-title title="custom icons"></topic-title>
            <furo-markdown mdsrc="/FuroBaseComponent/_page/markdown/custom-icons.md"></furo-markdown>
            
            
        `}}customElements.define("page-icons",PageIcons);class PageStyling extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * flow is ready lifecycle method
     */__fbpReady(){super.__fbpReady();//this._FBPTraceWires()
}static get properties(){return{}}static get styles(){// language=CSS
return _furoShell.Theme$1.getThemeForComponent(this.name)||[_furoShell.css`
            :host {
                display: block;
                overflow: auto;
                height: 100%;
                padding: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }
            furo-markdown{
                background-color: white;
            }
        `,Styling.theme]}render(){// language=HTML
return _furoShell.html`
        
            <furo-markdown unsafe mdsrc="/FuroBaseComponent/_page/markdown/styling-top.md"></furo-markdown>
            <style-category-sample></style-category-sample>
            <furo-markdown unsafe mdsrc="/FuroBaseComponent/_page/markdown/styling-bottom.md"></furo-markdown>
        `}}window.customElements.define("page-styling",PageStyling);class PanelMdLoader extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--pathChanged",e=>{let md=e.pathSegments[0];this._FBPTriggerWire("--fetchMD","/FuroBaseComponent/_page/markdown/"+md+".md");this.scrollTop=0})}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow-y: auto;
            box-sizing: border-box;
        }

        :host([hidden]) {
            display: none;
        }
        
        furo-markdown{
            padding: var(--spacing);
          background-color: var(--background);
            max-width: 960px;
            min-width: 500px;
        }
        
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-location url-space-regex="^/guide/md" @-location-changed="--pathChanged"></furo-location>
      <furo-markdown unsafe ƒ-fetch-md="--fetchMD"></furo-markdown>
    `}}window.customElements.define("panel-md-loader",PanelMdLoader);class ViewGuide extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * flow is ready lifecycle method
   */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPTriggerWire("--nav",nav)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--background, white);
            color: var(--on-background, black);
            --split-master-width: 250px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-pages {
            height: 100%;
        }
        

        /** the background of the bar itself. **/
        ::-webkit-scrollbar {
            width: 6px;
            background-color: var(--surface, white);
        }

        /** the directional buttons on the scrollbar. **/
        ::-webkit-scrollbar-button {
            background-color: var(--on-surface, black);
        }

        /** the empty space “below” the progress bar. **/
        ::-webkit-scrollbar-track {
        }

        /** the top-most layer of the the progress bar not covered by the thumb. **/
        ::-webkit-scrollbar-track-piece {
        }

        /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
        ::-webkit-scrollbar-thumb {
            background-color: var(--on-surface, black);
            border-radius: 3px;
        }

        /** the bottom corner of the scrollable element, where two scrollbar meet. **/
        ::-webkit-scrollbar-corner {
        }

        /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
        ::-webkit-resizer {
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-location url-space-regex="^/guide" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/guide/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="welcome">
          
          <panel-guide name="pages"></panel-guide>
          
          <page-icons name="icons"></page-icons>
          
          <page-styling name="styling"></page-styling>
          
          <panel-md-loader name="md"></panel-md-loader>
          
          <div name="welcome">Coming soon.</div>
        </furo-pages>
      </furo-split-view>
    `}}window.customElements.define("view-guide",ViewGuide)});
