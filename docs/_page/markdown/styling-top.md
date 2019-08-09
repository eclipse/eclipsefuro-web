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