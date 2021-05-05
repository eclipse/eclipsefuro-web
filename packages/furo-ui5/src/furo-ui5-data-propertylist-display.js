import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode';
/**
 * `furo-ui5-data-propertylist-display` allows the user to show repeated properties (furo.Property) in a readonly mode.
 * For all other types you can use furo-ui5-data-display.
 *
 * The type information of the property is used for the display of the individual attributes.
 * E.g.
 * ```
 * [
 *  {
 *    "code": "c0a7f550-0fbe-4046-8fa9-60c86327b6b1",
 *    "data": {
 *       "@type": "type.googleapis.com/furo.StringProperty",
 *      "data": "01032020"
 *    },
 *    "flags": [],
 *    "display_name": "Vertragsbeginn",
 *    "id": "246d79a0-0a15-43c5-b18f-ac8a4a449df1",
 *    "meta": {}
 *  }
 * ]
 * ```
 *
 * You can bind the furo.Property type (single and repeated).
 *
 * ```html
 *  <furo-ui5-data-propertylist-display
 *     ƒ-bind-data="--daoCountry(*.data.additional_data)"
 *  ></furo-ui5-data-propertylist-display>
 * ```
 *
 *
 * @summary
 * @customElement
 * @demo demo-furo-ui5-data-propertylist-display Basic Usage
 * @appliesMixin FBP
 */
class FuroUi5DataPropertylistDisplay extends FBP(LitElement) {
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

  /**
   * Component styles
   * @returns {*[]}
   */
  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: inline;
          --furo-ui5-form-field-container-grid-row-gap: 0;
        }
        :host([hidden]) {
          display: none;
        }

        ui5-label[data-size='size-s'],
        ui5-label[data-size='size-m'] {
          padding-top: 0;
        }
      `,
    ];
  }

  /**
   * Binds a RepeaterNode of type furo.Property.
   * @param fieldNode
   * @returns {boolean}
   */
  bindData(fieldNode) {
    // check if we have a RepeaterNode of type furo.Property
    if (!(fieldNode instanceof RepeaterNode && fieldNode._spec.type === 'furo.Property')) {
      // eslint-disable-next-line no-console
      console.warn(
        'Invalid binding ',
        fieldNode,
        'is not a RepeaterNode of type furo.Property',
        this,
        this.parentNode,
      );
      return false;
    }

    this._FBPTriggerWire('--data', fieldNode);

    return true;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <display-furo-property-repeats-labeled
        ƒ-bind-data="--data"
      ></display-furo-property-repeats-labeled>
    `;
  }
}

window.customElements.define('furo-ui5-data-propertylist-display', FuroUi5DataPropertylistDisplay);
