---
title: furo-data-hide-content
description: hide content with a boolean fieldnode
weight: 50
---

# furo-data-hide-content
**@furo/data** <small>v2.2.5</small>
<br>`import '@furo/data/src/furo-data-hide-content.js';`<small>
<br>exports `<furo-data-hide-content>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *hide content with a boolean fieldnode*</small>

{{% api "_furo-data-hide-content-head.md" %}}

`furo-data-hide-content` hides content in dependency to a boolean field value.

It is also possible to call the `hide()` and `show()` methods to show and hide the content and update the value.
TODO:  support furo.fat.Bool and google.protobuf.BoolValue

```html
<furo-data-hide-content fn-bind-data="--bind(*.bool)">
  <div>some content</div>
</furo-collapsible-box>
```

{{% api "_furo-data-hide-content-description.md" %}}


## Attributes and Properties
{{% api "_furo-data-hide-content-properties.md" %}}








### **hidden**
default: **false**</small>


<br><br>



### **hideOnFalse**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">hide-on-false</span>
<small>`Boolean` </small>

Hide element on false instead of true
<br><br>
## Events
{{% api "_furo-data-hide-content-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-value-changed</span>
→ <small>`Boolean`</small>

 Fired when the visibility changed, contains the current visibility state
<br><br>
### **hid**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-hid</span>
→ <small>`void`</small>

 Fired when the content gets hid
<br><br>
### **showed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-showed</span>
→ <small>`void`</small>

 Fired when the content gets visible
<br><br>

## Methods
{{% api "_furo-data-hide-content-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `Object|FieldNode` ) ⟹ `void`</small>

<small>`Object|FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Bind a entity field to the date-input. You can use the entity even when no data was received.
When you use `at-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`

- <small>*fieldNode* a Field object</small>
<br><br>


### **hide**
<small>**hide**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-hide</span>

hides the content

<br><br>

### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-show</span>

shows the content

<br><br>

### **toggle**
<small>**toggle**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-toggle</span>

Toggle the current visibility state.

<br><br>







## Slots
{{% api "_furo-data-hide-content-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add content.
<br><br>

{{% api "_furo-data-hide-content-footer.md" %}}
{{% api "_furo-data-hide-content-scripts.md" %}}
