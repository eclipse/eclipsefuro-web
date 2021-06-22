import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `furo-document-title`
 *
 *  Updates the document title and set navigation waypoints.
 *
 *  ## Structure of the title
 *  The title is built up from 3 parts (`prefix`, `title`, `suffix`). Each of them can be set by attribute or a setter method. The `title` and `suffix` part can be set with a fieldnode from a `furo-data-object`.
 *
 *  `document.title = prefix + title + suffix`
 *
 *  ## Waypoints
 *  Waypoints are pushed to the browser history and allows you to navigate with the back and forward buttons of the browser.
 *  To return to the last waypoint within your app, you have to trigger a `history.back()`. Read more about the history API [here](https://developer.mozilla.org/en-US/docs/Web/API/History).
 *
 *  If you use `furo-app-flow` you can send the **history-back** event.
 *
 *  Views and pages without a waypoint are not stored in the history.
 *
 *  ```
 *  [a]-->[b]-->[.]-->[.]-->[.]-->[c]
 *         ▲                       │
 *         └───────────────────────┘
 *         By clicking the back button you will return to b
 *
 *  ```
 *
 *  ## Usage example
 *
 *  ```html
 *   <furo-document-title
 *     prefix="${i18n.t('prefix.label')} ["
 *     ƒ-bind-title="--DataObject(*.display_name)"
 *     suffix="]"
 *     ƒ-set-waypoint="--pageActivated"
 *   ></furo-document-title>
 *  ```
 *  The document title will be set to: `PrefixLabel [display_name_value]`
 *
 *
 *
 * @summary Document title
 * @customElement furo-document-title
 * @appliesMixin FBP
 */
class FuroDocumentTitle extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this.prefix = '';
    // eslint-disable-next-line wc/no-constructor-attributes
    this.title = '';
    this.suffix = '';
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Title part, you can also use `setTitle()` or `bindTitle().`
       */
      title: { type: String },
      /**
       * prefix part, you can also use `setPrefix()`.`
       */
      prefix: { type: String },
      /**
       * Suffix part, you can also use `setSuffix()` or `bindSuffix().`
       */
      suffix: { type: String },
    };
  }

  setWaypoint() {
    /**
     * Waypoints are set in a staging (PreStage) and pushed to the history when
     * something in the url changes.
     */
    this._setDocumentTitle();

    /**
     * This will push the waypoint to the browser history and clear the listeners for cancelation and popstate
     */
    const pushState = () => {
      window.removeEventListener('__beforeReplaceState', pushState, true);
      // eslint-disable-next-line no-use-before-define
      window.removeEventListener('popstate', cancelPre, true);
      window.history.pushState({}, document.title, window.location.href);
      this._inPreStage = false;
      /**
      * @event waypoint-pushed
      * Fired when the waypoint is finaly pushed to the browser history.
      */
      this.dispatchEvent(new Event('waypoint-pushed', {composed:true, bubbles: true}))
    };

    /**
     * This will cancel the staged waypoint
     */
    const cancelPre = () => {
      window.removeEventListener('__beforeReplaceState', pushState, true);
      window.removeEventListener('popstate', cancelPre, true);
      this._inPreStage = false;
      /**
       * @event waypoint-canceled
       * Fired when the waypoint was set but not pushed to the history, because the user navigated back.
       */
      this.dispatchEvent(new Event('waypoint-canceled', {composed:true, bubbles: true}))
    };

    /**
     * Put the waypoint in to the staging
     */
    if (!this._inPreStage) {
      this._inPreStage = true;
      window.addEventListener('__beforeReplaceState', pushState, true);
      // cancel pre on navigate back
      window.addEventListener('popstate', cancelPre, true);
    }
  }

  /**
   * Set the document title with the current prefix title suffix. Without setting a waypoint.
   *
   */
  activate() {
    this._setDocumentTitle();
  }

  /**
   * Renders the title and set it as document title
   */
  async _setDocumentTitle() {
    document.title = this.prefix + this.title + this.suffix;
  }

  /**
   * Updates the suffix
   * @param s
   */
  setSuffix(s) {
    this.suffix = s;
    this._setDocumentTitle();
  }

  /**
   * Updates the title
   * @param title string
   */
  setTitle(title) {
    if (title !== undefined) {
      this.title = title;
    }
    this._setDocumentTitle();
  }

  /**
   * Bind a fieldnode to auto update the suffix
   * @param fieldnode
   */
  bindSuffix(fieldnode) {
    fieldnode.addEventListener('field-value-changed', () => {
      this.suffix = fieldnode._value;
      this._setDocumentTitle();
    });
  }

  /**
   * Bind a fieldnode to auto update the title
   * @param fieldnode
   */
  bindTitle(fieldnode) {
    fieldnode.addEventListener('field-value-changed', () => {
      this.title = fieldnode._value;
      this._setDocumentTitle();
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDocumentTitle') ||
      css`
        :host {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-document-title', FuroDocumentTitle);
