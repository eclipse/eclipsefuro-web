---
title: furo-collection-agent
description: interface component to handle collection requests
weight: 50
---

# furo-collection-agent
**@furo/data** <small>v2.16.6</small>
<br>`import '@furo/data/src/furo-collection-agent.js';`<small>
<br>exports *FuroCollectionAgent* js
<br>exports `<furo-collection-agent>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *interface component to handle collection requests*</small>

{{% api "_furo-collection-agent-head.md" %}}

`furo-collection-agent` is an interface component to handle collection requests.


```html
<furo-collection-agent
   service="Servicename"
   fn-hts-in="--hts"></furo-collection-agent>

<!-- produces a hateoas link array -->
<furo-deep-link
    service="Servicename" at-hts-out="--hts"></furo-deep-link>

```



*before you can do any requests, the service and the HATEOAS must be defined*

{{% api "_furo-collection-agent-description.md" %}}


## Attributes and Properties
{{% api "_furo-collection-agent-properties.md" %}}




### **view**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">view</span>
<small>`String` </small>

Parameter for contextual representations

To reduce network traffic, it is sometimes useful to allow the client to limit which parts of the resource the server should return in its responses,
returning a view of the resource (i.e. specialized version for dropdowns ) instead of the full resource representation.

https://cloud.google.com/apis/design/design_patterns#resource_view

view=smallcards

Only useable if your service has implemented this feature.
<br><br>






### **filter**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">filter</span>
<small>`String` </small>

Set the filter.

Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.

Only useable if your service has implemented this feature.
<br><br>


### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
<small>`String` </small>

Setze den Service
<br><br>


























### **pageSize**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">page-size</span>
<small>`Number` </small>

Sets pagination size in the List request.

Only useful if your service supports pagination.
<br><br>

### **fields**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">fields</span>
<small>`String` </small>

Comma separated list of fields (like a fieldmask)
used for partial representation / partial responses.

If your services supports this feature, you will receive a subset of the fields.
<br><br>

### **orderBy**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">order-by</span>
<small>`String` </small>

Sorting order

order-by="foo,-bar"  means foo asc and bar desc

https://cloud.google.com/apis/design/design_patterns#sorting_order

To avoid sql injection errors we do not send any sql like syntax!

Only useable if your service has implemented this feature.
<br><br>

### **listOnHtsIn**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">list-on-hts-in</span>
<small>`Boolean` </small>

Executes a list when a rel="list" is injected.
<br><br>

### **loadRelOnHtsIn**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">load-rel-on-hts-in</span>
<small>`Boolean` </small>

Executes a loadRel when a rel="XXXX" is injected.

You have to set the attributes *rel* and *method* to have this working.

This is useful for getting "custom" collections.
<br><br>

### **rel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">rel</span>
<small>`String` </small>

rel which should be used on load rel
<br><br>

### **method**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">method</span>
<small>`String` </small>

for compatibility reasons you have to specify the method inside of the service.

This attribute should not be needed in future versions, because the rel already contains all relevant information.
<br><br>
## Events
{{% api "_furo-collection-agent-events.md" %}}

### **request-aborted**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-request-aborted</span>
→ <small>`Request`</small>

Fired if the request was successfully cancelled
<br><br>
### **request-started**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-request-started</span>
→ <small>`Request`</small>

Fired when a request is sent.
<br><br>
### **response-raw**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-raw</span>
→ <small>`Object`</small>

Fired when a response is received.
<br><br>
### **response-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a general error event. The specific error events are fired additionally.
<br><br>
### **response-error-[status-code]**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error-[status-code]</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a specific error event.
<br><br>
### **fatal-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-fatal-error</span>
→ <small>`Request`</small>

Requests are made via the Fetch API if possible.Fallback XMLHttpRequest
<br><br>
### **response-error-4xx**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error-4xx</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
<br><br>
### **response-error-5xx**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error-5xx</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
<br><br>
### **response-error-raw**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error-raw</span>
→ <small>`Object`</small>

Fired when a error has occoured.
<br><br>
### **response**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response</span>
→ <small>`Object`</small>

Fired when a response is received.
<br><br>
### **response-hts-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-hts-updated</span>
→ <small>`hts`</small>

 Fired when the hts was updated by the received response.
<br><br>
### **filter-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-filter-changed</span>
→ <small>``</small>

 Fired when filter was updated with `fn-set-filter`.
<br><br>
### **hts-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-hts-updated</span>
→ <small>`Array|HATEOAS`</small>

 Fired when hateoas was updated from response.
<br><br>
### **hts-injected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-hts-injected</span>
→ <small>`Hateoas links`</small>

 Fired when hateoas was updated
<br><br>

## Methods
{{% api "_furo-collection-agent-methods.md" %}}




### **setFields**
<small>**setFields**(*fields* `String` ) ⟹ `void`</small>

<small>`String` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-fields</span>


Comma separated list of fields (like a fieldmask)
used for partial representation / partial responses.

If your services supports this feature, you will receive a subset of the fields.

- <small>*fields* Comma separated list of fields</small>
<br><br>

### **bindRequestData**
<small>**bindRequestData**(*dataObject* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-request-data</span>

Binds a furo-data-object type. Use this if you want save data.

- <small>*dataObject* </small>
<br><br>

### **setOrderBy**
<small>**setOrderBy**(*order* `String` ) ⟹ `void`</small>

<small>`String` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-order-by</span>

Sorting order

order-by="foo,-bar"  means foo asc and bar desc

https://cloud.google.com/apis/design/design_patterns#sorting_order

To avoid sql injection errors we do not send any sql like syntax!

Only useable if your service has implemented this feature.

- <small>*order* Comma separated list of sort orders</small>
<br><br>

### **clearFilter**
<small>**clearFilter**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear-filter</span>

clear the setted filter

<br><br>

### **setFilter**
<small>**setFilter**(*filterstring* `String` ) ⟹ `void`</small>

<small>`String` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-filter</span>

Set the filter.

Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.

Only useable if your service has implemented this feature.

- <small>*filterstring* String for your filter.</small>
<br><br>


### **setPageSize**
<small>**setPageSize**(*size* `Number` ) ⟹ `void`</small>

<small>`Number` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-page-size</span>

Sets pagination size in the List request.

Only useful if your service supports pagination.

- <small>*size* requested size of a page.</small>
<br><br>


### **updateQp**
<small>**updateQp**(*qp* `` *key* `Object` ) ⟹ `void`</small>

<small>`` `Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-update-qp</span>

Update query params
a qp like {"active":true} will just update the qp *active*

If the current value of the qp is not the same like the injected value, a qp-changed event will be fired

- <small>*qp* </small>
- <small>*key* value pairs</small>
<br><br>

### **setQp**
<small>**setQp**(*qp* `` *key* `Object` ) ⟹ `void`</small>

<small>`` `Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-qp</span>

Set query params
All existing query params are replaced by the transferred parameters
If the transferred object is empty, all the values will be removed!
The AgentHelper fires a qp-set event after the query params are replaced.

- <small>*qp* </small>
- <small>*key* value pairs</small>
<br><br>

### **clearQp**
<small>**clearQp**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear-qp</span>

clear the query params that you have setted before

<br><br>





### **list**
<small>**list**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-list</span>

loads the entity if hts is available

<br><br>

### **load**
<small>**load**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-load</span>

loads the entity if hts is available

<br><br>

### **loadRel**
<small>**loadRel**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-load-rel</span>

loads the entity following the link which is specified on the attribute **rel** if it is available.

<br><br>

### **searchRel**
<small>**searchRel**(*term* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-search-rel</span>

search for a term following the link which is specified on the attribute **rel**

This will set the query param q and execute the query.

- <small>*term* </small>
<br><br>

### **search**
<small>**search**(*term* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-search</span>

search for a term.

This will set the query param q and triggers a list()

- <small>*term* </small>
<br><br>

### **first**
<small>**first**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-first</span>

loads the entity if hts is available

<br><br>

### **prev**
<small>**prev**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-prev</span>

loads the entity if hts is available

<br><br>

### **next**
<small>**next**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-next</span>

loads the entity if hts is available

<br><br>

### **last**
<small>**last**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-last</span>

loads the entity if hts is available

<br><br>


### **htsIn**
<small>**htsIn**(*hts* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-hts-in</span>

Inject HATEOAS links.

- <small>*hts* </small>
<br><br>

### **abortPendingRequest**
<small>**abortPendingRequest**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-abort-pending-request</span>

Aborts a pending request

<br><br>

















{{% api "_furo-collection-agent-footer.md" %}}
{{% api "_furo-collection-agent-scripts.md" %}}
