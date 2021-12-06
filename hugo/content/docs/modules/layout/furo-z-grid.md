---
title: furo-z-grid
description: grid with a z pattern
weight: 50
---

# furo-z-grid
**@furo/layout** <small>v2.0.0-rc.2</small>
<br>`import '@furo/layout/src/furo-z-grid.js';`<small>
<br>exports `<furo-z-grid>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *grid with a z pattern*</small>

{{% api "_furo-z-grid-head.md" %}}

`z-grid`
is a grid which places your elements in a **z** pattern.
It creates a grid which can be imagined as a grid with cells of the size *8rem x 8rem*.~

The size on the x-axis can vary a little bit, according to the the available space.

{{% api "_furo-z-grid-description.md" %}}


## Attributes and Properties
{{% api "_furo-z-grid-properties.md" %}}





## Methods
{{% api "_furo-z-grid-methods.md" %}}






## Slots
{{% api "_furo-z-grid-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add content. This component is nestable. ```html <furo-z-grid> <your-component hspace="2" vspace="4"></your-component> <your-component hspace="2" vspace="2"></your-component> </furo-z-grid> <!-- with automatic padding --> <furo-z-grid padding> <your-component hspan="2" vspan="4"></your-component> <your-component hspan="2" vspan="2"></your-component> </furo-z-grid> ```
<br><br>
## Styling
{{% api "_furo-z-grid-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-ui5-cardContentHeight` | card content height with vspan=1, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `4rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=2, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `8rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=3, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `12rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=4, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `16rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=5, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `20rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=6, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `24rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=7, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `28rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=8, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight <hr> <small>default: `32rem`</small> <small>fallback: `N/A`</small>
`--furo-ui5-cardContentHeight` | card content height with vspan=9, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight ## sizes The sizes are calculated from the available space that the grid becomes from its parent. ### Sizes are calculated as following ``` |  small  |   medium   |    large    |    xlarge   | |         |            |             |             | | 0...599 | 600...1023 | 1024...1439 | 1440...nnnn | ``` ## hspan Set the horizontal space (the width) with the *hspan* attribute. Available ranges are from 1 to 9 and full. To tell a element that it has to use the full width use `hspan="full"` or use the alias `full` or `full-width`. `hspan="1"`, `hspan="2"`,...,`hspan="9"`, `hspan="full"` ## vspan Set the vertical space (the height) with the *vspan* attribute. Available ranges are from 1 to 9. `vspan="1"`, `vspan="2"`,...,`vspan="9"` ## newline To force a placement on a new line use `newline` ## padding Set the attribute *padding* to add paddings according to the size of the furo-z-grid automatically. :host([size='size-s']) ==> **0.25rem 1rem;** :host([size='size-m'] ==> **0.25rem 2rem;** :host([size='size-l'] ==> **1rem 2rem;** :host([size='size-xl'] ==> **1rem 3rem;** ## full-on-[size] To set full width on a specific current size, use `full-on-size-small` , `full-on-size-medium` , `full-on-size-large` ,`full-on-size-xlarge`. When the available space has the given size, the default hspan are overridden and the full width is used. ## hide-on-[size] To hide a element on a specific current size, use `hide-on-size-small` , `hide-on-size-medium` , `hide-on-size-large` ,`hide-on-size-xlarge`. ## show-on-[size] To show a element only on a specific current size, use `show-on-size-small` , `show-on-size-medium` , `show-on-size-large` ,`show-on-size-xlarge`. ## custom span sizes on different sizes (hspan-on-[size]) To set a specific width (hspan) on a specific current size, use `hspan-on-size-small="1...9"` , `hspan-on-size-medium="1...9"` , `hspan-on-size-large="1...9"` , `hspan-on-size-xlarge="1...9"` . ## Ohter attributes The attributes *full* and *full-width* are aliases for `hspan="full"`. ## Named lines and columns **last-col** refers to the last column. **last-row** refers to the last line/row. <hr> <small>default: `36rem`</small> <small>fallback: `N/A`</small>

{{% api "_furo-z-grid-footer.md" %}}
{{% api "_furo-z-grid-scripts.md" %}}
