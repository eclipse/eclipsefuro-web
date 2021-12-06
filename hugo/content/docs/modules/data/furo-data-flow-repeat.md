---
title: furo-data-flow-repeat
description: automatic display of repeated fields
weight: 50
---

# furo-data-flow-repeat
**@furo/data** <small>v2.0.0-rc.5</small>
<br>`import '@furo/data/src/furo-data-flow-repeat.js';`<small>
<br>exports *FuroDataFlowRepeat* js
<br>exports `<furo-data-flow-repeat>` custom-element-definition
<br>superclass *FlowRepeat*
<br> mixes *FieldNodeAdapter*</small>
<br><small>summary *automatic display of repeated fields*</small>

{{% api "_furo-data-flow-repeat-head.md" %}}

`furo-data-flow-repeat` Is a bindable repeater.


 ```html
 <furo-data-flow-repeat ƒ-bind-data="--data(*.repeaterfield)">
   <template>
     <furo-ui5-data-text-input-labeled
         ƒ-bind-data="--init"></furo-ui5-data-text-input-labeled>
   </template>
 </furo-data-flow-repeat>
 ```
 *The wire `--init` is fired from furo-data-flow-repeat*

 If you want to delete a repeated item, implement something which triggers the `deleteNode` method on the fieldNode itself.

 ## Available wires in the template:

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

{{% api "_furo-data-flow-repeat-description.md" %}}


## Attributes and Properties
{{% api "_furo-data-flow-repeat-properties.md" %}}





### **selectAddedItem**
default: **false**</small>

Enable this to select the created item. This will trigger a wire `--itemSelected` which can be wired to
`ƒ-focus="--itemSelected"`.
<br><br>




















## Methods
{{% api "_furo-data-flow-repeat-methods.md" %}}



### **add**
<small>**add**(*data* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-add</span>

Adds a repeated item of the same type.

- <small>*data* Object that match the type of the repeated node.</small>
<br><br>





### **bindData**
<small>**bindData**(*fieldNode* `FieldNode|RepeaterNode` ) ⟹ `void`</small>

<small>`FieldNode|RepeaterNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.

- <small>*fieldNode* FieldNode or RepeaterNode</small>
<br><br>



















{{% api "_furo-data-flow-repeat-footer.md" %}}
{{% api "_furo-data-flow-repeat-scripts.md" %}}
