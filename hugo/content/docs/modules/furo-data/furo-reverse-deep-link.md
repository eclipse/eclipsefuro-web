---
title: furo-reverse-deep-link
description: create query param object from HATEOAS
weight: 50
---

# furo-reverse-deep-link
**@furo/data** <small>v2.0.1</small>
<br>`import '@furo/data/src/furo-reverse-deep-link.js';`<small>
<br>exports `<furo-reverse-deep-link>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *create query param object from HATEOAS*</small>

{{% api "_furo-reverse-deep-link-head.md" %}}

Converts hateoas to queryParams, which is useful for routing with app-flow


```html
<furo-reverse-deep-link
   service="TaskService"
   rel="self" @-converted="--queryParams"
   ƒ-convert="--rawEntityOrCollection, --linksArray, --linkObject"
></furo-reverse-deep-link>
```

{{% api "_furo-reverse-deep-link-description.md" %}}


## Attributes and Properties
{{% api "_furo-reverse-deep-link-properties.md" %}}





### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
<small>`string` default: **&#39;&#39;**</small>

Name of service
<br><br>


### **rel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">rel</span>
</small>

Optional rel to convert.

Not needed if you inject a link object.

If you insert an entity rel self is taken. If you insert a collection, rel list is used.
<br><br>
## Events
{{% api "_furo-reverse-deep-link-events.md" %}}

### **converted**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-converted</span>
→ <small>`QueryParams`</small>

 Fired when input was converted.
<br><br>

## Methods
{{% api "_furo-reverse-deep-link-methods.md" %}}


### **convert**
<small>**convert**(*data* `object` ) ⟹ `object`</small>

<small>`object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-convert</span>

converts the href of a LinkObject

returns Error on undefined service

- <small>*data* rawEntity|rawCollection</small>
<br><br>








{{% api "_furo-reverse-deep-link-footer.md" %}}
{{% api "_furo-reverse-deep-link-scripts.md" %}}
