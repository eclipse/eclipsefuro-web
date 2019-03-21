import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `furo-split-view`
 * Left right layout for master detail views
 *
 * @summary splitted layout
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FuroSplitView extends PolymerElement {
  static get template() {
    // language=HTML
    return html`
      <style>

        :host {
          display: block;
          height: 100%;
          position: relative;
        }

        * {
          box-sizing: border-box;
        }

        .split {
          display: flex;
          height: 100%;
        }

        .split > :nth-child(1) {
          overflow: auto;
          background-color: white;
          border-right: 1px solid rgba(0, 0, 0, .12);
          bottom: 0;
          font-size: 14px;
          box-sizing: border-box;
          
          width: 280px;
          overflow-x: hidden;
          overflow-y: scroll;
        }


        .split > :nth-child(2) {
          flex-grow: 1;
          overflow-y: scroll;
        }

        .split.horizontal {
          flex-direction: row;
        }

        :host([resizeable]) .split.horizontal > :nth-child(1) {
          resize: horizontal;
          /*display: flex;*/
        }

      </style>


      <div class="split horizontal">
        <div>
          <slot name="left"></slot>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>

    `
  }
}

window.customElements.define('furo-split-view', FuroSplitView);
