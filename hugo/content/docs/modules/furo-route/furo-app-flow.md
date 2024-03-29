---
title: furo-app-flow
description: Application Flow =&gt; routing
weight: 50
---

# furo-app-flow
**@furo/route** <small>v2.6.13</small>
<br>`import '@furo/route/src/furo-app-flow.js';`<small>
<br>exports *FuroAppFlow* js
<br>exports `<furo-app-flow>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *Application Flow =&gt; routing*</small>

{{% api "_furo-app-flow-head.md" %}}

`furo-app-flow` triggers the flow events for the `app-flow-router`.

{{% api "_furo-app-flow-description.md" %}}


## Attributes and Properties
{{% api "_furo-app-flow-properties.md" %}}




### **qp**
</small>

Deprecated, use the setQp method instead
<br><br>



### **display**
default: **&#39;none&#39;**</small>


<br><br>

### **event**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">event</span>
<small>`String` </small>

Name of your app-flow event object

i.e. 'task-clicked', 'wizard-step1-completed',...
<br><br>
## Events
{{% api "_furo-app-flow-events.md" %}}

### **app-flow**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-app-flow</span>
→ <small>`data`</small>

 App-flow event with app-flow object will be fired when you trigger the `emit` function.
<br><br>

## Methods
{{% api "_furo-app-flow-methods.md" %}}


### **setQp**
<small>**setQp**(*qp* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-qp</span>

Use this to explicitly set the query params.

This is useful if you use the `trigger` method.

- <small>*qp* Object with key value pairs</small>
<br><br>


### **trigger**
<small>**trigger**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger</span>

Triggers the flow event (with the qp that was set before)

<br><br>

### **emit**
<small>**emit**(*queryParams* `` *QueryParam* `object|QueryParams` ) ⟹ `void`</small>

<small>`` `object|QueryParams` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-emit</span>

fire the app-flow event

- <small>*queryParams* </small>
- <small>*QueryParam* Object</small>
<br><br>






{{% api "_furo-app-flow-footer.md" %}}
{{% api "_furo-app-flow-scripts.md" %}}
