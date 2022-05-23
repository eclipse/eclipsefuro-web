---
title: flow-repeat
description: Custom element to allow using FBPs template features in repeated template
weight: 50
---

# flow-repeat
**@furo/fbp** <small>v6.3.1</small>
<br>`import '@furo/fbp/src/flow-repeat.js';`<small>
<br>exports *FlowRepeat* js
<br>exports `<flow-repeat>` custom-element-definition
<br>superclass *HTMLElement*
<br> mixes *FBP*</small>
<br><small>summary *Custom element to allow using FBPs template features in repeated template*</small>

{{% api "_flow-repeat-head.md" %}}

`flow-repeat`

Custom element to repeat Arrays. The repeated items are injected *before* the `flow-repeat` element. If you need the repeated items inside of an other dom node, use [`setInsertRef`](./flow-repeat/#setinsertref)


```html
<flow-repeat ƒ-inject-items="--dataArray">
  <template>
    <repeated-item index="${this.index}" ƒ-inject="--init">
  </template>
</flow-repeat>
```
> **Note**: if you want to bind a repeater node, use `furo-data-flow-repeat`.


 ## Available wires in the template:

 > **Note**: Each repeated item has its own closed scope. You can not use the wires outside of the `template`.
 > Use events to interact with components outside of the template.

-  `--init` : contains the repeated item, fired only once on creation of the repeated node
-  `--item` : contains the repeated item, fired on every inject
-  `--firstItem` : contains the repeated item, fired on the first element.
-  `--lastItem` : contains the repeated item, fired on the last element.
-  `--index` : contains a number with the index of the element.
-  `--host` : contains a reference to the host component.
-  `--trigger` : contains what was passed in to the triggering method.
-  `--triggerFirst` : contains what was passed in to the triggering method.
-  `--triggerLast` : contains what was passed in to the triggering method.
-  `--itemSelected` : contains nothing, is triggered with select(index).
-  `--itemDeSelected` : contains nothing, is triggered when another item is selected with select(index).

## Available attributes
**index** contains the current index of the item. Use this to fire a event with an index like `@-click="^^item-clicked(index)"`
**item** contains the current index of the item. Use this to fire a event with the repeated item like `@-click="^^item-selected(item)"`

{{% api "_flow-repeat-description.md" %}}


## Attributes and Properties
{{% api "_flow-repeat-properties.md" %}}






































## Events
{{% api "_flow-repeat-events.md" %}}

### **last-element-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-last-element-selected</span>
→ <small>`index of the element`</small>

 Fired when the last element is selected. Use this to trigger a load next.
<br><br>
### **items-in-dom**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-items-in-dom</span>
→ <small>`Number`</small>

 Fired when items are attached to the dom, with Number of items.
<br><br>

## Methods
{{% api "_flow-repeat-methods.md" %}}


### **clear**
<small>**clear**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear</span>

Clear the list

<br><br>

### **select**
<small>**select**(*index* `int` ) ⟹ `void`</small>

<small>`int` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-select</span>

Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item.

- <small>*index* Index of item to select</small>
<br><br>

### **selectIdentity**
<small>**selectIdentity**(*identifier* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-select-identity</span>

Select item by its identity.

Using this method only works when you have set the `identity-path`.

- <small>*identifier* Identity from `identity-path`</small>
<br><br>

### **selectNextIndex**
<small>**selectNextIndex**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-select-next-index</span>

Selects next index.  If none was selected, the first index will be selected.

If you reached the last index, the first index will be selected.

If you reach the last element, `last-element-selected` will fire.

Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item

<br><br>

### **selectPreviousIndex**
<small>**selectPreviousIndex**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-select-previous-index</span>

Selects the previous index.

If you are on the first item, the last will be selected.

Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item

<br><br>

### **triggerSelected**
<small>**triggerSelected**(*data* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-selected</span>

Triggers the currently selected item.

Triggers the wire `--trigger` on the every item.

Triggers the wire `--triggerIndex` on the every item.

- <small>*data* Data to forward.</small>
<br><br>

### **triggerAll**
<small>**triggerAll**(*data* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-all</span>

Triggers all nodes.

Triggers the wire `--trigger` on the every item.

Triggers the wire `--triggerIndex` on the every item.

- <small>*data* data to forward</small>
<br><br>

### **deselect**
<small>**deselect**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-deselect</span>

Triggers the wire `--itemDeSelected` on the last selected item

<br><br>

### **setInsertRef**
<small>**setInsertRef**(*ref* `DomNode` ) ⟹ `void`</small>

<small>`DomNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-insert-ref</span>

Set a reference to append the repeated elements in to the ref instead of appending them before the repeater itself.

- <small>*ref* Node to append the repeated items.</small>
<br><br>


### **deselectAll**
<small>**deselectAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-deselect-all</span>

Triggers the wire `--itemDeSelected` on all items

<br><br>


### **injectItems**
<small>**injectItems**(*items* `Array` ) ⟹ `void`</small>

<small>`Array` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject-items</span>

Inject items to repeat.

- <small>*items* Items to repeat</small>
<br><br>


### **triggerFirst**
<small>**triggerFirst**(*data* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-first</span>

Triggers the wire `--trigger` on the first item.

Triggers the wire --triggerFirst on the first item.

- <small>*data* data to forward to the item.</small>
<br><br>

### **triggerLast**
<small>**triggerLast**(*data* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-last</span>

Triggers the wire `--trigger` on the last item.

Triggers the wire --triggerLast on the last item.

- <small>*data* data to forward to the item.</small>
<br><br>

### **triggerIndex**
<small>**triggerIndex**(*i* `int` *data* `*` ) ⟹ `void`</small>

<small>`int` `*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-index</span>

Triggers the wire `--trigger` on the  item.

Triggers the wire `--triggerIndex` on the  item.

- <small>*i* index of item that you want to trigger.</small>
- <small>*data* data to forward to the item.</small>
<br><br>























{{% api "_flow-repeat-footer.md" %}}
{{% api "_flow-repeat-scripts.md" %}}
