define(["exports","../furo-shell.js"],function(_exports,_furoShell){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.nav=_exports.$navConfig=void 0;const nav=[{group:"Fundamentals",items:[{label:"Overview",icon:"dashboard",href:"md/overview/"},{label:"Installation",icon:"flight-takeoff",href:"md/installation/"},{label:"Starterpacks",icon:"next-week",href:"md/starterpacks/"},{label:"Init / Env",icon:"next-week",href:"md/starterpacks/"}]},{group:"Fields",items:[{label:"Types",icon:"compare-arrows",href:"md/overview/"},{label:"Repeated",icon:"compare-arrows",href:"md/overview/"},{label:"Constraints",icon:"compare-arrows",href:"md/overview/"},{label:"Meta",icon:"compare-arrows",href:"md/overview/"},{label:"Options",icon:"compare-arrows",href:"md/overview/"},{label:"Protobuf",icon:"compare-arrows",href:"md/overview/"}]},{group:"Typesystem",items:[{label:"Definitions",icon:"compare-arrows",href:"md/overview/"},{label:"Fields",icon:"compare-arrows",href:"md/overview/"},{label:"Protobuf",icon:"compare-arrows",href:"md/overview/"}]},{group:"Entities",items:[{label:"Definitions",icon:"compare-arrows",href:"md/overview/"}]},{group:"Collections",items:[{label:"Definitions",icon:"compare-arrows",href:"md/overview/"}]},{group:"Tooling / Generators",items:[{label:"Overview",icon:"compare-arrows",href:"md/overview/"},{label:"Protobuf",icon:"compare-arrows",href:"md/overview/"},{label:"api spec",icon:"compare-arrows",href:"md/overview/"}]}];_exports.nav=nav;var nav_config={nav:nav};_exports.$navConfig=nav_config;class SpecMdLoader extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--pathChanged",e=>{let md=e.pathSegments[0];// this will import from xxx/guide/
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
          background-color: var(--surface);
            min-width: 500px;
        }
        
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-location url-space-regex="^/spec/md" @-location-changed="--pathChanged"></furo-location>
      <furo-markdown unsafe ƒ-fetch-md="--fetchMD"></furo-markdown>
    `}}window.customElements.define("spec-md-loader",SpecMdLoader);class ViewSpec extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
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
            background-color: var(--surface, white);
            color: var(--on-surface, black);
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
      <furo-location url-space-regex="^/spec" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/spec/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="welcome">
          <spec-md-loader name="md"></spec-md-loader>
        </furo-pages>
      </furo-split-view>
    `}}window.customElements.define("view-spec",ViewSpec)});