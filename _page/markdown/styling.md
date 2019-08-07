# Styling

We differ theming and styling. Themes are in regular a rewrite of the components css and can contain style vars. 
We do not use mixins as long they are not 'standard'. 
**Styling is used to set style vars like --primary**. They give you the possibility to configure your themes in a simple way. 
Components which are using theming, give you full control over the css.

> The color system supports 12 categories of color that can be applied to components, text, icons, and surfaces.

https://material.io/design/material-theming/implementing-your-theme.html#color


![categoriesOfColor](../../../_page/assets/mio-staging_mio-design.png)

## How to
Just import `import {Styling} from "./custom/styling";` in your main-stage.js

``` javascript
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

                --background: #fff;
                --on-background: #313131;

                --surface: #fff;
                --on-surface: #44484a;
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
```
