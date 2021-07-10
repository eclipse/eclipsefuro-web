// eslint-disable-next-line max-classes-per-file
import { FBP } from './fbp.js';

/**
 * `furo-fbp`
 *
 *  Custom element to create an instant web component and allow using furo-fbp's  features.
 *
 *  You can use the component anywhere in your html or in other components.
 *
 *  Keep in mind that the component is encapsulated.
 *
 *```html
 *
 *  <!-- Use them even before the definition -->
 *  <my-component></my-component>
 *  <other-component></other-component>
 *
 *    <!-- define the component -->
 *    <furo-fbp name="my-component">
 *      <template>
 *        <button @-click="--btnClicked" ƒ-remove="--btnClicked">sender</button>
 *      </template>
 *    </furo-fbp>
 *```
 *  ## Attributes
 *  ### **name** (string)
 *
 *  Set the name of the component to generate, must be a valid web-component name and unique. The name is MANDATORY.
 *
 *  ### **expose** (string)
 *  Define methods that you want to expose as comma separated string.
 *
 *  *example*
 *
 *  `expose="delete,removeAll"`
 *   - delete will trigger the wire `|--delete`
 *   - removeAll will trigger the wire `|--removeAll`
 *
 * @customElement
 * @mixes FBP
 * @summary instant web component with fbp
 */
class FuroFbp extends FBP(HTMLElement) {
  constructor() {
    super();

    // eslint-disable-next-line wc/no-constructor-attributes
    const t = this.querySelector('template');

    // extract the exposed wires
    // eslint-disable-next-line wc/no-constructor-attributes
    const ex = this.getAttribute("expose");
    let exposedMethods = [];
    if (ex !== null) {
      exposedMethods = ex.split(",");
    }

    class InstantComponent extends FBP(HTMLElement){
      constructor() {
        super();

        // attach the exposed wires
        exposedMethods.forEach((m) => {
          this[m] = (d) => {
            this._FBPTriggerWire(`|--${  m}`, d)
          }
        });


        // Create a shadow root to the element.
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(t.content.cloneNode(true));
        // Append FBP to my-component
        this._appendFBP(this.shadowRoot);
      }
    }
    const as  = this.getAttribute("name");
    window.customElements.define(as, InstantComponent);

  }
}

window.customElements.define('furo-fbp', FuroFbp);
