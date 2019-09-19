import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

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
 *      <!-- Add controlled from outside, delete from inside of the item -->
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
      repeatedComponent: {type: String, attribute:"repeated-component"}
    };
  }

  set repeatedComponent(component){

    // add flow repeat to parent and inject on repeated changes
    // repeated
    let r = document.createElement("flow-repeat");
    r.setAttribute("identity-path", "__index");
    r.setAttribute("ƒ-inject-items", "--repeatsChanged");
    let attrs = "";
    let l = this.attributes.length;
    for (let i = 0; i < l; ++i) {
      var nodeName = this.attributes.item(i).nodeName;
      var nodeValue = this.attributes.item(i).nodeValue;
      if (!nodeName.startsWith("@") && !nodeName.startsWith("ƒ")) {
        attrs += nodeName + '="' + nodeValue + '"';
      }
    }

    r.innerHTML = '<template><furo-horizontal-flex><' + component + ' ' + attrs + ' flex ƒ-bind-data="--item"></' + component + '><furo-icon icon="delete"></furo-icon></furo-horizontal-flex></template>';
    this.shadowRoot.appendChild(r)

  };

  bindData(repeats) {
    this.field = repeats;
    this.field.addEventListener("this-repeated-field-changed", (node) => {
      this._FBPTriggerWire("--repeatsChanged", this.field.repeats);
    })


  }

  add(data){
    if(this.field){
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

        furo-icon{
            margin: 12px 0 0 12px;
        }
    `
  }


}

window.customElements.define('furo-data-repeat', FuroDataRepeat);
