import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `reference-search-item`
 * Repeated item to display the search result set
 *
 * @fires {item} item-selected -  Fired when item is selected.
 *
 * @cssprop {200ms} [--transition-duration=200ms] - Duration of the styling transitions
 * @cssprop {8px} [--spacing-xs=8px] - Padding of the item
 * @cssprop {rgba(var(--primary-rgb), var(--state-hover)} [--primary-rgb=rgba(var(--primary-rgb), var(--state-hover)] - background color hover state
 * @cssprop {rgba(var(--primary-rgb), var(--state-hover)} [--primary-rgb=rgba(var(--primary-rgb), var(--state-hover)] - background color selected hover state
 * @cssprop {N/A} [--primary=N/A] - foreground color
 *
 * @summary representation of a result item
 * @customElement
 * @appliesMixin FBP
 */
export class ReferenceSearchItem extends FBP(LitElement) {
  constructor() {
    super();
    this._item = {};
  }

  injectItem(item) {
    this._item = item;
    this.requestUpdate();
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([hover]) div {
        background-color: rgba(var(--primary-rgb), var(--state-hover));
        color: var(--primary);
      }

      :host(:hover) div {
        background-color: rgba(var(--primary-rgb), var(--state-selected-hover));
      }

      div {
        padding: var(--spacing-xs, 8px);
        cursor: pointer;
        box-sizing: border-box;
        transition: color var(--transition-duration, 200ms);
      }
    `;
  }

  deselect() {
    this.removeAttribute('hover');
  }

  preselect() {
    this.setAttribute('hover', '');
    this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  select() {
    const customEvent = new Event('item-selected', { composed: true, bubbles: true });
    customEvent.detail = this._item;
    this.dispatchEvent(customEvent);
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <div @-click="^^item-selected(_item)">
        ${this._item.data.display_name}
      </div>
    `;
  }
}

window.customElements.define('reference-search-item', ReferenceSearchItem);
