import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-pages`
 *
 * You have to implement a `:host([hidden]){display:none}` in your views
 *
 * @customElement
 * @demo demo/furo-pages.html
 */
class FuroPages extends (LitElement) {

  constructor() {
    super();
    this._fallback = this.getAttribute("default");

    this._default = this.querySelector("*[name=" + this._fallback + "]");
    this._attrForSelected = this.getAttribute("attr-for-selected") || "selected";
    this._lastQP = [];
    this._lastHash = [];
    this._lastPageName = "";

    // set all to hidden
    let l = this.children.length - 1;
    for (l; l >= 0; l--) {
      this.children[l].setAttribute("hidden", '');
    }
    // Activate Default
    this.activatePage(this._fallback)
  }


  /**
   * Activate a page by name
   * @param String pageName
   */
  activatePage(pageName) {
    this.injectLocation({"pathSegments": [pageName]})
  }

  /**
   * set location via attribute
   * will forward to ƒ-inject-location
   * @param location
   */
  set location(location) {
    this.injectLocation(location);
  }

  /**
   * Inject the location Object from furo-location
   *
   * @param location
   */
  injectLocation(location) {

    let page = location.pathSegments[0] || this._fallback;

    if (this._lastPage && page !== this._lastPageName) {
      if (this._lastPage._FBPTriggerWire !== undefined) {
        this._lastPage._FBPTriggerWire('--pageDeActivated');
      }
      this._lastPage.setAttribute("hidden", '');
      this._lastPage.removeAttribute(this._attrForSelected)
    }

    this._lastPage = this.querySelector("*[name=" + page + "]");

    if (!this._lastPage) {
      // 404
      this._lastPage = this.querySelector('*[name="404"]');
      if (this._lastPage) {
      } else {
        this._lastPage = this._default;
      }
    }
    if (this._lastPage) {

      if (page !== this._lastPageName) {
        this._lastPage.removeAttribute("hidden");
        this._lastPage.setAttribute(this._attrForSelected, '');

        this._lastPageName = page;
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('--pageActivated', location);
        }

      }

      // QP
      if (this._lastQP[page] !== location.querystring) {
        this._lastQP[page] = location.querystring;
        // fire --pageParamsChanged if we have a fbp component
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('--pageQueryChanged', location);
        }
      }

      // Hash
      if (this._lastHash[page] !== location.hashstring) {
        this._lastHash[page] = location.hashstring;
        // fire --pageParamsChanged if we have a fbp component
        if (this._lastPage._FBPTriggerWire !== undefined) {
          this._lastPage._FBPTriggerWire('--pageHashChanged', location);
        }
      }

    } else {
      console.warn("default page not found and 404 page not found");
    }
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
    `
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }

}

window.customElements.define('furo-pages', FuroPages);
