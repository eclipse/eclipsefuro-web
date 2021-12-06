---
title: FBP
description: Please read the guide for a better understanding
weight: 100
---

# FBP

**@furo/furo-fbp** <small>v6.0.0-rc.5</small>
<br>`import '@furo/furo-fbp/src/src/fbp.js';`<small>
<br>exports *FBP* js</small>


**Please read the guide for a better understanding**

furo-fbp base class

[read the guide](https://fbp.furo.pro/)


### **_FBPTriggerWire**
<small>**_FBPTriggerWire**(*wire* `` *detailData* `` ) ⟹ `void`</small>

Triggers a wire

- <small>wire (String) Name of the wire like --buttonClicked</small>
- <small>detailData (*) data to pass</small>


### **_FBPAddWireHook**
<small>**_FBPAddWireHook**(*wire* `` *cb* `` *before* `` ) ⟹ `number`</small>



- <small>wire (String) Name of the wire</small>
- <small>cb (function) Callback function cb(detailData)</small>
- <small>before (Boolean) append before the components are triggered, default is false</small>


### **_FBPTraceWires**
<small>**_FBPTraceWires**() ⟹ `void`</small>

Log all triggered wires for this component. This function may help you at debugging.
Select your element in the dev console and call `$0._FBPTraceWires()`



### **_FBPDebug**
<small>**_FBPDebug**(*wire* `` *openDebugger* `` ) ⟹ `void`</small>

Get information for the triggered wire. This function may help you at debugging.
Select your element in the dev console and call `$0._FBPDebug('--dataReceived')`

- <small>wire </small>
- <small>openDebugger opens the debugger console, so you can inspect your component.</small>

## Attributes and Properties
{{% api "_FBP-properties.md" %}}






















## Methods
{{% api "_FBP-methods.md" %}}


















