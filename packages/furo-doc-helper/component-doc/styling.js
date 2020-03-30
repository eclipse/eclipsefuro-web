import { css } from 'lit-element';

export class Styling {
  static get theme() {
    // language=CSS
    return css`
      :host {
        /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
        /* https://material.io/design/material-theming/implementing-your-theme.html#color */
        --primary-light: #c158dc;
        --primary: #8e24aa;
        /* --xxx-rgb is used for the states  */
        --primary-rgb: 142, 36, 170;
        --primary-dark: #5c007a;
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
        --accent-dark: #bada18;
        --on-accent: #212121;

        --background: #eeeeee;
        --on-background: #212121;

        --surface: #ffffff;
        --surface-light: #f3f3f3;
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
        --medium-emphasis-surface: 0.65;
        --medium-emphasis-primary: 0.74;

        /* Input, Forms, Toast*/
        --error: #ea1c24;
        --on-error: #ffffff;

        --danger-light: #eb1a1f;
        --danger: #d8191e;
        --danger-dark: #c6191e;
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

        --split-master-width: 320px;
        --navigation-drawer-width: 256px;

        --furo-app-drawer-backdrop: rgba(55, 55, 55, 0.5);
        --furo-data-table-select-color: var(--surface-light);
        --furo-data-table-background: white;

        --input-hint-color: var(--primary);
        /*--input-label-color:*/
        /*--input-label-float-color:*/
        /*--input-active-float-label-color:*/
        /*--input-activation-indicator-color:*/
        /*--input-error-activation-indicator-color:*/
        /*--input-error-text-color:*/
        /*--input-active-activation-indicator-color:*/
        /*--input-active-error-activation-indicator-color:*/

        /* furo-markdown */
        --blockquote: var(--accent);
      }
    `;
  }
}
