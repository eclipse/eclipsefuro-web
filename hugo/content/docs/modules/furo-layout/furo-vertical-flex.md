---
title: furo-vertical-flex
description: vertical alignment
weight: 50
---

# furo-vertical-flex
**@furo/furo-layout** <small>v2.0.0-rc.7</small>
<br>`import '@furo/furo-layout/src/furo-vertical-flex.js';`<small>
<br>exports `<furo-vertical-flex>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *vertical alignment*</small>

{{% api "_furo-vertical-flex-head.md" %}}

`furo-vertical-flex`

With this component, any elements can be aligned vertically. Similar to css flex.
The attribute "flex" must be set for growing elements.
The component takes up 100% of the space


```html
<furo-vertical-flex>
  <div>small</div>
  <div flex>full width</div>
  <div>small</div>
</furo-vertical-flex>
```

 Tags: layout

{{% api "_furo-vertical-flex-description.md" %}}


## Attributes and Properties
{{% api "_furo-vertical-flex-properties.md" %}}



## Methods
{{% api "_furo-vertical-flex-methods.md" %}}




## Slots
{{% api "_furo-vertical-flex-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add content.
<br><br>

{{% api "_furo-vertical-flex-footer.md" %}}
{{% api "_furo-vertical-flex-scripts.md" %}}
