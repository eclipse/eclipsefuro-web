---
title: furo-data-object
description: Typed data object
weight: 50
---

# furo-data-object
**@furo/furo-data** <small>v2.0.0-rc.8</small>
<br>`import '@furo/furo-data/src/furo-data-object.js';`<small>
<br>exports *FuroDataObject* js
<br>exports `<furo-data-object>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *Typed data object*</small>

{{% api "_furo-data-object-head.md" %}}

`furo-data-object` gives you a object which is built based on the **type** spec.
The types must be available in the {Env}, learn more about setting up the environment in the guide.

The data will mostly be used in a [data-ui]/(../../data-input/doc) component or in component that yoh build, which contains one or more of them.

`furo-data-object` receives its data regularly from a [collection-aget](furo-collection-agent) or a  [entity-aget](furo-entity-agent).
But you can also send json data which is formed like the raw-data of this type.

`furo-data-object` will not do any validation or data manipulation neither will send the data. It is just responsible to
transform incomming data to an object and vice versa. You can access the manipulated data structure on the property
`.data.rawData` with javascript (if needed).

```html
 <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
 <furo-data-object
     type="project.Project"
     ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></furo-data-object>

 <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
 <furo-entity-agent
     service="ProjectService"
     ƒ-save="--saveClicked"
     ƒ-bind-request-data="--dataObject" @-response="--response" ></furo-entity-agent>
```

{{% api "_furo-data-object-description.md" %}}


## Attributes and Properties
{{% api "_furo-data-object-properties.md" %}}








### **type**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">type</span>
</small>

The name of the type you want to use. The type must be registered in Env
<br><br>

### **json**
</small>

get the data from the data object as raw json
<br><br>





## Events
{{% api "_furo-data-object-events.md" %}}

### **data-injected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-injected</span>
→ <small>``</small>

 Fired when injected data was processed (**bubbles**).
<br><br>
### **data-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-changed</span>
→ <small>`{Object|CollectionNode}`</small>

 Fired when data in furo-data-object has changed  (**bubbles**). This event fires a lot, consider using a de-bounce with the event.
<br><br>
### **data-changed-after-inject**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-changed-after-inject</span>
→ <small>`{Object|CollectionNode}`</small>

 Fired when data in furo-data-object has changed after injectRaw is complete (**bubbles**). This event fires a lot, consider using a de-bounce with the event.
<br><br>
### **field-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-field-value-changed</span>
→ <small>`{Object} the field node`</small>

 Fired when a field has changed.
<br><br>
### **validation-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-validation-success</span>
→ <small>`DataObject`</small>

 Fired when validation results in a valid state.
<br><br>
### **validation-failed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-validation-failed</span>
→ <small>`DataObject`</small>

 Fired when validation results in a invalid state.
<br><br>
### **data-object-became-invalid**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-object-became-invalid</span>
→ <small>`{Object|EntityNode} reference to entity`</small>

 Fired when the data object switches from ininvalid to invalid state (**bubbles**).
<br><br>
### **data-object-became-valid**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-object-became-valid</span>
→ <small>`{Object|EntityNode} reference to entity`</small>

 Fired when the data object switches from invalid to valid state (**bubbles**).
<br><br>
### **object-ready**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-object-ready</span>
→ <small>`A EntityNode object`</small>

 Fired when the object defined by `type` is built (**bubbles**).
<br><br>
### **init-completed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-init-completed</span>
→ <small>`A EntityNode object`</small>

 Fired when the object init was done (**bubbles**).
<br><br>

## Methods
{{% api "_furo-data-object-methods.md" %}}


### **injectRaw**
<small>**injectRaw**(*jsonObj* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-raw</span>

inject a raw data response from the corresonding agent.

Input may look something like this:

**Entity data**

```json
{
 "data": {},
 "links": [],
 "meta": {}
}
```

**Collection data**

```json
{
 "data": {},
 "links": [],
 "meta": {},
 "entities": []
}
```

- <small>*jsonObj* </small>
<br><br>

### **setPristine**
<small>**setPristine**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-pristine</span>

Set all nodes to pristine

Useful for working with deltas

<br><br>

### **clearAllErrors**
<small>**clearAllErrors**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear-all-errors</span>

Clears all errors on children without any validation!

<br><br>

### **validateAllFields**
<small>**validateAllFields**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-validate-all-fields</span>

Triggers the validation of all fields in the data object.

Use this before you submit some data to a server.

Will cause a `data-object-became-valid` or `data-object-became-invalid` and a validation-success or validation-failed event.

<br><br>

### **appendErrors**
<small>**appendErrors**(*grpcStatus* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-append-errors</span>

Append errors from custom methods or other agents or sources to the data object.
The error object must have a grpc status error signature like:
```json
{
 "code":3,
 "message":"invalid username",
 "details":[{
         "@type":"type.googleapis.com/google.rpc.BadRequest",
         "field_violations":[{
             "field":"user.name",
             "description":"The username must only contain alphanumeric characters"
          }]
    }]
}
```

- <small>*grpcStatus* </small>
<br><br>



### **reset**
<small>**reset**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-reset</span>

Reset the model to the last injected state.

To set the model to the initial state use init

<br><br>

### **init**
<small>**init**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-init</span>

Sets the model to an initial state according to the given type.

fires *init-completed*

To reset changed data to the last injected state, please use reset();

<br><br>

### **getData**
<small>**getData**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-get-data</span>

get the data of the data object

<br><br>






{{% api "_furo-data-object-footer.md" %}}
{{% api "_furo-data-object-scripts.md" %}}
