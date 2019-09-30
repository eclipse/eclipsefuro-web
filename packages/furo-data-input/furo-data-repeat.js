import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "./lib/data-repeat-delete"
import "@furo/form/furo-form-layouter"

/**
 * `furo-data-repeat`
 *  Display for repeated fields.
 *
 *  ```html
 *  <furo-data-repeat ƒ-bind-data="--data(*.repeaterfield)"
 *      repeated-component="furo-date-input"
 *      condensed
 *      delete-icon="remove"
 *      add-icon="star"
 *      add-text="add another date"
 *      ƒ-add="--additionalDateClicked"
 *      ></furo-data-repeat>
 *
 *      <!-- Add is controlled from outside, delete from inside of the item -->
 *      <furo-data-repeat ƒ-bind-data="--data(*.repeatedcomplextype)"
 *      repeated-component="my big form"
 *      ƒ-add="--additionalDateClicked"
 *      ></furo-data-repeat>
 *
 *  ```
 *
 *  Every Attribute (boolean or string) which is set on furo-data-repeat which is not part of its own api, will be set on the child element.
 *  If you set condensed as an example, it will be set on the repeated element. It is not possible to set wires to the children.
 *
 *
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-repeat
 * @appliesMixin FBP
 */
class FuroDataRepeat extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * Set the delete icon to enable deleting of a repeated element.
     * @type {undefined}
     */
    this.deleteIcon = undefined;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * repeated-component to be used for the items.
       * The component must support ƒ-bind-data
       */
      repeatedComponent: {type: String, attribute: "repeated-component"},

    };
  }

  /**
   * Create a attribute for map<string,type> types
   * create a field in a FieldNode, this is useful when using map<string,something>
   * set the value option to init with values
   * @param options {"fieldName":"name","type":"string", "spec":{..}}  spec is optional
   */
  createAttribute(options) {
    this.field.createField(options);
  }

  set repeatedComponent(component) {

    // add flow repeat to parent and inject on repeated changes
    // repeated
    let container = document.createElement("furo-form-layouter");
    let r = document.createElement("flow-repeat");

    r.setAttribute("identity-path", "__index");
    r.setAttribute("ƒ-inject-items", "--repeatsChanged");

    let isCondensed = "";
    let attrs = "";
    let l = this.attributes.length;
    for (let i = 0; i < l; ++i) {
      var nodeName = this.attributes.item(i).nodeName;
      var nodeValue = this.attributes.item(i).nodeValue;
      switch (nodeName) {
        case "condensed":
          attrs += nodeName + '="' + nodeValue + '"';
          isCondensed = "condensed";
          break;
        case "two":
          container.setAttribute("two", "");
          break;
        case "four":
          container.setAttribute("four", "");
          break;
        case "eight":
          container.setAttribute("eight", "");
          break;
        case "delete-icon":
          this.deleteIcon = nodeValue;
          break;
        default:
          if (!nodeName.startsWith("@") && !nodeName.startsWith("ƒ")) {
            attrs += nodeName + '="' + nodeValue + '"';
          }
      }

    }
    let icn = "";
    if (this.deleteIcon) {
      icn = '<data-repeat-delete icon="' + this.deleteIcon + '" ' + isCondensed + ' ƒ-bind-item="--init"></data-repeat-delete>';
    }
    r.innerHTML = '<template><furo-horizontal-flex><' + component + ' ' + attrs + ' flex ƒ-bind-data="--init"></' + component + '>' + icn + '</furo-horizontal-flex></template>';


    container.appendChild(r);


    this.shadowRoot.appendChild(container);

  };

  bindData(repeats) {
    this.field = repeats;
    this.field.addEventListener("this-repeated-field-changed", (node) => {
      this._FBPTriggerWire("--repeatsChanged", this.field.repeats);
    });

    // key value repeats
    if (this.field.repeats) {
      // initial trigger
      this._FBPTriggerWire("--repeatsChanged", this.field.repeats);
    } else {
      this.field.addEventListener("branch-value-changed", (node) => {
        this._FBPTriggerWire("--repeatsChanged", this.field.__childNodes);
      });

      this.field.addEventListener("node-field-deleted", (node) => {
        this._FBPTriggerWire("--repeatsChanged", this.field.__childNodes);
      });
      this.field.addEventListener("node-field-added", (node) => {
        this._FBPTriggerWire("--repeatsChanged", this.field.__childNodes);
      });
      // initial trigger for fields
      this._FBPTriggerWire("--repeatsChanged", this.field.__childNodes);
    }

  }

  add(data) {
    if (this.field) {
      this.field.add(data)
    }
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
            width: 100%;
        }

        :host([hidden]) {
            display: none;
        }

    `
  }

}

window.customElements.define('furo-data-repeat', FuroDataRepeat);
