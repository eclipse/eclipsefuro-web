---
title: furo-head-tail
description: split an array
weight: 50
---

# furo-head-tail
**@furo/util** <small>v2.1.19</small>
<br>`import '@furo/util/src/furo-head-tail.js';`<small>
<br>exports *FuroHeadTail* js
<br>exports `<furo-head-tail>` custom-element-definition
<br>superclass *HTMLElement*</small>
<br><small>summary *split an array*</small>

{{% api "_furo-head-tail-head.md" %}}


`furo-head-tail`
 Splits an iterable (i.e. Array) in its head and tail part.

```
 <furo-head-tail fn-split="--arrayData" at-head="--firstElement" at-tail="--restOfArray"></furo-head-tail>
```

{{% api "_furo-head-tail-description.md" %}}


## Attributes and Properties
{{% api "_furo-head-tail-properties.md" %}}



## Events
{{% api "_furo-head-tail-events.md" %}}

### **head**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-head</span>
→ <small>`{Any}`</small>

 Fired when Array was splitted, contains the first element of array.
<br><br>
### **tail**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-tail</span>
→ <small>`Array | Any`</small>

 Fired when Array was splitted. {Array || Any} is the tail from the injected array (e1 - 1n)
<br><br>

## Methods
{{% api "_furo-head-tail-methods.md" %}}


### **split**
<small>**split**(*iterable* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-split</span>

Splits an iterable to its head (first item) and its tail (the rest) parts.

```
["a", "b", "c", "d"]
 |_|  |___________|
  ^      ^
  |      |
  |     TAIL   => ["b", "c", "d"]
 HEAD          => "a"
```

- <small>*iterable* </small>
<br><br>




{{% api "_furo-head-tail-footer.md" %}}
{{% api "_furo-head-tail-scripts.md" %}}
