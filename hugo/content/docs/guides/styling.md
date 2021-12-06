---
weight: 200
title: "Work with style vars"

---


# Styling

We differ theming and styling. Themes are in regular a rewrite of the components css and can contain style vars. 
We do not use mixins as long they are not 'standard'. 
**Styling is used to set style vars like --primary**. They give you the possibility to configure your themes in a simple way. 
Components which are using theming, give you full control over the css.

> The color system supports 12 categories of color that can be applied to components, text, icons, and surfaces.

https://material.io/design/material-theming/implementing-your-theme.html#color

## Surface, background, and error colors
Surface, background, and error colors typically don’t represent brand. 
In general, they occupy the following areas of the UI: 

* Surface colors map to components such as cards, sheets, and menus
* Background color is found behind scrollable content
* Error color indicates errors in components, such as text fields

## “On” colors
The elements in an app use colors from specific categories in your color palette, such as a primary color. 
Whenever other screen elements, such as text or icons, appear in front of surfaces using those colors, those elements 
should use colors specifically designed to appear clearly and legibly against the colors behind them.

This category of colors is called “on” colors, referring to the fact that they color elements that are sometimes 
placed “on” top of key surfaces that use a primary color, secondary color, surface color, background color, or error color. 
These are labelled using the original category name (such as primary color) with the prefix “on”.

“On” colors are primarily applied to text, iconography, and strokes. Sometimes, they are also applied to surfaces.


<style-category-sample></style-category-sample>

## How to

import `import {Styling} from "./custom/styling";` in your main-stage.js

``` javascript
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


                /* project specific */
                --blockquote: #ffc247;

            }
        `;
    }
}
```
