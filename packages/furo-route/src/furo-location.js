import { LitElement, css } from 'lit';

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
 * @fires {Location object} url-space-entered -  Fired when the path matches the url-space-regex and neither a search query or hash was given, useful to detect if someone enters the current url
 * @fires {void} __beforeReplaceState -  Fired when before the state will be updated
 *
 * @summary url watcher
 * @customElement
 */
class FuroLocation extends LitElement {
  constructor() {
    super();

    /**
     *
     * @type {{host}}
     * @private
     */
    this._location = {
      host: window.location.host,
    };

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
    this.urlSpaceRegex = '';

    this._registerHandler();
  }

  static get properties() {
    return {
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
      urlSpaceRegex: {
        type: String,
        attribute: 'url-space-regex',
      },
    };
  }

  /**
   * @private
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    document.body.addEventListener('click', this._clickHandler, true);
    document.body.addEventListener('__furoLocationChanged', this._locationChangeNotyfier, true);
    window.addEventListener('popstate', this._locationChangeNotyfier, true);
    window.addEventListener('popstate', this._locationChangeNotyfier, true);

    // initial notyfier
    setTimeout(() => {
      this._locationChangeNotyfier();
    }, 0);
  }

  /**
   * @private
   */
  disconnectedCallback() {
    document.body.removeEventListener('click', this._clickHandler, true);
    document.body.removeEventListener('__furoLocationChanged', this._locationChangeNotyfier, true);
    window.removeEventListener('popstate', this._locationChangeNotyfier, true);
    window.removeEventListener('popstate', this._locationChangeNotyfier, true);
  }

  /**
   * create a valid href string from this._location
   * @return {*}
   * @private
   */
  _getHrefFromLocation() {
    // path, query hash
    let href = this._location.path;
    if (this._location && this._location.query.length > 0) {
      href += `?${this._location.query}`;
    }
    if (this._location && this._location.hash.length > 0) {
      href += `#${this._location.hash}`;
    }
    return href;
  }

  /**
   * @private
   */
  _registerHandler() {
    this._locationChangeNotyfier = () => {
      let sendHashChanged = false;
      let sendQueryChanged = false;
      let sendPathChanged = false;

      // ignore links outside urlSpaceRegex
      if (this.urlSpaceRegex !== '') {
        if (window.location.pathname.match(this.urlSpaceRegex) === null) {
          return;
        }

        if(window.location.search === "" && window.location.hash === "" && window.location.pathname.match(`${this.urlSpaceRegex  }$`)){
          const customEvent = new Event('url-space-entered', { composed: false, bubbles: false });
          customEvent.detail = this._location;
          this.dispatchEvent(customEvent);
        }
      }

      // register empty objects for later usage
      this._location.query = {};
      this._location.hash = {};

      // path-changed
      // cut of urlSpaceRegex
      const newPath = window
        .decodeURIComponent(window.location.pathname)
        .replace(new RegExp(this.urlSpaceRegex), '');
      if (this._location.path !== newPath) {
        sendPathChanged = true;
      }
      this._location.path = newPath;

      // path segments
      this._location.pathSegments = [];
      let m;
      const rgx = new RegExp(/\/([^/]*)/gi);
      // eslint-disable-next-line no-cond-assign
      while ((m = rgx.exec(newPath)) !== null) {
        this._location.pathSegments.push(m[1]);
      }

      // hash-changed
      const newHash = window.decodeURIComponent(window.location.hash.slice(1));
      if (this._location.hashstring !== newHash) {
        sendHashChanged = true;
      }
      this._location.hashstring = newHash;
      this._location.hash = {};
      if (newHash.length > 0) {
        newHash.split('&').forEach(qstr => {
          const p = qstr.split('=');
          // eslint-disable-next-line prefer-destructuring
          this._location.hash[p[0]] = p[1];
        });
      }

      // query-changed
      const newQuery = window.location.search.slice(1);
      if (this._location.querystring !== newQuery) {
        sendQueryChanged = true;
      }
      this._location.querystring = newQuery;
      this._location.query = {};
      if (newQuery.length > 0) {
        newQuery.split('&').forEach(qstr => {
          const p = qstr.split('=');
          // eslint-disable-next-line prefer-destructuring
          this._location.query[p[0]] = p[1];
        });
      }

      if (sendPathChanged) {
        const customEvent = new Event('location-path-changed', { composed: true, bubbles: false });
        customEvent.detail = this._location;
        this.dispatchEvent(customEvent);
      }

      if (sendHashChanged) {
        const customEvent = new Event('location-hash-changed', { composed: true, bubbles: false });
        customEvent.detail = this._location;
        this.dispatchEvent(customEvent);
      }

      if (sendQueryChanged) {
        const customEvent = new Event('location-query-changed', { composed: true, bubbles: false });
        customEvent.detail = this._location;

        this.dispatchEvent(customEvent);
      }
      // location-changed
      const customEvent = new Event('location-changed', { composed: true, bubbles: false });
      customEvent.detail = this._location;
      this.dispatchEvent(customEvent);
    };

    /**
     * clicks abfangen
     * @param e
     * @private
     */
    this._clickHandler = e => {
      const target = this._findAtagInPath(e.composedPath());

      // only handle clicks on <a href="..
      if (target.tagName !== 'A') {
        return;
      }

      if (target.tagName === 'A' && target.target === "_blank") {
        return;
      }

      // only handle regular clicks
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      // do not interfere with links to other hosts
      if (target.host !== this._location.host) {
        return;
      }

      // ignore links outside urlSpaceRegex
      if (this.urlSpaceRegex !== '') {
        if (target.pathname.match(this.urlSpaceRegex) === null) {
          return;
        }
      }

      // update history only once
      if (!e.__historyUpdated) {
        e.__historyUpdated = true;

        window.dispatchEvent(new Event('__beforeReplaceState', { composed: true, bubbles: true }));

        window.history.replaceState({}, '', target.href);

        this._notifyFuroLocationChanged();
      }
      // prevent from full reload
      e.preventDefault();
    };
  }

  /**
   * look for A tags in a path array from click events
   * @private
   * @param path
   * @return {boolean|*}
   */
  _findAtagInPath(path) {
    // if we reach body, we are to deep
    if (path[0].tagName === 'BODY') {
      return false;
    }
    if (path[0].tagName === 'A') {
      return path[0];
    }
    const [, ...tail] = path;
    return this._findAtagInPath(tail);
  }

  /**
   * Internal notyfication
   * @private
   */
  _notifyFuroLocationChanged() {
    const now = window.performance.now();
    const customEvent = new Event('__furoLocationChanged', { composed: true, bubbles: true });
    customEvent.detail = now;
    this.dispatchEvent(customEvent);
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-location', FuroLocation);
