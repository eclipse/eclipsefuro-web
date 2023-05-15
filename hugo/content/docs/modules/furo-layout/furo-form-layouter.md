---
title: furo-form-layouter
description: Grid based form field row
weight: 50
---

# furo-form-layouter
**@furo/layout** <small>v2.2.7</small>
<br>`import '@furo/layout/src/furo-form-layouter.js';`<small>
<br>exports *FuroFormLayouter* js
<br>exports `<furo-form-layouter>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Grid based form field row*</small>

{{% api "_furo-form-layouter-head.md" %}}

`furo-form-layouter`

Use furo-form-layouter to structure your forms.
It is based on a grid system with the following properties:
- full-width row (Standard)
- two columns
- four columns

The required variant is set using an attribute.
e.g. two, three, four and six

```html
<!-- four coulumn layout -->
<furo-form-layouter four>
   <input-element></input-element>
   <input-element double></input-element>
   <input-element newline></input-element>
   <input-element full></input-element>
</furo-form-layouter>
```


To customize the slotted elements inside furo-form-layouter there are several attributes.
- double | stretches the element over two units
- full | stretches the element to full width
- newline | forces a new line

### Responsiveness
Columns | narrow | narrower  |
----------------|-------------|-------------|
`one` | one | one |
`two` | one | one |
`three` | one | one |
`four` | two | one |
`six` | three | one |

{{% api "_furo-form-layouter-description.md" %}}


## Attributes and Properties
{{% api "_furo-form-layouter-properties.md" %}}






### **narrow**
default: **false**</small>


<br><br>

### **narrower**
default: **false**</small>


<br><br>

### **breakpointBig**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">breakpoint-big</span> <small>**reflects**</small>
<small>`number` default: **810**</small>

Set custom breakpoint big
Default: "810"
<br><br>

### **breakpointSmall**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">breakpoint-small</span> <small>**reflects**</small>
<small>`number` default: **405**</small>

Set custom breakpoints small
Default: "405"
<br><br>

### **narrowFix**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">narrow-fix</span> <small>**reflects**</small>
<small>`Boolean` </small>

Set narrow-fix attribute to force
the layout analog to breakpoint big
<br><br>

### **narrowerFix**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">narrower-fix</span> <small>**reflects**</small>
<small>`Boolean` </small>

Set narrower-fix attribute to force
1 column view (analog breakpoint small)
<br><br>
## Events
{{% api "_furo-form-layouter-events.md" %}}

### **layout-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-layout-changed</span>
→ <small>`CustomEvent`</small>


<br><br>

## Methods
{{% api "_furo-form-layouter-methods.md" %}}













## Slots
{{% api "_furo-form-layouter-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add content.
<br><br>
## Styling
{{% api "_furo-form-layouter-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-form-layouter-row-gap` | width of row gap <hr> <small>default: `0px`</small> <small>fallback: `0px`</small>
`--furo-form-layouter-column-gap` | width of column gap <hr> <small>default: `0px`</small> <small>fallback: `0px`</small>

{{% api "_furo-form-layouter-footer.md" %}}
{{% api "_furo-form-layouter-scripts.md" %}}
