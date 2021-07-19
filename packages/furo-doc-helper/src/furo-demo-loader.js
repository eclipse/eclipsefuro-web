import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-demo-loader`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDemoLoader extends FBP(LitElement) {
  load(location) {
    if (location.pathSegments[0]) {
      const lastDemo = this.shadowRoot.querySelector('#demo');
      lastDemo.remove();

      [this.demoComponent] = location.pathSegments;

      // if the element is registered append the new
      if (document.createElement(this.demoComponent).constructor !== HTMLElement) {
        // append the demo element
        const demo = document.createElement(this.demoComponent);
        demo.id = 'demo';
        this.shadowRoot.appendChild(demo);
      } else {
        const demo = document.createElement('div');
        demo.id = 'demo';
        demo.classList.add('error');
        demo.innerText = `404  -  ${this.demoComponent} is not imported, nothing to show here`;
        this.shadowRoot.appendChild(demo);
      }

      this.requestUpdate();
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDemoLoader') ||
      css`
        :host {
          display: block;
          height: 100%;
          overflow: auto;
          position: relative;
        }

        :host([hidden]) {
          display: none;
        }

        .goback {
          position: absolute;
          right: var(--spacing);
        }
        .error {
          font-size: 48px;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <a class="goback" href="../doc/">Back to package</a>
      <div id="demo"></div>
    `;
  }
}

window.customElements.define('furo-demo-loader', FuroDemoLoader);
