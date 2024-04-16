import {LocationObject} from "./types";

let lastClickEvent: MouseEvent

type EventType =
  'location-path-changed'
  | 'location-hash-changed'
  | 'location-query-changed'
  | 'location-changed'
  | 'external-link-clicked'
  | 'url-space-entered'


interface CustomEventListener {
  (evt: CustomEvent<LocationObject>): void;
}


export class FuroLocation {
  /**
   * A regexp pattern that defines the set of URLs that should be considered part
   * of this web app.
   *
   * Clicking on a link that matches this pattern won't result in a full page
   * navigation, but will instead just update the URL state in place.
   *
   * This regexp is given everything after the origin in an absolute
   * URL. So to match just URLs that start with /app/ do:
   *     url-space-regex="^/app/"
   *
   * If you plan to work in subdirectories, you may set **url-space-regex="^${window.APPROOT}/additional/path"**.
   * Keep in mind to put an "url-space-regex" on every furo-location. Otherwise, you can not switch between apps in different
   * folders using a link.
   *
   * @type {string}
   */
  private urlSpaceRegex: string = "";

  private __eventListener: Map<string, any[]> = new Map();

  private location: LocationObject = {
    host: window.location.host,
    query: {},
    hash: {},
    path: "/detail",
    pathSegments: [],
    hashString: "",
    queryString: ""
  }
  private clickHandler: (e: MouseEvent) => void;
  private locationChangeNotifier: () => void;

  /**
   * look for A tags in a path array from click events
   * @private
   * @param path
   * @return {boolean|*}
   */
  private _findAtagInPath(path:EventTarget[]):HTMLAnchorElement|null {
    // if we reach body, we are too deep
    if ((path[0] as Element).tagName === 'BODY') {
      return null;
    }
    if ((path[0] as Element).tagName === 'A') {
      return path[0] as HTMLAnchorElement;
    }
    const [, ...tail] = path;
    return this._findAtagInPath(tail);
  }

  constructor(urlSpaceRegex: string) {
    this.urlSpaceRegex = urlSpaceRegex;

    this.clickHandler = (e: MouseEvent) => {
      const target = this._findAtagInPath(e.composedPath());


      if (target === null) {
        return;
      }

      // only handle clicks on <a href="..
      if (target.tagName !== 'A') {
        return;
      }

      if (target.tagName === 'A' && target.target === '_blank') {
        return;
      }

      // only handle regular clicks
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      // ignore links outside urlSpaceRegex
      if (this.urlSpaceRegex !== '') {
        if (target.pathname.match(this.urlSpaceRegex) === null) {
          return;
        }
      }

      // do not interfere with links to other hosts
      if (target.host !== window.location.host) {
        const customEvent = new CustomEvent('external-link-clicked', {
          composed: true,
          bubbles: false,
          detail: this.location
        });
        window.dispatchEvent(customEvent);
        return;
      }

      // update history only once
      if (lastClickEvent !== e) {
        lastClickEvent = e;

        window.dispatchEvent(
          new Event('__beforeReplaceState', {composed: true, bubbles: true})
        );

        window.history.replaceState({}, '', target.href);

        // Internal notyfication
        window.dispatchEvent(new CustomEvent('__furoLocationChanged', {
          composed: true,
          bubbles: true,
          detail: window.performance.now()
        }));

      }
      // prevent from full reload
      e.preventDefault();
    }
    this.locationChangeNotifier = () => {
      let sendHashChanged = false;
      let sendQueryChanged = false;
      let sendPathChanged = false;

      // ignore links outside urlSpaceRegex
      if (this.urlSpaceRegex !== '') {
        if (window.location.pathname.match(this.urlSpaceRegex) === null) {
          return;
        }

        if (
          window.location.search === '' &&
          window.location.hash === '' &&
          window.location.pathname.match(`${this.urlSpaceRegex}$`)
        ) {
          this.dispatchEvent(new CustomEvent('url-space-entered', {
            composed: false,
            bubbles: false,
            detail: this.location
          }));
        }
      }

      // register empty objects for later usage
      this.location.query = {};
      this.location.hash = {};

      // path-changed
      // cut of urlSpaceRegex
      const newPath = window
        .decodeURIComponent(window.location.pathname)
        .replace(new RegExp(this.urlSpaceRegex), '');
      if (this.location.path !== newPath) {
        sendPathChanged = true;
      }
      this.location.path = newPath;

      // path segments
      this.location.pathSegments = [];
      let m;
      const rgx = new RegExp(/\/([^/]*)/gi);
      // eslint-disable-next-line no-cond-assign
      while ((m = rgx.exec(newPath)) !== null) {
        this.location.pathSegments.push(m[1]);
      }

      // hash-changed
      const newHash = window.decodeURIComponent(window.location.hash.slice(1));
      if (this.location.hashString !== newHash) {
        sendHashChanged = true;
      }
      this.location.hashString = newHash;
      this.location.hash = {};
      if (newHash.length > 0) {
        newHash.split('&').forEach(qstr => {
          const p = qstr.split('=');
          // eslint-disable-next-line prefer-destructuring
          this.location.hash[p[0]] = p[1];
        });
      }

      // query-changed
      const newQuery = window.location.search.slice(1);
      if (this.location.queryString !== newQuery) {
        sendQueryChanged = true;
      }
      this.location.queryString = newQuery;
      this.location.query = {};
      if (newQuery.length > 0) {
        newQuery.split('&').forEach(qstr => {
          const p = qstr.split('=');
          // eslint-disable-next-line prefer-destructuring
          this.location.query[p[0]] = p[1];
        });
      }

      if (sendPathChanged) {
        this.dispatchEvent(new CustomEvent('location-path-changed', {
          composed: true,
          bubbles: false,
          detail: this.location
        }));
      }

      if (sendHashChanged) {
        this.dispatchEvent(new CustomEvent('location-hash-changed', {
          composed: true,
          bubbles: false,
          detail: this.location
        }));
      }

      if (sendQueryChanged) {
        this.dispatchEvent(new CustomEvent('location-query-changed', {
          composed: true,
          bubbles: false,
          detail: this.location
        }));
      }

      // location-changed
      this.dispatchEvent(new CustomEvent('location-changed', {
        composed: true,
        bubbles: false,
        detail: this.location
      }));


    }
    this.connect()
  }

  /**
   * Add a handler to a node
   * @param type
   * @param handler
   * @param options
   */
  public addEventListener(type: EventType, handler: CustomEventListener, options?: boolean | AddEventListenerOptions): void {
    if (!this.__eventListener.has(type)) {
      this.__eventListener.set(type, []);
    }
    this.__eventListener.get(type)!.push({cb: handler, options: options});
  }

  public dispatchEvent(event: CustomEvent): void {
    if (
      this.__eventListener.has(event.type) &&
      this.__eventListener.get(event.type)!.length > 0
    ) {
      this.__eventListener.get(event.type)!.forEach((t, i, listenerArray) => {
        t.cb(event);
        if (t.options?.once) {
          // eslint-disable-next-line no-param-reassign
          delete listenerArray[i];
        }
      });
    }
  }


  connect() {
    window.addEventListener('click', this.clickHandler, false);
    window.addEventListener(
      '__furoLocationChanged',
      this.locationChangeNotifier,
      true
    );
    window.addEventListener('popstate', this.locationChangeNotifier, true);

    // initial notyfier
    setTimeout(() => {
      this.locationChangeNotifier();
    }, 0);
  }

  disconnect() {
    window.removeEventListener('click', this.clickHandler, false);
    window.removeEventListener(
      '__furoLocationChanged',
      this.locationChangeNotifier,
      true
    );
    window.removeEventListener('popstate', this.locationChangeNotifier, true);
  }


}
