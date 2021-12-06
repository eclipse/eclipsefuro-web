---
title: furo-custom-method
description: interface component to handle custom methods
weight: 50
---

# furo-custom-method
**@furo/furo-data** <small>v2.0.0-rc.5</small>
<br>`import '@furo/furo-data/src/furo-custom-method.js';`<small>
<br>exports `<furo-custom-method>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *interface component to handle custom methods*</small>

{{% api "_furo-custom-method-head.md" %}}

`furo-custom-method` is a interface component to handle custom methods.

```html
<furo-custom-method
    service="Servicename"
    method="release"
    ƒ-hts-in="--hts"
    ƒ-trigger="--customClick"></furo-custom-method>

<!-- produces a hateoas link array -->
<furo-deep-link
    service="Servicename" @-hts-out="--hts"></furo-deep-link>

```
* *before you can do any requests, the service, method and the HATEOAS must be known*

{{% api "_furo-custom-method-description.md" %}}


## Attributes and Properties
{{% api "_furo-custom-method-properties.md" %}}



### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
</small>

Name of the service.
<br><br>















### **method**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">method</span>
</small>

Name of the custom method / rel.
<br><br>
## Events
{{% api "_furo-custom-method-events.md" %}}

### **hts-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-hts-updated</span>
→ <small>`HTS`</small>

 Fired when hts was updated by `ƒ-hts-in`.
<br><br>
### **request-aborted**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-request-aborted</span>
→ <small>``</small>

Fired if the request was successfully cancelled.
<br><br>

## Methods
{{% api "_furo-custom-method-methods.md" %}}



### **updateQp**
<small>**updateQp**(*qp* `` *key* `Object` ) ⟹ `void`</small>

<small>`` `Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-update-qp</span>

Update query params
a qp like {"active":true} will just update the qp *active*

If the current value of the qp is not the same like the injected value, a qp-changed event will be fired

- <small>*qp* </small>
- <small>*key* value pairs</small>
<br><br>

### **bindRequestData**
<small>**bindRequestData**(*dataObject* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-request-data</span>

Binds a furo-data-object type.

- <small>*dataObject* </small>
<br><br>

### **clearQp**
<small>**clearQp**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear-qp</span>

clear the query params that you have setted before

<br><br>



### **trigger**
<small>**trigger**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger</span>

trigger the method with respect for binded-requset-object

<br><br>

### **triggerEmpty**
<small>**triggerEmpty**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger-empty</span>



<br><br>

### **triggerWithBody**
<small>**triggerWithBody**(*body* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger-with-body</span>

trigger the method with data

- <small>*body* </small>
<br><br>

### **htsIn**
<small>**htsIn**(*hts* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-hts-in</span>



- <small>*hts* </small>
<br><br>

### **abortPendingRequest**
<small>**abortPendingRequest**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-abort-pending-request</span>

Aborts a pending request

<br><br>









{{% api "_furo-custom-method-footer.md" %}}
{{% api "_furo-custom-method-scripts.md" %}}
