---
title: furo-panel-coordinator
description: Complex content switcher based on furo-tree
weight: 50
---

# furo-panel-coordinator
**@furo/route** <small>v2.1.0</small>
<br>`import '@furo/route/src/furo-panel-coordinator.js';`<small>
<br>exports `<furo-panel-coordinator>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Complex content switcher based on furo-tree*</small>

{{% api "_furo-panel-coordinator-head.md" %}}

`furo-panel-coordinator`

{{% api "_furo-panel-coordinator-description.md" %}}


## Attributes and Properties
{{% api "_furo-panel-coordinator-properties.md" %}}











## Events
{{% api "_furo-panel-coordinator-events.md" %}}

### **controls-ready**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-controls-ready</span>
→ <small>`RepeaterNode`</small>

Fired when Controls for panels are ready, initially it starts with an empty set.
<br><br>

## Methods
{{% api "_furo-panel-coordinator-methods.md" %}}




### **showPage**
<small>**showPage**(*NavigationNode* `` ) ⟹ `Promise&lt;void&gt;`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-show-page</span>

Loads and shows the page based on the NavigationNode

- <small>*NavigationNode* </small>
<br><br>

### **closeAll**
<small>**closeAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-close-all</span>

This will trigger a `close-request` event all panels. Which should close themself then.

<br><br>

### **forceCloseAll**
<small>**forceCloseAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-force-close-all</span>

closes all open panels without asking

<br><br>








{{% api "_furo-panel-coordinator-footer.md" %}}
{{% api "_furo-panel-coordinator-scripts.md" %}}
