import {PolymerElement} from '@polymer/polymer';


/**
 * `<map-struct-item>` ist eine Mapping-Anweisung für ein Attribut.
 *
 * @customElement
 * @polymer
 */
class MapStructItem extends PolymerElement {

  static get properties() {
    return {
      /**
       * Attribute path of source attribute
       * value.iconCode
       */
      source: {
        type: String
      },

      /**
       * Attribute path of target attribute
       * icon
       */
      target: {
        type: String
      }
    }
  }

  static get observers() {
    return ['_init(source,target)']
  }


  _init(source, target) {
    if ((source && target) || (source && !this.hasAttribute('target'))) {
      this.parentNode._addMap(source, target);
    }
  }
}

customElements.define("map-struct-item", MapStructItem);
