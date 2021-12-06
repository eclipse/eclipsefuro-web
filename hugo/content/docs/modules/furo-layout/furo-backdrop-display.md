---
title: furo-backdrop-display
description: Display component for furo-backdrop
weight: 50
---

# furo-backdrop-display
**@furo/furo-layout** <small>v2.0.0-rc.7</small>
<br>`import '@furo/furo-layout/src/furo-backdrop-display.js';`<small>
<br>exports `<furo-backdrop-display>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Display component for furo-backdrop*</small>

{{% api "_furo-backdrop-display-head.md" %}}

`furo-backdrop-display`

This components receives and displays the backdrop requests from furo-backdrop components.

The backdrop display can be placed anywhere in the dom. The higher the better.

Tipp: place it below or inside the component which applies the style vars. Othewise the displayed components
do not know these vars.

```html
 <!-- place the display in your main-stage -->
 <furo-backdrop-display></furo-backdrop-display>
 ```

{{% api "_furo-backdrop-display-description.md" %}}


## Attributes and Properties
{{% api "_furo-backdrop-display-properties.md" %}}





### **toDuration**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">to-duration</span>
<small>`number` default: **100**</small>

timeout duration
<br><br>



## Methods
{{% api "_furo-backdrop-display-methods.md" %}}



### **close**
<small>**close**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-close</span>

closes the backdrop.
You can close the backdrop on the display element, this is useful when you want to close the backdrops on page
changes.

Usualy the component which triggers the backdrop or is displayed closes it.

<br><br>






## Styling
{{% api "_furo-backdrop-display-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-backdrop-color` | background color of backdrop <hr> <small>default: `#6d6d6d`</small> <small>fallback: `0px`</small>

{{% api "_furo-backdrop-display-footer.md" %}}
{{% api "_furo-backdrop-display-scripts.md" %}}
