---
title: furo-rel-exists
description: checks for a specific rel
weight: 50
---

# furo-rel-exists
**@furo/furo-data** <small>v2.0.0-rc.8</small>
<br>`import '@furo/furo-data/src/furo-rel-exists.js';`<small>
<br>exports `<furo-rel-exists>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *checks for a specific rel*</small>

{{% api "_furo-rel-exists-head.md" %}}

`furo-rel-exists`
Checks if a hateoas relation exists in a given hateaos Links array.

```html
<furo-rel-exists ƒ-inject="--HTS-array"></furo-rel-exists>
```

{{% api "_furo-rel-exists-description.md" %}}


## Attributes and Properties
{{% api "_furo-rel-exists-properties.md" %}}




### **rel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">rel</span>
</small>

Name of the rel
<br><br>

### **type**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">type</span>
</small>

define the type if you want a specific check on the type also
<br><br>
## Events
{{% api "_furo-rel-exists-events.md" %}}

### **furo-rel-exists**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-rel-exists</span>
→ <small>`Object Hateoas Link`</small>

 Fired when rel exists in `linkArray`.
<br><br>
### **rel-dont-exist**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-rel-dont-exist</span>
→ <small>`void`</small>

 Fired when rel does not exists in `linkArray`.
<br><br>

## Methods
{{% api "_furo-rel-exists-methods.md" %}}


### **inject**
<small>**inject**(*linkArray* `[furo.Link]` ) ⟹ `boolean`</small>

<small>`[furo.Link]` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject</span>

Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.

inject returns true for existing links and false for non existing links.
TODO: implement bind data too
TODO: emit a event with bool which is triggered on any change of the hts array or binded data
Todo: Better and consistent names for the events

- <small>*linkArray* Array of furo links</small>
<br><br>






{{% api "_furo-rel-exists-footer.md" %}}
{{% api "_furo-rel-exists-scripts.md" %}}
