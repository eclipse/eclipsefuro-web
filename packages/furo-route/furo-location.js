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
    this._location = {
      "host":window.location.host
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
     */
    this._dwellTime = this.getAttribute("dwell-time") || 2000;

    this._registerHandler();
  }

  connectedCallback(){
    document.body.addEventListener("click",this._clickHandler,true);
    document.body.addEventListener("__furoLocationChanged",this._locationChangeNotyfier,true);
    this._lastChangedAt = window.performance.now() - (this._dwellTime - 200);

    // initial notyfier
    this._locationChangeNotyfier({"detail":this._lastChangedAt});

  }


  disconnectedCallback(){
    document.body.removeEventListener("click",this._clickHandler,true);
    document.body.removeEventListener("__furoLocationChanged",this._locationChangeNotyfier,true);
  }


  _registerHandler(){
    this._locationChangeNotyfier = (e) =>{
      this._lastChangedAt = e.detail;

      // ignore links outside urlSpaceRegex
      if(this.urlSpaceRegex !== ""){
        if(window.location.pathname.match(this.urlSpaceRegex)  === null){
          return
        }
      }


      // location-changed

      // path-changed
      let newPath = window.decodeURIComponent(window.location.pathname);
      if(this._location.path !== newPath){
        this._location.path = newPath;
        /**
        * @event location-path-changed
        * Fired when Path portion of the location changed
        * detail payload: {string} path
        */
        let customEvent = new Event('location-path-changed', {composed:true, bubbles: false});
        customEvent.detail = newPath;
        this.dispatchEvent(customEvent)
      }
      // hash-changed
      let newHash = window.decodeURIComponent(window.location.hash.slice(1));
       if(this._location.hash !== newHash){
        this._location.hash = newHash;
        /**
        * @event location-hash-changed
        * Fired when Hash portion of the location changed
        * detail payload: {string} hash
        */
        let customEvent = new Event('location-hash-changed', {composed:true, bubbles: false});
        customEvent.detail = newHash;
        this.dispatchEvent(customEvent)
      }

       // query-changed
      let newQuery = window.location.search.slice(1);
       if(this._location.query !== newQuery){
        this._location.query = newQuery;
        /**
        * @event location-query-changed
        * Fired when Query portion of the location changed
        * detail payload: {string} query
        */
        let customEvent = new Event('location-query-changed', {composed:true, bubbles: false});
        customEvent.detail = newQuery;
        this.dispatchEvent(customEvent)
      }

     /**
     * @event location-changed
     * Fired when something in the location changed
     * detail payload: {object} location
     */
     let customEvent = new Event('location-changed', {composed:true, bubbles: false});
     customEvent.detail = this._location;
     this.dispatchEvent(customEvent);
    };

    /**
     * clicks abfangen
     * @param e
     * @private
     */
    this._clickHandler = (e)=>{
      let target = e.target;
      // only handle clicks on <a href="..
      if(target.tagName !== "A"){
        return
      }

      // do not interfere with links to other hosts
      if(target.host !== this._location.host){
        return
      }

      // ignore links outside urlSpaceRegex
      if(this.urlSpaceRegex !== ""){
        if(target.pathname.match(this.urlSpaceRegex)  === null){
          return
        }
      }

      // update history only once
      if(!e.__historyUpdated){
        e.__historyUpdated = true;


        let now = window.performance.now();
        let shouldReplace = this._lastChangedAt + this._dwellTime > now;
        this._lastChangedAt = now;

        if (shouldReplace) {
          window.history.replaceState({}, '', target.href);
        }else{
          window.history.pushState({}, '', target.href);
        }

        let customEvent = new Event('__furoLocationChanged', {composed:true, bubbles: true});
        customEvent.detail = now;
        this.dispatchEvent(customEvent)

      }

      e.preventDefault()
    }
  }


}

window.customElements.define('furo-location', FuroLocation);
