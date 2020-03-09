define(["exports","../furo-shell.js"],function(_exports,_furoShell){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.nav=_exports.$navConfig=void 0;class LightBulb extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.off=!0;this.color="#fee753"}/**
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
return _furoShell.Theme.getThemeForComponent("LightBulb")||_furoShell.css`
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
    `}}window.customElements.define("light-bulb",LightBulb);class FuroIntervalPulse extends _furoShell.LitElement{constructor(){super();this.interval=200;this.takt=4;if(this.auto){this.start()}}static get properties(){return{interval:{type:Number},takt:{type:Number},/**
       * Starts interval automatically
       */auto:Boolean}}start(){let cnt=0;clearInterval(this._intervalObject);this._intervalObject=setInterval(()=>{let pos=cnt++%this.takt,customEvent=new Event("tick",{bubbles:!0});/**
                                    * Fired when interval is
                                    * detail payload: position
                                    * @event tick
                                    */customEvent.detail=pos;this.dispatchEvent(customEvent);if(0==pos){/**
         * Fired when tock
         * detail payload: position
         * @event tick
         */let customEvent=new Event("tock",{bubbles:!0});customEvent.detail=pos;this.dispatchEvent(customEvent)}},this.interval)}stop(){clearInterval(this._intervalObject)}}window.customElements.define("furo-interval-pulse",FuroIntervalPulse);class StyleCategorySample extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * flow is ready lifecycle method
     */__fbpReady(){super.__fbpReady();//this._FBPTraceWires()
}static get properties(){return{}}static get styles(){// language=CSS
return[_furoShell.css`
            :host {
                display: block;

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary-light: #4ccd50;
                --primary: #4caf50;
                --primary-dark: #4b9b4f;
                --primary-variant: #2587a3;
                --on-primary: #ffffff;

                --secondary-light: #fdd756;
                --secondary: #fecf2f;
                --secondary-dark: #ffc911;
                --secondary-variant: #faedc1;
                --on-secondary: #212121;

                --accent-light: #ecf3ca;
                --accent: #cce35b;
                --accent-dark: #bada18;
                --on-accent: #212121;

                --background: #eeeeee;
                --on-background: #212121;

                --surface-light: #f3f3f3;
                --surface: #FEFEFE;
                --surface-dark: #f0f0f0;
                --on-surface: #212121;
                --separator: #E4E4E4;

                /* Input, Forms, Toast*/
                --error: #ea1c24;
                --on-error: #ffffff;

                --danger-light: #fc1c21;
                --danger: #ee1c21;
                --danger-dark: #de1c21;
                --on-danger: #f8f8f8;

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


                /* project specific */
                --blockquote: #ffc247;

            }

            :host([hidden]) {
                display: none;
            }

            .container {
                display: grid;

                justify-content: center;
                align-content: start;
                grid-row-gap: var(--spacing-xl);
                background-color: rgb(245, 242, 240);
            }

            div.container[four] {
                grid-template-columns: repeat(4, 225px);
                grid-template-rows: auto;
            }

            div.container[three] {
                grid-template-columns: repeat(3, 300px);
                grid-template-rows: auto;
            }

            div.container[two] {
                grid-template-columns: repeat(2, 450px);
                grid-template-rows: auto;
            }

            .item {
                height: 225px;
                padding: var(--spacing);
                box-sizing: border-box;
                cursor: pointer;
                transition: all 0.25s ease-in;
            }

            .narrow {
                height: 90px;
            }

            p {
                margin: 0;
            }

            .spacer {
                height: var(--spacing-xl);
                background-color: rgb(245, 242, 240);
            }

            div.item[primary] {
                background-color: var(--primary);
                color: var(--on-primary);
            }

            div.item[primary]:hover {
                background-color: var(--primary-dark);
            }

            div.item[primary-variant] {
                background-color: var(--primary-variant);
                color: var(--on-primary);
            }

            div.item[primary-variant]:hover {
                background-color: var(--primary-variant);
            }

            div.item[secondary] {
                background-color: var(--secondary);
                color: var(--on-secondary);
            }

            div.item[secondary]:hover {
                background-color: var(--secondary-dark);
            }

            div.item[secondary-variant] {
                background-color: var(--secondary-variant);
                color: var(--on-secondary);
            }

            div.item[background] {
                background-color: var(--background);
                color: var(--on-background);
            }

            div.item[surface] {
                background-color: var(--surface);
                color: var(--on-surface);
            }

            div.item[surface]:hover {
                background-color: var(--surface-dark);
            }

            div.item[error] {
                background-color: var(--error);
                color: var(--on-error);
            }

            div.item[onprimary] {
                background-color: var(--on-primary);
                color: black;
            }

            div.item[onsecondary] {
                background-color: var(--on-secondary);
                color: white;
            }

            div.item[onbackground] {
                background-color: var(--on-background);
                color: var(--background);
            }

            div.item[onsurface] {
                background-color: var(--on-surface);
                color: var(--surface);
            }

            div.item[onerror] {
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
    `}}window.customElements.define("style-category-sample",StyleCategorySample);class FuroButtonBar extends _furoShell.LitElement{constructor(){super();this._entity={};// default attribute values for hidden
this.hideNoRel=!0;this.hideNotValid=!1;this.hidePristine=!1;// default attribute values for disabled
this.disableNoRel=!1;this.disableNotValid=!0;this.disablePristine=!0}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Hides element if condition is true
       * Only available with bindEntity
       */hideNoRel:{type:String,attribute:"hide-no-rel"},hideNotValid:{type:String,attribute:"hide-not-valid"},hidePristine:{type:String,attribute:"hide-pristine"},/**
       * Disables element if condition is true
       * Only available with bindEntity
       */disableNoRel:{type:String,attribute:"disable-no-rel"},disableNotValid:{type:String,attribute:"disable-not-valid"},disablePristine:{type:String,attribute:"disable-pristine"}}}/**
     * Entity bind to control elements inside the bar.
     *
     * @param entity
     */bindEntity(entity){if(entity&&entity.data){this._entity=entity;this._entity.addEventListener("this-branch-value-changed",()=>{this._updateElements(this._entity)});this._entity.addEventListener("field-value-changed",()=>{this._updateElements(this._entity)});this._entity.addEventListener("data-injected",()=>{this._updateElements(this._entity)})}else{console.warn("Invalid binding ",entity,this)}}/**
     * Disable all elements inside
     * Can be used to disable during pending requests
     * e.g. furo-entity-agent @-request-started until @-response or @-response-error
     */disableAll(){let elems=this.querySelectorAll("*");elems.forEach(item=>{item.setAttribute("disabled","")})}/**
     * Enables all elements inside if check is true
     * Can be used to enable after a request
     */enableAll(){if(this._entity&&this._entity.data){this._updateElements(this._entity)}else{let elems=this.querySelectorAll("*");elems.forEach(item=>{item.removeAttribute("disabled")})}}/**
     * Set the default value if any hide/disable attribute  or
     * rel="" attribute is set
     * @param changedProperties
     * @private
     */firstUpdated(changedProperties){let nodes=this.querySelectorAll("*");nodes.forEach(item=>{if(null!==item.getAttribute("rel")&&null!==item.getAttribute("hide-no-rel")||null!==item.getAttribute("hide-not-valid")||null!==item.getAttribute("hide-pristine")){item.setAttribute("hidden","")}else if(null!==item.getAttribute("rel")&&null!==item.getAttribute("disable-no-rel")||null!==item.getAttribute("disable-not-valid")||null!==item.getAttribute("disable-pristine")){item.setAttribute("disabled","")}})}/**
     *
     * @param entity
     * @private
     */_updateElements(entity){let rels=[];entity.links.__childNodes.forEach(item=>{rels.push(item._value.rel)});let nodes=this.querySelectorAll("*");nodes.forEach(item=>{// hidden path
if(null!==item.getAttribute("rel")&&0<item.getAttribute("rel").length&&-1===rels.indexOf(item.getAttribute("rel"))&&null!==item.getAttribute("hide-no-rel")){item.setAttribute("hidden","")}// not valid
else if(null!==item.getAttribute("hide-not-valid")&&!entity._isValid){item.setAttribute("hidden","")}// pristine
else if(null!==item.getAttribute("hide-pristine")&&entity._pristine){item.setAttribute("hidden","")}else{item.removeAttribute("hidden")}// disable path
if(null!==item.getAttribute("rel")&&0<item.getAttribute("rel").length&&-1===rels.indexOf(item.getAttribute("rel"))&&null!==item.getAttribute("disable-no-rel")){item.setAttribute("disabled","")}else if(null!==item.getAttribute("disable-not-valid")&&!entity._isValid){item.setAttribute("disabled","")}else if(null!==item.getAttribute("disable-pristine")&&entity._pristine){item.setAttribute("disabled","")}else{item.removeAttribute("disabled")}})}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroButtonBar")||_furoShell.css`
            :host {
                display: block;
            }

            ::slotted(*) {
                margin: var(--spacing-xs, 8px) var(--spacing-xs, 8px) var(--spacing-xs, 8px) 0;
            }

            

            furo-horizontal-flex {
                flex-wrap: wrap;
            }

        `}/**
     *
     * @returns {TemplateResult|TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
            <furo-horizontal-flex>
                <slot></slot>
            </furo-horizontal-flex>
        `}}window.customElements.define("furo-button-bar",FuroButtonBar);class FuroCollapsibleBox extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              * @type {boolean}
              */this._open=!1;/**
                         * @type {string}
                         */this.iconOpen="expand-more";/**
                                    *
                                    * @type {string}
                                    */this.iconClosed="expand-less";/**
                                      *
                                      * @type {number}
                                      */this.tabindex=0;this.icon=this._open?this.iconOpen:this.iconClosed;// toggle method
this._FBPAddWireHook("--toggleClicked",()=>{this.toggle()});/**
         * minimal keyboard navigation
         */this._FBPAddWireHook("--keystrokes",e=>{switch(e.code){case"ArrowRight":this.open();break;case"ArrowLeft":this.close();break;case"Enter":this.toggle();break;}});this._FBPAddWireHook("--blured",()=>{if(this.closeOnBlur){this.close()}})}/**
     * Opens the Box
     */open(){this._open=!0;this.icon=this._open?this.iconOpen:this.iconClosed;this.requestUpdate()}/**
     * closes the box
     */close(){this._open=!1;this.icon=this._open?this.iconOpen:this.iconClosed;this.requestUpdate()}/**
     * Toggles the box open/close
     */toggle(){this._open=!this._open;this.icon=this._open?this.iconOpen:this.iconClosed;this.requestUpdate();if(!0==this._open){/**
       * @event opened
       *
       * Fired when collapsible box was opened
       *
       * detail payload: void
       */let customEvent=new Event("opened",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent)}else{/**
       * @event closed
       * Fired when collapsible box was closed
       *
       * detail payload: void
       */let customEvent=new Event("closed",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent)}/**
       * @event toggled
       * Fired when collapsible-box was toggled
       * detail payload: Boolean true for open, false for closed
       * @param Boolean true for open, false for closed
       */let customEvent=new Event("toggled",{composed:!0,bubbles:!1});customEvent.detail=this._open;this.dispatchEvent(customEvent)}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.icon=this._open?this.iconOpen:this.iconClosed;this.requestUpdate()}/**
     * focus the box (focuses the icon)
     */focus(){this._FBPTriggerWire("--focus");if(this.openOnFocus){this.open()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Label der Collapsible
       */label:{type:String},/**
      * Label der Collapsible
      */secondaryText:{type:String,attribute:"secondary-text"},/**
       * Opens the box on focus
       */openOnFocus:{type:Boolean,attribute:"open-on-focus"},/**
       * Closes the box on blur (icon)
       */closeOnBlur:{type:Boolean,attribute:"close-on-blur"},/**
       * https://developer.mozilla.org/de/docs/Web/HTML/Globale_Attribute/tabindex
       */tabindex:{type:Number},/**
       * Indicates the collapse state, set the collapse state
       */_open:{type:Boolean,reflect:!0,attribute:"open"},/**
       * The icon for the open state.
       *
       */iconOpen:{type:String,attribute:"icon-open"},/**
       * The icon for the closed state.
       *
       */iconClosed:{type:String,attribute:"icon-closed"},/**
       * reserved flag
       * todo implement remember component
       */rememberState:{type:Boolean}}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroCollapsibleBox")||_furoShell.css`

        :host {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            padding: var(--furo-collapsible-box-padding, 16px);
            background: var(--furo-collapsible-box-background, white);
            display: block;
            margin: var(--furo-collapsible-box-margin, 16px);
            box-sizing: border-box;

        }

        :host([hidden]) {
            display: none;
        }

        label {
            display: block;
            padding-left: 8px;
            cursor: pointer;

            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0;
            margin: 0;
            font-weight: normal;
        }

        .secondary{
            padding-left: var(--spacing,24px);
            font-size: 14px;
            letter-spacing: 0.1px;
        }
        .content {
            display: none;
        }

        :host([open]) .content {
            display: block;
        }

        .head {
            border-bottom: 1px solid var(--separator-color, gainsboro);;

        }

        furo-icon {
            width: 24px;
            height: 24px;
            cursor: pointer;
            outline: none;
        }

        furo-icon:focus {
            color: var(--primary, #CDCDCD)
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<furo-horizontal-flex class="head">
  <furo-icon tabindex="${this.tabindex}" ƒ-focus="--focus" icon="${this.icon}" @-keydown="--keystrokes(*)" @-click="--toggleClicked" @-blur="--blured"></furo-icon>     
  <label  @-click="--toggleClicked">${this.label}</label>
  <div flex class="secondary"  @-click="--toggleClicked">${this.secondaryText}</div>
  <slot name="context"></slot>
</furo-horizontal-flex>
<div class="content"><slot></slot></div>
    `}}window.customElements.define("furo-collapsible-box",FuroCollapsibleBox);class FuroFormLayouter extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.narrow=!1;this.narrower=!1;this.breakpointBig=810;this.breakpointSmall=405}_checkSize(width){if(0<width&&width<this.breakpointBig&&width>this.breakpointSmall){this.setAttribute("narrow","");this.narrow=!0;this.removeAttribute("narrower");this.narrower=!1;this._fireResize()}else if(0<width&&width<=this.breakpointSmall){this.setAttribute("narrower","");this.narrower=!0;this.removeAttribute("narrow");this.narrow=!1;this._fireResize()}else{this.removeAttribute("narrow");this.removeAttribute("narrower");this.narrow=this.narrower=!1}}_fireResize(){this.dispatchEvent(new CustomEvent("layout-changed",{detail:this,bubbles:!0,composed:!0}))}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this.updateComplete.then(()=>{if(window.ResizeObserver){const ro=new ResizeObserver(entries=>{for(let entry of entries){this._checkSize(entry.contentRect.width)}});ro.observe(this)}else{// fallback, just listen to the resize event
setTimeout(()=>{let cr=this.getBoundingClientRect();this._checkSize(cr.width)},1);window.addEventListener("resize",e=>{let cr=this.getBoundingClientRect();this._checkSize(cr.width)})}})}static get properties(){return{/**
       * Set custom breakpoints max. two values
       * Default: "810,405"
       */breakpointBig:{type:String,attribute:"breakpoint-big",reflect:!0},breakpointSmall:{type:String,attribute:"breakpoint-small",reflect:!0},/**
       * Set narrow-fix attribute to force
       * the layout analog to breakpoint big
       */narrowFix:{type:Boolean,attribute:"narrow-fix",reflect:!0},/**
       * Set narrower-fix attribute to force
       * 1 column view (analog breakpoint small)
       */narrowerFix:{type:Boolean,attribute:"narrower-fix",reflect:!0}}}static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroFormLayouter")||_furoShell.css`
            :host {
                display: grid;
                grid-row-gap: 0px;
                grid-column-gap: 0px;
                grid-template-columns: repeat(1, 1fr);
            }

            :host([hidden]) {
                display: none;
            }

            ::slotted(*) {
                width: 100%;
            }

            :host([two]) ::slotted(*[double]) {
                grid-column: span 2 / auto;
            }

            :host([two]) ::slotted(*[newline]) {
                grid-column-start: 1;
                grid-column-end: 2;
            }
            
            :host([two]) ::slotted(*[newline][double]) {
                grid-column: span 2 / auto;
            }

            :host([two]) ::slotted(*[full]) {
                grid-column: span 2 / auto;
            }

            :host([four]) ::slotted(*[double]) {
                grid-column: span 2  / auto;
            }

            :host([four]) ::slotted(*[newline]) {
                grid-column-start: 1;
                grid-column-end: 2;
            }
            
            :host([four]) ::slotted(*[newline][double]) {
                grid-column-start: 1;
                grid-column-end: 3;
            }

            :host([four]) ::slotted(*[full]) {
                grid-column: span 4 / auto;
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

            :host([narrow]) > ::slotted(*[full]) {
                grid-column: auto;
            }

            :host([four][narrow]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([four][narrow]) > ::slotted(*[double]) {
                grid-column: auto;
            }

            :host([narrower]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([narrower]) > ::slotted(*) {
                grid-column: auto;
            }

            :host([narrow-fix]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([four][narrower]) > ::slotted(*) {
                grid-column: auto;
            }

            :host([four][narrow-fix]) {
                grid-template-columns: repeat(2, 1fr);
            }

            :host([four][narrower-fix]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([narrower-fix]) {
                grid-template-columns: repeat(1, 1fr);
            }

            :host([narrower-fix]) > ::slotted(*) {
                grid-column: auto;
            }

            :host([card]) {

                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12),
                0 3px 1px -2px rgba(0, 0, 0, 0.2);

                background: var(--furo-card-background, var(--surface, white));
                padding: var(--furo-card-padding, var(--spacing-xs, 8px));
                margin: var(--furo-card-margin, 0);


                border-radius: 4px;
                font-size: 14px;
                letter-spacing: 0.1px;
            }
        `}/**
     * @private
     * @returns {TemplateResult | TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <slot></slot>
        `}}window.customElements.define("furo-form-layouter",FuroFormLayouter);class FuroForm extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hasaction=0<this.querySelectorAll("*[slot=\"action\"]").length;this.hasmedia=0<this.querySelectorAll("*[slot=\"media\"]").length}/**
     * You can show a progress indicator while you have pending requests or work
     * Shows furo-loading-indicator-bar
     */startActivity(){this._FBPTriggerWire("--activityStarted")}/**
     * Stop loading indicator
     * Hides furo-loading-indicator-bar
     */stopActivity(){this._FBPTriggerWire("--activityStopped")}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Main title
       */headerText:{type:String,attribute:"header-text"},secondaryText:{type:String,attribute:"secondary-text"},hasaction:{type:Boolean,reflect:!0},hasmedia:{type:Boolean,reflect:!0}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroForm")||_furoShell.css`
      :host {
        display: block;
        --furo-button-padding: var(--spacing-xs, 8px);
        background: var(--furo-form-background, var(--surface, white));
        padding-bottom: var(--furo-form-padding, var(--spacing-xs, 8px));
        margin: var(--furo-form-margin, 0);
        box-sizing: border-box;
        position: relative;
        font-size: 14px;
        letter-spacing: 0.1px;
        max-width: var(--furo-form-max-width, 90em);
      }

      furo-loading-indicator-bar {
        position: absolute;
        top: 0;
        width: 100%;
      }

      :host([hidden]) {
        display: none;
      }

      :host([hasaction]) .content {
        padding-bottom: 54px;
      }


      /** no padding-top on .content if header-text is set **/
      :host([header-text]) .content {
        padding-top: 0;
      }

      /** set padding-top on .content if media is present **/
      :host([header-text][hasmedia]) .content {
        padding-top: var(--furo-form-padding, var(--spacing-s, 16px));
      }


      .content ::slotted(h1) {
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 0;
        margin: 0;
        font-weight: normal;
        margin-bottom: var(--spacing-xxs, 4px);
        margin-top: var(--spacing-s, 16px);
      }

      .content ::slotted(secondary) {
        color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
        line-height: 22px;
        font-size: unset;
        display: block;
        margin-bottom: var(--spacing-xs, 4px);
      }

      .content ::slotted(h2) {
        line-height: 24px;
        letter-spacing: 0;
        margin: 0;
        font-weight: normal;
        margin-bottom: var(--spacing-xxs, 4px);
        margin-top: var(--spacing-s, 16px);
      }

      .action {
        position: absolute;
        bottom: var(--furo-form-padding, var(--spacing-xs, 8px));
        left: var(--furo-form-padding, 0);
        right: var(--furo-form-padding, 0);

      }


      .head {
        padding-bottom: var(--spacing-s, 16px);
      }

      .head span {
        font-size: 14px;
        height: 24px;
        letter-spacing: 0.1px;
        color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
        line-height: 20px;
      }

      h1 {
        font-size: 20px;
        height: 40px;
        line-height: 56px;
        margin: 0;
        font-weight: normal;

      }


      .media ::slotted(*) {
        width: 100%;
      }
    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
      <furo-loading-indicator-bar ƒ-start="--activityStarted" ƒ-stop="--activityStopped"></furo-loading-indicator-bar>
      ${this.headerText?_furoShell.html`
      <div class="head">
         <h1>${this.headerText}</h1>
         ${this.secondaryText?_furoShell.html`<span>${this.secondaryText}</span>`:_furoShell.html``}     
      </div>`:_furoShell.html``} 
      <div class="media">
      <slot name="media"></slot>
      </div>
      <div class="content">
      <slot></slot>
      </div>
      <div class="action">
        <slot name="action"></slot>
      </div>
    `}}window.customElements.define("furo-form",FuroForm);class FuroInputRow extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              *
              * @type {string}
              */this.label="set the label!"}static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroInputRow")||_furoShell.css`
        :host {
            display: block;
        }

        div {
            line-height: 100%;
            width: var(--input-row-width,140px);
        }

        ::slotted(*) {
            resize: horizontal;
        }
    `}render(){// language=HTML
return _furoShell.html`
            <furo-horizontal-flex>
                <div>${this.label}</div>
                <slot></slot>
            </furo-horizontal-flex>
        `}static get properties(){return{/**
       * The label for the input row
       */label:{type:String}}}}window.customElements.define("furo-input-row",FuroInputRow);class SampleForm extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
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
        `]}render(){// language=HTML
return _furoShell.html`
        <form-field-row>
            <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
            <furo-select-input label="Mutation reason" value="New" list="New, mutation, remake"></furo-select-input>
            <p>Put your additional information here...</p>
        </form-field-row>
    `}}window.customElements.define("sample-form",SampleForm);class FuroIconWithLabel extends(0,_furoShell.FBP)(_furoShell.LitElement){static get properties(){return{icon:{type:String}}}static get styles(){// language=CSS
return[_furoShell.css`
                :host {
                    height: 48px;
                    display: inline-block;
                    width: 7em;
                    margin: 1em 0.5em;
                    text-align: center;
                }

                span{
                    display: block;
                    font-size: 8px;
                }
                
                furo-icon{
                    margin: auto;
                    display: block;
                    
                }

            `]}render(){// language=HTML
return _furoShell.html`
            <furo-icon icon="${this.icon}"></furo-icon>
            <span> ${this.icon} </span>
        `}}window.customElements.define("furo-icon-with-label",FuroIconWithLabel);class IconsDemo extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}static get properties(){return{}}static get styles(){// language=CSS
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
    `}}window.customElements.define("icons-demo",IconsDemo);class FuroDocPropertiesItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.prop}data(data){this.prop=data;if("protected"===data.privacy){this.setAttribute("hidden","")}this._FBPTriggerWire("--data",data);this.requestUpdate()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocPropertiesItem")||_furoShell.css`
        :host {
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
        }


        :host([hidden]) {
            display: none;
        }
        span.default{
            color:green;
        }
        span.propname{
            font-family: 'Roboto Mono', 'Courier New', 'Courier', monospace;
            font-weight: 900;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){this.cname=this.prop.name.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();// language=HTML
return _furoShell.html`
      <span class="propname">${this.cname}</span>   <span class="propname">(${this.prop.name}):</span>  ${this.prop.type} = <span class="default">${this.prop.defaultValue}</span>  <i>${this.prop.inheritedFrom}</i>
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `}}window.customElements.define("furo-doc-properties-item",FuroDocPropertiesItem);class FuroDocProperties extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hidden=!0}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * hide props if empty
       */hidden:{type:Boolean,reflect:!0}}}data(data){if(Array.isArray(data)){data=data.sort((a,b)=>{var textA=a.name.toUpperCase(),textB=b.name.toUpperCase();return textA<textB?-1:textA>textB?1:0});this._FBPTriggerWire("--data",data);this.hidden=!1}else{this.hidden=!0}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocProperties")||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }

        h2 {
            margin-top: 48px;
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Attributes & Properties</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-properties-item ƒ-data="--item"></furo-doc-properties-item>

      </template>
    `}}window.customElements.define("furo-doc-properties",FuroDocProperties);class FuroDocMethodsItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.method}data(data){this.method=data;if("protected"===data.privacy){this.setAttribute("hidden","")}this._FBPTriggerWire("--data",data);this.requestUpdate()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocMethodsItem")||_furoShell.css`
        :host {
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
        }

        strong {
            font-weight: 700;
            font-family: "Roboto Mono";

        }

        :host([hidden]) {
            display: none;
        }

        span.name {
            color: green;
        }

        span.paramname {
            font-family: "Roboto Mono";
            color: #717171;
        }

        span.type, span.return {
            color: #717171;
            font-weight: 900;
        }


        span.type:after {
            content: ","
        }
        .inherited{
            font-style: italic;
            line-height: 24px;
            color: #7f7f7f;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
if(!this.method.return){this.method.return={}}this.cname=this.method.name.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return _furoShell.html`
      <strong>${this.cname}</strong>  (<template is="flow-repeat" ƒ-inject-items="--data(*.params)">
      <span class="name" ƒ-.inner-text="--item(*.name)"></span> : 
      <span class="type" ƒ-.inner-text="--item(*.type)"></span></template>) ⟹ <span class="return">${this.method.return.type}</span>
      
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <ul>
      <template is="flow-repeat" ƒ-inject-items="--data(*.params)">
    <li><span class="paramname" ƒ-.inner-text="--item(*.name)">fd</span> <br>
    <furo-markdown ƒ-parse-markdown="--item(*.description)">></furo-markdown></li>   
</template></ul> 
    `}}window.customElements.define("furo-doc-methods-item",FuroDocMethodsItem);class FuroDocMethods extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hidden=!0}/**
     * @private
     * @return {Object}
     */static get methods(){return{/**
       * hide props if empty
       */hidden:{type:Boolean,reflect:!0}}}data(data){if(Array.isArray(data)){// show public fields only hide inhterite from inheritedFrom: "LitElement"
data=data.filter(m=>{// todo: filter out inherited stuff like connectedCallback and so
return"public"===m.privacy&&!m.inheritedFrom});data=data.sort((a,b)=>{var textA=a.name.toUpperCase(),textB=b.name.toUpperCase();return textA<textB?-1:textA>textB?1:0});this._FBPTriggerWire("--data",data);this.removeAttribute("hidden")}else{this.setAttribute("hidden","")}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocMethods")||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }

        h2 {
            margin-top: 48px;
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Methods</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-methods-item ƒ-data="--item"></furo-doc-methods-item>

      </template>
    `}}window.customElements.define("furo-doc-methods",FuroDocMethods);class FuroDocEventsItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.prop}data(data){this.prop=data;if("protected"===data.privacy){this.setAttribute("hidden","")}this._FBPTriggerWire("--data",data);this.requestUpdate()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocEventsItem")||_furoShell.css`
        :host {
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
        }
        strong {
            font-weight: 700;
            font-family: "Roboto Mono";
            
        }
        :host([hidden]) {
            display: none;
        }
        span.type, span.return {
            color: #717171;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <strong>${this.prop.name}</strong> : <span class="type">${this.prop.type}</span> 
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `}}window.customElements.define("furo-doc-events-item",FuroDocEventsItem);class FuroDocEvents extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hidden=!0}/**
     * @private
     * @return {Object}
     */static get events(){return{/**
       * hide props if empty
       */hidden:{type:Boolean,reflect:!0}}}data(data){if(Array.isArray(data)){this._FBPTriggerWire("--data",data);data=data.sort((a,b)=>{var textA=a.name.toUpperCase(),textB=b.name.toUpperCase();return textA<textB?-1:textA>textB?1:0});this.removeAttribute("hidden")}else{this.setAttribute("hidden","")}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocEvents")||_furoShell.css`
        :host {
            display: block;
        }

        

        :host([hidden]) {
            display: none;
        }

        h2 {
            margin-top: 48px;
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Events</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-events-item ƒ-data="--item"></furo-doc-events-item>

      </template>
    `}}window.customElements.define("furo-doc-events",FuroDocEvents);class FuroDemoLink extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDemoLink")||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}injectData(data){this.data=data}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <a href="../demo/${this.data.url}">${this.data.url}</a> <i>${this.data.description}</i>
    `}}window.customElements.define("furo-demo-link",FuroDemoLink);class FuroDocElement extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.element={}}hide(){this.setAttribute("hidden","")}print(analysisElement){this.element=analysisElement;this._FBPTriggerWire("--data",this.element);if(this.element.demos){this.element.demos.forEach(d=>{d.package=this.element.__package});this._FBPTriggerWire("--demos",this.element.demos)}this.removeAttribute("hidden");this.requestUpdate();this.scrollTop=0}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocElement")||_furoShell.css`
        :host {
            display: block;
            font-weight: 400;
            font-size: 14px;
            max-width: 1024px;
        }

        :host([hidden]) {
            display: none;
        }

        h1{
            font-size: 2.8rem;
            font-weight: 400;
            line-height: 3.5rem;
            margin-top: 0;
            letter-spacing: normal;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        h2.description {
            margin-top: 20px;
            margin-bottom: 24px;
            max-width: 600px;
            color: #999;
            border-bottom: none;
        }
        h2 {
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`      
      <h1>&lt; ${this.element.tagname} &gt;</h1>
      <h2 class="description">${this.element.summary}</h2>         
      <h2>Description</h2>
      <furo-markdown unsafe ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <h2>Demos</h2>
      <template is="flow-repeat" ƒ-inject-items="--demos">
          <furo-demo-link ƒ-inject-data="--item"></furo-demo-link>
      </template>
      <furo-doc-properties ƒ-data="--data(*.properties)"></furo-doc-properties>
      <furo-doc-events ƒ-data="--data(*.events)"></furo-doc-events>
      <furo-doc-methods ƒ-data="--data(*.methods)"></furo-doc-methods>
    `}}window.customElements.define("furo-doc-element",FuroDocElement);class FuroDocClassMethodsItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.method}data(data){this.method=data;if("protected"===data.privacy){this.setAttribute("hidden","")}this._FBPTriggerWire("--data",data);this.requestUpdate()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocClassMethodsItem")||_furoShell.css`
        :host {
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
        }

        strong {
            font-weight: 700;
            font-family: "Roboto Mono";
           
        }

        :host([hidden]) {
            display: none;
        }

        span.name {
            color: green;
        }

        span.paramname {
            font-family: "Roboto Mono";
            color: #717171;
        }

        span.type, span.return {
            color: #717171;
            font-weight: 900;
        }
        

        span.type:after {
            content: ","
        }
        .inherited{
            font-style: italic;
            line-height: 24px;
            color: #7f7f7f;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
if(!this.method.return){this.method.return={}}return _furoShell.html`
      <strong>${this.method.name}</strong>  (<template is="flow-repeat" ƒ-inject-items="--data(*.params)">
      <span class="name" ƒ-.inner-text="--item(*.name)"></span> : 
      <span class="type" ƒ-.inner-text="--item(*.type)"></span></template>) ⟹ <span class="return">${this.method.return.type}</span>
       <span class="inherited"> Inherited from ${this.method.inheritedFrom}</span>
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <ul>
      <template is="flow-repeat" ƒ-inject-items="--data(*.params)">
    <li><span class="paramname" ƒ-.inner-text="--item(*.name)">fd</span> <br>
    <furo-markdown ƒ-parse-markdown="--item(*.description)">></furo-markdown></li>   
</template></ul> 
    `}}window.customElements.define("furo-doc-class-methods-item",FuroDocClassMethodsItem);class FuroDocClassMethods extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hidden=!0}/**
     * @private
     * @return {Object}
     */static get methods(){return{/**
       * hide props if empty
       */hidden:{type:Boolean,reflect:!0}}}data(data){if(Array.isArray(data)){// show public fields only
data=data.filter(m=>{return"public"===m.privacy});this._FBPTriggerWire("--data",data);this.removeAttribute("hidden")}else{this.setAttribute("hidden","")}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocClassMethods")||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }

        h2 {
            font-weight: 400;
            line-height: 28px;
            font-size: 20px;
            margin-top: 48px;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Methods</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-class-methods-item ƒ-data="--item"></furo-doc-class-methods-item>

      </template>
    `}}window.customElements.define("furo-doc-class-methods",FuroDocClassMethods);class FuroDocClass extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.class={}}hide(){this.setAttribute("hidden","")}print(analysisElement){this.class=analysisElement;this._FBPTriggerWire("--data",this.class);this.removeAttribute("hidden");this.requestUpdate();this.scrollTop=0}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocClass")||_furoShell.css`
        :host {
            display: block;
            font-weight: 400;
            font-size: 14px;
            max-width: 1024px;
        }

        :host([hidden]) {
            display: none;
        }
        h1{
            font-size: 2.8rem;
            font-weight: 400;
            line-height: 3.5rem;
            margin-top: 0;
            letter-spacing: normal;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        h2.description {
            margin-top: 20px;
            margin-bottom: 24px;
            max-width: 600px;
            color: #999;
            border-bottom: none;
        }
        h2 {
            font-weight: 400;
            line-height: 28px;
            font-size: 20px;
            margin-top: 48px;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h1>${this.class.name}</h1>
      <h2 class="description">${this.class.summary}</h2>  
      <h2>Description</h2>
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <furo-doc-properties ƒ-data="--data(*.properties)"></furo-doc-properties>     
      <furo-doc-class-methods ƒ-data="--data(*.methods)"></furo-doc-class-methods>
    `}}window.customElements.define("furo-doc-class",FuroDocClass);class FuroDocMenuElementItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();//forward click to a
this.addEventListener("click",e=>{this._FBPTriggerWire("--click",e)})}setItem(item){this.item=item;this.selected=item.__selected;if(this.selected){setTimeout(()=>{if(this.scrollIntoViewIfNeeded){this.scrollIntoViewIfNeeded()}},16)}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */selected:{type:Boolean,reflect:!0}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocMenuElementItem")||_furoShell.css`
        :host {
            display: list-item;
            padding-left: var(--spacing-s);
            line-height: 30px;
            margin-bottom: 4px;
            color: var(--on-background);
            letter-spacing: 0.0178571em;
            font-size: 0.875rem;
            font-weight: 300;
            transition: all 0.2s ease 0s;
            cursor: pointer;
        }
        
        :host([hidden]) {
            display: none;
        }
        

        :host(:hover), :host([selected]) {
            background-color: var(--secondary);
            border-radius: 4px;
            color: var(--on-secondary);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<a href="${this.item.tagname}" ƒ-click=":STOP,--click"></a>&lt;${this.item.tagname}&gt;
      
    `}}window.customElements.define("furo-doc-menu-element-item",FuroDocMenuElementItem);class FuroDocMenuClassItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",e=>{this._FBPTriggerWire("--click",e)})}setItem(item){this.item=item;this.selected=item.__selected;if(this.selected){setTimeout(()=>{if(this.scrollIntoViewIfNeeded){this.scrollIntoViewIfNeeded()}},16)}// remove classes without names (ie superclasses)
if(!this.item.name){this.remove()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */selected:{type:Boolean,reflect:!0}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocMenuClassItem")||_furoShell.css`
        :host {
            display: list-item;
            padding-left: var(--spacing-s);
            line-height: 30px;
            margin-bottom: 4px;
            color: var(--on-background);
            letter-spacing: 0.0178571em;
            font-size: 0.875rem;
            font-weight: 300;
            transition: all 0.2s ease 0s;
            cursor: pointer;
        }

        :host([hidden]) {
            display: none;
        }


        :host(:hover), :host([selected]) {
            background-color: var(--secondary);
            border-radius: 4px;
            color: var(--on-secondary);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <a href="${this.item.name}" ƒ-click=":STOP,--click"></a>${this.item.name}
    `}}window.customElements.define("furo-doc-menu-class-item",FuroDocMenuClassItem);class FuroDocMenu extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}analysis(analysis){if(analysis.elements){this._FBPTriggerWire("--elements",analysis.elements)}else{//clear
this._FBPTriggerWire("--elements",[])}if(analysis.classes){this._FBPTriggerWire("--classes",analysis.classes)}else{//clear
this._FBPTriggerWire("--classes",[])}if(analysis.mixins){this._FBPTriggerWire("--mixins",analysis.mixins)}else{//clear
this._FBPTriggerWire("--mixins",[])}// send selected, analysis.__selectedElement is set from furo-doc-fetch-analysis
if(analysis.__selectedElement){/**
       * @event element
       * Fired when element is selected
       * detail payload: element analysis data
       */let customEvent=new Event("element",{composed:!0,bubbles:!0});customEvent.detail=analysis.__selectedElement;this.dispatchEvent(customEvent)}// send selected class
if(analysis.__selectedClass){/**
       * @event element
       * Fired when element is selected
       * detail payload: element analysis data
       */let customEvent=new Event("class",{composed:!0,bubbles:!0});customEvent.detail=analysis.__selectedClass;this.dispatchEvent(customEvent)}// send selected mixin
if(analysis.__selectedMixin){/**
       * @event element
       * Fired when element is selected
       * detail payload: element analysis data
       */let customEvent=new Event("mixin",{composed:!0,bubbles:!0});customEvent.detail=analysis.__selectedMixin;this.dispatchEvent(customEvent)}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocMenu")||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing-s);
            background-color: var(--surface);
        }

        :host([hidden]) {
            display: none;
        }

        h3 {
            position: sticky;
            top: 0;
            background-color: var(--surface);
            z-index: 1;
            margin-top: 0;
            color: var(--on-background);
            letter-spacing: .07272727em;
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
        }


        ul {
            list-style: none;
            padding: 0;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`

      <h3>Elements</h3>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--elements" identity-path="name">
          <furo-doc-menu-element-item ƒ-set-item="--item"></furo-doc-menu-element-item>
        </template>
      </ul>


      <h3>Mixins</h3>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--mixins" identity-path="name">
          <furo-doc-menu-class-item ƒ-set-item="--item"></furo-doc-menu-class-item>
        </template>
      </ul>

      <h3>Classes</h3>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--classes" identity-path="name">
          <furo-doc-menu-class-item ƒ-set-item="--item"></furo-doc-menu-class-item>
        </template>
      </ul>

    `}}window.customElements.define("furo-doc-menu",FuroDocMenu);class FuroDocFetchAnalysis extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}fetchSrc(src){fetch(src).then(res=>res.json()).then(analysis=>{this._analysis=analysis;if(this.__location){this.checkSubroute(this.__location)}}).catch(err=>err)}checkSubroute(location){// enqueue when analysis is not
if(!this._analysis){this.__location=location;return}// Subelement deep linking
// on ../input/component-name we want to select component-name
if(location.pathSegments[0]){let subElement=location.pathSegments[0];if(this._analysis.elements){this._analysis.elements.forEach(e=>{// needed for linking to the demos
e.__package=this._path;if(e.tagname===subElement){this._analysis.__selectedElement=e;//disable class
this._analysis.__selectedClass=void 0;this._analysis.__selectedMixin=void 0;e.__selected=!0}else{e.__selected=!1}})}// check classes if available
if(this._analysis.classes){this._analysis.classes.forEach((e,i)=>{if(e.name===subElement){this._analysis.__selectedClass=e;//disable element
this._analysis.__selectedMixin=void 0;this._analysis.__selectedElement=void 0;e.__selected=!0}else{e.__selected=!1}})}// check mixins if available
if(this._analysis.mixins){this._analysis.mixins.forEach((e,i)=>{if(e.name===subElement){this._analysis.__selectedMixin=e;//disable element
this._analysis.__selectedClass=void 0;this._analysis.__selectedElement=void 0;e.__selected=!0}else{e.__selected=!1}})}}else{// select first element on default
if(this._analysis.elements){this._analysis.__selectedElement=this._analysis.elements[0]}else{// try with classes
if(this._analysis.classes){this._analysis.__selectedClass=this._analysis.classes[0]}}}/**
       * @event data
       * Fired when analysis loaded
       * detail payload: analysis
       */let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=this._analysis;this.dispatchEvent(customEvent)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroDocFetchAnalysis")||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}}window.customElements.define("furo-doc-fetch-analysis",FuroDocFetchAnalysis);class DemoFuroIconList extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("DemoFuroIconList")||_furoShell.css`
        :host {
            display: block;
            
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

        h2 {
            margin-top: 0;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Iconset baseIcons</h2>
      <p>
      <pre>
        import {FuroBaseIcons} from "@furo/icon/iconsets/baseIcons";
        Iconset.registerIconset("default", FuroBaseIcons);
      </pre></p>
      <div>
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
      </div>


      <h2>Iconset avIcons</h2>
      <p>
      <pre>
        import {AvIcons} from "@furo/icon/iconsets/avIcons";
        Iconset.registerIconset("av", AvIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="av:add-to-queue"></furo-icon-with-label>
        <furo-icon-with-label icon="av:airplay"></furo-icon-with-label>
        <furo-icon-with-label icon="av:album"></furo-icon-with-label>
        <furo-icon-with-label icon="av:art-track"></furo-icon-with-label>
        <furo-icon-with-label icon="av:av-timer"></furo-icon-with-label>
        <furo-icon-with-label icon="av:branding-watermark"></furo-icon-with-label>
        <furo-icon-with-label icon="av:call-to-action"></furo-icon-with-label>
        <furo-icon-with-label icon="av:closed-caption"></furo-icon-with-label>
        <furo-icon-with-label icon="av:equalizer"></furo-icon-with-label>
        <furo-icon-with-label icon="av:explicit"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fast-forward"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fast-rewind"></furo-icon-with-label>
        <furo-icon-with-label icon="av:featured-play-list"></furo-icon-with-label>
        <furo-icon-with-label icon="av:featured-video"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-dvr"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-manual-record"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-new"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-pin"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-smart-record"></furo-icon-with-label>
        <furo-icon-with-label icon="av:forward-10"></furo-icon-with-label>
        <furo-icon-with-label icon="av:forward-30"></furo-icon-with-label>
        <furo-icon-with-label icon="av:forward-5"></furo-icon-with-label>
        <furo-icon-with-label icon="av:games"></furo-icon-with-label>
        <furo-icon-with-label icon="av:hd"></furo-icon-with-label>
        <furo-icon-with-label icon="av:hearing"></furo-icon-with-label>
        <furo-icon-with-label icon="av:high-quality"></furo-icon-with-label>
        <furo-icon-with-label icon="av:library-add"></furo-icon-with-label>
        <furo-icon-with-label icon="av:library-books"></furo-icon-with-label>
        <furo-icon-with-label icon="av:library-music"></furo-icon-with-label>
        <furo-icon-with-label icon="av:loop"></furo-icon-with-label>
        <furo-icon-with-label icon="av:mic"></furo-icon-with-label>
        <furo-icon-with-label icon="av:mic-none"></furo-icon-with-label>
        <furo-icon-with-label icon="av:mic-off"></furo-icon-with-label>
        <furo-icon-with-label icon="av:movie"></furo-icon-with-label>
        <furo-icon-with-label icon="av:music-video"></furo-icon-with-label>
        <furo-icon-with-label icon="av:new-releases"></furo-icon-with-label>
        <furo-icon-with-label icon="av:not-interested"></furo-icon-with-label>
        <furo-icon-with-label icon="av:note"></furo-icon-with-label>
        <furo-icon-with-label icon="av:pause"></furo-icon-with-label>
        <furo-icon-with-label icon="av:pause-circle-filled"></furo-icon-with-label>
        <furo-icon-with-label icon="av:pause-circle-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="av:play-arrow"></furo-icon-with-label>
        <furo-icon-with-label icon="av:play-circle-filled"></furo-icon-with-label>
        <furo-icon-with-label icon="av:play-circle-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="av:playlist-add"></furo-icon-with-label>
        <furo-icon-with-label icon="av:playlist-add-check"></furo-icon-with-label>
        <furo-icon-with-label icon="av:playlist-play"></furo-icon-with-label>
        <furo-icon-with-label icon="av:queue"></furo-icon-with-label>
        <furo-icon-with-label icon="av:queue-music"></furo-icon-with-label>
        <furo-icon-with-label icon="av:queue-play-next"></furo-icon-with-label>
        <furo-icon-with-label icon="av:radio"></furo-icon-with-label>
        <furo-icon-with-label icon="av:recent-actors"></furo-icon-with-label>
        <furo-icon-with-label icon="av:remove-from-queue"></furo-icon-with-label>
        <furo-icon-with-label icon="av:repeat"></furo-icon-with-label>
        <furo-icon-with-label icon="av:repeat-one"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay-10"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay-30"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay-5"></furo-icon-with-label>
        <furo-icon-with-label icon="av:shuffle"></furo-icon-with-label>
        <furo-icon-with-label icon="av:skip-next"></furo-icon-with-label>
        <furo-icon-with-label icon="av:skip-previous"></furo-icon-with-label>
        <furo-icon-with-label icon="av:slow-motion-video"></furo-icon-with-label>
        <furo-icon-with-label icon="av:snooze"></furo-icon-with-label>
        <furo-icon-with-label icon="av:sort-by-alpha"></furo-icon-with-label>
        <furo-icon-with-label icon="av:stop"></furo-icon-with-label>
        <furo-icon-with-label icon="av:subscriptions"></furo-icon-with-label>
        <furo-icon-with-label icon="av:subtitles"></furo-icon-with-label>
        <furo-icon-with-label icon="av:surround-sound"></furo-icon-with-label>
        <furo-icon-with-label icon="av:video-call"></furo-icon-with-label>
        <furo-icon-with-label icon="av:video-label"></furo-icon-with-label>
        <furo-icon-with-label icon="av:video-library"></furo-icon-with-label>
        <furo-icon-with-label icon="av:videocam"></furo-icon-with-label>
        <furo-icon-with-label icon="av:videocam-off"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-down"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-mute"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-off"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-up"></furo-icon-with-label>
        <furo-icon-with-label icon="av:web"></furo-icon-with-label>
        <furo-icon-with-label icon="av:web-asset"></furo-icon-with-label>
      </div>
      
      
      
      <h2>Iconset communicationIcons</h2>
      <p>
      <pre>
        import {CommunicationIcons} from "@furo/icon/iconsets/communicationIcons";
        Iconset.registerIconset("communication", CommunicationIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="communication:business"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-end"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-made"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-merge"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-missed"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-missed-outgoing"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-received"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-split"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:chat"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:chat-bubble"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:chat-bubble-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:clear-all"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:comment"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:contact-mail"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:contact-phone"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:contacts"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:dialer-sip"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:dialpad"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:email"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:forum"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:import-contacts"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:import-export"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:invert-colors-off"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:live-help"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:location-off"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:location-on"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:mail-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:message"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:no-sim"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phone"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-erase"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-ring"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-setup"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:portable-wifi-off"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:present-to-all"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:ring-volume"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:rss-feed"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:screen-share"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:speaker-phone"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-current-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-current-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-primary-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-primary-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stop-screen-share"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:swap-calls"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:textsms"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:voicemail"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:vpn-key"></furo-icon-with-label>
      </div>
     
      <h2>Iconset deviceIcons</h2>
      <p>
      <pre>
        import {DeviceIcons} from "@furo/icon/iconsets/deviceIcons";
        Iconset.registerIconset("device", DeviceIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="device:access-alarm"></furo-icon-with-label>
        <furo-icon-with-label icon="device:access-alarms"></furo-icon-with-label>
        <furo-icon-with-label icon="device:access-time"></furo-icon-with-label>
        <furo-icon-with-label icon="device:add-alarm"></furo-icon-with-label>
        <furo-icon-with-label icon="device:airplanemode-active"></furo-icon-with-label>
        <furo-icon-with-label icon="device:airplanemode-inactive"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-20"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-30"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-50"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-60"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-80"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-90"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-alert"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-20"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-30"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-50"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-60"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-80"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-90"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-full"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-full"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-std"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-unknown"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth-connected"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth-disabled"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth-searching"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-auto"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-high"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-low"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-medium"></furo-icon-with-label>
        <furo-icon-with-label icon="device:data-usage"></furo-icon-with-label>
        <furo-icon-with-label icon="device:developer-mode"></furo-icon-with-label>
        <furo-icon-with-label icon="device:devices"></furo-icon-with-label>
        <furo-icon-with-label icon="device:dvr"></furo-icon-with-label>
        <furo-icon-with-label icon="device:gps-fixed"></furo-icon-with-label>
        <furo-icon-with-label icon="device:gps-not-fixed"></furo-icon-with-label>
        <furo-icon-with-label icon="device:gps-off"></furo-icon-with-label>
        <furo-icon-with-label icon="device:graphic-eq"></furo-icon-with-label>
        <furo-icon-with-label icon="device:location-disabled"></furo-icon-with-label>
        <furo-icon-with-label icon="device:location-searching"></furo-icon-with-label>
        <furo-icon-with-label icon="device:network-cell"></furo-icon-with-label>
        <furo-icon-with-label icon="device:network-wifi"></furo-icon-with-label>
        <furo-icon-with-label icon="device:nfc"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-lock-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-lock-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-lock-rotation"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-rotation"></furo-icon-with-label>
        <furo-icon-with-label icon="device:sd-storage"></furo-icon-with-label>
        <furo-icon-with-label icon="device:settings-system-daydream"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-0-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-1-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-2-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-3-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-4-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-0-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-1-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-2-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-3-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-4-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-no-sim"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-null"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-off"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-0-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-1-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-1-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-2-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-2-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-3-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-3-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-4-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-4-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-off"></furo-icon-with-label>
        <furo-icon-with-label icon="device:storage"></furo-icon-with-label>
        <furo-icon-with-label icon="device:usb"></furo-icon-with-label>
        <furo-icon-with-label icon="device:wallpaper"></furo-icon-with-label>
        <furo-icon-with-label icon="device:widgets"></furo-icon-with-label>
        <furo-icon-with-label icon="device:wifi-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:wifi-tethering"></furo-icon-with-label>
      </div>
     
      <h2>Iconset editorIcons</h2>
      <p>
      <pre>
        import {EditorIcons} from "@furo/icon/iconsets/editorIcons";
        Iconset.registerIconset("editor", EditorIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="editor:attach-file"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:attach-money"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-all"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-bottom"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-clear"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-color"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-horizontal"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-inner"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-left"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-outer"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-right"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-style"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-top"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-vertical"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:bubble-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:drag-handle"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-center"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-justify"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-left"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-right"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-bold"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-clear"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-color-fill"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-color-reset"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-color-text"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-indent-decrease"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-indent-increase"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-italic"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-line-spacing"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-list-bulleted"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-list-numbered"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-paint"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-quote"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-shapes"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-size"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-strikethrough"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-textdirection-l-to-r"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-textdirection-r-to-l"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-underlined"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:functions"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:highlight"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-comment"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-drive-file"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-emoticon"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-invitation"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-link"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-photo"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:linear-scale"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:merge-type"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:mode-comment"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:mode-edit"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:monetization-on"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:money-off"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:multiline-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:pie-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:pie-chart-outlined"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:publish"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:short-text"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:show-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:space-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:strikethrough-s"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:text-fields"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:title"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:vertical-align-bottom"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:vertical-align-center"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:vertical-align-top"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:wrap-text"></furo-icon-with-label>
      </div>
     
      <h2>Iconset hardwareIcons</h2>
      <p>
      <pre>
        import {HardwareIcons} from "@furo/icon/iconsets/hardwareIcons";
        Iconset.registerIconset("hardware", HardwareIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="hardware:cast"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:cast-connected"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:computer"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:desktop-mac"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:desktop-windows"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:developer-board"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:device-hub"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:devices-other"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:dock"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:gamepad"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:headset"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:headset-mic"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-down"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-left"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-right"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-up"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-backspace"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-capslock"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-hide"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-return"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-tab"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-voice"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop-chromebook"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop-mac"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop-windows"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:memory"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:mouse"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phone-android"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phone-iphone"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phonelink"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phonelink-off"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:power-input"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:router"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:scanner"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:security"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:sim-card"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:smartphone"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:speaker"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:speaker-group"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tablet"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tablet-android"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tablet-mac"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:toys"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tv"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:videogame-asset"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:watch"></furo-icon-with-label>
      </div>
          
      <h2>Iconset imageIcons</h2>
      <p>
      <pre>
        import {ImageIcons} from "@furo/icon/iconsets/imageIcons";
        Iconset.registerIconset("image", ImageIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="image:add-a-photo"></furo-icon-with-label>
        <furo-icon-with-label icon="image:add-to-photos"></furo-icon-with-label>
        <furo-icon-with-label icon="image:adjust"></furo-icon-with-label>
        <furo-icon-with-label icon="image:assistant"></furo-icon-with-label>
        <furo-icon-with-label icon="image:assistant-photo"></furo-icon-with-label>
        <furo-icon-with-label icon="image:audiotrack"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-circular"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-linear"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-6"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-7"></furo-icon-with-label>
        <furo-icon-with-label icon="image:broken-image"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brush"></furo-icon-with-label>
        <furo-icon-with-label icon="image:burst-mode"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-alt"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-front"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-rear"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-roll"></furo-icon-with-label>
        <furo-icon-with-label icon="image:center-focus-strong"></furo-icon-with-label>
        <furo-icon-with-label icon="image:center-focus-weak"></furo-icon-with-label>
        <furo-icon-with-label icon="image:collections"></furo-icon-with-label>
        <furo-icon-with-label icon="image:collections-bookmark"></furo-icon-with-label>
        <furo-icon-with-label icon="image:color-lens"></furo-icon-with-label>
        <furo-icon-with-label icon="image:colorize"></furo-icon-with-label>
        <furo-icon-with-label icon="image:compare"></furo-icon-with-label>
        <furo-icon-with-label icon="image:control-point"></furo-icon-with-label>
        <furo-icon-with-label icon="image:control-point-duplicate"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-16-9"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-3-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-5-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-7-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-din"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-free"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-original"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-rotate"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-square"></furo-icon-with-label>
        <furo-icon-with-label icon="image:dehaze"></furo-icon-with-label>
        <furo-icon-with-label icon="image:details"></furo-icon-with-label>
        <furo-icon-with-label icon="image:edit"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-neg-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-neg-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-plus-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-plus-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-zero"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-6"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-7"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-8"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-9"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-9-plus"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-b-and-w"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-center-focus"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-drama"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-frames"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-hdr"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-none"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-tilt-shift"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-vintage"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flare"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flash-auto"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flash-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flash-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flip"></furo-icon-with-label>
        <furo-icon-with-label icon="image:gradient"></furo-icon-with-label>
        <furo-icon-with-label icon="image:grain"></furo-icon-with-label>
        <furo-icon-with-label icon="image:grid-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:grid-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-strong"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-weak"></furo-icon-with-label>
        <furo-icon-with-label icon="image:healing"></furo-icon-with-label>
        <furo-icon-with-label icon="image:image"></furo-icon-with-label>
        <furo-icon-with-label icon="image:image-aspect-ratio"></furo-icon-with-label>
        <furo-icon-with-label icon="image:iso"></furo-icon-with-label>
        <furo-icon-with-label icon="image:landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="image:leak-add"></furo-icon-with-label>
        <furo-icon-with-label icon="image:leak-remove"></furo-icon-with-label>
        <furo-icon-with-label icon="image:lens"></furo-icon-with-label>
        <furo-icon-with-label icon="image:linked-camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-6"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-one"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-two"></furo-icon-with-label>
        <furo-icon-with-label icon="image:loupe"></furo-icon-with-label>
        <furo-icon-with-label icon="image:monochrome-photos"></furo-icon-with-label>
        <furo-icon-with-label icon="image:movie-creation"></furo-icon-with-label>
        <furo-icon-with-label icon="image:movie-filter"></furo-icon-with-label>
        <furo-icon-with-label icon="image:music-note"></furo-icon-with-label>
        <furo-icon-with-label icon="image:nature"></furo-icon-with-label>
        <furo-icon-with-label icon="image:nature-people"></furo-icon-with-label>
        <furo-icon-with-label icon="image:navigate-before"></furo-icon-with-label>
        <furo-icon-with-label icon="image:navigate-next"></furo-icon-with-label>
        <furo-icon-with-label icon="image:palette"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-fish-eye"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-horizontal"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-vertical"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-wide-angle"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-album"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-filter"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-library"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-size-select-actual"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-size-select-large"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-size-select-small"></furo-icon-with-label>
        <furo-icon-with-label icon="image:picture-as-pdf"></furo-icon-with-label>
        <furo-icon-with-label icon="image:portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="image:remove-red-eye"></furo-icon-with-label>
        <furo-icon-with-label icon="image:rotate-90-degrees-ccw"></furo-icon-with-label>
        <furo-icon-with-label icon="image:rotate-left"></furo-icon-with-label>
        <furo-icon-with-label icon="image:rotate-right"></furo-icon-with-label>
        <furo-icon-with-label icon="image:slideshow"></furo-icon-with-label>
        <furo-icon-with-label icon="image:straighten"></furo-icon-with-label>
        <furo-icon-with-label icon="image:style"></furo-icon-with-label>
        <furo-icon-with-label icon="image:switch-camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:switch-video"></furo-icon-with-label>
        <furo-icon-with-label icon="image:tag-faces"></furo-icon-with-label>
        <furo-icon-with-label icon="image:texture"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timelapse"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer-10"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:tonality"></furo-icon-with-label>
        <furo-icon-with-label icon="image:transform"></furo-icon-with-label>
        <furo-icon-with-label icon="image:tune"></furo-icon-with-label>
        <furo-icon-with-label icon="image:view-comfy"></furo-icon-with-label>
        <furo-icon-with-label icon="image:view-compact"></furo-icon-with-label>
        <furo-icon-with-label icon="image:vignette"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-auto"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-cloudy"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-incandescent"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-iridescent"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-sunny"></furo-icon-with-label>
      </div>
           
      <h2>Iconset mapsIcons</h2>
      <p>
      <pre>
        import {MapsIcons} from "@furo/icon/iconsets/mapsIcons";
        Iconset.registerIconset("maps", MapsIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="map:add-location"></furo-icon-with-label>
        <furo-icon-with-label icon="map:beenhere"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-bike"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-boat"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-bus"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-car"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-railway"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-run"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-subway"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-transit"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-walk"></furo-icon-with-label>
        <furo-icon-with-label icon="map:edit-location"></furo-icon-with-label>
        <furo-icon-with-label icon="map:ev-station"></furo-icon-with-label>
        <furo-icon-with-label icon="map:flight"></furo-icon-with-label>
        <furo-icon-with-label icon="map:hotel"></furo-icon-with-label>
        <furo-icon-with-label icon="map:layers"></furo-icon-with-label>
        <furo-icon-with-label icon="map:layers-clear"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-activity"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-airport"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-atm"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-cafe"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-car-wash"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-convenience-store"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-dining"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-drink"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-florist"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-gas-station"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-grocery-store"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-hospital"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-hotel"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-laundry-service"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-library"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-mall"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-movies"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-offer"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-parking"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-pharmacy"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-phone"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-pizza"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-play"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-post-office"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-printshop"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-see"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-shipping"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-taxi"></furo-icon-with-label>
        <furo-icon-with-label icon="map:map"></furo-icon-with-label>
        <furo-icon-with-label icon="map:my-location"></furo-icon-with-label>
        <furo-icon-with-label icon="map:navigation"></furo-icon-with-label>
        <furo-icon-with-label icon="map:near-me"></furo-icon-with-label>
        <furo-icon-with-label icon="map:person-pin"></furo-icon-with-label>
        <furo-icon-with-label icon="map:person-pin-circle"></furo-icon-with-label>
        <furo-icon-with-label icon="map:pin-drop"></furo-icon-with-label>
        <furo-icon-with-label icon="map:place"></furo-icon-with-label>
        <furo-icon-with-label icon="map:rate-review"></furo-icon-with-label>
        <furo-icon-with-label icon="map:restaurant"></furo-icon-with-label>
        <furo-icon-with-label icon="map:restaurant-menu"></furo-icon-with-label>
        <furo-icon-with-label icon="map:satellite"></furo-icon-with-label>
        <furo-icon-with-label icon="map:store-mall-directory"></furo-icon-with-label>
        <furo-icon-with-label icon="map:streetview"></furo-icon-with-label>
        <furo-icon-with-label icon="map:subway"></furo-icon-with-label>
        <furo-icon-with-label icon="map:terrain"></furo-icon-with-label>
        <furo-icon-with-label icon="map:traffic"></furo-icon-with-label>
        <furo-icon-with-label icon="map:train"></furo-icon-with-label>
        <furo-icon-with-label icon="map:tram"></furo-icon-with-label>
        <furo-icon-with-label icon="map:transfer-within-a-station"></furo-icon-with-label>
        <furo-icon-with-label icon="map:zoom-out-map"></furo-icon-with-label>
      </div>
            
      <h2>Iconset notificationIcons</h2>
      <p>
      <pre>
        import {NotificationIcons} from "@furo/icon/iconsets/notificationIcons";
        Iconset.registerIconset("notification", NotificationIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="notification:adb"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-flat"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-flat-angled"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-individual-suite"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-legroom-extra"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-legroom-normal"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-legroom-reduced"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-recline-extra"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-recline-normal"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:bluetooth-audio"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:confirmation-number"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:disc-full"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb-alt"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb-off"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb-on"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:drive-eta"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:enhanced-encryption"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:event-available"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:event-busy"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:event-note"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:folder-special"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:live-tv"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:mms"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:more"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:network-check"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:network-locked"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:no-encryption"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:ondemand-video"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:personal-video"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-bluetooth-speaker"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-forwarded"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-in-talk"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-locked"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-missed"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-paused"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:power"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:priority-high"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:rv-hookup"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sd-card"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sim-card-alert"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sms"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sms-failed"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sync"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sync-disabled"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sync-problem"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:system-update"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:tap-and-play"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:time-to-leave"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:vibration"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:voice-chat"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:vpn-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:wc"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:wifi"></furo-icon-with-label>
      </div>
      
      
      <h2>Iconset placesIcons</h2>
      <p>
      <pre>
        import {PlacesIcons} from "@furo/icon/iconsets/placesIcons";
        Iconset.registerIconset("places", PlacesIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="places:ac-unit"></furo-icon-with-label>
        <furo-icon-with-label icon="places:airport-shuttle"></furo-icon-with-label>
        <furo-icon-with-label icon="places:all-inclusive"></furo-icon-with-label>
        <furo-icon-with-label icon="places:beach-access"></furo-icon-with-label>
        <furo-icon-with-label icon="places:business-center"></furo-icon-with-label>
        <furo-icon-with-label icon="places:casino"></furo-icon-with-label>
        <furo-icon-with-label icon="places:child-care"></furo-icon-with-label>
        <furo-icon-with-label icon="places:child-friendly"></furo-icon-with-label>
        <furo-icon-with-label icon="places:fitness-center"></furo-icon-with-label>
        <furo-icon-with-label icon="places:free-breakfast"></furo-icon-with-label>
        <furo-icon-with-label icon="places:golf-course"></furo-icon-with-label>
        <furo-icon-with-label icon="places:hot-tub"></furo-icon-with-label>
        <furo-icon-with-label icon="places:kitchen"></furo-icon-with-label>
        <furo-icon-with-label icon="places:pool"></furo-icon-with-label>
        <furo-icon-with-label icon="places:room-service"></furo-icon-with-label>
        <furo-icon-with-label icon="places:rv-hookup"></furo-icon-with-label>
        <furo-icon-with-label icon="places:smoke-free"></furo-icon-with-label>
        <furo-icon-with-label icon="places:smoking-rooms"></furo-icon-with-label>
        <furo-icon-with-label icon="places:spa"></furo-icon-with-label>
      </div>
      
      
      <h2>Iconset socialIcons</h2>
      <p>
      <pre>
        import {SocialIcons} from "@furo/icon/iconsets/socialIcons";
        Iconset.registerIconset("social", SocialIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="social:cake"></furo-icon-with-label>
        <furo-icon-with-label icon="social:domain"></furo-icon-with-label>
        <furo-icon-with-label icon="social:group"></furo-icon-with-label>
        <furo-icon-with-label icon="social:group-add"></furo-icon-with-label>
        <furo-icon-with-label icon="social:location-city"></furo-icon-with-label>
        <furo-icon-with-label icon="social:mood"></furo-icon-with-label>
        <furo-icon-with-label icon="social:mood-bad"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-active"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-none"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-off"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-paused"></furo-icon-with-label>
        <furo-icon-with-label icon="social:pages"></furo-icon-with-label>
        <furo-icon-with-label icon="social:party-mode"></furo-icon-with-label>
        <furo-icon-with-label icon="social:people"></furo-icon-with-label>
        <furo-icon-with-label icon="social:people-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="social:person"></furo-icon-with-label>
        <furo-icon-with-label icon="social:person-add"></furo-icon-with-label>
        <furo-icon-with-label icon="social:person-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="social:plus-one"></furo-icon-with-label>
        <furo-icon-with-label icon="social:poll"></furo-icon-with-label>
        <furo-icon-with-label icon="social:public"></furo-icon-with-label>
        <furo-icon-with-label icon="social:school"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-dissatisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-neutral"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-satisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-very-dissatisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-very-satisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:share"></furo-icon-with-label>
        <furo-icon-with-label icon="social:whatshot"></furo-icon-with-label>
      </div>
     
    `}}window.customElements.define("demo-furo-icon-list",DemoFuroIconList);const nav=[{group:"Fundamentals",items:[{label:"Overview",icon:"dashboard",href:"md/overview/"},{label:"Installation",icon:"flight-takeoff",href:"md/installation/"},{label:"Starterpacks",icon:"next-week",href:"md/starterpacks/"}]},{group:"\u30D5\u30ED\u30FC Furo FBP",items:[{label:"Wires",icon:"compare-arrows",href:"md/fbp-wires/"},{label:"Events",icon:"open-in-new",href:"md/fbp-events/"},{label:"Data",icon:"input",href:"md/fbp-data/"},{label:"More wireing",icon:"compare-arrows",href:"md/fbp-wires-more/"},{label:"Scripting",icon:"av:play-arrow",href:"md/fbp-scripting/"},{label:"Lifecycle",icon:"restore",href:"md/fbp-lifecycle/"},{label:"Debugging",icon:"bug-report",href:"md/fbp-debugging/"}]},{group:"Manuals",items:[{label:"Styling",icon:"image:color-lens",href:"md/styling/"},{label:"Theming",icon:"image:brush",href:"md/theming/"},{label:"Icons",icon:"social:mood",href:"md/icons/"},{label:"Dealing with data",icon:"cloud",href:"md/dealing-w-data/"},{label:"...Data UI",icon:"view-column",href:"md/data-ui/"},{label:"...Layout helper",icon:"dashboard",href:"md/layout-helpers/"},{label:"Form helper",icon:"dashboard",href:"md/form-helpers/"},{label:"App Config",icon:"settings",href:"md/config/"},{label:"...Navigation",icon:"tab",href:"md/navigation/"},{label:"Routing",icon:"arrow-forward",href:"md/route/"},{label:"...Util",icon:"star-border",href:"md/util/"},{label:"Spec builder",icon:"av:fiber-new",href:"md/specbuilder/"}]},{group:"Advanced Topics",items:[{label:"build",icon:"build",href:"md/build/"},{label:"Testing",icon:"favorite",href:"md/testing/"},{label:"Writing Demos",icon:"picture-in-picture",href:"md/demo/"}]},{group:"Misc",items:[{label:"License",icon:"create",href:"md/license/"}]},{group:"Credits",items:[{label:"Lit Element",icon:"lightbulb-outline",href:"md/cred-lit/"},{label:"The Polymer Project",icon:"polymer",href:"md/cred-polymer/"},{label:"webcomponents.org",icon:"polymer",href:"md/cred-wc/"},{label:"J.P Morrison",icon:"thumb-up",href:"md/cred-morrison/"}]}];_exports.nav=nav;var nav_config={nav:nav};_exports.$navConfig=nav_config;class PanelMdLoader extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--pathChanged",e=>{let md=e.pathSegments[0];// this will import from xxx/guide/
this._FBPTriggerWire("--fetchMD","/_page/markdown/"+md+".md");this.scrollTop=0})}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("PanelMdLoader")||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow-y: auto;
            box-sizing: border-box;
            /* adjust the width to match the doc width */
            max-width: 1278px;
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
      <furo-location url-space-regex="^/guide/md" @-location-changed="--pathChanged"></furo-location>
      <furo-markdown unsafe ƒ-fetch-md="--fetchMD"></furo-markdown>
    `}}window.customElements.define("panel-md-loader",PanelMdLoader);class FuroAppDrawer extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              * Width for the autofloat
              * @type {number}
              */this.floatBreakpoint=1159;this._movementDetectionRange=10;// return **this** to component which want to connect
window.addEventListener("connect-to-drawer-requested",e=>{if(e.detail.name===this.name){e.detail.drawer=this}})}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Use method floatDrawer or set this attribute to enable float mode
       * @private
       */_isFloating:{type:Boolean,reflect:!0,attribute:"float"},/**
       * Enable this to put the drawer on the right side
       */isReverse:{type:Boolean,reflect:!0,attribute:"reverse"},/**
       * disables automatic floating mode
       */permanent:{type:Boolean},/**
       * let the menu float (hidden).
       */float:{type:Boolean},/**
       * Min width of the app-drawer to switch to floating mode
       */floatBreakpoint:{type:Number,attribute:"float-breakpoint"},/**
       * name of this drawer, needed if you want to connect to this drawer
       */name:{type:String}}}/**
     * helper variable to set the floating
     * @param val
     * @private
     */set __isFloating(val){this._isFloating=val;if(val){/**
       * @event is-floating
       * Fired when drawer is in floating mode. This event is fired when drawer is closed and opened
       */let customEvent=new Event("is-floating",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent)}else{/**
       * @event is-pinned
       * Fired when drawer is in pinned mode.
       */let customEvent=new Event("is-pinned",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent)}}get __isFloating(){return this._isFloating}/**
     * open the drawer when it is in float mode
     */open(){this.isOpen=!0;if(this.__isFloating){let drawer=this.shadowRoot.getElementById("drawer");//drawer.style.transform = "translate3d(0, 0, 0)";
if(this.isReverse){//drawer.style.transform = "translate3d("+ width +"px, 0, 0)";
drawer.style.right=0}else{drawer.style.left=0;//drawer.style.transform = "translate3d(-"+ width +"px, 0, 0)";
}let backdrop=this.shadowRoot.getElementById("backdrop");backdrop.style.opacity=1;backdrop.style.pointerEvents="auto";// unregister movement tracker
this.removeEventListener("mousemove",this.moveHandler,!0);this.removeEventListener("touchmove",this.moveHandler,!0);//unregister trackend
this.removeEventListener("mouseup",this.trackEnd,{once:!0});this.removeEventListener("touchend",this.trackEnd,{once:!0})}/**
       * @event drawer-opened
       * Fired when drawer was opened.
       */let customEvent=new Event("drawer-opened",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent)}/**
     * closes the drawer when it is in float mode
     */close(){this.isOpen=!1;if(this.__isFloating){let drawer=this.shadowRoot.getElementById("drawer"),width=drawer.getBoundingClientRect().width;if(this.isReverse){//drawer.style.transform = "translate3d("+ width +"px, 0, 0)";
drawer.style.right=-width+"px"}else{drawer.style.left=-width+"px";//drawer.style.transform = "translate3d(-"+ width +"px, 0, 0)";
}let backdrop=this.shadowRoot.getElementById("backdrop");backdrop.style.opacity=0;backdrop.style.pointerEvents="none";// unregister movement tracker
this.removeEventListener("mousemove",this.moveHandler,!0);this.removeEventListener("touchmove",this.moveHandler,!0);//unregister trackend
this.removeEventListener("mouseup",this.trackEnd,{once:!0});this.removeEventListener("touchend",this.trackEnd,{once:!0})}/**
       * @event drawer-closed
       * Fired when drawer was closed.
       */let customEvent=new Event("drawer-closed",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent)}/**
     * let the drawer float
     */floatDrawer(){this.__isFloating=!0}/**
     * disable the floating
     */pinDrawer(){this.__isFloating=!1}/**
     * Put the drawer on the right side
     *
     * Or use the attribute reverse for the same effect
     *
     */putDrawerToRight(){this.isReverse=!0}/**
     * Put the drawer on the left side (default)
     */putDrawerToLeft(){this.isReverse=!1}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
/**
     * Register hook on wire --backdropClicked to
     * close the menu
     */this._FBPAddWireHook("--backdropClicked",e=>{this.close()});// register resize listener
if(!this.permanent){if(window.ResizeObserver){let ro=new ResizeObserver(entries=>{for(let entry of entries){const cr=entry.contentRect;this.__isFloating=cr.width<=this.floatBreakpoint}if(this.__isFloating){this.close()}});ro.observe(this)}else{// fallback, just listen to the resize event
let cr=this.getBoundingClientRect();this.__isFloating=cr.width<=this.floatBreakpoint;window.addEventListener("resize",e=>{let cr=this.getBoundingClientRect();this.__isFloating=cr.width<=this.floatBreakpoint;if(this.__isFloating){this.close()}})}}let drawer=this.shadowRoot.getElementById("drawer"),drag=this.shadowRoot.getElementById("drag"),backdrop=this.shadowRoot.getElementById("backdrop"),trackhandler=e=>{// unregister
this.removeEventListener("mousemove",this.moveHandler,!0);this.removeEventListener("touchmove",this.moveHandler,!0);if(e instanceof MouseEvent){this.pauseEvent(e)}if(this.__isFloating){let start_x=this._getScreenX(e),start_y=this._getScreenY(e),start_time=performance.now(),width=drawer.getBoundingClientRect().width,trackingEnabled=!1,trackingFixed=!1;drawer.style.transitionDuration="0ms";// Setup a timer
let animationframetimeout;// register move
this.moveHandler=e=>{// If there's a timer, cancel it
if(requestAnimationFrame){window.cancelAnimationFrame(animationframetimeout)}if(e instanceof MouseEvent){this.pauseEvent(e);// prevent dragging of links in a drawer
e.preventDefault()}let distance=this._getScreenX(e)-start_x,y=this._getScreenY(e)-start_y;// start tracking if angle is in a 45 deg horizontal
if(!trackingFixed&&Math.abs(distance)<this._movementDetectionRange&&Math.abs(y)<this._movementDetectionRange){trackingEnabled=Math.abs(y)<Math.abs(distance);return}// Setup the new requestAnimationFrame()
animationframetimeout=window.requestAnimationFrame(()=>{if(!trackingEnabled){return}trackingFixed=!0;// correct the 10 pixels from tracking enable
if(!this.isReverse){distance+=this._movementDetectionRange}else{distance-=this._movementDetectionRange}// update drawer position
let delta=100*distance/width;if(this.isOpen){// limit the dragging, it makes no sense to pull the drawer in to the content area
if(!this.isReverse&&0<delta||this.isReverse&&0>delta){delta=0}//drawer.style.transform = "translate3d(" + distance + "px, 0, 0)";
if(this.isReverse){if(0>distance){distance=0}drawer.style.right=-distance+"px"}else{if(0<distance){distance=0}drawer.style.left=distance+"px"}backdrop.style.opacity=Math.floor(100+delta)/100}else{// limit the dragging
if(100<delta){delta=100;distance=width}if(-100>delta){delta=-100;distance=-width}if(this.isReverse){//drawer.style.transform = "translate3d(" + (100 + delta) + "%, 0, 0)";
drawer.style.right=-(width+distance)+"px"}else{//drawer.style.transform = "translate3d(" + (delta - 100) + "%, 0, 0)";
drawer.style.left=distance-width+"px"}// backdrop darkness
backdrop.style.opacity=Math.abs(delta/100)}})};// register move
this.addEventListener("mousemove",this.moveHandler,!0);//todo: check this: this.addEventListener("touchmove", this.moveHandler, {passive: true});
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
this.addEventListener("touchmove",this.moveHandler,!0);this.trackEnd=e=>{drawer.style.transitionDuration="";// If there's a animation timer, cancel it
if(requestAnimationFrame){window.cancelAnimationFrame(animationframetimeout)}let end_time=performance.now(),distance=this._getScreenX(e)-start_x,duration=end_time-start_time;// quick movement
if(30<Math.abs(distance)&&200>duration){if(this.isOpen){if(!this.isReverse&&0>distance||this.isReverse&&0<distance){this.close()}}else{this.open()}}else{if(!trackingEnabled){return}// complete the movement, slow
let delta=100*distance/width;if(-40<delta&&40>delta){// restore initial pos
if(this.isOpen){this.open()}else{this.close()}}else{if(this.isOpen){this.close()}else{this.open()}}}// unregister
this.removeEventListener("mousemove",this.moveHandler,!0);this.removeEventListener("touchmove",this.moveHandler,!0)};// unregister movement tracker
this.addEventListener("mouseup",this.trackEnd,{once:!0});this.addEventListener("touchend",this.trackEnd,{once:!0})}};drawer.addEventListener("trackstart",trackhandler,{passive:!0});drawer.addEventListener("mousedown",trackhandler);drag.addEventListener("trackstart",trackhandler,{passive:!0});drag.addEventListener("mousedown",trackhandler)}pauseEvent(e){if(e.stopPropagation)e.stopPropagation();if(e.preventDefault)e.preventDefault();e.cancelBubble=!0;e.returnValue=!1;return!1}_getScreenX(e){let x;if(e instanceof MouseEvent){x=e.screenX}else{x=e.changedTouches[0].screenX}return x}_getScreenY(e){let y;if(e instanceof MouseEvent){y=e.screenY}else{y=e.changedTouches[0].screenY}return y}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("FuroAppDrawer")||_furoShell.css`
      :host {
        display: block;
        height: 100%;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]) {
        display: none;
      }

      furo-horizontal-flex {
        height: 100%;
      }


      #drawer {
        border-right: 1px solid var(--separator, rgb(228, 228, 228));
        transition-duration: 200ms;
        background: var(--surface-light);
      }

      ::slotted([scroll]) {
        height: 100%;
        overflow-y: auto;
      }

      /* disable pointer events, z-index 15 just to be below the drawer */
      #backdrop {
        pointer-events: none;
        transition-duration: 200ms;
        transition-property: opacity;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        background: var(--furo-app-drawer-backdrop, rgba(0, 0, 0, 0.5));
        z-index: 15;
      }


      #drag {
        position: absolute;
        top: 0;
        width: 18px;
        bottom: 0;
        left: 0;
        z-index: 16;
      }

      :host([reverse]) #drag {
        left: unset;
        right: 0;
      }

      /* put the floating drawer outside the visible area, z-index 16 should be enough layers above 0 */
      :host([float]) #drawer {
        position: absolute;
        z-index: 16;
        top: 0;
        left: 0;
        bottom: 0;
      }

      /* put drawer to the right side on reverse mode */
      :host([float][reverse]) #drawer {
        left: unset;
        right: 0;

      }



    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`

      <furo-horizontal-flex ?reverse="${this.isReverse}">
        <div id="drawer">
          <slot name="drawer"></slot>
        </div>
        <div flex>
          <slot></slot>
        </div>
      </furo-horizontal-flex>
      <div id="backdrop" @-click="--backdropClicked"></div>
      <div id="drag"></div>
    `}}window.customElements.define("furo-app-drawer",FuroAppDrawer);class ViewGuide extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * flow is ready lifecycle method
   */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPTriggerWire("--nav",nav)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent("ViewGuide")||_furoShell.css`
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
      <furo-location url-space-regex="^/guide" @-location-changed="--pathChanged"></furo-location>
      <furo-vertical-flex>
        <furo-app-bar-top drawer="guide">
          <header-toolbar></header-toolbar>
        </furo-app-bar-top>
        <furo-app-drawer float-breakpoint="1200" name="guide"   ƒ-close="--pathChanged">
       
        <div slot="drawer" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/guide/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="welcome">
          <panel-md-loader name="md"></panel-md-loader>
          
          <div name="welcome">Coming soon.</div>
        </furo-pages>
        </furo-app-drawer>
    `}}window.customElements.define("view-guide",ViewGuide)});