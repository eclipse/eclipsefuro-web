import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 *
 * Tags: input
 * @summary text input element
 * @customElement
 * @polymer
 * @mixes FBP
 */
class EntityField extends LitElement {




  constructor() {
    super();
  }


  setValue(v) {
    this.value = v;
  };

  set value(v) {
    this._value = v;
    this.field.set(v)
  };

  get value() {
    return this._value;
  }

  bindData(d) {
    if (d === undefined) {
      console.warn("Invalid binding ");
      console.log(this);
      return
    }

    this.field = d;


    this.field.addEventListener('field-value-changed', (e) => {
      // updates wieder einspielen


      /**
      * @event value-changed
      * Fired when
      * detail payload:
      */
      let customEvent = new Event('value-changed', {composed:true, bubbles: true});
      customEvent.detail =  e.detail.value ;
      this.dispatchEvent(customEvent)
    });


  }



}

customElements.define('entity-field', EntityField);
