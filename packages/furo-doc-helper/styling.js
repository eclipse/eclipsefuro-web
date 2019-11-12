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
            --primary-variant: #2587a3;
            --on-primary: #ffffff;

            --secondary-light: #fdd756;
            --secondary: #fecf2f;
            --secondary-dark: #ffc911;
            --secondary-variant: #faedc1;
            --on-secondary: #212121;

            --accent-light: #ecf3ca;
            --accent: #cce35b;
            --accent-dark: #bada18;
            --on-accent: #212121;

            --background: #eeeeee;
            --on-background: #212121;

            --surface-light: #f3f3f3;
            --surface: #FEFEFE;
            --surface-dark: #f0f0f0;
            --on-surface: #212121;
            --separator: #E4E4E4;

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

        }

    `;
  }
}
