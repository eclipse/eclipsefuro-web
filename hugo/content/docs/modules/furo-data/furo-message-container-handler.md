---
title: furo-message-container-handler
description: furo.MessageContainer handler
weight: 50
---

# furo-message-container-handler
**@furo/data** <small>v2.16.4</small>
<br>`import '@furo/data/src/furo-message-container-handler.js';`<small>
<br>exports `<furo-message-container-handler>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *furo.MessageContainer handler*</small>

{{% api "_furo-message-container-handler-head.md" %}}

`furo-message-container-handler`
 will update the 'value states' of all fields of your data object from the injected `furo.MessageContainer` message.

{{% api "_furo-message-container-handler-description.md" %}}


## Attributes and Properties
{{% api "_furo-message-container-handler-properties.md" %}}










## Events
{{% api "_furo-message-container-handler-events.md" %}}

### **success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-success</span>
→ <small>`void`</small>

Fired when success field was set on the received `furo.MessageContainer`.
<br><br>
### **no-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-no-success</span>
→ <small>`void`</small>

Fired when the success field on the `furo.MessageContainer` was not set or is set to false.
<br><br>
### **has-confirmation**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-has-confirmation</span>
→ <small>`[]furo.ConfirmationMessage`</small>

Fired when the message container contains any confirmation field, with list with all `furo.ConfirmationMessage`.
<br><br>
### **has-errors**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-has-errors</span>
→ <small>`[]furo.MCFieldViolation`</small>

Fired when the message container contains any error field, with list with all error fields.
<br><br>
### **has-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-has-success</span>
→ <small>`[]furo.MCFieldViolation`</small>

Fired when the message container contains any success field, with list with all success fields.
<br><br>
### **has-warnings**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-has-warnings</span>
→ <small>`[]furo.MCFieldViolation`</small>

Fired when the message container contains any warning field, with list with all warning fields.
<br><br>
### **has-infos**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-has-infos</span>
→ <small>`[]furo.MCFieldViolation`</small>

Fired when the message container contains any info field, with list with all info fields.
<br><br>

## Methods
{{% api "_furo-message-container-handler-methods.md" %}}


### **injectRaw**
<small>**injectRaw**(*messageContainer* `JSON` ) ⟹ `void`</small>

<small>`JSON` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject-raw</span>

This will set the corresponding value-states on the sibling nodes of the bounded `furo.MessageContainer` field.

- <small>*messageContainer* with `furo.MessageContainer` signature</small>
<br><br>

### **_updateCountersAndFireEvents**
<small>**_updateCountersAndFireEvents**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--update-counters-and-fire-events</span>



<br><br>

### **_applyValueState**
<small>**_applyValueState**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--apply-value-state</span>



<br><br>

### **_clearValueStates**
<small>**_clearValueStates**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--clear-value-states</span>



<br><br>

### **bindMessageContainer**
<small>**bindMessageContainer**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-message-container</span>

bindMc Bind a `furo.MessageContainer` fieldnode.

The updates from the injected raw messagecontainer are applied to the siblings of the bounded node.

- <small>*fieldNode* Messagecontainer fieldnode</small>
<br><br>

### **bindRootNode**
<small>**bindRootNode**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-root-node</span>

bindMc Bind a `furo.MessageContainer` fieldnode.

The updates from the injected raw messagecontainer are applied to the siblings of the bounded node.

- <small>*fieldNode* Messagecontainer fieldnode</small>
<br><br>






{{% api "_furo-message-container-handler-footer.md" %}}
{{% api "_furo-message-container-handler-scripts.md" %}}
