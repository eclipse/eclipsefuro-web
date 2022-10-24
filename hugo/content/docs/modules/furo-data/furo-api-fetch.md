---
title: furo-api-fetch
description: fetch data from network
weight: 50
---

# furo-api-fetch
**@furo/data** <small>v2.16.3</small>
<br>`import '@furo/data/src/furo-api-fetch.js';`<small>
<br>exports `<furo-api-fetch>` custom-element-definition
<br>superclass *HTMLElement*</small>
<br><small>summary *fetch data from network*</small>

{{% api "_furo-api-fetch-head.md" %}}

Use `furo-api-fetch` to fetch data from the network.


```html
<furo-api-fetch fn-invoke-request="--Request"></furo-api-fetch>
```

{{% api "_furo-api-fetch-description.md" %}}


## Attributes and Properties
{{% api "_furo-api-fetch-properties.md" %}}








### **lastRequest**
default: **{}**</small>

LastRequest's response.

Note that lastResponse is set when ongoing request finishes, so if loading is true,
then lastResponse will correspond to the result of the previous request.
<br><br>

### **isLoading**
default: **false**</small>

True while request is in flight.
<br><br>
## Events
{{% api "_furo-api-fetch-events.md" %}}

### **fatal-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-fatal-error</span>
→ <small>`Request`</small>

Requests are made via the Fetch API if possible.Fallback XMLHttpRequest
<br><br>
### **request-started**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-request-started</span>
→ <small>`Request`</small>

Fired when a request is sent.
<br><br>
### **request-aborted**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-request-aborted</span>
→ <small>`Request`</small>

Fired when a request was canceled.
<br><br>
### **response-raw**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-raw</span>
→ <small>`Object`</small>

Fired when a response is received.
<br><br>
### **response**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response</span>
→ <small>`Object`</small>

Fired when a response is received. Here you will get the parsed response Format depends on request header `content-type` supported types: - text/plain - application/json - image/jpeg (Blob) - application/octet-stream (ArrayBuffer) - application/pdf (Blob)
<br><br>
### **parse-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-parse-error</span>
→ <small>`CustomEvent`</small>


<br><br>
### **response-error-raw**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error-raw</span>
→ <small>`Object`</small>

Fired when a error has occoured.
<br><br>
### **response-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a general error event. The specific error events are fired additionally.
<br><br>
### ****
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-</span>
→ <small>`CustomEvent`</small>


<br><br>
### **response-error-[status-code]**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-response-error-[status-code]</span>
→ <small>`Object`</small>

Fired when an error has occoured. This is a specific error event.
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

## Methods
{{% api "_furo-api-fetch-methods.md" %}}


### **invokeRequest**
<small>**invokeRequest**(*request* `Request` ) ⟹ `void`</small>

<small>`Request` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-invoke-request</span>

Sends a HTTP request to the server

- <small>*request* (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request</small>
<br><br>

### **abortRequest**
<small>**abortRequest**(*controller* `AbortController` ) ⟹ `void`</small>

<small>`AbortController` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-abort-request</span>

Aborts a pending request
You have to submit an AbortController

- <small>*controller* (The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
https://developer.mozilla.org/en-US/docs/Web/API/AbortController</small>
<br><br>









{{% api "_furo-api-fetch-footer.md" %}}
{{% api "_furo-api-fetch-scripts.md" %}}
