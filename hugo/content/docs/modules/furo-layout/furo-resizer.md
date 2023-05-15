---
title: furo-resizer
description: resizable box
weight: 50
---

# furo-resizer
**@furo/layout** <small>v2.2.7</small>
<br>`import '@furo/layout/src/furo-resizer.js';`<small>
<br>exports *FuroResizer* js
<br>exports `<furo-resizer>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *resizable box*</small>

{{% api "_furo-resizer-head.md" %}}

`furo-resizer`
 container which let you resize its width.

 Double-click on the handler to reset the width.
 You need a counter part which flexes.


```html
  <furo-horizontal-flex>
    <div flex> the flexible part </div>
    <!-- you have to set at leas one handle to resize the content -->
    <furo-resizer righthandle remember="logv" minwidth="280" maxwidth="780">
      <some-content></some-content>
    </furo-resizer>
  </furo-horizontal-flex>
```

{{% api "_furo-resizer-description.md" %}}


## Attributes and Properties
{{% api "_furo-resizer-properties.md" %}}









### **resetSize**
</small>

removes remember and set to the initial size
<br><br>

### **lefthandle**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">lefthandle</span>
<small>`Boolean` </small>

add a handle to the left side
<br><br>

### **righthandle**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">righthandle</span>
<small>`Boolean` </small>

add a handle to the right side
<br><br>

### **remember**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">remember</span>
<small>`String` </small>

remember the size after resizing.
Give the id for the rememberer, you can use the id on different views
<br><br>

### **maxwidth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">maxwidth</span>
<small>`Number` </small>

Set the maximal width of the resizer
<br><br>

### **minwidth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">minwidth</span>
<small>`Number` </small>

Set the minimal width of the resizer
<br><br>

## Methods
{{% api "_furo-resizer-methods.md" %}}
















## Slots
{{% api "_furo-resizer-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add content.
<br><br>

{{% api "_furo-resizer-footer.md" %}}
{{% api "_furo-resizer-scripts.md" %}}
