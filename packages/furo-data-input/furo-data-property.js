import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {NodeEvent} from "@furo/data/lib/EventTreeNode";
import {RepeaterNode} from "@furo/data/lib/RepeaterNode";

/**
 * `furo-data-property`
 *  Field for type furo.Property. It works with repeated types an nonrepeating type. Supported
 *
 *  ```html
 *  <!-- single Property -->
 *  <furo-data-property ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property>
 *  <!-- repeated Property -->
 *  <furo-data-property ƒ-bind-data="--entity(*.type_property)"></furo-data-property>
 *
 *  ```
 *
 *  ## Example data for the data-object looks like this
 *
 *  ```json
 *  "single_type_property": {
 *    "data": {
 *      "@type": "google.type.Date",
 *      "day": 8,
 *      "month":  11,
 *      "year": 2022
 *    },
 *    "display_name": "a date",
 *    "id": "date",
 *    "code": "date",
 *    "meta": {
 *      "fields": {
 *        "data": {
 *          "meta": {
 *            "label": "Additional fields",
 *            "hint": "this is data"
 *          },
 *          "constraints": {
 *            "min": {
 *              "value": "2019-09-09",
 *              "message": "to small"
 *            }
 *          }
 *        }
 *      }
 *    }
 *  }
 *  ```
 *
 *  The current type mappings are:
 *
 *  -  "google.type.Date": "furo-data-date-input",
 "  -  furo.StringProperty": "furo-data-text-input",
 "  -  furo.NumberProperty": "furo-data-number-input"

 *
 * @summary property input
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
      "furo.NumberProperty": "furo-data-number-input"
    };
  }

  bindData(propertyField) {

    this.field = propertyField;

    if (propertyField instanceof RepeaterNode) {

      // add flow repeat to parent and inject on repeated changes
      // repeated
      let r = document.createElement("flow-repeat");
      r.setAttribute("identity-path", "id.value");
      r.innerHTML = "<template><furo-data-property ƒ-bind-data=\"--item\"></furo-data-property></template>";
      let repeater = this.parentNode.insertBefore(r, this);


      this.field.addEventListener('this-repeated-field-changed', (data) => {
        repeater.injectItems(this.field.repeats);
      });

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
      let e = document.createElement(this.typemap[propertyField.data["@type"]]);
      switch (propertyField.data["@type"]) {
          // the input elements for string and number are just working with scalar values
        case "furo.StringProperty":
        case "furo.NumberProperty":
          e.bindData(propertyField.data.data);
          break;
        default:
          e.bindData(propertyField.data);
      }

      this.parentNode.insertBefore(e, this);
      propertyField.data.dispatchNodeEvent(new NodeEvent('this-metas-changed', propertyField.data, false));
      this._property_created = true;
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

window.customElements.define('furo-data-property', FuroDataProperty);
