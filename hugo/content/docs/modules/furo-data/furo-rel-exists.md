---
title: furo-rel-exists
description: checks for a specific rel
weight: 50
---

# furo-rel-exists
**@furo/data** <small>v2.16.3</small>
<br>`import '@furo/data/src/furo-rel-exists.js';`<small>
<br>exports `<furo-rel-exists>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *checks for a specific rel*</small>

{{% api "_furo-rel-exists-head.md" %}}

`furo-rel-exists`
Checks if a hateoas relation exists in a given hateaos Links array.

```html
<furo-rel-exists rel="update" service="person.Personservice" fn-inject="--HTS-array"></furo-rel-exists>
```

{{% api "_furo-rel-exists-description.md" %}}


## Attributes and Properties
{{% api "_furo-rel-exists-properties.md" %}}




### **rel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">rel</span>
<small>`String` </small>

Name of the rel
<br><br>

### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
<small>`String` </small>

define the service if you want a specific check on the service also
<br><br>
## Events
{{% api "_furo-rel-exists-events.md" %}}

### **furo-rel-exists**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-rel-exists</span>
→ <small>`Object Hateoas Link`</small>

 Fired when rel exists in `linkArray`.
<br><br>
### **rel-dont-exist**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-rel-dont-exist</span>
→ <small>`void`</small>

 Fired when rel does not exists in `linkArray`.
<br><br>

## Methods
{{% api "_furo-rel-exists-methods.md" %}}


### **inject**
<small>**inject**(*linkArray* `[furo.Link]` ) ⟹ `boolean`</small>

<small>`[furo.Link]` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject</span>

Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.

inject returns true for existing links and false for non existing links.
TODO: implement bind data too
TODO: emit a event with bool which is triggered on any change of the hts array or binded data

- <small>*linkArray* Array of furo links</small>
<br><br>






{{% api "_furo-rel-exists-footer.md" %}}
{{% api "_furo-rel-exists-scripts.md" %}}
