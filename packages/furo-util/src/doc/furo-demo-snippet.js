import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-vertical-flex.js';
import '../furo-markdown.js';
import '@furo/fbp/src/empty-fbp-node.js';
import './graph/furo-show-flow.js';

/**
 * `furo-demo-snippet`
 *  This is a documentation helper to show a example, the flow and the source of an example.
 *
 * @summary documentation helper
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
    // language=CSS
    return [
      css`
        :host {
          display: block;
          height: 320px;
          box-sizing: border-box;
          overflow: hidden;


        /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
        /* https://material.io/design/material-theming/implementing-your-theme.html#color */
          --primary-light: #4ccd50;
          --primary: #4caf50;
          --primary-rgb: 76, 175, 80;
          --primary-dark: #4b9b4f;
          --primary-variant: #2587a3;
          --on-primary: #ffffff;

          --secondary-light: #fdd756;
          --secondary: #fecf2f;
          --secondary-rgb: 254, 207, 47;
          --secondary-dark: #ffc911;
          --secondary-variant: #faedc1;
          --on-secondary: #212121;

          --accent-light: #ecf3ca;
          --accent: #cce35b;
          --accent-rgb: 204, 227, 91;
          --accent-dark: #bada18;
          --on-accent: #212121;

          --background: #eeeeee;
          --background-rgb: 238, 238, 238;
          --on-background: #212121;
          --on-background-rgb: 33, 33, 33;

          --surface-light: #f3f3f3;
          --surface-light-rgb: 243, 243, 243;
          --surface: #fefefe;
          --surface-rgb: 254, 254, 254;
          --surface-dark: #f0f0f0;
          --on-surface: #212121;
          --on-surface-rgb: 33, 33, 33;
          --separator: #e4e4e4;

        /* States */
          --state-hover: 0.04;
          --state-selected: 0.08;
          --state-selected-hover: 0.12;
          --state-active: 0.1;
          --state-focus: 0.12;
          --state-focused-hover: 0.18;
          --state-selected-focus: 0.2;
          --state-selected-focused-hover: 0.24;
          --state-disabled: 0.38;

        /* Emphasis, used for secondary text,... */
          --medium-emphasis-surface: 0.6;
          --medium-emphasis-primary: 0.74;

        /* Input, Forms, Toast*/
          --error: #ea1c24;
          --on-error: #ffffff;

          --danger-light: #fc1c21;
          --danger: #ee1c21;
          --danger-dark: #de1c21;
          --on-danger: #f8f8f8;

          --success: #129991;
          --on-success: #202124;

          --disabled: #c3c4c3;
          --on-disabled: #585858;

        /* Spacing */
          --spacing-xxs: 4px;
          --spacing-xs: 8px;
          --spacing-s: 16px;
          --spacing: 24px;
          --spacing-m: 24px;
          --spacing-l: 32px;
          --spacing-xl: 48px;
          --spacing-xxl: 96px;

          --furo-form-layouter-row-gap: var(--spacing-xs);
          --furo-form-layouter-column-gap: var(--spacing-xs);

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
      `
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
