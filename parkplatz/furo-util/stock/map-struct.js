import {PolymerElement} from '@polymer/polymer';

/**
 * `map-struct`
 * Mapping Komponente für Objekte und Array von Objekten. Das Mapping kann über map-struct-item deklarativ erstellt
 * werden.
 *
 * ´´´
 * <map-struct source=[[object]]" target="{{result}}" withWildcard ƒ-map="" @-object-mapped="">
 *
 *     <map-struct-item source="iconCode" target="icon">
 *     <map-struct-item source="label" target="menulabel">
 *     <map-struct-item source="value.action" target="href">
 *
 * </map-struct>
 * ´´´
 *
 * @customElement
 * @polymer
 */
class MapStruct extends PolymerElement {
  static get is() {
    return 'map-struct';
  }

  static get properties() {
    return {
      /**
       * Source object
       */
      source: {
        type: Object
      },

      /**
       * Mapped object
       */
      target: {
        type: Object,
        notify: true
      },

      /**
       * Eine config kann auch direkt übergeben werden
       * Geeignet für dynamische item Mappings
       *
       * ```
       * [
       *  {
       *     "source": "name",
       *     "target": "headline"
       *  },
       * ]
       * ```
       */
      mappingConfig: {type: Array, observer: "_addConfigMap"},

      /**
       * Set true to map with wildcard
       */
      withWildcard: {
        type: Boolean,
        value: false
      },
      _counter: {type: Number},
      /**
       * Mapping Definitions
       */
      _mapDefinition: {
        type: Array, value: function () {
          return [];
        }
      }
    };
  }

  static get observers() {
    return ['_applyMapping(source.*,_counter)']
  }

  /**
   * Mapping function
   * to use with flowbased wires
   * @param eventDetails
   */
  map(eventDetails) {
    this.set('source', eventDetails);
  }

  connectedCallback() {
    super.connectedCallback();
    // wir erwarten soviele maps wie map-struct kinder hat
    this.set('_counter', this.children.length)
  }

  _addConfigMap(mapItems) {
    mapItems.forEach(item => {
      if (item.source !== undefined && item.target !== undefined) {
        this._addMap(item.source, item.target);
      }

    })
  }

  /**
   * Maps registrieren
   */
  _addMap(source, target) {
    this._mapDefinition.push({"source": source, "target": target});
    // setze erwarteten counter runter
    this.set('_counter', --this._counter);
  }

  /**
   * Internal mapping function
   * @param source Source Object
   * @param _counter map counter
   * @private
   */
  _applyMapping(sourceObj, _counter) {

    if (this._counter <= 0 && sourceObj.base) {
      let source = sourceObj.base;
      // mapping auf target anwenden
      var tmpTarget
      if (Array.isArray(source)) {
        tmpTarget = [];
        source.forEach((src) => {
          tmpTarget.push(this._mapObject(src))
        })
      } else {
        tmpTarget = this._mapObject(source)
      }

      this.set('target', tmpTarget);
      /**
       * Fired when an object mapping has finished
       * detail payload: target with mapped data
       * @event object-mapped
       */
      this.dispatchEvent(new Event('object-mapped', {composed: true, bubbles: true, detail: this.target}));
    }

  }

  /**
   * Rekursive Funktion um deep mapping Objekte vorzubereiten
   * @param target
   * @param parts
   * @private
   */
  _appendPart(target, parts) {
    // erstes element aus parts entfernen
    let part = parts.shift();
    // wenn element auf target noch nicht existiert => erstellen
    if (target[part] === undefined) {
      target[part] = {};
    }
    // weitere parts anhängen
    if (parts.length > 1) {
      this._appendPart(target[part], parts)
    }
  }

  /**
   * interne mapper Funktion
   * @param source
   * @return {{}}
   * @private
   */
  _mapObject(source) {
    let target = {};
    if (this.withWildcard) {
      target = JSON.parse(JSON.stringify(source))
    }

    this._mapDefinition.forEach((def) => {
      // parts abhandeln für deep mapping
      if (def.target) {
        let parts = def.target.split('.');
        if (parts.length > 1) {
          this._appendPart(target, parts)
        }
        // anhängen mit Polymer Bordmitteln
        Polymer.Path.set(target, def.target, Polymer.Path.get(source, def.source));
      } else {
        for (let attr in source[def.source]) {
          target[attr] = source[def.source][attr];
        }

      }
    });

    return target
  }

}

window.customElements.define(MapStruct.is, MapStruct);

