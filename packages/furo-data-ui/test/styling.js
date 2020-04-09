import { css } from 'lit-element';

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
        --error: #c51162;
        --on-error: #ffffff;

        --danger: #fa0202;
        --on-danger: #fafafa;

        --success: #129991;
        --on-success: #202124;

        --disabled-color: #b4b5b4;

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
        --furo-input: #ffc247;
      }
    `;
  }
}
