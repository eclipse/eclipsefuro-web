declare const FuroAppFlowRouter_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void;
        __fbpAppended: boolean;
        _FBPTriggerWire(wire: any, detailData: any): void;
        __domPath: any;
        _call(detailData: any, receiver: any): void;
        _FBPAddWireHook(wire: any, cb: any, before?: any): number;
        _FBPTraceWires(): void;
        _FBPDebug(wire: any, openDebugger: any): void;
        __toCamelCase(str: any): any;
        _appendFBP(dom: any): void;
        _FBPReady(): void;
        __fbp_ready: boolean;
        __enqueueTrigger(wire: any, detailData: any): void;
        __resolveWireAndPath(w: any): {
            path: any;
            receivingWire: any;
        };
        _pathGet(root: any, path: string | (string | number)[]): any;
        _pathSet(root: any, path: string | (string | number)[], value: any): string | boolean;
        _split(path: string | (string | number)[]): string[];
    };
    [x: string]: any;
};
/**
 * `furo-app-flow-router`
 *
 * Use this component with app-flow and furo-pages to implement your application flow / routing
 *
 *
 * ```html
 *    <app-flow-router set-config="--flowConfigLoaded" fn-trigger="--flowEvent" fn-back="--wire" fn-forward="--wire"></app-flow-router>
 * ```
 *
 *  *Configuration Array
 *
 * | current   | flow-event-name      | target      | [mapping]          |
 * |:----------|:---------------------|:------------|:-------------------|
 * | view-main | form-complete        | detail-view | from => to         |
 * | *         | menu-settings-click  | settings    |                    |
 * | *         | all-fields-req       | all-qps     |        *           |
 * | *         | some-fields-req      | some-qps    | a=>b,x=>id,c=>item |
 *
 *
 * ```json
 *  [
 *    ['view-main', 'button-tap', 'detail-view',  'task => id],
 *    ["*", "search", "EXTERNAL_LINK: https://google.com/"],
 *    ["*", "searchInNewWindow", "EXTERNAL_LINK_BLANK: https://google.com/"]
 *    ["*", "searchInNewWindow", "EXTERNAL_LINK_BLANK:", *],
 *    ["*", "activity-url", "URL", "*"],
 *  ]
 *  ```
 *
 *
 *  if the current view is view-main and the flow-event-name is 'form-complete', the view switches to detail-view and data.from is mapped to "to".
 *
 *  ## Special configurations:
 *
 *  - Set a "*" to map all data 1:1 to the url.
 *
 *  - You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
 *  - if you want to link to a dynamic target outside your app add **URL** and use `fn-emit` on the furo-app-flow component with the url as data.
 *  - if you want to link to a target outside your app add **EXTERNAL_LINK:** followed by the link
 *  - if you want to close a page which was openend by a _blank click use the keyword **WINDOW-CLOSE**
 *  - if you want to trigger a history.back() use the **HISTORY-BACK**
 *  - if there is no history.back() possible use the **flow event!** **HISTORY-BACK** and define the target as usual
 *
 * @fires {void} __beforeReplaceState -  Fired when before the state will be updated.
 * @fires {flowEvent} view-changed -  Fired when page was changed.
 * @fires {flowEvent} event-not-found -  Fired when view was not found.
 *
 * @summary Application Flow => routing
 * @customElement
 * @appliesMixin FBP
 */
export class FuroAppFlowRouter extends FuroAppFlowRouter_base {
    static get properties(): {
        /**
         * The Configuration Array
         *
         * @type Array
         */
        config: any[];
        /**
         * attribute url-space-regex
         * A regexp that defines the set of URLs that should be considered part
         * of this web app.
         *
         * Clicking on a link that matches this regex won't result in a full page
         * navigation, but will instead just update the URL state in place.
         *
         * This regexp is given everything after the origin in an absolute
         * URL. So to match just URLs that start with /app do:
         *     url-space-regex="^/app"
         *
         * @type {string|RegExp}
         */
        urlSpaceRegex: string | RegExp;
    };
    static get styles(): import("lit").CSSResult;
    /**
     * default value of urlSpaceRegex. this value can be rewritten via `url-space-regex` attribute
     */
    urlSpaceRegex: string;
    _blank: boolean;
    /**
     * trigger a history back
     */
    back(): void;
    /**
     * trigger a history forward
     */
    forward(): void;
    /**
     * Set the config
     * @param config
     */
    setConfig(config: any): void;
    /**
     * build internal config for faster access
     */
    set config(arg: any);
    /**
     * Trigger the router
     * @param flowEvent
     * @return {boolean}
     */
    trigger(flowEvent: any): boolean;
    _configObject: {};
}
export {};
