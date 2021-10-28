import { LitElement, html, css } from 'lit';

import {FBP} from "@furo/fbp";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/doc-helper"
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/experiments/src/furo-catalog.js';
/**
 * `demo-capture-video`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoCaptureVideo extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return  css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
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
      <furo-vertical-flex>
        <div>
          <h2>Demo demo-capture-video</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-button primary unevelated @-click="--start" label="start"> </furo-button>
            <furo-button danger unevelated @-click="--stop" label="stop"></furo-button>
            <hr>
            <furo-capture-video ƒ-start="--start" ƒ-stop="--stop" @-stream="--stream"></furo-capture-video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
      </furo-vertical-flex>
      </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-capture-video', DemoCaptureVideo);
