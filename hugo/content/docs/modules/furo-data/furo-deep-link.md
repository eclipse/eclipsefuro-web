---
title: furo-deep-link
description: Resolve deep links HATEOAS based on  query params
weight: 50
---

# furo-deep-link
**@furo/data** <small>v2.2.1</small>
<br>`import '@furo/data/src/furo-deep-link.js';`<small>
<br>exports `<furo-deep-link>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *Resolve deep links HATEOAS based on  query params*</small>

{{% api "_furo-deep-link-head.md" %}}

`furo-deep-link`
Resolve deep links HATEOAS based on the query params and the selected service.

```html
<furo-deep-link
 service="TaskService"
 ƒ-qp-in="--pageQueryChanged(*.query)" @-hts-out="--serviceHTS">
 </furo-deep-link>
```
*Deeplink inside of a furo-page*


The services must be registered in the Env:

```html
import {Services,Types} from "./furo-spec.js"
Init.registerApiServices(Services);
Init.registerApiTypes(Types);
```


Usually this is done in your src/configs/init.js

{{% api "_furo-deep-link-description.md" %}}


## Attributes and Properties
{{% api "_furo-deep-link-properties.md" %}}







### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
</small>

Name of the service
<br><br>


## Events
{{% api "_furo-deep-link-events.md" %}}

### **hts-out**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-hts-out</span>
→ <small>`[]HTSLinks`</small>

Fired when hateoas is available
<br><br>

## Methods
{{% api "_furo-deep-link-methods.md" %}}



### **qpIn**
<small>**qpIn**(*queryParams* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-qp-in</span>

Furo-deep-link consumes a object literal with key value pairs.

This can come from the `*.query` part of an event from furo-location.

Or from a furo-pages wire.

Relevant wires from furo-pages:
- --pageQueryChanged(*.query)
- --pageActivated(*.query)
- --pageHashChanged(*.query)

- <small>*queryParams* </small>
<br><br>

### **trigger**
<small>**trigger**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger</span>

Evaluates hts. Use qpIn(qp) if you have a qp object in your event.detail
This method have no effect as long _qp is not set.

<br><br>

### **setService**
<small>**setService**(*serviceName* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-service</span>

Sets the service by wire

- <small>*serviceName* </small>
<br><br>







{{% api "_furo-deep-link-footer.md" %}}
{{% api "_furo-deep-link-scripts.md" %}}
