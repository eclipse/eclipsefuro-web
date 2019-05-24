import {css} from 'lit-element';

export class Styling {
  static get theme() {

    // language=CSS
    return css`
        :host {
            /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
            /* Develloper Theme */

            --primary-color: #eaddfd;
            --primary-variant-color: #eff5fa;
            --secondary-color: #f4f4f4;
            --secondary-variant-color: #edeeed;
            --background: #ffffff;
            --surface: #ffffff;
            --error: #C51162;
            --success: #129991;
            --llm-color: #ffffff;
            --llm-variant-color: #f0f1f4;
            --disabled-color: #B4B5B4;

            --on-primary: #691eee;
            --on-secondary: #212121;
            --on-background: #212121;
            --on-surface: #212121;

            --on-error: #ffffff;
            --on-success: #202124;
            --on-llm: #2c2c2c;
            --gap-size: 12px;
        }
    `;
  }
}
