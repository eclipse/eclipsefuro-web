---
title: furo-empty-spacer
description: fill the space in a furo-xxxx-flex
weight: 50
---

# furo-empty-spacer
**@furo/layout** <small>v2.0.0-rc.11</small>
<br>`import '@furo/layout/src/furo-empty-spacer.js';`<small>
<br>exports `<furo-empty-spacer>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *fill the space in a furo-xxxx-flex*</small>

{{% api "_furo-empty-spacer-head.md" %}}

`furo-empty-spacer` Takes the place in furo-horizontal-flex or a furo-vertical-flex.

<furo-demo-snippet source>
<template>
 <furo-horizontal-flex>
  <div>small</div>
  <!-- A furo-empty-spacer will fill the available space. -->
  <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
  <div>small</div>
 </furo-horizontal-flex>
</template>
</furo-demo-snippet>

{{% api "_furo-empty-spacer-description.md" %}}


## Attributes and Properties
{{% api "_furo-empty-spacer-properties.md" %}}



### **flex**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">flex</span> <small>**reflects**</small>
<small>`boolean` default: **true**</small>

Attribute flex for furo-horizontal-flex and furo-vertical-flex
<br><br>

### **hidden**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">hidden</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

Set to true to hide the spacer
<br><br>

## Methods
{{% api "_furo-empty-spacer-methods.md" %}}







{{% api "_furo-empty-spacer-footer.md" %}}
{{% api "_furo-empty-spacer-scripts.md" %}}
