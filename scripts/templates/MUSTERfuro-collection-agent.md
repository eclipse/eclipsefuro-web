---
title: furo-collection-agent
---

# furo-collection-agent
**@furo/data** <small>v0.12.0</small> <br>
`import '@furo/data/src/furo-collection-agent.js';`

{{% api "furo-collection-agent-head.md" %}}

furo-collection-agent can be used for network requests via FETCH API

```html
<furo-collection-agent
    service="Servicename"
    ƒ-hts-in="--hts"
    list-on-hts-in
></furo-collection-agent>
```

<furo-demo-snippet no-demo flow>
<template>
<!-- the furo-deep-link produces the hateoas links for the agent -->
<furo-deep-link service="ProjectService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
<!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
<furo-collection-agent service="ProjectService" ƒ-hts-in="--hts" list-on-hts-in="" @-response="--response"></furo-collection-agent>
<!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
<furo-data-object type="project.ProjectCollection" ƒ-inject-raw="--response" @-object-ready="--dataObject"></furo-data-object>
</template>
</furo-demo-snippet>

{{% api "furo-collection-agent-description.md" %}}

## Attributes and Properties
{{% api "furo-collection-agent-properties.md" %}}

### **list-on-hts-in**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">list-on-hts-in</span> <small>`Boolean` default: **true**</small> 

Executes a list when a `rel=“list”` was injected.

### **lastRequest**
<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">last-request</span>
<small>`Object` default: **undefined**</small> 

LastRequest's response.

Note that lastResponse is set when ongoing request finishes, so if loading is true,
then lastResponse will correspond to the result of the previous request.


## Events
### **hts-out**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-hts-out</span>
→ <small>`Number`</small>

hts-updated Fired when detail payload
```json
[
  {
    "rel": "list",
    "href": "/api/mockdata/tasks/list.json",
    "method": "GET",
    "service": "TaskService"
   },
  {
    "rel": "create",
    "href": "api.otherhost.com/mockdata/tasks",
    "method": "PUT",
    "service": "TaskService"
  }
]
```

## Methods
{{% api "furo-collection-agent-methods.md" %}}

### **htsIn**  
<small>**htsIn**(*hts* `HATEOAS`) ⟹ `void`</small> 

<small>`HATEOAS`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-hts-in</span>

Inject HATEOAS links.
You can throw in a HTS Array or link



### **invokeRequest**  
<small>**invokeRequest**(*request* `REQUEST`) ⟹ `void`</small>


<small>`REQUEST`</small>  →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-invoke-request</span>


Sends a HTTP request to the server
(The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request"


## Slots
{{% api "furo-collection-agent-slots.md" %}}

### **default**
This is an unnamed slot (the default slot)

### **nos**
Type: `Node [0..n]`

Defines the text of the ui5-badge.
Note: Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

### **icon**
Type: `HTMLElement`

Defines the ui5-icon to be displayed in the ui5-badge.



{{% api "furo-collection-agent-footer.md" %}}
{{% api "furo-collection-agent-scripts.md" %}}
