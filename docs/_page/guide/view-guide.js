define(["exports","../furo-shell.js"],function(_exports,_furoShell){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.nav=_exports.$navConfig=void 0;class TopicIntro extends _furoShell.LitElement{constructor(){super();this.title="";this.text=""}static get properties(){return{title:{type:String},text:{type:String}}}static get styles(){// language=CSS
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
         */let customEvent=new Event("tock",{bubbles:!0});customEvent.detail=pos;this.dispatchEvent(customEvent)}},this.interval)}stop(){clearInterval(this._intervalObject)}}window.customElements.define("interval-pulse",IntervalPulse);const nav=[{group:"Fundamentals",items:[{label:"Overview",icon:"dashboard",href:"md/overview/"},{label:"Installation",icon:"flight-takeoff",href:"md/installation/"},{label:"Starterpacks",icon:"next-week",href:"md/starterpacks/"}]},{group:"\u30D5\u30ED\u30FC Furo FBP",items:[{label:"Wires",icon:"compare-arrows",href:"md/fbp-wires/"},{label:"Events",icon:"open-in-new",href:"md/fbp-events/"},{label:"Data",icon:"input",href:"md/fbp-data/"},{label:"More wiring",icon:"compare-arrows",href:"md/fbp-wires-more/"},{label:"Scripting",icon:"av:play-arrow",href:"md/fbp-scripting/"},{label:"Lifecycle",icon:"restore",href:"md/fbp-lifecycle/"},{label:"Debugging",icon:"bug-report",href:"md/fbp-debugging/"}]},{group:"Manuals",items:[{label:"Styling",icon:"image:color-lens",href:"styling/"},{label:"Theming",icon:"image:brush",href:"md/theming/"},{label:"Icons",icon:"social:mood",href:"icons/"},{label:"Dealing with data",icon:"cloud",href:"md/dealing-w-data/"},{label:"Data UI",icon:"view-column",href:"md/data-ui/"},{label:"Layouts helper",icon:"dashboard",href:"md/layout-helpers/"},{label:"Forms helper",icon:"dashboard",href:"md/form-helpers/"},{label:"App Config",icon:"settings",href:"md/config/"},{label:"Navigation",icon:"tab",href:"md/navigation/"},{label:"Routing",icon:"arrow-forward",href:"md/route/"},{label:"Timing",icon:"alarm",href:"md/timing/"},{label:"Util",icon:"star-border",href:"md/util/"}]},{group:"Advanced Topics",items:[{label:"build",icon:"build",href:"md/build/"},{label:"Testing",icon:"favorite",href:"md/testing/"},{label:"Writing Demos",icon:"picture-in-picture",href:"md/demo/"}]},{group:"Misc",items:[{label:"License",icon:"create",href:"md/license/"}]},{group:"Credits",items:[{label:"Lit Element",icon:"lightbulb-outline",href:"md/cred-lit/"},{label:"The Polymer Project",icon:"polymer",href:"md/cred-polymer/"},{label:"webcomponents.org",icon:"polymer",href:"md/cred-wc/"},{label:"J.P Morrison",icon:"thumb-up",href:"md/cred-morrison/"}]}];_exports.nav=nav;var nav_config={nav:nav};_exports.$navConfig=nav_config;class PanelMdLoader extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--pathChanged",e=>{let md=e.pathSegments[0];// this will import from xxx/guide/
this._FBPTriggerWire("--fetchMD","/_page/markdown/"+md+".md");this.scrollTop=0})}/**
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
        
          <panel-md-loader name="md"></panel-md-loader>
          
          <div name="welcome">Coming soon.</div>
        </furo-pages>
      </furo-split-view>
    `}}window.customElements.define("view-guide",ViewGuide)});