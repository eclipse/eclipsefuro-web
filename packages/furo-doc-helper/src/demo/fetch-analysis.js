import { LitElement } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `fetch-analysis`
 * todo Describe your element
 *
 * @fires {analysis} data -  Fired when analysis loaded
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FetchAnalysis extends FBP(LitElement) {
  constructor() {
    super();

    fetch('/node_modules/@furo/data/analysis.json')
      .then(res => res.json())
      .then(analysis => {

        const customEvent = new Event('data', { composed: true, bubbles: true });
        customEvent.detail = analysis;
        this.dispatchEvent(customEvent);
      })
      .catch(err => err);
  }
}

window.customElements.define('fetch-analysis', FetchAnalysis);
