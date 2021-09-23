import { css } from 'lit';

export class Styling {
  static get theme() {
    // language=CSS
    return css`
      :host {
        /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
        /* https://material.io/design/material-theming/implementing-your-theme.html#color */
        --primary-light: #4ccd50;
        --primary: #4caf50;
        --primary-rgb: 76, 175, 80;
        --primary-dark: #4b9b4f;
        --primary-variant: #2587a3;
        --on-primary: #ffffff;

        --secondary-light: #fdd756;
        --secondary: #fecf2f;
        --secondary-rgb: 254, 207, 47;
        --secondary-dark: #ffc911;
        --secondary-variant: #faedc1;
        --on-secondary: #212121;

        --accent-light: #ecf3ca;
        --accent: #cce35b;
        --accent-rgb: 204, 227, 91;
        --accent-dark: #bada18;
        --on-accent: #212121;

        --background: #eeeeee;
        --background-rgb: 238, 238, 238;
        --on-background: #212121;
        --on-background-rgb: 33, 33, 33;

        --surface-light: #f3f3f3;
        --surface-light-rgb: 243, 243, 243;
        --surface: #fefefe;
        --surface-rgb: 254, 254, 254;
        --surface-dark: #f0f0f0;
        --on-surface: #212121;
        --on-surface-rgb: 33, 33, 33;
        --separator: #e4e4e4;

        /* States */
        --state-hover: 0.04;
        --state-selected: 0.08;
        --state-selected-hover: 0.12;
        --state-active: 0.1;
        --state-focus: 0.12;
        --state-focused-hover: 0.18;
        --state-selected-focus: 0.2;
        --state-selected-focused-hover: 0.24;
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

        --furo-form-layouter-row-gap: var(--spacing-xs);
        --furo-form-layouter-column-gap: var(--spacing-xs);
      }
    `;
  }
}
