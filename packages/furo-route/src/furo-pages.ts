import {LitElement, html, css} from 'lit';
import {LocationObject} from "./types";

interface FBPElement extends LitElement {
  _FBPTriggerWire(wire: string, detailData: any): void;
}

import {FuroPage} from "./types";
import {property} from "lit/decorators.js";

function isFuroPage(object: any): object is FuroPage {
  // check for method
  return !!object.pageActivated;
}

/**
 *
 * Use `furo-pages` to build tabs, views, subviews,...
 *
 *
 * ## preconditions
 * The components used in a furo-page must implement a **aria-hidden** attribute css to set itself to display none.
 *
 * ```css
 * :host([aria-hidden]){
 *    display:none
 *  }
 *```
 *
 * ## usage
 *
 * ```html
 *
 * <furo-pages fn-inject-location="--locationChanged" default="home">
 *    <page-home id="home"></page-home>
 *    <other-page id="more"></other-page>
 *    <view-404 id="404"></view-404>
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
 *
 *
 *
 * @attribute {string} default - Set the default page to show.
 * @attribute {boolean} flex - Enables the flex mode when used in a flex parent like vertical-flex.
 *
 * @slot {HTMLElement [0..n]} default - default slot to add pages.
 * @summary Simple content switcher
 * @tagname furo-pages
 * @customElement
 */
export class FuroPages extends LitElement {
  private _fallback: string ;
  private _default: FBPElement | null;
  private _attrForSelected: string;
  private _lastQP: Map<string, string>;
  private _lastHash: Map<string, string>;
  private _lastPageName: string;
  public urlSpaceRegex: string = '';
  private _lastPage: FBPElement | null = null;

  private _page:string =''

  @property({ type: String })
  set page(p:string){
    this.activatePage(p)
    this._page = p
  }

  get page():string{
    return this._page
  }


  constructor() {
    super();

    this._fallback = this.getAttribute('default') || 'default';

    this._default = this.querySelector(`*[id=${this._fallback}]`);

    this._attrForSelected = 'selected';

    this._lastQP = new Map<string, string>();

    this._lastHash = new Map<string, string>();

    this._lastPageName = '';

    // set all to aria-hidden
    let l = this.children.length - 1;
    for (l; l >= 0; l -= 1) {
      this.children[l].setAttribute('aria-hidden', '');
    }
  }


  override firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => {
      // Activate Default
      if (!this._lastPageName && typeof this._fallback === 'string') {
        this.activatePage(this._fallback);
      }
    }, 1);
  }

  /**
   * Activate a page by name
   * @param {string} pageName
   */
  activatePage(pageName: string) {
    /**
     * imitate a location object like furo-location would send, to have a consistent behavior
     * @type {{pathSegments: [*]}}
     */
    const hashString = window.decodeURIComponent(window.location.hash.slice(1));
    const queryString = window.location.search.slice(1);
    const pseudolocation: LocationObject = {
      host: window.location.host,
      path: window
        .decodeURIComponent(window.location.pathname)
        .replace(new RegExp(this.urlSpaceRegex), ''),
      pathSegments: [pageName],
      hashString,
      hash: {},
      query: {},
      queryString
    };

    // build the hash object
    if (hashString.length > 0) {
      hashString.split('&').forEach(qstr => {
        const p = qstr.split('=');
        // eslint-disable-next-line prefer-destructuring
        pseudolocation.hash[p[0]] = p[1];
      });

    }
    // build the query object
    if (queryString.length > 0) {
      queryString.split('&').forEach(qstr => {
        const p = qstr.split('=');
        // eslint-disable-next-line prefer-destructuring
        pseudolocation.query[p[0]] = p[1];
      });
    }

    return this.injectLocation(pseudolocation);
  }

  /**
   * Inject the location Object from furo-location. The page which is defined in location.pathSegments[0] will get activated.
   *
   * To meke "sub" pages do not forget to enable the `url-space-regex` property on the *furo-location* component which feeds this component.
   *
   * If the page/view does not exist, and you have a page "404" defined, the 404 will be shown
   *
   * If the page/view does not exist AND 404 does not exist, the default page gets activated.
   *
   * @param location
   */
  injectLocation(location: LocationObject) {
    const page = location.pathSegments[0] || this._fallback;
    if (page === null) {
      console.error('No page defined');
      return
    }
    if (this._lastPage && page !== this._lastPageName) {
      if (this._lastPage._FBPTriggerWire !== undefined) {
        this._lastPage._FBPTriggerWire('|--pageDeActivated', location);
      }

      if (isFuroPage(this._lastPage)) {
        const lp = this._lastPage as FuroPage
        customElements.whenDefined(this._lastPage.localName).then(() => {
          lp.pageDeActivated(location);
        })
      }


      this._lastPage.setAttribute('aria-hidden', '');
      this._lastPage.removeAttribute(this._attrForSelected);

    }


    this._lastPage = this.querySelector(`*[id="${page}"]`);

    if (!this._lastPage) {
      // 404
      this._lastPage = this.querySelector('*[id="404"]');
      if (!this._lastPage) {
        this._lastPage = this._default;
      }
    }
    if (this._lastPage) {
      if (this._lastPage.hasAttribute('aria-hidden')) {
        this._lastPage.removeAttribute('aria-hidden');
      }

      setTimeout(() => {
        this._lastPage?.setAttribute(this._attrForSelected, '');
      }, 1);

      // activate if a different page is selected, otherwise notify
      if (this._lastPageName !== page) {
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('|--pageActivated', location);
        }
        if (isFuroPage(this._lastPage)) {
          const lp = this._lastPage as FuroPage
          customElements.whenDefined(this._lastPage.localName).then(() => {
            lp.pageActivated(location);
          })
        }
      } else {
        if (this._lastPage._FBPTriggerWire !== undefined) {
          // for backward compatibility
          this._lastPage._FBPTriggerWire('|--pageReActivated', location);
          this._lastPage._FBPTriggerWire('|--pageUpdated', location);
        }
        if (isFuroPage(this._lastPage)) {
          const lp = this._lastPage as FuroPage
          customElements.whenDefined(this._lastPage.localName).then(() => {
            lp.pageUpdated(location);
          })
        }
      }

      this._lastPageName = page;
      // QP
      if (this._lastQP.get(page) !== location.queryString) {
        this._lastQP.set(page, location.queryString);
        // fire --pageParamsChanged if we have a fbp component
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('|--pageQueryChanged', location);
        }
        if (isFuroPage(this._lastPage)) {
          const lp = this._lastPage as FuroPage
          if (lp.pageQueryChanged) {
            customElements.whenDefined(this._lastPage.localName).then(() => {
              lp.pageQueryChanged!(location);
            })
          }
        }
      }

      // Hash
      if (this._lastHash.get(page) !== location.hashString) {
        this._lastHash.set(page, location.hashString);
        // fire --pageParamsChanged if we have a fbp component
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('|--pageHashChanged', location);
        }
        if (isFuroPage(this._lastPage)) {
          const lp = this._lastPage as FuroPage
          if (lp.pageHashChanged) {
            customElements.whenDefined(this._lastPage.localName).then(() => {
              lp.pageHashChanged!(location);
            })
          }
        }
      }

      return this._lastPage;
    }
    // eslint-disable-next-line no-console
    console.warn('default page not found and 404 page not found');
    return false;
  }

  /**
   *
   * @private
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      ::slotted(*[aria-hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   */
  render() {
    // language=HTML
    return html`
      <slot></slot> `;
  }
}

window.customElements.define('furo-pages', FuroPages);