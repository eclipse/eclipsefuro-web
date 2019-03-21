import {PolymerElement} from '@polymer/polymer';

/**
 * `object-appender`
 *
 * Hängt an ein objekt ein anderes Objekt unter dem Property welches unter as definiert wurde ab.
 *
 * ## Beispiel
 * `qp` wird dem Objekt `context` unter dem Attribut `queryParams` angehängt.
 * `context` sollte nacher unter `context.queryParam` den Inhalt von `qp` haben.
 *
 * ```
 *  <object-appender append="[[qp]]" as="queryParams" to="{{context}}"></object-appender>
 * ```
 *
 *
 *
 * @summary
 * @customElement
 * @polymer
 */
class ObjectAppender extends PolymerElement {
  static get properties() {
    return {
      /**
       * append
       * Objekt das angehängt werden soll
       */
      appendObject: {
        type: Object,
      },
      /**
       * Teil des appendObjects der angehängt werden soll.
       *
       * Wenn appendObject `{collection:{data:12}}` ist und nur `data` angehängt werden soll, ist der Pfad: `collection.data`
       *
       */
      appendObjectPath: {
        type: String
      },
      /**
       * as
       * Subkey oder Attribut an dem das Objekt angehängt werden soll
       */
      as: {
        type: String,
      },
      /**
       * to
       * Zielobjekt an dem das Objekt angehänt wird
       */
      to: {
        type: Object,
        notify: true
      }
    };
  }

  static get observers() {
    return ['_append(appendObject.*,as,to)']
  }

  append(data) {
    this.set('appendObject', data);
  }

  _append(append, as, to) {

    if (append !== undefined && as !== undefined && to !== undefined) {

      let pathArray = append.path.split('.');

      pathArray[0] = as;
      pathArray.unshift('to');

      let appendData = append.value;
      if (this.appendObjectPath) {
        appendData = Polymer.Path.get(append.base, this.appendObjectPath)
      }
      this.set(pathArray.join('.'), appendData);

    }
  }

}

window.customElements.define('object-appender', ObjectAppender);
