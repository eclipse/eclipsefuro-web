import { LitElement, html, css } from 'lit-element';
import '@furo/data-ui/src/furo-type-renderer.js';
import { FieldNode } from '@furo/data/src/lib/FieldNode';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode';

/**
 * `furo-ui5-data-property-display` allows the user to show repeated or single properties (furo.Property) in a readonly mode.
 * The type information of the property is used for the display of the individual attributes.
 * E.g.
 * ```
 * {
 *  "code": "c0a7f550-0fbe-4046-8fa9-60c86327b6b1",
 *  "data": {
 *     "@type": "type.googleapis.com/furo.StringProperty",
 *     "data": "01032020"
 *  },
 *  "flags": [],
 *  "display_name": "Vertragsbeginn",
 *  "id": "246d79a0-0a15-43c5-b18f-ac8a4a449df1",
 *  "meta": {}
 * }
 * ```
 *
 * You can bind the furo.Property type (single and repeated).
 *
 * ```html
 *  <furo-ui5-data-property-display
 *     ƒ-bind-data="--daoCountry(*.data.additional_data)"
 *  ></furo-ui5-data-property-display>
 * ```
 *
 *
 * @summary
 * @customElement
 * @demo demo-furo-ui5-data-property-display Basic Usage
 * @appliesMixin FBP
 */
class FuroUi5DataPropertyDisplay extends LitElement {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.
   * @param fieldNode
   * @returns {boolean}
   */
  bindData(fieldNode) {
    // check if we have a FieldNode or RepeaterNode
    if (
      !(
        fieldNode instanceof FieldNode ||
        fieldNode instanceof RepeaterNode ||
        fieldNode._spec.type === 'furo.Property'
      )
    ) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ', fieldNode, 'is not a FieldNode', this, this.parentNode);
      return false;
    }

    // single furo.Property
    if (fieldNode instanceof FieldNode) {
      console.log(fieldNode);
    }

    // repeated furo.Property
    if (fieldNode instanceof RepeaterNode) {
      console.log(fieldNode);
    }

    return true;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-type-renderer ƒ-bind-data=""></furo-type-renderer>
    `;
  }
}

window.customElements.define('furo-ui5-data-property-display', FuroUi5DataPropertyDisplay);
