import {css} from 'lit-element';

export class Styling {
  static get theme() {

    // language=CSS
    return css`

      :host {

        /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
        /* https://material.io/design/material-theming/implementing-your-theme.html#color */
        --primary: #ececec;
        --primary-rgb: 236, 236, 236;
        --primary-variant: #f4f4f4;
        --on-primary: #212121;
        --primary-light: #f6f6f6;
        --primary-dark: #f1f1f1;


        --secondary: #fecf2f;
        --secondary-rgb: 254, 207, 47;
        --secondary-dark: #ffc911;
        --secondary-variant: #9e7f2b;
        --on-secondary: #212121;


        --accent: #3f83e3;
        --accent-rgb: 63, 131, 227;
        --on-accent: #e5e5e5;
        --accent-light: #3f8ded;
        --accent-dark: #3f73d3;


        --background: #eeeeee;
        --on-background: #212121;

        --surface-light: #f3f3f3;
        --surface: #FEFEFE;
        --surface-dark: #f0f0f0;
        --on-surface: #212121;
        --separator: #E4E4E4;

        /* States */
        --state-hover: 0.04;
        --state-selected: 0.08;
        --state-selected-hover: 0.12;
        --state-active: 0.1;
        --state-focus: 0.12;
        --state-selected-focus: 0.2;
        --state-disabled: 0.38;

        /* Emphasis, used for secondary text,... */
        --medium-emphasis-surface: 0.6;
        --medium-emphasis-primary: 0.74;


        /* Input, Forms, Toast*/
        --error: #ea1c24;
        --on-error: #ffffff;

        --danger-light: #fc1c21;
        --danger: #ee1c21;
        --danger-dark: #de1c21;
        --on-danger: #f8f8f8;

        --success: #129991;
        --on-success: #202124;

        --disabled: #c3c4c3;
        --on-disabled: #585858;

        /* Spacing */
        --spacing-xxs: 4px;
        --spacing-xs: 8px;
        --spacing-s: 16px;
        --spacing: 24px;
        --spacing-m: 24px;
        --spacing-l: 32px;
        --spacing-xl: 48px;
        --spacing-xxl: 96px;


        /* project specific */
        --blockquote: #ffc247;

        --furo-data-table-background: white;
        --furo-data-table-on-background: var(--on-background);
        --furo-data-table-select-background: var(--accent);
        --furo-data-table-select-on-background: var(--on-accent);

        --furo-card-background: white;

      }

      /** the background of the bar itself. **/
      ::-webkit-scrollbar {
        width: 8px;
        background-color: var(--surface, white);
      }

      /** the directional buttons on the scrollbar. **/
      ::-webkit-scrollbar-button {
        background-color: var(--on-surface, black);
      }

      /** the empty space “below” the progress bar. **/
      ::-webkit-scrollbar-track {
      }

      /** the top-most layer of the the progress bar not covered by the thumb. **/
      ::-webkit-scrollbar-track-piece {
      }

      /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
      ::-webkit-scrollbar-thumb {
        background-color: var(--on-surface, black);
        border-radius: 10px;
      }

      /** the bottom corner of the scrollable element, where two scrollbar meet. **/
      ::-webkit-scrollbar-corner {
      }

      /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
      ::-webkit-resizer {
      }

    `;
  }
}
