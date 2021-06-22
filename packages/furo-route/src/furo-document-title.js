import {LitElement, css} from 'lit-element';
import {Theme} from '@furo/framework/src/theme.js';
import {FBP} from '@furo/fbp';

/**
 * `furo-document-title`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement furo-document-title
 * @demo demo-document-title
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
       * Title to be set
       */
      title: {type: String},
      prefix: {type: String},
      suffix: {type: String},
      waypoint: {type: Boolean},

    };
  }


  setWaypoint() {
    /**
     * Waypoints are set in a staging (PreStage) and pushed to the history when
     * something in the url changes.
     */
    this._setDocumentTitle()

    /**
     * This will push the waypoint to the browser history and clear the listeners for cancelation and popstate
     */
    const pushState = () => {
      window.removeEventListener('__beforeReplaceState', pushState, true);
      // eslint-disable-next-line no-use-before-define
      window.removeEventListener('popstate', cancelPre, true);
      window.history.pushState({}, document.title, window.location.href)
      this._inPreStage = false;
    };

    /**
     * This will cancel the staged waypoint
     */
    const cancelPre = () => {
      window.removeEventListener('__beforeReplaceState', pushState, true);
      window.removeEventListener('popstate', cancelPre, true);
      this._inPreStage = false;
    }

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
   * Renders the title and set it as document title
   */
  _setDocumentTitle() {
    document.title = this.prefix + this.title + this.suffix;
  }

  setSuffix(s) {
    this.suffix = s;
    this._setDocumentTitle();
  }

  /**
   * Set the title
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
