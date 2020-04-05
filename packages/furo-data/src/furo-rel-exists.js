import {LitElement, html, css} from 'lit-element';

/**
 * `furo-rel-exists`
 * Checks if a rel exists in a hateaos Link array
 *
 * @summary checks for a specific rel
 * @customElement
 */
class FuroRelExists extends LitElement {



  /**
   * Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.
   *
   * inject returns true for existing links and false for non existing links.
   *
   * @param linkArray
   * @return {boolean}
   */
  inject(linkArray) {
    let links = linkArray.filter((link) => {

      if (this.type) {

        return link.rel === this.rel && link.type === this.type;
      }
      return link.rel === this.rel;
    });

    if (links.length > 0) {
      /**
       * @event furo-rel-exists
       * Fired when rel exists in linkArray
       * detail payload: {Object} Hateoas Link
       */
      let customEvent = new Event('furo-rel-exists', {composed: true, bubbles: true});
      customEvent.detail = links[0];
      this.dispatchEvent(customEvent);
      return true;
    }

    /**
     * @event rel-dont-exist
     * Fired when rel does not exists in linkArray
     * detail payload: void
     */
    let customEvent = new Event('rel-dont-exist', {composed: true, bubbles: true});
    this.dispatchEvent(customEvent);

    return false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Name of the rel
       */
      rel: {type: String},
      /**
       * define the type if you want a specific check on the type also
       */
      type: {type: String}
    };
  }

  attributeChangedCallback(name, old, value) {
    switch (name) {
      case "rel":
        this.rel = value;
        break;

      case "type":
        this.type = value;
        break;
    }
  }

}

window.customElements.define('furo-rel-exists', FuroRelExists);
