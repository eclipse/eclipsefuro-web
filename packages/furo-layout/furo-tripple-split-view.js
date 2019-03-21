import {PolymerElement, html} from '@polymer/polymer';

/**
 * `furo-tripple-split-view`
 * Left center right layout
 *
 * @summary 3 splitted layout
 * @customElement
 * @polymer
 */
class FuroTrippleSplitView extends PolymerElement {
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

        .split > .__lft, .split > .__rgt {
          overflow: auto;
          background-color: white;

          bottom: 0;
          font-size: 14px;
          box-sizing: border-box;
          width: 280px;
          overflow-x: hidden;
          overflow-y: scroll;
        }

        .split > .__lft {
          border-right: 1px solid rgba(0, 0, 0, .12);
          @apply --split-layout-leftslot-mixin;

        }

        .split > .__rgt {
          border-left: 1px solid rgba(0, 0, 0, .12); 
          @apply --split-layout-rightslot-mixin;
        }


        .split > :nth-child(2) {
          flex-grow: 1;
          border: 10px solid ghostwhite;
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
        <div class="__lft">
          <slot name="left"></slot>
        </div>
        <div>
          <slot></slot>
        </div>
        <div class="__rgt">
          <slot name="right"></slot>
        </div>
      </div>

    `
  }
}

window.customElements.define('furo-tripple-split-view', FuroTrippleSplitView);
