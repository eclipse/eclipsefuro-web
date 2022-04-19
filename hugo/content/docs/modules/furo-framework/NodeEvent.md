---
title: NodeEvent
description: 
weight: 100
---

# NodeEvent

**@furo/furo-framework** <small>v2.1.0</small>
<br>`import '@furo/framework/src/EventTreeNode.js';`<small>
<br>exports *NodeEvent* js
<br>exports *EventTreeNode* js</small>


****

Custom event type for the AST

## Attributes and Properties
{{% api "_NodeEvent-properties.md" %}}





### **type**
default: **type**</small>

Event type / name
<br><br>

### **path**
default: **[]**</small>


<br><br>

### **target**
default: **undefined**</small>


<br><br>

### **bubbles**
default: **bubbles**</small>

should the Event bubble
<br><br>

### **detail**
default: **detail**</small>

Event details
<br><br>

### **cancelBubble**
default: **false**</small>

If you are in a parent element and set this to true it will not bubble
<br><br>

### **cancelBroadcast**
default: **false**</small>

if you are in a child element and set this to true, the event will not broadcast downwards
<br><br>



## Methods
{{% api "_NodeEvent-methods.md" %}}


### **stopPropagation**
<small>**stopPropagation**() ⟹ `void`</small>

do not propagate the events to parent nodes

<br><br>

### **stopBroadcast**
<small>**stopBroadcast**() ⟹ `void`</small>

Do not broadcast to the children of this node anymore

<br><br>







