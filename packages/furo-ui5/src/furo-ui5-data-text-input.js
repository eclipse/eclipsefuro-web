import {FuroUi5DataInput} from './furo-ui5-data-input.js';

export class FuroUi5DataTextInput extends FuroUi5DataInput{

  constructor(props) {
    super(props);
    this.type = "Text";
  }

  bindData(fieldNode) {
    super.bindData(fieldNode)
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the HTML type of the ui5-input. Available options are: Text, Email, Number, Password, Tel, and URL.
       *
       * > The particular effect of this property differs depending on the browser and the current language settings, especially for type Number.
       * > The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.
       *
       */
      type: {type: String}
    };
  }
}
window.customElements.define('furo-ui5-data-text-input', FuroUi5DataTextInput);
