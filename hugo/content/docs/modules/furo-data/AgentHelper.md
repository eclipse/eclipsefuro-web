---
title: AgentHelper
description: 
weight: 100
---

# AgentHelper

**@furo/furo-data** <small>v2.2.2</small>
<br>`import '@furo/data/src/lib/AgentHelper.js';`<small>
<br>exports *AgentHelper* js</small>


****

## This is a helper class for the agents

Update query params
a qp like {"active":true} will just update the qp *active*

If the current value of the qp is not the same like the injected value, a qp-changed event will be fired

## Attributes and Properties
{{% api "_AgentHelper-properties.md" %}}












## Methods
{{% api "_AgentHelper-methods.md" %}}


### **updateQp**
<small>**updateQp**(*caller* `` *qp* `` ) ⟹ `void`</small>



- <small>*caller* </small>
- <small>*qp* </small>
<br><br>

### **setQp**
<small>**setQp**(*caller* `Object` *qp* `QueryParams` ) ⟹ `void`</small>

Set query params
All existing query params are replaced by the transferred parameters
If the transferred object is empty or undefined, all the values will be removed!

- <small>*caller* caller</small>
- <small>*qp* Queryparam Object</small>
<br><br>

### **getParams**
<small>**getParams**(*caller* `` *link* `` ) ⟹ `Object`</small>

get existing params from href and append query params

- <small>*caller* </small>
- <small>*link* </small>
<br><br>

### **rebuildQPFromParams**
<small>**rebuildQPFromParams**(*params* `` ) ⟹ `[]`</small>

rebuild qp from params

- <small>*params* </small>
<br><br>

### **generateHeaderAccept**
<small>**generateHeaderAccept**(*caller* `` *services* `` *rel* `` ) ⟹ `string`</small>

generate accept field for header

- <small>*caller* </small>
- <small>*services* </small>
- <small>*rel* </small>
<br><br>

### **generateReq**
<small>**generateReq**(*link* `` *qp* `` ) ⟹ `string`</small>

generate request url from original link and qp

- <small>*link* </small>
- <small>*qp* </small>
<br><br>

