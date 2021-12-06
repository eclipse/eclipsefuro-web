---
title: furo-split-view
description: splitted layout
weight: 50
---

# furo-split-view
**@furo/layout** <small>v2.0.0-rc.7</small>
<br>`import '@furo/layout/src/furo-split-view.js';`<small>
<br>exports `<furo-split-view>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *splitted layout*</small>

{{% api "_furo-split-view-head.md" %}}

`furo-split-view`
is a layout component to visualise main / detail views (left right layout for master detail views).
You can add the attribute scroll on the detail view to make the content scrollable.

```html
<furo-split-view>
  <div slot="master">Master</div>
  <big-component scroll> </big-component>
</furo-split-view>
```

{{% api "_furo-split-view-description.md" %}}


## Attributes and Properties
{{% api "_furo-split-view-properties.md" %}}



### **reverse**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">reverse</span>
</small>

flip the left and right side
<br><br>

## Methods
{{% api "_furo-split-view-methods.md" %}}





## Slots
{{% api "_furo-split-view-slots.md" %}}

### **master**
Type: `HTMLElement [0..n]`

default slot to add content to the main section.
<br><br>
### **default**
Type: `HTMLElement [0..n]`

default slot to add content to the detail section.
<br><br>
## Styling
{{% api "_furo-split-view-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--split-master-width` | width of the master slot <hr> <small>default: `270px`</small> <small>fallback: `N/A`</small>

{{% api "_furo-split-view-footer.md" %}}
{{% api "_furo-split-view-scripts.md" %}}
