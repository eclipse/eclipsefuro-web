import {LitElement, html, css} from 'lit-element';

/**
 * `markdown-container`
 * Renders a markdown file with syntax highlighting
 *
 * @customElement
 * @demo demo/index.html
 */
class MarkdownContainer extends LitElement {

  constructor() {
    super();
    this.markedText = '';

  }

  static get properties() {
    return {
      src: {type: String}
    };
  }

  static get styles() {
    // language=CSS
    return [
      css`
          :host {
              display: block;
              font-family: "Roboto", "Noto", sans-serif;
              line-height: 1.5;
              
              margin: var(--gap-size);
              
          }

          .hljs {
              display: block;
              overflow-x: auto;
              padding: .5em;
              background: white;
              color: black
          }

          .hljs-comment, .hljs-quote {
              color: #800
          }

          .hljs-keyword, .hljs-selector-tag, .hljs-section, .hljs-title, .hljs-name {
              color: #008
          }

          .hljs-variable, .hljs-template-variable {
              color: #660
          }

          .hljs-string, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-regexp {
              color: #080
          }

          .hljs-literal, .hljs-symbol, .hljs-bullet, .hljs-meta, .hljs-number, .hljs-link {
              color: #066
          }

          .hljs-title, .hljs-doctag, .hljs-type, .hljs-attr, .hljs-built_in, .hljs-builtin-name, .hljs-params {
              color: #606
          }

          .hljs-attribute, .hljs-subst {
              color: #000
          }

          .hljs-formula {
              background-color: #eee;
              font-style: italic
          }

          .hljs-selector-id, .hljs-selector-class {
              color: #9B703F
          }

          .hljs-addition {
              background-color: #baeeba
          }

          .hljs-deletion {
              background-color: #ffc8bd
          }

          .hljs-doctag, .hljs-strong {
              font-weight: bold
          }

          .hljs-emphasis {
              font-style: italic
          }


          h1, h2, h3, h4, h5 {
               
          }

          h1 {
              display: none;
          }

          hr {
              width: 100px;
              height: 6px;
              background: #8198B6;
              border: none;
              box-shadow: none;
          }

          a {
              color: #8198B6;
              transition: all 0.2s ease-in;
          }

          a:hover {
              color: #355A8B;
          }

          code {
              font-size: 14px;
          }

          pre {
              background-color: var(--background);
              padding: var(--gap-size);
          }

          blockquote {
              background: var(--backround);
              margin: 1.5em 10px;
              padding: 0.5em 10px;
              quotes: "\\201C" "\\201D" "\\2018" "\\2019";
          }

          blockquote:before {
              color: var(--on-primary);
              content: open-quote;
              font-size: 4em;
              line-height: 0.1em;
              margin-right: 0.25em;
              vertical-align: -0.4em;
          }

          blockquote p {
              display: inline;
          }

          img {
              width: 80%;
              height: auto;
              margin: 24px 0 24px 10%;
          }
      `
    ];
  }

  scrollToH2(h2ID) {
    this.shadowRoot.querySelector("#" + h2ID).scrollIntoView();
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);

    let _this = this;

    if (newval && newval !== 'undefined') {

      fetch(newval)
          .then((response) => response.text())
          .then(function (text) {
            // md -> html.

            _this.markedText = marked(text);

            _this.shadowRoot.querySelector('#content').innerHTML = _this.markedText;

            // Highlight ALL the things. If you don't like this way, you can
            // change it. Or remove it. I don't care.
            const codes = _this.shadowRoot.querySelectorAll('pre code');
            for (let i = 0; i < codes.length; i++) {
              hljs.highlightBlock(codes[i]);
            }

            /**
             * @event navigation-extracted
             * Fired when
             * detail payload:
             */
            let customEvent = new Event('navigation-extracted', {composed: true, bubbles: true});
            customEvent.detail = _this.shadowRoot.querySelectorAll("h2");
            _this.dispatchEvent(customEvent);

            let h1Node = _this.shadowRoot.querySelector("h1");
            if(h1Node){
              /**
               * @event title-extracted
               * Fired when
               * detail payload:
               */
              let titleEvent = new Event('title-extracted', {composed: true, bubbles: true});
              titleEvent.detail = h1Node.innerText;
                  _this.dispatchEvent(titleEvent)
            }


          });
    }
  }

  render() {
    // language=HTML
    return html`
      <div id="content"></div>
    `;
  }

}

window.customElements.define('markdown-container', MarkdownContainer);
