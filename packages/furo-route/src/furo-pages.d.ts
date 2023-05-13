/**
 *
 * Use `furo-pages` to build tabs, views, subviews,...
 *
 *
 * ## preconditions
 * The components used in a furo-page must implement a **hidden** attribute css to set itself to display none.
 *
 * ```css
 * :host([hidden]){
 *    display:none
 *  }
 *```
 *
 * ## usage
 *
 * ```html
 *
 * <furo-pages fn-inject-location="--locationChanged" default="home">
 *    <page-home name="home"></page-home>
 *    <other-page name="more"></other-page>
 *    <view-404 name="404"></view-404>
 * </furo-pages>
 *
 * <furo-location at-location-changed="--locationChanged"></furo-location>
 * ```
 * *If the url is `/` or `/home`, page-home is displayed.*
 * *If the url is `/more`,  other-page is displayed.*
 * *If the url does not match any of the names and a 404 is available, the 404 is displayed.*
 *
 * ## flowbased auto wires
 * furo-pages provides auto wires, which are automatically triggered in the child elements if
 * they support FBP. Each wire will forward a `locationObject`
 *
 * -  `|--pageActivated` : Is triggered when the element is activated.
 * -  `|--pageDeActivated` : Is triggered when another page is activated. Empty wire.
 * -  `|--pageQueryChanged` : Is triggered when the page query changes.
 * -  `|--pageHashChanged` : Is triggered when the page hash changes.
 * -  `|--pageReActivated` : Is triggered when the locatioin contains the same page which already was activated.
 *
 * -  `--pageActivated` : Is triggered when the element is activated.
 * -  `--pageDeActivated` : Is triggered when another page is activated. Empty wire.
 * -  `--pageQueryChanged` : Is triggered when the page query changes.
 * -  `--pageHashChanged` : Is triggered when the page hash changes.
 * -  `--pageReActivated` : Is triggered when the locatioin contains the same page which already was activated.
 *
 *
 *
 * @prop {String} default - Set the default page to show.
 * @slot {HTMLElement [0..n]} - default slot to add pages.
 * @summary Simple content switcher
 * @demo demo-furo-panel-coordinator with panel coordinator
 * @customElement
 */
export class FuroPages extends LitElement {
    /**
     *
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * @private
     */
    private _fallback;
    /**
     * @private
     */
    private _default;
    /**
     * **attr-for-selected** If you do not want to have *selected* as attribute to mark the selected state, change this value.
     * @type {string|string}
     * @private
     */
    private _attrForSelected;
    /**
     * @private
     */
    private _lastQP;
    /**
     * @private
     */
    private _lastHash;
    /**
     * @private
     */
    private _lastPageName;
    firstUpdated(_changedProperties: any): void;
    /**
     * Activate a page by name
     * @param String pageName
     */
    activatePage(pageName: any): false | Element;
    /**
     * Inject the location Object from furo-location. The page which is defined in location.pathSegments[0] will get activated.
     *
     * To meke "sub" pages do not forget to enable the `url-space-regex` property on the *furo-location* component which feeds this component.
     *
     * If the page/view does not exist and you have a page "404" defined, the 404 will be shown
     *
     * If the page/view does not exist AND 404 does not exist, the default page gets activated.
     *
     * @param location
     */
    injectLocation(location: any): false | Element;
    _lastPage: Element;
    /**
     * @private
     * @returns {TemplateResult}
     */
    private render;
}
import { LitElement } from 'lit';
