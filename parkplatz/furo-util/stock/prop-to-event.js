import {PolymerElement, html} from '@polymer/polymer';

/**
 * `prop-to-event`
 * is a compatibility component for p3 to furo/fbp. It converts a property to an event (`update`).
 *
 *
 * ```
 * <prop-to-event property="[[item.links]]" @-update="--hts"></prop-to-event>
 * ```
 *
 * @summary
 * @customElement
 * @polymer
 * @mixes FBP
 */
class PropToEvent extends PolymerElement {


  static get properties() {
    return {
      /**
      * property to convert
      */
      property : {
          type:Object,
          observer: "_toEvent",
      },
    };
  }

  _toEvent(prop){
      /**
      * @event update
      * Fired when property was updated
      * detail payload: {Object} property
      */
      let customEvent = new Event('update', {composed:true, bubbles: false});
      customEvent.detail = this.property;
      this.dispatchEvent(customEvent);
  }

}

window.customElements.define('prop-to-event', PropToEvent);
