import {css} from 'lit-element';

export class Styling {
    static get theme() {

        // language=CSS
        return css`
            :host {

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary-light: #6200ff;
                --primary: #6200EE;
                --primary-dark: #5200d4;
                --primary-variant: #3700B3;
                --on-primary: #ffffff;

                --secondary-light: #03f4e0;
                --secondary: #03DAC6;
                --secondary-dark: #03c0ac;
                --secondary-variant: #018786;
                --on-secondary: #000000;

                --accent-light: #ffcb4c;
                --accent: #ddb13d;
                --accent-dark: #9e7f2b;
                --on-accent: #000000;

                --background: #ffffff;
                --on-background: #000000;

                --surface-light: #f2f2f2;
                --surface: #eeeeee;
                --surface-dark: #DEDEDE;
                --on-surface: #212121;
                --separator: #c3c4c3;

                /* Input, Forms, Toast*/
                --error: #C51162;
                --on-error: #ffffff;

                --danger-light: #FA0202;
                --danger: #e20202;
                --danger-dark: #b50202;
                --on-danger: #FAFAFA;

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


            }

        `;
    }
}
