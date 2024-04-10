import { LitElement, html, css } from 'lit';

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
 * @attribute {String} default - Set the default page to show.
 *
 * @slot {HTMLElement [0..n]} default - default slot to add pages.
 * @summary Simple content switcher
 * @demo demo-furo-panel-coordinator with panel coordinator
 * @customElement
 */
export class FuroPages extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    // eslint-disable-next-line wc/no-constructor-attributes
    this._fallback = this.getAttribute('default');
    /**
     * @private
     */
    // eslint-disable-next-line wc/no-constructor-attributes
    this._default = this.querySelector(`*[name=${this._fallback}]`);
    /**
     * **attr-for-selected** If you do not want to have *selected* as attribute to mark the selected state, change this value.
     * @type {string|string}
     * @private
     */
    // eslint-disable-next-line wc/no-constructor-attributes
    this._attrForSelected =
      this.getAttribute('attr-for-selected') || 'selected';
    /**
     * @private
     */
    this._lastQP = [];
    /**
     * @private
     */
    this._lastHash = [];
    /**
     * @private
     */
    this._lastPageName = '';

    // set all to hidden
    // eslint-disable-next-line wc/no-constructor-attributes
    let l = this.children.length - 1;
    for (l; l >= 0; l -= 1) {
      // eslint-disable-next-line wc/no-constructor-attributes
      this.children[l].setAttribute('hidden', '');
    }
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => {
      // Activate Default
      if (!this._lastPageName) {
        this.activatePage(this._fallback);
      }
    }, 1);
  }

  /**
   * Activate a page by name
   * @param String pageName
   */
  activatePage(pageName) {
    /**
     * imitate a location object like furo-location would send, to have a consisten behavior
     * @type {{pathSegments: [*]}}
     */
    const pseudolocation = { pathSegments: [pageName] };

    pseudolocation.path = window
      .decodeURIComponent(window.location.pathname)
      .replace(new RegExp(this.urlSpaceRegex), '');

    const newHash = window.decodeURIComponent(window.location.hash.slice(1));
    pseudolocation.hashstring = newHash;

    // build the hash object
    pseudolocation.hash = {};
    if (newHash.length > 0) {
      newHash.split('&').forEach(qstr => {
        const p = qstr.split('=');
        // eslint-disable-next-line prefer-destructuring
        pseudolocation.hash[p[0]] = p[1];
      });
    }

    // query-changed
    const newQuery = window.location.search.slice(1);
    pseudolocation.querystring = newQuery;
    pseudolocation.query = {};
    if (newQuery.length > 0) {
      newQuery.split('&').forEach(qstr => {
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
  injectLocation(location) {
    const page = location.pathSegments[0] || this._fallback;

    if (this._lastPage && page !== this._lastPageName) {
      if (this._lastPage._FBPTriggerWire !== undefined) {
        this._lastPage._FBPTriggerWire('|--pageDeActivated');
        this._lastPage._FBPTriggerWire('--pageDeActivated');
      }
      this._lastPage.setAttribute('hidden', '');
      this._lastPage.removeAttribute(this._attrForSelected);
    }

    this._lastPage = this.querySelector(`*[name="${page}"]`);

    if (!this._lastPage) {
      // 404
      this._lastPage = this.querySelector('*[name="404"]');
      if (!this._lastPage) {
        this._lastPage = this._default;
      }
    }
    if (this._lastPage) {
      if (this._lastPage.hasAttribute('hidden')) {
        this._lastPage.removeAttribute('hidden');
      }

      setTimeout(() => {
        this._lastPage.setAttribute(this._attrForSelected, '');
      }, 1);

      if (this._lastPage && page !== this._lastPageName) {
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('|--pageActivated', location);
          this._lastPage._FBPTriggerWire('--pageActivated', location);
        }
      } else if (this._lastPage._FBPTriggerWire !== undefined) {
        this._lastPage._FBPTriggerWire('|--pageReActivated', location);
        this._lastPage._FBPTriggerWire('--pageReActivated', location);
      }
      this._lastPageName = page;
      // QP
      if (this._lastQP[page] !== location.querystring) {
        this._lastQP[page] = location.querystring;
        // fire --pageParamsChanged if we have a fbp component
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('|--pageQueryChanged', location);
          this._lastPage._FBPTriggerWire('--pageQueryChanged', location);
        }
      }

      // Hash
      if (this._lastHash[page] !== location.hashstring) {
        this._lastHash[page] = location.hashstring;
        // fire --pageParamsChanged if we have a fbp component
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('|--pageHashChanged', location);
          this._lastPage._FBPTriggerWire('--pageHashChanged', location);
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
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([animated]) ::slotted(*[selected]) {
        transition: all linear 0.1s;
        transform: rotateY(0deg);
      }
      :host([animated]) ::slotted(*) {
        transform: rotateY(-10deg);
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html` <slot></slot> `;
  }
}

window.customElements.define('furo-pages', FuroPages);
