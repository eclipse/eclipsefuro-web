import {css} from 'lit-element';

export class Styling {
    static get theme() {

        // language=CSS
        return css`

            :host {

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary: #ececec;
                --primary-variant: #f4f4f4;
                --on-primary: #212121;

                --secondary: #ffeb3b;
                --secondary-variant: #c1b02e;
                --on-secondary: #000000;

                --accent: #3f83e3;
                --on-accent: #e5e5e5;

                --background: #fff;
                --on-background: #313131;

                --surface: #fff;
                --on-surface: #44484a;
                --separator: #c3c4c3;

                /* Input, Forms, Toast*/
                --error: #C51162;
                --on-error: #ffffff;

                --danger: #FA0202;
                --on-danger: #FAFAFA;

                --success: #129991;
                --on-success: #202124;

                --disabled-color: #B4B5B4;

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
