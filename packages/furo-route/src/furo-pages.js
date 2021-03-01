import { LitElement, html, css } from 'lit-element';

/**
 * `furo-pages` is used to select one of its children to show.
 *
 * ### caveat
 * You have to implement a `:host([hidden]){display:none}` in your views css
 *
 * ### flowbased auto wires
 * furo-pages provides auto wires, which are automatically injected if
 * the element inside has flowbased enabled.
 *
 * | wire               | timing           |
 * |:-------------------|:-----------------|
 * | --pageDeActivated  | Every time the page changes to hidden   |
 * | --pageActivated    | Every time the page changes its attribute _attrForSelected or selected
 *
 * @summary Simple content switcher
 * @demo demo-furo-panel-coordinator with panel coordinator
 * @customElement
 */
class FuroPages extends LitElement {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this._fallback = this.getAttribute('default');
    // eslint-disable-next-line wc/no-constructor-attributes
    this._default = this.querySelector(`*[name=${this._fallback}]`);
    // eslint-disable-next-line wc/no-constructor-attributes
    this._attrForSelected = this.getAttribute('attr-for-selected') || 'selected';
    this._lastQP = [];
    this._lastHash = [];
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
    return this.injectLocation({ pathSegments: [pageName] });
  }

  /**
   * Deprecated: use ƒ-inject-location.
   *
   * @param location
   */
  set location(location) {
    return this.injectLocation(location);
  }

  /**
   * Inject the location Object from furo-location
   *
   * @param location
   */
  injectLocation(location) {
    const page = location.pathSegments[0] || this._fallback;

    if (this._lastPage && page !== this._lastPageName) {
      if (this._lastPage._FBPTriggerWire !== undefined) {
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
      this._lastPage.setAttribute(this._attrForSelected, '');

      this._lastPageName = page;
      if (this._lastPage._FBPTriggerWire !== undefined) {
        this._lastPage._FBPTriggerWire('--pageActivated', location);
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
    `;
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
