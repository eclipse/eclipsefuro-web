# Dealing with data

## Deep Linking
`Deep-link` builds static HATEOAS information based on query params and service-type.


`deep-link` generally works with `furo-lcation` and `furo-page` together. 

```html
<furo-location ..></..>
<furo-page ..></..>
<deep-link ƒ-qp-in="--pageQueryChanged(*.query)" 
           service="task" 
           @-hts-out="--hts"></deep-link>
```           
           
assume we visit a link xxx.xx/display_task?tsk=5

element `deep-link` receives the query param {tsk: "5"} from the wire --pageQueryChanged(*.query), which is sent by `furo-page`.

after matching the service type the hts Link will be generated and a event hts-out with HATEOAS information will be sent out. 
This HATEOAS information can be used by `entity-agent` or `collection-agent` later. 
```html
<!-- e.g. generated hts out link -->
{rel: "delete", href: "/api/v1/tasks/5", method: "DELETE", type: vnd.com.furo.task}
```
## Entity Object
Entity-Object receives the data from the Entity-Agent and assigns those data to the internal entity-nodes.  

* ƒ-inject-raw receives the data from then entity-agent
* @-object-ready can be used to bind other components to the entity-agent e.g. input-fields

```html
<!-- bind a field of entity-node from entity-object to a input field -->
<furo-text-input  ƒ-bind-data="--data(*.fields.display_name)" label="display name"></furo-text-input>

<entity-agent service="task"
              ƒ-hts-in="--hts" 
              ƒ-load="--load"
              @-response="--entityResponded"></entity-agent>

<!-- inject the via entity-agent received data to the entity-node of entity-object. after injecting send the entity-node 
object via --data wire  -->
<entity-object type="vnd.com.furo.task" ƒ-inject-raw="--entityResponded"
               @-object-ready="--data"></entity-object>
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

<deep-link ƒ-qp-in="--pageQueryChanged(*.query)"
       service="task"
       @-hts-out="--hts"></deep-link>
       
<entity-agent service="task"
              ƒ-hts-in="--hts" 
              ƒ-create="--create"
              ƒ-bind-request-object="--data"
              @-response="--entityResponded"></entity-agent>
                                      
<entity-object type="vnd.com.furo.task" ƒ-inject-raw="--entityResponded"
               @-object-ready="--data">
</entity-object>
```

## Custom Method
Entity-agent has only four default methods: create, load, save and delete. But you can define custom methods to
solve some special problems. for example to complete a task. For this goal you should first define a custom service 'complete' in 
the restlet specification.

##### define custom method 'complete' in restlets
```json
"Complete": {
  "description": "complete the task",
  "data": {
    "request": null,
    "response": "vnd.com.furo.task"
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
<deep-link ƒ-qp-in="--pathChanged(*.query)"
       service="task"
       @-hts-out="--hts"></deep-link>
       
<custom-method service="task"  
           method="complete" 
           ƒ-bind-request-object="--data" 
           ƒ-hts-in="--hts" 
           ƒ-trigger="--complete" 
           @-response="--htsReady" ></custom-method>
                                  
<entity-agent service="task"
              ƒ-hts-in="--hts" 
              ƒ-load="--htsReady"
              @-response="--taskCompleteResponded"></entity-agent>
              
<entity-object type="vnd.com.furo.task" ƒ-inject-raw="--taskCompleteResponded"
       @-object-ready="--data">
```
