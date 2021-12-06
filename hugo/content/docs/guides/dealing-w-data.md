---
weight: 200
title: "Dealing with data"

---
# Dealing with data


//todo explain HTS, FieldNode, DataObject??


## Deep Linking
`Deep-link` builds static HATEOAS information based on query params and service-type.


`deep-link` generally works with `furo-lcation` and `furo-page` together. 

```html
<furo-location ..></..>
<furo-page ..></..>
<furo-deep-link ƒ-qp-in="--pageQueryChanged(*.query)" 
           service="TaskService" 
           @-hts-out="--hts"></furo-deep-link>
```           
           
assume we visit a link xxx.xx/display_task?tsk=5

element `deep-link` receives the query param {tsk: "5"} from the wire --pageQueryChanged(*.query), which is sent by `furo-page`.

after matching the service type the hts Link will be generated and a event hts-out with HATEOAS information will be sent out. 
This HATEOAS information can be used by `furo-entity-agent` or `furo-collection-agent` later. 
```html
<!-- e.g. generated hts out link -->
{rel: "delete", href: "/api/v1/tasks/5", method: "DELETE", type: task.Task}
```
## Entity Object
furo-entity-object receives the data from the furo-entity-agent and assigns those data to the internal entity-nodes.  

* ƒ-inject-raw receives the data from then furo-entity-agent
* @-object-ready can be used to bind other components to the furo-entity-agent e.g. input-fields

```html
<!-- bind a field of entity-node from furo-entity-object to a input field -->
<furo-text-input  ƒ-bind-data="--data(*.fields.display_name)" label="display name"></furo-text-input>

<furo-entity-agent service="TaskService"
              ƒ-hts-in="--hts" 
              ƒ-load="--load"
              @-response="--entityResponded"></furo-entity-agent>

<!-- inject the via furo-entity-agent received data to the entity-node of furo-entity-object. after injecting send the entity-node 
object via --data wire  -->
<furo-entity-object type="task.Task" ƒ-inject-raw="--entityResponded"
               @-object-ready="--data"></furo-entity-object>
```
## Entity Agent
An entity agent is an interface component to trigger entity requests. E.g. create, load, save and delete. 

```html
<furo-vertical-flex>
    <furo-text-input  ƒ-bind-data="--data(*.fields.display_name)" label="firstname"></furo-text-input>
    <furo-horizontal-flex>
        <furo-button label="create task" @-click="--create"></furo-button>
        <furo-empty-spacer></furo-empty-spacer>
    </furo-horizontal-flex>        
</furo-vertical-flex>

<furo-deep-link ƒ-qp-in="--pageQueryChanged(*.query)"
       service="TaskService"
       @-hts-out="--hts"></furo-deep-link>
       
<furo-entity-agent service="TaskService"
              ƒ-hts-in="--hts" 
              ƒ-create="--create"
              ƒ-bind-request-object="--data"
              @-response="--entityResponded"></furo-entity-agent>
                                      
<furo-entity-object type="task.Task" ƒ-inject-raw="--entityResponded"
               @-object-ready="--data">
</furo-entity-object>
```

## Custom Method
furo-entity-agent has only four default methods: create, load, save and delete. But you can define custom methods to
solve some special problems. for example to complete a task. For this goal you should first define a custom service 'complete' in 
the restlet specification.

##### define custom method 'complete' in restlets
```json
"Complete": {
  "description": "complete the task",
  "data": {
    "request": null,
    "response": "task.TaskEntity"
  },
  "query": {},
  "deeplink": {
    "rel": "complete",
    "method": "POST",
    "href": "/api/v1/tasks/{tsk}:complete"
  },
  ...
 
```

##### how to use

```html
<furo-location url-space-regex="^/dealing-data" @-location-changed="--pathChanged"></furo-location>
<!-- Put your views here -->

<furo-vertical-flex>
     <furo-text-input  ƒ-bind-data="--data(*.fields.display_name)" label="display name"></furo-text-input>
     <furo-number-input  ƒ-bind-data="--data(*.fields.id)" label="id"></furo-number-input>

    <furo-horizontal-flex>
        <furo-button label="complete task" @-click="--complete"></furo-button>
        <furo-empty-spacer></furo-empty-spacer>
    </furo-horizontal-flex>        
</furo-vertical-flex>        
<furo-deep-link ƒ-qp-in="--pathChanged(*.query)"
       service="TaskService"
       @-hts-out="--hts"></furo-deep-link>
       
<furo-custom-method service="TaskService"  
           method="complete" 
           ƒ-bind-request-object="--data" 
           ƒ-hts-in="--hts" 
           ƒ-trigger="--complete" 
           @-response="--htsReady" ></furo-custom-method>
                                  
<furo-entity-agent service="TaskService"
              ƒ-hts-in="--hts" 
              ƒ-load="--htsReady"
              @-response="--taskCompleteResponded"></furo-entity-agent>
              
<furo-entity-object type="task.Task" ƒ-inject-raw="--taskCompleteResponded"
       @-object-ready="--data">
```


### HTS example
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
