import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import { Styling } from './styling.js';
import '@furo/layout';
import '@furo/util/src/furo-markdown';
import './graph/furo-show-flow.js';

/**
 * `furo-demo-snippet`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement

 * @appliesMixin FBP
 */
class FuroDemoSnippet extends FBP(LitElement) {
  constructor() {
    super();

    // eslint-disable-next-line wc/no-constructor-attributes
    const t = this.querySelector('template');
    this.template = t.content;
    this.markdown = `\`\`\`html\n${t.innerHTML}\n\`\`\``;

    this.icon = 'fullscreen';
    this.addEventListener('source', () => {
      this.source = true;
      this.demo = false;
      this.flow = false;
      this._FBPTriggerWire('--markdown', this.markdown);
      // eslint-disable-next-line wc/no-constructor-attributes
      const md = this.shadowRoot.querySelector('furo-markdown');
      md.style.width = `${this.offsetWidth}px`;
    });

    this.addEventListener('demo', () => {
      this.source = false;
      this.demo = true;
      this.flow = false;
    });

    this.addEventListener('flow', () => {
      this.source = false;
      this.demo = false;
      this.flow = true;
      this._FBPTriggerWire('--template', this.template);
    });
  }

  firstUpdated(v) {
    super.firstUpdated(v);
    const md = this.shadowRoot.querySelector('furo-markdown');
    md.style.width = `${this.offsetWidth}px`;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      source: { type: Boolean, reflect: true },
      demo: { type: Boolean, reflect: true },
      flow: { type: Boolean, reflect: true },
      fullscreen: { type: Boolean, reflect: true },
      noDemo: { type: Boolean, reflect: true, attribute: 'no-demo' },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // check if demo is disabled
    const demo = this.shadowRoot.querySelector('#demo');
    if (!this.noDemo) {
      const elem = document.createElement('empty-fbp-node');
      elem.attachShadow({ mode: 'open' });
      elem.shadowRoot.appendChild(this.template.cloneNode(true));
      elem._appendFBP(elem.shadowRoot);
      elem._FBPTraceWires();
      demo.appendChild(elem.shadowRoot);
    } else {
      demo.innerText = 'Demo is disabled';
    }

    if (!this.source && !this.flow) {
      this.demo = true;
    }

    if (this.source) {
      this._FBPTriggerWire('--markdown', this.markdown);
    }
    if (this.flow) {
      this._FBPTriggerWire('--template', this.template);
    }

    /**
     * Register hook on wire --fullscreen to
     * toggle fullscreen of the demo
     */
    this._FBPAddWireHook('--fullscreen', () => {
      if (!this.fullscreen) {
        this.requestFullscreen();
        this.fullscreen = true;
        this.icon = 'fullscreen-exit';
        this.requestUpdate();
      } else {
        document.exitFullscreen();
        this.fullscreen = false;
        this.icon = 'fullscreen';
        this.requestUpdate();
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    const theme = Theme.getThemeForComponent('FuroDemoSnippet');
    if (theme) {
      return [theme, Styling.theme];
    }
    // language=CSS
    return [
      css`
        :host {
          display: block;
          height: 320px;
          box-sizing: border-box;
          overflow: hidden;
          background-color: var(--surface);
        }

        :host([hidden]) {
          display: none;
        }

        :host([fullscreen]) .nav {
          background-color: var(--surface-light);
          padding: 16px;
        }

        :host([fullscreen]) .nav span {
          border-bottom-color: var(--surface-light);
        }

        :host([fullscreen]) {
          height: 100vh;
        }

        furo-markdown {
          background-color: var(--surface-light);
          height: 100%;
          overflow: auto;
        }
        furo-show-flow {
          background-color: var(--surface-light);
        }
        #demo,
        #flow {
          height: 100%;
        }
        #demo {
          padding: var(--spacing-s);
          box-sizing: border-box;
        }

        :host(:not([demo])) #demo {
          display: none;
        }

        :host(:not([flow])) #flow {
          display: none;
        }

        :host(:not([source])) > furo-markdown {
          display: none;
        }

        div.flexbody {
          height: inherit;
          overflow: hidden;
        }

        span {
          cursor: pointer;
        }

        .nav {
          background-color: var(--surface-light, white);
          color: var(--on-surfcae);
        }

        .nav span {
          display: inline-block;
          border-bottom: 1px solid var(--surface-light, white);
          cursor: pointer;
        }

        .nav furo-icon {
          cursor: pointer;
        }
        :host([flow]) .flow {
          font-weight: 800;
          border-bottom: 1px solid var(--on-primary);
        }

        :host([demo]) .demo {
          font-weight: 800;
          border-bottom: 1px solid var(--on-primary);
        }

        :host([no-demo]) .demo {
          display: none;
        }

        :host([source]) .source {
          font-weight: 800;
          border-bottom: 1px solid var(--on-primary);
        }
      `,
      Styling.theme,
    ];
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div class="nav">
          <span class="demo" @-click="-^demo">demo</span> |
          <span class="source" @-click="-^source">source</span> |
          <span class="flow" @-click="-^flow">flow</span> |
          <furo-icon style="float:right" @-click="--fullscreen" icon="${this.icon}"></furo-icon>
        </div>

        <div flex class="flexbody">
          <div id="demo" flex></div>
          <furo-show-flow id="flow" ƒ-parse-template="--template"></furo-show-flow>
          <furo-markdown id="source" ƒ-parse-markdown="--markdown"></furo-markdown>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('furo-demo-snippet', FuroDemoSnippet);
