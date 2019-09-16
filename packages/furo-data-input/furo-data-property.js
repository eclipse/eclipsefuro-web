import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {NodeEvent} from "@furo/data/lib/EventTreeNode";

/**
 * `furo-data-property`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-property
 * @appliesMixin FBP
 */
class FuroDataProperty extends FBP(LitElement) {

  constructor() {
    super();
    this.typemap = {
      "google.type.Date": "furo-data-date-input",
      "furo.StringProperty": "furo-data-text-input",
      "string": "furo-data-text-input"
    };
  }

  bindData(propertyField) {
    this.field = propertyField;
    this.field.data.addEventListener('branch-value-changed', (d) => {
      this.type = this.field.data["@type"];
      this._createPropComponent(propertyField);
    }, {once: true});


    // data already in data-object
    if (this.field.data["@type"]) {
      this.type = this.field.data["@type"];
      this._createPropComponent(propertyField);
    }
  }

  _createPropComponent(propertyField) {
    if (!this._property_created) {
      let e = document.createElement(this.typemap[this.type]);
      switch (this.type) {
        case "google.type.Date":
          e.bindData(propertyField.data);
          break;
        case "furo.StringProperty":
          e.bindData(propertyField.data.data);
          break;
        default:
          e.bindData(propertyField.data);
      }

      this.shadowRoot.appendChild(e);
      propertyField.data.dispatchNodeEvent(new NodeEvent('this-metas-changed', propertyField.data, false));
      this._property_created = true;
    }
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
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }
}

window.customElements.define('furo-data-property', FuroDataProperty);
