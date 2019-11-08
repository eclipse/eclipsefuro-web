define(["exports","../furo-shell.js"],function(_exports,_furoShell){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.panelRegistry=_exports.nav=_exports.RepeaterNode=_exports.NodeEvent=_exports.Helper$1=_exports.Helper=_exports.FuroTreeItem=_exports.FieldNode=_exports.EventTreeNode=_exports.DataObject=_exports.CheckMetaAndOverrides=_exports.BasePanel=_exports.$panelRegistry=_exports.$navConfig=_exports.$helper=_exports.$furoTreeItem=_exports.$RepeaterNode=_exports.$Helper=_exports.$FieldNode=_exports.$EventTreeNode=_exports.$DataObject=_exports.$CheckMetaAndOverrides=_exports.$BasePanel=void 0;class FetchAnalysis extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();fetch("/node_modules/@furo/data/analysis.json").then(res=>res.json()).then(analysis=>{/**
       * @event data
       * Fired when analysis loaded
       * detail payload: analysis
       */let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=analysis;this.dispatchEvent(customEvent)}).catch(err=>err)}}window.customElements.define("fetch-analysis",FetchAnalysis);class DemoFuroDemoSnippet extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
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
        }

        :host([hidden]) {
            display: none;
        }

      
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <p>Demo is flickering, because it gets completly re rendered on each change</p>
        <furo-demo-snippet flex demo>
          <template>
            <a href="/api/demo/util/demo-furo-demo-snippet/util/" @-park="((park)),((other))" @-event="^event,((other))"
               @-bubble="^^bubble,((other))" @-hostevent="-^hostevent">Package util</a>
            <a href="/api/demo/util/demo-furo-demo-snippet/data/">Package data</a>

            <furo-location url-space-regex="^/api/demo/util/demo-furo-demo-snippet"
                           @-location-changed="--pathChanged"></furo-location>
            <!-- load analysis based on --pathChanged.pathSegments[0] -->
            <furo-doc-fetch-analysis ƒ-fetch-location="--pathChanged" ƒ-activate="--pageActivated"
                                     @-data="--analysis"></furo-doc-fetch-analysis>
            <furo-split-view>

              <!-- the doc menu 
              Multiline comment
              on furo-doc-menu
              -->
              <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element"
                             @-class="--class"></furo-doc-menu>

              <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>
              <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

            </furo-split-view>

            <dummy-element ƒ-remove="--class(*.path), --element, --analysis(*.path)" ƒ-.prop="--analysis"
                           @-done="((hostattribute)),notarget"></dummy-element>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-demo-snippet",DemoFuroDemoSnippet);class DemoFuroHorizontalFlex extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-horizontal-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet>
        <template>
          <furo-horizontal-flex>
            <div>small</div>
            <!-- A furo-empty-spacer will fill the available space. -->
            <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
            <div>small</div>
          </furo-horizontal-flex>
        </template>
      </furo-demo-snippet>

      
    `}}window.customElements.define("demo-furo-horizontal-flex",DemoFuroHorizontalFlex);class DemoFuroVerticalFlex extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-vertical-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet >
        <template>
          <furo-vertical-flex style="height: 180px">
            <div>small</div>
            <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
            <div>small</div>
          </furo-vertical-flex>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-vertical-flex",DemoFuroVerticalFlex);class DemoFuroVerticalScroller extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
        <h2>Demo furo-vertical-scroller</h2>
        <p>Vertical scroller takes the height of his parent node and allows you to scroll its content.</p>
      <furo-demo-snippet >
        <template>
          <furo-vertical-scroller >
            <div style="height: 620px;background-image: linear-gradient(red, yellow);"></div>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
        
    `}}window.customElements.define("demo-furo-vertical-scroller",DemoFuroVerticalScroller);class DemoFuroSplitView extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-split-view</h2>
      <p>Splits your view in a master-detail view</p>
      <furo-demo-snippet>
        <template>
          <furo-split-view>
            <div slot="master" style="height: 100%; background-image: linear-gradient(blue, violet);">Master</div>
            <furo-vertical-scroller>
              <div style="height: 420px;background-image: linear-gradient(red, yellow);">
                Detail... <br> should be on flex side
              </div>
            </furo-vertical-scroller>
          </furo-split-view>
        </template>
      </furo-demo-snippet>

      <h2>Demo furo-split-view</h2>
      <p>Add the attribute reverse put the master on the other side</p>
      <furo-demo-snippet>
        <template>
          <furo-split-view reverse>
            <div slot="master" style="height: 100%; background-image: linear-gradient(blue, violet);">Master</div>
            <furo-vertical-scroller>
              <div style="height: 420px;background-image: linear-gradient(red, yellow);">
                Detail... <br> should be on flex side
              </div>
            </furo-vertical-scroller>
          </furo-split-view>
        </template>
      </furo-demo-snippet>


    `}}window.customElements.define("demo-furo-split-view",DemoFuroSplitView);class DemoFuroIcon extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-icon</h2>
      <p>Do not forgett to import the iconset</p>
      <furo-demo-snippet>
        <template>
          <furo-icon icon="mail"></furo-icon>
          <furo-icon icon="touch-app"></furo-icon>
          <furo-icon icon="av:airplay"></furo-icon>
          <furo-icon icon="com:contacts"></furo-icon>
          <furo-icon icon="device:bluetooth"></furo-icon>
          <furo-icon icon="editor:merge-type"></furo-icon>
          <furo-icon icon="hardware:phonelink"></furo-icon>
          <furo-icon icon="image:camera"></furo-icon>
          <furo-icon icon="maps:subway"></furo-icon>
          <furo-icon icon="notify:event-available"></furo-icon>
          <furo-icon icon="places:spa"></furo-icon>
          <furo-icon icon="social:public"></furo-icon>
        </template>
      </furo-demo-snippet>
      <h3>Import the needed icon sets somewhere in your init phase</h3>
      <pre>// -- initialize application env, theme, api

import {Init} from "@furo/framework/furo.js";
import {Iconset} from "@furo/framework/furo.js";
        
import {FuroBaseIcons} from "@furo/layout/iconsets/baseIcons";
Iconset.registerIconset("default", FuroBaseIcons);</pre>
    `}}window.customElements.define("demo-furo-icon",DemoFuroIcon);class DemoFuroCard extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet{
            height: 800px;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
        <furo-vertical-flex>
      <h2>Demo demo-furo-card</h2>
      <p>description</p>
      <furo-demo-snippet flex>
        <template>
          <style>furo-card {
            margin: 20px;
            width: 320px;
            float: left;
            
          }</style>
          <furo-vertical-scroller>
        

          <furo-card header-text="With media" secondary-text="Secondary text goes here">
            <img slot="media" src="/_page/images/hamburg.png" alt="">
            <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">Do not forget to give the card <br> a height</div>
            <furo-horizontal-flex space slot="action">
              <furo-button primary label="primary"></furo-button>
              <furo-button accent label="accent"></furo-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button danger label="Danger"></furo-button>
            </furo-horizontal-flex>
          </furo-card>


          <furo-card>
            <img slot="media" src="/_page/images/hamburg.png" alt="">
            <h1>Title in content</h1>
            <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">Do not forget to give the card <br> a height</div>
            <furo-horizontal-flex space slot="action">
              <furo-button primary label="primary"></furo-button>
              <furo-button accent label="accent"></furo-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button danger label="Danger"></furo-button>
            </furo-horizontal-flex>
          </furo-card>

            <furo-card header-text="Title goes here" secondary-text="Secondary text goes hereSecondary text goes hereSecondary text goes hereSecondary text goes here">
              <div>Text in default slot</div>
              <div slot="action">
                <furo-horizontal-flex space slot="action">
                  <furo-button primary label="primary"></furo-button>

                  <furo-empty-spacer></furo-empty-spacer>
                  <furo-button label="Danger"></furo-button>
                </furo-horizontal-flex>
              </div>
            </furo-card>

            <furo-card header-text="Title goes here" secondary-text="Secondary text goes here">
              <div>
                Content text blah
              </div>
              <div slot="action">
                <furo-horizontal-flex space slot="action">
                  <furo-button primary label="primary"></furo-button>

                  <furo-empty-spacer></furo-empty-spacer>
                  <furo-button label="Danger"></furo-button>
                </furo-horizontal-flex>
              </div>
            </furo-card>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>

        </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-card",DemoFuroCard);class DemoFuroCollapsibleBox extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-collapsible-box</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-collapsible-box label="label" open>
            <div>flex content in default slot</div>
            <div slot="context">CTX on right side</div>
          </furo-collapsible-box>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-collapsible-box",DemoFuroCollapsibleBox);class DemoFuroFormLayouter extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 950px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
            <h2>Simple form design</h2>
            <p>Please fill in the form and click save. You will be automatically redirected to the edit form.</p>
            <!-- Inside a furo-form-layouter the elements are always full-width -->
            <!-- Full width, one column layout-->
            <furo-form-layouter>
                <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
                <furo-select-input label="Mutation reason" value="New" list="New, mutation, remake"></furo-select-input>
                <p>Put your additional information here...</p>
            </furo-form-layouter>
            <!-- Full width, two column layout-->
            <furo-form-layouter two>
                <furo-text-input label="Owner"></furo-text-input>
                <furo-text-input label="Special hint"></furo-text-input>
                <furo-text-input label="Owner"></furo-text-input>
            </furo-form-layouter>
            
            <furo-form-layouter two>
                <div>
                <input type="checkbox"><br>
                <input type="checkbox"><br>
                <input type="checkbox"><br>
                <input type="checkbox"><br>
                </div>
                <div>
                <input type="checkbox"><br>
                <input type="checkbox"><br>
                <input type="checkbox"><br>
                </div>
            </furo-form-layouter>

            <!-- Full width, four column layout with condensed input fields -->
            <furo-form-layouter>
                <p>Full width, four column layout with condensed input fields</p>
                <furo-select-input condensed label="Brand" value="Pepsi" list="RedBull, Coca-Cola, Pepsi, Sprite"></furo-select-input>
            </furo-form-layouter>
            <furo-form-layouter four>
                <furo-text-input condensed label="Owner"></furo-text-input>
                <furo-text-input condensed label="Special hint"></furo-text-input>
                <furo-text-input condensed label="Owner"></furo-text-input>
                <furo-text-input condensed label="Special hint"></furo-text-input>
                <furo-text-input condensed label="Special hint"></furo-text-input>
            </furo-form-layouter>

            <furo-form-layouter four>
                <furo-button label="Save" unelevated primary></furo-button>
                <furo-button label="Cancel" unelevated></furo-button>
            </furo-form-layouter>
            
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-form-layouter",DemoFuroFormLayouter);class FuroButtonPlayground extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||[_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);

        }

        :host([hidden]) {
            display: none;
        }

        .display {
            padding: 60px;
            background-color: var(--surface);
            margin: 8px;
        }

        furo-button {
            margin: 8px;
        }

        hr {
            width: 100%;
            color: #eeeeee;
        }

    `,_furoShell.Styling.theme]}constructor(){super();this.label="Label";this.icon="apps";this.primary=!1;this.secondary=!1;this.accent=!1;this.danger=!1;this.raised=!1;this.unelevated=!1;this.outline=!1;this.disabled=!1}_FBPReady(){super._FBPReady();this._FBPAddWireHook("--label",val=>{this.label=val;this.requestUpdate()});this._FBPAddWireHook("--icon",val=>{this.icon=val;this.requestUpdate()});this._FBPAddWireHook("--colorset",color=>{this.primary=!1;this.secondary=!1;this.accent=!1;this.danger=!1;this[color]=!0;this.requestUpdate()});this._FBPAddWireHook("--layout",layout=>{this.raised=!1;this.outline=!1;this.unelevated=!1;this[layout]=!0;this.requestUpdate()});this._FBPAddWireHook("--toggledisabled",()=>{this.disabled=!this.disabled;this.requestUpdate()});this._FBPAddWireHook("--enable",()=>{this.disabled=!1;this.requestUpdate()});this._FBPAddWireHook("--disable",()=>{this.disabled=!0;this.requestUpdate()})}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>furo-button playground</h2>
          <p>Try the button states</p>
        </div>
        <div class="flex">
          <furo-split-view>
            <furo-vertical-flex slot="master">          
              <furo-text-input autofocus label="Label" value="${this.label}" @-value-changed="--label"></furo-text-input>             
              <furo-select-input value="${this.icon}" label="Select icon" list="apps, fingerprint, mail, send, filter-list, alarm-on, alarm-on, undefied-icon"  @-value-changed="--icon"></furo-select-input>
              <furo-select-input label="Theme Color" list="none, primary, secondary, accent, danger"  @-value-changed="--colorset"></furo-select-input>
              <furo-select-input label="Border / Fill" list="none, raised, unelevated, outline"  @-value-changed="--layout"></furo-select-input>
              
              
              <hr>
               <furo-checkbox-input label="disabled" @-checked="--disable"  @-unchecked="--enable" ?checked="${this.disabled}"></furo-checkbox-input>

              <div>
              <hr>
              Methods</div>
              
              <furo-button label="ƒ-focus" @-click="--focus"></furo-button>
              <furo-button label="ƒ-enable" @-click="--enable"></furo-button>
              <furo-button label="ƒ-disable" @-click="--disable"></furo-button>
              
            </furo-vertical-flex>
           <div class="display">
              <furo-button 
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?unelevated="${this.unelevated}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}" 
                 ƒ-focus="--focus"
                 ƒ-enable="--enable"
                 ƒ-disable="--disable"
                 ></furo-button>
                 <furo-button 
                 icon="${this.icon}"
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                   ?unelevated="${this.unelevated}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}"                
                 ></furo-button> 
                 
                 <div style="background-color: white">
                  <furo-button 
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?unelevated="${this.unelevated}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}" 
                 ƒ-focus="--focus"
                 ƒ-enable="--enable"
                 ƒ-disable="--disable"
                 ></furo-button>
                 <furo-button 
                 icon="${this.icon}"
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                   ?unelevated="${this.unelevated}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}"                
                 ></furo-button> 
                 
              </div>
           </div>
          
          
          </furo-split-view>
        </div>
        

      </furo-vertical-flex>

    `;// language=HTML
}}window.customElements.define("furo-button-playground",FuroButtonPlayground);class DemoFuroButton extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);

        }

        :host([hidden]) {
            display: none;
        }


    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-button</h2>
          <p>description</p>
        </div>

        <furo-demo-snippet flex>
          <template>
            <table>
              <tr>
              <th></th>
              <th>Default</th>
              <th>disabled</th>
              <th>raised</th>
              <th>raised disabled</th>
              </th>
              <tr>
                <td>Default</td>
                <td>
                  <furo-button autofocus label="default"></furo-button>
                </td>
                <td>
                  <furo-button disabled label="raised"></furo-button>
                </td> 
                <td>
                  <furo-button raised label="other"></furo-button>
                </td>
                <td>
                  <furo-button disabled raised label="raised"></furo-button>
                </td>
              </tr>
             
               <tr>
                <td>primary</td>
                <td>
                  <furo-button primary label="primary"></furo-button>
                </td>
                <td>
                  <furo-button primary disabled label="primary"></furo-button>
                </td> 
                <td>
                  <furo-button primary raised label="primary"></furo-button>
                </td>
                <td>
                  <furo-button primary disabled raised label="primary"></furo-button>
                </td>
              </tr>

              <tr>
                <td>secondary</td>
                <td>
                  <furo-button secondary label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary disabled label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary raised  label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary disabled raised label="secondary"></furo-button>
                </td>
              </tr>

              <tr>
                <td>accent</td>
                <td>
                  <furo-button accent label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent disabled label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent raised label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent disabled raised label="accent"></furo-button>
                </td>
              </tr>
              <tr>
                <td>danger</td>
                <td>
                  <furo-button danger label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger disabled label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger raised label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger disabled raised label="danger"></furo-button>
                </td>
              </tr>
            </table>
           
          </template>
        </furo-demo-snippet>

      </furo-vertical-flex>

    `}}window.customElements.define("demo-furo-button",DemoFuroButton);class DemoFuroNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-number-input</h2>
      <p>description</p>
      <furo-demo-snippet style="height: 600px">
        <template>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-number-input min="5" step="4" leading-icon="send" label="Label" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="send" filled label="Label" value="Val" hint="Hint:required" required></furo-number-input>
            <furo-number-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-number-input>
            <furo-number-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-number-input>
          </div>
          <div style="padding:30px">
            <furo-number-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-number-input>
            <furo-number-input filled label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input error label="Label" value="Val" errortext="errortext"></furo-number-input>
            <furo-number-input trailing-icon="send" filled error label="Label" value="Val" errortext="errortext"></furo-number-input>
          </div>
          <div style="padding:30px">
            <furo-number-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-number-input>
          </div>

        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-number-input",DemoFuroNumberInput);class DemoFuroRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-range-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-range-input trailing-icon="dashboard" label="Range" step="0.25" value="11" min="10" max="20" hint="Slide for a number"
                              @-value-changed="--rval" ƒ-set-value="--nval"></furo-range-input>
            <furo-number-input  label="Number" hint="type in a number" ƒ-set-value="--rval"
                               @-value-changed="--nval"></furo-number-input>
            <furo-text-input label="Text" hint="type something like a number" ƒ-set-value="--rval"
                             @-value-changed="--rval,--nval"></furo-text-input>
            <hr>

            <furo-range-input  leading-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
            <furo-range-input condensed leading-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
            <furo-range-input filled leading-icon="dashboard" trailing-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
            <furo-range-input filled condensed leading-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-range-input",DemoFuroRangeInput);class DemoFuroTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --surface-light: #f2f2f2;
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>


        <div>
          <h2>Demo furo-text-input</h2>
          <p>description</p>
        </div>
        <furo-horizontal-scroller flex>
          
            <div style="background-color:var(--surface); padding: 30px">
              <furo-text-input min="5" max="8" leading-icon="send" label="Label" hint="Hint: length between 5 and 8" ></furo-text-input>
              <furo-text-input trailing-icon="send" filled label="Label" value="Val" hint="Hint: filled, required" required></furo-text-input>
              <furo-text-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-text-input>
              <furo-text-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-text-input>
            </div>
            <div style="padding:30px">
              
              <furo-text-input label="Label" value="Val" pattern="a.*" hint="Pattern hint: shoud beginn with a"></furo-text-input>
              <furo-text-input filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input error label="Label" value="Val" hint="tex" errortext="errortext"></furo-text-input>
              <furo-checkbox-input label="This is the Label" hint="This is the hint"></furo-checkbox-input>

            </div> 
            <div style="padding:30px">
              
              <furo-text-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed float label="Floating"  hint="Hint"></furo-text-input>
              <furo-checkbox-input condensed label="This is the Label" hint="This is the hint"></furo-checkbox-input>
            </div>
          
        </furo-horizontal-scroller>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-text-input",DemoFuroTextInput);class SampleFuroButton extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        
        furo-demo-snippet {
            height: 200px;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      <furo-demo-snippet>
        <template>
          <style>
            
            
            td{
              padding: 12px;
              text-align: center;
            }
          </style>
          <table>
            <tr>
              <th></th>
              <th>Default</th>
              <th>disabled</th>
              <th>raised</th>
              <th>raised disabled</th>
              </th>
            <tr>
              <td>Default</td>
              <td>
                <furo-button autofocus label="default" ƒ-focus="--primaryraisedClicked" @-click="--defautlClicked"></furo-button>
              </td>
              <td>
                <furo-button disabled>label in tag</furo-button>
              </td>
              <td>
                <furo-button raised icon="fingerprint" label="other" ƒ-focus="--defautlClicked" @-click="--raisedClicked"></furo-button>
              </td>
              <td>
                <furo-button disabled raised label="raised"></furo-button>
              </td>
            </tr>

            <tr>
              <td>primary</td>
              <td>
                <furo-button primary label="primary" ƒ-focus="--raisedClicked" @-click="--primaryClicked"></furo-button>
              </td>
              <td>
                <furo-button primary disabled label="primary"></furo-button>
              </td>
              <td>
                <furo-button primary raised label="primary" ƒ-focus="--primaryClicked" @-click="--primaryraisedClicked"></furo-button>
              </td>
              <td>
                <furo-button primary disabled raised label="primary"></furo-button>
              </td>
            </tr>
          </table>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-button",SampleFuroButton);class SampleFuroRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>

      <furo-demo-snippet >
        <template>
          <furo-range-input ƒ-set-value="--number" autofocus value="123.25" step="0.25" hint="Steps 0.25" label="Range input field" @-value-changed="--number"></furo-range-input>
          <furo-range-input ƒ-set-value="--number" max="125" min="50" value="123" hint="Min max" label="Range input field" @-value-changed="--number"></furo-range-input>
          <furo-range-input error errortext="out of range" ƒ-set-value="--number" hint="Slide for some number" label="With error" @-value-changed="--number"></furo-range-input>
          <furo-range-input disabled ƒ-set-value="--number" value="23" hint="Slide for some number" label="Disabled" @-value-changed="--number"></furo-range-input>
        </template>
      </furo-demo-snippet>
      
    `}}window.customElements.define("sample-furo-range-input",SampleFuroRangeInput);class SampleFuroNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>

      <furo-demo-snippet >
        <template>
          <furo-number-input ƒ-set-value="--number" autofocus value="123.25" step="0.25" hint="Steps 0.25" label="Number input field" @-value-changed="--number"></furo-number-input>
          <furo-number-input ƒ-set-value="--number" max="125" min="122" value="123" hint="Min max" label="Number input field" @-value-changed="--number"></furo-number-input>
          <furo-number-input error errortext="something went wrong" ƒ-set-value="--number" hint="Type in some number" label="With error" @-value-changed="--number"></furo-number-input>
          <furo-number-input disabled ƒ-set-value="--number" value="23" hint="Type in some number" label="Disabled" @-value-changed="--number"></furo-number-input>
        </template>
      </furo-demo-snippet>
      
    `}}window.customElements.define("sample-furo-number-input",SampleFuroNumberInput);class SampleFuroTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>

      <furo-demo-snippet >
        <template>
          <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus" label="Text input field" @-value-changed="--text"></furo-text-input>
          <furo-text-input ƒ-set-value="--text" hint="Type in some text" label="Text input field" @-value-changed="--text"></furo-text-input>
          <furo-text-input error errortext="something went wrong" ƒ-set-value="--text" hint="Type in some text" label="With error" @-value-changed="--text"></furo-text-input>
          <furo-text-input disabled ƒ-set-value="--text" hint="Type in some text" label="With error" @-value-changed="--text"></furo-text-input>
        </template>
      </furo-demo-snippet>
      
    `}}window.customElements.define("sample-furo-text-input",SampleFuroTextInput);class DemoFuroPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --primary: blue;
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>


        <div>
      <h2>Demo furo-password-input</h2>
      <p>description</p>
        
        
          <furo-password-input 
                  value="1234"
                  hint="under your keyboard or on postit below monitor"
                  label="super secret password"
                  ƒ-make-visible="--showPasswordClicked"
                  ƒ-make-invisible="--hidePasswordClicked"
          ></furo-password-input>
          <furo-button @-click="--showPasswordClicked" label="show password"></furo-button>
          <furo-button @-click="--hidePasswordClicked" label="hide password"></furo-button>
        </div>
      <furo-horizontal-scroller flex>

        <div style="background-color: #e5e5e5; padding: 30px">
          <furo-password-input min="5" leading-icon="send" label="Label" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-password-input>
          <furo-password-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-password-input>
        </div>
        <div style="padding:30px">
          <furo-password-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-password-input>
          <furo-password-input filled label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input error label="Label" value="Val" errortext="errortext"></furo-password-input>
          <furo-password-input trailing-icon="send" filled error label="Label" value="Val" errortext="errortext"></furo-password-input>
        </div>
        <div style="padding:30px">
          <furo-password-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-password-input>
        </div>

      </furo-horizontal-scroller>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-password-input",DemoFuroPasswordInput);class DemoFuroSearchInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-search-input</h2>
      <p>Type some text and clear it with the Escape Key</p>
      <furo-demo-snippet >
        <template>
          <furo-search-input label="Search" ></furo-search-input>
          <furo-search-input label="With value" hint="search" value="start:"></furo-search-input>
          <furo-search-input label="With pattern" hint="3 letters" pattern="[A-Za-z]{3}"></furo-search-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-search-input",DemoFuroSearchInput);class DemoFuroTextareaInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-textarea-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-textarea-input rows="1" label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
            <furo-text-input label="compare" value="text" hint="hint"></furo-text-input>
            <hr>
            <furo-textarea-input rows="11" cols="60" label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
            <br>
          
          </template>
        </furo-demo-snippet>
        
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-textarea-input",DemoFuroTextareaInput);class DemoFuroTimeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-time-input</h2>
          <p>If you type in a time outside the min max range or the step, an "error" will be indicated. But not the error text.</p>
          <p>You can also type in a time in a "furo-input-field" (the 3rd field). But when you feed "furo-time-input" with bad data, it displays "--:--"</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>hr{margin:30px 0;}</style>
            <furo-time-input label="nothing "></furo-time-input>
            <furo-time-input ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            
            <hr>

            <furo-time-input condensed label="nothing "></furo-time-input>
            <furo-time-input condensed ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input condensed ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input condensed ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input condensed error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input condensed disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            <hr>
            
            <furo-time-input filled label="nothing "></furo-time-input>
            <furo-time-input filled ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input filled ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input filled error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            
            <hr>

            <furo-time-input filled condensed label="nothing "></furo-time-input>
            <furo-time-input filled condensed ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled condensed ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time Input" @-value-changed="--time"></furo-time-input>
            <furo-text-input filled condensed ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input filled condensed error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled condensed disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            <hr>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-time-input",DemoFuroTimeInput);class DemoFuroDateInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-date-input</h2>
          <p>If you type in a date outside the min max range or the step, an "error" will be indicated. But not the error text.</p>
          <p>You can also type in a date in a "furo-input-field" (the 3rd field). But when you feed "furo-date-input" with bad data, it displays "--:--"</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-date-input ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-text-input ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input condensed ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-date-input condensed ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-text-input condensed ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input condensed error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input condensed disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input filled ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-text-input filled ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input filled error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input filled condensed ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled condensed ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date Input" @-value-changed="--date"></furo-date-input>
            <furo-text-input filled condensed ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input filled condensed error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled condensed disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-date-input",DemoFuroDateInput);class DemoFuroInputTogether extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            
        }

        :host([hidden]) {
            display: none;
        }




    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo input items together</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>
              furo-vertical-scroller{
                  padding: 24px;
                box-sizing: border-box;
              }
              furo-card {
              margin: 16px 16px 16px 0;
              width: 300px;
            }
            .nomargin furo-checkbox-input{
              margin: 0;
            }</style>
            <furo-vertical-scroller>
              <furo-horizontal-flex>
                <furo-card header-text="Select some">

                  <furo-vertical-flex class="nomargin">
                    <furo-checkbox-input hint="Hint" label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input hint="Hint" label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input hint="Hint" label="Benutzerdefinierter "></furo-checkbox-input>
                    <furo-checkbox-input label="Benutzerdefinierter "></furo-checkbox-input>
                  </furo-vertical-flex>


                  <furo-horizontal-flex slot="action">
                    <furo-button primary label="primary"></furo-button>
                    <furo-button label="other"></furo-button>

                  </furo-horizontal-flex>
                </furo-card>

                <furo-card>
                  <furo-form-layouter two>
                    <furo-horizontal-flex space>
                      <furo-time-input ƒ-set-value="--time" value="01:00" step="900" hint="Step in 15 Minutes"
                                       label="Time  field" @-value-changed="--time"></furo-time-input>
                      <furo-empty-spacer></furo-empty-spacer>
                      <furo-color-input label="Color" value="#FEA234"></furo-color-input>

                    </furo-horizontal-flex>
                    <furo-text-input leading-icon="fingerprint" label="Owner"></furo-text-input>
                    <furo-text-input label="Special hint"></furo-text-input>
                    <furo-text-input label="Owner"></furo-text-input>
                  </furo-form-layouter>
                </furo-card>

                <furo-card>
                  <img slot="media" src="/_page/images/hamburg.png" alt="">
                  <div ƒ-.inner-text="--fromTextarea" style="margin-bottom: 30px">Do not forget to give the card <br> a
                    height
                  </div>
                  <furo-horizontal-flex space slot="action">
                    <furo-button primary label="primary"></furo-button>
                    <furo-button accent label="accent"></furo-button>
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-button danger label="Danger"></furo-button>
                  </furo-horizontal-flex>
                </furo-card>
              </furo-horizontal-flex>

              <furo-horizontal-flex space>
                <furo-card>
                  <img slot="media" src="/_page/images/hamburg.png" alt="">
                  <furo-form-layouter two>
                    <furo-search-input leading-icon="arrow-downward" hint="jkhdsfkjsfdjk"
                                       label="Search"></furo-search-input>
                    <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"
                                     hint="Min max in 2020 only" label="Date Input"
                                     @-value-changed="--date"></furo-date-input>

                    <furo-password-input
                            value="1234"
                            hint="under your keyboard or on postit below monitor"
                            label="super secret password"
                            ƒ-make-visible="--showPasswordClicked"
                            ƒ-make-invisible="--hidePasswordClicked"
                    ></furo-password-input>
                  </furo-form-layouter>
                </furo-card>
                <div flex>
                <furo-form-layouter four>

                  <furo-text-input flex ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                                   label="Text input field" @-value-changed="--text"></furo-text-input>

                  <furo-range-input label="Range" step="0.25" value="11" min="10" max="20" hint="Slide for a number"
                                    @-value-changed="--rval" ƒ-set-value="--nval"></furo-range-input>
                  <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                                     label="Number input field" @-value-changed="--number"></furo-number-input>
                </furo-form-layouter>


                  <furo-form-layouter four>
                    <furo-checkbox-input style="margin-top: 19px" label="Benutzerdefinierter Text" hint="Hint"
                                         @-value-changed="--check" autofocus></furo-checkbox-input>
                    <furo-checkbox-input style="margin-top: 19px" label="Disabled " ƒ-set-value="--check" checked
                                         disabled></furo-checkbox-input>
                    <furo-text-input condensed ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                                     label="Text input field" @-value-changed="--text"></furo-text-input>


                    <furo-date-input condensed ƒ-set-value="--time" label="Date field"
                                     @-value-changed="--date"></furo-date-input>
                  </furo-form-layouter>
                  <furo-form-layouter>
                    <furo-textarea-input rows="4" label="a lot of text" hint="just type" value="aa\nss\v"
                                         @-value-changed="--fromTextarea"></furo-textarea-input>


                  </furo-form-layouter>
                </div>
              </furo-horizontal-flex>
              
              <furo-button-bar>
                <furo-button primary raised label="primary"></furo-button>
                <furo-button secondary raised label="secondary"></furo-button>
                <furo-empty-spacer></furo-empty-spacer>
                <furo-button danger raised label="danger"></furo-button>
              </furo-button-bar>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-input-together",DemoFuroInputTogether);class DemoFuroCheckboxInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-checkbox-input</h2>
      
      <furo-demo-snippet >
        <template>
          <furo-checkbox-input label="checked" value="true" ></furo-checkbox-input>
          <furo-checkbox-input label="autofocus" autofocus @-unchecked="--unchecked" @-checked="--checked"></furo-checkbox-input>
          <furo-checkbox-input disabled label="disabled"   ƒ-uncheck="--unchecked" ƒ-check="--checked"></furo-checkbox-input>
          <furo-checkbox-input  condensed label="condensed checked" value="true"  ></furo-checkbox-input>
          <furo-checkbox-input condensed label="condensed unchecked"  ƒ-uncheck="--unchecked" ƒ-check="--checked"></furo-checkbox-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-checkbox-input",DemoFuroCheckboxInput);class SampleFuroSelectInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo sample-furo-select-input</h2>
     
      <furo-demo-snippet >
        <template>
          <furo-select-input leading-icon="fingerprint" trailing-icon="mail" @-value-changed="--val" label="please select" list="23, 44, more, items"  value="more"></furo-select-input>
          <furo-select-input   ƒ-set-value="--val" autofocus label="please select"  options='[{"id":23,"label":"AAA"},{"id":44,"label":"BBB"}]'></furo-select-input>
          <furo-select-input disabled hint="decide" label="please select" options='[{"id":23,"label":"AAA","selected":false},{"id":44,"label":"BBB","selected":true}]'></furo-select-input>
          
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-select-input",SampleFuroSelectInput);class DemoFuroSelectInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}constructor(){super();this.options=[{id:23,label:"AAA",selected:!0},{id:44,label:"BBB",selected:!1},{id:55,label:"CCC",selected:!1},{id:66,label:"DDA",selected:!1},{id:667,label:"DDB",selected:!1},{id:668,label:"DDC",selected:!1},{id:99,label:"Type to get me",selected:!1}]}_FBPReady(){super._FBPReady();// get the snippet
let demo=this.shadowRoot.querySelector("furo-demo-snippet");setTimeout(()=>{let l=demo.shadowRoot.querySelectorAll("furo-select-input");Array.from(l).forEach(input=>{input.setOptions(this.options)})},60)}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-select-input</h2>

      <furo-demo-snippet style="height: 600px">
        <template>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-select-input leading-icon="send" label="Label" hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="send" leading-icon="send" error label="Label"
                               errortext="errortext"></furo-select-input>
            <furo-select-input trailing-icon="send" leading-icon="send" filled error label="Label" value="Val"
                               errortext="errortext"></furo-select-input>
          </div>
          <div style="padding:30px">
            <furo-select-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-select-input>
            <furo-select-input filled label="Label" value="Val" hint="Hint"></furo-select-input>
            <furo-select-input error label="Label" value="Val" errortext="errortext"></furo-select-input>
            <furo-select-input trailing-icon="send" filled error label="Label" value="Val"
                               errortext="errortext"></furo-select-input>
          </div>
          <div style="padding:30px">
            <furo-select-input disabled trailing-icon="fingerprint" condensed label="Label" value="Val"
                               hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="fingerprint" condensed label="Label" value="Val"
                               hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="fingerprint" condensed filled label="Label" value="Val"
                               hint="Hint"></furo-select-input>
          </div>

        </template>
      </furo-demo-snippet>


    `}}window.customElements.define("demo-furo-select-input",DemoFuroSelectInput);class DemoFuroCheckbox extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-checkbox</h2>
      
      <furo-demo-snippet >
        <template>
            <table>
                <tr>
                    <th></th>
                    <th>checked</th>
                    <th>unchecked</th>
                </tr>
                <tr>
                  <td>enabled</td>
                  <td> <furo-checkbox checked></furo-checkbox></td>
                  <td> <furo-checkbox ></furo-checkbox></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td> <furo-checkbox checked disabled></furo-checkbox></td>
                    <td> <furo-checkbox disabled></furo-checkbox></td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td> <furo-checkbox checked autofocus></furo-checkbox></td>
                    <td> </td>
                </tr>
            </table>

        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-checkbox",DemoFuroCheckbox);class DemoFuroColorInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --surface-light: #f2f2f2;
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>


        <div>
          <h2>Demo furo-color-input</h2>
          <p>description</p>
        </div>
        <furo-horizontal-scroller flex>
          
            <div style="background-color:var(--surface); padding: 30px">
              <furo-color-input min="5" max="8" leading-icon="send" label="Label" hint="Hint: length between 5 and 8" ></furo-color-input>
              <furo-color-input trailing-icon="send" filled label="Label" value="Val" hint="Hint: filled, required" required></furo-color-input>
              <furo-color-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-color-input>
              <furo-color-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-color-input>
            </div>
            <div style="padding:30px">
              
              <furo-color-input label="Label" value="Val" pattern="a.*" hint="Pattern hint: shoud beginn with a"></furo-color-input>
              <furo-color-input filled label="Label" value="Val" hint="Hint"></furo-color-input>
              <furo-color-input error label="Label" value="Val" hint="tex" errortext="errortext"></furo-color-input>
              <furo-checkbox-input label="This is the Label" hint="This is the hint"></furo-checkbox-input>

            </div> 
            <div style="padding:30px">
              
              <furo-color-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-color-input>
              <furo-color-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-color-input>
              <furo-color-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-color-input>
              <furo-color-input trailing-icon="fingerprint"  condensed float label="Floating"  hint="Hint"></furo-color-input>
              <furo-checkbox-input condensed label="This is the Label" hint="This is the hint"></furo-checkbox-input>
            </div>
          
        </furo-horizontal-scroller>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-color-input",DemoFuroColorInput);class DemoCondensed extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
             Insert demo here
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-condensed",DemoCondensed);class DemoFuroRadioButtonInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-radio-button-input</h2>
      
      <furo-demo-snippet >
        <template>
          <furo-radio-button-input label="checked" value="true"  ƒ-uncheck="--unchecked" ƒ-check="--checked" ></furo-radio-button-input>
          <furo-radio-button-input label="autofocus" autofocus @-unchecked="--unchecked" @-checked="--checked" ></furo-radio-button-input>
          <furo-radio-button-input disabled label="disabled"   ƒ-uncheck="--unchecked" ƒ-check="--checked"></furo-radio-button-input>
          <furo-radio-button-input  condensed label="condensed checked" value="true"  ></furo-radio-button-input>
          <furo-radio-button-input condensed label="condensed unchecked"  ƒ-uncheck="--unchecked" ƒ-check="--checked"></furo-radio-button-input>
          <br/>
            <furo-button raised condensed @-click="--unchecked" label="uncheck the radio buttons"></furo-button>
          <furo-button raised condensed @-click="--checked" label="check the radio buttons"></furo-button>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-radio-button-input",DemoFuroRadioButtonInput);class DemoFuroRadioButton extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-radio-button</h2>
      
      <furo-demo-snippet >
        <template>
            <table>
                <tr>
                    <th></th>
                    <th>checked</th>
                    <th>unchecked</th>
                </tr>
                <tr>
                  <td>enabled</td>
                  <td> <furo-radio-button checked></furo-radio-button></td>
                  <td> <furo-radio-button ></furo-radio-button></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td> <furo-radio-button checked disabled></furo-radio-button></td>
                    <td> <furo-radio-button disabled></furo-radio-button></td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td> <furo-radio-button checked autofocus></furo-radio-button></td>
                    <td> </td>
                </tr>
            </table>

        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-radio-button",DemoFuroRadioButton);/**
                                                                              * `furo-api-fetch`
                                                                              *
                                                                              * furo-api-fetch can be used for network requests via FETCH API with implemented fallback to XMLHttpRequest
                                                                              *
                                                                              * ```html
                                                                              * <furo-api-fetch ƒ-invoke-request="" ƒ-abort-request=""></furo-api-fetch>
                                                                              * ```
                                                                              *
                                                                              * @customElement
                                                                              * @demo demo/furo-api-fetch_demo.html
                                                                              */class FuroApiFetch extends HTMLElement{/**
   * Fired when a request is sent.
   * Payload: request
   * @event request-started
   */ /**
       * Fired when a request was canceled.
       * Payload: request
       * @event request-aborted
       */ /**
           * Fired when a response is received.
           * Here you will get the raw response object
           * Payload: Raw response
           * @event response-raw
           */ /**
               * Fired when a response is received.
               * Here you will get the parsed response
               * Format depends on request header `content-type`
               * supported types:
               * - text/plain
               * - application/json
               * - image/jpeg (Blob)
               * - application/octet-stream (ArrayBuffer)
               * - application/pdf (Blob)
               *
               * Payload: parsed response
               * @event response
               */ /**
                   * Fired when an error has occoured.
                   * This is a general error event. The specific error events are fired additionally.
                   * @event response-error
                   */ /**
                       * Fired when an error has occoured.
                       * This is a specific error event.
                       * @event response-error-[status-code]
                       */constructor(){super();/**
              * LastRequest's response.
              *
              * Note that lastResponse is set when ongoing request finishes, so if loading is true,
              * then lastResponse will correspond to the result of the previous request.
              * @type {Object}
              */this.lastRequest={};/**
                            * True while request is in flight.
                            * @type boolean
                            */this.isLoading=!1;/**
                             * True if fetch API is not available
                             * @type {boolean}
                             */this.xhrFallback=!window.hasOwnProperty("fetch")}/**
     * Sends a HTTP request to the server
     * @param {Request} request (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request
     * @public
     */invokeRequest(request){if(!request||!request.url){console.warn("No valid request object was passed. No operation is performed!",request,this);return}this.lastRequest=request;this._executeRequest(request)}/**
     * Aborts a pending request
     * You have to submit an AbortController
     * @param {AbortController} controller (The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     */abortRequest(controller){console.info("The request is about to be aborted",this);controller.abort()}/**
     * Requests are made via the Fetch API if possible.
     * Fallback XMLHttpRequest
     *
     * **payload** request object
     * @event fatal-error
     * @param request
     */_executeRequest(request){/**
     * dispatches fatal-error
     * @param detail
     */let fatal=detail=>{this.dispatchEvent(new CustomEvent("fatal-error",{detail:detail,bubbles:!0,composed:!0}))};/**
        * Fallback, if Fetch API ist not available
        */if(this.xhrFallback){this._invokeXHR(request).then(response=>{this._reworkRequest(response)},function(error){fatal(error)})}else{/**
       * Default API fetch
       * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
       */this.isLoading=!0;this.dispatchEvent(new CustomEvent("request-started",{detail:request,bubbles:!0,composed:!0}));fetch(request).then(response=>{this._reworkRequest(response)}).catch(err=>{if("AbortError"===err.name){this.dispatchEvent(new CustomEvent("request-aborted",{detail:request,bubbles:!0,composed:!0}));console.error("RequestService fetch aborted: ",err)}else{console.error("RequestService fatal error",err)}fatal(request)})}}/**
     * Requests are made via fallback XMLHttpRequest
     * @param request
     * @private
     */_invokeXHR(request){console.info("Fetch API not available, fallback to XMLHttpRequest");this.isLoading=!0;return new Promise(function(resolve,reject){/**
       * map Request to XHR
       */let req=new XMLHttpRequest;req.open(request.method,request.url,!0);if(request.headers.get("content-type").includes("json")){req.responseType="json"}else{switch(request.headers.get("content-type")){case"application/octet-stream":req.responseType="arraybuffer";break;case"application/pdf":req.responseType="arraybuffer";break;case"image/jpeg":req.responseType="arraybuffer";break;case"text/plain":req.responseType="text";break;default:req.responseType="arraybuffer";}}/**
         * Append headers from request object to XHR
         */for(var pair of request.headers.entries()){if(/[A-Z]/.test(pair[0])){console.error("Headers must be lower case, got",pair[0])}else{req.setRequestHeader(pair[0],pair[1])}}/**
         * XHR event handlers
         */req.onloadstart=()=>{this.dispatchEvent(new CustomEvent("request-started",{detail:req,bubbles:!0,composed:!0}))};req.onload=()=>{resolve(req)};req.onerror=err=>{console.error("XMLHttpRequest network error",err);reject(req)};req.ontimeout=err=>{console.warn("XMLHttpRequest timeout",err);reject(req)};// Do request
req.send()}.bind(this))}/**
     * Rework of Request
     * @param response
     */ /**
         * Succeeded is true if the request succeeded. The request succeeded if it
         * loaded without error, wasn't aborted, and the status code is ≥ 200, and
         * < 300, or if the status code is 0.
         */ /**
             * Errorhandling according to Google rest-api-v3 Status Codes
             * (https://developers.google.com/maps-booking/reference/rest-api-v3/status_codes)
             *
             * Dispatches event `response-error` and a specific error event with status code
             */_reworkRequest(response){/**
     * The status code 0 is accepted as a success because some schemes - e.g.
     * file:// - don't provide status codes.
     */this.isLoading=!1;let status=0|response.status;if(0===status||200<=status&&300>status){/**
       * Loaded without error, fires event `response` with full response object
       */this.lastResponse=response;this.dispatchEvent(new CustomEvent("response-raw",{detail:response,bubbles:!0,composed:!0}));/**
            * parses response object according to response heaader informationen `content-type`
            * you will find the supported content-types in the declaration area
            */this._parseResponse(response)}else{/**
       * Error detected
       */this.lastResponse=void 0;this.dispatchEvent(new CustomEvent("response-error-raw",{detail:response,bubbles:!0,composed:!0}));response.json().then(error=>{if(error){response.error=error.error;this.dispatchEvent(new CustomEvent("response-error-"+response.status,{detail:error,bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("response-error",{detail:error,bubbles:!0,composed:!0}));//console.error('Looks like there was a problem. Status Code: ', response.status);
}}).catch(()=>{this.dispatchEvent(new CustomEvent("parse-error",{detail:response,bubbles:!0,composed:!0}))})}}/**
     * parses response object according to lastRequest heaader informationen `content-type`
     * you will find the supported content-types in the declaration area
     * response Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]
     * Default response handler is json!
     * @param response
     */_parseResponse(response){let _self=this;if(response){let contentType=this.lastRequest.headers.get("content-type"),responseHandler={"text/plain":r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:r.response,bubbles:!0,composed:!0}))}else{r.text().then(function(text){_self.dispatchEvent(new CustomEvent("response",{detail:text,bubbles:!0,composed:!0}))})}},"application/json":r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:r.response,bubbles:!0,composed:!0}))}else{r.json().then(function(json){_self.dispatchEvent(new CustomEvent("response",{detail:json,bubbles:!0,composed:!0}))})}},"application/octet-stream":r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:r.response,bubbles:!0,composed:!0}))}else{r.arrayBuffer().then(function(buffer){_self.dispatchEvent(new CustomEvent("response",{detail:buffer,bubbles:!0,composed:!0}))})}},"application/pdf":r=>{if(this.xhrFallback){let blob=new Blob([r.response],{type:"image/jpeg"}),fileReader=new FileReader;fileReader.onload=function(evt){var result=evt.target.result;_self.dispatchEvent(new CustomEvent("response",{detail:result,bubbles:!0,composed:!0}))};fileReader.readAsDataURL(blob)}else{r.blob().then(function(blob){_self.dispatchEvent(new CustomEvent("response",{detail:URL.createObjectURL(blob),bubbles:!0,composed:!0}))})}},"image/jpeg":r=>{if(this.xhrFallback){let blob=new Blob([r.response],{type:"image/jpeg"}),fileReader=new FileReader;fileReader.onload=function(evt){var result=evt.target.result;_self.dispatchEvent(new CustomEvent("response",{detail:result,bubbles:!0,composed:!0}))};fileReader.readAsDataURL(blob)}else{r.blob().then(function(blob){_self.dispatchEvent(new CustomEvent("response",{detail:URL.createObjectURL(blob),bubbles:!0,composed:!0}))})}},default:r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:JSON.parse(r.response),bubbles:!0,composed:!0}))}else{r.json().then(function(json){_self.dispatchEvent(new CustomEvent("response",{detail:json,bubbles:!0,composed:!0}))})}}},typeHandler=responseHandler[contentType]||responseHandler["default"];typeHandler(response)}}}customElements.define("furo-api-fetch",FuroApiFetch);class furoCollectionAgent extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event ALL_BUBBLING_EVENTS_FROM_furo-api-fetch
   *
   * All bubbling events from [furo-api-fetch](furo-api-fetch) will be fired, because furo-collection-agent uses furo-api-fetch internally.
   *
   */constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._ApiEnvironment=_furoShell.Env.api;// HTS aus response anwenden
this._FBPAddWireHook("--responseParsed",r=>{if(this._updateInternalHTS(r.links)){/**
         * @event response-hts-updated
         * Fired when
         * detail payload: hts
         */let customEvent=new Event("response-hts-updated",{composed:!0,bubbles:!0});customEvent.detail=r.links;this.dispatchEvent(customEvent)}});this._singleElementQueue=[];//queue for calls, before hts is set
this._queryParams={}}/**
     * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
     * @param eventPrefix
     * @private
     */_attachListeners(eventPrefix){let success=e=>{// we do not want req-success and req-failed outside of this component
e.stopPropagation();let customEvent=new Event(eventPrefix+"-success",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent);// remove listeners
this.removeEventListener("req-success",success,!0);this.removeEventListener("req-failed",failed,!0)},failed=e=>{// we do not want req-success and req-failed outside of this component
e.stopPropagation();let customEvent=new Event(eventPrefix+"-failed",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent);// remove listeners
this.removeEventListener("req-success",success,!0);this.removeEventListener("req-failed",failed,!0)};/**
        * do not add the listener directly to response, otherwise it kicks in before hts is updated
        * This extra "loop" is to guarante the order of handling the events
        */this.addEventListener("req-success",success,!0);this.addEventListener("req-failed",failed,!0)}static get properties(){return{/**
       * The service name. Like ProjectService
       */service:{type:String,attribute:!0},pageSize:{type:Number,attribute:"page-size"},fields:{type:String,attribute:!0},orderBy:{type:String,attribute:"order-by"},filter:{type:Array,attribute:!0},view:{type:String,attribute:!0},listOnHtsIn:{type:Boolean,attribute:"list-on-hts-in"}}}/**
     * https://cloud.google.com/apis/design/design_patterns
     */ /**
         * Partielle Repräsentation
         * https://cloud.google.com/apis/design/design_patterns#partial_response
         *
         * etwas seltsam, aber google sieht hier $fields vor. Wird aber nicht so verwendet
         *
         */setFields(fields){this.fields=fields}/**
     * Sortierreihenfolge
     * https://cloud.google.com/apis/design/design_patterns#sorting_order
     *
     * To avoid sql injection errors we do not send sql like syntax!
     *
     * order-by="foo,-bar"  means foo asc and bar desc
     */setOrderBy(order){this.orderBy=order}/**
     * clear filter
     */clearFilter(){this._filter=void 0}// Filtern  [["user","eq","12345"], ["abgeschlossen","eq", true]]
setFilter(filterstring){if(Array.isArray(filterstring)){this.filter=filterstring}}set filter(f){this._filter=f;/**
                       * @event filter-changed
                       * Fired when filter was updated with ƒ-set-filter
                       * detail payload:
                       */let customEvent=new Event("filter-changed",{composed:!0,bubbles:!0});customEvent.detail=this;this.dispatchEvent(customEvent)}// Gewünschte Seite. Tipp: Folge dem HATEOAS
// Seitengrösse  page_size
// Meta für die Anzahl der Elemente der Resource
/**
   * contextbezogene Darstellung
   *
   * https://cloud.google.com/apis/design/design_patterns#resource_view
   *
   * view=smallcards
   *
   */ /**
       * Setze den Service
       * @param service
       */set service(service){if(!this._servicedefinitions[service]){console.warn("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions);return}this._service=this._servicedefinitions[service];if(this._service.lifecycle&&this._service.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.lifecycle.info)}// set pagination defaults
}/**
     * Update query params
     * a qp like {"active":true} will just update the qp *active*
     *
     * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
     * @param {Object} key value pairs
     */updateQp(qp){let qpChanged=!1;for(let key in qp){if(qp.hasOwnProperty(key)){if(this._queryParams[key]!=qp[key]){qpChanged=!0}this._queryParams[key]=qp[key]}}if(qpChanged){/**
      * @event qp-changed
      * Fired when query params changed
      * detail payload: qp
      */let customEvent=new Event("qp-changed",{composed:!0,bubbles:!0});customEvent.detail=this._queryParams;this.dispatchEvent(customEvent)}}/**
     * clear the query params that you have setted before
     */clearQp(){this._queryParams={}}_makeRequest(link,body){let data;if(body){data=JSON.stringify(body)}// Daten
let headers=new Headers(this._ApiEnvironment.headers);headers.append("Content-Type","application/"+link.type+"+json");headers.append("Content-Type","application/json");let params={},r=link.href.split("?"),req=r[0];// add existing params from href
if(r[1]){r[1].split("&").forEach(p=>{let s=p.split("=");params[s[0]]=s[1]})}// append query params
// query params
for(let key in this._queryParams){if(this._queryParams.hasOwnProperty(key)){params[key]=this._queryParams[key]}}// Fields
if(this.fields){params.fields=this.fields.split(" ").join("")}// Sort
if(this.orderBy){params.order_by=this.orderBy.split(" ").join("")}// Filter
if(this._filter){params.filter=JSON.stringify(this._filter)}// rebuild req
let qp=[];for(let key in params){if(params.hasOwnProperty(key)){qp.push(key+"="+params[key])}}if(0<qp.length){req=req+"?"+qp.join("&")}return new Request(req,{method:link.method,headers:headers,body:data})}/**
     *
     * @param rel
     * @param serviceName
     * @returns {undefined|object}
     * @private
     */_checkServiceAndHateoasLinkError(rel,serviceName){// check Service Get
if(!this._service.services[serviceName]){console.warn("Service "+serviceName+" is not specified",this._service,this);return void 0}//queue if no hts is set, queue it
if(!this._hts){this._singleElementQueue=[[rel,serviceName]];return void 0}// check rel and type
let htsFound=this._hts.find(link=>{if(link.rel===rel&&link.service===this._service.name){return link}});if(!htsFound){console.warn("No HATEOAS for rel "+rel+" in service "+this._service.name+" found.",this._hts,this);return void 0}return htsFound}/**
     * If HATEOAS is present, the wire --triggerLoad is fired with the
     * corresponding request object as payload.
     * @param rel
     * @param serviceName
     * @private
     */_followRelService(rel,serviceName){let hts=this._checkServiceAndHateoasLinkError(rel,serviceName);if(!hts){let customEvent=new Event("missing-hts-"+rel,{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return}this._attachListeners(rel);this._FBPTriggerWire("--triggerLoad",this._makeRequest(hts))}/**
     * loads the entity if hts is available
     */list(){return this._followRelService("list","List")}/**
     * loads the entity if hts is available
     */load(){return this.list()}search(term){if(""!==term){this._queryParams.q=term;this.list()}else{delete this._queryParams.q}}/**
     * loads the entity if hts is available
     */first(){this._followRelService("first","List")}/**
     * loads the entity if hts is available
     */prev(){this._followRelService("prev","List")}/**
     * loads the entity if hts is available
     */next(){this._followRelService("next","List")}/**
     * loads the entity if hts is available
     */last(){this._followRelService("last","List")}_updateInternalHTS(hts){// convert link object to hts array
if(hts&&hts.rel&&hts.method&&hts.type&&hts.href){hts=[hts]}if(hts&&Array.isArray(hts)){this._hts=[];hts.forEach(link=>{this._hts.push(link)});/**
           * @event hts-updated
           * Fired when hateoas is updated from response
           * detail payload: {Array|HATEOAS}
           */let customEvent=new Event("hts-updated",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);return!0}return!1}htsIn(hts){if(this._updateInternalHTS(hts)){/**
       * @event hts-injected
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */let customEvent=new Event("hts-injected",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);if(this.listOnHtsIn){this.list()}// there was a list,last,next call before the hts was set
if(0<this._singleElementQueue.length){let q=this._singleElementQueue.pop();this._followRelService(q[0],q[1])}}}render(){// language=HTML
return _furoShell.html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: none;
        }
      </style>
      <furo-api-fetch
              ƒ-invoke-request="--triggerLoad"
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed,^^req-success"
              @-response-error="^^req-failed"
              @-parse-error="^^req-failed">
      </furo-api-fetch>
    `}}customElements.define("furo-collection-agent",furoCollectionAgent);class FuroCustomMethod extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._ApiEnvironment=_furoShell.Env.api}static get properties(){return{/**
       * Name des Services
       */service:{type:String,attribute:!0},/**
       * Name der Methode
       */method:{type:String,attribute:!0}}}/**
     * Setze den Service
     * @param service
     */set service(service){if(!this._servicedefinitions[service]){console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions);return}this._service=this._servicedefinitions[service];if(this._service.lifecycle&&this._service.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.lifecycle.info)}}bindRequestData(dataObject){this._requestDataObject=dataObject}_makeRequest(link,dataObject){let data,body={};// check if dataObject is set and create body object
if(dataObject){for(let index in dataObject.__childNodes){let field=dataObject.__childNodes[index],val=field._transmit_value;if(val!==void 0){body[field._name]=val}}data=JSON.stringify(body)}// Daten
let headers=new Headers(this._ApiEnvironment.headers);headers.append("Content-Type","application/"+link.type+"+json");headers.append("Content-Type","application/json");return new Request(link.href,{method:link.method,headers:headers,body:data})}_checkServiceAndHateoasLinkError(rel,serviceName){// check Service Get
let s=Object.keys(this._service.services).map(key=>{return key.toLowerCase()});if(-1===s.indexOf(serviceName.toLowerCase())){console.warn("Service "+serviceName+" is not specified",this._service,this);return!0}// check Hateoas
if(!this._hts[rel]){console.warn("No HATEOAS for rel "+rel+" in service "+this._service.name+" found.",this);let customEvent=new Event("missing-hts-"+rel,{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return!0}return!1}/**
     * trigger the method with respect for binded-requset-object
     */trigger(){if(this._requestDataObject){this.triggerWithBody(this._requestDataObject)}else{this.triggerEmpty()}}triggerEmpty(){if(this._checkServiceAndHateoasLinkError(this.method,this.method)){return}this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts[this.method]))}/**
     * trigger the method with data
     */triggerWithBody(body){if(this._checkServiceAndHateoasLinkError(this.method,this.method)){return}this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts[this.method],body))}htsIn(hts){if(hts&&hts[0]&&hts[0].rel){this._hts={};hts.forEach(link=>{this._hts[link.rel]=link});/**
           * @event hts-updated
           * Fired when
           * detail payload:
           */let customEvent=new Event("hts-updated",{composed:!0,bubbles:!0});customEvent.detail=hts;this.dispatchEvent(customEvent)}}render(){// language=HTML
return _furoShell.html`
            <!-- Add a style block here -->
            <style>
                :host {
                    display: none;
                }
            </style>
            <furo-api-fetch
                    ƒ-invoke-request="--triggerLoad"
                    ƒ-abort-request="--abort-demanded">
            </furo-api-fetch>
        `}}window.customElements.define("furo-custom-method",FuroCustomMethod);/**
                                                                       * Custom event type for the AST
                                                                       */class NodeEvent{constructor(type,detail,bubbles=!0){/**
     * Event type / name
     * @type {string}
     */this.type=type;this.path=[];/**
                     *
                     * @type {undefined}
                     */this.target=void 0;/**
                              * should the Event bubble
                              * @type {boolean}
                              */this.bubbles=bubbles;/**
                             * Event details
                             * @type {*}
                             */this.detail=detail;/**
                           * If you are in a parent element and set this to true it will not bubble
                           * @type {boolean}
                           */this.cancelBubble=!1;/**
                                * if you are in a child element and set this to true, the event will not broadcast downwards
                                * @type {boolean}
                                */this.cancelBroadcast=!1}stopPropagation(){this.cancelBubble=!0}stopBroadcast(){//todo: implement
this.cancelBroadcast=!0}}/**
   * Simulates a tree which can handle events and broadcast events to all nodes
   *
   */_exports.NodeEvent=NodeEvent;class EventTreeNode{constructor(parentNode){this.__parentNode=parentNode;this.__eventListener={};this.__childNodes=[];if(parentNode){parentNode.__childNodes.push(this)}}/**
     * shorthand function to add a property as child node
     * @param name
     * @returns {*}
     */addChildProperty(name,treeNode){this[name]=treeNode||new EventTreeNode(this);return this[name]}/**
     * Add a listener to a node
     * @param type
     * @param handler
     * @param options  for once,...
     */addEventListener(type,handler,options={}){if(!this.__eventListener[type]){this.__eventListener[type]=[]}this.__eventListener[type].push({cb:handler,options:options})}/**
     * Removes the listener from a node
     * @param type
     * @param handler
     */removeEventListener(type,handler){this.__eventListener[type]=this.__eventListener[type].filter((e,i)=>{if(e.cb===handler){return!1}})}/**
     * Dispatch an event
     * @param {NodeEvent} event
     * @returns {*}
     */dispatchNodeEvent(event){// simulate target and path
if(!event.target){event.target=this}event.path.push(this);// trigger the events on current node
this.__triggerNodeEvents(event);//trigger parent node
if(event.bubbles&&!event.cancelBubble&&this.__parentNode){this.__parentNode.dispatchNodeEvent(event)}return event}/**
     * Broadcast the event to node and all childNodes and their childNodes
     * Bubbling is ignored, but propagation can be stopped
     * @param event
     * @returns {*}
     */broadcastEvent(event){// trigger the events on current node
this.__triggerNodeEvents(event);//children
if(!event.cancelBroadcast){this.__childNodes.map(c=>{c.broadcastEvent(event)})}return event}__triggerNodeEvents(event){if(this.__eventListener[event.type]&&0<this.__eventListener[event.type].length){this.__eventListener[event.type].map((t,i,listenerArray)=>{t.cb(event);if(t.options.once){delete listenerArray[i]}})}}}_exports.EventTreeNode=EventTreeNode;var EventTreeNode$1={NodeEvent:NodeEvent,EventTreeNode:EventTreeNode};_exports.$EventTreeNode=EventTreeNode$1;class RepeaterNode extends EventTreeNode{constructor(parentNode,spec,fieldName){super(parentNode);this.__specdefinitions=parentNode.__specdefinitions;this._isRepeater=!0;this.repeats=[];this._spec=spec;this._name=fieldName;if(this._spec.meta){this._meta=JSON.parse(JSON.stringify(this._spec.meta))}else{this._meta=function(){return{}}()}if(this._spec.constraints){this._constraints=JSON.parse(JSON.stringify(this._spec.constraints))}else{this._constraints=function(){return{}}()}this._pristine=!0;this._isValid=!0;// handling default _values
let tmp=this._meta.default||[];// if the default _value is already an array do nothing otherwise try to parse json
if("string"===typeof this._meta.default){try{tmp=JSON.parse(this._meta.default)}catch(error){// reset to empty
tmp=[]}}this._value=tmp;/**
                        * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
                        */this.addEventListener("field-became-valid",e=>{if(0===this.repeats.filter(f=>!f._isValid).length){this._isValid=!0;this.dispatchNodeEvent(new NodeEvent("repeat-became-valid",this))}});/**
         * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
         */this.addEventListener("field-became-invalid",e=>{this._isValid=!1;this.dispatchNodeEvent(new NodeEvent("repeat-became-invalid",this))});/**
         * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
         */this.addEventListener("field-value-changed",e=>{this._pristine=!1});this.addEventListener("new-data-injected",e=>{this._pristine=!0});//store __initial_value _value for resetting the field
this.__initialValue=JSON.stringify(this._value)}/**
     * resets the field to the initial _values from the spec
     */reinit(){this._value=JSON.parse(this.__initialValue)}/**
     * deletes all repeated fields on this node
     */removeAllChildren(){this.__childNodes=[];this.repeats=[];this.dispatchNodeEvent(new NodeEvent("repeated-fields-all-removed",this.repeats,!1))}/**
     * infinite recursive element protection
     * we can return false here, because a repeater node is not created automatically
     */_hasAncestorOfType(type){return!1}deleteNode(){let index=this.__parentNode.__childNodes.indexOf(this);this.__parentNode.__childNodes.splice(index,1);delete this.__parentNode[this._name];//notify
this.dispatchNodeEvent(new NodeEvent("this-node-field-deleted",this._name,!1));this.dispatchNodeEvent(new NodeEvent("node-field-deleted",this._name,!0));// because this is deleted, notifiy from parent
this.__parentNode.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this.__parentNode,!0));this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this.__parentNode,!1))}set _value(val){if(Array.isArray(val)){// remove all items if type is furo.Property
if("furo.Property"===this._spec.type){this.removeAllChildren();this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1));this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1))}val.forEach((repdata,i)=>{if(!this.repeats[i]){this._addSilent()}// Werte aktualisieren
this.repeats[i]._value=repdata;this.repeats[i]._pristine=!0});// remove additional nodes in repeats console.log(val.length,this.repeats.length)
if(this.repeats.length>val.length){let l=val.length-1;for(let i=this.repeats.length-1;i>l;i--){this.deleteChild(i)}}this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this,!0));this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1));this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1))}}__updateMetaAndConstraints(metaAndConstraints){for(let fieldname in metaAndConstraints.fields){let mc=metaAndConstraints.fields[fieldname],f=fieldname.split("."),target=f[0],targetfield=f[1];if(2===f.length){// typo protection
if(this.repeats[parseInt(target)][targetfield]){// we are on the parent of a endpoint. Update the metas in this
let field=this.repeats[parseInt(target)][targetfield];for(let m in mc.meta){// update the metas
field._meta[m]=mc.meta[m]}for(let c in mc.constraints){// update the constraints
field._constraints[c]=mc.constraints[c]}/**
             * @event this-metas-changed INTERNAL Event
             *
             * Fired when field metas, constraints or options changed
             * detail payload:
             */field.dispatchNodeEvent(new NodeEvent("this-metas-changed",field,!1));// exit here, it does not go deeper
return}}let subMetaAndConstraints={fields:{}};subMetaAndConstraints.fields[f.slice(2).join(".")]=mc;// typo protection
if(this.repeats[parseInt(target)][targetfield]){this.repeats[parseInt(target)][targetfield].__updateMetaAndConstraints(subMetaAndConstraints)}}}get _value(){return this.repeats.map(f=>{return f._value})}/**
     * Returns all not readonly field values with deep dive
     *
     * @private
     */get _transmit_value(){const n=[];this.__childNodes.forEach(f=>{let val=f._transmit_value;if(val!==void 0){n.push(val)}});return n.length?n:void 0}/**
     * Returns all modified field values with deep dive (! _pristine)
     * @private
     */get _delta_value(){const n=[];this.__childNodes.forEach(f=>{let val=f._delta_value;if(val!==void 0){n.push(val)}});return n.length?n:void 0}/**
     * Returns required fields with all children which are modified or
     * not readonly
     * @private
     */get _required_value(){const n=[];this.__childNodes.forEach(f=>{let val=f._required_value;if(val!==void 0){n.push(val)}});return n.length?n:void 0}/**
     * Deletes a repeated item by index
     * @param index
     */deleteChild(index){this.repeats.splice(index,1);this.__childNodes.splice(index,1);this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this.repeats,!0));this.dispatchNodeEvent(new NodeEvent("this-repeated-field-removed",this.repeats,!1));this.dispatchNodeEvent(new NodeEvent("repeated-fields-removed",this.repeats,!0));this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1));this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1))}_addSilent(){let fieldNode=new FieldNode(this,this._spec,this._name),index=this.repeats.push(fieldNode)-1;fieldNode.__index=index;// add function to remove field from list
fieldNode._deleteFromList=()=>{this.deleteChild(this.repeats.indexOf(fieldNode))};return index}_setInvalid(error){this._isValid=!1;let path=error.field.split(".");if(0<path.length){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".")}this.repeats[path[0]]._setInvalid(error)}add(data){let index=this._addSilent();this._pristine=!1;// set data if given
if(data){let child=this.repeats[index];child._value=data}this.dispatchNodeEvent(new NodeEvent("repeated-fields-added",this.repeats[index],!0));this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-added",this.repeats[index],!1));this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this,!0));this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1));this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",this,!1));// return field for chainabilty
return this.repeats[index]}}_exports.RepeaterNode=RepeaterNode;var RepeaterNode$1={RepeaterNode:RepeaterNode};_exports.$RepeaterNode=RepeaterNode$1;class Helper{// get the default value of a type,  according to https://developers.google.com/protocol-buffers/docs/proto3#default
static defaultForType(type){switch(type){case"string":case"bytes":return"";case"bool":return!1;case"float":case"double":case"int32":case"int64":case"uint32":case"uint64":case"sint32":case"sint64":case"fixed32":case"fixed64":case"sfixed32":case"sfixed64":return 0;default:return void 0;}}}_exports.Helper$1=Helper;var Helper$1={Helper:Helper};_exports.$Helper=Helper$1;class FieldNode extends EventTreeNode{constructor(parentNode,fieldSpec,fieldName){super(parentNode);this.__specdefinitions=parentNode.__specdefinitions;this._spec=fieldSpec;if(this._spec.meta){this._meta=JSON.parse(JSON.stringify(this._spec.meta))}else{this._meta=function(){return{}}()}if(this._spec.constraints){this._constraints=JSON.parse(JSON.stringify(this._spec.constraints))}else{this._constraints=function(){return{}}()}this._name=fieldName;this.__index=fieldName;this.__value=null;this._pristine=!0;this._isValid=!0;// Build custom type if a spec exists
if(this.__specdefinitions[this._spec.type]!==void 0){// check for recursion
if(!this.__parentNode._hasAncestorOfType(this._spec.type)){if("google.protobuf.Any"!==this._spec.type){this._createVendorType(this._spec.type)}}else{this._isRecursion=!0}}// set default value from meta
if(this._meta&&this._meta.default){this.defaultvalue=this._meta.default}/**
       * Schaltet ein Feld auf valid, müssen wir alle Kinder oder verästelungend des Felds auf validity prüfen...
       */this.addEventListener("field-became-valid",e=>{let v=this.__childNodes.filter(f=>!f._isValid);if(0===v.length){this._isValid=!0}});/**
         * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
         */this.addEventListener("field-became-invalid",e=>{this._isValid=!1});this.addEventListener("field-value-changed",e=>{this._pristine=!1});this.addEventListener("new-data-injected",e=>{this._pristine=!0});//store __initialValue value for resetting the field
this.__initialValue=JSON.stringify(this._value)}/**
     * create a field in a FieldNode, this is useful when using map<string,something>
     *   set the value option to init with values
     * @param options {"fieldName":"name","type":"string", "spec":{..}}  spec is optional
     */createField(options){let fieldName=options.fieldName,spec={type:options.type};if(options.spec){spec=options.spec}if(!this[fieldName]){this[fieldName]=new FieldNode(this,spec,fieldName);this.dispatchNodeEvent(new NodeEvent("this-node-field-added",this,!1));this.dispatchNodeEvent(new NodeEvent("node-field-added",this,!0));// set Value if given
if(options._value){this[fieldName]._value=options._value}return!0}else{return!1}}/**
     * infinite recursive element protection
     */_hasAncestorOfType(type){if(this._type===type){return!0}else{return this.__parentNode._hasAncestorOfType(type)}}/**
     * resets the field to the initial values from the spec
     */reinit(){this._value=JSON.parse(this.__initialValue)}_createVendorType(type){if(this.__specdefinitions[type]){for(let fieldName in this.__specdefinitions[type].fields){if(this.__specdefinitions[type].fields[fieldName].meta&&this.__specdefinitions[type].fields[fieldName].meta.repeated){this[fieldName]=new RepeaterNode(this,this.__specdefinitions[type].fields[fieldName],fieldName)}else{this[fieldName]=new FieldNode(this,this.__specdefinitions[type].fields[fieldName],fieldName)}}}else{console.warn(type+" does not exist")}}set _value(val){// create vendor type if this field is a recusion an was not generated
if(this._isRecursion&&val){this._createVendorType(this._spec.type)}// type any
this._createAnyType(val);// map<string, something> typ
if(this._spec.type.startsWith("map<")){this._updateKeyValueMap(val,this._spec.type)}else{if(0<this.__childNodes.length){let furoMetaDetected=!1;for(let index in this.__childNodes){let field=this.__childNodes[index];if("furo.Meta"===field._spec.type){// we have meta declaration on this layer
furoMetaDetected=val[field._name]}if(val&&val.hasOwnProperty(field._name)){field._value=val[field._name]}}/**
           * if we have meta on this layer, we should update the siblings
           */if(furoMetaDetected){this.__updateMetaAndConstraints(furoMetaDetected)}}else{// update the primitive type
this._oldvalue=this._value;this.__value=val;this._pristine=!1;if(JSON.stringify(this._oldvalue)!==JSON.stringify(this.__value)){/**
           * @event (field-value-changed)
           *
           * ✋ Internal Event from EntityNode which you can use in the targeted components!
           *
           * Fired when a value on a field node changes. This event **bubbles** by default. Can be used on any node.
           *
           * detail payload: **{NodeEvent}** with reference to the FieldNode
           */this.dispatchNodeEvent(new NodeEvent("field-value-changed",this,!0));/**
                                                                                        * @event (this-field-value-changed)
                                                                                        *
                                                                                        * ✋ Internal Event from EntityNode which you can use in the targeted components!
                                                                                        *
                                                                                        * Fired when a value on a particular field node changes. This event **does not bubble**. Can be used on any node.
                                                                                        *
                                                                                        * detail payload: **{NodeEvent}** with reference to the FieldNode
                                                                                        */this.dispatchNodeEvent(new NodeEvent("this-field-value-changed",this,!1))}}}//  clear field if it is not in the incomming data
// set default values according to https://developers.google.com/protocol-buffers/docs/proto3#default
this.__childNodes.forEach(n=>{if(val&&!val.hasOwnProperty(n._name)){if(0<n.__childNodes.length){n._value={}}else{n._value=Helper.defaultForType(n._spec.type)}}});this.dispatchNodeEvent(new NodeEvent("branch-value-changed",this,!1))}__updateMetaAndConstraints(metaAndConstraints){// on this layer you can only pass the constraint to the children
// get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
// a field which is targeted we delegate the sub request to  this field
for(let fieldname in metaAndConstraints.fields){let mc=metaAndConstraints.fields[fieldname],f=fieldname.split(".");if(1===f.length){// we are on the parent of a endpoint. Update the metas in this
let field=f[0];for(let m in mc.meta){// update the metas
this[field]._meta[m]=mc.meta[m]}for(let c in mc.constraints){// update the constraints
this[field]._constraints[c]=mc.constraints[c]}/**
           * @event this-metas-changed INTERNAL Event
           *
           * Fired when field metas, constraints or options changed
           * detail payload:
           */this[field].dispatchNodeEvent(new NodeEvent("this-metas-changed",this[field],!1));// exit here, it does not go deeper
return}let target=f[0],subMetaAndConstraints={fields:{}};subMetaAndConstraints.fields[f.slice(1).join(".")]=mc;let x=this[target];this[target].__updateMetaAndConstraints(subMetaAndConstraints)}}_createAnyType(val){// remove if type changes
if(val&&this.__anyCreated&&this["@type"]._value!==val["@type"]){for(let i=this.__childNodes.length-1,field;0<=i;i--){field=this.__childNodes[i];if(!val[field._name]){field.deleteNode()}}this.__anyCreated=!1}if("google.protobuf.Any"===this._spec.type&&val&&val["@type"]&&!this.__anyCreated){// create custom type if not exist
// any can only be a complex type
this._createVendorType(val["@type"].replace(/.*\//,""));// create with basename of the type (xxx.xxx.xx/path/base.Type becomes base.Type)
this.__anyCreated=!0;this.createField({fieldName:"@type",type:"string",value:val["@type"]})}}_updateKeyValueMap(val,spec){let vType=spec.match(/,\s*(.*)>/)[1],fieldSpec={type:vType};// create if not exist
for(let fieldName in val){if(this[fieldName]==void 0){this[fieldName]=new FieldNode(this,fieldSpec,fieldName)}//update data
this[fieldName]._value=val[fieldName]}//remove unseted
for(let i=this.__childNodes.length-1,field;0<=i;i--){field=this.__childNodes[i];if(!val||!val[field._name]){field.deleteNode()}}}/**
     * deletes the fieldnode
     */deleteNode(){// remove from list if this is a repeated item
if("function"===typeof this._deleteFromList){this._deleteFromList()}else{let index=this.__parentNode.__childNodes.indexOf(this);this.__parentNode.__childNodes.splice(index,1);delete this.__parentNode[this._name]}//notify
this.dispatchNodeEvent(new NodeEvent("this-node-field-deleted",this._name,!1));this.dispatchNodeEvent(new NodeEvent("node-field-deleted",this._name,!0))}set defaultvalue(val){// if the default value is already an object, number,array do nothing otherwise try to parse json
if("string"===typeof val){try{val=JSON.parse(val)}catch(error){}}// type any
this._createAnyType(val);if(0<this.__childNodes.length&&val){for(let index in this.__childNodes){let field=this.__childNodes[index];field.defaultvalue=val[field._name]}}else{if(this._spec.type.startsWith("map<")){this._updateKeyValueMap(val,this._spec.type)}else{this._oldvalue=this._value;this.__value=val;this._pristine=!0}}}get _value(){if(0<this.__childNodes.length){this.__value={};// nur reine Daten zurück geben
for(let index in this.__childNodes){let field=this.__childNodes[index];this.__value[field._name]=field._value}}return this.__value}/**
     * Returns all not readonly fields values with deep dive
     * Mandatory fields (required is true) MUST always be transmitted
     * !readonly || required
     * @private
     */get _transmit_value(){// a required field needs a special treatment --> required path
if(this._constraints&&this._constraints.required&&"true"===this._constraints.required.is){return this._required_value}if(this._meta&&!this._meta.readonly){if(0<this.__childNodes.length){this.__value={};// nur reine Daten zurück geben
for(let index in this.__childNodes){let field=this.__childNodes[index],val;if(this._constraints&&this._constraints.required&&"true"===this._constraints.required.is){val=this._required_value}else{val=field._transmit_value}if(val!==void 0){this.__value[field._name]=val}}}return this.__value}else{return void 0}}/**
     * Returns all modified fields values with deep dive (! _pristine)
     * modified || required
     * @private
     */get _delta_value(){// a required field needs a special treatment --> required path
if(this._constraints&&this._constraints.required&&"true"===this._constraints.required.is){return this._required_value}if(!this._pristine){if(0<this.__childNodes.length){this.__value={};// nur reine Daten zurück geben
for(let index in this.__childNodes){let field=this.__childNodes[index],val;if(this._constraints&&this._constraints.required&&"true"===this._constraints.required.is){val=this._required_value}else{val=field._delta_value}if(val!=void 0){this.__value[field._name]=val}}}return this.__value}else{return void 0}}/**
     * Returns required fields with all children which are modified or
     * not readonly
     * ! readonly || req || modified
     * @private
     */get _required_value(){if(this._meta&&!this._meta.readonly||this._constraints&&this._constraints.required&&"true"===this._constraints.required.is||!this._pristine){if(0<this.__childNodes.length){this.__value={};// nur reine Daten zurück geben
for(let index in this.__childNodes){let field=this.__childNodes[index],val=field._required_value;if(val!==void 0){this.__value[field._name]=val}}}return this.__value}else{return void 0}}/**
     * Returns all not readonly field values with deep dive
     * Mandatory fields (required is true) MUST always be transmitted
     * @private
     */ // get _transmit_value(){
//   if ((this._constraints && this._constraints.required && this._constraints.required.is === 'true') || this._meta && !this._meta.readonly){
//     if (this.__childNodes.length > 0) {
//       this.__value = {};
//       // nur reine Daten zurück geben
//       for (let index in this.__childNodes) {
//         let field = this.__childNodes[index];
//         let val = field._transmit_value;
//         if (val !== undefined){
//           this.__value[field._name] = val;
//         }
//       }
//     }
//     return this.__value;
//
//   } else {
//     return undefined;
//   }
// }
/**
   * Returns all modified field values with deep dive (! _pristine)
   * @private
   */ // get _delta_value() {
//     if ((this._constraints && this._constraints.required && this._constraints.required.is === 'true') || this._meta && !this._meta.readonly && !this._pristine) {
//         if (this.__childNodes.length > 0) {
//             this.__value = {};
//             // nur reine Daten zurück geben
//             for (let index in this.__childNodes) {
//                 let field = this.__childNodes[index];
//                 let val = field._delta_value;
//                 if (val != undefined) {
//                     this.__value[field._name] = val;
//                 }
//             }
//         }
//         return this.__value;
//
//     } else {
//         return undefined;
//     }
// }
_clearInvalidity(){if(!this._isValid){this._isValid=!0;this._validity={};/**
                            * @event (field-became-valid)
                            *
                            * ✋ Internal Event from EntityNode which you can use in the targeted components!
                            *
                            * Fired when a field or subfield gets invalid.
                            *
                            * detail payload: **{NodeEvent}** with reference to the FieldNode
                            */this.dispatchNodeEvent(new NodeEvent("field-became-valid",this,!0));/**
                                                                                * @event (this-field-became-valid)
                                                                                *
                                                                                * ✋ Internal Event from EntityNode which you can use in the targeted components!
                                                                                *
                                                                                * Fired when a field gets invalid. This event **does not bubble**. Can be used on any node.
                                                                                *
                                                                                * detail payload: **{NodeEvent}** with reference to the FieldNode
                                                                                */this.dispatchNodeEvent(new NodeEvent("this-field-became-valid",this,!1))}}_setInvalid(error){// set field empty, if not defined
error.field=error.field||"";let path=error.field.split(".");if(0<path.length&&""!==path[0]){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".");if(this[path[0]]){this[path[0]]._setInvalid(error)}else{console.warn("Unknown field",path,this._name)}}else{this._isValid=!1;this._validity=error;this.dispatchNodeEvent(new NodeEvent("field-became-invalid",this))}}toString(){if(null!==this._value){return this._value}else{return""}}}_exports.FieldNode=FieldNode;var FieldNode$1={FieldNode:FieldNode};_exports.$FieldNode=FieldNode$1;class DataObject extends EventTreeNode{constructor(parentNode,type,specs){super(parentNode);this.__specdefinitions=specs;this._spec=this.__specdefinitions[type];this._type=type;this._initFieldsFromSpec(this,this._spec.fields);this._pristine=!0;this._isValid=!0;/**
                           * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
                           */this.addEventListener("field-became-valid",e=>{if(0===this.__childNodes.filter(f=>!f._isValid).length){this._isValid=!0;this.dispatchNodeEvent(new NodeEvent("entity-became-valid",this))}});/**
         * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
         */this.addEventListener("field-became-invalid",e=>{this._isValid=!1;this.dispatchNodeEvent(new NodeEvent("entity-became-invalid",this))});/**
         * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
         */this.addEventListener("field-value-changed",e=>{this._pristine=!1});this.addEventListener("repeated-fields-added",e=>{this._pristine=!1})}/**
     * Injecten eines raw models wie bspw body oder entity einer collection
     * @param rawEntity
     */injectRaw(rawEntity){this._rawEntity=rawEntity;this._updateFieldValuesAndMetaFromRawEntity(this,rawEntity);this._pristine=!0;this._isValid=!0;/**
                           * Broadcast Event
                           *
                           */this.broadcastEvent(new NodeEvent("new-data-injected",this));/**
                                                                    * @event (data-injected)
                                                                    *
                                                                    * ✋ Internal Event from EntityNode which you can use in the targeted components!
                                                                    *
                                                                    * Fired when `ƒ-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
                                                                    *
                                                                    * This event **bubbles**.
                                                                    *
                                                                    * detail payload: **{NodeEvent}**
                                                                    */this.dispatchNodeEvent(new NodeEvent("data-injected",this,!0))}/**
     * Resete zum letzten injected state zurück
     */reset(){if(this._rawEntity){this.injectRaw(this._rawEntity)}}_hasAncestorOfType(type){return this._type===type}/**
     * Inits the EntityNode
     */init(){for(let i=this.__childNodes.length-1;0<=i;i--){this.__childNodes[i].reinit()}this._initFieldsFromSpec(this,this._spec.fields);this._pristine=!0;this._isValid=!0}get rawEntity(){return this._rawEntity}/**
     * Returns a json representation of your Data Object
     * @return {*}
     */get _value(){return this.getJson()}/**
     * Returns a json representation of your Data Object
     * @return {*}
     */get value(){return this.getJson()}/**
     * Returns a json representation of your Data Object
     * @return {*}
     */getJson(){let data={};// nur reine Daten zurück geben
for(let index in this.__childNodes){let field=this.__childNodes[index];data[field._name]=field._value}return data}_updateFieldValuesAndMetaFromRawEntity(node,data){let furoMetaDetected=!1;for(let fieldName in data){let fieldNode=node[fieldName];if("furo.Meta"===fieldNode._spec.type){furoMetaDetected=data[fieldName]}if(!fieldNode){console.warn("unspecified field",fieldName)}else{if(fieldNode._isRepeater){let initialSize=fieldNode.repeats.length;//fieldNode.removeAllChildren();
// update records
data[fieldName].forEach((repdata,i)=>{// create if record index do not exist
if(!fieldNode.repeats[i]){fieldNode._addSilent()}// Werte aktualisieren
fieldNode.repeats[i]._value=repdata;fieldNode.repeats[i]._pristine=!0;fieldNode.repeats[i].__index=i});// entferne überzählige nodes
let newSize=data[fieldName].length;if(newSize<fieldNode.repeats.length){fieldNode.repeats.splice(newSize);fieldNode.__childNodes.splice(newSize)}fieldNode._pristine=!0;fieldNode.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",fieldNode,!0));fieldNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed",fieldNode,!1))}else{if(fieldNode){fieldNode._clearInvalidity();// Werte aktualisieren
fieldNode._value=data[fieldName];fieldNode._pristine=!0}}}}/* todo: discuss if resetting is needed on this level
      // check for fields to reset
      node.__childNodes.forEach((n)=>{
        if(!data[n._name]){
          //the field node[n._name] should be reseted
        }
      });
      */ //  clear fields if it is not in the incomming data
node.__childNodes.forEach(n=>{if(data&&!data.hasOwnProperty(n._name)){if(0<n.__childNodes.length){n._value={}}else{n._value=Helper.defaultForType(n._spec.type)}}});if(furoMetaDetected){this.__updateMetaAndConstraints(furoMetaDetected)}}__updateMetaAndConstraints(metaAndConstraints){// on this layer you can only pass the constraint to the children
// get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
// a field which is targeted we delegate the sub request to  this field
for(let fieldname in metaAndConstraints.fields){let mc=metaAndConstraints.fields[fieldname],f=fieldname.split("."),target=f[0],subMetaAndConstraints={fields:{}};subMetaAndConstraints.fields[f.slice(1).join(".")]=mc;this[target].__updateMetaAndConstraints(subMetaAndConstraints)}}_setInvalid(error){// set field empty, if not defined
error.field=error.field||"";let path=error.field.split(".");if(0<path.length&&""!==path[0]){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".");if(this[path[0]]){this[path[0]]._setInvalid(error)}else{console.warn("Unknown field",path,this._name)}}else{this._isValid=!1;this._validity=error;this.dispatchNodeEvent(new NodeEvent("field-became-invalid",this))}}/**
     * Baut die Felder aufgrund der spec auf
     * @param node
     * @param fieldSpec
     * @private
     */_initFieldsFromSpec(node,fieldSpec){for(let fieldName in fieldSpec){if(fieldSpec[fieldName].meta&&fieldSpec[fieldName].meta.repeated){node[fieldName]=new RepeaterNode(node,fieldSpec[fieldName],fieldName)}else{node[fieldName]=new FieldNode(node,fieldSpec[fieldName],fieldName)}}}toString(){return this._spec.type}}_exports.DataObject=DataObject;var DataObject$1={DataObject:DataObject};_exports.$DataObject=DataObject$1;class FuroDataObject extends _furoShell.LitElement{constructor(){super();this._specs=_furoShell.Env.api.specs}static get properties(){return{/**
       * The name of the type you want to use. The type must be registered in Env
       */type:{type:String}}}/**
     * inject a raw data response from the corresonding agent.
     *
     * Input may look something like this:
     *
     * **Entity data**
     * ```json
     *  {data:{},links:[],meta{}}
     * ```
     *
     * **Collection data**
     * ```json
     *  {data:{},links:[],meta{},entities:[]}
     * ```
     *
     * @param jsonObj
     */injectRaw(jsonObj){this._injectPromise=new Promise(resolve=>{// queue inject bis entity bereit ist
if(!this.data){this._queue=jsonObj;this._queuedInjectResolver=resolve}else{this.data.injectRaw(jsonObj);resolve(this.data)}});return this._injectPromise}/**
     * Set the type. The type must be available in the environment
     * @param type
     */set type(type){if(this._checkType(type)){this._type=type}}/**
     * get the data from the data object as raw json
     */get json(){return this.data.value}/**
     * Reset the model to the last injected state.
     *
     * To set the model to the initial state use init
     */reset(){this.data.reset()}/**
     * Sets the model to an initial state according to the given type.
     *
     * To reset changed data to the last injected state, please use reset();
     */init(){this.data.init();let customEvent=new Event("object-ready",{composed:!0,bubbles:!0});customEvent.detail=this.data;setTimeout(()=>{this.dispatchEvent(customEvent)},0)}/**
     *
     * @param type
     * @private
     */_checkType(type){if(this._specs[type]===void 0){console.warn("Type does not exist.",type,this,this._specs);return!1}/**
       * create the entity node
       * @type {EntityNode}
       */this.data=new DataObject(null,type,this._specs);// if data is on queue inject it.
if(this._queue!==void 0){this.data.injectRaw(this._queue);this._queue=void 0;this._queuedInjectResolver(this.data)}/**
       * @event object-ready
       * Fired when the object is built (based on the type).
       *
       * **detail payload:** A EntityNode object
       *
       * **bubbles**
       */let customEvent=new Event("object-ready",{composed:!0,bubbles:!0});customEvent.detail=this.data;setTimeout(()=>{this.dispatchEvent(customEvent)},0);this.data.addEventListener("data-injected",e=>{/**
       * @event data-injected
       * Fired when injected data was processed.
       *
       * **detail payload**: {Object|EntityNode} reference to entity
       *
       * **bubbles**
       */let customEvent=new Event("data-injected",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent)});this.data.addEventListener("field-value-changed",e=>{/**
       * @event data-changed
       * Fired when data in furo-data-object has changed
       *
       *   **detail payload:** {Object|CollectionNode}
       *
       *   **bubbles**
       */let dataEvent=new Event("data-changed",{composed:!0,bubbles:!0});dataEvent.detail=this.data;this.dispatchEvent(dataEvent);/**
                                     * @event field-value-changed
                                     * Fired when a field has changed
                                     * detail payload: {Object} the field node
                                     */let customEvent=new Event("field-value-changed",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent)});return!0}}window.customElements.define("furo-data-object",FuroDataObject);class FuroDeepLink extends _furoShell.LitElement{constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._qp={}}static get properties(){return{/**
       * @type {object|QueryParams} Query Params
       */qp:{type:Object},/**
       * Name des Services
       */service:{type:String,attribute:!0}}}/**
     * Evaluates hts. Use qpIn(qp) if you have a qp object in your event.detail
     */trigger(){if(this._qp&&this._service){this._buildHTS(this._qp,this._service)}}_buildHTS(qp,service){this._hts=[];// loop services
for(let serviceName in service.services){let candidate={rel:service.services[serviceName].deeplink.rel,href:service.services[serviceName].deeplink.href,method:service.services[serviceName].deeplink.method,service:service.name,type:service.services[serviceName].request};for(let param in this._qp){candidate.href=candidate.href.replace("{"+param+"}",this._qp[param])}//wenn es keine {xx} mehr hat, ist es ein treffer
if(-1===candidate.href.indexOf("{")){//candidate.type = "application/" + candidate.type + "+json"
this._hts.push(candidate)}}if(this._hts.length){/**
       * @event hts-out
       * Fired when hateoas is available
       * detail payload: {[]Links} Array of hateoas links
       */let customEvent=new Event("hts-out",{composed:!0,bubbles:!0});customEvent.detail=this._hts;this.dispatchEvent(customEvent)}}/**
     * set queryParams and evaluate for hateoas
     * @param queryParams
     */qpIn(queryParams){this._qp=queryParams;this.trigger()}/**
     * Deprecated
     *
     * use ƒ-qp-in instead
     *
     * Inject a QueryParams (key value) Object
     * @param {object|QueryParams} qp
     */injectQueryParams(qp){console.warn("injectQueryParams is deprecated, use \u0192-qp-in instead");console.warn("This feature will be removed in Q3-2019",this);// zwischenspeichern für einen ev. ƒ-trigger
this._qp=qp;this.trigger()}/**
     * Sets the service
     *
     * Services must be registered like:
     *
     * ```html
     * import {Services,Types} from "./apiConfig.js"
     * Init.registerApiServices(Services);
     * Init.registerApiTypes(Types);
     * ```
     * Usually this is done in your main-app.js
     *
     * @param serviceName
     */setService(serviceName){this.service=serviceName}/**
     * Setze den Service
     * @param service
     */set service(service){if(this._servicedefinitions[service]){this._service=this._servicedefinitions[service];if(this._service.lifecycle&&this._service.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.lifecycle.info)}}else{console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions)}}}window.customElements.define("furo-deep-link",FuroDeepLink);class FuroDataEmmiter extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Bind a data object. The trigger method will not fire until an object was bounded.
   * @param {Object|FieldNode}  a object from furo-data-object
   */bindData(d){this.field=d}/**
     * Read .value of the bounded data object and emit data as json object.
     */trigger(){/**
    * @event data
    * Fired when trigger was called and data binding was done
    * detail payload: json data of a data object
    */if(this.field){let customEvent=new Event("data",{composed:!0,bubbles:!1});customEvent.detail=this.field._value;this.dispatchEvent(customEvent)}}}window.customElements.define("furo-data-emmiter",FuroDataEmmiter);class FuroEntityAgent extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._ApiEnvironment=_furoShell.Env.api;// HTS aus response anwenden
this._FBPAddWireHook("--responseParsed",r=>{if(this._updateInternalHTS(r.links)){/**
         * @event response-hts-updated
         * Fired when
         * detail payload: hts
         */let customEvent=new Event("response-hts-updated",{composed:!0,bubbles:!0});customEvent.detail=r.links;this.dispatchEvent(customEvent)}});this._singleElementQueue=[];//queue for calls, before hts is set
}static get properties(){return{/**
       * Name des Services
       */service:{type:String,attribute:!0},/**
       * triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
       */loadOnHtsIn:{type:Boolean,attribute:"load-on-hts-in"}}}/**
     * Setze den Service
     * @param service
     */set service(service){if(!this._servicedefinitions[service]){console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions);return}this._service=this._servicedefinitions[service];if(this._service.lifecycle&&this._service.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.lifecycle.info)}}/**
     * Binds a furo-data-object type. Use this if you want save data.
     *
     * @param dataObject
     */bindRequestData(dataObject){this._requestDataObject=dataObject}/**
     * Creates a Request object with header and body data
     * - special treatment for method PATCH
     * - body object only includes writeable fields
     * @param link
     * @param dataObject
     * @returns {Request}
     * @private
     */_makeRequest(link,dataObject){let data,body={};// check if dataObject is set and create body object
if(dataObject){// Method PATCH sends only modified data (.pristine)
if("patch"===link.method.toLowerCase()){for(let index in dataObject.__childNodes){let field=dataObject.__childNodes[index],val=field._delta_value;if(val!==void 0){body[field._name]=val}}// the request object MUST contain a field named 'update_mask'
if(!this._ApiEnvironment.specs[this._service.services.Update.data.request].fields.hasOwnProperty("update_mask")){console.warn("The request type "+this._ApiEnvironment.specs[this._service.services.Update.data.request].name+" has no specified field (update_mask) to transmit the changed fields. The operation applies to all fields!",this._ApiEnvironment.specs[this._service.services.Update.data.request],this)}// add the field_mask
body.update_mask=this._getFieldMask(body)}else{// send all data
if(_furoShell.Env.api.sendAllDataOnMethodPut&&"put"===link.method.toLowerCase()){body=dataObject._value}else{for(let index in dataObject.__childNodes){let field=dataObject.__childNodes[index],val=field._transmit_value;if(val!==void 0){body[field._name]=val}}}}data=JSON.stringify(body)}// create Request object with headers and body
let headers=new Headers(this._ApiEnvironment.headers);headers.append("Content-Type","application/"+link.type+"+json");if("put"!==link.method.toLowerCase()){headers.append("Content-Type","application/json")}return new Request(link.href,{method:link.method,headers:headers,body:data})}/**
     * Creates an array with the path information of the object attributes (deep dive)
     * [{"paths:" "attr1"}, {"paths:" "attr2.sub_attr"}]
     * @param obj
     * @returns {Array}
     * @private
     */_getFieldMask(obj){let keys=Object.keys(obj);return keys.reduce(function(result,key){if("[object Object]"===Object.prototype.toString.call(key)){result={paths:result.concat(getkeys(obj[key],key))}}else{result.push({paths:key})}return result},[])}/**
     *
     * @param rel
     * @param serviceName
     * @returns {undefined|object}
     * @private
     */_checkServiceAndHateoasLinkError(rel,serviceName){// check Service Get
if(!this._service.services[serviceName]){console.warn("Service "+serviceName+" is not specified",this._service,this);return void 0}//queue if no hts is set, queue it
if(!this._hts){this._singleElementQueue=[[rel,serviceName]];return void 0}// check rel and type
let htsFound=this._hts.find(link=>{if(link.rel===rel&&link.service===this._service.name){return link}});if(!htsFound){console.warn("No HATEOAS for rel "+rel+" in service "+this._service.name+" found.",this._hts,this);return void 0}return htsFound}/**
     * @event load-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event load-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * loads the entity if hts is available
             */load(){let hts=this._checkServiceAndHateoasLinkError("self","Get");if(!hts){let customEvent=new Event("missing-hts-self",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return!1}this._attachListeners("load");this._FBPTriggerWire("--triggerLoad",this._makeRequest(hts))}/**
     * @event delete-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event delete-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * delete the entity if hts is available
             */delete(){let hts=this._checkServiceAndHateoasLinkError("delete","Delete");if(!hts){let customEvent=new Event("missing-hts-delete",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return}this._attachListeners("delete");this._FBPTriggerWire("--triggerLoad",this._makeRequest(hts))}/**
     * @event save-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event save-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * loads the entity if hts is available
             */save(){// if no rel self is present but a rel create exists, take create
// rel self is consciously chosen
let hts_self=this._hts.find(link=>{if("self"===link.rel)return link}),hts_create=this._hts.find(link=>{if("create"===link.rel)return link});if(!hts_self&&hts_create){this.create();return}let hts=this._checkServiceAndHateoasLinkError("update","Update");if(!hts){let customEvent=new Event("missing-hts-update",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return}this._attachListeners("save");this._FBPTriggerWire("--triggerLoad",this._makeRequest(hts,this._requestDataObject))}/**
     * @event put-success
     * Fired when update was successful
     * detail payload: response
     */ /**
         * @event put-failed
         * Fired when update was not successful
         * detail payload: response
         */ /**
             * saves the entity with method put if hts is available
             */put(){let hts=this._checkServiceAndHateoasLinkError("update","Update");if(!hts){let customEvent=new Event("missing-hts-update",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return}this._attachListeners("put");this._FBPTriggerWire("--triggerLoad",this._makeRequest(hts,this._requestDataObject))}/**
     * @event create-success
     * Fired when creating was successful
     * detail payload: response
     */ /**
         * @event create-failed
         * Fired when creating was not successful
         * detail payload: response
         */ /**
             * creating the entity if hts rel="create" is available
             */create(){let hts=this._checkServiceAndHateoasLinkError("create","Create");if(!hts){let customEvent=new Event("missing-hts-create",{composed:!0,bubbles:!1});this.dispatchEvent(customEvent);return}this._attachListeners("create");this._FBPTriggerWire("--triggerLoad",this._makeRequest(hts,this._requestDataObject))}/**
     * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
     * @param eventPrefix
     * @private
     */_attachListeners(eventPrefix){let success=e=>{// we do not want req-success and req-failed outside of this component
e.stopPropagation();let customEvent=new Event(eventPrefix+"-success",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent);// remove listeners
this.removeEventListener("req-success",success,!0);this.removeEventListener("req-failed",failed,!0)},failed=e=>{// append error to the _requestDataObject (set the fields invalid)
let err=e.detail;if(err.error&&err.details){err.details.forEach(errorSet=>{if(errorSet.field_violations){errorSet.field_violations.map(error=>{let path=error.field.split(".");if(0<path.length){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".");if(this._requestDataObject[path[0]]){this._requestDataObject[path[0]]._setInvalid(error)}else{console.warn("Unknown field",path)}}})}})}// we do not want req-success and req-failed outside of this component
e.stopPropagation();let customEvent=new Event(eventPrefix+"-failed",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent);// remove listeners
this.removeEventListener("req-success",success,!0);this.removeEventListener("req-failed",failed,!0)};/**
        * do not add the listener directly to response, otherwise it kicks in before hts is updated
        * This extra "loop" is to guarante the order of handling the events
        */this.addEventListener("req-success",success,!0);this.addEventListener("req-failed",failed,!0)}_updateInternalHTS(hts){// convert link object to hts array
if(hts&&hts.rel&&hts.method&&hts.type&&hts.href){hts=[hts]}if(hts&&Array.isArray(hts)){this._hts=[];hts.forEach(link=>{this._hts.push(link)});/**
           * @event hts-updated
           * Fired when hateoas is updated from response
           * detail payload: {Array|HATEOAS}
           */let customEvent=new Event("hts-updated",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);return!0}return!1}htsIn(hts){if(this._updateInternalHTS(hts)){/**
       * @event hts-injected
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */let customEvent=new Event("hts-injected",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);if(this.loadOnHtsIn){this.load()}// there was a list,last,next call before the hts was set
if(0<this._singleElementQueue.length){this._singleElementQueue.pop();this.load()}}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.css`
        :host {
            display: none;
        }
    `}/**
     * @private
     * @return {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-api-fetch
              ƒ-invoke-request="--triggerLoad"
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed,^^req-success"
              @-response-error="^^req-failed"
              @-parse-error="^^req-failed">
      </furo-api-fetch>
    `}}window.customElements.define("furo-entity-agent",FuroEntityAgent);class FuroEntityField extends _furoShell.LitElement{/**
   * Set the value of the field.
   * @param v
   */setValue(v){this.value=v}set value(v){this._value=v;this.field._value=v}get value(){return this._value}/**
     * Bind a entity field to the date-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this.field.addEventListener("field-value-changed",e=>{/**
       * @event value-changed
       * Fired when
       * detail payload:
       */let customEvent=new Event("value-changed",{composed:!0,bubbles:!0});customEvent.detail=e.detail.value;this.dispatchEvent(customEvent)})}}customElements.define("furo-entity-field",FuroEntityField);class FuroEntityValidator extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.checks={};this._initChecks()}_initChecks(){this.checks.string={min:field=>{let constraint=field._constraints.min;if(field._value&&field._value.length<constraint.is){if(constraint.message){return{description:constraint.message,constraint:"min"}}return{description:"Mindestens "+constraint.is+" Zeichen",constraint:"min"}}return null},max:field=>{let constraint=field._constraints.max;if(field._value&&field._value.length>constraint.is){if(constraint.message){return{description:constraint.message,constraint:"max"}}return{description:"Maximal "+constraint.is+" Zeichen",constraint:"max"}}return null},mandatory:field=>{let constraint=field._constraints.required;if(field._value&&0===field._value.length){return{description:"Eingabe erforderlich",constraint:"mandatory"}}return null}};this.checks.int={min:field=>{let constraint=field._constraints.min;if(field._value&&field._value<constraint.is){return{description:"Mindestens "+constraint.is+" Zeichen",constraint:"min"}}return null},max:field=>{let constraint=field._constraints.max;if(field._value&&field._value>constraint.is){if(constraint.message){return{description:constraint.message,constraint:"max"}}return{description:"Maximal "+constraint.is+" Zeichen",constraint:"max"}}return null}};this.checks.float={min:field=>{let constraint=field._constraints.min;if(field._value&&field._value<constraint.is){return{description:"Mindestens "+constraint.is+" Zeichen",constraint:"min"}}return null},max:field=>{let constraint=field._constraints.max;if(field._value&&field._value>constraint.is){if(constraint.message){return{description:constraint.message,constraint:"max"}}return{description:"Maximal "+constraint.is+" Zeichen",constraint:"max"}}return null}}}bindData(fields){let self=this;// this.validator ist hier wegen dem hoisting...
this.validator=e=>{let field=e.target,type=field._spec.type;// nur prüfen wenn field constraints  und checker existieren
if(field._constraints&&this.checks[type]){let err;for(let constraint in field._constraints){if(this.checks[type][constraint]){err=this.checks[type][constraint](field)}if(err){field._setInvalid(err);// bei erstem fehler aufhören
return}else{// nur zurücksetzen wenn das field ungültig war
if(!field._isValid){field._clearInvalidity()}}}}};fields.addEventListener("field-value-changed",this.validator);this._FBPTriggerWire("--dataInjected",fields);/** TODO: eventqueue wie in FBP aufbauen??
                                                     setTimeout(()=>{
                                                      //check all field on init
                                                      fields.__childNodes.map(e=>{
                                                        let field = {target:e};
                                                        this.validator(field)
                                                      });
                                                    },16);
                                                     */}}window.customElements.define("furo-entity-validator",FuroEntityValidator);class FuroFilterContainer extends(0,_furoShell.FBP)(HTMLElement){constructor(){super();this.style.display="none";this.type=this.getAttribute("type");// find .querySelectorAll("simple-filter-field")
let filterFields=this.querySelectorAll("simple-filter-field");if(null!=filterFields){filterFields.forEach(f=>{// set types to children
f.type=this.type})}// register changes
this.addEventListener("furo-filter-field-changed",e=>{// baum für filter aufbauen
let filter=[];this._scanfilterFields(this,filter);if(0<filter.length){// debounce filters for 16ms
clearTimeout(this._debounce);this._debounce=setTimeout(()=>{/**
           * @event filter-changed
           * Fired when filter changed
           * detail payload: filter
           */let customEvent=new Event("filter-changed",{composed:!0,bubbles:!0});customEvent.detail=filter;console.log(JSON.stringify(filter));this.dispatchEvent(customEvent)},16)}else{/**
         * @event filter-cleared
         * Fired when filter is empty
         * detail payload: none
         */let customEvent=new Event("filter-cleared",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent)}},!0)}_appendAnd(node,filterArray){let andFilter=filterArray;for(let index=0,el;index<node.children.length;index++){el=node.children[index];if("FURO-FILTER-FIELD"===el.tagName){if(el._value){let f=[el._field,el._is,el._value];if(index+1<node.children.length){f.push([])}andFilter.push(f);andFilter=f[3]}}else{if("FURO-FILTER-AND"===el.tagName){// append to index3
this._appendAnd(el,andFilter)}if("FURO-FILTER-OR"===el.tagName){this._appendOr(el,andFilter)}}}}_appendOr(node,filterArray){for(let index=0,el;index<node.children.length;index++){el=node.children[index];if("FURO-FILTER-FIELD"===el.tagName){if(el._value){let f=[el._field,el._is,el._value];// oder reinpushen
filterArray.push(f)}}else{let sub=[];filterArray.push(sub);if("FURO-FILTER-AND"===el.tagName){// append to index3
this._appendAnd(el,sub)}if("FURO-FILTER-OR"===el.tagName){this._appendOr(el,sub)}}}}_scanfilterFields(node,filterArray){for(let index in node.children){let el=node.children[index];if("FURO-FILTER-AND"===el.tagName){// append to index3
this._appendAnd(el,filterArray)}if("FURO-FILTER-OR"===el.tagName){this._appendOr(el,filterArray)}}}}window.customElements.define("furo-filter-container",FuroFilterContainer);class FuroFilterField extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       *  Defines the operator.
       */is:{type:String},/**
       *  Defines the field you want to filter
       */field:{type:String},/**
       *  Defines the value to filter
       */value:{type:String}}}set is(val){this._is=val;this._notifyChanges()}set field(val){this._field=val;this._notifyChanges()}set value(val){this._value=val;this._notifyChanges()}/**
     * Set the value
     * @param v
     */setValue(v){this.value=v}_notifyChanges(){if(this._field&&this._value!==void 0&&this._is){/**
       * @event furo-filter-changed
       * Fired when something changed
       * detail payload:
       */let customEvent=new Event("furo-filter-field-changed",{composed:!0,bubbles:!0});customEvent.detail=this;this.dispatchEvent(customEvent)}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.css`
        :host {
            display: none;
        }
    `}}window.customElements.define("furo-filter-field",FuroFilterField);class FuroRelExists extends _furoShell.LitElement{constructor(){super()}/**
     * Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.
     *
     * inject returns true for existing links and false for non existing links.
     *
     * @param linkArray
     * @return {boolean}
     */inject(linkArray){let links=linkArray.filter(link=>{if(this.type){return link.rel===this.rel&&link.type===this.type}return link.rel===this.rel});if(0<links.length){/**
       * @event furo-rel-exists
       * Fired when rel exists in linkArray
       * detail payload: {Object} Hateoas Link
       */let customEvent=new Event("furo-rel-exists",{composed:!0,bubbles:!0});customEvent.detail=links[0];this.dispatchEvent(customEvent);return!0}/**
       * @event rel-dont-exist
       * Fired when rel does not exists in linkArray
       * detail payload: void
       */let customEvent=new Event("rel-dont-exist",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent);return!1}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Name of the rel
       */rel:{type:String},/**
       * define the type if you want a specific check on the type also
       */type:{type:String}}}attributeChangedCallback(name,old,value){switch(name){case"rel":this.rel=value;break;case"type":this.type=value;break;}}}window.customElements.define("furo-rel-exists",FuroRelExists);class FuroReverseDeepLink extends _furoShell.LitElement{constructor(){super();this.service="";this._services=_furoShell.Env.api.services}/**
     * converts the href of a LinkObject
     *
     * @param {object|linkObject} {object|rawEntity} {object|rawCollection} data
     * @return {object|QueryParams} Object with query params key value
     */convert(data){let qp={};if(this._services[this.service]===void 0){console.warn(this.service," service is not defined",this);return}this._serviceDef=this._services[this.service].services;let linkObject=data;// Entity or Collection
if(Array.isArray(data.links)){if(data&&Array.isArray(data.data)){// is collection
// default rel if not set
if(!this.rel){this.rel="list"}}else{// is entity
if(!this.rel){this.rel="self"}}linkObject=data.links.filter(e=>{return e.rel.toLowerCase()===this.rel.toLowerCase()})[0]}// Links Array
if(Array.isArray(data)){linkObject=data.filter(e=>{return e.rel===this.rel})[0]}if(linkObject){qp=this._convert(linkObject)}/**
       * @event converted
       * Fired when input was converted
       * detail payload: {object|QueryParams}
       */let customEvent=new Event("converted",{composed:!0,bubbles:!0});customEvent.detail=qp;this.dispatchEvent(customEvent);return qp}_convert(link){let linkObject={rel:link.rel,href:link.href,method:link.method,type:link.type};if("self"===linkObject.rel){linkObject.rel="Get"}linkObject.rel=linkObject.rel.charAt(0).toUpperCase()+linkObject.rel.slice(1);let pattern="";if(this._serviceDef[linkObject.rel]){pattern=this._serviceDef[linkObject.rel].deeplink.href}let rgx=/{([^}]*)}/gi,keys=[],m;while(null!==(m=rgx.exec(pattern))){keys.push(m[1])}pattern=pattern.replace(rgx,"(.*)");let srgx=new RegExp(pattern+"$"),qp={},matches=srgx.exec(linkObject.href);if(matches){keys.forEach((e,i)=>{qp[e]=matches[i+1]})}return qp}static get properties(){return{/**
       * Name of service
       */service:{type:String},/**
       * Optional rel to convert.
       *
       * Not needed if you inject a link object.
       *
       * If you insert an entity rel self is taken. If you insert a collection, rel list is used.
       */rel:{type:String}}}}window.customElements.define("furo-reverse-deep-link",FuroReverseDeepLink);class FuroDataObjectForm extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}bindFields(EntityFields){this._FBPTriggerWire("--dataObjectFields",EntityFields)}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
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
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
      Some fields are readonly:
      <furo-form-layouter>
        <furo-data-text-input ƒ-bind-data="--dataObject(*.fields.display_name)"></furo-data-text-input>
        <furo-data-date-input ƒ-bind-data="--dataObject(*.fields.start)"></furo-data-date-input>
        <furo-data-date-input ƒ-bind-data="--dataObject(*.fields.end)"></furo-data-date-input>
      </furo-form-layouter>
        Thank you
    `}}window.customElements.define("furo-data-object-form",FuroDataObjectForm);class DemoFuroDataObject extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo demo-furo-data-object</h2>
          <p>A furo-data-object receives its data regulary from a furo-entity-agent or a collection-ageen. Make sure that you bind 
            the correct properties to the receiver. In this example <i>furo-data-object-form</i> is excepting fields.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card style="width: 300px; margin: 30px" header-text="Some data" secondary-text="Save is not implemented">
              <furo-data-object-form ƒ-bind-fields="--dataObject(*.fields)"></furo-data-object-form>
              <furo-horizontal-flex slot="action">
                <!-- The button will trigger the wire --saveClicked, which triggers ƒ-save on the furo-entity-agent as soon it is clicked -->
                <furo-button primary  @-click="--saveClicked" label="save data"></furo-button>
              </furo-horizontal-flex>
            </furo-card>
           
           <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  --> 
            <furo-entity-agent service="ProjectService" ƒ-save="--saveClicked" ƒ-bind-request-data="--dataObject" @-response="--response" ></furo-entity-agent>
            <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <furo-data-object type="project.Project" ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-object",DemoFuroDataObject);class FuroFetchJson extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @private
   * @return {Object}
   */static get properties(){return{/**
       * the url you want to fetch
       */src:{type:String}}}/**
     * fetch and parse the data from specified `src`.
     *
     * Use fetch-src if you want to pass the source url
     *
     * @return {Promise<any>}
     */fetch(){if(this.src){return fetch(this.src).then(res=>res.json()).then(data=>{/**
         * @event data
         * Fired when data received and json parsed
         * detail payload: {Object} json data
         */let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=data;this.dispatchEvent(customEvent)})}}/**
     * fetch json data from source
     * @param String source
     *
     * @return {Promise<any>}
     */fetchSrc(source){this.src=source;return this.fetch()}}window.customElements.define("furo-fetch-json",FuroFetchJson);class FuroGetClipboard extends(0,_furoShell.FBP)(_furoShell.LitElement){trigger(){navigator.clipboard.readText().then(clipText=>{/**
       * @event content
       * Fired when clipboard content is received
       * detail payload: {*} content of the clipboard
       */let customEvent=new Event("content",{composed:!0,bubbles:!0});if(this.json){customEvent.detail=JSON.parse(clipText)}else{customEvent.detail=clipText}this.dispatchEvent(customEvent)})}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Convert clipboard content to json
       */json:{type:Boolean}}}}window.customElements.define("furo-get-clipboard",FuroGetClipboard);/**
                                                                       *
                                                                       * `furo-head-tail`
                                                                       *  Splits an iterable (i.e. Array) in its head and tail part.
                                                                       *
                                                                       *```
                                                                       *  <furo-head-tail ƒ-split="--arrayData" @-head="--firstElement" @-tail="--restOfArray"></furo-head-tail>
                                                                       *```
                                                                       *
                                                                       * @summary split an array
                                                                       * @customElement
                                                                       */class FuroHeadTail extends HTMLElement{/**
   * Splits an iterable to its head (first item) and its tail (the rest) parts.
   *
   * ```
   * ["a", "b", "c", "d"]
   *  |_|  |___________|
   *   ^      ^
   *   |      |
   *   |     TAIL   => ["b", "c", "d"]
   *  HEAD          => "a"
   * ```
   *
   * @param iterable
   */split(iterable){if(!Array.isArray(iterable)){console.warn("input is not iterable",iterable);return}const[head,...tail]=iterable;/**
                                      * @event head
                                      * Fired when Array was splitted
                                      * detail payload: {Any} first element of array
                                      */let headEvent=new Event("head",{composed:!0,bubbles:!0});headEvent.detail=head;this.dispatchEvent(headEvent);/**
                                   * @event tail
                                   * Fired when Array was splitted
                                   * detail payload: {Array || Any} the tail from the injected array (e1 - 1n)
                                   */let tailEvent=new Event("tail",{composed:!0,bubbles:!0});tailEvent.detail=tail;this.dispatchEvent(tailEvent)}}window.customElements.define("furo-head-tail",FuroHeadTail);class FuroKeyFilter extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Check the event and dispatch matched when the conditions are fulfilled.
     *
     * @param keyboardEvent
     */filter(keyboardEvent){let key=keyboardEvent.key||keyboardEvent.keyCode;// check shift, alt, command,...
if(this.shift&&!keyboardEvent.shiftKey){return}if(this.alt&&!keyboardEvent.altKey){return}if((this.meta||this.command)&&!keyboardEvent.metaKey){return}if(this.control&&!keyboardEvent.controlKey){return}if(-1!==this.keys.split(/\W+/).indexOf(key)){/**
      * @event matched
      * Fired when key matches the options
      * detail payload: keyboardEvent
      */let customEvent=new Event("matched",{composed:!0,bubbles:!0});customEvent.detail=keyboardEvent;this.dispatchEvent(customEvent)}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Coma separated list with allowed keys to pass. i.e "Enter, ArrowUp"
       */keys:{type:String},/**
       * Modifier key **shift** must be pressed too to match
       */shift:{type:Boolean},/**
       * Modifier key **alt** must be pressed too to match
       */alt:{type:Boolean},/**
       * Alias for meta.
       *
       * Modifier key **meta** must be pressed too to match.
       */command:{type:Boolean},/**
       * Modifier key **meta** must be pressed too to match
       */meta:{type:Boolean},/**
       * Modifier key **control** must be pressed too to match
       */control:{type:Boolean// stopPropagation, disableDefault??
}}}}window.customElements.define("furo-key-filter",FuroKeyFilter);class FuroKeydown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @private
   * @return {Object}
   */static get properties(){return{/**
       * Key to listen on. Like Enter, Backspace, ArrowLeft, A,B,C, a,b,c
       */key:{type:String},/**
       * Set this attribute to listen to the keydown event global (window).
       */global:{type:Boolean},alt:{type:Boolean},ctrl:{type:Boolean},meta:{type:Boolean}}}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();let target;if(this.global){target=window}else{target=this.parentNode}target.addEventListener("keydown",keyevent=>{if(keyevent.key===this.key){/**
        * @event key
        * Fired when key was catched on target
        * detail payload: keyevent
        */let customEvent=new Event("key",{composed:!0,bubbles:!0});customEvent.detail=keyevent;this.dispatchEvent(customEvent)}})}}window.customElements.define("furo-keydown",FuroKeydown);class FuroPrettyJson extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}static get properties(){return{}}static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
                margin: var(--spacing);
                line-height: 1.5;
            }

            pre {
                background-color: var(--background);
                padding: 0;
            }

            .string {
                color: #080
            }

            .number {
                color: darkorange;
            }

            .boolean {
                color: blue;
            }

            .null {
                color: magenta;
            }

            .key {
                color: #606
            }

        `}/**
     * Inject JSON data
     * @param json
     */injectData(json){if(json){this.markedText=JSON.stringify(json,null,2);this.markedText=this._syntaxHighlight(this.markedText);this.shadowRoot.querySelector("#content").innerHTML=this.markedText}else{// clear innerHTML content
this.shadowRoot.querySelector("#content").innerHTML=""}}_syntaxHighlight(json){if("string"!=typeof json){json=JSON.stringify(json,void 0,2)}json=json.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(match){var cls="number";if(/^"/.test(match)){if(/:$/.test(match)){cls="key"}else{cls="string"}}else if(/true|false/.test(match)){cls="boolean"}else if(/null/.test(match)){cls="null"}return"<span class=\""+cls+"\">"+match+"</span>"})}render(){// language=HTML
return _furoShell.html`
            <pre id="content"></pre>
        `}}window.customElements.define("furo-pretty-json",FuroPrettyJson);class FuroPutClipboard extends _furoShell.LitElement{constructor(){super()}setData(data){this.data=data}trigger(data){if(this.data){data=this.data}let d;if(this.json){d=JSON.stringify(data,"",2)}else{d=data}navigator.clipboard.writeText(d).then(()=>{/**
       * @event content
       * Fired when clipboard content is received
       * detail payload: {*} content of the clipboard
       */let customEvent=new Event("content-putted",{composed:!0,bubbles:!0});customEvent.detail=d;this.dispatchEvent(customEvent)})}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Stringify JSON content
       */json:{type:Boolean}}}}window.customElements.define("furo-put-clipboard",FuroPutClipboard);class CheckMetaAndOverrides{static UpdateMetaAndConstraints(element){if(element.field){// options are available for text inputs at the moment
// check if metas ara available
if(element.field._meta){if(element.field._meta.readonly){element._readonly=element.field._meta.readonly}if(element.field._meta.label){element._label=element.field._meta.label}if(element.field._meta.hint){element._hint=element.field._meta.hint}if(element.field._meta.cols){element._cols=element.field._meta.cols}if(element.field._meta.rows){element._rows=element.field._meta.rows}if(element.field._meta.min_term_length){element._minTermLength=element.field._meta.min_term_length}if(element.field._meta.label_amount){element._labelAmount=element.field._meta.label_amount}if(element.field._meta.label_currency){element._labelCurrency=element.field._meta.label_currency}if(element.field._meta.options){element._options=element.field._meta.options}}// check if constraints ara available
if(element.field._constraints){if(element.field._constraints.max){element._max=element.field._constraints.max.is;element._maxErrorMessage=element.field._constraints.max.message}if(element.field._constraints.min){element._min=element.field._constraints.min.is;element._minErrorMessage=element.field._constraints.min.message}if(element.field._constraints.step){element._step=element.field._constraints.step.is;element._stepErrorMessage=element.field._constraints.step.message}if(element.field._constraints.pattern){element._pattern=element.field._constraints.pattern.is;element._patternErrorMessage=element.field._constraints.pattern.message}if(element.field._constraints.required){element._required="true"==element.field._constraints.required.is||!0===element.field._constraints.required.is}}}this.CheckAttributeOverrides(element)}static CheckAttributeOverrides(element){/**
     * Attribute overrides
     * hint, min, max, readonly or disabled on the element are higher ranked then field metas from spec or server
     */if(element.min){element._min=element.min}if(element.max){element._max=element.max}if(element.readonly){element._readonly=element.readonly}if(element.label){element._label=element.label}if(element.hint){element._hint=element.hint}if(element.step){element._step=element.step}if(element.pattern){element._pattern=element.pattern}if(element.required){element._required=element.required}if(element.cols){element._cols=element.cols}if(element.rows){element._rows=element.rows}if(element.minTermLength){element._minTermLength=element.minTermLength}if(element.labelAmount){element._labelAmount=element.labelAmount}if(element.labelCurrency){element._labelCurrency=element.labelCurrency}if(element.options){element._options=element.options}}}_exports.CheckMetaAndOverrides=CheckMetaAndOverrides;var CheckMetaAndOverrides$1={CheckMetaAndOverrides:CheckMetaAndOverrides};_exports.$CheckMetaAndOverrides=CheckMetaAndOverrides$1;class FuroDataBoolIcon extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",()=>{this.toggle()});this.symboltrue="\u25BC";this.symbolfalse="\u25B6";this.field={};this._updateSymbol()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}toggle(){this.field._value=!this.field._value}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean},symboltrue:{type:String},symbolfalse:{type:String}}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 16px;
        }

        :host([hidden]) {
            display: none;
        }
    `}bindData(d){if(d===void 0){return}if("bool"!==d._spec.type){console.warn("wrong type binded",this);return}this.field=d;// render on changed data
this.field.addEventListener("field-value-changed",e=>{this._updateSymbol()});this._updateSymbol()}_updateSymbol(){this._ocSymbol=this.field._value?this.symboltrue:this.symbolfalse;this.requestUpdate()}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      ${this._ocSymbol}
    `}}window.customElements.define("furo-data-bool-icon",FuroDataBoolIcon);class Helper$2{/**
   * update Attribute on input element actively, so we dont have things like pattern="undefined" on the native element.
   * @param attribute
   * @param value
   * @private
   */static UpdateInputAttribute(caller,attribute,value){caller.updateComplete.then(d=>{if(!caller._theInputElement){caller._theInputElement=caller.shadowRoot.getElementById("input")}if(null!==value){caller._theInputElement.setAttribute(attribute,value)}else{// remove the attribute on null value
caller._theInputElement.removeAttribute(attribute)}})}/**
     * Bind a entity field to the input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|caller} furo input element
     * @param {Object|FieldNode} fieldNode a Field object
     */static BindData(caller,fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(caller);return}caller.field=fieldNode;CheckMetaAndOverrides.UpdateMetaAndConstraints(caller);caller._updateField();caller.field.addEventListener("field-value-changed",e=>{caller._updateField();if(caller.field._meta&&caller.field._meta.hint){caller._hint=caller.field._meta.hint}if(caller.hint){caller._hint=caller.hint}});// update meta and constraints when they change
caller.field.addEventListener("this-metas-changed",e=>{CheckMetaAndOverrides.UpdateMetaAndConstraints(caller)});caller.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
caller.error=!0;caller.errortext=caller.field._validity.description;caller.requestUpdate()});caller.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
caller.error=!1;caller.requestUpdate()})}}_exports.Helper=Helper$2;var helper={Helper:Helper$2};_exports.$helper=helper;class FuroDataCollectionDropdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from the component inside.
   *
   * detail payload: {*} the value from the value-field. By default the value field is "id"
   *
   *  **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.displayField="display_name";this.valueField="id";this._fieldNodeToUpdate={};this._fieldDisplayNodeToUpdate={};this._FBPAddWireHook("--valueChanged",val=>{if(this.field){// by valid input reset meta and constraints
this._fieldNodeToUpdate._value=val;if(this.subfield){this._fieldDisplayNodeToUpdate._value=this._findDisplayNameByValue(val)}}this._notifiySelectedItem(val)})}_findDisplayNameByValue(val){let displayName="";for(let i=0;i<this._dropdownList.length;i++){if(this._dropdownList[i].id==val){displayName=this._dropdownList[i].label;break}}return displayName}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}_notifiySelectedItem(val){/**
     * @event item-selected
     * Fired when a item from the dropdown was selected
     *
     * detail payload: the original item object
     */let customEvent=new Event("item-selected",{composed:!0,bubbles:!0}),selectedItem;// find item from list
for(let i=this._dropdownList.length-1;0<=i;i--){if(this._dropdownList[i][this.valueField]==val){selectedItem=this._dropdownList[i]._original;break}}customEvent.detail=selectedItem;this.dispatchEvent(customEvent)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Updater for the list attr
     * @param value
     */set list(value){// map
let arr=value.split(",").map(e=>{let item=e.trim();return{id:item,label:e,selected:this._fieldNodeToUpdate._value==item,_original:item}});this._notifyAndTriggerUpdate(arr)}/**
     *
     * @param arr
     * @private
     */_notifyAndTriggerUpdate(arr){if(0<arr.length){this._dropdownList=arr;if(!this._fieldNodeToUpdate||!this._fieldNodeToUpdate._value){// notifiy first item if field is not set
let selectedItem=null;for(let i=0;i<arr.length;i++){if(arr[i].selected){selectedItem=arr[i].id;break}}selectedItem=selectedItem?selectedItem:arr[0].id;this._notifiySelectedItem(selectedItem);if(this._fieldNodeToUpdate){this._fieldNodeToUpdate._value=selectedItem}}else{this._notifiySelectedItem(this._fieldNodeToUpdate._value)}this._FBPTriggerWire("--selection",arr)}}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */subfield:{type:String},/**
       * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */subfieldDisplay:{type:String,attribute:"subfield-display"},/**
       * The name of the field from the injected collection that contains the label for the dropdown array.
       */displayField:{type:String,attribute:"display-field"},/**
       * The name of the field from the injected collection that contains the value you want to assign to the attribute value and the bounded field.
       */valueField:{type:String,attribute:"value-field"},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"] by furo-select-input
       */list:{type:String},/**
       * the dropdown list
       */_dropdownList:{type:Array}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the furo input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode);// by complex type set `id` as `subfield` as default
if(this._checkIsComplexType(fieldNode)&&!this.subfield){this.subfield="id"}if(this.subfield){this._fieldNodeToUpdate=this.field[this.subfield];if(this.subfieldDisplay){this._fieldDisplayNodeToUpdate=this.field[this.subfieldDisplay]}else if(this.field.display_name){this._fieldDisplayNodeToUpdate=this.field.display_name}}else{this._fieldNodeToUpdate=this.field}// inject options from meta which is defined in spec
if(this.field._meta&&this.field._meta.options){this._buildListWithMetaOptions(this.field._meta.options)}// update meta and constraints when they change
this.field.addEventListener("this-metas-changed",e=>{this._buildListWithMetaOptions(this.field._meta.options)})}/**
     *
     * @param fieldNode
     * @returns {boolean}
     * @private
     */_checkIsComplexType(fieldNode){let isComplex=!1;if(0<fieldNode.__childNodes.length){isComplex=!0}return isComplex}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this._fieldNodeToUpdate._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-select-input {
            width: 100%;
        }
    `}/**
     * Build the dropdown list with given options from meta
     * @param {options} list of options with id and display_name
     */_buildListWithMetaOptions(options){let arr=this._mapDataToList(options.list);this._notifyAndTriggerUpdate(arr)}_mapDataToList(list){let arr=[];// if field value not exists. select item when the item is marked as `selected` in list
if(!this._fieldNodeToUpdate||!this._fieldNodeToUpdate._value){arr=this._setItemSelectedViaSelectedMark(list)}else{// if field value exists. select the item when it's value is equal the field value.
// when field value is not equal the filed value, select the item if the item is marked as `selected`
if(Array.isArray(list)){let isSelected=!1,hasSelectedMark=!1,preSelectedValueInList=null;for(let i=0,item;i<list.length;i++){item={id:list[i][this.valueField],label:list[i][this.displayField],selected:!1,_original:list[i]};if(this._fieldNodeToUpdate._value==list[i][this.valueField]){item.selected=!0;isSelected=!0}if(list[i].selected){hasSelectedMark=!0;preSelectedValueInList=list[i][this.valueField]}arr.push(item)}if(!isSelected&&hasSelectedMark){arr=this._setItemSelectedViaSelectedMark(list);this._fieldNodeToUpdate._value=preSelectedValueInList}}}return arr}_setItemSelectedViaSelectedMark(list){let arr=[];if(Array.isArray(list)){arr=list.map(e=>{return{id:e[this.valueField],label:e[this.displayField],selected:e.selected?!0:!1,_original:e}})}return arr}/**
     * Inject the array with the selectable options.
     *
     * The array with objects should have a signature like this. This could be the response of a collection agent (`--response(*.entities)`)
     * ```json
     * [
     *  {
     *   "id": 34,
     *   "display_name":"Option A"
     *  },
     *  {
     *   "id": 223,
     *   "display_name":"Option X"
     *  },
     * ]
     * ```
     *
     *
     *
     * @param {Array} Array with entities
     */injectList(list){let arr=this._mapDataToList(list);this._notifyAndTriggerUpdate(arr)}/**
     * Inject the array with entities for the selectable options.
     *
     * @param {Array} Array with entities
     */injectEntities(entities){let arr=[];// select the item when it's value is equal the field value.
// when field value is not equal the filed value, select the item if the item is marked as `selected`
if(Array.isArray(entities)){let arrA=[],arrB=[],isSelected=!1,hasSelectedMark=!1,preSelectedValueInList=null;for(let i=0;i<entities.length;i++){let item={id:entities[i].data[this.valueField],label:entities[i].data[this.displayField],selected:!1,_original:entities[i]},itemB={};itemB=Object.assign(itemB,item);if(this._fieldNodeToUpdate._value==entities[i].data[this.valueField]){item.selected=!0;isSelected=!0}if(entities[i].data.selected){hasSelectedMark=!0;itemB.selected=!0;preSelectedValueInList=entities[i].data[this.valueField]}arrA.push(item);arrB.push(itemB)}if(!isSelected&&hasSelectedMark){arr=arrB;this._fieldNodeToUpdate._value=preSelectedValueInList}else{arr=arrA}}this._notifyAndTriggerUpdate(arr)}/**
     *
     * @return {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
       <furo-select-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-select-input>      
    `}}customElements.define("furo-data-collection-dropdown",FuroDataCollectionDropdown);class FuroDataCheckboxInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event ALL_BUBBLING_EVENTS_FROM_furo-checkbox-input
   *
   * All bubbling events from [furo-checkbox-input](../../input/doc/furo-checkbox-input) will be fired, because furo-data-checkbox-input uses furo-checkbox-input internally.
   *
   */constructor(){super();this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
       * Sets the field to readonly
       */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the furo-data-checkbox-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){this.disabled=this.field._meta.readonly?!0:!1;//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean}}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 300px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-checkbox-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html`
             <furo-checkbox-input id="input"
                ?autofocus=${this.autofocus} 
                ?disabled=${this._readonly||this.disabled} 
                ?error="${this.error}" 
                ?condensed="${this.condensed}"          
                @-value-changed="--valueChanged"
                ƒ-set-value="--value"></furo-checkbox-input>      
          `}}customElements.define("furo-data-checkbox-input",FuroDataCheckboxInput);class FuroDataColorInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-text-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the pattern attr, the prop alone with pattern="${this.pattern}" wont work,
     * becaue it set "undefined" (as a Sting!)
     *
     * @param value
     */set _pattern(value){Helper$2.UpdateInputAttribute(this,"pattern",value)}/**
     * Updater for the min => minlength attr
     * same problem like in pattern
     *
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr
     * * same problem like in pattern
     *
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     */static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Bind a entity field to the text-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            position: relative;
            font-size: 12px;
            box-sizing: border-box;
            font-family: "Roboto", "Noto", sans-serif;
            line-height: 1.5;
        }

        :host([hidden]) {
            display: none;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }


        input {
            border: none;
            background: 0 0;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: 100%;
            text-align: left;
            color: inherit;
            outline: none;
            width:30px;
            height: 19px;
         }

        .border {
            position: absolute;
            width: 100%;
            height: 1px;
            top: 28px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
         }

        label {
            position: unset;
            top: unset;
            color: unset;
            pointer-events: unset;
            display: unset;
            width: unset;
            overflow: unset;
            padding-left: 12px;
        }
        

        * {
            transition: all 150ms ease-out;
        }

        .hint {
            position: absolute;
            top: 30px;
            font-size: 10px;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
         }

        :host(:focus-within) .hint {
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }
        
        :host(:focus-within) .border {
            border-color: var(--primary, #3f51b5);
            border-width: 1px;
        }
    `}render(){// language=HTML
return _furoShell.html`
       <furo-color-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled}                 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"                         
          ?required=${this._required}                   
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-color-input>      
    `}}customElements.define("furo-data-color-input",FuroDataColorInput);class FuroDataDateInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Date} the date value
   *
   * Comes from underlying component furo-date-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{// by valid input reset meta and constraints
if(this.field){if("google.type.Date"===this.field._spec.type||this.field["@type"]&&"google.type.Date"===this.field["@type"]._value.replace(/.*\//,"")){val=this._convertStringToDateObj(val,this.field._value)}// store tmpval to check against loop
this.tmpval=val;this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.rangeUnderflow){this._hint=this._minErrorMessage}else if(val.rangeOverflow){this._hint=this._maxErrorMessage}else if(val.stepMismatch){this._hint=this._stepErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Updater for the step attr
     * @param value
     */set _step(value){Helper$2.UpdateInputAttribute(this,"step",value)}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Date},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Date},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the date-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode);this.field.addEventListener("branch-value-changed",e=>{this._updateFieldBranch()});//init
this._updateFieldBranch()}_updateField(){}_updateFieldBranch(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}let dateValue=this.field._value;if(this.tmpval||JSON.stringify(this.field._value)!==JSON.stringify(this.tmpval)){// convert value when date type is google.type.Date
if("google.type.Date"===this.field._spec.type||this.field["@type"]&&"google.type.Date"===this.field["@type"]._value.replace(/.*\//,"")){dateValue=this._convertDateObjToString(dateValue)}this._FBPTriggerWire("--value",dateValue);this.requestUpdate()}}// convert google date object to ISO 8601
_convertDateObjToString(obj){let date="";if(obj&&obj.day&&obj.month&&obj.year){let month=obj.month+"",day=obj.day+"",year=obj.year+"";if(2>month.length){month="0"+month}if(2>day.length){day="0"+day}if(4>year.length){for(var l=4-year.length,i=0;i<l;i++){year="0"+year}}date=year+"-"+month+"-"+day}return date}// convert date string ISO 8601 to object for google.type.Dates
_convertStringToDateObj(str,obj){let arr=str.split("-",3);// only override properties: day, month, year
if(3===arr.length){obj.day=+arr[2];obj.month=+arr[1];obj.year=+arr[0]}return obj}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-date-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-date-input id="input"  
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"     
          ?required=${this._required}     
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-date-input>      
    `}}customElements.define("furo-data-date-input",FuroDataDateInput);class FuroDataDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this.field={}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}_updateField(){this.text=this.field._value;if(this.displayfield&&this.field[this.displayfield]){this.text=this.field[this.displayfield]}else{if(this.field.display_name){this.text=this.field.display_name}}if(this.text&&this.text.toString()==void 0){this.text=""}this.requestUpdate()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * If your field type does not have a display_name, use this attribute to set the field that should be used
       * instead of display_name.
       */displayfield:{type:String},/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Bind a entity field to the text-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            margin: 10px 0 15px 0;
            height: 56px;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        .wrapper {
            position: relative;
            padding: 0 12px;
            box-sizing: border-box;
            height: 56px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .iwrap {
            position: relative;
        }

        .text {
            position: absolute;
            top: 16px;
            border: none;
            background: none;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            width: 100%;
            line-height: 24px;
            color: inherit;
            outline: none;
            font-family: "Roboto", "Noto", sans-serif;
            font-kerning: auto;
            font-size: 16px;
            font-stretch: 100%;
            font-style: normal;
        }


        furo-icon {
            display: none;
            top: 16px;
        }

        furo-icon.lead {
            position: absolute;

            left: 8px;
        }

        furo-icon.trail {
            position: absolute;
            right: 8px;
        }

        :host([leading-icon]:not([leading-icon="undefined"])) furo-icon.lead, :host([trailing-icon]:not([trailing-icon="undefined"])) furo-icon.trail {
            display: block;
        }

        :host([leading-icon]:not([leading-icon="undefined"])) .wrapper {
            padding-left: 36px;
        }

        :host([trailing-icon]:not([trailing-icon="undefined"])) .wrapper {
            padding-right: 36px;
        }


        .borderlabel {
            pointer-events: none;
            position: absolute;
            box-sizing: border-box;
            top: 0;
            right: 0;
            left: 0;
            height: 56px;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
        }

        .left-border {
            width: 8px;
            box-sizing: border-box;
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-right: none;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        .right-border {
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-left: none;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
        }


        label {
            color: var(--display-label-color, var(--disabled, #8c8c8c));
            font-size: 12px;
            padding: 0 4px;
            font-weight: 400;
            position: relative;
            border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        label span {
            font-size: 12px;
            top: -10px;
            position: relative;
        }

        /** Condensed **/


        :host([condensed]) .text {
            top: 12px;
            font-size: 14px;
        }

        :host([condensed]:not([filled])) label, :host([filled][condensed]) label {
            line-height: 40px;
            font-size: 14px;
        }

        :host([condensed][filled]) .text {
            top: 12px;
        }

        :host([condensed]) .borderlabel, :host([condensed]) .wrapper {
            height: 40px;
        }

        :host([condensed]) furo-icon {
            top: 10px;
        }


        :host([condensed]) label span {
            top: -20px;
        }

        :host([condensed]) {
            height: 40px;
        }

        :host([noborder]) label, :host([noborder]) .left-border, :host([noborder]) .right-border {
            border: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
       <div class="wrapper">
       <furo-icon class="lead" icon="${this.leadingIcon}"></furo-icon>    
       <div class="iwrap">
        <div class="text">  ${this.text}</div>
       </div>
       <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>
      </div>
      <div class="borderlabel">
      <div class="left-border"></div>
      <label title="${this._hint}"><span>${this._label}</span></label>
      <div class="right-border"></div>
      </div>
      
      
    `}}window.customElements.define("furo-data-display",FuroDataDisplay);class FuroDataNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Number} the number value
   *
   * Comes from underlying component furo-number-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.rangeUnderflow){this._hint=this._minErrorMessage}else if(val.rangeOverflow){this._hint=this._maxErrorMessage}else if(val.stepMismatch){this._hint=this._stepErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Updater for the step attr
     * @param value
     */set _step(value){Helper$2.UpdateInputAttribute(this,"step",value)}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-number-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-number-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ?required=${this._required}
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-number-input>      
    `}}customElements.define("furo-data-number-input",FuroDataNumberInput);class FuroDataMoneyInput extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.valid=!0;this._currencies=[];// init the currency dropdown. the value will be used if no currencies are defined in attribute or in meta
this.value={currency_code:"CHF",units:null,nanos:null}}_FBPReady(){super._FBPReady();// reset hint, label etc..
CheckMetaAndOverrides.UpdateMetaAndConstraints(this);this.shadowRoot.getElementById("wrapper").addEventListener("value-changed",e=>{e.stopPropagation();if(e.path[0]){if("FURO-SELECT-INPUT"==e.path[0].nodeName){this.field._value=this._convertDataToMoneyObj(e.detail,"",this.field._value)}if("FURO-NUMBER-INPUT"==e.path[0].nodeName){this.field._value=this._convertDataToMoneyObj("",e.detail,this.field._value)}}this._value=this.field._value;this.error=!1;/**
                           * @event value-changed
                           * Fired when value has changed from inside the component
                           * detail payload: google money object
                           */let customEvent=new Event("value-changed",{composed:!0,bubbles:!0});customEvent.detail=this.field._value;this.dispatchEvent(customEvent)});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.rangeUnderflow){this._hint=this._minErrorMessage}else if(val.rangeOverflow){this._hint=this._maxErrorMessage}else if(val.stepMismatch){this._hint=this._stepErrorMessage}this.requestUpdate()}})}// convert data to google.type.Money format
_convertDataToMoneyObj(currency,amount,obj){if(null==obj){obj={}}if(currency){obj.currency_code=currency}if(amount){let arr=amount.split(".");obj.units=+arr[0];if(arr[1]){obj.nanos=1e8*+("0."+arr[1])}else{obj.nanos=0}}return obj}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}if(this.field.units&&null!==this.field.units._value&&null!==this.field.nanos._value){let amout=+(this.field.units._value+"."+this.field.nanos._value);this._FBPTriggerWire("--valueAmount",amout)}if(this.field.currency_code&&this.field.currency_code._value){this._FBPTriggerWire("--valueCurrency",this.field.currency_code._value)}this.requestUpdate()}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Updater for the step attr
     * @param value
     */set _step(value){Helper$2.UpdateInputAttribute(this,"step",value)}/**
     * Updater for the label attr for amount
     * @param value
     */set _labelAmount(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the readonly attr
     * @param value
     */set _readonly(value){Helper$2.UpdateInputAttribute(this,"readonly",value)}/**
     * Updater for the label attr for currency
     * @param value
     */set _labelCurrency(value){let select=this.shadowRoot.getElementById("select");if(null!==value){select.setAttribute("label",value)}else{// remove the attribute on null value
select.removeAttribute("label")}}static get properties(){return{/**
       * set this to true to indicate errors
       */error:{type:Boolean,reflect:!0},/**
       * The start value. Changes will be notified with the `@-value-changed` event
       */value:{type:Object},/**
       * The list of currencies. Can be a simple list like ["A","B","C"]. In this case the value is equals the label
       *
       * With ids (key value):
       *
       * [{"id":1,"label":"AAA"},{"id":2,"label":"BBB"}]
       *
       *
       * With preselect state in data:
       *
       * [{"id":23,"label":"AAA","selected":false},{"id":44,"label":"BBB","selected":true}]
       */options:{type:Array},/**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"]
       */currencies:{type:String},labelCurrency:{type:String,attribute:"label-currency"},labelAmount:{type:String,attribute:"label-amount"},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */readonly:{type:Boolean,reflect:!0},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Text for errors
       */errortext:{type:String},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */filled:{type:Boolean}}}/**
     * Set the options programmatically
     * @param {Array} Array with options
     */setOptions(optionArray){this.options=optionArray}/**
     * Set the list programmatically
     * @param {String} list with options
     */setCurrencies(currencies){this.currencies=currencies}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0;this.requestUpdate()}/**
     * Makes the field writable.
     */enable(){this._readonly=!1;this.requestUpdate()}set _options(options){// the attribute currencies has priority than the options in meta
if(0<this._currencies.length){this.updateSelectOptions(this._currencies)}else{let collection;if(options.list){collection=options.list}else{collection=options}this.updateSelectOptions(collection)}}set currencies(c){let arr=c.split(",").map(function(item){return item.trim()});this._currencies=arr;this.updateSelectOptions(arr)}updateSelectOptions(collection){// convert array list to id, label structure
if("string"===typeof collection[0]){collection=collection.map(item=>{return{id:item,label:item}})}let arr=collection.map(e=>{let selected=!1;if(e.selected){this.value.currency_code=e.id.toString();this.field.currency_code._value=this.value.currency_code;selected=!0}else{if(this.value.currency_code===e.id.toString()){// init the currency code in field
this.field.currency_code._value=this.value.currency_code;selected=!0}}return{id:e.id,label:e.label,selected:selected}});this._FBPTriggerWire("--selection",arr)}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        /* https://material.io/design/components/text-fields.html#theming */

        furo-select-input {
            width: 90px;
            margin-left: var(--spacing-xs);
        }
        furo-number-input {
            width: calc(100% - var(--spacing-xs) - 90px);
        }
        :host {
            width: 190px;
        }
    `}/**
     *
     * @return {TemplateResult | TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html` 
      <furo-horizontal-flex id="wrapper">
          <furo-number-input id="input"
          ?autofocus=${this.autofocus} 
          step="0.01"
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ?required=${this._required}
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--valueAmount"></furo-number-input>      
          
       <furo-select-input id="select"
          ?readonly=${this._readonly||this.disabled} 
          ?float="${this.float}" 
          list="CHF"
          ?condensed="${this.condensed}"          
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--valueCurrency"></furo-select-input>    
      </furo-horizontal-flex>
    `}}customElements.define("furo-data-money-input",FuroDataMoneyInput);class FuroDataPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-password-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.patternMismatch){this._hint=this._patternErrorMessage}else if(val.tooShort){this._hint=this._minErrorMessage}else if(val.tooLong){this._hint=this._maxErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the pattern attr, the prop alone with pattern="${this.pattern}" wont work,
     * becaue it set "undefined" (as a Sting!)
     *
     * @param value
     */set _pattern(value){Helper$2.UpdateInputAttribute(this,"pattern",value)}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the pattern from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */pattern:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-password-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-password-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}" 
          ?required=${this._required}         
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-password-input>      
    `}}customElements.define("furo-data-password-input",FuroDataPasswordInput);class FuroDataProperty extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.typemap={"google.type.Date":"furo-data-date-input","google.protobuf.StringValue":"furo-data-text-input","google.protobuf.FloatValue":"furo-data-number-input","google.protobuf.Int32Value":"furo-data-number-input","google.protobuf.UInt32Value":"furo-data-number-input","furo.StringProperty":"furo-data-text-input","furo.IntegerProperty":"furo-data-number-input","furo.NumberProperty":"furo-data-number-input","furo.StringOptionProperty":"furo-data-collection-dropdown"}}bindData(propertyField){this.field=propertyField;if(propertyField._isRepeater){// add flow repeat to parent and inject on repeated changes
// repeated
let r=document.createElement("flow-repeat");r.setAttribute("identity-path","id._value");let attrs="",l=this.attributes.length;for(let i=0;i<l;++i){var nodeName=this.attributes.item(i).nodeName,nodeValue=this.attributes.item(i).nodeValue;if(!nodeName.startsWith("@")&&!nodeName.startsWith("\u0192")){attrs+=nodeName+"=\""+nodeValue+"\""}}r.innerHTML="<template><furo-data-property \u0192-bind-data=\"--init\" "+attrs+"></furo-data-property></template>";let repeater=this.parentNode.insertBefore(r,this);this._createdRepeater=repeater;this.field.addEventListener("this-repeated-field-changed",data=>{repeater.injectItems(this.field.repeats)});// inject if data is already here
if(0<this.field.repeats.length){repeater.injectItems(this.field.repeats)}}else{this.field.data.addEventListener("branch-value-changed",d=>{this._createPropComponent(propertyField)},{once:!0});// data already in data-object
if(this.field.data["@type"]){this._createPropComponent(propertyField)}}}_createPropComponent(propertyField){if(!this._property_created){let type=propertyField.data["@type"]._value.replace(/.*\//,""),e=document.createElement(this.typemap[type]),l=this.attributes.length;for(let i=0;i<l;++i){var nodeName=this.attributes.item(i).nodeName,nodeValue=this.attributes.item(i).nodeValue;if(!nodeName.startsWith("@")&&!nodeName.startsWith("\u0192")){e.setAttribute(nodeName,nodeValue)}}if(e.bindData){switch(type){// the input elements for string and number are just working with scalar values
case"furo.StringProperty":case"furo.NumberProperty":case"furo.IntegerProperty":e.bindData(propertyField.data.data);break;case"google.protobuf.FloatValue":case"google.protobuf.Int32Value":case"google.protobuf.UInt32Value":case"google.protobuf.StringValue":e.bindData(propertyField.data.value);break;default:e.bindData(propertyField.data);}this._createdProp=this.parentNode.insertBefore(e,this);propertyField.data.dispatchNodeEvent(new NodeEvent("this-metas-changed",propertyField.data,!1));this._property_created=!0}else{console.warn(propertyField.data["@type"]._value,"not in map",this)}}}disconnectedCallback(){if(this._createdProp){this._createdProp.remove()}if(this._createdRepeater){this._createdRepeater.remove()}}static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: none;
        }
    `}}window.customElements.define("furo-data-property",FuroDataProperty);class FuroDataPropertyDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.typemap={"google.type.Date":"furo-data-display","furo.StringProperty":"furo-data-display","furo.IntegerProperty":"furo-data-display","furo.NumberProperty":"furo-data-display","furo.StringOptionProperty":"furo-data-display"}}bindData(propertyField){this.field=propertyField;if(propertyField._isRepeater){// add flow repeat to parent and inject on repeated changes
// repeated
let r=document.createElement("flow-repeat");r.setAttribute("identity-path","id._value");let attrs="",l=this.attributes.length;for(let i=0;i<l;++i){var nodeName=this.attributes.item(i).nodeName,nodeValue=this.attributes.item(i).nodeValue;if(!nodeName.startsWith("@")&&!nodeName.startsWith("\u0192")){attrs+=nodeName+"=\""+nodeValue+"\""}}r.innerHTML="<template><furo-data-property-display \u0192-bind-data=\"--init\" "+attrs+"></furo-data-property-display></template>";let repeater=this.parentNode.insertBefore(r,this);this._createdRepeater=repeater;this.field.addEventListener("this-repeated-field-changed",data=>{repeater.injectItems(this.field.repeats)});// inject if data is already here
if(0<this.field.repeats.length){repeater.injectItems(this.field.repeats)}}else{this.field.data.addEventListener("branch-value-changed",d=>{this._createPropComponent(propertyField)},{once:!0});// data already in data-object
if(this.field.data["@type"]){this._createPropComponent(propertyField)}}}_createPropComponent(propertyField){if(!this._property_created){let e=document.createElement(this.typemap[propertyField.data["@type"]._value.replace(/.*\//,"")]),l=this.attributes.length;// Grab all of the original's attributes, and pass them to the replacement
for(let i=0;i<l;++i){var nodeName=this.attributes.item(i).nodeName,nodeValue=this.attributes.item(i).nodeValue;if(!nodeName.startsWith("@")&&!nodeName.startsWith("\u0192")){e.setAttribute(nodeName,nodeValue)}}if(e.bindData){switch(propertyField.data["@type"]._value.replace(/.*\//,"")){// the input elements for string and number are just working with scalar values
case"furo.StringProperty":case"furo.NumberProperty":case"furo.IntegerProperty":e.bindData(propertyField.data.data);break;default:e.bindData(propertyField.data);}this._created=this.parentNode.insertBefore(e,this);propertyField.data.dispatchNodeEvent(new NodeEvent("this-metas-changed",propertyField.data,!1));this._property_created=!0}else{console.warn(propertyField.data["@type"]._value,"not in map",this)}}}disconnectedCallback(){if(this._createdProp){this._createdProp.remove()}if(this._createdRepeater){this._createdRepeater.remove()}}static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: none;
        }
    `}}window.customElements.define("furo-data-property-display",FuroDataPropertyDisplay);class FuroDataRadioButtonInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event ALL_BUBBLING_EVENTS_FROM_furo-radio-button-input
   *
   * All bubbling events from [furo-radio-button-input](../../input/doc/furo-radio-button-input) will be fired, because furo-data-radio-button-input uses furo-radio-button-input internally.
   *
   */constructor(){super();this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
       * Sets the field to readonly
       */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the furo-data-radio-button-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){this.disabled=this.field._meta.readonly?!0:!1;//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean}}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 300px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-radio-button-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html`
             <furo-radio-button-input id="input"
                ?autofocus=${this.autofocus} 
                ?disabled=${this._readonly||this.disabled} 
                ?error="${this.error}" 
                ?condensed="${this.condensed}"          
                @-value-changed="--valueChanged"
                ƒ-set-value="--value"></furo-radio-button-input>      
          `}}customElements.define("furo-data-radio-button-input",FuroDataRadioButtonInput);class FuroDataRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Range} the range value
   *
   * Comes from underlying component furo-range-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.rangeUnderflow){this._hint=this._minErrorMessage}else if(val.rangeOverflow){this._hint=this._maxErrorMessage}else if(val.stepMismatch){this._hint=this._stepErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Updater for the step attr
     * @param value
     */set _step(value){Helper$2.UpdateInputAttribute(this,"step",value)}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the range-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }
        furo-range-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-range-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-range-input>      
    `}}customElements.define("furo-data-range-input",FuroDataRangeInput);class ReferenceSearchItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._item={}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}injectItem(item){this._item=item;this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.css`
        :host {
            display: block;

        }

        :host([hover]) div {
            background-color: lightgray;
        }

        :host(:hover) div {
            background-color: #f0f0f0;
        }

        div {
            border-bottom: 1px solid var(--primary);
            padding: 8px;
            cursor: pointer;
            box-sizing: border-box;
        }
    `}deselect(){this.removeAttribute("hover")}preselect(){this.setAttribute("hover","");this.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}select(){/**
     * @event item-selected
     * Fired when item is selected
     * detail payload: item
     */let customEvent=new Event("item-selected",{composed:!0,bubbles:!0});customEvent.detail=this._item;this.dispatchEvent(customEvent)}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<div @-click="^^item-selected(_item)">
${this._item.data.display_name}
</div>           
`}}window.customElements.define("reference-search-item",ReferenceSearchItem);class FuroDataReferenceSearch extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._minTermLength=0;this.valueField="id";this.displayField="display_name"}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}_init(){this.addEventListener("searchInput",e=>{// by valid input reset meta and constraints
CheckMetaAndOverrides.UpdateMetaAndConstraints(this);this._searchTerm=e.detail;if(!this.searchOnEnterOnly){this._fireSearchEvent()}});this._FBPAddWireHook("--itemSelected",item=>{this.field.id._value=item.data[this.valueField];this.field.display_name._value=item.data[this.displayField];this._updateField();this._closeList()});/**
         * listen to keyboard events
         */this.addEventListener("keydown",event=>{let key=event.key||event.keyCode;if("Escape"===key||"Esc"===key||27===key){this._updateField();if(this._listIsOpen){// close list if open and  then clear search
event.preventDefault()}this._closeList();if(""===this._searchTerm){event.preventDefault();// re set display_name
}}// keyboard navigation
if(this._listIsOpen){if("Enter"===key){event.preventDefault();this._FBPTriggerWire("--enterPressedForSelect")}if("ArrowDown"===key){event.preventDefault();this._FBPTriggerWire("--arrowDownPressed")}if("ArrowUp"===key){event.preventDefault();this._FBPTriggerWire("--arrowUpPressed")}}else{// list is closed
if("ArrowDown"===key){this._showList()}if("Enter"===key){if(this.searchOnEnterOnly){event.preventDefault();this._fireSearchEvent()}}}});// lock blur for slow clickers
this.addEventListener("mousedown",event=>{this._lockBlur=!0});// unlock after long click
this.addEventListener("mouseup",event=>{this._lockBlur=!1});// close list on blur
this._FBPAddWireHook("--blured",item=>{this._focused=!1;if(!this._lockBlur){this._closeList()}});// opens the list on focus
this._FBPAddWireHook("--focused",item=>{this._focused=!0;if(this._hasCollection){this._showList()}});this.requestUpdate()}_fireSearchEvent(){if(this._searchTerm&&this._searchTerm.length>=this._minTermLength){/**
       * @event search
       * Fired when term is entered and bigger then min-term-length
       * detail payload: {String} term
       */let customEvent=new Event("search",{composed:!0,bubbles:!0});customEvent.detail=this._searchTerm;this.dispatchEvent(customEvent)}}_showList(){this._listIsOpen=!0;this.setAttribute("show-list","");let arrCollection=this._collection,index=0;for(let i=0;i<arrCollection.length;i++){if(arrCollection[i].data&&arrCollection[i].data[this.valueField]==this.field.id._value){index=i;break}}// trigger wire to select item
this._FBPTriggerWire("--listOpened",index)}_closeList(){this._listIsOpen=!1;this.removeAttribute("show-list")}/**
     * Updater for the min => minlength attr
     * same problem like in pattern
     *
     * @param value
     */set _minTermLength(value){this.__minTermLength=value;Helper$2.UpdateInputAttribute(this,"min",value)}get _minTermLength(){return this.__minTermLength}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * the field name of reference-item which should be used to asign to value (likes id) field of the the data entity object
       */valueField:{type:String,attribute:"value-field"},/**
       * the field name of reference-item which should be used as display which will be showed in the dropdown.
       */displayField:{type:String,attribute:"display-field"},/**
       * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       */subfield:{type:String},/**
       * this property saves the value of the displayField of selected item from collection
       */_displayName:{type:String},/**
       * mark if the collection is already loaded
       */_hasCollection:{type:Boolean},/**
       * the loaded collection
       */_collection:{type:Array},/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */minTermLength:{type:Number,attribute:"min-term-length"},/**
       * Enable this, to avoid the automatic triggering of "search".
       *
       * The user have to press enter to trigger the search. Min-term-length is respected.
       */searchOnEnterOnly:{type:Boolean,attribute:"search-on-enter-only"},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean,reflect:!0},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Bind a entity field to the search-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode);this._init()}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}if(this.field.display_name._value){this._FBPTriggerWire("--value",this.field.display_name._value)}this.requestUpdate()}collectionIn(collection){this._FBPTriggerWire("--listItemsIjnected",collection.entities);this._hasCollection=!0;this._collection=collection.entities;if(this._focused){this._showList()}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            position: relative;
        }

        .list {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            overflow: auto;
            max-height: 300px;
            background-color: white;
            z-index: 1;
            opacity: 0.9;
            display: none;
        }

        :host([show-list]) .list {
            display: block;
        }

        furo-search-input {
            width: 100%;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
    <furo-search-input id="input"
      trailing-icon="search" 
      ?autofocus=${this.autofocus} 
      ?condensed=${this.condensed} 
      ƒ-set-value="--value"
      @-value-changed="^^searchInput" 
      @-blur="--blured" 
      @-input-invalid="--inputInvalid"
      @-focus="--focused" 
      ƒ-focus="--focusReceived"></furo-search-input>
    <div class="list" @-item-selected="--itemSelected"   >
       
        <template is="flow-repeat" ƒ-inject-items="--listItemsIjnected" ƒ-select="--listOpened" ƒ-select-next-index="--arrowDownPressed" ƒ-select-previous-index="--arrowUpPressed" ƒ-trigger-selected="--enterPressedForSelect">
          <reference-search-item ƒ-.index="--index" ƒ-deselect="--itemDeSelected" ƒ-select="--trigger" ƒ-preselect="--itemSelected" ƒ-inject-item="--item"></reference-search-item>
        </template>
             
    </div>                                
`}}window.customElements.define("furo-data-reference-search",FuroDataReferenceSearch);class DataRepeatDelete extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @private
   * @return {Object}
   */static get properties(){return{/**
       * Description
       */icon:{type:String}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();/**
                        * Register hook on wire --delClicked to
                        * delete the item
                        */this.addEventListener("click",e=>{this.field.deleteNode()})}bindItem(repeatedNode){this.field=repeatedNode}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            box-sizing: border-box;
            padding:  26px 0 0 var(--spacing-xs);
            cursor: pointer;
        }

        :host([condensed]){
            padding:  18px 0 0 var(--spacing-xs);
        }
        :host([hidden]) {
            display: none;
           
        }

        :host([condensed]) furo-icon {
            width: 16px;
            height: 16px;
            
        }
        furo-icon {
            width: 20px;
            height: 20px;
            
        }

      
    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
      
      <furo-icon icon="${this.icon}"></furo-icon>     
       
    `}}window.customElements.define("data-repeat-delete",DataRepeatDelete);class FuroDataRepeat extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              * Set the delete icon to enable deleting of a repeated element.
              * @type {undefined}
              */this.deleteIcon=void 0}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * repeated-component to be used for the items.
       * The component must support ƒ-bind-data
       */repeatedComponent:{type:String,attribute:"repeated-component"}}}/**
     * Create a attribute for map<string,type> types
     * create a field in a FieldNode, this is useful when using map<string,something>
     * set the value option to init with values
     * @param options {"fieldName":"name","type":"string", "spec":{..}}  spec is optional
     */createAttribute(options){this.field.createField(options)}set repeatedComponent(component){// add flow repeat to parent and inject on repeated changes
// repeated
let container=document.createElement("furo-form-layouter"),r=document.createElement("flow-repeat");r.setAttribute("identity-path","__index");r.setAttribute("\u0192-inject-items","--repeatsChanged");let isCondensed="",attrs="",l=this.attributes.length;for(let i=0;i<l;++i){var nodeName=this.attributes.item(i).nodeName,nodeValue=this.attributes.item(i).nodeValue;switch(nodeName){case"condensed":attrs+=nodeName+"=\""+nodeValue+"\"";isCondensed="condensed";break;case"two":container.setAttribute("two","");break;case"four":container.setAttribute("four","");break;case"eight":container.setAttribute("eight","");break;case"delete-icon":this.deleteIcon=nodeValue;break;default:if(!nodeName.startsWith("@")&&!nodeName.startsWith("\u0192")){attrs+=nodeName+"=\""+nodeValue+"\""}}}let icn="";if(this.deleteIcon){icn="<data-repeat-delete icon=\""+this.deleteIcon+"\" "+isCondensed+" \u0192-bind-item=\"--init\"></data-repeat-delete>"}r.innerHTML="<template><furo-horizontal-flex><"+component+" "+attrs+" flex \u0192-bind-data=\"--init\"></"+component+">"+icn+"</furo-horizontal-flex></template>";container.appendChild(r);this.shadowRoot.appendChild(container)}bindData(repeats){this.field=repeats;this.field.addEventListener("this-repeated-field-changed",node=>{this._FBPTriggerWire("--repeatsChanged",this.field.repeats);this._checkSize()});// key value repeats
if(this.field.repeats){// initial trigger
this._FBPTriggerWire("--repeatsChanged",this.field.repeats);this._checkSize()}else{// attributes
this.field.addEventListener("branch-value-changed",node=>{this._FBPTriggerWire("--repeatsChanged",this.field.__childNodes)});this.field.addEventListener("node-field-deleted",node=>{this._FBPTriggerWire("--repeatsChanged",this.field.__childNodes)});this.field.addEventListener("node-field-added",node=>{this._FBPTriggerWire("--repeatsChanged",this.field.__childNodes)});// initial trigger for fields
this._FBPTriggerWire("--repeatsChanged",this.field.__childNodes)}}/**
     * hide the element if array is empty
     * @private
     */_checkSize(){if(0===this.field.repeats.length){this.setAttribute("hidden","");this._isHidden=!0}else{if(this._isHidden){this.removeAttribute("hidden")}}}add(data){if(this.field){this.field.add(data)}}/**
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
        }

        :host([hidden]) {
            display: none;
        }
    `}}window.customElements.define("furo-data-repeat",FuroDataRepeat);class FuroDataSearchInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-search-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.patternMismatch){this._hint=this._patternErrorMessage}else if(val.tooShort){this._hint=this._minErrorMessage}else if(val.tooLong){this._hint=this._maxErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the pattern attr, the prop alone with pattern="${this.pattern}" wont work,
     * becaue it set "undefined" (as a Sting!)
     *
     * @param value
     */set _pattern(value){Helper$2.UpdateInputAttribute(this,"pattern",value)}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the pattern from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */pattern:{type:String},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean,reflect:!0},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Bind a entity field to the search-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width:190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-search-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-search-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}" 
          ?required=${this._required}   
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-search-input>      
    `}}customElements.define("furo-data-search-input",FuroDataSearchInput);class FuroDataTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-text-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.patternMismatch){this._hint=this._patternErrorMessage}else if(val.tooShort){this._hint=this._minErrorMessage}else if(val.tooLong){this._hint=this._maxErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the pattern attr, the prop alone with pattern="${this.pattern}" wont work,
     * becaue it set "undefined" (as a Sting!)
     *
     * @param value
     */set _pattern(value){Helper$2.UpdateInputAttribute(this,"pattern",value)}/**
     * Updater for the min => minlength attr
     * same problem like in pattern
     *
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr
     * * same problem like in pattern
     *
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the pattern from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */pattern:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Bind a entity field to the text-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-text-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html`
       <furo-text-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled}                 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"                         
          ?required=${this._required}                   
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-text-input>      
    `}}customElements.define("furo-data-text-input",FuroDataTextInput);class FuroDataTextareaInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.tooShort){this._hint=this._minErrorMessage}else if(val.tooLong){this._hint=this._maxErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the min => minlength attr
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the cols attr
     * @param value
     */set _cols(value){Helper$2.UpdateInputAttribute(this,"cols",value)}/**
     * Updater for the rows attr*
     * @param value
     */set _rows(value){Helper$2.UpdateInputAttribute(this,"rows",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * todo , add more attributes like cols, rows, spellcheck..
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
     */static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean},/**
       * The number of visible text lines for the control.
       */rows:{type:Number},/**
       * The visible width of the text control
       */cols:{type:Number}}}/**
     * Bind a entity field to the textarea-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){this.disabled=this.field._meta.readonly?!0:!1;//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
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

        furo-textarea-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-textarea-input  id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled}                 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"                         
          ?required=${this._required}    
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-textarea-input>      
    `}}customElements.define("furo-data-textarea-input",FuroDataTextareaInput);class FuroDataTimeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the time value
   *
   * Comes from underlying component furo-time-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field._value=val}});this._FBPAddWireHook("--inputInvalid",val=>{// val is a ValidityState
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
if(val){if(val.rangeUnderflow){this._hint=this._minErrorMessage}else if(val.rangeOverflow){this._hint=this._maxErrorMessage}else if(val.stepMismatch){this._hint=this._stepErrorMessage}this.requestUpdate()}})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
// check initial overrides
CheckMetaAndOverrides.UpdateMetaAndConstraints(this)}/**
     * Updater for the min => minlength attr*
     * @param value
     */set _min(value){Helper$2.UpdateInputAttribute(this,"min",value)}/**
     * Updater for the max attr*
     * @param value
     */set _max(value){Helper$2.UpdateInputAttribute(this,"max",value)}/**
     * Updater for the label attr
     * @param value
     */set _label(value){Helper$2.UpdateInputAttribute(this,"label",value)}/**
     * Updater for the hint attr
     * @param value
     */set _hint(value){Helper$2.UpdateInputAttribute(this,"hint",value)}/**
     * Updater for the leadingIcon attr
     * @param value
     */set leadingIcon(value){Helper$2.UpdateInputAttribute(this,"leading-icon",value)}/**
     * Updater for the trailingIcon attr
     * @param value
     */set trailingIcon(value){Helper$2.UpdateInputAttribute(this,"trailing-icon",value)}/**
     * Updater for the errortext attr
     * @param value
     */set errortext(value){Helper$2.UpdateInputAttribute(this,"errortext",value)}/**
     * Updater for the step attr
     * @param value
     */set _step(value){Helper$2.UpdateInputAttribute(this,"step",value)}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */required:{type:Boolean},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:String},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:String},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the time-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){Helper$2.BindData(this,fieldNode)}_updateField(){//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.description}this._FBPTriggerWire("--value",this.field._value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 104px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-time-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-time-input id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          ?error="${this.error}" 
          ?required=${this._required}
          ?condensed="${this.condensed}"                         
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-time-input>      
    `}}customElements.define("furo-data-time-input",FuroDataTimeInput);class DemoProjectFilterForm extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();this._FBPTraceWires()}bindData(data){this._FBPTriggerWire("--entity",data);data.data.description.addEventListener("field-value-changed",v=>{this._FBPTriggerWire("--defaultChanged",v.detail._value)})}static get styles(){// language=CSS
return[_furoShell.css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }
            `]}/**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <!-- filter input form, options from ProjectfilterService -->
            <furo-card header-text="Filter options">
                <furo-form-layouter>
                    <!-- Short project description  -->
                    <furo-data-text-input condensed
                                          ƒ-bind-data="--entity(*.data.description)"
                                          @-value-changed="--defaultChanged"></furo-data-text-input>
                </furo-form-layouter>

                <furo-form-layouter two>
                    <!-- Start date of the project  -->
                    <furo-data-date-input condensed
                                          ƒ-bind-data="--entity(*.data.start)"
                                          @-value-changed="--startChanged"></furo-data-date-input>
                    <!-- Prospective end date of the project  -->
                    <furo-data-date-input condensed
                                          ƒ-bind-data="--entity(*.data.end)"
                                          @-value-changed="--endChanged"></furo-data-date-input>
                </furo-form-layouter>

                <furo-form-layouter>
                    <!-- Project cost limit  -->
                    <furo-data-money-input condensed
                                           ƒ-bind-data="--entity(*.data.cost_limit)"
                                           @-value-changed="--costlimitChanged"></furo-data-money-input>
                </furo-form-layouter>

                <furo-button-bar slot="action">
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-button label="Create Filter" @-click=""></furo-button>
                    <furo-button primary label="Search/Filter" @-click=""></furo-button>
                </furo-button-bar>
            </furo-card>

            <!-- filter container with filter definitions @-filter-changed give you the current filter array -->
            <furo-filter-container>
                <furo-filter-and>
                    <furo-filter-field field="description" is="in" ƒ-.value="--defaultChanged"></furo-filter-field>
                    <furo-filter-field field="start" is="gte" ƒ-.value="--startChanged"></furo-filter-field>
                    <furo-filter-field field="end" is="lte" ƒ-.value="--endChanged"></furo-filter-field>
                    <furo-filter-field field="cost_limit" is="eq" ƒ-.value="--costlimitChanged"></furo-filter-field>
                </furo-filter-and>
            </furo-filter-container>
        `}}window.customElements.define("demo-project-filter-form",DemoProjectFilterForm);class DemoFuroFilter extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * flow is ready lifecycle method
   */_FBPReady(){super._FBPReady();this._FBPTraceWires()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }
            
        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <furo-vertical-flex>
                <div>
                    <h2>Demo demo-furo-filter</h2>
                    <p>Basic usage of the furo filter pattern.</p>
                    <p>We use a singleton resource to deliver possible filter options. Here we use /projects/filter</p>
                </div>
                <furo-demo-snippet flex>
                    <template>

                        <!-- filter input form, options from ProjectfilterService -->
                        <div style="width: 75%; margin: 0 auto;">

                            <furo-button unelevated label="Load filter options" @-click="--go"></furo-button>
                            <p>Search in projects (default filter)</p>
                            <!-- filter default input -->
                            <furo-horizontal-flex>
                                <furo-data-text-input label="Search in projects" condensed ƒ-bind-data="--entity(*.data.description)" flex leading-icon="search"></furo-data-text-input> <furo-button label="clear filter" @-click="--filterCleared"></furo-button>
                            </furo-horizontal-flex>
                            
                            <demo-project-filter-form ƒ-bind-data="--entity" @-filter-changed="--filterChanged" @-filter-cleared="--filterChanged"></demo-project-filter-form>

                            <p>Filter Array</p>
                            <furo-pretty-json ƒ-inject-data="--filterChanged, --filterCleared(*.dummy)"></furo-pretty-json>
                        </div>
                       
                        <!-- Loading filter options from singleton resource projects/filter -->
                        <furo-deep-link ƒ-trigger="--go" service="ProjectfilterService"
                                        @-hts-out="--hts"></furo-deep-link>
                        
                        <furo-entity-agent service="ProjectfilterService"
                                           @-response="--response"
                                           ƒ-hts-in="--hts"
                                           load-on-hts-in></furo-entity-agent>

                        <furo-data-object type="projectfilter.ProjectfilterEntity"
                                          @-object-ready="--entity"
                                          ƒ-inject-raw="--response" ƒ-reset="--filterCleared"></furo-data-object>

                    </template>
                </furo-demo-snippet>
            </furo-vertical-flex>
        `}}window.customElements.define("demo-furo-filter",DemoFuroFilter);class DemoFuroEntityValidator extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * flow is ready lifecycle method
   */_FBPReady(){super._FBPReady();this._FBPTraceWires()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }
            
        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <furo-vertical-flex>
                <div>
                    <h2>Demo demo-furo-entity-validator</h2>
                </div>
                <furo-demo-snippet flex>
                    <template>
                        <furo-horizontal-flex>

                            <furo-data-search-input autofocus ƒ-bind-data="--entity(*.furo_data_search_input)"></furo-data-search-input>
                            <furo-data-search-input autofocus ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-search-input>
                        </furo-horizontal-flex>

                        <produce-qp-data @-data="--qp" qp={"exp":2}></produce-qp-data>

                        <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                          ƒ-inject-raw="--response(*.data)"></furo-data-object>
                        <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                        <furo-entity-agent service="ExperimentService"
                                           ƒ-hts-in="--hts"
                                           ƒ-load="--hts"
                                           ƒ-bind-request-data="--entity"
                                           @-response="--response">
                        </furo-entity-agent>
                        <furo-entity-validator ƒ-bind-data="--entity"></furo-entity-validator>

                    </template>
                </furo-demo-snippet>
            </furo-vertical-flex>
        `}}window.customElements.define("demo-furo-entity-validator",DemoFuroEntityValidator);class DemoFuroDataRepeat extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo for furo-data-repeat</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller style="padding: 10px">
              <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>
              <simulate-error ƒ-bind-data="--entity"
                              error='{"field":"repstring.1","description":"something went wrong"}'></simulate-error>

              <hr>
              <furo-card header-text="furo-data-repeater demo"
                         secondary-text="On this screen we have 2 repeated items. The one on the right uses furo-data-display">
                <furo-form-layouter two>
                  <h3>form</h3>
                  <h3>display</h3>
                  <furo-data-repeat ƒ-bind-data="--entity(*.repstring)" ƒ-add="--addFieldClicked(null)"
                                    repeated-component="furo-data-text-input">
                  </furo-data-repeat>
                  <furo-data-repeat four ƒ-bind-data="--entity(*.repstring)" repeated-component="furo-data-display">
                  </furo-data-repeat>
                </furo-form-layouter>
                <furo-horizontal-flex space slot="action">
                  <furo-button primary @-click="--addFieldClicked">add field</furo-button>
                  <furo-button primary @-click="--emptyClicked">set empty</furo-button>
                </furo-horizontal-flex>
              </furo-card>


              <furo-data-object type="experiment.Experiment" @-object-ready="--entity" ƒ-init="--emptyClicked"
                                ƒ-inject-raw="--response(*.data)"></furo-data-object>
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 load-on-hts-in
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>

            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-repeat",DemoFuroDataRepeat);class DemoFuroDataPropertyDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-data-property-display</h2>
          <p>Bind your fields as usual.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <!-- single Property -->
                <furo-data-property-display condensed noborder ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property-display>
                  
                <!-- repeated Property -->
                <furo-data-property-display condensed noborder something ƒ-bind-data="--entity(*.type_property)"></furo-data-property-display>
                   
                <!-- single Property -->
                <furo-data-property-display ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property-display>
              </furo-form-layouter>
              

              <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>
              <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                ƒ-inject-raw="--response(*.data)"></furo-data-object>
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 ƒ-load="--hts"
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-property-display",DemoFuroDataPropertyDisplay);class DemoFuroDataProperty extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-data-property</h2>
          <p>Bind your fields as usual.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <!-- repeated Property -->

                <furo-data-property ƒ-bind-data="--entity(*.data.type_property)"></furo-data-property>


                <!-- single Property -->
                <furo-data-property ƒ-bind-data="--entity(*.data.single_type_property)"></furo-data-property>
              </furo-form-layouter>

              <furo-button @-click="--reload">reload</furo-button>
              <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>
              
              <furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity"
                                ƒ-inject-raw="--response"></furo-data-object>
              
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 ƒ-load="--hts,--reload"
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-property",DemoFuroDataProperty);class DemoFuroDataDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>furo-data-display {
              --display-label-color: #8c8c8c;
            }</style>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <furo-data-display trailing-icon="dashboard" label="hallo ustom hint" required
                                   ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-display>
                <furo-data-display leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_text_input)" min="4"
                                   max="7"></furo-data-display>
                <furo-data-display readonly ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-display>
                <furo-data-display noborder ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-display>
                <furo-data-display  ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-display>
                <furo-data-display  ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-display>
                <furo-data-display  ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-display>
                <furo-data-date-input  ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-date-input>
                <furo-data-display  displayfield="year" ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-display>
                <furo-data-display></furo-data-display>
              </furo-form-layouter>

              <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

              <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                ƒ-inject-raw="--response(*.data)"></furo-data-object>
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 load-on-hts-in
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-display",DemoFuroDataDisplay);class ProduceQpData extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",this.produce)}_FBPReady(){super._FBPReady();if(this.auto){this.produce()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */auto:{type:Boolean},qp:{type:Object,reflect:!0}}}produce(){let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=this.qp;this.dispatchEvent(customEvent)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            margin-top: 18px;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-button label="load test data" raised></furo-button>
    `}}window.customElements.define("produce-qp-data",ProduceQpData);class DemoFuroDataBoolIcon extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-data-bool-icon</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-data-bool-icon ƒ-bind-data="--entity(*.furo_data_bool_icon)"></furo-data-bool-icon>
            
          <produce-qp-data  @-data="--qp" qp={"exp":1}></produce-qp-data>

          <furo-data-object type="experiment.Experiment" @-data-injected="--entity"
                          ƒ-inject-raw="--response(*.data)"></furo-data-object>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
          <furo-entity-agent service="ExperimentService"
                             ƒ-hts-in="--hts"
                             ƒ-load="--hts"
                             ƒ-bind-request-data="--entity"
                             @-response="--response">
          </furo-entity-agent>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-data-bool-icon",DemoFuroDataBoolIcon);class SampleFuroDataTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
          <furo-data-text-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-text-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-text-input",SampleFuroDataTextInput);class SampleFuroDataPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 130px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet>
        <template>
          <furo-data-password-input hint="Hint text for password" label="Password"></furo-data-password-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-password-input",SampleFuroDataPasswordInput);class SampleFuroDataMoneyInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
          <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)"></furo-data-money-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-money-input",SampleFuroDataMoneyInput);class SimulateError extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",()=>{/**
       * error example
       * {
       * "field": "display_name",
       * "description": "display name can not be empty"
       *};
       */this.fields._setInvalid(this.error)})}bindData(d){this.fields=d}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */error:{type:Object}}}/**
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
    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
        <furo-button raised danger>set error</furo-button>
    `}}window.customElements.define("simulate-error",SimulateError);class DemoFuroDataTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo furo-data-text-input</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_text_input","description":"pattern not match"}'></simulate-error>
            <furo-data-text-input trailing-icon="dashboard" hint="custom hint" required
                                  ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-text-input>
            <furo-data-text-input leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_text_input)" min="4"
                                  max="7"></furo-data-text-input>
            <furo-data-text-input readonly ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-text-input>
            <furo-data-text-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-text-input>
            <furo-data-text-input></furo-data-text-input>
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               load-on-hts-in
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>

        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-text-input",DemoFuroDataTextInput);class DemoFuroDataPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo furo-data-password-input</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_text_input","description":"pattern not match"}'></simulate-error>
            <furo-data-password-input trailing-icon="dashboard" hint="custom hint" required
                                  ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-password-input>
            <furo-data-password-input leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_text_input)" min="4"
                                  max="7"></furo-data-password-input>
            <furo-data-password-input readonly ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-password-input>
            <furo-data-password-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-password-input>
            <furo-data-password-input></furo-data-password-input>
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>

        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-password-input",DemoFuroDataPasswordInput);class DemoFuroDataDateInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-date-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-form-layouter four>
                <furo-data-date-input autofocus ƒ-bind-data="--entity(*.furo_data_date_input)"
                                      hint="Hint should come from spec and overflows"></furo-data-date-input>
                <furo-data-date-input leading-icon="fingerprint" label="with step" step="30" ƒ-bind-data="--entity(*.furo_data_date_input)"
                                      @-value-changed="--dateChanged"
                                      hint="but that should be ok"></furo-data-date-input>
                <furo-data-date-input flex label="min max" min="2012-01-01" max="2025-12-08"
                                      ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-date-input>
                <furo-data-date-input label="disabled" disabled label="with step" step="7"
                                      ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-date-input>

                <furo-data-date-input  ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-date-input>
              <furo-data-date-input step="any" min="0001-01-01" ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-date-input>
              
              
            </furo-form-layouter>
         
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-date-input",DemoFuroDataDateInput);class DemoFuroSearchTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo furo-data-search-input</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_text_input","description":"pattern not match"}'></simulate-error>
            <furo-data-search-input trailing-icon="dashboard" hint="custom hint" required
                                  ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-search-input>
            <furo-data-search-input leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_text_input)" min="4"
                                  max="7"></furo-data-search-input>
            <furo-data-search-input readonly ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-search-input>
            <furo-data-search-input autofocus ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-search-input>
            <furo-data-search-input></furo-data-search-input>
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>

        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-search-input",DemoFuroSearchTextInput);class DemoFuroDataTextareaInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-data-textarea-input</h2>
      <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the furo-data-object specs.</p>
      <furo-demo-snippet >
        <template>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.furo_data_textarea_input)"></furo-data-textarea-input>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.furo_data_textarea_input)" @-value-changed="--textareaChanged"></furo-data-textarea-input>

          <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

          <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                            ƒ-inject-raw="--response(*.data)"></furo-data-object>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
          <furo-entity-agent service="ExperimentService"
                             ƒ-hts-in="--hts"
                             ƒ-load="--hts"
                             ƒ-bind-request-data="--entity"
                             @-response="--response">
          </furo-entity-agent>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-data-textarea-input",DemoFuroDataTextareaInput);class DemoFuroDataReferenceSearch extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo furo-data-reference-search</h2>
        <p>Bind the reference field from furo-data-object with
          <strong>ƒ-bind-data="--entityReady(*.refFieldName)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-data-reference-search condensed
                      ƒ-bind-data="--entityReady(*.owner)"
                      @-search="--term"
                      ƒ-collection-in="--refCol">
              </furo-data-reference-search>
                
              <furo-data-display label="selected id" leading-icon="apps" condensed  ƒ-bind-data="--entityReady(*.owner.id)"></furo-data-display>
              <furo-data-reference-search condensed
                                          label="Search on enter only"
                                          search-on-enter-only
                                          min-term-length="2"
                                          ƒ-bind-data="--entityReady(*.owner)"
                                          @-search="--term"
                                          ƒ-collection-in="--refCol">
              </furo-data-reference-search>
            </furo-form-layouter>
            <furo-data-object
                    type="task.Task"
                    @-object-ready="--entityReady">
            </furo-data-object>
            <furo-collection-agent
                    service="PersonService"
                    ƒ-hts-in="--entityReady(*.owner.link._value)"
                    ƒ-search="--term"
                    @-response="--refCol">
            </furo-collection-agent>

          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-reference-search",DemoFuroDataReferenceSearch);class SampleFuroDataNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
          <furo-data-number-input autofocus ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
          <furo-data-number-input  hint="Type in a number" label="label" ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-number-input",SampleFuroDataNumberInput);class DemoFuroDataNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-number-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>

              <furo-data-number-input autofocus ƒ-bind-data="--entity(*.furo_data_number_input)"
                                        hint="min, max and step come from spec"></furo-data-number-input>
              <furo-data-number-input label="with step" step="0.5" ƒ-bind-data="--entity(*.furo_data_number_input)"
                                      hint="min and max come from spec, custom step 0.5"
                                      @-value-changed="--numberChanged"></furo-data-number-input>
              <furo-data-number-input flex label="min max" min="1" max="9" hint="min 1, max 9, step from sepc"
                                      ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
              <furo-data-number-input label="disabled" disabled label="with step" step="3"
                                      hint="min and max come from spec, custom step 3"
                                      ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
              <furo-data-number-input></furo-data-number-input>
            </furo-horizontal-flex>
              
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_number_input","description":"min not match"}'></simulate-error>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-number-input",DemoFuroDataNumberInput);class DemoFuroDataTimeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-time-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>
              <furo-data-time-input autofocus ƒ-bind-data="--entity(*.furo_data_time_input)"  hint="custom hint"></furo-data-time-input>
              <furo-data-time-input label="step 10" step="10"     ƒ-bind-data="--entity(*.furo_data_time_input)"
                                    @-value-changed="--timeChanged" ></furo-data-time-input>
              <furo-data-time-input flex label="min 12:00 max 20:00" min="12:00" max="20:00"
                                    ƒ-bind-data="--entity(*.furo_data_time_input)" ></furo-data-time-input>
              <furo-data-time-input label="disabled" disabled label="with step" step="2"
                                    ƒ-bind-data="--entity(*.furo_data_time_input)" ></furo-data-time-input>
            </furo-horizontal-flex>
              <furo-data-time-input ></furo-data-time-input>


              <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-time-input",DemoFuroDataTimeInput);class DemoFuroDataCheckboxInput extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }

        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <h2>Demo furo-data-checkbox-input</h2>
            <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                The labels, hints, defaults are comming from the furo-data-object specs.</p>
            <furo-demo-snippet>
                <template style="position: relative">
                    <furo-data-checkbox-input label="console warning by invalid binding" ƒ-bind-data="--entity(*.xxxy)"></furo-data-checkbox-input>
                    <furo-data-checkbox-input label="bindable no matter Disabled" readonly=true ƒ-bind-data="--entity(*.furo_data_checkbox_input)"> </furo-data-checkbox-input>
                    <furo-data-checkbox-input style="position: relative;top:-8px" condensed label="condensed" hint="condensed hint" ƒ-bind-data="--entity(*.furo_data_checkbox_input)" > </furo-data-checkbox-input>
                    <furo-data-checkbox-input></furo-data-checkbox-input>
                    <furo-horizontal-flex space>
    
                        <furo-data-checkbox-input autofocus ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                  @-value-changed="--checkChanged"
                                                  hint="the checked value will be sent to text input"></furo-data-checkbox-input>
    
                        <furo-text-input condensed label="wire the checkbox" ƒ-set-value="--checkChanged"></furo-text-input>

                    </furo-horizontal-flex>

                    <produce-qp-data  @-data="--qp" qp={"exp":1}></produce-qp-data>

                    <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                      ƒ-inject-raw="--response(*.data)"></furo-data-object>
                    <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                    <furo-entity-agent service="ExperimentService"
                                  ƒ-hts-in="--hts"
                                  ƒ-load="--hts"
                                  ƒ-bind-request-data="--entity"
                                  @-response="--response">
                    </furo-entity-agent>
                </template>
            </furo-demo-snippet>
        `}}window.customElements.define("demo-furo-data-checkbox-input",DemoFuroDataCheckboxInput);class DemoFuroDataRadioButtonInput extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }

        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <h2>Demo furo-data-radio-button-input</h2>
            <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                The labels, hints, defaults are comming from the furo-data-object specs.</p>
            <furo-demo-snippet>
                <template style="position: relative">
                    <furo-data-radio-button-input label="console warning by invalid binding" ƒ-bind-data="--entity(*.xxxy)"></furo-data-radio-button-input>
                    <furo-data-radio-button-input label="bindable no matter Disabled" readonly=true ƒ-bind-data="--entity(*.furo_data_checkbox_input)"> </furo-data-radio-button-input>
                    <furo-data-radio-button-input style="position: relative;top:-8px" condensed label="condensed" hint="condensed hint" ƒ-bind-data="--entity(*.furo_data_checkbox_input)" > </furo-data-radio-button-input>
                    <furo-data-radio-button-input></furo-data-radio-button-input>
                    <furo-horizontal-flex space>
    
                        <furo-data-radio-button-input autofocus ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                  @-value-changed="--checkChanged"
                                                  hint="the checked value will be sent to text input"></furo-data-radio-button-input>
    
                        <furo-text-input condensed label="wire the radio-button" ƒ-set-value="--checkChanged"></furo-text-input>

                    </furo-horizontal-flex>

                    <produce-qp-data  @-data="--qp" qp={"exp":1}></produce-qp-data>

                    <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                      ƒ-inject-raw="--response(*.data)"></furo-data-object>
                    <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                    <furo-entity-agent service="ExperimentService"
                                  ƒ-hts-in="--hts"
                                  ƒ-load="--hts"
                                  ƒ-bind-request-data="--entity"
                                  @-response="--response">
                    </furo-entity-agent>
                </template>
            </furo-demo-snippet>
        `}}window.customElements.define("demo-furo-data-radio-button-input",DemoFuroDataRadioButtonInput);class DemoFuroDataRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-range-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>
              <furo-data-range-input autofocus ƒ-bind-data="--entity(*.furo_data_range_input)"
                                      hint="min, max and step come from spec" @-value-changed="--numberChanged"></furo-data-range-input>
              <furo-data-range-input label="with custom step" step="0.5" ƒ-bind-data="--entity(*.furo_data_range_input)"
                                      hint="min and max come from spec, custom step 0.5"
                                      @-value-changed="--numberChanged"></furo-data-range-input>
              <furo-data-range-input flex label="min max" min="1" max="9" hint="min 1, max 9, step from sepc"
                                      ƒ-bind-data="--entity(*.furo_data_range_input)"></furo-data-range-input>
              <furo-data-range-input label="disabled" disabled label="with step" step="3"
                                      hint="min and max come from spec, custom step 3"
                                      ƒ-bind-data="--entity(*.furo_data_range_input)"></furo-data-range-input>
              <furo-data-range-input></furo-data-range-input>
              <furo-data-number-input label="range value" ƒ-bind-data="--entity(*.furo_data_range_input)"></furo-data-number-input>
            </furo-horizontal-flex>
              
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-range-input",DemoFuroDataRangeInput);class DemoFuroDataColorInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo furo-data-color-input</h2>
        <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
          The labels, hints, defaults are comming from the furo-data-object specs.</p>
        <furo-demo-snippet flex>
          <template>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_color_input","description":"wrong color value"}'></simulate-error>
            <furo-data-color-input hint="custom hint" required
                                  ƒ-bind-data="--entity(*.furo_data_color_input)"></furo-data-color-input>
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               load-on-hts-in
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>

        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-color-input",DemoFuroDataColorInput);class SampleFuroDataCollectionDropdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 270px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          
          <furo-form-layouter two>
          <furo-data-collection-dropdown label="label overrid" hint="hint override" leading-icon="mail" trailing-icon="fingerprint"  
                                         subfield="id"
                                         display-field="phone_nr" 
                                         label="Use phone as display" 
                                         ƒ-inject-entities="--response(*.entities)" 
                                         ƒ-bind-data="--entity(*.owner)"></furo-data-collection-dropdown>       
            <furo-data-collection-dropdown label="label overrid" hint="hint override" leading-icon="mail" trailing-icon="fingerprint"
                                         display-field="phone_nr" 
                                         label="Use phone as display" 
                                         ƒ-inject-entities="--response(*.entities)" 
                                         ƒ-bind-data="--entity(*.owner.id)"></furo-data-collection-dropdown>
          </furo-form-layouter>
          
            
          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
            
          <furo-collection-agent service="PersonService"
                                 list-on-hts-in
                                 ƒ-hts-in="--entity(*.owner.link._value)"
                                 @-response="--response">
          </furo-collection-agent>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-collection-dropdown",SampleFuroDataCollectionDropdown);class DemoFuroDataDisplayCondensed extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>furo-data-display {
              --display-label-color: #8c8c8c;
            }</style>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <furo-data-display condensed trailing-icon="dashboard" label="hallo ustom hint" required
                                   ƒ-bind-data="--entity(*.furo_data_text_input)"></furo-data-display>
                <furo-data-display condensed leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_text_input)" min="4"
                                   max="7"></furo-data-display>
                <furo-data-display condensed readonly ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-display>
                <furo-data-display condensed ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-display>
                <furo-data-display noborder condensed ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-display>
                <furo-data-display condensed ƒ-bind-data="--entity(*.furo_data_date_input)"></furo-data-display>
                <furo-data-display condensed ƒ-bind-data="--entity(*.furo_data_date_input_google)" trailing-icon="dashboard" leading-icon="dashboard"></furo-data-display>
                <furo-data-date-input condensed ƒ-bind-data="--entity(*.furo_data_date_input_google)" leading-icon="dashboard"></furo-data-date-input>
                <furo-data-number-input condensed ƒ-bind-data="--entity(*.furo_data_number_input)" leading-icon="dashboard"></furo-data-number-input>
                <furo-data-display condensed displayfield="year" ƒ-bind-data="--entity(*.furo_data_date_input_google)"></furo-data-display>
                <furo-data-display condensed></furo-data-display>
              </furo-form-layouter>

              <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

              <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                ƒ-inject-raw="--response(*.data)"></furo-data-object>
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 load-on-hts-in
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-display-condensed",DemoFuroDataDisplayCondensed);class DemoFuroDataInputTogether extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
        <furo-vertical-flex>
            <h2>Demo furo-data-text-input</h2>
            <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                The labels, hints, defaults are comming from the furo-data-object specs.</p>
            <furo-demo-snippet flex>
                <template>
                    <furo-form-layouter four>

                        <furo-data-text-input leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>

                        <furo-data-number-input leading-icon="apps"  autofocus ƒ-bind-data="--entity(*.furo_data_number_input)" min="4"
                                                max="7" trailing-icon="apps"></furo-data-number-input>
                        <furo-data-date-input leading-icon="apps"  ƒ-bind-data="--entity(*.furo_data_date_input)"
                                              trailing-icon="apps"></furo-data-date-input>
                        <furo-data-color-input  leading-icon="apps"  ƒ-bind-data="--entity(*.furo_data_color_input)"
                                                trailing-icon="apps"></furo-data-color-input>
                        
                        <furo-data-text-input leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>
                        
                        <furo-data-display  leading-icon="apps"  trailing-icon="apps"  ></furo-data-display>
                        
                        <furo-data-password-input  ƒ-bind-data="--entity(*.furo_data_password_input)" leading-icon="apps"  trailing-icon="apps" ></furo-data-password-input>
                        
                        <furo-data-range-input  ƒ-bind-data="--entity(*.furo_data_password_input)" leading-icon="apps"  trailing-icon="apps" ></furo-data-range-input>

                        <furo-data-text-input leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>
                        
                        <furo-data-reference-search leading-icon="apps" hint="custom hint"  trailing-icon="apps"></furo-data-reference-search>

                        <furo-data-search-search leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*)"
                                                    trailing-icon="apps"></furo-data-search-search>

                        <furo-data-textarea-input leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_textarea_input)"
                                              trailing-icon="apps"></furo-data-textarea-input>

                        <furo-data-text-input leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>
                        <furo-data-checkbox-input  hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                ></furo-data-checkbox-input>

                        <furo-data-radio-button-input  hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                 ></furo-data-radio-button-input>

                        <furo-data-time-input leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_time_input)"
                        trailing-icon="apps"></furo-data-time-input>

                        
                    </furo-form-layouter>
                    <p>condensed</p>
                    <furo-form-layouter four>

                        <furo-data-text-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>

                        <furo-data-number-input condensed leading-icon="apps"  autofocus leading-icon="dashboard" ƒ-bind-data="--entity(*.furo_data_number_input)" min="4"
                                                max="7" trailing-icon="apps"></furo-data-number-input>
                        <furo-data-date-input condensed leading-icon="apps"  ƒ-bind-data="--entity(*.furo_data_date_input)"
                                              trailing-icon="apps"></furo-data-date-input>
                        <furo-data-color-input condensed  leading-icon="apps"  ƒ-bind-data="--entity(*.furo_data_color_input)"
                                                trailing-icon="apps"></furo-data-color-input>

                        <furo-data-text-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>

                        <furo-data-display  condensed leading-icon="apps"  trailing-icon="apps"  ></furo-data-display>

                        <furo-data-password-input condensed  ƒ-bind-data="--entity(*.furo_data_password_input)" leading-icon="apps"  trailing-icon="apps" ></furo-data-password-input>

                        <furo-data-range-input condensed  ƒ-bind-data="--entity(*.furo_data_password_input)" leading-icon="apps"  trailing-icon="apps" ></furo-data-range-input>

                        <furo-data-text-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>
                        
                        <furo-data-reference-search condensed leading-icon="apps" hint="custom hint"  trailing-icon="apps"></furo-data-reference-search>

                        <furo-data-search-search condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_search_input)"
                                                 trailing-icon="apps"></furo-data-search-search>

                        <furo-data-textarea-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_textarea_input)"
                                                  trailing-icon="apps"></furo-data-textarea-input>

                        <furo-data-text-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_text_input)"
                                              trailing-icon="apps"></furo-data-text-input>
                        <furo-data-checkbox-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                  trailing-icon="apps"></furo-data-checkbox-input>

                        <furo-data-radio-button-input  condensed hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                        ></furo-data-radio-button-input>
                        
                        <furo-data-time-input condensed leading-icon="apps" hint="custom hint" required ƒ-bind-data="--entity(*.furo_data_time_input)"
                        trailing-icon="apps"></furo-data-time-input>


                    </furo-form-layouter>

                    <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                      ƒ-inject-raw="--response(*.data)"></furo-data-object>
                    
                    <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

                    <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                                      ƒ-inject-raw="--response(*.data)"></furo-data-object>
                    <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                    <furo-entity-agent service="ExperimentService"
                                       ƒ-hts-in="--hts"
                                       load-on-hts-in
                                       ƒ-bind-request-data="--entity"
                                       @-response="--response">
                    </furo-entity-agent>

                    <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_text_input","description":"pattern not match"}'></simulate-error>


                </template>

            </furo-demo-snippet>
        </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-input-together",DemoFuroDataInputTogether);class DemoFuroDataMoneyInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-money-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>

              <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)"></furo-data-money-input>
            </furo-horizontal-flex>
              
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>
            <simulate-error ƒ-bind-data="--entity" error='{"field":"furo_data_money_input","description":"custom error"}'></simulate-error>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-money-input",DemoFuroDataMoneyInput);class DemoFuroDataCollectionDropdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
        <furo-vertical-flex>
            <div><h2>Demo furo-data-collection-dropdown</h2>
                <p>this demo show you how to bind a type to collection dropdown and how inject the collection data</p>

            </div>
            <furo-demo-snippet flex>
                <template>

                    <furo-horizontal-flex>

                        <furo-data-collection-dropdown hint="hint override" leading-icon="mail" trailing-icon="fingerprint"
                                                       label="Use phone as display"
                                                       subfield="id"
                                                       subfield-display="description"
                                                       ƒ-inject-entities="--response(*.entities)"
                                                       ƒ-bind-data="--entity"></furo-data-collection-dropdown>

                        <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"
                                                       display-field="description"
                                                       ƒ-inject-entities="--response(*.entities)"
                                                       ƒ-bind-data="--entity"></furo-data-collection-dropdown>

                    </furo-horizontal-flex>

                    <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>

                    <furo-collection-agent service="TaskService"
                                           ƒ-hts-in="--hts"
                                           ƒ-list="--load"
                                           @-response="--response">
                    </furo-collection-agent>


                    <furo-location @-location-changed="--locationChanged"></furo-location>

                    <furo-deep-link service="TaskService" @-hts-out="--hts" ƒ-qp-in="--locationChanged(*.query)"></furo-deep-link>

                    <furo-button raised label="load" @-click="--load"></furo-button>

                </template>
            </furo-demo-snippet>
        </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-collection-dropdown",DemoFuroDataCollectionDropdown);class DemoFuroDataCollectionReferenceDropdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-collection-reference-dropdown</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>

                <furo-data-collection-dropdown hint="hint override" leading-icon="mail" trailing-icon="fingerprint"
                                               label="default list from spec"
                                               ƒ-inject-entities="--response(*.entities)"
                                               ƒ-bind-data="--entity(*.owner)"></furo-data-collection-dropdown>

                <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"
                                               display-field="phone_nr"
                                               label="Use phone as display"
                                               ƒ-inject-entities="--response(*.entities)"
                                               ƒ-bind-data="--entity(*.owner.id)"></furo-data-collection-dropdown>
                
                </furo-horizontal-flex>

                <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
  
                <furo-collection-agent service="PersonService"
                                       ƒ-hts-in="--entity(*.owner.link._value)"
                                       ƒ-list="--load"
                                       @-response="--response">
                </furo-collection-agent>
                <furo-button raised label="load" @-click="--load"></furo-button>
    
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-collection-reference-dropdown",DemoFuroDataCollectionReferenceDropdown);class DemoFuroDataCollectionDropdownBindEntity extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
        <furo-vertical-flex>
            <div><h2>Demo furo-data-collection-dropdown-bind-entity</h2>
                <p>this demo show you how to bind a entity to collection dropdown without inject</p>
            </div>
            <furo-demo-snippet flex>
                <template>

                    <furo-horizontal-flex>

                        <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"
                                                       ƒ-bind-data="--entity(*.data.description)"></furo-data-collection-dropdown>

                    </furo-horizontal-flex>


                    <produce-qp-data @-data="--qp" qp={"prj":1}></produce-qp-data>

                    <furo-data-object type="project.ProjectEntity" @-object-ready="--entity"
                                      ƒ-inject-raw="--response"></furo-data-object>
                    
                    <furo-deep-link service="ProjectService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                    <furo-entity-agent service="ProjectService"
                                       ƒ-hts-in="--hts"
                                       ƒ-load="--hts"
                                       ƒ-bind-request-data="--entity"
                                       @-response="--response">
                    </furo-entity-agent>

                </template>
            </furo-demo-snippet>
        </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-collection-dropdown-bind-entity",DemoFuroDataCollectionDropdownBindEntity);class FuroDataTableToggle extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.on=!0;this.field=""}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
this._FBPAddWireHook("--Pressed",()=>{this.toggle()})}static get properties(){return{field:{type:String,attribute:!0,reflect:!0}}}static get styles(){// language=CSS
return[_furoShell.css`
                :host {
                    display: inline-block;
                }

                :host([hidden]) {
                    display: none;
                }
                :host([sortable=false]) {
                    display: none;
                }
                span{
                    margin-left: var(--spacing, 8px);
                }
            `]}/**
     * Sets an identity
     * @param name
     */setField(name){this.field=name;this.setAttribute("field",name)}attributeChangedCallback(name,oldval,newval){super.attributeChangedCallback(name,oldval,newval)}/**
     * Toggle state
     * @event descending Payload: identity
     * @event ascending Payload: identity
     */toggle(){this.on=!this.on;this.requestUpdate();if(this.on){this.dispatchEvent(new CustomEvent("ascending",{detail:this.field,bubbles:!0,composed:!0}))}else{this.dispatchEvent(new CustomEvent("descending",{detail:this.field,bubbles:!0,composed:!0}))}}/**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
         <div @-click="--Pressed">
        ${this.on?_furoShell.html`<span>&bigtriangledown;</span>`:_furoShell.html`<span>&bigtriangleup;</span>`}
        </div>
    `}}window.customElements.define("furo-data-table-toggle",FuroDataTableToggle);const tableHeaders=fields=>_furoShell.html`${fields.map(f=>_furoShell.html`<th class="head"><div class="cell">${f.meta.label}<furo-data-table-toggle sortable="${f.sortable}" field="${f.id}"></furo-data-table-toggle></div></th>`)}`,tdWRepeat=fields=>_furoShell.html`
  ${fields.map(f=>_furoShell.html`
    ${f.meta.repeated?_furoShell.html`<td><div class="cell">
        <template is="flow-repeat" ƒ-inject-items="${f.wire}" internal-wire="--internal">
        <div ƒ-.inner-text="--internal(*.item.display_name)"></div>
        </template>
`:_furoShell.html`<td><div class="cell" ƒ-.inner-text="${f.wire}"></div></td>`}
  `)}
  
`;/**
    * `furo-data-table`
    * Read only data table based on the response type from the rest api spec.
    *
    * ```
    * <furo-data-table type="project.Project"
    *                  ƒ-bind-data="--data"></furo-data-table>
    * ```
    *
    * Custom property | Description | Default  | Fallback
    * ----------------|-------------|----------|----------
    * `--furo-data-table-background` | Background color of the element | --surface | transparent
    * `--furo-data-table-on-background` | Color of the element | --on-surface | black
    * `--furo-data-table-select-background` | Background color of the focused table row element | --accent-light | lightgrey
    * `--furo-data-table-select-on-background` | Color of the focused table row element | --on-accent | black
    *
    * Configuration:
    * Attribute: hide-header | hides the table header row
    *
    * Tags: data-ui
    *
    * @summary datatable
    * @demo demo-furo-data-table Simple data table demo
    * @customElement
    * @mixes FBP
    */class FuroDataTable extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Fired when a table row has been selected.
   * Payload: Entity
   * @event tablerow-selected
   */ /**
       * Fired when inject data has successfully finished.
       * Payload: this
       * @event data-loaded
       */ /**
           * Fired when context menu is requested
           * Payload: entity
           * @event contextmenu-requested
           */ /**
               * Fired when a key was pressed
               * Payload: KeyboardEvent
               * @event key-pressed
               */ /**
                   * Fired when a row is checked or unchecked
                   * Payload: Array of raw Entities
                   * @event checkstate-changed
                   */constructor(){super();this._specs=_furoShell.Env.api.specs;this.type="";this.fields="";this.sortableFields="";/**
                               * Column meta information
                               * used to render all the column stuff
                               * @type {Array}
                               */this.cols=[];this._selectedIndex=-1;this.hideHeader=!1;this._checkedRows=[];this._collection=[];this._FBPAddWireHook("--rowCheckChanged",r=>{if("INPUT"===r.composedPath()[0].nodeName){if(r.composedPath()[0].checked){this._checkedRows.push(this._collection.rawEntity.entities[this._selectedIndex])}else{this._checkedRows.pop(this._collection.rawEntity.entities[this._selectedIndex])}}this.dispatchEvent(new CustomEvent("checkstate-changed",{detail:this._checkedRows,bubbles:!0,composed:!0}))})}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady()}static get properties(){return{/**
       * Typedefinition of row items
       * REST SPEC Type
       * e.g. task.Task.[type]
       */type:{type:String,attribute:"type"},/**
       * list of fields which columns should be displayed
       * comma separated field list
       */fields:{type:String,attribute:"fields",reflect:!0},/**
       * list of sortable fields
       * comma separated field list
       */sortableFields:{type:String,attribute:"sortable-fields",reflect:!0},/**
       * Flag to show table header information
       * TRUE => shows header
       */hideHeader:{type:Boolean,attribute:"hide-header"}}}/**
     * Theme data or default style
     * @returns {*|CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`

            :host {
                display: block;
                height: 100%;
                background-color: var(--furo-data-table-background, var(--surface, transparent));
                color: var(--furo-data-table-on-background, var(--on-surface, black));
            }

            :host([hidden]) {
                display: none;
            }

            :host([hide-header]) thead {
                display: none;
            }

            table {
                table-layout: fixed;
                display: block;
                width: 0;
                border-spacing: 0;
                padding: 0;
                margin-bottom: var(--spacing, 8px);
            }

            th {
                color: var(--primary, #035CA1);
                white-space: nowrap;
                font-weight: 400;
                padding-left: 0;
                -webkit-font-smoothing: antialiased;
                text-align: left;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                font-size: 10px;
            }

            tr {
                outline: none;
                line-height: 40px;
                position: relative;
            }

            tr:nth-child(even) {
                /** add here zebra style */
            }

            tbody tr:hover {
                box-shadow: inset 1px 0 0 var(--furo-data-table-select-background, var(--accent-light, lightgrey)), inset -1px 0 0 var(--furo-data-table-select-background, var(--accent-light, lightgrey)), 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
                z-index: 1;
            }

            td {
                vertical-align: baseline;
            }

            .head:hover {
                cursor: pointer;
            }

            .cell {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                padding-right: var(--spacing, 12px);
            }

            .fx {
                display: block;
                width: var(--spacing, 12px);
                padding-right: var(--spacing, 12px);
                padding-left: var(--spacing, 12px);
                outline: none;
            }

            tbody tr[selected=true] {
                background-color: var(--furo-data-table-select-background, var(--accent-light, lightgrey));
                color: var(--furo-data-table-select-on-background, var(--on-accent, black));
            }

            input[type=checkbox] {
                opacity: .48;
            }

            *[hidden] {
                display: none;
            }

            .table-container {
                overflow-x: auto;
            }

        `}set type(type){if(this._type){this._checkType(type)}this._type=type}attributeChangedCallback(name,oldval,newval){super.attributeChangedCallback(name,oldval,newval);if(newval!==oldval){switch(name){case"fields":{this._init(newval);break}case"sortable-fields":{this._applySortableFields(newval);break}}}}/**
     * SPEC Type checker
     * Builds the column Array for the inner template
     * @param type
     * @private
     */_checkType(type){if(this._specs[type]===void 0){/**
       * @event spec-error
       * Fired when spec could not be loaded
       * detail payload: {string} spec name
       */let customEvent=new Event("spec-error",{composed:!0,bubbles:!0});customEvent.detail=type;setTimeout(()=>{this.dispatchEvent(customEvent);console.warn("spec-error: Could not find specification of type: "+type)},0)}}/**
     * Prepare columns form attribute fields
     * @param fields
     * @private
     */_init(fields){if(fields&&fields.length){let cols=fields.replace(/ /g,"").split(",");if(0<cols.length){this.cols=[];cols.forEach(c=>{this._internalAddColumn(c)})}}}/**
     * parses the attribute sortable-fields
     * and creates an internal array of sortable fields
     * @param fields
     * @private
     */_applySortableFields(fields){if(fields&&fields.length){let sortableCols=fields.replace(/ /g,"").split(",");sortableCols.forEach(f=>{let column=this.cols.filter(obj=>{return obj.id===f});column[0].sortable=!0})}}/**
     * Internal addColumn
     */_internalAddColumn(c){if(this._specs[this._type].fields[c]){let field={};if(this._specs[this._specs[this._type].fields[c].type]===void 0){field.wire="--internal(*.item.data."+c+")"}else{// append .display_name if the field type is a registered  type in data_environment
field.wire="--internal(*.item.data."+c+".display_name)"}// Special treatment for repeated fields
if(this._specs[this._type].fields[c].meta&&this._specs[this._type].fields[c].meta.repeated){field.wire="--internal(*.item.data."+c+".repeats)"}field.sortable=!1;field.meta=this._specs[this._type].fields[c].meta||{};field.contraints=this._specs[this._type].fields[c].contraints||{};field.id=c;this.cols.push(field)}this.requestUpdate()}/**
     * add new column
     */addColumn(field){this.fields=this.fields.concat(","+field);this._init(this.fields)}/**
     * remove column by name
     * e.g. removeColumn('id');
     * @param field
     */removeColumn(field){this.fields=this.fields.replace(","+field,"");this.cols=[];this._init(this.fields)}/**
     * Event listening and type check
     * @private
     * @param changedProps
     */firstUpdated(changedProps){super.firstUpdated(changedProps);// queueing
if(this._type){this._checkType(this._type)}this.shadowRoot.querySelector("tbody").onclick=e=>{this._selectRow(e)};this.shadowRoot.querySelector("tbody").onkeydown=e=>{this._navigate(e)};this.shadowRoot.querySelector("tbody").onkeypress=e=>{this.dispatchEvent(new CustomEvent("key-pressed",{detail:e,bubbles:!1,composed:!0}))};this.shadowRoot.querySelector("tbody").oncontextmenu=e=>{e.preventDefault();this.dispatchEvent(new CustomEvent("contextmenu-requested",{detail:this._collection.rawEntity.entities[e.target.parentElement.rowIndex],bubbles:!1,composed:!0}))}}/**
     * Triggers wire name --focus for internal use
     */focus(){this._selectRowByIndex(0);this._FBPTriggerWire("--focus")}/**
     * Binds data-object to data-table
     * @param {CollectionNode} collectionNode
     */bindData(collectionNode){this._collection=collectionNode;/**
                                        * new data arrived from CollectionNode
                                        */this._collection.addEventListener("data-injected",data=>{this.data=data.detail.entities.repeats;this._FBPTriggerWire("--collectionData",data.detail.entities.repeats)});this.dispatchEvent(new CustomEvent("data-loaded",{detail:this,bubbles:!0,composed:!0}))}/**
     * Template rendering
     * @private
     * @returns {TemplateResult|TemplateResult}
     */render(){//language=HTML
return _furoShell.html`
        <div class="table-container">
            <table @-input="--rowCheckChanged(*)">
                <thead>
                    <tr>
                        <th class="fx"></th>
                        ${tableHeaders(this.cols)}
                    </tr>
                </thead>
                <tbody>
                    <template is="flow-repeat" ƒ-inject-items="--collectionData" internal-wire="--internal">
                        <tr tabindex="0" draggable="true">
                            <td class="fx">
                                <div><input type="checkbox"></div>
                            </td>
                            ${tdWRepeat(this.cols)}
                             <span hidden></span>                     
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>`}/**
     * Handles key navigation
     * @param e
     * @private
     */_navigate(e){let allTr=this.shadowRoot.querySelector("tbody").querySelectorAll("tr");switch(e.key){case"ArrowUp":if(0<=this._selectedIndex){this._selectRowByIndex(this._selectedIndex-1)}break;case"ArrowDown":if(allTr.length>this._selectedIndex){this._selectRowByIndex(this._selectedIndex+1)}break;case"Enter":this.dispatchEvent(new CustomEvent("tablerow-selected",{detail:this._collection.rawEntity.entities[this._selectedIndex],bubbles:!0,composed:!0}));break;}}/**
     * Handles table row select
     * @private
     * @param e
     */_selectRow(e){let allTr=this.shadowRoot.querySelector("tbody").querySelectorAll("tr"),len=allTr.length;while(len--){allTr[len].setAttribute("selected",!1)}if(0<=e.target.parentElement.parentNode.rowIndex){e.target.parentElement.parentNode.setAttribute("selected",!0);this._selectedIndex=e.target.parentElement.parentNode.rowIndex-1;if("click"===e.type){this.dispatchEvent(new CustomEvent("tablerow-selected",{detail:this._collection.rawEntity.entities[this._selectedIndex],bubbles:!0,composed:!0}))}}else if("INPUT"===e.target.nodeName&&0<=e.target.parentNode.parentElement.parentElement.rowIndex){this._selectedIndex=e.target.parentNode.parentElement.parentElement.rowIndex-1}}/**
     * Comfort function to select a specific table row
     * by index
     * @param idx
     * @private
     */_selectRowByIndex(idx){let allTr=this.shadowRoot.querySelector("tbody").querySelectorAll("tr");if(0<=idx&&1<allTr.length&&idx<allTr.length){let len=allTr.length;while(len--){allTr[len].setAttribute("selected",!1)}allTr[idx].setAttribute("selected",!0);this._selectedIndex=idx}}}window.customElements.define("furo-data-table",FuroDataTable);class DemoFuroDataTable extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||[_furoShell.css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }

        `,_furoShell.Styling.theme]}constructor(){super()}_FBPReady(){super._FBPReady();//this._FBPTraceWires();
}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <furo-vertical-flex>
                <div>
                    <h2>furo-data-table playground</h2>

                </div>
                <furo-card header-text="Project Overview" secondary-text="All your project data" class="flex">

                    <furo-data-table type="project.Project" fields="display_name, members, start,end,cost_limit" sortable-fields="cost_limit,start"
                                     ƒ-bind-data="--data" @-tablerow-selected="--rowSelected"></furo-data-table>
                    
                    <furo-horizontal-flex space slot="action">
                        <furo-button label="List data" primary @-click="--btnListClicked"></furo-button>
                    </furo-horizontal-flex>
                </furo-card>

                <furo-pretty-json ƒ-inject-data="--rowSelected"></furo-pretty-json>
            </furo-vertical-flex>

            <furo-deep-link ƒ-trigger="--btnListClicked" service="ProjectService" @-hts-out="--hts"></furo-deep-link>
            <furo-collection-agent service="ProjectService"
                                   ƒ-hts-in="--hts"
                                   list-on-hts-in
                                   @-response-hts-updated="--responseHts"
                                   @-response="--collectionResponse">
            </furo-collection-agent>

            <furo-data-object type="project.ProjectCollection"
                              ƒ-inject-raw="--collectionResponse"
                              @-object-ready="--data">
            </furo-data-object>

        `}}window.customElements.define("demo-furo-data-table",DemoFuroDataTable);class DemoFuroMarkdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow: auto;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-markdown</h2>
      <p>If unsafe is not set, html will not be rendered</p>
      <furo-demo-snippet source>
        <template>
          <furo-markdown mdsrc="/_page/markdown/demo.md"></furo-markdown>
        </template>
      </furo-demo-snippet>     
      
      <h2>Demo furo-markdown unsafe</h2>
      <p>If unsafe is not set, html will not be rendered</p>
      <furo-demo-snippet source>
        <template>
          <furo-markdown unsafe mdsrc="/_page/markdown/demo.md"></furo-markdown>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-markdown",DemoFuroMarkdown);class ProduceData extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",this.produce)}_FBPReady(){super._FBPReady();if(this.auto){this.produce()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */auto:{type:Boolean}}}produce(){/**
     * @event data
     * Fired when
     * detail payload:
     */return fetch("/mockdata/trees/1/testdata.json").then(res=>res.json()).then(data=>{this.data=data;let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=this.data;this.dispatchEvent(customEvent)})}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-button label="create tree data"></furo-button>
    `}}window.customElements.define("produce-data",ProduceData);class DemoFuroPrettyJson extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet{
            height: 500px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-pretty-json</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <produce-data @-data="--data"></produce-data>
          <furo-vertical-scroller>
          <furo-pretty-json ƒ-inject-data="--data"></furo-pretty-json>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-pretty-json",DemoFuroPrettyJson);class FuroAppFlowRouter extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.style.display="none";/**
                                  * A regexp that defines the set of URLs that should be considered part
                                  * of this web app.
                                  *
                                  * Clicking on a link that matches this regex won't result in a full page
                                  * navigation, but will instead just update the URL state in place.
                                  *
                                  * This regexp is given everything after the origin in an absolute
                                  * URL. So to match just URLs that start with /app/ do:
                                  *     url-space-regex="^/app/"
                                  *
                                  * @type {string|RegExp}
                                  */this.urlSpaceRegex=this.getAttribute("url-space-regex")||"/"}/**
     * trigger a history back
     */back(){window.history.back()}/**
     * trigger a history forward
     */forward(){window.history.forward()}static get properties(){return{/**
       *Configuration Array
       *
       * | current   | flow-event-name      | target      | [mapping]          |
       * |:----------|:---------------------|:------------|:-------------------|
       * | view-main | form-complete        | detail-view | from => to         |
       * | *         | menu-settings-click  | settings    |                    |
       * | *         | all-fields-req       | all-qps     |        *           |
       * | *         | some-fields-req      | some-qps    | a=>b,x=>id,c=>item |
       *
       *
       *
       *  [['view-main', 'button-tap', 'detail-view',  'task => id]]
       *  if the current view is view-main and the flow-event-name is 'form-complete', the view switches to detail-view and data.from is mapped to "to".
       *
       *  Special configurations:
       *
       *  - Set a "*" to map all data 1:1 to the url.
       *
       *  - You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
       */config:{type:Array}}}/**
     * Trigger the router
     * @param flowEvent
     * @return {boolean}
     */trigger(flowEvent){let currentPath=window.location.pathname.replace(new RegExp(this.urlSpaceRegex),""),match=window.location.pathname.match(new RegExp(this.urlSpaceRegex)),prefix=match[0]||"/",selection=this._configObject[currentPath+flowEvent.event]||this._configObject["*"+flowEvent.event];if(selection){let search="";if(selection.mapping){// map everything
if("*"===selection.mapping){let sa=[];for(let k in flowEvent.data){sa.push(k+"="+flowEvent.data[k])}if(0<sa.length){search="?"+sa.join("&")}}else{// selective mapping
let mappings=selection.mapping.split(",").map(function(cnf){return cnf.split("=>").map(function(c){return c.trim()})}),sa=[];mappings.forEach(qpMap=>{// map flowevent.data.xx to yy
if(flowEvent.data[qpMap[0]]){sa.push(qpMap[1]+"="+flowEvent.data[qpMap[0]])}});if(0<sa.length){search="?"+sa.join("&")}}}if("HISTORY-BACK"===selection.target){this.back()}else{window.history.pushState({},"",prefix+selection.target+search);/**
                                                                               * Internal notyfication
                                                                               * @private
                                                                               */let now=window.performance.now(),customEvent=new Event("__furoLocationChanged",{composed:!0,bubbles:!0});customEvent.detail=now;this.dispatchEvent(customEvent)}/**
         * @event view-changed
         * Fired when page was changed
         * detail payload: flowEvent
         */let customEvent=new Event("view-changed",{composed:!0,bubbles:!0});customEvent.detail=flowEvent;this.dispatchEvent(customEvent);return!0}/**
       * @event event-not-found
       * Fired when view not
       * detail payload: flowEvent
       */let customEvent=new Event("event-not-found",{composed:!0,bubbles:!0});customEvent.detail=flowEvent;this.dispatchEvent(customEvent);return!1}/**
     * build internal config for faster access
     */set config(configArray){this._configObject={};let self=this;// build config object for faster checks
configArray.forEach(config=>{this._configObject[config[0]+config[1]]={target:config[2],mapping:config[3]}})}}window.customElements.define("furo-app-flow-router",FuroAppFlowRouter);class panelRegistry{static registerType(type,panel){this._registry[type]=panel}static getPanelName(type,suffix){if(suffix){if(this._registry[type]){return this._registry[type][suffix]}else{console.warn("type is not registred:",type,suffix);return}}if(this._registry[type]){return this._registry[type]}else{console.warn("type is not registred:",type);return}}}_exports.panelRegistry=panelRegistry;panelRegistry._registry={};var panelRegistry$1={panelRegistry:panelRegistry};_exports.$panelRegistry=panelRegistry$1;class FuroPanelCoordinator extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._openPanels=[];this._furoPage=this.parentNode}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady()}_notifiyOpenPanels(){/**
     * @event controls-ready
     * Fired when Controls for panels are ready, initially it starts with an empty set
     *
     * detail payload: RepeaterNode with navigation nodes
     */let customEvent=new Event("panels-changed",{composed:!0,bubbles:!0});customEvent.detail=this._openPanels;this.dispatchEvent(customEvent)}showPage(NavigationNode){var _this=this;return babelHelpers.asyncToGenerator(function*(){let panelName="P"+NavigationNode.id._value;if(-1===_this._openPanels.indexOf(NavigationNode)){let panelComponent=panelRegistry.getPanelName(NavigationNode.link.type._value,NavigationNode.panel._value);if(panelComponent){//create element and set name,...
let panel=document.createElement(panelComponent);if(panel.closePanel){panel.setAttribute("name",panelName);panel.setAttribute("hidden","");panel._TreeNode=NavigationNode;panel.removePanel=()=>{_this._removeNodeById(NavigationNode.id._value)};_this._openPanels.push(NavigationNode);_this._furoPage.appendChild(panel);yield panel.updateComplete;// trigger the --navNode wire on panel
if(panel._FBPTriggerWire){panel._FBPTriggerWire("--navNode",NavigationNode)}}else{console.warn("panel does not have a closePanel method, implement panel interfaces or extend from BasePanel.js")}}else{console.warn(NavigationNode.link.type._value,NavigationNode.panel._value,"is not in the registry",_this)}}// activate the panel
_this._notifiyOpenPanels();_this._furoPage.activatePage(panelName)})()}/**
     * closes all open panels
     */closeAll(event){this._openPanels.forEach(panel=>{panel.dispatchNodeEvent(new NodeEvent("close-requested",this,!1))})}/**
     * removes a panel from the view
     * @param nodeName
     * @private
     */_removeNodeById(id){let nodeName="P"+id,e=this._furoPage.querySelector("*[name="+nodeName+"]");// remove from dom
e.remove();// remove from flat tree
this._openPanels=this._openPanels.filter((node,index)=>{return"P"+node.id._value!==nodeName});if(0<this._openPanels.length){// select item with same index
this._openPanels[this._openPanels.length-1].selectItem()}else{//enable default page
this._furoPage.activatePage("overview")}this._notifiyOpenPanels()}_activatePanelForNode(node){let name=node.id._value;// register node
if(-1===this._openPanels.indexOf(node)){let panelComponent=panelRegistry.getPanelName(node.link.type._value,this._panel);if(panelComponent){//create element and set name,...
let panel=document.createElement(panelComponent),panelName="P"+name;panel.setAttribute("name",panelName);panel._TreeNode=node;panel.removePanel=()=>{this._removeNodeByName(panelName)};this._openPanels.push(node);this._furoPage.appendChild(panel)}else{console.warn(node.link.type._value,"is not in the registry",this)}}// microtask
setTimeout(()=>{let currentPanel=this._furoPage.activatePage("P"+name);if(currentPanel&&currentPanel._FBPTriggerWire!==void 0){if(!currentPanel.__panelInitSent){currentPanel._FBPTriggerWire("--panelInit",node.link._value);currentPanel._FBPTriggerWire("--treeNode",node);currentPanel.__panelInitSent=!0}currentPanel._FBPTriggerWire("--panelActivated",node.link._value)}},0)}}window.customElements.define("furo-panel-coordinator",FuroPanelCoordinator);class FuroQpChanger extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @private
   * @return {Object}
   */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}setQp(newQP){// read current qp and update incomming qp
let newQuery=window.location.search.slice(1),queryObject={};if(0<newQuery.length){newQuery.split("&").forEach((qstr,i,a)=>{let p=qstr.split("=");queryObject[p[0]]=p[1]})}for(let param in newQP){queryObject[param]=newQP[param]}let qp=[];for(let segment in queryObject){if(queryObject.hasOwnProperty(segment)){qp.push(segment+"="+queryObject[segment])}}// notify furo location
window.history.pushState({},"",window.location.pathname+"?"+qp.join("&")+window.location.hash);let now=window.performance.now(),customEvent=new Event("__furoLocationChanged",{composed:!0,bubbles:!0});customEvent.detail=now;this.dispatchEvent(customEvent)}}window.customElements.define("furo-qp-changer",FuroQpChanger);class BasePanel extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              * Callback function to interact with close requests
              * Return a true if closing is allowed or false if not
              *
              * @return {boolean}
              */this.onCloseRequest=e=>{return!0};/**
        * Attach the close-requested listener to the nav node. So you can trigger a close-requested from another location like tab-bar,...
        */this._FBPAddWireHook("--navNode",fieldNode=>{this.treeNode=fieldNode;fieldNode.addEventListener("close-requested",e=>{if(this.onCloseRequest(e)){this.closePanel()}})});/**
         * closes the panel directly on internal events, stops the propagation to make it possible to have nested panels
         */this.addEventListener("close-immediately-request",e=>{e.stopPropagation();this.closePanel()});/**
         * Register hook on wire --panelCloser to
         * close the panel with a wire
         */this._FBPAddWireHook("--panelCloser",e=>{this.closePanel()})}/**
     * Close the panel
     */closePanel(){if(this.treeNode){this.treeNode.selectItem();this.removePanel()}}}_exports.BasePanel=BasePanel;var BasePanel$1={BasePanel:BasePanel};_exports.$BasePanel=BasePanel$1;class ExamplePanel extends BasePanel{constructor(){super();// register the close
// todo: do some checks
this._FBPAddWireHook("--navNode",treeNode=>{this.treeNode=treeNode;treeNode.addEventListener("close-requested",()=>{this.treeNode.selectItem();this.removePanel()},{once:!0})})}/**
       * @private
       * @return {Object}
       */static get properties(){return{/**
       * Description
       */name:{type:String}}}/**
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
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <p>I am a example-panel component with name ${this.name}</p>
      <furo-pretty-json ƒ-inject-data="--panelActivated"></furo-pretty-json>
    `}}window.customElements.define("example-panel",ExamplePanel);class ExamplePanelB extends BasePanel{constructor(){super();// register the close
// todo: do some checks
this._FBPAddWireHook("--navNode",treeNode=>{this.treeNode=treeNode;treeNode.addEventListener("close-requested",()=>{this.treeNode.selectItem();let result=window.confirm("Sie haben ungespeicherte daten, Wirklich schliessen?");if(result){this.removePanel()}})})}/**
       * @private
       * @return {Object}
       */static get properties(){return{/**
       * Description
       */name:{type:String}}}/**
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
            background-color: #ebe34b;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <p>I am a example-panel-b component with name ${this.name}</p>
      
      <furo-pretty-json ƒ-inject-data="--panelActivated"></furo-pretty-json>
      <button @-click="-^close-panel-requested(name)">close</button>
    `}}window.customElements.define("example-panel-b",ExamplePanelB);class EditExample extends BasePanel{constructor(){super();this._FBPAddWireHook("--navNode",fieldNode=>{})}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
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
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
      <p>Edit Panel</p>
      <furo-pretty-json ƒ-inject-data="--navNode(*._value)">
        
      </furo-pretty-json>
    `}}window.customElements.define("edit-example",EditExample);class FuroPanelCoordinatorTabItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.selected=!1;this.hovered=!1;this.inedit=!1;this.haserror=!1;this.addEventListener("click",e=>{this.field.selectItem()})}bindData(fieldNode){this.field=fieldNode;this.field.addEventListener("this-node-selected",n=>{this.selected=!0});this.field.addEventListener("tree-node-unselection-requested",n=>{this.selected=!1});this.field.addEventListener("modified",n=>{this.inedit=!0});this.field.addEventListener("has-error",n=>{this.haserror=!0})}_closeTab(e){e.stopPropagation();this.field.dispatchNodeEvent(new NodeEvent("close-requested",this,!1))}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */selected:{type:Boolean,reflect:!0},haserror:{type:Boolean,reflect:!0},inedit:{type:Boolean,reflect:!0}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
            line-height: 38px;

            border-bottom: 2px solid var(--surface, #FAFAFA);
            transition: all 0.5s;
            cursor: pointer;
            position: relative;
            min-width: 136px;

            font-family: "Roboto", "Noto", sans-serif;

            color: var(--on-surface);
            
            text-transform: uppercase;

        }


        :host([inedit]) {
            font-style: italic;
        }

        :host([haserror]) {
            color: var(--error, red);
        }

        :host([hidden]) {
            display: none;
        }

        :host([selected]) {
            border-bottom: 2px solid var(--separator, #686868);
        }

       
        .label{
            padding: 0 var(--furo-button-padding, var(--spacing-s, 16px));;
            text-align: center;
        }
        .close{
            color:var(--separator)
        }  
        
        .close:hover{
            color:var(--primary)
        }
        furo-icon{
            margin-bottom: 2px;
            margin-right: var(--spacing-s);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<furo-horizontal-flex>
   <div flex class="label"> <furo-icon ?hidden="${this.noicon}" icon="${this.field.icon}" ?error="${this.field.has_error._value}"></furo-icon> ${this.field.display_name} </div>
   
   <furo-ripple></furo-ripple>
</furo-horizontal-flex>
       
    `}}window.customElements.define("furo-panel-coordinator-tab-item",FuroPanelCoordinatorTabItem);class FuroPanelCoordinatorTabs extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.tabindex=0;this._hoverIndex=0;// keyboard navigation
this.addEventListener("keydown",event=>{let key=event.key||event.keyCode;switch(key){case"Enter":event.preventDefault();// open the hovered field
this._tabs[this._hoverIndex].selectItem();break;case"ArrowLeft":event.preventDefault();if(0===this._hoverIndex){// hover last item
this._hoverIndex=this._tabs.length-1}else{this._hoverIndex--}this._tabs[this._hoverIndex].selectItem();break;case"ArrowRight":event.preventDefault();if(this._hoverIndex===this._tabs.length-1){// hover first item
this._hoverIndex=0}else{this._hoverIndex++}this._tabs[this._hoverIndex].selectItem();break;case"Escape":event.stopPropagation();event.preventDefault();this._escape(event);break;}});// keyboard navigation
this.addEventListener("keyup",event=>{let key=event.key||event.keyCode;switch(key){case"Escape"://safari :-((
event.stopPropagation();event.preventDefault();break;}});// keyboard navigation
this.addEventListener("keypress",event=>{let key=event.key||event.keyCode;switch(key){case"Escape"://safari :-((
event.stopPropagation();event.preventDefault();break;// close tab
case"c":this._hoverIndex=0;this._tabs.forEach((e,i)=>{if(e._isSelected){this._hoverIndex=i}});this._tabs[this._hoverIndex]._isSelected=!1;this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent("close-requested",this,!1));if(0===this._tabs.length){this._escape(event);this.setAttribute("hidden","")}break;case"m":this._hoverIndex=0;this._tabs.forEach((e,i)=>{if(e._isSelected){this._hoverIndex=i}});this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent("modified",this,!1));break;case"e":this._hoverIndex=0;this._tabs.forEach((e,i)=>{if(e._isSelected){this._hoverIndex=i}});this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent("has-error",this,!1));break;case"r":this._hoverIndex=0;this._tabs.forEach((e,i)=>{if(e._isSelected){this._hoverIndex=i}});this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent("bereinigt",this,!1));break;}});// hover selected
this.addEventListener("focus",e=>{// find selected tab and set hover index
this._hoverIndex=0;this._tabs.forEach((e,i)=>{if(e._isSelected){this._hoverIndex=i}});this._tabs[0].__parentNode.broadcastEvent(new NodeEvent("tab-unhover-requested",this));this._tabs[this._hoverIndex].dispatchNodeEvent(new NodeEvent("this-tab-hover-requested",this,!1))})}_escape(event){/**
     * @event escape
     * Fired when Escape was pressed
     * detail payload: keyEvent
     */let customEvent=new Event("escape",{composed:!0,bubbles:!0});customEvent.detail=event;this.dispatchEvent(customEvent)}injectTabs(nodeArray){this._tabs=nodeArray;this._FBPTriggerWire("--itemsInjected",nodeArray);this.removeAttribute("hidden")}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
}/**
     * focuses the element
     */focus(){super.focus()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Sets the tabindex
       */tabindex:{type:Number,reflect:!0},/**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */_searchIsActive:{type:Boolean,attribute:"searching",reflect:!0}}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                outline: none;
                position: relative;
                
                padding-left: var(--spacing-s, 24px);
            }

            :host(:focus-within) furo-panel-coordinator-tab-item[selected] {
                border-bottom: 2px solid var(--primary, #686868);
                color:  var(--primary, #686868);
            }
            
            :host(:focus-within) furo-panel-coordinator-tab-item[selected][haserror] {
                border-bottom: 2px solid var(--error, red);
            }
            furo-panel-coordinator-tab-item{
                margin: 0;
            }
            :host([hidden]) {
                display: none;
            }

        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
            <template is="flow-repeat" ƒ-inject-items="--itemsInjected" identity-path="id._value"><furo-panel-coordinator-tab-item ƒ-bind-data="--init"></furo-panel-coordinator-tab-item></template>

        `}}window.customElements.define("furo-panel-coordinator-tabs",FuroPanelCoordinatorTabs);class FuroTreeItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hidden=!0;this.isGroupLabel=!1}search(event){if(!this.hidden){let term=event.term.toLowerCase();// do not search empty searchTerm
if(0===term.length){return}let searchTokens=term.split(" "),hasResults=!0;searchTokens.forEach(t=>{if(0<t.length){if(1===t.length){// single letter search first letter of word
t=t+".*$"}hasResults=hasResults&&this._searchTokens.has(t)}});if(hasResults){// append fieldnode to result set (used in furo-tree.js)
event.results.push(this.fieldNode)}}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */hidden:{type:Boolean,reflect:!0},hovered:{type:Boolean,reflect:!0},searchmatch:{type:Boolean,reflect:!0},inedit:{type:Boolean,reflect:!0},haserror:{type:Boolean,reflect:!0},selected:{type:Boolean,reflect:!0},noicon:{type:Boolean},isGroupLabel:{type:Boolean,reflect:!0,attribute:"is-group-label"}}}// re render, build search tokens
_updateItem(){this.requestUpdate();// build index later (50ms), a human user can not react earlyer
setTimeout(()=>{let tmpArr=[];this.fieldNode.__childNodes.filter(field=>{// maybe change to fields-to-index list
if("string"===typeof field._value){return!0}}).map(field=>{tmpArr=tmpArr.concat(field._value.toLowerCase().split(/\W+/))});let s=new Set(tmpArr);// tokenize
tmpArr=[];s.forEach(word=>{//first letter
tmpArr.push(word.substr(0,1)+".*$");let l;for(let tokenLength=2;tokenLength<word.length;tokenLength++){l=word.length-tokenLength+1;for(let i=0;i<l;i++){tmpArr.push(word.substr(i,tokenLength))}}});this._searchTokens=new Set(Array.from(s).concat(tmpArr))},50)}bindData(fieldNode){this.fieldNode=fieldNode;this.fieldNode._isHidden=!0;if(fieldNode.is_group_label){this.isGroupLabel=fieldNode.is_group_label._value}if(!fieldNode.icon._value){this.noicon=!0}// reflect visible close state to attr
this.fieldNode.addEventListener("ancestor-invisible",e=>{this.hidden=!0;this.fieldNode._isHidden=!0});// reflect visible close state to attr
this.fieldNode.addEventListener("ancestor-visible",e=>{if(this.fieldNode.__parentNode.__parentNode.open._value){this.hidden=!1;this.fieldNode._isHidden=!1}});// for elements that are already ready
this._updateItem();this.fieldNode.addEventListener("branch-value-changed",e=>{// for elements that are updated later
if(e.detail.__parentNode===this.fieldNode){this._updateItem()}});this.fieldNode.addEventListener("modified",n=>{this.inedit=!0});this.fieldNode.addEventListener("has-error",n=>{this.haserror=!0});// listen to open close state
this.fieldNode.open.addEventListener("field-value-changed",e=>{e.cancelBubble=!0;if(!1===e.detail._value){e.detail.__parentNode.children.broadcastEvent(new NodeEvent("ancestor-invisible",e.detail.__parentNode))}else{e.detail.__parentNode.children.broadcastEvent(new NodeEvent("ancestor-visible",e.detail.__parentNode))}});// make first node visible
if(0===this.fieldNode.depth){this.hidden=!1;this.fieldNode._isHidden=!1}this._FBPTriggerWire("--fieldOpen",this.fieldNode.open)}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPAddWireHook("--labelClicked",e=>{if(this.isGroupLabel){// just toggle if this is a label
this.fieldNode.open._value=!this.fieldNode.open._value}else{this.fieldNode.selectItem()}});this.fieldNode.addEventListener("tree-node-unselection-requested",e=>{this.selected=!1;this.fieldNode._isSelected=!1});this.fieldNode.addEventListener("tree-node-blur-requested",e=>{this.hovered=!1});this.fieldNode.addEventListener("this-node-hovered",e=>{this.hovered=!0;//this.scrollIntoViewIfNeeded();
});this.fieldNode.addEventListener("this-node-selected",e=>{this.selected=!0;this.fieldNode._isSelected=!0;//this.scrollIntoViewIfNeeded();
});// This item is not or no more in the search results
this.fieldNode.addEventListener("search-didnt-match",e=>{this.searchmatch=!1});// This item is  in the search results
this.fieldNode.addEventListener("search-matched",e=>{this.searchmatch=!0});// This item is  in the search results
this.fieldNode.addEventListener("field-value-changed",e=>{this.requestUpdate()})}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            line-height: 40px;
            cursor: pointer;
            font-weight: 400;
            user-select: none;
            padding-left: var(--spacing-xs, 16px);
            border-radius: 2px;
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }

        :host([inedit]) {
            font-style: italic;
        }

        :host([haserror]),
        :host([selected][haserror]) {
            color: var(--error, red);
        }

        :host([haserror]) furo-icon {
            animation: error-pulse 3s infinite;
        }

        .label {
            white-space: nowrap;
            font-size: 0.875rem;
            letter-spacing: 0.2px;
            margin-left: 8px;
        }

        .desc {
            font-size: smaller;
            white-space: nowrap;
        }

        .oc {
            color: var(--separator, #b5b5b5);
            width: 12px;
            box-sizing: border-box;
            padding-left: 4px;
            font-size: 8px;
        }

        :host([selected]) .oc {
            color: var(--on-primary, white);
        }

        :host([searchmatch])::before {
            position: absolute;
            top: 8px;
            content: "🔍";
            right: 2px;
            font-size: 12px;
        }

        furo-icon[error] {
            animation: error-pulse 2s infinite;
        }

        :host([selected]) furo-icon {
            fill: var(--on-primary, white);;
        }


        furo-icon {

            transition: all 0.4s;
            width: 20px;
            height: 20px;
            margin-right: 4px;

        }

        @keyframes error-pulse {
            0% {
                fill: var(--on-primary, #46150f);
            }
            12% {
                fill: var(--error, #fc4d34);
            }
            24% {
                fill: var(--on-primary, #46150f);
            }
            36% {
                fill: var(--error, #fc4d34);
            }
            48% {
                fill: var(--on-primary, #46150f);
            }

        }

        :host([is-group-label]) {
            border-top: 1px solid var(--separator,#cdcdcd);
        }

        :host([is-group-label]) .label {
            font-weight: 500;
            font-size: 11px;
            color:var(--separator,#cdcdcd);
            text-transform: uppercase;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<furo-horizontal-flex @-dblclick="--dblclicked" @mouseenter="${e=>this.fieldNode.triggerHover()}">
      <div style="width: ${8*this.fieldNode.depth}px"></div>
      <div class="oc"><furo-data-bool-icon ?hidden="${!this.fieldNode.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-data-bool-icon></div>      
            
      <div flex class="label" @-click="--labelClicked" > <furo-icon ?hidden="${this.noicon}" icon="${this.fieldNode.icon}" ?error="${this.fieldNode.has_error._value}"></furo-icon> ${this.fieldNode.display_name} <span class="desc">${this.fieldNode.secondary_text}</span></div>
</furo-horizontal-flex>

    `}}_exports.FuroTreeItem=FuroTreeItem;window.customElements.define("furo-tree-item",FuroTreeItem);var furoTreeItem={FuroTreeItem:FuroTreeItem};_exports.$furoTreeItem=furoTreeItem;class FuroTree extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              * Flat list representation of the tree
              * @type {Array}
              * @private
              */this._flatTree=[];this.tabindex=0;this._searchTerm="";this._searchIsActive=!1;/**
                                   * If you want to use a custom component for the tree-item, set this attribute.
                                   * The default item component is **furo-tree-item**.
                                   *
                                   * @type {*|string|string}
                                   */this.treeItemComponent=this.getAttribute("tree-item-component")||"furo-tree-item";this._treeItemTepmplate=(0,_furoShell.html)([["<",this.treeItemComponent," \u0192-bind-data=\"--itemInjected(*.item)\" \u0192-search=\"--trigger\"></",this.treeItemComponent,">"].join("")]);// keyboard navigation on top node only
this.addEventListener("keydown",event=>{let key=event.key||event.keyCode;switch(key){case"Enter":event.preventDefault();// not reseting the search at this position is by intention.
if(this._hoveredField._isSelected){// openclose
this._hoveredField.toggleOpenClose()}else{// open the hovered field
this._hoveredField.selectItem()}break;case"ArrowDown":event.preventDefault();this._hoverNext();break;case"ArrowUp":event.preventDefault();this._hoverPrevious();break;case"ArrowLeft":event.preventDefault();this._resetSearch();// close when opened, parent when closed
if(!this._hoveredField.isBranch()&&this._hoveredField.open._value){this._hoveredField.toggleOpenClose()}else{this._hoverHome()}break;case"ArrowRight":event.preventDefault();this._resetSearch();// open when closed, next when opened
if(!this._hoveredField.isBranch()&&!this._hoveredField.open._value){this._hoveredField.toggleOpenClose()}else{this._hoverNext()}break;case"Escape":if(this._searchIsActive){event.stopPropagation();this._resetSearch()}break;case"Backspace":this._removeLastSymbofFromSearch();break;}});// keyboard navigation on top node only
this.addEventListener("keypress",event=>{let key=event.key||event.keyCode;if("Enter"===key){return}if(!event.ctrlKey){event.preventDefault();this._addSymbolToSearch(key)}else{switch(key){// expand recursive with ctrl-e
case"e":event.preventDefault();this._hoveredField.expandRecursive();break;}}})}_removeLastSymbofFromSearch(){this._searchTerm=this._searchTerm.substr(0,this._searchTerm.length-1);if(0===this._searchTerm.length){this._resetSearch()}else{this.searchOpenTree(this._searchTerm)}}_addSymbolToSearch(key){this._searchTerm+=key;this.searchOpenTree(this._searchTerm)}searchOpenTree(){this._searchIsActive=!0;let d={term:this._searchTerm,results:[]};this._foundSearchItems=d.results;this._FBPTriggerWire("--searchRequested",d);// select first result
if(0<d.results.length){d.results[0].triggerHover()}this._updateSearchmatchAttributesOnItems();this.requestUpdate()}_resetSearch(){this._searchIsActive=!1;this._searchTerm="";this._foundSearchItems=[];this._updateSearchmatchAttributesOnItems()}_updateSearchmatchAttributesOnItems(){this._rootNode.broadcastEvent(new NodeEvent("search-didnt-match",this._rootNode,!0));this._foundSearchItems.map(node=>{node.dispatchNodeEvent(new NodeEvent("search-matched",this._rootNode,!1))})}_hoverHome(){let parent=this._hoveredField.getParentElement();if(parent.triggerHover){parent.triggerHover()}}/**
     * hovers the previous item
     */_hoverPrevious(){let prev;if(this._searchIsActive){for(let i=0;i<this._foundSearchItems.length;i++){if(this._foundSearchItems[i].__flatTreeIndex>=this._hoveredField.__flatTreeIndex){prev=this._foundSearchItems[i-1];break}}// select last
if(!prev){prev=this._foundSearchItems[this._foundSearchItems.length-1]}}else{prev=this._hoveredField.getPrevElement()}if(prev){prev.triggerHover()}}qpIn(qpObject){if(qpObject[this.qp]){this.selectById(qpObject[this.qp])}}/**
     * Inject a location object, which contains a query param property to select the current node.
     * @param locationObject
     * @return {*|boolean}
     */locationIn(locationObject){if(locationObject.query[this.qp]){let selected=this.selectById(locationObject.query[this.qp]);if(!selected){// Store qp, for later binding
this.__tmpQP=locationObject.query[this.qp]}return selected}}selectById(nodeID){for(let i=this._flatTree.length-1,node;0<=i;i--){node=this._flatTree[i];if(node.id._value==nodeID){node.selectItem();/**
                            * Fire event, when qp is set, because the selectItem will not fire
                            */if(this.qp){let customEvent=new Event("node-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent)}return node}}return!1}/**
     * select the previous visible item
     */selectPrev(){this._hoveredField=this._selectedField||this._hoveredField;this._hoverPrevious();// open the hovered field
this._hoveredField.selectItem()}/**
     * expands the currently selected node recursive
     */expandNodeRecursive(){this._selectedField.expandRecursive()}expandAll(){this._flatTree[0].expandRecursive()}collapseAll(){this._flatTree[0].collapseRecursive()}/**
     * expands the currently selected node recursive
     */collapseNodeRecursive(){this._selectedField.collapseRecursive()}/**
     * toggles the currently selected node
     */toggle(){this._selectedField.toggleOpenClose()}addSubNode(rawNode){let newnode=this._selectedField.children.add(rawNode);this._init();setTimeout(()=>{newnode.selectItem()},0)}deleteNode(){this._selectedField.__parentNode.deleteChild(this._selectedField.__index);this.selectPrev();this._init()}/**
     * select the next visible item
     */selectNext(){this._hoveredField=this._selectedField||this._hoveredField;this._hoverNext();// open the hovered field
this._hoveredField.selectItem()}/**
     * hovers the next item
     */_hoverNext(){let next;if(this._searchIsActive){for(let i=this._foundSearchItems.length-1;0<=i;i--){if(this._foundSearchItems[i].__flatTreeIndex<=this._hoveredField.__flatTreeIndex){next=this._foundSearchItems[i+1];break}}// select first
if(!next){next=this._foundSearchItems[0]}}else{next=this._hoveredField.getNextVisibleElement()}if(next){next.triggerHover()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Maximal depth for the tree. Default is infinite.
       */depth:{type:Number},/**
       * Query param to watch. If you set this attribute, the node-selected event will only be fired on `ƒ-qp-in` or `ƒ-select-by-id`.
       * If you select an item the `qp-change-request` will be fired.
       */qp:{type:String},/**
       * Sets the tabindex
       */tabindex:{type:Number,reflect:!0},/**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */_searchIsActive:{type:Boolean,attribute:"searching",reflect:!0}}}/**
     * focuses the element
     */focus(){super.focus()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            box-sizing: border-box;
            height: 100%;
            outline: none;
            position: relative;
        }

        .tablewrapper {
            overflow: auto;
            height: 100%;
        }

        :host([hidden]) {
            display: none;
        }

        td {
            padding: 0;
        }

        table {
            border-spacing: 0;
            min-width: 100%;
        }


        :host(:not(:focus-within)) td > *[hovered] {
            background: unset;
        }

        :host(:focus-within) td > *[selected] {
            background: var(--primary, #429cff);
            color: var(--on-primary, white);
        }

        td > *[hovered] {
            background-color: var(--hover-color, #eeeeee);
        }

        td > *[selected], :host(:not(:focus-within)) td > *[selected] {
            background-color: var(--primary-variant, #429cff);
            color: var(--on-primary, #FFFFFF);
        }


        :host(:focus-within) td > *[selected]:hover {
            background: var(--primary, #57a9ff);
        }


        .srch {
            display: none;
            position: absolute;
            left: var(--spacing-xs, 8px);
            bottom: var(--spacing-xs, 8px);
            width: inherit;
            border: 1px solid var(--primary, #57a9ff);
            padding: 2px;
            font-size: 11px;
            z-index: 2;
            animation: border-pulsate 2s;
        }

        @keyframes border-pulsate {
            0% {
                border-color: var(--primary, #57a9ff);
            }
            50% {
                border-color: var(--surface, #999999);
            }
            100% {
                border-color: var(--primary, #57a9ff);
            }
        }

        :host([searching]:focus-within) .srch {
            display: block;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
    <div class="srch">🔍 ${this._searchTerm}</div>
      <div class="tablewrapper">
      <table>
        <template is="flow-repeat" ƒ-inject-items="--treeChanged" ƒ-trigger-all="--searchRequested" identity-path="id._value">
          <tr>
            <td>
              ${this._treeItemTepmplate}
            </td>
          </tr>
        </template>
      </table>
      </div>
    `}bindData(treeNode){if(treeNode.root===void 0){return}this._rootNode=treeNode.root;this._rootNode.addEventListener("this-repeated-field-changed",e=>{this._init()});this._init()}_init(){this._buildFlatTree(this._rootNode);// set visible on root node
this._rootNode.children.broadcastEvent(new NodeEvent("ancestor-visible",this._rootNode));if(!this.__listenersInitialized){this._initHoverAndSelectEvents()}this.__listenersInitialized=!0;// initial hover on first element
this._hoveredField=this._flatTree[0];setTimeout(()=>{this._hoveredField.triggerHover()},0);// select item if qp was set before
if(this.__tmpQP!==void 0){// because the tree is built async
setTimeout(()=>{this.selectById(this.__tmpQP);this.__tmpQP=void 0},0)}}_initHoverAndSelectEvents(){// Internal Event, when a node gets hovered
this._rootNode.addEventListener("tree-node-hovered",e=>{// broadcast blur
this._rootNode.broadcastEvent(new NodeEvent("tree-node-blur-requested"));this._hoveredField=e.target;// only dispatch when the element contains a name
if(null!=this._hoveredField.display_name._value){/**
         * @event node-hovered
         * Fired when
         * detail payload:
         */let customEvent=new Event("node-hovered",{composed:!0,bubbles:!0});customEvent.detail=this._hoveredField;this.dispatchEvent(customEvent);if(this._hoveredField.isBranch()){/**
           * @event branch-hovered
           * Fired when
           * detail payload:
           */let customEvent=new Event("branch-hovered",{composed:!0,bubbles:!0});customEvent.detail=this._hoveredField;this.dispatchEvent(customEvent)}else{/**
           * @event leaf-hovered
           * Fired when
           * detail payload:
           */let customEvent=new Event("leaf-hovered",{composed:!0,bubbles:!0});customEvent.detail=this._hoveredField;this.dispatchEvent(customEvent)}}});// Internal Event, when a node gets selected
this._rootNode.addEventListener("tree-node-selected",e=>{// broadcast deselect
this._rootNode.broadcastEvent(new NodeEvent("tree-node-unselection-requested"));this._selectedField=e.target;/**
                                       * @event node-selected
                                       * Fired when the item gets selected, does not fire when you work with query params
                                       * detail payload:
                                       */if(!this.qp){let customEvent=new Event("node-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent)}else{/**
         * @event qp-change-requested
         * Fired when qp mode is enabled. Nodes are only selectable with qpIn or selectById
         *
         * detail payload: Object {"this.qp": this._selectedField.id._value}
         */if(this.__lastQP!==this._selectedField.id._value){let customEvent=new Event("qp-change-requested",{composed:!0,bubbles:!0}),qp={};this.__lastQP=this._selectedField.id._value;qp[this.qp]=this._selectedField.id._value;customEvent.detail=qp;this.dispatchEvent(customEvent)}}if(this._selectedField.isBranch()){/**
         * @event branch-selected
         * Fired when
         * detail payload:
         */let customEvent=new Event("branch-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent)}else{/**
         * @event leaf-selected
         * Fired when
         * detail payload:
         */let customEvent=new Event("leaf-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent)}})}_buildFlatTree(tree){this._flatTree=[tree];tree.__flatTreeIndex=0;this._parseTreeRecursive(tree,0,this.depth);for(let len=this._flatTree.length;0<len;len--){let index=len-1,node=this._flatTree[index];// open field if entity contains a field open with true
if(!node.open){node.addChildProperty("open",new FieldNode(node,{type:"bool"},"open"));node.open._value=!1}// Traverse the flat tree, it is simpler then the nested tree
// next active element
node.getNextVisibleElement=()=>{for(let i=index+1;i<this._flatTree.length;i++){if(!this._flatTree[i]._isHidden){return this._flatTree[i]}}return!1};// prev active element
node.getPrevElement=()=>{for(let i=index-1;0<=i;i--){if(!this._flatTree[i]._isHidden){return this._flatTree[i]}}return!1};// is branch
node.isBranch=()=>{return 0===node.children.repeats.length};// get Parent
node.getParentElement=()=>{return node.__parentNode.__parentNode};// add openclose method to treeNode
node.toggleOpenClose=()=>{node.open._value=!node.open._value;if(node.open._value){/**
           * @event node-opened
           * Fired when a node is opened
           */let customEvent=new Event("node-opened",{composed:!0,bubbles:!1});setTimeout(()=>{this.dispatchEvent(customEvent)},0)}else{/**
           * @event node-closed
           * Fired when a node is closed
           */let customEvent=new Event("node-closed",{composed:!0,bubbles:!1});setTimeout(()=>{this.dispatchEvent(customEvent)},0)}};// hovers the current node
node.triggerHover=()=>{node.dispatchNodeEvent(new NodeEvent("tree-node-hovered",this,!0));node.dispatchNodeEvent(new NodeEvent("this-node-hovered",this,!1))};// selects the current item
node.selectItem=()=>{node.dispatchNodeEvent(new NodeEvent("tree-node-selected",node,!0));node.dispatchNodeEvent(new NodeEvent("this-node-selected",node,!1));// used to open the paths upwards from the selected node
node.__parentNode.dispatchNodeEvent(new NodeEvent("descendant-selected",this,!0));//node.triggerHover()
};// if a descendant was selected, we ensure to open the path
node.addEventListener("descendant-selected",e=>{node.open._value=!0});// expand recursive
node.expandRecursive=()=>{let event=new NodeEvent("recursive-expand-requested",node);node.broadcastEvent(event);/**
                                     * @event nodes-expanded
                                     * Fired when nodes are expanded recursive
                                     */let customEvent=new Event("nodes-expanded",{composed:!0,bubbles:!1});setTimeout(()=>{this.dispatchEvent(customEvent)},0)};node.addEventListener("recursive-expand-requested",e=>{node.open._value=!0});// collapse recursive
node.collapseRecursive=()=>{node.broadcastEvent(new NodeEvent("recursive-collapse-requested",node));/**
                                                                                   * @event nodes-collapsed
                                                                                   * Fired when nodes are collapsed recursive
                                                                                   */let customEvent=new Event("nodes-collapsed",{composed:!0,bubbles:!1});setTimeout(()=>{this.dispatchEvent(customEvent)},0)};node.addEventListener("recursive-collapse-requested",e=>{node.open._value=!1})}// open the root ode
tree.open._value=!0;this._FBPTriggerWire("--treeChanged",this._flatTree)}_parseTreeRecursive(tree,level,maxdepth){if(0<maxdepth&&!(level<maxdepth)){return}tree.depth=level;level++;tree.children.repeats.forEach(node=>{node.depth=level;let i=this._flatTree.push(node);node.__flatTreeIndex=i-1;if(0<node.children.repeats.length){this._parseTreeRecursive(node,level,maxdepth)}})}}window.customElements.define("furo-tree",FuroTree);class FuroMiniTabs extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}injectItems(nodeArray){this._FBPTriggerWire("--itemsInjected")}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();//this._FBPTraceWires();
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <flow-repeat ƒ-inject-items="--itemsInjected">
        <template>
          jkj
        </template>
      </flow-repeat>
    `}}window.customElements.define("furo-mini-tabs",FuroMiniTabs);class ProduceData$1 extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",this.produce)}_FBPReady(){super._FBPReady();if(this.auto){this.produce()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */auto:{type:Boolean}}}produce(){/**
     * @event data
     * Fired when
     * detail payload:
     */return fetch("/mockdata/trees/1/paneltestdata.json").then(res=>res.json()).then(data=>{this.data=data;let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=this.data;this.dispatchEvent(customEvent)})}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-button label="create tree data"></furo-button>
    `}}window.customElements.define("panel-produce-data",ProduceData$1);panelRegistry.registerType("task.Task",{view:"example-panel",edit:"edit-example",summary:"summary-example"});panelRegistry.registerType("task.Task-b",{view:"example-panel-b",edit:"edit-b-example"});class DemoFuroPanelCoordinator extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --split-master-width: 400px
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>


              <panel-produce-data auto @-data="--data"></panel-produce-data>


              <furo-split-view style="height: 500px;">
                <furo-tree slot="master" ƒ-focus="--escapeOnTabs" ƒ-bind-data="--entityObj(*.data)"
                           qp="t"
                           ƒ-location-in="--qp"
                           @-keydown="--keydownOnTree(*)"
                           @-node-selected="--nodeSelected"
                           @-qp-change-requested="--qpchangerequest"></furo-tree>
                <furo-vertical-flex class="mainContent">
                  <furo-panel-coordinator-tabs ƒ-inject-tabs="--panelChanges" ƒ-focus="--escapeOnPanel"
                                               @-escape="--escapeOnTabs"></furo-panel-coordinator-tabs>
                  <furo-vertical-scroller flex>

                    <furo-pages default="welcome" @-escape="--escapeOnPanel">
                      <div name="welcome">Welcome</div>
                      <furo-panel-coordinator
                              ƒ-show-page="--nodeSelected"
                              ƒ-close-all="--escapeOnTree"
                              @-panels-changed="--panelChanges"></furo-panel-coordinator>
                    </furo-pages>
                  </furo-vertical-scroller>
                </furo-vertical-flex>
              </furo-split-view>


              <furo-key-filter ƒ-filter="--keydownOnTree" @-matched="--escapeOnTree" keys="Escape"></furo-key-filter>
              
              <furo-app-flow event="goback-requested" ƒ-trigger="--escapeOnTree"></furo-app-flow>

              <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
              <furo-data-object type="tree.TreeEntity" ƒ-inject-raw="--data"
                                @-object-ready="--entityObj"></furo-data-object>
              <furo-location url-space-regex="^/api/route/demo/demo-furo-panel-coordinator"
                             @-location-query-changed="--qp"></furo-location>

            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-panel-coordinator",DemoFuroPanelCoordinator);class TreeDemoForm extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.newnode={id:Date.now(),display_name:"Generated",secondary_text:"secondary"}}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}bindData(Entity){this._FBPTriggerWire("--data",Entity);/**
                                             * Register hook on wire --added to
                                             *
                                             */this._FBPAddWireHook("--added",e=>{this.newnode.id=Date.now()})}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-data-text-input, furo-data-textarea-input {
            width: 100%
        }
        
        
    `}/**
     * @private
     * @returns {TemplateResult}
     * @private
     */render(){// language=HTML
return _furoShell.html`
      <furo-card style="width: 400px">

        <h4>Selected tree node</h4>

        <furo-data-text-input label="title" hint="The title is the first part in the tree"
                              ƒ-bind-data="--data(*.display_name)"></furo-data-text-input>
        <furo-data-collection-dropdown leading-icon="apps" ƒ-bind-data="--data(*.icon)"
                                       label="Select icon"
                                       list="apps, fingerprint, mail, send, filter-list, alarm-on, alarm-on, undefied-icon, android, account-balance, apps, check-box-outline-blank, aspect-ratio, change-history"
                                       @-value-changed="--icon"></furo-data-collection-dropdown>
        <furo-data-textarea-input label="Text"
                                  ƒ-bind-data="--data(*.description)"></furo-data-textarea-input>
        <hr>
        <furo-button outline @-click="^^nav-prev-clicked" label="prev"></furo-button>
        <furo-button outline @-click="^^nav-next-clicked" label="next"></furo-button>
        <furo-button outline @-click="^^nav-expand-clicked" label="expand"></furo-button>
        <hr>
        <furo-button outline @-click="^^nav-add-clicked(newnode),--added" icon="add" label="add sub"></furo-button>
        <furo-button danger outline @-click="^^nav-delete-clicked" label="delete Node"></furo-button>
      </furo-card>
    `}}window.customElements.define("tree-demo-form",TreeDemoForm);class DemoFuroTree extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --split-master-width: 400px
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo demo-furo-tree</h2>
        <p>description</p>
        <furo-demo-snippet flex>
          <template>
            <produce-data auto @-data="--data"></produce-data>
            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>
            <furo-data-object type="tree.TreeEntity" ƒ-inject-raw="--data"
                              @-object-ready="--entityObj"></furo-data-object>

            <furo-split-view style="height: 500px;">
              <furo-tree slot="master" ƒ-focus="--focusClicked" ƒ-bind-data="--entityObj(*.data)"
                         @-node-selected="--nodeSelected"
                         ƒ-select-next="--next"
                         ƒ-select-prev="--prev"
                         ƒ-add-sub-node="--addSub"
                         ƒ-expand-node-recursive="--expandNode"
                         ƒ-expand-all="--expandAll"
                         ƒ-collapse-all="--collapseAll"
                         ƒ-delete-node="--deleteNode"
                         @-node-hovered="--nodeHovered"></furo-tree>

              <tree-demo-form
                      ƒ-bind-data="--nodeSelected"
                      @-nav-prev-clicked="--prev"
                      @-nav-next-clicked="--next"
                      @-nav-add-clicked="--addSub"
                      @-nav-expand-clicked="--expandNode"
                      @-nav-delete-clicked="--deleteNode"
              ></tree-demo-form>
            </furo-split-view>


          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-tree",DemoFuroTree);class DemoFuroTreeQp extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --split-master-width: 400px
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo demo-furo-tree</h2>
        <p>Navigate and refresh the browser to see the deep-linking</p>
        <furo-demo-snippet flex>
          <template>


            <produce-data auto @-data="--data"></produce-data>
            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>


            <furo-split-view style="height: 500px;">
              <furo-tree slot="master" ƒ-focus="--focusClicked" ƒ-bind-data="--entityObj(*.data)"
                         qp="t"
                         ƒ-location-in="--qp"
                         @-node-selected="--nodeSelected"
                         @-qp-change-requested="--qpchangerequest"
                         ƒ-select-next="--next"
                         ƒ-select-prev="--prev"
                         ƒ-add-sub-node="--addSub"
                         ƒ-expand-node-recursive="--expandNode"
                         ƒ-expand-all="--expandAll"
                         ƒ-collapse-all="--collapseAll"
                         ƒ-delete-node="--deleteNode"></furo-tree>

              <tree-demo-form
                      ƒ-bind-data="--nodeSelected"
                      @-nav-prev-clicked="--prev"
                      @-nav-next-clicked="--next"
                      @-nav-add-clicked="--addSub"
                      @-nav-expand-clicked="--expandNode"
                      @-nav-delete-clicked="--deleteNode"
              ></tree-demo-form>

            </furo-split-view>


            <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
            <furo-data-object type="tree.TreeEntity" ƒ-inject-raw="--data"
                              @-object-ready="--entityObj"></furo-data-object>
            <furo-location url-space-regex="^/api/navigation/demo/demo-furo-tree"
                           @-location-query-changed="--qp"></furo-location>

          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-tree-qp",DemoFuroTreeQp);class FuroSnackbar extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.labelText="";this.actionButtonText="";this.icon="done";this.isOpen=!1}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady()}/**
     * @private
     * @returns {CSSResult}
     */static get styles(){return _furoShell.css`
            :host {
            }
        `}/**
     *@private
     */static get properties(){return{/**
       * text of button
       */actionButtonText:{type:String,attribute:"action-button-text"},/**
       * label text
       */labelText:{type:String,attribute:"label-text"},timeoutInMs:{type:Number,attribute:"timeout-in-ms"},closeOnEscape:{type:Boolean,attribute:"close-on-escape"},icon:{type:String},/**
       * max size of snackbar
       */maxSize:{type:String,attribute:"max-size"},/**
       * size of the snackbar
       */size:{type:String,attribute:!0},isOpen:{type:Boolean},positionLeft:{type:Boolean,attribute:"position-left"},positionRight:{type:Boolean,attribute:"position-right"},stacked:{type:Boolean},payload:{type:Object}}}/**
     * show slackbar
     * @param p {Object} payload
     */show(p){this.payload=p;/**
                       * @event open-furo-snackbar-requested
                       * Fired when value open snackbar is requested
                       * detail payload: {Object}  this
                       */let customEvent=new Event("open-furo-snackbar-requested",{composed:!0,bubbles:!0});customEvent.detail=this;this.dispatchEvent(customEvent)}/**
     * trigger the action of snackbar. event `snackbar-action-clicked` will be sent with payload
     */_action(){/**
     * @event snackbar-action-clicked
     * Fired when action button of snackbar is clicked
     * detail payload: {Object}  payload
     */let customEvent=new Event("snackbar-action-clicked",{composed:!0,bubbles:!0});customEvent.detail=this.payload;this.dispatchEvent(customEvent);this._close()}/**
     * Send event `snackbar-dismiss-clicked` will be sent with payload which was set with show()
     */_dismiss(){/**
     * @event snackbar-dismiss-clicked
     * Fired when dismiss icon in snackbar-display is clicked
     * detail payload: {Object}  payload
     */let customEvent=new Event("snackbar-dismiss-clicked",{composed:!0,bubbles:!0});customEvent.detail=this.payload;this.dispatchEvent(customEvent);this._close()}/**
     * Send event `snackbar-closed` will be sent with payload which was set with show()
     */_close(){/**
     * @event snackbar-closed
     * Fired when snackbar is closed
     * detail payload: {Object}  payload
     */let customEvent=new Event("snackbar-closed",{composed:!0,bubbles:!0});customEvent.detail=this.payload;this.dispatchEvent(customEvent)}/**
     * set the label text o
     * @param t
     */setLabelText(t){this.labelText=t}/**
     * set the action button text
     * @param t
     */setActionButtonText(t){this.actionButtonText=t}/**
     * parse grpc status object and set the label according to the message in status
     * @param s
     */parseGrpcStatus(s){if(s.message){this.setLabelText(s.message);this.show(s)}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
        `}}customElements.define("furo-snackbar",FuroSnackbar);class ProduceSnackbarData extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--click",()=>{/**
       * @event snackbar-label
       * Fired when
       * detail payload:
       */let customEvent=new Event("snackbar-label-"+this.id,{composed:!0,bubbles:!0});customEvent.detail=this.snackbarLabel;this.dispatchEvent(customEvent);/**
                                        * @event response-error
                                        * Fired when
                                        * detail payload:
                                        */let customEventError=new Event("response-error",{composed:!0,bubbles:!0});customEventError.detail={error:"invalid username",message:"invalid username",code:3,details:[{"@type":"type.googleapis.com/google.rpc.BadRequest",field_violations:[{code:5432,field:"display_name",description:" have fancy characters"},{code:5432,field:"repdate.0.repstring.1",description:"Bitte kein B"},{code:5432,field:"zeitunddatum.date",description:"Deeeep"},{code:5432,field:"unknown_field",description:"unknown"}]}]};this.dispatchEvent(customEventError);/**
                                             * @event rset-snackbar-label
                                             * Fired when
                                             * detail payload:
                                             */customEvent=new Event("snackbar-button-text-"+this.id,{composed:!0,bubbles:!0});customEvent.detail=this.snackbarButtonText;this.dispatchEvent(customEvent);customEvent=new Event("show-"+this.id,{composed:!0,bubbles:!0});customEvent.detail=this.snackbarButtonText;this.dispatchEvent(customEvent)})}/**
     *@private
     */static get properties(){return{label:{type:String},snackbarLabel:{type:String,attribute:"snackbar-label"},snackbarButtonText:{type:String,attribute:"snackbar-button-text"},id:{type:String}}}render(){// language=HTML
return _furoShell.html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: inline;
          cursor: pointer;
        }
      </style>
      <furo-button raised @-click="--click" label="${this.label}"></furo-button>
    `}}window.customElements.define("produce-snackbar-data",ProduceSnackbarData);class DemoFuroSnackbarDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     *@private
     */static get properties(){return{}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`


<furo-vertical-flex>
        <div>
        <h2>Demo furo-snackbar</h2>
          <p>The snack bar is set with position absolute.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
        <produce-snackbar-data id="snackbar1" label="show left" snackbar-label="this is a text label"
         @-snackbar-label-snackbar1="--setLabelTex1" 
         @-show-snackbar1="--show1"></produce-snackbar-data>
        <produce-snackbar-data id="snackbar2" label="show center" snackbar-label="this is a text label"
         @-snackbar-label-snackbar2="--setLabelTex2" 
         @-show-snackbar2="--show2"></produce-snackbar-data>
        <produce-snackbar-data id="snackbar3" label="show right stacked" snackbar-label="this is a text label"
         @-snackbar-label-snackbar3="--setLabelTex3" 
         @-show-snackbar3="--show3"></produce-snackbar-data>
                
            <furo-snackbar timeout-in-ms=5000 position-left icon="close" action-button-text="undo"  close-on-escape ƒ-set-label-text="--setLabelTex1" max-size="500px" ƒ-show="--show1"></furo-snackbar>
            <furo-snackbar timeout-in-ms=5000 icon="done" size="250px"  action-button-text="undo"  ƒ-show="--show2"></furo-snackbar>
            <furo-snackbar position-right  timeout-in-ms=5000 stacked size="350px" ƒ-show="--show3"></furo-snackbar>
          <!-- this furo-banner-display should be place on the main page once 
            <furo-snackbar-display></furo-snackbar-display> 
          -->
      
                </template>
        </furo-demo-snippet>
      </furo-vertical-flex>

       
        `}}customElements.define("demo-furo-snackbar-display",DemoFuroSnackbarDisplay);class DemoFuroSnackbarDisplayError extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     *@private
     */static get properties(){return{}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
      <h2>Demo furo-snackbar</h2>
      
      <furo-demo-snippet >
        <template>
        <produce-snackbar-data id="snackbar1" label="produce error" snackbar-label="this is a text label"
         @-snackbar-label-snackbar1="--setLabelTex1" 
         @-response-error = "--error"
         ></produce-snackbar-data>

        <div>        
            <furo-snackbar timeout-in-ms=5000 icon="done"   ƒ-show="--show" action-button-text="undo" ƒ-parse-grpc-status="--error"></furo-snackbar>
        </div>
          <!-- this furo-banner-display should be place on the main page once 
            <furo-snackbar-display></furo-snackbar-display> 
          -->
                </template>
      </furo-demo-snippet>
        `}}customElements.define("demo-furo-snackbar-display-error",DemoFuroSnackbarDisplayError);class FuroBannerDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._banner={text:"",dismissButtonText:"dismiss",confirmButtonText:"",icon:"",banner:{}};this._stack=[];this.setAttribute("hidden","")}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();window.addEventListener("open-furo-banner-requested",e=>{this._show(e.detail)});this._FBPAddWireHook("--confirmClicked",e=>{if(this._banner.banner){this._banner.banner.confirm()}this._close()});this._FBPAddWireHook("--dismissClicked",e=>{if(this._banner.banner){this._banner.banner.dismiss()}this._close()})}/**
     * @private
     * @returns {CSSResult}
     */static get styles(){return _furoShell.css`
            :host {
              width: 100%;
              background-color: var(--banner-background-color, var(--background,#000000));
              transition: all .5s ease-in-out;
              overflow:hidden;
            }
            :host([hidden]) {
              height: 0;
            }
            furo-icon {
              margin: auto var(--banner-icon-margin-right,var(--spacing, 24px)) auto 0;
              width: 40px;
              height: 40px;
              display: none;
            }
            .wrapper {
              width: 100%;
              padding: 12px 8px 8px 24px;
              display: flex;
              border-bottom: solid 1px #e0e0e0;
              margin-bottom: var(--banner-margin-bottom,var(--spacing-s, 16px));
            }
            
            .wrapper[icon] furo-icon{
              display: flex;
            }
            
            .wrapper[icon] {
              padding: 12px 8px 8px 16px;
            }
            
            furo-button {
              color: var(--banner-button-text-color, --primary, #3f83e3));
              --on-surface: var(--primary);
              margin-right: 8px;
            }
            
            .text {
              width: 100%;
              line-height: 20px;
              padding-bottom: 4px;
              padding-top: 12px;
            }
            
            .button {
              display: flex;
              margin-left: 90px;
              align-self: flex-end;
              justify-content:flex-end;
            }
            
            furo-button[hide] {
              display: none;
            }
        `}/**
     *@private
     */static get properties(){return{_banner:{type:Object},_stack:{type:Array},_isOpen:{type:Boolean},_timer:{type:Object}}}/**
     * show
     * @param b
     * @private
     */_show(b){this._pushToStack(b);if(!this._isOpen){this.__show()}}/**
     *
     * @param d {Object} banner
     * @private
     */_pushToStack(b){let obj={text:b.text,dismissButtonText:b.dismissButtonText,confirmButtonText:b.confirmButtonText,icon:b.icon,banner:b};this._stack.push(obj)}/**
     *
     * @private
     */__show(){if(0<this._stack.length){this._banner=this._stack[0];this.removeAttribute("hidden");this.requestUpdate();this._isOpen=!0}}/**
     * close the CURRENT banner
     */_close(){if(1<this._stack.length){this.setAttribute("hidden","");this._stack.shift();if(0<this._stack.length){let self=this;this._timer=setInterval(function(){clearInterval(self._timer);self.__show()},500)}else{this._isOpen=!1}}else{this._stack.shift();this.setAttribute("hidden","");this._isOpen=!1}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
          <div class="wrapper" ?icon="${this._banner.icon}">
            <furo-icon icon="${this._banner.icon}"></furo-icon>
            <div class="text">${this._banner.text}</div>
            <div class="button">
              <furo-button label="${this._banner.dismissButtonText}" ?hide="${!this._banner.dismissButtonText}" @-click="--dismissClicked"></furo-button>          
              <furo-button label="${this._banner.confirmButtonText}" ?hide="${!this._banner.confirmButtonText}" @-click="--confirmClicked"></furo-button>   
            </div>
          </div>
        `}}customElements.define("furo-banner-display",FuroBannerDisplay);class FuroBanner extends _furoShell.LitElement{constructor(){super();this.dismissButtonText="dismiss"}/**
     * @private
     * @returns {CSSResult}
     */static get styles(){return _furoShell.css`
            :host {
            }
        `}/**
     *@private
     */static get properties(){return{/**
       * banner content text
       */text:{type:String},/**
       * label text of dismiss button
       */dismissButtonText:{type:String,attribute:"dismiss-button-text"},/**
       * label text of confirm button
       */confirmButtonText:{type:String,attribute:"confirm-button-text"},/**
       * icon of the banner
       */icon:{type:String},/**
       * payload
       */payload:{type:Object}}}/**
     * set icon of the snackbar
     * @param i
     */setIcon(i){this.icon=i}/**
     * set the
     * @param t
     */setText(t){this.text=t}/**
     * set label text of confirm button
     * @param t
     */setConfirmButtonText(t){this.confirmButtonText=t}/**
     * set label text of dismiss button
     * @param t
     */setDismissButtonText(t){this.dismissButtonText=t}/**
     * show banner
     * @param p {Object} payload
     */show(p){this.payload=p;/**
                       * @event open-furo-banner-requested
                       * Fired when value open banner is requested
                       * detail payload: {Object}  this
                       */let customEvent=new Event("open-furo-banner-requested",{composed:!0,bubbles:!0});customEvent.detail=this;this.dispatchEvent(customEvent)}/**
     *  event `dismissed` will be sent with payload
     */dismiss(){/**
     * @event dismissed
     * Fired when dismiss button of banner is clicked
     * detail payload: {Object}  payload
     */let customEvent=new Event("dismissed",{composed:!0,bubbles:!0});customEvent.detail=this.payload;this.dispatchEvent(customEvent);this._close()}/**
     *  event `confirmed` will be sent with payload
     */confirm(){/**
     * @event confirmed
     * Fired when confirm button of banner is clicked
     * detail payload: {Object}  payload
     */let customEvent=new Event("confirmed",{composed:!0,bubbles:!0});customEvent.detail=this.payload;this.dispatchEvent(customEvent);this._close()}/**
     *  event `banner-closed` will be sent with payload which was set with show()
     */_close(){/**
     * @event banner-closed
     * Fired when banner is closed
     * detail payload: {Object}  payload
     */let customEvent=new Event("banner-closed",{composed:!0,bubbles:!0});customEvent.detail=this.payload;this.dispatchEvent(customEvent)}/**
     * parse grpc status object and set the label according to the message in status
     * @param s
     */parseGrpcStatus(s){if(s.message){this.setText(s.message);this.show(s)}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
        `}}customElements.define("furo-banner",FuroBanner);class ProduceBannerData extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._FBPAddWireHook("--click",()=>{/**
       * @event banner-label
       * Fired when
       * detail payload:
       */let customEvent=new Event("banner-text-"+this.id,{composed:!0,bubbles:!0});customEvent.detail=this.bannerLabel;this.dispatchEvent(customEvent);customEvent=new Event("show-"+this.id,{composed:!0,bubbles:!0});customEvent.detail=this.bannerButtonText;this.dispatchEvent(customEvent);/**
                                        * @event response-error
                                        * Fired when
                                        * detail payload:
                                        */let customEventError=new Event("response-error",{composed:!0,bubbles:!0});customEventError.detail={error:"invalid username",message:"invalid username",code:3,details:[{"@type":"type.googleapis.com/google.rpc.BadRequest",field_violations:[{code:5432,field:"display_name",description:" have fancy characters"},{code:5432,field:"repdate.0.repstring.1",description:"Bitte kein B"},{code:5432,field:"zeitunddatum.date",description:"Deeeep"},{code:5432,field:"unknown_field",description:"unknown"}]}]};this.dispatchEvent(customEventError)})}/**
     *@private
     */static get properties(){return{label:{type:String},bannerLabel:{type:String,attribute:"banner-text"},id:{type:String}}}render(){// language=HTML
return _furoShell.html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: inline;
          cursor: pointer;
        }
      </style>
      <furo-button raised @-click="--click" label="${this.label}"></furo-button>
    `}}window.customElements.define("produce-banner-data",ProduceBannerData);class DemoFuroBannerDisplay extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     *@private
     */static get properties(){return{}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
      <h2>Demo furo-banner</h2>
      <furo-demo-snippet >
        <template>
  
          <div>        
              <furo-banner  ƒ-show="--show1" ƒ-set-Text="--setBannerText1"  icon="perm-scan-wifi" ></furo-banner>
              <furo-banner  ƒ-show="--show2" ƒ-set-Text="--setBannerText2"  icon="info-outline"   dissmis-button-text="continue" confirm-button-text="confirm"></furo-banner>
          </div>
          <furo-banner-display></furo-banner-display>
          
          <produce-banner-data id="banner1" label="banner 1"
            banner-text="Banner 1 , Wlan Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
             @-banner-text-banner1="--setBannerText1" 
             @-show-banner1="--show1"
           ></produce-banner-data>
          <produce-banner-data id="banner2"  label="banner 2"
            banner-text="Banner 2 ,At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
             @-banner-text-banner2="--setBannerText2" 
             @-show-banner2="--show2"
           ></produce-banner-data>
        </template>
      </furo-demo-snippet>
        `}}customElements.define("demo-furo-banner-display",DemoFuroBannerDisplay);class DemoFuroBannerDisplayError extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     *@private
     */static get properties(){return{}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
      <h2>Demo furo-banner</h2>
      <furo-demo-snippet >
        <template>
  
          <div>        
              <furo-banner  ƒ-show="--show1" ƒ-parse-grpc-status="--error"  icon="perm-scan-wifi" ></furo-banner>
          </div>
          <furo-banner-display></furo-banner-display>
          
          <produce-banner-data id="banner1" label="banner 1"
             @-response-error="--error"
           ></produce-banner-data>

        </template>
      </furo-demo-snippet>
        `}}customElements.define("demo-furo-banner-display-error",DemoFuroBannerDisplayError);class FuroCaptureAudio extends _furoShell.LitElement{constructor(){super();this.constraints={audio:!0,video:!1}}stop(){this.tracks[0].stop()}start(){if(navigator.mediaDevices){navigator.mediaDevices.getUserMedia(this.constraints).then(stream=>{/**
         *
         * @type {MediaStream}
         */this.stream=stream;this.tracks=stream.getTracks();/**
                                           * the stream
                                           * @type {MediaStream}
                                           */ /**
                                               * @event stream
                                               * Fired when
                                               * detail payload:
                                               */let customEvent=new Event("stream",{composed:!0,bubbles:!0});customEvent.detail=this.stream;this.dispatchEvent(customEvent)}).catch(this._err)}else{let e=new Error("Works with https only");this._err(e)}}_err(e){console.error(e);/**
                       * @event error
                       * Fired when
                       * detail payload:
                       */let customEvent=new Event("error",{composed:!0,bubbles:!0});customEvent.detail=e;this.dispatchEvent(customEvent)}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}}window.customElements.define("furo-capture-audio",FuroCaptureAudio);class FuroCaptureVideo extends _furoShell.LitElement{constructor(){super();this.constraints={audio:!1,video:{width:{exact:320},height:{exact:240}}}}stop(){this.tracks[0].stop()}start(){if(navigator.mediaDevices){navigator.mediaDevices.getUserMedia(this.constraints).then(stream=>{/**
         *
         * @type {MediaStream}
         */this.stream=stream;this.tracks=stream.getTracks();/**
                                           * the stream
                                           * @type {MediaStream}
                                           */ /**
                                               * @event stream
                                               * Fired when
                                               * detail payload:
                                               */let customEvent=new Event("stream",{composed:!0,bubbles:!0});customEvent.detail=this.stream;this.dispatchEvent(customEvent)}).catch(this._err)}else{let e=new Error("Works with https only");this._err(e)}}_err(e){console.error(e);/**
                       * @event error
                       * Fired when
                       * detail payload:
                       */let customEvent=new Event("error",{composed:!0,bubbles:!0});customEvent.detail=e;this.dispatchEvent(customEvent)}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}}window.customElements.define("furo-capture-video",FuroCaptureVideo);class FuroSpeechRecognition extends _furoShell.LitElement{constructor(){super();window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;this.recognition=new SpeechRecognition;this.recognition.interimResults=!1;this.recognition.onresult=event=>{const speechToText=event.results[0][0].transcript;console.log(event.results);/**
                                  * @event transcript
                                  * Fired when speechToText
                                  * detail payload: string
                                  */let customEvent=new Event("transcript",{composed:!0,bubbles:!0});customEvent.detail=speechToText;this.dispatchEvent(customEvent)}}start(){this.recognition.start()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}}window.customElements.define("furo-speech-recognition",FuroSpeechRecognition);class DemoCaptureVideo extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo demo-capture-video</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-button primary unevelated @-click="--start" label="start"> </furo-button>
            <furo-button danger unevelated @-click="--stop" label="stop"></furo-button>
            <hr>
            <furo-capture-video ƒ-start="--start" ƒ-stop="--stop" @-stream="--stream"></furo-capture-video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
      </furo-vertical-flex>
      </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-capture-video",DemoCaptureVideo);const nav=[{group:"Packages",items:[{label:"Getting input",icon:"input",href:"input/doc/"},{label:"Dealing with data",icon:"cloud",href:"data/doc/"},{label:"Data UI",icon:"view-column",href:"data-ui/doc/"},{label:"Data Input",icon:"input",href:"data-input/doc/"},{label:"Layouts helper",icon:"dashboard",href:"layout/doc/"},{label:"Forms helper",icon:"dashboard",href:"form/doc/"},{label:"App Config",icon:"settings",href:"config/doc/"},{label:"Navigation",icon:"tab",href:"navigation/doc/"},{label:"Notification",icon:"info",href:"notification/doc/"},{label:"Routing",icon:"arrow-forward",href:"route/doc/"},{label:"Timing",icon:"alarm",href:"timing/doc/"},{label:"Logic",icon:"av:web",href:"logic/doc/"},{label:"Util",icon:"star-border",href:"util/doc/"},{label:"\uD83D\uDC80 Experiments",icon:"image:colorize",href:"experiments/doc/"}]},{group:"The Framework",items:[{label:"Init",icon:"settings",href:"framework/doc/Init"},{label:"Theming",icon:"image:brush",href:"framework/doc/Theme"},{label:"I18n",icon:"translate",href:"framework/doc/i18n"},{label:"Register Icons",icon:"image:color-lens",href:"framework/doc/Iconset"}]}];/**
     * todo: put this back in to the menu when the math components are complete
     * {"label": "Math", "icon": "timeline", "href": "math/doc/"},
     */_exports.nav=nav;var nav_config={nav:nav};_exports.$navConfig=nav_config;class FuroDemoLoader extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}load(location){if(location.pathSegments[0]){let lastDemo=this.shadowRoot.querySelector("#demo");lastDemo.remove();this.demoComponent=location.pathSegments[0];// if the element is registered append the new
if(document.createElement(this.demoComponent).constructor!==HTMLElement){// append the demo element
let demo=document.createElement(this.demoComponent);demo.id="demo";this.shadowRoot.appendChild(demo)}else{let demo=document.createElement("div");demo.id="demo";demo.classList.add("error");demo.innerText="404  -  "+this.demoComponent+" is not imported, nothing to show here";this.shadowRoot.appendChild(demo)}this.requestUpdate()}}/**
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
            overflow: auto;
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }

        .goback {
            position: absolute;
            right: var(--spacing);

        }
        .error{
            font-size: 48px;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <a class="goback" href="../doc/">Back to package</a>
        <div id="demo"></div>
    `}}window.customElements.define("furo-demo-loader",FuroDemoLoader);class PanelDemo extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();// this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-left: var(--spacing-s);
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--background);
            --split-master-width: 212px;
        }

        :host([hidden]) {
            display: none;
        }
        
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      
      <furo-location url-space-regex="^/api/[^/]*/demo" @-location-path-changed="--pathChanged"></furo-location>
      <furo-demo-loader ƒ-load="--pathChanged"></furo-demo-loader>
    `}}window.customElements.define("panel-demo",PanelDemo);class PanelDoc extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-top: var(--spacing);
            padding-left: var(--spacing-s);
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--background);
            --split-master-width: 212px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-doc-element, furo-doc-class {
            padding-left: var(--spacing);
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
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPAddWireHook("--packageChanged",e=>{this._FBPTriggerWire("--src","../../../node_modules/@furo/"+e.pathSegments[0]+"/analysis.json")})}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`

      <!-- find the package -->
      <furo-location url-space-regex="^/api" @-location-changed="--packageChanged"></furo-location>
      <furo-location url-space-regex="^/api/[^/]*/doc" @-location-changed="--pathChanged"></furo-location>
      <furo-doc-fetch-analysis ƒ-fetch-src="--src" ƒ-check-subroute="--pathChanged"
                               @-data="--analysis"></furo-doc-fetch-analysis>

      <furo-split-view>

        <!-- the doc menu -->
        <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element"
                       @-class="--class" @-mixin="--class"></furo-doc-menu>

        
        <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>


        <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

      </furo-split-view>
    `}}window.customElements.define("panel-doc",PanelDoc);class ViewApi extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
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
        furo-pages{
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
      <furo-location url-space-regex="^/api/[^/]*" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <!-- --nav comes from import {nav} from "./nav_config"; -->
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/api/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="default">
          <panel-doc name="doc"></panel-doc>
          <panel-demo name="demo"></panel-demo>
          <div name="default">404 ....</div>
        </furo-pages>
      </furo-split-view>
    `}}window.customElements.define("view-api",ViewApi)});