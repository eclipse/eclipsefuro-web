import {css} from 'lit-element';

export class Styling {
    static get theme() {

        // language=CSS
        return css`
            :host {
                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* SYRIUS Theme */

                --primary-color: #ececec;
                --primary-variant-color: #f4f4f4;
                --secondary-color: #f4f4f4;
                --secondary-variant-color: #edeeed;
                --background: #ffffff;
                --surface: #ffffff;
                --error: #C51162;
                --success: #129991;
                --llm-color: #ffffff;
                --llm-variant-color: #f0f1f4;
                --disabled-color: #B4B5B4;
                --header-color: #212121;

                --on-primary: #212121;
                --on-secondary: #212121;
                --on-background: #212121;
                --on-surface: #212121;
                --on-header: #ffffff;

                --on-error: #ffffff;
                --on-success: #202124;
                --on-llm: #2c2c2c;
                --gap-size: 24px;
                
                /* Spacing */
                --spacing-xs: 8px;
                --spacing-s: 24px;
                --spacing-m: 72px;
                --spacing-l: 96px;
                --spacing-xl: 120px;
                
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
