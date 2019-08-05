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
                --secondary-variant: #edeeed;
                --on-secondary: #000000;

                --accent: #3f83e3;
                --on-accent: #e5e5e5;

                --background: #ffffff;
                --on-background: #212121;

                --surface: #eeeeee;
                --on-surface: #212121;
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

        `;
    }
}
