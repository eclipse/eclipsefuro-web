---
title: furo-de-bounce
description: event de bouncer
weight: 50
---

# furo-de-bounce
**@furo/util** <small>v2.0.11</small>
<br>`import '@furo/util/src/furo-de-bounce.js';`<small>
<br>exports `<furo-de-bounce>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *event de bouncer*</small>

{{% api "_furo-de-bounce-head.md" %}}

The Debounce technique allow us to “group” multiple sequential calls in a single one.

[Read more about debouncing here](https://css-tricks.com/debouncing-throttling-explained-examples/)



```html
<furo-de-bounce
    fn-trigger="--searchStringEntered" at-debounced="--debouncedSrch"
    ></furo-de-bounce>
```

{{% api "_furo-de-bounce-description.md" %}}


## Attributes and Properties
{{% api "_furo-de-bounce-properties.md" %}}




### **immediate**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">immediate</span>
<small>`Boolean` </small>

If true, input-wire is triggered immediatley (leading edge instead of trailing)
Default value: false
<br><br>

### **wait**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">wait</span>
<small>`Number` </small>

Debounce time in milliseconds
Default value: 250
<br><br>






## Events
{{% api "_furo-de-bounce-events.md" %}}

### **out**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-out</span>
→ <small>`*`</small>

deprecated, use debounced instead. // TODO: remove @out and fn-input-wire in q2 2022
<br><br>
### **debounced**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-debounced</span>
→ <small>`*`</small>

Fired after N milliseconds. If `immediate`is set to TRUE, it fires on the leading edge.
<br><br>

## Methods
{{% api "_furo-de-bounce-methods.md" %}}






### **trigger**
<small>**trigger**(*data* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger</span>

Trigger the debounce

- <small>*data* Any data, will be dispatched on the `debounced` event.</small>
<br><br>








{{% api "_furo-de-bounce-footer.md" %}}
{{% api "_furo-de-bounce-scripts.md" %}}
