/**
 * `furo-location`
 *  Somethin like iron-location
 *
 * @customElement
 */


/**
 * @demo demo/location.html
 */
class FuroLocation extends HTMLElement {

  constructor() {
    super();
    this.style.display = "none";
    this._location = {
      "host": window.location.host
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
     * @type {string|RegExp}
     */
    this.urlSpaceRegex = this.getAttribute("url-space-regex") || "";

    /**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be replaced
     * by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the user's
     * browser history. Disable by setting to a negative number.
     * @type {number} in milliseconds
     */
    this.dwellTime = this.getAttribute("dwell-time") || 2000;


    this._registerHandler();

  }

  /**
   * @private
   */
  connectedCallback() {
    document.body.addEventListener("click", this._clickHandler, true);
    document.body.addEventListener("__furoLocationChanged", this._locationChangeNotyfier, true);
    window.addEventListener("popstate", this._locationChangeNotyfier, true);
    window.addEventListener("popstate", this._locationChangeNotyfier, true);
    this._lastChangedAt = window.performance.now() - (this.dwellTime - 200);

    // initial notyfier
    setTimeout(() => {
      this._locationChangeNotyfier({"detail": this._lastChangedAt});
    }, 0)


  }


  /**
   * @private
   */
  disconnectedCallback() {
    document.body.removeEventListener("click", this._clickHandler, true);
    document.body.removeEventListener("__furoLocationChanged", this._locationChangeNotyfier, true);
    window.removeEventListener("popstate", this._locationChangeNotyfier, true);
    window.removeEventListener("popstate", this._locationChangeNotyfier, true);
  }


  // create a valid href string from this._location
  _getHrefFromLocation() {
    // path, query hash
    let href = this._location.path;
    if (this._location.query.length > 0) {
      href += "?" + this._location.query;
    }
    if (this._location.hash.length > 0) {
      href += "#" + this._location.hash;
    }
    return href;
  }


  _registerHandler() {
    this._locationChangeNotyfier = (e) => {
      this._lastChangedAt = e.detail;

      // ignore links outside urlSpaceRegex
      if (this.urlSpaceRegex !== "") {
        if (window.location.pathname.match(this.urlSpaceRegex) === null) {
          return
        }
      }

      // path-changed
      let newPath = window.decodeURIComponent(window.location.pathname);
      if (this._location.path !== newPath) {
        this._location.path = newPath;

        // path segments
        this._location.pathSegments = [];
        let m;
        let rgx = new RegExp(/\/([^/]*)/gi);
        while ((m = rgx.exec(newPath)) !== null) {
          this._location.pathSegments.push(m[1]);
        }



        /**
         * @event location-path-changed
         * Fired when Path portion of the location changed
         * detail payload: {Array} pathSegments
         */
        let customEvent = new Event('location-path-changed', {composed: true, bubbles: false});

        customEvent.detail = this._location.pathSegments;
        this.dispatchEvent(customEvent);

        // notify with masked location (strip rgx part from path segments)
        if (this.urlSpaceRegex) {
          let maskedPath = newPath.replace(new RegExp(this.urlSpaceRegex),"");
          this._location.maskedPathSegments = [];

          let m;
          while ((m = rgx.exec(maskedPath)) !== null) {
            this._location.maskedPathSegments.push(m[1]);
          }


          /**
           * @event masked-path-changed
           * Fired when Path portion of the location changed, but without the urlSpaceRegex part.
           *
           * detail payload: {Array}  with path segments minus the urlSpaceRegex
           */
          let maskePathEvent = new Event('masked-path-changed', {composed: true, bubbles: true});
          maskePathEvent.detail = this._location.maskedPathSegments;
          this.dispatchEvent(maskePathEvent);
        }

      }
      // hash-changed
      let newHash = window.decodeURIComponent(window.location.hash.slice(1));
      if (this._location.hashstring !== newHash) {
        this._location.hashstring = newHash;
        this._location.hash = {};
        if (newHash.length > 0) {
          newHash.split("&").forEach((qstr) => {
            let p = qstr.split("=");
            this._location.hash[p[0]] = p[1];
          });
        }
        /**
         * @event location-hash-changed
         * Fired when Hash portion of the location changed
         * detail payload: {string} hash
         */
        let customEvent = new Event('location-hash-changed', {composed: true, bubbles: false});
        customEvent.detail = newHash;
        this.dispatchEvent(customEvent)
      }

      // query-changed
      let newQuery = window.location.search.slice(1);
      if (this._location.querystring !== newQuery) {
        this._location.querystring = newQuery;
        this._location.query = {};
        if (newQuery.length > 0) {
          newQuery.split("&").forEach((qstr) => {
            let p = qstr.split("=");
            this._location.query[p[0]] = p[1];
          });
        }
        /**
         * @event location-query-changed
         * Fired when Query portion of the location changed
         * detail payload: {Object} queryParams
         */
        let customEvent = new Event('location-query-changed', {composed: true, bubbles: false});
        customEvent.detail = this._location.query;

        this.dispatchEvent(customEvent)
      }

      // location-changed
      /**
       * @event location-changed
       * Fired when something in the location changed
       * detail payload: {object} location
       */
      let customEvent = new Event('location-changed', {composed: true, bubbles: false});
      customEvent.detail = this._location;
      this.dispatchEvent(customEvent);

    };

    /**
     * clicks abfangen
     * @param e
     * @private
     */
    this._clickHandler = (e) => {

      let target = this._findAtagInPath(e.path) || e.path[0];

      // only handle clicks on <a href="..
      if (target.tagName !== "A") {
        return
      }

      // do not interfere with links to other hosts
      if (target.host !== this._location.host) {
        return
      }

      // ignore links outside urlSpaceRegex
      if (this.urlSpaceRegex !== "") {
        if (target.pathname.match(this.urlSpaceRegex) === null) {
          return
        }
      }

      // update history only once
      if (!e.__historyUpdated) {
        e.__historyUpdated = true;


        let now = window.performance.now();
        let shouldReplace = this._lastChangedAt + this.dwellTime > now;
        this._lastChangedAt = now;

        if (shouldReplace) {
          window.history.replaceState({}, '', target.href);
        } else {
          window.history.pushState({}, '', target.href);
        }

        this._notifyFuroLocationChanged();

      }
      // prevent from full reload
      e.preventDefault()
    }
  }

  /**
   * look for A tags in a path array from click events
   * @private
   * @param path
   * @return {boolean|*}
   */
  _findAtagInPath(path) {

    // if we reach body, we are to deep
    if (path[0].tagName === "BODY") {
      return false;
    }
    if (path[0].tagName === "A") {
      return path[0];
    }
    const [head, ...tail] = path;
    return this._findAtagInPath(tail);
  }

  /**
   * Internal notyfication
   * @private
   */
  _notifyFuroLocationChanged() {
    let now = window.performance.now();
    let customEvent = new Event('__furoLocationChanged', {composed: true, bubbles: true});
    customEvent.detail = now;
    this.dispatchEvent(customEvent)
  }
}

window.customElements.define('furo-location', FuroLocation);
