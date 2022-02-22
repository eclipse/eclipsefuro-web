import { LitElement, css } from 'lit'
import { FieldNodeAdapter } from './lib/FieldNodeAdapter.js'

/**
 * `furo-hateoas-state` is an invisible component with a binding of type furo.Link or injection of a link array.
 *
 * It disables / enables or hides / shows components according to the injected HATEOAS links. `furo-hateoas-state` only
 * sets or remove the attributes **hidden** and **disabled** on the nodes.
 *
 * All nodes inside the same parent are taken in to control.
 *
 * Elements inside a shadow root are not selected.
 *
 * Set the attribute **data-rel="list"** on any element you want to control with `furo-hateoas-state`.
 *
 * Set the attribute **hide-no-rel** if you want to hide the node instead of being disabled.
 *
 * ```html
 * <div>
 *   <button data-rel='list'>list</button>
 *   <button hide-no-rel data-rel='list'>hide no rel</button>
 *   <button data-rel='add'>add</button>
 *   <furo-hateoas-state ƒ-bind-hts='--collection(*.links)'></furo-hateoas-state>
 * </div>
 * ```
 * *all elements with a data-rel="something" attribute inside the div are controlled*
 *
 * @summary disables or hide nodes based on hts
 * @customElement
 * @appliesMixin FBP
 */
class FuroHateoasState extends FieldNodeAdapter(LitElement) {

  /**
   * @private
   * @param value
   */
  onFnaFieldValueChanged(value) {
    this.injectHts(value)
  }

  /**
   * Enable or show all nodes.
   */
  enable(){
    this.parentNode.querySelectorAll('*[data-rel]').forEach((node) => {
      const atr = (node.attributes['hide-no-rel'] !== undefined) ? 'hidden' : 'disabled'
      node.removeAttribute(atr)
    })
  }

  /**
   * Disable or hide all nodes.
   */
  disable(){
    this.parentNode.querySelectorAll('*[data-rel]').forEach((node) => {
      const atr = (node.attributes['hide-no-rel'] !== undefined) ? 'hidden' : 'disabled'
      node.setAttribute(atr,"")
    })
  }

  /**
   *
   * @param fieldNode
   * @return {boolean}
   * @private
   */
  bindData(fieldNode) {
    if (fieldNode._spec.type !== 'furo.Link') {
      console.warn('invalid type ', fieldNode._spec.type, ', must be furo.Link')
    }
    return super.bindData(fieldNode)
  }

  /**
   * Bind a `RepeaterNode` of type `furo.Link`.
   *
   * @param Links
   */
  bindHts(Links) {
    this.bindData(Links)
  }

  /**
   * Inject a link array directly.
   *
   * ```json
   * [
   *   {
   *     "href": "/mockdata/persons/list",
   *     "method": "GET",
   *     "rel": "list",
   *     "type": "person.PersonCollection",
   *     "service": "PersonService"
   *   }
   * ]
   * ```
   *
   * @param value {[json]} Array with raw `furo.Link` like
   */
  injectHts(value) {
    const rels = new Set

    value.forEach((l) => {
      rels.add(l.rel)
    })

    this.parentNode.querySelectorAll('*[data-rel]').forEach((node) => {

      const atr = (node.attributes['hide-no-rel'] !== undefined) ? 'hidden' : 'disabled'

      if (rels.has(node.dataset.rel)) {
        // rel is available
        node.removeAttribute(atr)
        node.removeAttribute('disabled')
      } else {
        // rel is not available
        node.setAttribute(atr, '')
        node.setAttribute('disabled', '')
      }


    })
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `
  }


}

window.customElements.define('furo-hateoas-state', FuroHateoasState)
