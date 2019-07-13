import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import 'commonmark/dist/commonmark.js';
import 'prismjs/prism.js';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';


const ALLOWED_THEMES = ['coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'];


/**
 * `furo-markdown`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-markdown.html
 * @appliesMixin FBP
 */
class FuroMarkdown extends (LitElement) {


  constructor() {
    super();
    this.theme = "default";
    this.__reader = new commonmark.Parser();
    this.__writer = new commonmark.HtmlRenderer({safe: true});
    this.markdownRendered = undefined;
    this.__styles = undefined;
  }


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * source of the md
       */
      mdsrc: {type: String},
      /**
       * prism theme
       */
      theme: {type: String},
      /**
       * prism theme url
       */
      customtheme: {type: String}
    };
  }


  set mdsrc(src) {
    this.fetchMd(src).then(markdown => {
      this.markdownRendered = this._parseMarkdown(markdown);
      this.requestUpdate();
    }).catch(err => err);
  }

  set customtheme(src) {
    let body = {};
    body.customtheme = src;
    this.fetchStyles(body).then(styles => {
      this.__styles = html`${unsafeHTML(styles)}`;

    });
  }

  set theme(src) {
    let body = {};
    body.theme = src;
    this.fetchStyles(body).then(styles => {
      this.__styles = html`${unsafeHTML(styles)}`;
    });

  }


  /**
   * fetch markdown from a url or path
   * @param src
   * @return {Promise<string | never>}
   */
  fetchMd(src) {
    return fetch(src).then(res => res.text()).then(markdown => markdown);
  }


  /**
   * method to fetch styles from a url or path
   * @param customtheme
   * @param theme
   * @return {Promise<string>}
   */
  async fetchStyles({customtheme, theme}) {
    const theme_file = (ALLOWED_THEMES.includes(theme)) ? `prism-${theme}.css` : 'prism.css';
    const resource = customtheme !== undefined ? customtheme : `/node_modules/prismjs/themes/${theme_file}`;

    const fetchedStyles = await fetch(resource).then(async response => await response.text()).catch(e => '');

    return `<style>
    ${fetchedStyles}
    </style>`;
  }


  parseMarkdown(markdown){
  this.markdownRendered = this._parseMarkdown(markdown);
  this.requestUpdate();
  }
  /**
   * parse markdown string to html content
   * @param markdown
   * @return {TemplateResult | TemplateResult}
   */
  _parseMarkdown(markdown) {
    return html`${unsafeHTML(this.__writer.render(this.__reader.parse(markdown)))}`;
  }

  updated() {
    // code highlighter
    Prism.highlightAllUnder(this.shadowRoot);
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }

        img {
            max-width: 100%;
        }


    `
  }

  render() {
    return html`
      ${this.__styles}
      ${this.markdownRendered}`
  }
}

window.customElements.define('furo-markdown', FuroMarkdown);
