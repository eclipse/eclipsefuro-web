import { LitElement, html } from 'lit-element';
import {FBP} from "@furo/fbp";
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
class FuroUi5Radiogroup extends FBP(LitElement) {

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    this.addEventListener('select', (e)=>{
      let size = this.children.length;
      // eslint-disable-next-line no-plusplus
      while(size--){
        if (this.children[size].binder.fieldNode._name !== e.target.binder.fieldNode._name){
          this.children[size].setValue(false);
        }
      }

    })
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render(){
    // language=HTML
    return html`
      <slot></slot>
    `;
  }

}

window.customElements.define('furo-ui5-radiogroup', FuroUi5Radiogroup);
