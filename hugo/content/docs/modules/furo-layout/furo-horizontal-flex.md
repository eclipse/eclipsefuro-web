---
title: furo-horizontal-flex
description: horizontal alignment
weight: 50
---

# furo-horizontal-flex
**@furo/layout** <small>v2.2.7</small>
<br>`import '@furo/layout/src/furo-horizontal-flex.js';`<small>
<br>exports *FuroHorizontalFlex* js
<br>exports `<furo-horizontal-flex>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *horizontal alignment*</small>

{{% api "_furo-horizontal-flex-head.md" %}}

`furo-horizontal-flex`

With this component, any elements can be aligned horizontally. Similar to css flex.
The attribute "flex" must be set for growing elements.
The component takes up 100% of the space.

```html
<furo-horizontal-flex>
  <div>small</div>
  <div flex>full width</div>
  <div>small</div>
</furo-horizontal-flex>
```

{{% api "_furo-horizontal-flex-description.md" %}}


## Attributes and Properties
{{% api "_furo-horizontal-flex-properties.md" %}}



## Methods
{{% api "_furo-horizontal-flex-methods.md" %}}




## Slots
{{% api "_furo-horizontal-flex-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add content.
<br><br>
## Styling
{{% api "_furo-horizontal-flex-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-horizontal-flex-space` | default padding (space) <hr> <small>default: `0.5rem`</small> <small>fallback: `N/A`</small>
`--furo-horizontal-flex-bigspace` | big padding (bigspace) Tags: layout <hr> <small>default: `3rem`</small> <small>fallback: `N/A`</small>

{{% api "_furo-horizontal-flex-footer.md" %}}
{{% api "_furo-horizontal-flex-scripts.md" %}}
