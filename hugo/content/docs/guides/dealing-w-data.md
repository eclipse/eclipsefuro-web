---
weight: 6
title: "Dealing with data"

---
# Dealing with data
## Overview


{{< mermaid >}}
flowchart LR
I1(Input Component) -. data binding --- DO(Data Object);
I2(Custom Component) -. data binding --- DO(Data Object);
DO -- set data --> A(Entity Agent);
A -- updates --> DO;
A <-- fetch / update --> API[(Rest API)];
SB(Save Button) -- triggers --> A
LB(Load Button) -- triggers --> A
{{< /mermaid >}}



## Data Object

The `furo-data-object` translates raw `JSON` to objects which are usable for the 
UI components and vice versa. 


{{< mermaid >}}
flowchart LR
I1(Input Component) -. data binding --- DO(Data Object);
I2(Custom Component) -. data binding --- DO(Data Object);
DO -- produces --> JSON
JSON -- consumes --> DO
{{< /mermaid >}}


```html
<furo-ui5-text-input  
  ƒ-bind-data="--taskDO(*.fields.display_name)"></furo-ui5-text-input>


<furo-data-object
  type="task.Task"
  ƒ-inject-raw="--rawJsonData"
  @-object-ready="--taskDO"></furo-data-object>

```



## Entity Agent
The main task of the `furo-entity-agent` is to communicating with REST API's.

It exposes a simple API for **saving**, **loading**, **creating** and **deleting** stuff on the server side.

{{< mermaid >}}
flowchart LR
DO(Data Object) -- object --> A(Entity Agent);
A -- json --> DO;
A -- json --> API[(Rest API)];
API -- json --> A
{{< /mermaid >}}



```html
<furo-data-object
  type="task.Task"
  ƒ-inject-raw="--rawJsonData"
  @-object-ready="--taskDO">
</furo-data-object>

<furo-entity-agent 
  service="TaskService"
  ƒ-create="--createClicked"
  ƒ-hts-in="--hts"
  ƒ-bind-request-object="--taskDO"
  @-response="--rawJsonData"></furo-entity-agent>
```


## Hateoas

`furo-deep-link` builds static HATEOAS information based on query params and service-type.

The HATEOAS data is used by the `furo-entity-agent` to resolve the locations it has to send the requests to.


{{< mermaid >}}
flowchart LR
DL(Deep Link) -- HATEOAS --> A(Entity Agent);
QP[Query Params] -- json --> DL
{{< /mermaid >}}


```html
<furo-deep-link
  ƒ-qp-in="--pageURLChanged(*.query)"
  service="TaskService"
  @-hts-out="--hts"></furo-deep-link>

<furo-location 
  @-location-changed='--pageURLChanged' 
></furo-location>
```           
           
Assume we visit a link like `my.app.com/display_task?tsk=5`

`furo-deep-link` receives the query params  `{"tsk": "5"}` from `furo-location`.

It will then produce the **HATEOAS** links according to the specified service.

```json
[
  {
    "rel": "self",
    "href": "/api/v1/tasks/5",
    "method": "GET",
    "type": "task.Task",
    "service": "TaskService"
  },
  {
    "rel": "delete",
    "href": "/api/v1/tasks/5",
    "method": "DELETE",
    "type": "task.Task",
    "service": "TaskService"
  },
  {
    "rel": "create",
    "href": "/api/v1/tasks",
    "method": "POST",
    "type": "task.Task",
    "service": "TaskService"
  }
]
```

