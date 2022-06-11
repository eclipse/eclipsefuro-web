---
title: furo-type-renderer
description: dynamic type rendering
weight: 50
---

# furo-type-renderer
**@furo/data** <small>v2.3.0</small>
<br>`import '@furo/data/src/furo-type-renderer.js';`<small>
<br>exports `<furo-type-renderer>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *dynamic type rendering*</small>

{{% api "_furo-type-renderer-head.md" %}}

The furo-type-renderer is used to display type specific data. It uses **display** as default context and will warn you
on the console if the requested `context-[type-name]` does not exist or was not imported.

There is a standard set of display components @furo/ui5/src/standard-type-renderers for rendering the individual types.

The standard ui5 set can be integrated with the import
- import '@furo/ui5/src/standard-type-renderers/display-registry.js'.

The standard material set can be integrated with the import
- import '@furo/data-ui/src/standard-type-renderers/display-registry.js'.

If you want to implement an individual display of a type, you need your own `context-[type-name]` component and import it.

for repeated fields you should write your own context-[type-name]-repeated component and import it.
If no context-[type-name]-repeated exists, the renderer will use the display-[type] component as fallback and
display it repeatedly, this is ok for a lot of cases.

## Naming convention

```
display-google-type-timeofday
------- ---------------------
   |             |
context      type-name

# examples:
cell-string
celledit-string
display-string
yourcontext-string

The method to evaluate the renderer is built as following:

context-[(package.type).replaceAll('.', '-').toLocaleLowerCase()]
```



## Basic Usage
```html
  <furo-type-renderer fn-bind-data="--dao(*.data.fieldname)"></furo-type-renderer>
```

## Writing your own renderer
The only API you need to implement in your component is the `bindData()` method.
You just have to follow the naming convention for your renderer.

{{% api "_furo-type-renderer-description.md" %}}


## Attributes and Properties
{{% api "_furo-type-renderer-properties.md" %}}








### **context**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">context</span>
<small>`String` default: **&#39;display&#39;**</small>

Set the context if you need another then display.
Prebuilt context renderers exist for display, cell, celledit.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is displayed in disabled state.
<br><br>

## Methods
{{% api "_furo-type-renderer-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Bind a fieldnode of any type

- <small>*fieldNode* Fieldnode of any type</small>
<br><br>










{{% api "_furo-type-renderer-footer.md" %}}
{{% api "_furo-type-renderer-scripts.md" %}}
