/**
 * `furo-location` watches for URL changes and notifies you. The location object which is fired from furo-location can be used
 *  for page navigation in furo-pages or for deep link resolution.
 *
 *
 * ```html
 * <furo-location at-location-changed="--pathChanged"></furo-location>
 *
 * <furo-pages
 *   fn-inject-location="--pathChanged"
 *   default="list">
 *     <view-list name="list"></view-list>
 *     <view-create name="create"></view-create>
 *     <view-detail name="detail"></view-detail>
 * </furo-pages>
 * ```
 *
 *
 * ### locationObject
 * ```json
 * {
 *     "host": "localhost:8480",
 *     "query": {"tsk": 999},
 *     "hash": {},
 *     "path": "/detail",
 *     "pathSegments": [
 *         "detail"
 *     ],
 *     "hashstring": "",
 *     "querystring": "tsk=999"
 * }
 * ```
 *
 * @fires {Location object} location-path-changed -  Fired when Path portion of the location changed
 * @fires {Location object} location-hash-changed -  Fired when Hash portion of the location changed
 * @fires {Location object} location-query-changed -  Fired when Query portion of the location changed
 * @fires {Location object} location-changed -  Fired when something in the location changed
 * @fires {Location object} external-link-clicked -  Fired when a external link was clicked
 * @fires {Location object} url-space-entered -  Fired when the path matches the url-space-regex and neither a search query or hash was given, useful to detect if someone enters the current url
 * @fires {void} __beforeReplaceState -  Fired when before the state will be updated
 *
 * @summary url watcher
 * @customElement
 */
export class FuroLocation extends LitElement {
    static get properties(): {
        /**
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
         * If you plan to work in sub directories, you may set **url-space-regex="^${window.APPROOT}/additional/path"**.
         * Keep in mind to put a "url-space-regex" on every furo-location. Otherwise you can not switch between apps in different
         * folders with a link.
         *
         * @type {string} RegExp
         */
        urlSpaceRegex: string;
    };
    static get styles(): import("lit").CSSResult;
    /**
     *
     * @type {{host}}
     * @private
     */
    private _location;
    /**
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
     * If you plan to work in sub directories, you may set **url-space-regex="^${window.APPROOT}/additional/path"**.
     * Keep in mind to put a "url-space-regex" on every furo-location. Otherwise you can not switch between apps in different
     * folders with a link.
     *
     * @type {string|RegExp}
     */
    urlSpaceRegex: string | RegExp;
    /**
     * create a valid href string from this._location
     * @return {*}
     * @private
     */
    private _getHrefFromLocation;
    /**
     * @private
     */
    private _registerHandler;
    _locationChangeNotyfier: () => void;
    /**
     * clicks abfangen
     * @param e
     * @private
     */
    private _clickHandler;
    /**
     * look for A tags in a path array from click events
     * @private
     * @param path
     * @return {boolean|*}
     */
    private _findAtagInPath;
    /**
     * Internal notyfication
     * @private
     */
    private _notifyFuroLocationChanged;
}
import { LitElement } from 'lit';
