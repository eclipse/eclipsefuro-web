import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
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
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`    
      <style>
        :host {
          display: block;
          height: 100%;
        }
        
        .master{
          height: 100%;
          width: var(--split-master-width, 270px);       
          @apply --split-master;       
        }
        
        furo-vertical-scroller.detail{
          @apply --split-detail;
        }
        
        furo-horizontal-flex{
          height: 100%;      
        }
      </style>
      
      <furo-horizontal-flex ?reverse="${this.reverse}">
        <furo-vertical-scroller class="master">
          <slot name="master"></slot>
        </furo-vertical-scroller>
        <furo-vertical-scroller flex class="detail">
          <slot></slot>
        </furo-vertical-scroller> 
      </furo-horizontal-flex>     
    `;
  }

}

window.customElements.define('furo-split-view', FuroSplitView);
