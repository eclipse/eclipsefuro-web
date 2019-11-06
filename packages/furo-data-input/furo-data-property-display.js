import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {NodeEvent} from "@furo/data/lib/EventTreeNode";
import {RepeaterNode} from "@furo/data/lib/RepeaterNode";

/**
 * `furo-data-property-display`
 *  Field for type furo.Property. It works with repeated types an nonrepeating type. Supported
 *
 *  ```html
 *  <!-- single Property -->
 *  <furo-data-property-display ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property-display>
 *  <!-- repeated Property -->
 *  <furo-data-property-display ƒ-bind-data="--entity(*.type_property)"></furo-data-property-display>
 *
 * This component uses the same data like `furo-data-property`
 *
 *
 *
 * ```
 *
 *  The current type mappings are:
 *
 * - "google.type.Date": "furo-data-display"
 * - "furo.StringProperty": "furo-data-display"
 * - "furo.IntegerProperty": "furo-data-display"
 * - "furo.NumberProperty": "furo-data-display"
 * - "furo.StringOptionProperty": "furo-data-display"
 *
 * @summary property display
 * @customElement
 * @demo demo-furo-data-property-display
 * @appliesMixin FBP
 */
class FuroDataPropertyDisplay extends FBP(LitElement) {

  constructor() {
    super();
    this.typemap = {
      "google.type.Date": "furo-data-display",
      "furo.StringProperty": "furo-data-display",
      "furo.IntegerProperty": "furo-data-display",
      "furo.NumberProperty": "furo-data-display",
      "furo.StringOptionProperty": "furo-data-display"
    };
  }

  bindData(propertyField) {

    this.field = propertyField;

    if (propertyField instanceof RepeaterNode) {

      // add flow repeat to parent and inject on repeated changes
      // repeated
      let r = document.createElement("flow-repeat");
      r.setAttribute("identity-path", "id._value");
      let attrs = "";
      let l = this.attributes.length;
      for (let i = 0; i < l; ++i) {
        var nodeName = this.attributes.item(i).nodeName;
        var nodeValue = this.attributes.item(i).nodeValue;
        if (!nodeName.startsWith("@") && !nodeName.startsWith("ƒ")) {
          attrs += nodeName +'="' + nodeValue +'"';
        }
      }
      r.innerHTML = '<template><furo-data-property-display ƒ-bind-data="--init" ' + attrs +'></furo-data-property-display></template>';

      let repeater = this.parentNode.insertBefore(r, this);
      this._createdRepeater = repeater;
      this.field.addEventListener('this-repeated-field-changed', (data) => {
        repeater.injectItems(this.field.repeats);
      });
      // inject if data is already here
      if(this.field.repeats.length > 0){
        repeater.injectItems(this.field.repeats);
      }


    } else {
      this.field.data.addEventListener('branch-value-changed', (d) => {
        this._createPropComponent(propertyField);
      }, {once: true});


      // data already in data-object
      if (this.field.data["@type"]) {
        this._createPropComponent(propertyField);
      }
    }

  }

  _createPropComponent(propertyField) {
    if (!this._property_created) {
      let e = document.createElement(this.typemap[propertyField.data["@type"]._value.replace(/.*\//, '')]);

      // Grab all of the original's attributes, and pass them to the replacement
      let l = this.attributes.length;
      for (let i = 0; i < l; ++i) {
        var nodeName = this.attributes.item(i).nodeName;
        var nodeValue = this.attributes.item(i).nodeValue;
        if (!nodeName.startsWith("@") && !nodeName.startsWith("ƒ")) {
          e.setAttribute(nodeName, nodeValue);
        }
      }

      if (e.bindData) {
        switch (propertyField.data["@type"]._value.replace(/.*\//, '')) {
            // the input elements for string and number are just working with scalar values
          case "furo.StringProperty":
          case "furo.NumberProperty":
          case "furo.IntegerProperty":
            e.bindData(propertyField.data.data);
            break;
          default:
            e.bindData(propertyField.data);
        }

        this._created = this.parentNode.insertBefore(e, this);
        propertyField.data.dispatchNodeEvent(new NodeEvent('this-metas-changed', propertyField.data, false));
        this._property_created = true;
      } else {
        console.warn(propertyField.data["@type"]._value, "not in map", this);
      }
      }
    }

  disconnectedCallback() {
    if(this._createdProp){
      this._createdProp.remove();
    }
      if(this._createdRepeater){
      this._createdRepeater.remove();
    }

  }

  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: none;
        }
    `
  }

}

window.customElements.define('furo-data-property-display', FuroDataPropertyDisplay);
