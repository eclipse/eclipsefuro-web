import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"

import "./furo-horizontal-flex"
import "./furo-vertical-scroller"

/**
 * `furo-split-view`
 *
 *
 * Left right layout for master detail views
 *
 * @summary splitted layout
 * @customElement
 * @demo demo/furo-split-view.html
 * @appliesMixin FBP
 */
class FuroSplitView extends FBP(LitElement) {

  constructor() {
    super();
  }

  static get properties() {
    return {
      /**
       * flip the left and right side
       */
      reverse: {type: Boolean}
    };
  }


  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: inherit;
        }
        :host([hidden]) {
            display: none;
        }
        .master {
            height: 100%;
            width: var(--split-master-width, 270px);
            min-width: var(--split-master-width, 270px);
            
        }

        .detail {
            height: 100%;
        }

        furo-horizontal-flex {
            height: 100%;
        }
    `
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`             
      <furo-horizontal-flex ?reverse="${this.reverse}">
        <div class="master">
          <slot name="master"></slot>
        </div>
        <div flex class="detail">
          <slot></slot>
        </div> 
      </furo-horizontal-flex>     
    `;
  }

}

window.customElements.define('furo-split-view', FuroSplitView);
