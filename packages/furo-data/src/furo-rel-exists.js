import { LitElement, css } from 'lit';

/**
 * `furo-rel-exists`
 * Checks if a rel exists in a hateaos Link array
 *
 * @fires {Object Hateoas Link} furo-rel-exists -  Fired when rel exists in `linkArray`.
 * @fires {void} rel-dont-exist -  Fired when rel does not exists in `linkArray`.
 *
 * @summary checks for a specific rel
 * @customElement
 */
class FuroRelExists extends LitElement {
  /**
   * Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.
   *
   * inject returns true for existing links and false for non existing links.
   * TODO: implement bind data too
   * TODO: emit a event with bool which is triggered on any change of the hts array or binded data
   * Todo: Better and consistent names for the events
   *
   *
   * @param []furo.Link Array of furo links
   * @return {boolean}
   */
  inject(linkArray) {
    const links = linkArray.filter(link => {
      if (this.type) {
        return link.rel === this.rel && link.type === this.type;
      }
      return link.rel === this.rel;
    });

    if (links.length > 0) {
      const customEvent = new Event('furo-rel-exists', { composed: true, bubbles: true });
      [customEvent.detail] = links;
      this.dispatchEvent(customEvent);
      return true;
    }

    const customEvent = new Event('rel-dont-exist', { composed: true, bubbles: true });
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
      rel: { type: String },
      /**
       * define the type if you want a specific check on the type also
       */
      type: { type: String },
    };
  }

  attributeChangedCallback(name, old, value) {
    switch (name) {
      case 'rel':
        this.rel = value;
        break;

      case 'type':
        this.type = value;
        break;
      default:
    }
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-rel-exists', FuroRelExists);
