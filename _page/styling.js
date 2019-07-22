import {css} from 'lit-element';

export class Styling {
    static get theme() {

        // language=CSS
        return css`
            :host {
                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                --primary-color: #ececec;
                --primary-variant: #f4f4f4;
                --secondary: #f4f4f4;
                --secondary-variant: #edeeed;
                --background: #ffffff;
                --surface: #eeeeee;
                --blockquote: #ffc247;
                --separator: #c3c4c3;
                --error: #C51162;
                --success: #129991;
                --llm-color: #ffffff;
                --llm-variant-color: #f0f1f4;
                --disabled-color: #B4B5B4;
                --header-color: #212121;

                --on-primary: #212121;
                --on-primary-variant: #585858;
                --on-secondary: #212121;
                --on-background: #212121;
                --on-surface: #212121;
                --on-header: #ffffff;

                --on-error: #ffffff;
                --on-success: #202124;
                --on-llm: #2c2c2c;
                --gap-size: 24px;

                /* Spacing */
                --spacing-xxs: 4px;
                --spacing-xs: 8px;
                --spacing-s: 16px;
                --spacing: 24px;
                --spacing-m: 24px;
                --spacing-l: 32px;
                --spacing-xl: 48px;
                --spacing-xxl: 96px;

                /* Apply your theme here */
                --demo-color-one: #6200ee;
                --demo-color-two: #212121;
                --demo-color-three: #eaddfd;
                --on-demo: #fff;
                --on-demo-three: #212121;

                --border-radius: 4px;
            }

        `;
    }
}
