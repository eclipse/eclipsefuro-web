---
title: furo-interval-pulse
description: trigger an event in intervals
weight: 50
---

# furo-interval-pulse
**@furo/util** <small>v2.0.5</small>
<br>`import '@furo/util/src/furo-interval-pulse.js';`<small>
<br>exports `<furo-interval-pulse>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *trigger an event in intervals*</small>

{{% api "_furo-interval-pulse-head.md" %}}

`furo-interval-pulse`

Pulses a tick event every `interval` ms duration and every `takt` a tock event is also fired.

{{% api "_furo-interval-pulse-description.md" %}}


## Attributes and Properties
{{% api "_furo-interval-pulse-properties.md" %}}





### **interval**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">interval</span>
<small>`number` default: **200**</small>

Duration of a tact in ms.
<br><br>

### **takt**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">takt</span>
<small>`number` default: **4**</small>

Number of ticks per tact.
<br><br>

### **auto**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">auto</span>
</small>

Starts interval automatically
<br><br>
## Events
{{% api "_furo-interval-pulse-events.md" %}}

### **tick**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-tick</span>
→ <small>`Number`</small>

Fired on every interval with the position of the pulse starting at 0.
<br><br>
### **tock**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-tock</span>
→ <small>`Number`</small>

Fired nth interval defined by takt.
<br><br>

## Methods
{{% api "_furo-interval-pulse-methods.md" %}}


### **start**
<small>**start**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-start</span>

Starts the pulsing.

<br><br>

### **stop**
<small>**stop**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-stop</span>

Stops the pulsing.

<br><br>







{{% api "_furo-interval-pulse-footer.md" %}}
{{% api "_furo-interval-pulse-scripts.md" %}}
