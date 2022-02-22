---
title: furo-entity-agent
description: interface component to handle entity requests
weight: 50
---

# furo-entity-agent
**@furo/data** <small>v2.0.0-rc.12</small>
<br>`import '@furo/data/src/furo-entity-agent.js';`<small>
<br>exports `<furo-entity-agent>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *interface component to handle entity requests*</small>

{{% api "_furo-entity-agent-head.md" %}}

`furo-entity-agent` is an interface component to handle entity requests.

> **Note** When you trigger the save method and there is a HTS wich allows to PATCH the record, only the deltas (changes) of
> the values are sent.

> **Hint** PUT will send all fields which are not marked as **readonly**.
> If you want to send all data on PUT (without filtering readonly fields) set `Env.api.sendAllDataOnMethodPut = true;`

```html
<!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
<furo-entity-agent
  service="ProjectService"
  ƒ-hts-in="--hts" @-response="--response"
  ></furo-entity-agent>


<!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
<furo-data-object
  type="project.ProjectEntity"
  ƒ-inject-raw="--response"
  ></furo-data-object>
```

{{% api "_furo-entity-agent-description.md" %}}


## Attributes and Properties
{{% api "_furo-entity-agent-properties.md" %}}



### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
</small>

Name des Services
<br><br>























### **loadOnHtsIn**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">load-on-hts-in</span>
</small>

triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
<br><br>

### **appendUpdateMaskQP**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">with-update-mask</span>
</small>

Creates the query param update mask according to the google api design guidelines.

Your update service must have a query param **update_mask** to use this feature.

https://cloud.google.com/apis/design/standard_methods#update

You may not need it if your server can handle PATCHes without a update_mask
https://grpc-ecosystem.github.io/grpc-gateway/docs/patch.html
<br><br>
## Events
{{% api "_furo-entity-agent-events.md" %}}

### **response-hts-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-hts-updated</span>
→ <small>`hts`</small>

 Fired when hts was updated from the response.
<br><br>
### **load-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-load-success</span>
→ <small>`response`</small>

 Fired when `load()` was successful.
<br><br>
### **load-failed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-load-failed</span>
→ <small>`response`</small>

 Fired when `load()` was **not** successful.
<br><br>
### **delete-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-delete-success</span>
→ <small>`response`</small>

 Fired when `delete()` was successful.
<br><br>
### **delete-failed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-delete-failed</span>
→ <small>`response`</small>

 Fired when `delete()` was **not** successful.
<br><br>
### **save-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-save-success</span>
→ <small>`response`</small>

 Fired when `save()` was successful.
<br><br>
### **save-failed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-save-failed</span>
→ <small>`response`</small>

 Fired when `save()` was **not** successful.
<br><br>
### **put-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-put-success</span>
→ <small>`response`</small>

 Fired when `update()` was successful.
<br><br>
### **put-failed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-put-failed</span>
→ <small>`response`</small>

 Fired when `update()` was **not** successful.
<br><br>
### **create-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-create-success</span>
→ <small>`response`</small>

 Fired when `create()` was successful.
<br><br>
### **create-failed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-create-failed</span>
→ <small>`response`</small>

 Fired when `create()` was **not** successful.
<br><br>
### **hts-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-hts-updated</span>
→ <small>`{Array|HATEOAS}`</small>

 Fired when hateoas is updated from response.
<br><br>
### **hts-injected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-hts-injected</span>
→ <small>`Hateoas links`</small>

 Fired when hateoas is updated.
<br><br>
### **request-aborted**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-request-aborted</span>
→ <small>`Request`</small>

Fired when a request was canceled.
<br><br>
### **request-started**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-request-started</span>
→ <small>`Request`</small>

Fired when a request is sent.
<br><br>
### **response-raw**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-raw</span>
→ <small>`Object`</small>

Fired when a response is received.
<br><br>
### **response-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-error</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a general error event. The specific error events are fired additionally.
<br><br>
### **response-error-[status-code]**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-error-[status-code]</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a specific error event.
<br><br>
### **fatal-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-fatal-error</span>
→ <small>`Request`</small>

Requests are made via the Fetch API if possible.Fallback XMLHttpRequest
<br><br>
### **response-error-4xx**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-error-4xx</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
<br><br>
### **response-error-5xx**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-error-5xx</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
<br><br>
### **response-error-raw**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response-error-raw</span>
→ <small>`Object`</small>

Fired when a error has occoured.
<br><br>
### **response**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-response</span>
→ <small>`Object`</small>

Fired when a response is received.
<br><br>

## Methods
{{% api "_furo-entity-agent-methods.md" %}}



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

Binds a furo-data-object type. Use this if you want save data.

- <small>*dataObject* </small>
<br><br>



### **clearQp**
<small>**clearQp**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear-qp</span>

clear the query params that you have setted before

<br><br>




### **load**
<small>**load**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-load</span>

loads the entity if hts is available

<br><br>

### **delete**
<small>**delete**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-delete</span>

delete the entity if hts is available

<br><br>

### **save**
<small>**save**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-save</span>

loads the entity if hts is available

<br><br>

### **put**
<small>**put**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-put</span>

saves the entity with method put if hts is available

<br><br>

### **create**
<small>**create**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-create</span>

creating the entity if hts rel="create" is available

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











{{% api "_furo-entity-agent-footer.md" %}}
{{% api "_furo-entity-agent-scripts.md" %}}
