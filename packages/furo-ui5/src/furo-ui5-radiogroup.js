import { LitElement, html } from 'lit';
import { FBP } from '@furo/fbp';
/**
 * `furo-ui5-radiogroup`
 * The furo-ui5-radiogroup enables users to create a radio group with n size of furo-ui5-data-radio-buttons inside.
 * Use the components if you want to combine several bool fields into one radiogroup.
 * Only one value can be true.
 *
 * @summary radio group
 * @customElement
 * @demo demo-furo-ui5-data-radio-button Sample of radio group
 * @appliesMixin FBP
 */
export class FuroUi5Radiogroup extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    this.addEventListener('select', e => {
      let size = this.children.length;
      // eslint-disable-next-line no-plusplus
      while (size--) {
        if (
          this.children[size].nodeName === 'FURO-UI5-DATA-RADIO-BUTTON' &&
          this.children[size].__fieldNode._name !== e.target.__fieldNode._name
        ) {
          if (this.children[size].isFat()) {
            this.children[size]._tmpFAT.value = false;
            // set modified on changes
            if (this.children[size]._tmpFAT.labels === null) {
              this.children[size]._tmpFAT.labels = {};
            }
            this.children[size]._tmpFAT.labels.modified = true;

            this.children[size].setFnaFieldValue(this.children[size]._tmpFAT);
          } else {
            this.children[size].setFnaFieldValue(false);
          }
        }
      }
    });
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('furo-ui5-radiogroup', FuroUi5Radiogroup);
