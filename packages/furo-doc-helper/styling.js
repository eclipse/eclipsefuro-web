import {css} from 'lit-element';

export class Styling {
  static get theme() {

    // language=CSS
    return css`
        :host {

            /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
            /* https://material.io/design/material-theming/implementing-your-theme.html#color */
            --primary-light: #4ccd50;
            --primary: #4caf50;
            --primary-dark: #4b9b4f;
            --primary-variant: #f4f4f4;
            --on-primary: #212121;

            --secondary-light: #ffe525;
            --secondary: #ffeb3b;
            --secondary-dark: #efdb3b;
            --secondary-variant: #edeeed;
            --on-secondary: #000000;

            --accent-light: #419bff;
            --accent: #3f83e3;
            --accent-dark: #3f6ece;
            --on-accent: #e5e5e5;

            --background: #ffffff;
            --on-background: #212121;

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
